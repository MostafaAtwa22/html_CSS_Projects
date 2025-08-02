// up button for the begin page
let btn = document.querySelector('button.up-page');
window.addEventListener('scroll', function () {
    if (window.scrollY >= window.innerHeight)
        btn.classList.add('active');
    else 
        btn.classList.remove('active');
});

btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});