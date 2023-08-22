const mobileNavActivator = () => {
    const headerBar = document.querySelector('#header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const clickables = document.querySelectorAll('.mobile-nav__clickable');

    

    // Exit the mobile nav bar ff any of the options in the mobile nav bar is clicked
    clickables.forEach((clickable) => {
        clickable.addEventListener('click', () => {
            exitMobileNavBar();
        });
    });

    headerBar.addEventListener('click', () => {
        enterMobileNavBar();
    });

    

    // Function to open and close Mobile navigation screen
    function enterMobileNavBar() {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    }

    function exitMobileNavBar() {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'visible';
    }
}

export default mobileNavActivator;