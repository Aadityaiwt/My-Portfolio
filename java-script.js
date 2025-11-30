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

    // agar click menu ya toggle button ke upar nahi hai
    if (!menuList.contains(event.target) && event.target.id !== "menuBtn") {
        menuList.style.maxHeight = "0px";  
    }
});

    var typed = new Typed("#typed", {
        strings: [
            "Aditya Kumar",
            "a full stack developer"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    })

