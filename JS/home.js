// ------------ Back to top --------------
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 100) { // Adjust the value as needed
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
  });