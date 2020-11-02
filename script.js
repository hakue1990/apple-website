const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navlinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //toggle nav
    nav.classList.toggle("nav-active");
    //li animation
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkfade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    //burger animation
    burger.classList.toggle("active");
  });
};

navSlide();
