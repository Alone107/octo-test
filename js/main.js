const slide = document.querySelectorAll('.slider-line .category-block')
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;
let breakPoint;  
let x1 = null;
let flag = true;

function init() {
  width = document.querySelector('.block-slide').offsetWidth;
  console.log(width)
  sliderLine.style.width = width * slide.length + 'px';
  slide.forEach (item => {
    item.style.width = width + 'px'
  })
}

init();

function nextSlide () {
  // if (!flag) return;
  // flag = !flag;
  count++;
  breakPoint = document.querySelector('.breakpoint-next').offsetWidth;

  if (count >= slide.length - breakPoint) {
    count = 0;
  }
  rollSlider();
}

function prevSlide () {
  // if (!flag) return;
  // flag = !flag;
  count--;
  breakPoint = document.querySelector('.breakpoint-next').offsetWidth;
  if (count < 0) {
    count = slide.length - (breakPoint + 1);
  }
  rollSlider();
}


document.querySelector('.next-button').addEventListener('click', nextSlide);

document.querySelector('.prev-button').addEventListener('click', prevSlide)

document.querySelector('.slide').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.slide').addEventListener('touchend', handleTouchMove, false);

function rollSlider () {
  sliderLine.style.transform = 'translate(-' + ((count*width) + (30*count)) + 'px)';
  // flag = true;
}

function handleTouchStart (event) {
const firtTouch = event.touches[0];
x1 = firtTouch.clientX;
console.log(x1)
}

function handleTouchMove (event) {
  if (!x1) {
    return false;
  }
  let x2 = event.changedTouches[0].clientX;
  let xDiff = x2 - x1;
  if (xDiff > 0 ) {
    prevSlide();

  } if (xDiff < 0) {
    nextSlide();


  }
  console.log(xDiff)
}
