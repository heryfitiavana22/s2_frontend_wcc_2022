let container = document.querySelector('.connected');
function show() {
    container.style.left = '0';
}
function hide() {
    container.style.left = '100%';
}
setTimeout(()=> {
    let animation = document.querySelector('.animation');
    animation.style.transform = 'scale(0)'
}, 5100)
window.onresize = function() {
    let currentwidth = window.innerWidth;
    if(currentwidth > 991) {
        container.style.left = '37%'
    } else {hide()}
}