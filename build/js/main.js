// window.onload = () => {
//     window.scroll(0, 0);
// }

const initApp = () => {
    // Declaration
    const copyRightYear = document.getElementById('year');
    const mobileMenuBtn = document.getElementById('menu-btn');
    const mobileMenuSection = document.getElementById('menu-mobile');
    const mobileMenu = document.getElementById('menu-mobile-list').getElementsByTagName('li');
    const aboutMenu = document.getElementById('about-menu-list');
    const aboutSubMenu = mobileMenu[0];
    const year = new Date().getFullYear();
    
    // Functions
    const toggleMenu = () => {
        mobileMenuSection.classList.toggle('hidden');
        mobileMenuBtn.innerHTML = mobileMenuSection.classList.contains('hidden') ? '☰' : '⨉';

        if (!aboutMenu.classList.contains('hidden')) {
            toggleSubMenu();
        }
    }

    const toggleSubMenu = () => {
        aboutMenu.classList.toggle('hidden')
        aboutSubMenu.firstElementChild.innerHTML = aboutMenu.classList.contains('hidden') ? 'About &#9660;' : 'About &#9650;';
    }

    copyRightYear.innerHTML = year;

    mobileMenuBtn.addEventListener('click', toggleMenu);

    Array.from(mobileMenu).forEach((element) => {
        element.addEventListener('click', toggleMenu)
    })

    aboutSubMenu.removeEventListener('click', toggleMenu);
    aboutSubMenu.addEventListener('click', toggleSubMenu)
}


if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    initApp();
} else {
    document.addEventListener("DOMContentLoaded", initApp);
}