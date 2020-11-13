//HAMBUGER MENU ANIMATION
const menu = document.querySelector('.mobileMenuContainer');
const menuBtn = document.querySelector('.menuIcon');
let menuOpen = false;


menuBtn.addEventListener('click', function() {
    if(!menuOpen) {
        menu.classList.add('open');
        menuOpen = true;
    } else {
        menu.classList.remove('open');
        menuOpen = false;
    }
})










//////////////////////////




// var navbar = document.querySelector('.navbar');
// var navbarItems = document.querySelector('.navbar').children;

// function loopThroughNav() {
//     for (i = 0; i < navbarItems.length; i++) {
//       if (navbarItems[i] === event.target) {
//           event.target.style.color = '#B88F90';
//       } else {
//           navbarItems[i].style.color = '#000';
//       }
//     };
// };

// navbar.addEventListener('click', loopThroughNav);



//loop through navbar
//if navbar item matches a certain url, apply #B88F90
//else, make it white



//find a way to have the 'all' button start off with pink color

function showPanel(panelIndex, colorCode) {
    // tabButtons.forEach(function(node) {
    //     node.style.backgroundColor = '';
    //     node.style.color = '';
    // });
    tabButtons[panelIndex].style.backgroundColor = colorCode;
    // tabButtons[panelIndex].style.color='white';
    tabPanels.forEach(function(node) {
        node.style.display = 'none';
    });
    tabPanels[panelIndex].style.display = 'block';
    // tabPanels[panelIndex].style.backgroundColor = colorCode;
}








