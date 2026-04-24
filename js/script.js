//-------Header mobile styling----------

//Hamburger script
document.addEventListener('click', (e) => {
    const hamburger = document.querySelector('.hamburger');
    if (e.target.classList.contains('hamburger')) {
        handleClick(hamburger)
    } 
    
    else if (!e.target.closest('.mobile-nav') && hamburger.classList.contains('active') ) {
        handleClick(hamburger)
    };
});

function handleClick(menuBurger) {
    const isActive = menuBurger.classList.contains('active');

    menuBurger.classList.toggle('active', !isActive);
    menuBurger.classList.toggle('inactive', isActive);
    menuBurger.setAttribute('aria-expanded', String(!isActive));

    document.querySelector('.header').classList.toggle('active');
    document.body.classList.toggle('noscroll');
    document.documentElement.classList.toggle('noscroll');
}

//Dropdown menu 
const mobileMenu = document.querySelector('.mobile-nav')

//The Anonymous function:
//1. Closes all lists if you're not clicking anything, and just exits out if you're just clicking inside the list
//2. If you clicked a trigger, it stores that triggers dropdown menu and a boolean for the active class in variables
//3. Closes all lists, but if the list you clicked was not open when you clicked it, immediately opens the list
mobileMenu.addEventListener('click', (e) => {
    const trigger = e.target.closest('.dropdown-click');
    const isClickingInside = e.target.closest('.mobile-dropdown')

    if(!trigger && !isClickingInside ) {
        closeAllLists();
        return;
    } else if (!trigger && isClickingInside) {
        return;
    }

    const dropdown = trigger.closest('.mobile-dropdown-link').querySelector('.mobile-dropdown');
    const isOpen = dropdown.classList.contains('active');

    closeAllLists();
    if(!isOpen) {
        dropdown.classList.add('active');
    }
});

function closeAllLists() {
    const allDropdowns = mobileMenu.querySelectorAll('.mobile-dropdown');
    allDropdowns.forEach(menu => {
        menu.classList.remove('active');
    });
}