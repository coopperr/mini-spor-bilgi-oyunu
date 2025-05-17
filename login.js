document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    // Tüm kullanıcı listesini getir
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    // Kullanıcıyı liste içinde ara
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Giriş başarılı! Hoş geldiniz.');
        localStorage.setItem('currentUser', username); // Aktif kullanıcıyı belirle
        window.location.href = 'game.html'; // Oyun sayfasına yönlendir
    } else {
        alert('Hatalı kullanıcı adı veya şifre!');
    }
});