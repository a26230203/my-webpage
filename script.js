const nvaBar = document.querySelector('.nvabar');

window.onscroll = function() {
    const y = window.scrollY;
    if(y > 20) {
        nvaBar.classList.add("sticky");
    }else {
        nvaBar.classList.remove("sticky");
    }
}
