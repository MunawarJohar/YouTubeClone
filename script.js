console.log("JS File");
var menu = document.querySelector(".menu");
var SideBar = document.querySelector('.SideBar');
var container = document.querySelector('.container')

menu.onclick = function() {
        SideBar.classList.toggle("s_sidebar");
        container.classList.toggle("toggle_container");
    }
    //Try to apply javascripts
    // SideBar = addEventListener('mouseover', (e) => {
    //     console.log("Mouse Over");
    //     SideBar.classList.toggle("toggle_s_sidebar");
    // })