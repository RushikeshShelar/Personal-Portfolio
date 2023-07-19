// Text Animation
const typed = new Typed('#element', {
    strings: ['Student', 'Web Developer', 'Software Developer.',],
    typeSpeed: 50,
});

//Move to top Icon
const scrollUp = document.querySelector('#scroll-up');
scrollUp.addEventListener('click',() => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});

//Hamburger Menu
const navbar = document.querySelector('nav');
const navLinks = document.querySelector('.navbar-links');
const hamBurger = document.createElement('div');

hamBurger.innerHTML= "\u2630";
hamBurger.classList.add("navbar-toggle");
navbar.appendChild(hamBurger);

hamBurger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
