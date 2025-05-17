// Kullanıcı adını ekrana yazdır (localStorage'dan alınıyorsa)
document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    if (username) {
        document.getElementById("user-name").textContent = username;
    }

    // Spor dalı butonlarına tıklama olayları
    const buttons = document.querySelectorAll(".sport-btn");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedSport = button.getAttribute("data-sport");

            // Spor dalına göre sayfaya yönlendirme
            switch (selectedSport) {
                case "futbol":
                    window.location.href = "futbol.html";
                    break;
                case "basketbol":
                    window.location.href = "basketbol.html";
                    break;
                case "voleybol":
                    window.location.href = "voleybol.html";
                    break;
                default:
                    alert("Geçersiz seçim!");
            }
        });
    });
});
