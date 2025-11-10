// Pesan awal confess
function showMessage() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="letter-content fade-in">
            <p>Aku mau jujur sesuatu ke kamu... 😳</p>
            <div class="buttons">
                <button class="glow-btn" onclick="showConfess()">Iya, bilang aja</button>
                <button class="glow-btn" onclick="moveButton('engga')">Enggak 😢</button>
            </div>
        </div>
    `;
}

// Confess utama
function showConfess() {
    createLove();
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="letter-content fade-in">
            <p>
                Dari dulu aku udah suka sama kamu, Tamaaa...<br>
                Aku nggak bisa nutupin perasaan ini lagi.<br><br>
                <b>Maukah kamu jadi pacarku?</b>
            </p>
            <div class="buttons">
                <button class="glow-btn" onclick="showThankYouLetter()">Mau ❤️</button>
                <button class="glow-btn" onclick="moveButton('mikir')">Mikir dulu</button>
            </div>
        </div>
    `;
}

// Pesan terima kasih/akhir jika diterima
function showThankYouLetter() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class="mini-letter popupIn">
            <p style="margin:0 0 20px 0;">
                Tamaa… kita memang baru kenal kemarin, tapi entah kenapa rasanya seperti aku sudah lama mengenalmu. Kadang, pertemuan yang tak terduga justru membawa arti yang paling besar.<br><br>
                Dari caramu bicara, cara kamu melihat dunia, aku ngerasa ada sesuatu yang tulus dan hangat di dirimu. Aku gak mau ini cuma jadi cerita singkat yang hilang begitu saja.<br><br>
                Aku mau, mulai hari ini, kita berjalan bareng, bukan cuma di momen senang, tapi juga di saat dunia terasa berat. Aku tau hidup itu kadang gak adil, kadang bikin kita capek, tapi aku janji… aku bakal jadi tempat pulangmu, tempat kamu merasa aman dan dimengerti.<br><br>
                Kalau suatu saat kamu ngerasa jatuh, ingatlah kalau kamu gak sendiri. Aku ada, untuk mendengar, untuk memahami, bahkan kalau harus diam di sampingmu tanpa kata.<br><br>
                Makasih udah nerima aku, Tamaa… semoga ini bukan cuma awal hubungan, tapi awal dari cerita panjang yang bahkan waktu pun gak sanggup menghapusnya.
            </p>
            <a 
                href="https://wa.me/6285117162287?text=Iya…%20aku%20mau%20jalan%20bareng%20sama%20kamu,%20bukan%20cuma%20di%20hari%20ini,%20tapi%20di%20setiap%20langkah%20hidup%20kita%20ke%20depan"
" 
                class="glow-btn" 
                target="_blank" 
                style="margin-top:18px;display:inline-block;"
            >
                Balas di WA!
            </a>
        </div>
    `;
}

// Fungsi kembali ke pesan awal
function backToMessage() {
    showMessage();
}

// Pesan jika mikir atau enggak
function moveButton(type) {
    let pesan = "";
    if (type === "mikir") {
        pesan = "Gak apa-apa, dipikirin dulu ya Tamaaa~ Aku tunggu jawabannya!";
    } else {
        pesan = "😭 Yakin nggak mau nih Tamaaa? Tapi perasaan ini tetap buat kamu kok!";
    }
    const letter = document.getElementById("letter");
    letter.innerHTML += `
        <div class="mini-letter">
            <p style="margin:0 0 16px 0;">${pesan}</p>
            <button class="glow-btn" style="margin-top:8px;" onclick="backToMessage()">Back</button>
        </div>
    `;
    setTimeout(() => {
        const mini = document.querySelector('.mini-letter');
        if (mini) mini.remove();
    }, 2500);
}

// Love-love terbang
function createLove() {
    const loveBg = document.querySelector('.love-bg');
    const love = document.createElement('div');
    love.className = 'love-float';
    love.innerText = ['❤️','💖','💕','💗','💘','💝'][Math.floor(Math.random()*6)];
    love.style.left = Math.random() * 80 + 10 + '%';
    love.style.fontSize = (Math.random() * 24 + 24) + 'px';
    love.style.animationDuration = (Math.random() * 1.5 + 2.5) + 's';
    loveBg.appendChild(love);
    setTimeout(() => love.remove(), 4000);
}

setInterval(createLove, 400);

// Play audio saat halaman di-load (jika diizinkan)
window.onload = function() {
    const audio = document.getElementById('bg-audio');
    if (audio) {
        audio.volume = 0.7;
        audio.play().catch(() => {
            // Jika autoplay diblokir, play saat klik pertama user
            document.body.addEventListener('click', function playAudioOnce() {
                audio.play();
                document.body.removeEventListener('click', playAudioOnce);
            });
        });
    }
    if (typeof showMessage === "function") showMessage();
};



