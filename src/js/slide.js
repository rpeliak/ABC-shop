const navSlide = () => {
    const btn = document.querySelector(".nav_btn");
    const nav = document.querySelector(".container__list");
    const navLi = document.querySelectorAll(".container__link");


    btn.addEventListener('click', () => {
        nav.classList.toggle("nav_active");

        navLi.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLiFade 0.5s ease forwards ${index / 7+0.5}s`;
            }
        });
        btn.classList.toggle("toggle");
    })
};


navSlide();