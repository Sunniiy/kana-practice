// =====================================================================
// DỮ LIỆU ĐẦY ĐỦ HIRAGANA VÀ KATAKANA
// =====================================================================
const KANA_DATABASE = {
    "Hiragana": {
        "Cơ bản (Seion)": {
            "Hàng A (a, i, u, e, o)": {"あ":["a","あ"], "い":["i","い"], "う":["u","う"], "え":["e","え"], "お":["o","お"]},
            "Hàng Ka (ka, ki, ku...)": {"か":["ka","か"], "き":["ki","き"], "く":["ku","く"], "け":["ke","け"], "こ":["ko","こ"]},
            "Hàng Sa (sa, shi, su...)": {"さ":["sa","さ"], "し":["shi","si","し"], "す":["su","す"], "せ":["se","せ"], "そ":["so","そ"]},
            "Hàng Ta (ta, chi, tsu...)": {"た":["ta","た"], "ち":["chi","ti","ち"], "つ":["tsu","tu","つ"], "て":["te","て"], "と":["to","と"]},
            "Hàng Na (na, ni, nu...)": {"な":["na","な"], "に":["ni","に"], "ぬ":["nu","ぬ"], "ね":["ne","ね"], "の":["no","の"]},
            "Hàng Ha (ha, hi, fu...)": {"は":["ha","は"], "ひ":["hi","ひ"], "ふ":["fu","hu","ふ"], "へ":["he","へ"], "ほ":["ho","ほ"]},
            "Hàng Ma (ma, mi, mu...)": {"ま":["ma","ま"], "み":["mi","み"], "む":["mu","む"], "め":["me","め"], "も":["mo","も"]},
            "Hàng Ya (ya, yu, yo)": {"や":["ya","や"], "ゆ":["yu","ゆ"], "よ":["yo","よ"]},
            "Hàng Ra (ra, ri, ru...)": {"ら":["ra","ら"], "り":["ri","り"], "る":["ru","る"], "れ":["re","れ"], "ろ":["ro","ろ"]},
            "Hàng Wa, N (wa, o, n)": {"わ":["wa","わ"], "を":["o","wo","を"], "ん":["n","nn","ん"]}
        },
        "Âm đục & Bán đục (Dakuon)": {
            "Hàng Ga (ga, gi, gu...)": {"が":["ga","が"], "ぎ":["gi","ぎ"], "ぐ":["gu","ぐ"], "げ":["ge","げ"], "ご":["go","ご"]},
            "Hàng Za (za, ji, zu...)": {"ざ":["za","ざ"], "じ":["ji","zi","じ"], "ず":["zu","ず"], "ぜ":["ze","ぜ"], "ぞ":["zo","ぞ"]},
            "Hàng Da (da, ji, zu...)": {"だ":["da","だ"], "ぢ":["ji","di","ぢ"], "づ":["zu","du","dzu","づ"], "で":["de","で"], "ど":["do","ど"]},
            "Hàng Ba (ba, bi, bu...)": {"ば":["ba","ば"], "び":["bi","び"], "ぶ":["bu","ぶ"], "べ":["be","べ"], "ぼ":["bo","ぼ"]},
            "Hàng Pa (pa, pi, pu...)": {"ぱ":["pa","ぱ"], "ぴ":["pi","ぴ"], "ぷ":["pu","ぷ"], "ぺ":["pe","ぺ"], "ぽ":["po","ぽ"]}
        },
        "Âm ghép (Yōon)": {
            "Kya, Kyu, Kyo": {"きゃ":["kya","きゃ"], "きゅ":["kyu","きゅ"], "きょ":["kyo","きょ"]},
            "Sha, Shu, Sho": {"しゃ":["sha","sya","しゃ"], "しゅ":["shu","syu","しゅ"], "しょ":["sho","syo","しょ"]},
            "Cha, Chu, Cho": {"ちゃ":["cha","tya","ちゃ"], "ちゅ":["chu","tyu","ちゅ"], "ちょ":["cho","tyo","ちょ"]},
            "Nya, Nyu, Nyo": {"にゃ":["nya","にゃ"], "にゅ":["nyu","にゅ"], "にょ":["nyo","にょ"]},
            "Hya, Hyu, Hyo": {"ひゃ":["hya","ひゃ"], "ひゅ":["hyu","ひゅ"], "ひょ":["hyo","ひょ"]},
            "Mya, Myu, Myo": {"みゃ":["mya","みゃ"], "みゅ":["myu","みゅ"], "みょ":["myo","みょ"]},
            "Rya, Ryu, Ryo": {"りゃ":["rya","りゃ"], "りゅ":["ryu","りゅ"], "りょ":["ryo","りょ"]},
            "Gya, Gyu, Gyo": {"ぎゃ":["gya","ぎゃ"], "ぎゅ":["gyu","ぎゅ"], "ぎょ":["gyo","ぎょ"]},
            "Ja, Ju, Jo": {"じゃ":["ja","zya","jya","じゃ"], "じゅ":["ju","zyu","jyu","じゅ"], "じょ":["jo","zyo","jyo","じょ"]},
            "Bya, Byu, Byo": {"びゃ":["bya","びゃ"], "びゅ":["byu","びゅ"], "びょ":["byo","びょ"]},
            "Pya, Pyu, Pyo": {"ぴゃ":["pya","ぴゃ"], "ぴゅ":["pyu","ぴゅ"], "ぴょ":["pyo","ぴょ"]}
        }
    },
    "Katakana": {
        "Cơ bản (Seion)": {
            "Hàng A (a, i, u, e, o)": {"ア":["a","ア"], "イ":["i","イ"], "ウ":["u","ウ"], "エ":["e","エ"], "オ":["o","オ"]},
            "Hàng Ka (ka, ki, ku...)": {"カ":["ka","カ"], "キ":["ki","キ"], "ク":["ku","ク"], "ケ":["ke","ケ"], "コ":["ko","コ"]},
            "Hàng Sa (sa, shi, su...)": {"サ":["sa","サ"], "シ":["shi","si","シ"], "ス":["su","ス"], "セ":["se","セ"], "ソ":["so","ソ"]},
            "Hàng Ta (ta, chi, tsu...)": {"タ":["ta","タ"], "チ":["chi","ti","チ"], "ツ":["tsu","tu","ツ"], "テ":["te","テ"], "ト":["to","ト"]},
            "Hàng Na (na, ni, nu...)": {"ナ":["na","ナ"], "ニ":["ni","ニ"], "ヌ":["nu","ヌ"], "ネ":["ne","ネ"], "ノ":["no","ノ"]},
            "Hàng Ha (ha, hi, fu...)": {"ハ":["ha","ハ"], "ヒ":["hi","ヒ"], "フ":["fu","hu","フ"], "ヘ":["he","ヘ"], "ホ":["ho","ホ"]},
            "Hàng Ma (ma, mi, mu...)": {"マ":["ma","マ"], "ミ":["mi","ミ"], "ム":["mu","ム"], "メ":["me","メ"], "モ":["mo","モ"]},
            "Hàng Ya (ya, yu, yo)": {"ヤ":["ya","ヤ"], "ユ":["yu","ユ"], "ヨ":["yo","ヨ"]},
            "Hàng Ra (ra, ri, ru...)": {"ラ":["ra","ラ"], "リ":["ri","リ"], "ル":["ru","ル"], "レ":["re","レ"], "ロ":["ro","ロ"]},
            "Hàng Wa, N (wa, o, n)": {"ワ":["wa","ワ"], "ヲ":["o","wo","ヲ"], "ン":["n","nn","ン"]}
        },
        "Âm đục & Bán đục (Dakuon)": {
            "Hàng Ga (ga, gi, gu...)": {"ガ":["ga","ガ"], "ギ":["gi","ギ"], "グ":["gu","グ"], "ゲ":["ge","ゲ"], "ゴ":["go","ゴ"]},
            "Hàng Za (za, ji, zu...)": {"ザ":["za","ザ"], "ジ":["ji","zi","ジ"], "ズ":["zu","ズ"], "ゼ":["ze","ゼ"], "ゾ":["zo","ゾ"]},
            "Hàng Da (da, ji, zu...)": {"ダ":["da","ダ"], "ヂ":["ji","di","ヂ"], "ヅ":["zu","du","dzu","ヅ"], "デ":["de","デ"], "ド":["do","ド"]},
            "Hàng Ba (ba, bi, bu...)": {"バ":["ba","バ"], "ビ":["bi","ビ"], "ブ":["bu","ブ"], "ベ":["be","ベ"], "ボ":["bo","ボ"]},
            "Hàng Pa (pa, pi, pu...)": {"パ":["pa","パ"], "ピ":["pi","ピ"], "プ":["pu","プ"], "ペ":["pe","ペ"], "ポ":["po","ポ"]}
        },
        "Âm ghép (Yōon)": {
            "Kya, Kyu, Kyo": {"キャ":["kya","キャ"], "キュ":["kyu","キュ"], "キョ":["kyo","キョ"]},
            "Sha, Shu, Sho": {"シャ":["sha","sya","シャ"], "シュ":["shu","syu","シュ"], "ショ":["sho","syo","ショ"]},
            "Cha, Chu, Cho": {"チャ":["cha","tya","チャ"], "チュ":["chu","tyu","チュ"], "チョ":["cho","tyo","チョ"]},
            "Nya, Nyu, Nyo": {"ニャ":["nya","ニャ"], "ニュ":["nyu","ニュ"], "ニョ":["nyo","ニョ"]},
            "Hya, Hyu, Hyo": {"ヒャ":["hya","ヒャ"], "ヒュ":["hyu","ヒュ"], "ヒョ":["hyo","ヒョ"]},
            "Mya, Myu, Myo": {"ミャ":["mya","ミャ"], "ミュ":["myu","ミュ"], "ミョ":["myo","ミョ"]},
            "Rya, Ryu, Ryo": {"リャ":["rya","リャ"], "リュ":["ryu","リュ"], "リョ":["ryo","リョ"]},
            "Gya, Gyu, Gyo": {"ギャ":["gya","ギャ"], "ギュ":["gyu","ギュ"], "ギョ":["gyo","ギョ"]},
            "Ja, Ju, Jo": {"ジャ":["ja","zya","jya","ジャ"], "ジュ":["ju","zyu","jyu","ジュ"], "ジョ":["jo","zyo","jyo","ジョ"]},
            "Bya, Byu, Byo": {"ビャ":["bya","ビャ"], "ビュ":["byu","ビュ"], "ビョ":["byo","ビョ"]},
            "Pya, Pyu, Pyo": {"ピャ":["pya","ピャ"], "ピュ":["pyu","ピュ"], "ピョ":["pyo","ピョ"]}
        }
    }
};

const checkboxStates = {};

// =====================================================================
// BIẾN TOÀN CỤC & INIT
// =====================================================================
let activePool = [];
let currentTabScript = "Hiragana";
let currentChar = "", currentAnswers = [], currentScript = "";
let combo = 0, correctCount = 0, wrongCount = 0, reactionTimes = [], startTime = 0, isWaiting = false;
let historyData = JSON.parse(localStorage.getItem('kanaHistoryData')) || {};

document.addEventListener("DOMContentLoaded", () => {
    initMainTabs();
    initMiniTabs();
    renderCheckboxes();
    initDrawingPad();
    
    document.getElementById("btn-select-all").addEventListener("click", () => toggleAll(true));
    document.getElementById("btn-deselect-all").addEventListener("click", () => toggleAll(false));
    document.getElementById("kana-input").addEventListener("input", handleInput);
    document.getElementById("btn-pronounce").addEventListener("click", playPronunciation);
    
    updatePool();
});

// -------------------------------------------------------------
// UI ĐIỀU HƯỚNG TABS
// -------------------------------------------------------------
function initMainTabs() {
    const btns = document.querySelectorAll('.main-tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    const sidebar = document.getElementById('main-sidebar');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const target = btn.dataset.target;
            document.getElementById(target).classList.add('active');

            // Hiển thị Sidebar ở Luyện tập & Luyện viết. Ẩn ở Lịch sử & Thống kê
            if (target === 'history' || target === 'stats') {
                sidebar.style.display = 'none';
                if (target === 'history') renderHistory();
                if (target === 'stats') renderStats();
            } else {
                sidebar.style.display = 'block';
                if (target === 'practice') document.getElementById('kana-input').focus();
            }
        });
    });
}

function initMiniTabs() {
    const miniBtns = document.querySelectorAll('.mini-tab-btn');
    miniBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            miniBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTabScript = btn.dataset.script;
            renderCheckboxes();
        });
    });
}

// -------------------------------------------------------------
// RENDER CHECKBOX (2 CỘT)
// -------------------------------------------------------------
function renderCheckboxes() {
    const colLeft = document.getElementById('col-left');
    const colRight = document.getElementById('col-right');
    colLeft.innerHTML = ""; colRight.innerHTML = "";
    
    const categories = KANA_DATABASE[currentTabScript];
    if(!categories) return;

    for (let catName in categories) {
        // Âm ghép đưa sang cột phải, còn lại cột trái
        const targetCol = catName.includes("Âm ghép") ? colRight : colLeft;
        
        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerText = `【 ${catName} 】`;
        targetCol.appendChild(header);

        for (let groupName in categories[catName]) {
            const label = document.createElement('label');
            label.className = 'checkbox-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'group-checkbox';
            checkbox.dataset.script = currentTabScript;
            checkbox.dataset.category = catName;
            checkbox.dataset.group = groupName;
            
            // Check các mục nếu đang activePool hoặc theo mặc định Hiragana
            // Để đơn giản, khi mới tải tự đánh dấu Hiragana
            const stateKey = `${currentTabScript}_${catName}_${groupName}`;
            // Nếu chưa từng lưu thì mặc định: Hiragana bật, Katakana tắt
            if (checkboxStates[stateKey] === undefined) {
                checkboxStates[stateKey] = false;
            }
            checkbox.checked = checkboxStates[stateKey];

            checkbox.addEventListener('change', (e) => {
                checkboxStates[stateKey] = e.target.checked;
                updatePool();
            });

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(groupName));
            targetCol.appendChild(label);
        }
    }
}

function toggleAll(state) {
    const checkboxes = document.querySelectorAll('.group-checkbox');
    checkboxes.forEach(cb => {
        if(cb.dataset.script === currentTabScript) {
            cb.checked = state;
            const stateKey = `${cb.dataset.script}_${cb.dataset.category}_${cb.dataset.group}`;
            checkboxStates[stateKey] = state;
        }
    });
    updatePool();
}

// -------------------------------------------------------------
// LOGIC LUYỆN TẬP PHẢN XẠ & CẬP NHẬT TỪ (CẢ 2 TAB CHIA SẺ CHUNG POOL)
// -------------------------------------------------------------
function updatePool() {
    activePool = [];
    const checkboxes = document.querySelectorAll('.group-checkbox'); 
    
    checkboxes.forEach(cb => {
        if (cb.checked) {
            const chars = KANA_DATABASE[cb.dataset.script][cb.dataset.category][cb.dataset.group];
            for (let char in chars) {
                activePool.push({ char: char, answers: chars[char], script: cb.dataset.script });
            }
        }
    });

    if (activePool.length === 0) {
        document.getElementById('kana-display').innerText = "-";
        document.getElementById('feedback').innerText = "Vui lòng tick chọn ít nhất 1 nhóm!";
        document.getElementById('feedback').style.color = "red";
        document.getElementById('script-badge').innerText = "";
        currentChar = "";
        document.getElementById('write-romaji-target').innerText = "--";
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

    // Cập nhật giao diện Tab Luyện Tập
    document.getElementById('kana-display').innerText = currentChar;
    document.getElementById('script-badge').innerText = `[${currentScript}]`;
    document.getElementById('kana-input').value = "";
    isWaiting = false;
    startTime = Date.now();
    
    // Đồng thời cập nhật giao diện Tab Luyện Viết
    document.getElementById('write-romaji-target').innerText = currentAnswers[0];
    clearPad();
}

function handleInput(e) {
    if (!currentChar || isWaiting) return;
    const input = e.target.value.trim().toLowerCase();
    
    if (currentAnswers.includes(input)) {
        processCorrect();
    } else if (input.length >= currentAnswers[0].length && !currentAnswers.some(ans => ans.startsWith(input))) {
        processWrong();
    }
}

function processCorrect() {
    isWaiting = true;
    const reactTime = (Date.now() - startTime) / 1000;
    combo++; correctCount++; reactionTimes.push(reactTime);
    saveData(currentChar, currentScript, true, reactTime);
    
    const fb = document.getElementById('feedback');
    fb.innerText = "Chính xác!"; fb.style.color = "green";
    updateStatsUI();
    setTimeout(() => { fb.innerText = ""; nextKana(); }, 250);
}

function processWrong() {
    isWaiting = true;
    combo = 0; wrongCount++;
    saveData(currentChar, currentScript, false, null);
    
    const fb = document.getElementById('feedback');
    fb.innerText = `Sai! Đáp án: ${currentAnswers[0]} / ${currentChar}`; fb.style.color = "red";
    
    document.getElementById('kana-input').value = "";
    updateStatsUI();
    setTimeout(() => { fb.innerText = ""; nextKana(); }, 1400);
}

function updateStatsUI() {
    const comboEl = document.getElementById('combo-display');
    comboEl.innerText = `Combo: ${combo}`;
    comboEl.style.color = combo >= 15 ? 'red' : (combo >= 10 ? 'orange' : (combo >= 5 ? 'blue' : 'gray'));
    
    document.getElementById('score-display').innerText = `✅ Đúng: ${correctCount} | ❌ Sai: ${wrongCount}`;
    
    if (reactionTimes.length > 0) {
        const min = Math.min(...reactionTimes).toFixed(2);
        const max = Math.max(...reactionTimes).toFixed(2);
        const avg = (reactionTimes.reduce((a,b)=>a+b,0) / reactionTimes.length).toFixed(2);
        document.getElementById('time-display').innerText = `⏱ Nhanh nhất: ${min}s | Chậm nhất: ${max}s | TB: ${avg}s`;
    }
}

// -------------------------------------------------------------
// LUYỆN VIẾT & CHẤM ĐIỂM BẰNG THUẬT TOÁN (PIXEL OVERLAP)
// -------------------------------------------------------------
let canvas, ctx, hiddenCanvas, hiddenCtx;
let isDrawing = false;

function initDrawingPad() {
    canvas = document.getElementById('drawing-pad');
    ctx = canvas.getContext('2d');
    hiddenCanvas = document.getElementById('hidden-canvas');
    hiddenCtx = hiddenCanvas.getContext('2d');

    ctx.lineWidth = 14; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = '#fff';

    // Desktop
    canvas.addEventListener('mousedown', startPos);
    canvas.addEventListener('mouseup', endPos);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseleave', endPos);

    // Mobile (Cấm cuộn trang khi vẽ)
    canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startPos(e.touches[0]); }, {passive: false});
    canvas.addEventListener('touchend', (e) => { e.preventDefault(); endPos(); }, {passive: false});
    canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e.touches[0]); }, {passive: false});

    document.getElementById('btn-clear').addEventListener('click', clearPad);
    document.getElementById('btn-check').addEventListener('click', checkDrawing);
    document.getElementById('btn-next-write').addEventListener('click', () => { nextKana(); });
}

function startPos(e) { isDrawing = true; draw(e); }
function endPos() { isDrawing = false; ctx.beginPath(); }
function draw(e) {
    if (!isDrawing) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx.lineTo(x, y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x, y);
}

function clearPad() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('writing-feedback').innerText = "Độ chính xác: --%";
    document.getElementById('writing-feedback').style.color = "var(--text)";
    document.getElementById('drawing-guide').innerText = "";
}

function playPronunciation() {
    if (!('speechSynthesis' in window)) return alert("Trình duyệt không hỗ trợ đọc âm!");
    if (!currentChar) return;
    let utterance = new SpeechSynthesisUtterance(currentChar);
    utterance.lang = 'ja-JP'; utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
}

// Hàm phụ trợ: Tìm khung giới hạn (Bounding Box) của nét vẽ để căn giữa
function getBoundingBox(imgData, width, height) {
    let minX = width, minY = height, maxX = 0, maxY = 0;
    let found = false;
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let alpha = imgData.data[(y * width + x) * 4 + 3];
            if (alpha > 50) {
                found = true;
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
            }
        }
    }
    if (!found) return null;
    return { w: maxX - minX, h: maxY - minY, cX: minX + (maxX - minX) / 2, cY: minY + (maxY - minY) / 2 };
}

function checkDrawing() {
    if(!currentChar) return;
    
    // 1. VẼ CHỮ GỐC (Dày hơn để dễ khớp nét)
    hiddenCtx.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);
    hiddenCtx.font = "220px 'Klee One', sans-serif";
    hiddenCtx.textAlign = "center"; 
    hiddenCtx.textBaseline = "middle";
    hiddenCtx.fillStyle = "#000";
    
    // Tạo nét viền (stroke) để chữ gốc dày hơn (Bigger stroke)
    hiddenCtx.lineWidth = 15; 
    hiddenCtx.strokeStyle = "#000";
    hiddenCtx.lineJoin = "round";
    hiddenCtx.strokeText(currentChar, 150, 150);
    hiddenCtx.fillText(currentChar, 150, 150);

    let userImgData = ctx.getImageData(0, 0, 300, 300);
    let targetImgData = hiddenCtx.getImageData(0, 0, 300, 300);
    
    // 2. AUTO SCALE & POSITION (Tự căn chỉnh vị trí & kích cỡ nét vẽ của user)
    const userBB = getBoundingBox(userImgData, 300, 300);
    const targetBB = getBoundingBox(targetImgData, 300, 300);

    if (!userBB) return alert("Vui lòng viết chữ vào bảng trước khi kiểm tra!");

    if (userBB && targetBB) {
        // Tính tỷ lệ phóng to/thu nhỏ
        let scaleX = targetBB.w / (userBB.w || 1);
        let scaleY = targetBB.h / (userBB.h || 1);
        let scale = Math.min(scaleX, scaleY);
        
        // Giới hạn không phóng quá to hoặc thu quá nhỏ
        if (scale > 1.8) scale = 1.8; 
        if (scale < 0.6) scale = 0.6;

        // Lưu bản nháp nét vẽ của user vào canvas tạm
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 300; tempCanvas.height = 300;
        tempCanvas.getContext('2d').putImageData(userImgData, 0, 0);

        // Xóa bảng chính và vẽ lại nét user (đã căn giữa và phóng to)
        ctx.clearRect(0, 0, 300, 300);
        ctx.save();
        ctx.translate(targetBB.cX, targetBB.cY); // Đưa tâm về giữa chữ gốc
        ctx.scale(scale, scale);
        ctx.translate(-userBB.cX, -userBB.cY);   // Kéo tâm chữ user về gốc 0,0
        ctx.drawImage(tempCanvas, 0, 0);
        ctx.restore();

        // Lấy lại dữ liệu ảnh SAU KHI đã tự động căn giữa để chấm điểm
        userImgData = ctx.getImageData(0, 0, 300, 300);
    }

    // 3. CHẤM ĐIỂM (Pixel Overlap)
    const userImg = userImgData.data;
    const targetImg = targetImgData.data;
    let overlap = 0, totalTarget = 0, totalUser = 0;

    for (let i = 3; i < userImg.length; i += 4) {
        const u = userImg[i] > 50;
        const t = targetImg[i] > 50;
        if (t) totalTarget++;
        if (u) totalUser++;
        if (u && t) overlap++;
    }

    let score = (overlap / totalTarget) * 100;
    if (totalUser > totalTarget * 2.5) score -= (totalUser - totalTarget * 2.5) / 100; // Phạt nét thừa
    score = Math.max(0, Math.min(100, score));

    const fb = document.getElementById('writing-feedback');
    fb.innerText = `Độ chính xác: ${score.toFixed(1)}%`;
    fb.style.color = score > 60 ? "var(--success)" : "var(--danger)";

    // Hiện bóng chữ gốc đè lên nét user
    document.getElementById('drawing-guide').innerText = currentChar;

    // 4. AUTO-SKIP SAU 2 GIÂY (Chỉ lưu vào stats nếu điểm trên 60%)
    if (score >= 60) {
        saveData(currentChar, currentScript, true, null); // Lưu data đúng
        setTimeout(() => {
            // Kiểm tra xem người dùng có bấm qua chữ khác trong 2s đó không
            if (document.getElementById('write-romaji-target').innerText === currentWriteRomaji) {
                document.getElementById('btn-next-write').click();
            }
        }, 2000);
    } else {
        saveData(currentChar, currentScript, false, null); // Lưu data sai
    }
}

// -------------------------------------------------------------
// LƯU DỮ LIỆU & BẢNG THỐNG KÊ (TAB 3 & 4)
// -------------------------------------------------------------
function saveData(char, script, isCorrect, reactTime) {
    if (!historyData[char]) historyData[char] = { script: script, correct: 0, wrong: 0, times: [] };
    if (isCorrect) {
        historyData[char].correct++;
        if(reactTime) historyData[char].times.push(reactTime);
    } else {
        historyData[char].wrong++;
    }
    localStorage.setItem('kanaHistoryData', JSON.stringify(historyData));
}

function renderHistory() {
    const tbody = document.querySelector('#history-table tbody');
    tbody.innerHTML = "";
    const sortedChars = Object.keys(historyData).sort((a, b) => historyData[b].wrong - historyData[a].wrong);
    
    sortedChars.forEach(char => {
        const d = historyData[char];
        const total = d.correct + d.wrong;
        const acc = total === 0 ? 0 : Math.round((d.correct / total) * 100);
        tbody.innerHTML += `<tr>
            <td style="font-size: 20px;">${char}</td>
            <td style="color: green;">${d.correct}</td>
            <td style="color: red;">${d.wrong}</td>
            <td>${acc}%</td>
        </tr>`;
    });
}

function renderStats() {
    const tbody = document.querySelector('#stats-table tbody');
    tbody.innerHTML = "";
    const sortedChars = Object.keys(historyData).sort((a, b) => historyData[b].wrong - historyData[a].wrong);
    
    sortedChars.forEach(char => {
        const d = historyData[char];
        const total = d.correct + d.wrong;
        const acc = total === 0 ? 0 : Math.round((d.correct / total) * 100);
        tbody.innerHTML += `<tr>
            <td style="font-size: 20px;">${char}</td>
            <td>${total}</td>
            <td style="color: green;">${d.correct}</td>
            <td style="color: red;">${d.wrong}</td>
            <td>${acc}%</td>
        </tr>`;
    });
}