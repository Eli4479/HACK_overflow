// for smooth scroll and navbar
const linkContainer = document.querySelector(".links-container");
const navbarToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navbarToggle.addEventListener("click", function () {
    const heightOfLinks = links.getBoundingClientRect().height;
    const heightOfContainer = linkContainer.getBoundingClientRect().height;
    if (heightOfContainer === 0) {
        linkContainer.style.height = `${heightOfLinks}px`;
    }
    else {
        linkContainer.style.height = 0;
    }
});

const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add("fixed-nav");
    }
    else {
        navBar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove("show-link");
    }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 100) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linkContainer.style.height = 0;
    });
});