/* Dropdown */
var elemDrop = document.querySelectorAll('.dropdown-trigger');
var instanceDrop = M.Dropdown.init(elemDrop, {
    coverTrigger: false,
    constrainWidth: false
});

/* Carousel */
var elemCarousel = document.querySelectorAll('.carousel');
var instanceCarousel = M.Carousel.init(elemCarousel, {  
    indicators: true,
    fullWidth: true    
});

/* SideNav */
var elemSideNav = document.querySelectorAll('.sidenav');
var instanceSideNav = M.Sidenav.init(elemSideNav);