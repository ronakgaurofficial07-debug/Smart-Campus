// ==========================================
// SMART CAMPUS - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // 1. Console Message
    // ------------------------------------------
    console.log("Smart Campus Website Loaded Successfully!");


    // ------------------------------------------
    // 2. Active Navigation Link
    // ------------------------------------------
    const currentPage = window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href").split("/").pop();

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }

    });


    // ------------------------------------------
    // 3. Smooth Scrolling
    // ------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // ------------------------------------------
    // 4. Back To Top Button
    // ------------------------------------------

    const backToTop = document.createElement("button");

    backToTop.innerHTML = "↑";
    backToTop.id = "backToTop";
    backToTop.title = "Back to Top";

    document.body.appendChild(backToTop);

    // Button styling
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "25px";
    backToTop.style.right = "25px";
    backToTop.style.width = "45px";
    backToTop.style.height = "45px";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.background = "#1683d8";
    backToTop.style.color = "white";
    backToTop.style.fontSize = "22px";
    backToTop.style.fontWeight = "bold";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "9999";
    backToTop.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ------------------------------------------
    // 5. Page Fade-In Animation
    // ------------------------------------------

    document.body.style.opacity = "0";

    setTimeout(function () {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
    }, 100);


    // ------------------------------------------
    // 6. Current Year in Footer
    // ------------------------------------------

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // ------------------------------------------
    // 7. Card Hover Effect
    // ------------------------------------------

    const cards = document.querySelectorAll(
        ".card, .event-card, .resource-card, .notice-card"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-5px)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.transform = "";
        });

    });


    // ------------------------------------------
    // 8. Button Click Effect
    // ------------------------------------------

    const buttons = document.querySelectorAll("button, .btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 120);

        });

    });

});