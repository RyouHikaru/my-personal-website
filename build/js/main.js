// window.onload = () => {
//     window.scroll(0, 0);
// }

const initApp = () => {
    const copyRightYear = document.getElementById('year');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('nav-menu');

    const year = new Date().getFullYear();
    copyRightYear.innerHTML = year;

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        menuBtn.innerHTML = mobileMenu.classList.contains('hidden') ? '☰' : '⨉';
    }

    menuBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}


if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    initApp();
} else {
    document.addEventListener("DOMContentLoaded", initApp);
}