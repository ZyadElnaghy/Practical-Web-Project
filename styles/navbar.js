function nv() {
    var navbar = document.getElementById("navbar");
    var scrollvalue = window.scrollY;
    if (scrollvalue < 83) {
      navbar.classList.remove("new-nav");
    } else {
      navbar.classList.add("new-nav");
    }
  }
  window.addEventListener("scroll", nv);