document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // LocalStorage'daki kullanıcı listesini al
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

    // Aynı kullanıcı adı var mı kontrol et
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Bu kullanıcı adı zaten kayıtlı. Lütfen başka bir ad kullanın.');
        return; // Kayıt işlemini durdur
    }

    // Yeni kullanıcıyı ekle
    const newUser = { username: username, password: password, score: 0 };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Kayıt başarılı! Şimdi giriş yapabilirsiniz.');

    // Giriş sayfasına yönlendir
    window.location.href = 'giris.html';
});
