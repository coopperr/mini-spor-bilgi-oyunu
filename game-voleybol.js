const sports = {
    voleybol: [
        { isim: "Zehra Güneş", yas: 25, ulke: "Türkiye", takim: "VakıfBank" },
        { isim: "Ebrar Karakurt", yas: 24, ulke: "Türkiye", takim: "Lokomotiv Kaliningrad" },
        { isim: "Melissa Vargas", yas: 24, ulke: "Türkiye", takim: "Fenerbahçe" },
        { isim: "Gabi Guimaraes", yas: 30, ulke: "Brezilya", takim: "VakıfBank" },
        { isim: "Paola Egonu", yas: 26, ulke: "İtalya", takim: "VakıfBank" },
        { isim: "Tijana Bošković", yas: 28, ulke: "Sırbistan", takim: "Eczacıbaşı" },
        { isim: "Jordan Larson", yas: 38, ulke: "ABD", takim: "VakıfBank" },
        { isim: "Chiaka Ogbogu", yas: 29, ulke: "ABD", takim: "VakıfBank" }
    ]
};

let score = 0;
let attempts = 3;
let selectedPlayer;

function initGame() {
    const randomIndex = Math.floor(Math.random() * sports.voleybol.length);
    selectedPlayer = sports.voleybol[randomIndex];

    document.getElementById('sport-player').innerHTML = `
        <p><strong>Yaş:</strong> ${selectedPlayer.yas}</p>
        <p><strong>Ülke:</strong> ${selectedPlayer.ulke}</p>
        <p><strong>Takım:</strong> ${selectedPlayer.takim}</p>
    `;

    const buttonsDiv = document.getElementById('buttons');
    buttonsDiv.innerHTML = ""; // Eski butonları temizle

    sports.voleybol.forEach(player => {
        const button = document.createElement('button');
        button.textContent = player.isim;
        button.onclick = () => checkAnswer(player.isim, selectedPlayer.isim);
        buttonsDiv.appendChild(button);
    });
}

function checkAnswer(selected, correct) {
    if (attempts <= 0) return;

    if (selected === correct) {
        score += 10;
        alert('Doğru tahmin! +10 Puan');
        initGame(); // Yeni tur
    } else {
        attempts--;
        alert(`Yanlış! Kalan Hak: ${attempts}`);
    }

    if (attempts <= 0) {
        document.getElementById('score-board').style.display = 'block';
        document.getElementById('score').textContent = `Puanınız: ${score}`;

        // Butonları devre dışı bırak
        document.querySelectorAll('#buttons button').forEach(btn => btn.disabled = true);

        // 3 saniye sonra yönlendir
        setTimeout(() => {
            alert("Oyun bitti! Spor seçim ekranına yönlendiriliyorsunuz.");
            // Oyuncunun hakkı bittiğinde:
            endGameAndSaveScore(score); // score: o ana kadar kazandığı puan
            window.location.href = 'game.html'; // Oyun bittiğinde, oyun sayfasına yönlendir
        }, 3000);
    }
}

function endGameAndSaveScore(currentScore) {
    const activeUser = localStorage.getItem('currentUser');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userIndex = users.findIndex(u => u.username === activeUser);
    if (userIndex !== -1) {
        // Kullanıcıyı bulduğunda mevcut skoru güncelle
        users[userIndex].score += currentScore;
        localStorage.setItem('users', JSON.stringify(users)); // Güncellenmiş kullanıcı verisini kaydet
    }
}

// Oyunu başlat
initGame();
