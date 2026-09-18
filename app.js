// =====================================================================
// KANA DATABASE
// =====================================================================
const KANA_DB = {
    Hiragana: {
        "Hàng A, Ka, Sa...": {
            "あ":["a"], "い":["i"], "う":["u"], "え":["e"], "お":["o"],
            "か":["ka"], "き":["ki"], "く":["ku"], "け":["ke"], "こ":["ko"],
            "さ":["sa"], "し":["shi","si"], "す":["su"], "せ":["se"], "そ":["so"],
            "た":["ta"], "ち":["chi","ti"], "つ":["tsu","tu"], "て":["te"], "と":["to"],
            "な":["na"], "に":["ni"], "ぬ":["nu"], "ね":["ne"], "の":["no"],
            "は":["ha"], "ひ":["hi"], "ふ":["fu","hu"], "へ":["he"], "ほ":["ho"],
            "ま":["ma"], "み":["mi"], "む":["mu"], "め":["me"], "も":["mo"],
            "や":["ya"], "ゆ":["yu"], "よ":["yo"],
            "ら":["ra"], "り":["ri"], "る":["ru"], "れ":["re"], "ろ":["ro"],
            "わ":["wa"], "を":["o","wo"], "ん":["n","nn"]
        }
    },
    Katakana: {
        "Hàng A, Ka, Sa...": {
            "ア":["a"], "イ":["i"], "ウ":["u"], "エ":["e"], "オ":["o"],
            "カ":["ka"], "キ":["ki"], "ク":["ku"], "ケ":["ke"], "コ":["ko"],
            "サ":["sa"], "シ":["shi","si"], "ス":["su"], "セ":["se"], "ソ":["so"],
            "タ":["ta"], "チ":["chi","ti"], "ツ":["tsu","tu"], "テ":["te"], "ト":["to"]
        }
    }
};

// =====================================================================
// STATE & STORAGE
// =====================================================================
let activePool = [];
let currentChar = "", currentAnswers = [], currentScript = "";
let combo = 0, correctCount = 0, wrongCount = 0;
let historyData = JSON.parse(localStorage.getItem('kanaHistory')) || {};

// =====================================================================
// INITIALIZATION
// =====================================================================
document.addEventListener("DOMContentLoaded", () => {
    initTabs();
    initCheckboxes();
    initDrawingPad();
    updatePool();

    document.getElementById("kana-input").addEventListener("input", handlePracticeInput);
    document.getElementById("btn-pronounce").addEventListener("click", playPronunciation);
});

function initTabs() {
    const btns = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(btn.dataset.target).classList.add('active');

            if (btn.dataset.target === 'history') renderHistory();
            if (btn.dataset.target === 'stats') renderStats();
        });
    });
}

function initCheckboxes() {
    const container = document.getElementById('pool-selection');
    Object.keys(KANA_DB).forEach(script => {
        const lbl = document.createElement('label');
        lbl.innerHTML = `<input type="checkbox" value="${script}" checked onchange="updatePool()"> ${script}`;
        container.appendChild(lbl);
    });
}

// =====================================================================
// TAB 1: PRACTICE LOGIC
// =====================================================================
function updatePool() {
    activePool = [];
    const checkboxes = document.querySelectorAll('#pool-selection input:checked');
    const selectedScripts = Array.from(checkboxes).map(cb => cb.value);

    selectedScripts.forEach(script => {
        const groups = KANA_DB[script];
        for (let group in groups) {
            for (let char in groups[group]) {
                activePool.push({ char, answers: groups[group][char], script });
            }
        }
    });

    if (activePool.length === 0) {
        document.getElementById('kana-display').innerText = "-";
        document.getElementById('feedback').innerText = "Vui lòng chọn ít nhất 1 bảng!";
        document.getElementById('feedback').style.color = "red";
    } else {
        document.getElementById('feedback').innerText = "";
        nextKana();
    }
}

function nextKana() {
    if (activePool.length === 0) return;
    const rnd = activePool[Math.floor(Math.random() * activePool.length)];
    currentChar = rnd.char;
    currentAnswers = rnd.answers;
    currentScript = rnd.script;

    document.getElementById('kana-display').innerText = currentChar;
    document.getElementById('script-badge').innerText = `[${currentScript}]`;
    document.getElementById('kana-input').value = "";
    
    // Also sync the writing pad
    nextWriteKana(currentChar, currentAnswers[0]);
}

function handlePracticeInput(e) {
    const input = e.target.value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    if (currentAnswers.includes(input) || input === currentChar) {
        combo++;
        correctCount++;
        saveData(currentChar, currentScript, true);
        feedback.innerText = "Chính xác!";
        feedback.style.color = "green";
        updateStatsUI();
        setTimeout(nextKana, 250);
    } else if (input.length >= currentAnswers[0].length && !currentAnswers.some(ans => ans.startsWith(input))) {
        // Only trigger wrong if they typed enough chars and it's definitely wrong
        combo = 0;
        wrongCount++;
        saveData(currentChar, currentScript, false);
        feedback.innerText = `Sai! Đáp án: ${currentAnswers[0]}`;
        feedback.style.color = "red";
        e.target.value = "";
        updateStatsUI();
        setTimeout(nextKana, 1500);
    }
}

function updateStatsUI() {
    document.getElementById('combo-display').innerText = `Combo: ${combo}`;
    document.getElementById('score-display').innerText = `✅ ${correctCount} | ❌ ${wrongCount}`;
}

// =====================================================================
// TAB 2: WRITING PAD & ALGORITHM
// =====================================================================
let canvas, ctx, hiddenCanvas, hiddenCtx;
let isDrawing = false;
let currentWriteChar = "", currentWriteRomaji = "";

function initDrawingPad() {
    canvas = document.getElementById('drawing-pad');
    ctx = canvas.getContext('2d');
    hiddenCanvas = document.getElementById('hidden-canvas');
    hiddenCtx = hiddenCanvas.getContext('2d');

    // Setup Canvas styles
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    // Mouse Events
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', draw);

    // Touch Events for Mobile
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startPos(e.touches[0]); }, {passive: false});
    canvas.addEventListener('touchend', (e) => { e.preventDefault(); endPos(); }, {passive: false});
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e.touches[0]); }, {passive: false});

    document.getElementById('btn-clear').addEventListener('click', clearPad);
    document.getElementById('btn-check').addEventListener('click', checkDrawing);
    document.getElementById('btn-next-write').addEventListener('click', () => { clearPad(); nextKana(); });
}

function nextWriteKana(char, romaji) {
    currentWriteChar = char;
    currentWriteRomaji = romaji;
    document.getElementById('write-romaji-target').innerText = romaji;
    document.getElementById('drawing-guide').innerText = ""; // Optional: set to char for tracing
    clearPad();
}

function startPos(e) {
    isDrawing = true;
    draw(e);
}
function endPos() {
    isDrawing = false;
    ctx.beginPath();
}
function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
function clearPad() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('writing-feedback').innerText = "Độ chính xác: --%";
    document.getElementById('writing-feedback').style.color = "var(--text)";
    document.getElementById('drawing-guide').innerText = "";
}

function playPronunciation() {
    if (!('speechSynthesis' in window)) return alert("Trình duyệt không hỗ trợ đọc âm thanh!");
    let utterance = new SpeechSynthesisUtterance(currentWriteChar); // Read the Kana character natively
    utterance.lang = 'ja-JP';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

// The Pixel Comparison Logic
function checkDrawing() {
    // 1. Render the perfect font on the hidden canvas
    hiddenCtx.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);
    hiddenCtx.font = "200px 'Klee One', sans-serif";
    hiddenCtx.textAlign = "center";
    hiddenCtx.textBaseline = "middle";
    hiddenCtx.fillStyle = "#000";
    hiddenCtx.fillText(currentWriteChar, 150, 150);

    // 2. Get ImageData arrays
    const userImg = ctx.getImageData(0, 0, 300, 300).data;
    const targetImg = hiddenCtx.getImageData(0, 0, 300, 300).data;

    let overlap = 0;
    let totalTargetPixels = 0;
    let totalUserPixels = 0;

    // 3. Pixel matching (Looking at Alpha channel every 4th element)
    for (let i = 3; i < userImg.length; i += 4) {
        const isUserFilled = userImg[i] > 50;
        const isTargetFilled = targetImg[i] > 50;

        if (isTargetFilled) totalTargetPixels++;
        if (isUserFilled) totalUserPixels++;
        if (isUserFilled && isTargetFilled) overlap++;
    }

    if (totalUserPixels === 0) {
        alert("Vui lòng vẽ chữ trước khi kiểm tra!");
        return;
    }

    // 4. Calculate Score (Intersection / Target)
    // To be forgiving for handwriting thickness, we divide overlap by target size
    let score = (overlap / totalTargetPixels) * 100;
    
    // Penalty if they just scribble the whole screen black
    if (totalUserPixels > totalTargetPixels * 2.5) {
        score -= (totalUserPixels - totalTargetPixels * 2.5) / 100;
    }

    score = Math.max(0, Math.min(100, score)); // Clamp 0-100

    const feedback = document.getElementById('writing-feedback');
    feedback.innerText = `Độ chính xác: ${score.toFixed(1)}%`;
    feedback.style.color = score > 60 ? "green" : "red";

    // Show the target faintly behind the user's drawing so they see where they missed
    document.getElementById('drawing-guide').innerText = currentWriteChar;
}

// =====================================================================
// DATA STORAGE & STATS TABLES
// =====================================================================
function saveData(char, script, isCorrect) {
    if (!historyData[char]) {
        historyData[char] = { correct: 0, wrong: 0, script: script };
    }
    if (isCorrect) historyData[char].correct++;
    else historyData[char].wrong++;

    localStorage.setItem('kanaHistory', JSON.stringify(historyData));
}

function renderHistory() {
    const tbody = document.querySelector('#history-table tbody');
    tbody.innerHTML = "";
    Object.keys(historyData).forEach(char => {
        const d = historyData[char];
        const total = d.correct + d.wrong;
        const acc = total === 0 ? 0 : Math.round((d.correct / total) * 100);
        
        tbody.innerHTML += `
            <tr>
                <td style="font-size: 20px;">${char}</td>
                <td style="color: green;">${d.correct}</td>
                <td style="color: red;">${d.wrong}</td>
                <td>${acc}%</td>
            </tr>
        `;
    });
}

function renderStats() {
    // Similar to history, but you can expand this to group by Hiragana/Katakana
    const tbody = document.querySelector('#stats-table tbody');
    tbody.innerHTML = "";
    Object.keys(historyData).forEach(char => {
        const d = historyData[char];
        const total = d.correct + d.wrong;
        const acc = total === 0 ? 0 : Math.round((d.correct / total) * 100);
        
        tbody.innerHTML += `
            <tr>
                <td style="font-size: 20px;">${char}</td>
                <td>${total}</td>
                <td style="color: green;">${d.correct}</td>
                <td style="color: red;">${d.wrong}</td>
                <td>${acc}%</td>
            </tr>
        `;
    });
}