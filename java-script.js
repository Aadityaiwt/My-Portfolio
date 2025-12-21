let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px"
function toggleMenu() {
    if(menuList.style.maxHeight == "0px")
{
    menuList.style.maxHeight = "300px";
}else {
    menuList.style.maxHeight = "0px";
}
}
document.addEventListener("click", function(event) {

    if (!menuList.contains(event.target) && event.target.id !== "menuBtn") {
        menuList.style.maxHeight = "0px";  
    }
});


    var typed = new Typed("#typed", {
        strings: [
            "Aditya Kumar",
            "a full stack developer"
        ],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    })

    AOS.init({
    duration: 900, // animation speed
    offset: 120,
    once: false,
    mirror: true   // scroll offset
  });