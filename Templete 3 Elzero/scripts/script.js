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

// animation progress
let skills = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.our-skills .progress span');

window.addEventListener('scroll', () => {
    if (window.scrollY >= skills.offsetTop - 300) {
        spans.forEach(element => {
            element.style.width = element.dataset.width;
        });
    }
});


// event count 
let eventDate = new Date("Oct 31, 2025 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = eventDate - dateNow;
    
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector('.events .day').innerHTML = days;
    document.querySelector('.events .hour').innerHTML = hours;
    document.querySelector('.events .minute').innerHTML = minutes;
    document.querySelector('.events .second').innerHTML = seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

// animation Number stats
let stats = document.querySelector('.stats');
let numbers = document.querySelectorAll('.stats .number');
let started = false; 

window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop - 300) {
        if (!started) {
            numbers.forEach(num => startCount(num));
            started = true;
        }
    }
};

function startCount(el) {
    let goal = parseInt(el.textContent);
    el.textContent = "0";
    let count = setInterval(() => {
        el.textContent = parseInt(el.textContent) + 1;
        if (parseInt(el.textContent) >= goal) {
            clearInterval(count);
        }
    }, 2000 / goal); // 2 seconds for all numbers
}
