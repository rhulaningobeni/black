
        // JavaScript code to toggle the menu on small screens
        function toggleMenu() {
            var navbar = document.getElementById("myNavbar");
            if (navbar.className === "navbar") {
                navbar.className += " responsive";
            } else {
                navbar.className = "navbar";
            }
        }
    