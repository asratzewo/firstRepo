window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 100)
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        const icon = faq.querySelector('.plus')
        if(icon.innerText == "+"){
            icon.innerText = "-";
        } else {
            icon.innerText = "+"
        }
    })
});



// progress bar

const pb = document.querySelector('#progress-bar');
const body = document.querySelector('body');

const animateProgressBar = () => {
    let scrollDistance = - body.getBoundingClientRect().top;
    let scrollHeight = body.getBoundingClientRect().height;
    let progressWidth = (scrollDistance / (scrollHeight - document.documentElement.clientHeight)) * 100;

    let value = Math.floor(progressWidth);
    console.log(value);

    pb.style.width = value + '%';

}

window.addEventListener('scroll', animateProgressBar);


const menu = document.querySelector(".nav_menu");
const open_menu = document.querySelector("#open_menu");
const close_menu = document.querySelector("#close_menu");

open_menu.addEventListener('click', () => {
    menu.style.display = "flex";
    close_menu.style.display = "inline-block";
    open_menu.style.display = "none";
});

close_menu.addEventListener('click', () => {
    menu.style.display = "none";
    close_menu.style.display = "none";
    open_menu.style.display = "inline-block";
})

