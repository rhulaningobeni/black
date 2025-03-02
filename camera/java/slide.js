
   
            var indexvalue = 0;
            function slideshow() {
                setTimeout(slideshow, 2500);
                var x;
                const img = document.querySelectorAll("img");
                for (x = 0; x < img.length; x++) {
                    img[x].style.display = "none";
                }
                indexvalue++;
                if (indexvalue > img.length) { indexvalue = 1 }
                img[indexvalue - 1].style.display = "block";
            }
            slideshow();
        
    