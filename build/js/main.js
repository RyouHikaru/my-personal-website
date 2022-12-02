// window.onload = () => {
//     window.scroll(0, 0);
// }

const initApp = () => {
    // Declaration
    const copyRightYear = document.getElementById('year');
    const mobileMenuBtn = document.getElementById('menu-btn');
    const mobileMenuSection = document.getElementById('menu-mobile');
    const mobileMenu = document.getElementById('menu-mobile-list').getElementsByTagName('li');
    const aboutMenuList = document.getElementById('about-menu-list');
    const aboutMenu = mobileMenu[0];
    const year = new Date().getFullYear();
    
    // Functions
    const toggleMenu = () => {
        mobileMenuSection.classList.toggle('hidden');
        mobileMenuBtn.innerHTML = mobileMenuSection.classList.contains('hidden') ? '☰' : '⨉';

        if (!aboutMenuList.classList.contains('hidden')) {
            toggleSubMenu();
        }
    }

    const toggleSubMenu = () => {
        aboutMenuList.classList.toggle('hidden')
        aboutMenu.firstElementChild.innerHTML = aboutMenuList.classList.contains('hidden') ? 'About &#9660;' : 'About &#9650;';
    }

    copyRightYear.innerHTML = year;

    mobileMenuBtn.addEventListener('click', toggleMenu);

    Array.from(mobileMenu).forEach((element) => {
        element.addEventListener('click', toggleMenu)
    })

    aboutMenu.removeEventListener('click', toggleMenu);
    aboutMenu.addEventListener('click', toggleSubMenu)
}


if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    initApp();
} else {
    document.addEventListener("DOMContentLoaded", initApp);
}