// Stick the header to the top of the page when scrolling past the header region
window.addEventListener('scroll', function() {
    let menu_bar = document.getElementById('menu-bar');
    let menu_bar_replacement = document.getElementById('menu-bar-replacement');
    menu_bar_replacement.style.height = "68px";
    let y_pos = window.pageYOffset;
    console.log(y_pos);
    if (y_pos > 240) {
        menu_bar.style.position = "fixed";
        menu_bar_replacement.style.display = "block";
    }
    else {
        menu_bar.style.position = "static";
        menu_bar_replacement.style.display = "none";
    }
});
