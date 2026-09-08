// ==========================================
// SLICE & SIP - JAVASCRIPT
// ==========================================


// Wait until the page is completely loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("🍕 Welcome to Slice & Sip!");



    // ==========================================
    // HERO ANIMATION
    // ==========================================

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(20px)";

        setTimeout(function () {

            heroContent.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";

        }, 200);
    }



    // ==========================================
    // BUTTON CLICK EFFECT
    // ==========================================

    const buttons = document.querySelectorAll(
        ".action-button, .map-button, .final-button"
    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.97)";

            setTimeout(function () {

                button.style.transform = "";

            }, 150);

        });

    });



    // ==========================================
    // WHATSAPP BUTTON
    // ==========================================

    const whatsappButtons = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("💬 Customer opened WhatsApp");

        });

    });



    // ==========================================
    // MENU BUTTON
    // ==========================================

    const menuButtons = document.querySelectorAll(
        'a[href*="menu"], a[href*="drive.google"]'
    );

    menuButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("📋 Customer opened the menu");

        });

    });



    // ==========================================
    // INSTAGRAM BUTTON
    // ==========================================

    const instagramButtons = document.querySelectorAll(
        'a[href*="instagram.com"]'
    );

    instagramButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("📸 Customer opened Instagram");

        });

    });



    // ==========================================
    // GOOGLE MAPS BUTTON
    // ==========================================

    const mapButtons = document.querySelectorAll(
        'a[href*="google.com/maps"], a[href*="maps.app.goo.gl"]'
    );

    mapButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log("📍 Customer opened Google Maps");

        });

    });

});