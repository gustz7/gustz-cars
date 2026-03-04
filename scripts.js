const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const container = document.querySelector('.container');
const items = document.querySelectorAll('.list .item');
const indicator = document.querySelector('.indicators'); // Ajustado para bater com o HTML
const dots = indicator.querySelectorAll('ul li');
const numberDisplay = indicator.querySelector('.number');

let active = 0;
const lastPosition = items.length - 1;
let autoSlide;

function updateActiveItem() {
    
    document.querySelector('.list .item.active')?.classList.remove('active');
    document.querySelector('.indicators ul li.active')?.classList.remove('active');
    

    items[active].classList.add('active');
    dots[active].classList.add('active');


    numberDisplay.textContent = String(active + 1).padStart(2, '0');
}

function nextSlide() {
    active = (active + 1 > lastPosition) ? 0 : active + 1;
    updateActiveItem();
}

function prevSlide() {
    active = (active - 1 < 0) ? lastPosition : active - 1;
    updateActiveItem();
}


nextButton.onclick = () => {
    nextSlide();
    resetAutoSlide();
}

prevButton.onclick = () => {
    prevSlide();
    resetAutoSlide();
}


function startAutoSlide() {

    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 5000); 
}

function resetAutoSlide() {
    startAutoSlide();
}


container.addEventListener('mouseenter', () => clearInterval(autoSlide));
container.addEventListener('mouseleave', startAutoSlide);


startAutoSlide();