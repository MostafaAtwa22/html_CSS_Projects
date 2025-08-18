// Handle the slider
let images = document.querySelectorAll('.landing .images img');
let imagesSlider = Array.from(images);

let NumberOfImages = imagesSlider.length;
let currentSlide = 1;

let nextBtn = document.querySelector('.landing .next');
let prevBtn = document.querySelector('.landing .prev');

prevBtn.addEventListener('click', HandelPrev);
nextBtn.addEventListener('click', HandelNext);

let bullets = document.querySelector('.bullets');

for (let i = 1; i <= NumberOfImages; i++) {
    let li = document.createElement('li');
    li.setAttribute('data-index', i);
    bullets.appendChild(li);
}

let pagenationBtns = document.querySelectorAll('.bullets li');
pagenationBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.getAttribute('data-index'));
        checker();
    });
})
checker();
function HandelPrev () { 
    if (prevBtn.classList.contains('disabled'))
        return;

    currentSlide--;
    checker();
}

function HandelNext () {
    if (nextBtn.classList.contains('disabled'))
        return;

    currentSlide++;
    checker();
}

function checker () {
    removeAllActive();
    imagesSlider[currentSlide - 1].classList.add('active');
    bullets.children[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

    if (currentSlide == NumberOfImages) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

function removeAllActive () {
    imagesSlider.forEach((img) => {
        img.classList.remove('active');
    });

    for(let i = 0; i < NumberOfImages; i++) {
        bullets.children[i].classList.remove('active');
    }
}

// Our skills Section from 0 to max precentage
let skills = document.querySelector('.our-skills');
let skillsProgress = document.querySelectorAll('.my-skills .prog-holder .prog span');

window.addEventListener('scroll', () => {
    if (window.scrollY >= skills.offsetTop - 300) {
        skillsProgress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
});


// statastics animation
let statistics = document.querySelector('.statistics');
let contentValue = document.querySelectorAll('.statistics .container .box h2');
let started = false;

window.addEventListener('scroll', () => {
    if (window.scrollY >= statistics.offsetTop - 300) {
        if (!started) {
            contentValue.forEach((value) => {
                startCount(value);
            });
            started = true;
        }
    }
});

function startCount(value) {
    let goal = parseInt(value.textContent.replace(/,/g, ""));
    let count = 0;

    value.textContent = "0";

    let step = Math.ceil(goal / (2000 / 20)); 

    let counter = setInterval(() => {
        count += step;
        if (count >= goal) {
            value.textContent = goal.toLocaleString();
            clearInterval(counter);
        } else {
            value.textContent = count.toLocaleString(); 
        }
    }, 20);
}
