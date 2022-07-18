const menuButton = document.getElementById('menu-button');
const mainNav = document.getElementById('main-nav');
const slider = document.getElementById('slider');
const sliderImages = document.querySelectorAll('.slider__picture');
const sliderControl = document.getElementById('slider-switch');
const sliderControlButtons = document.querySelectorAll('.slider-switch__button');
const sliderCards = document.querySelectorAll('.card');

menuButton.addEventListener('click', (e) => {
  if (mainNav.classList.contains('main-nav-container--active')) {
    toggleMenu(false);
  } else {
    toggleMenu(true);
  }
});

mainNav.addEventListener('click', (e) => {
  if (e.target.classList.contains('main-nav-container')) {
    toggleMenu(false);
  }
});

sliderControlButtons.forEach(controlButton => {
  controlButton.addEventListener('click', (e) => {
    console.log('Clicked');
    console.log(controlButton.dataset.id)
  })
});

const toggleMenu = (active) => {
  if (active) {
    mainNav.classList.add('main-nav-container--active');
    menuButton.classList.add('menu-button--active');
  } else {
    mainNav.classList.remove('main-nav-container--active');
    menuButton.classList.remove('menu-button--active');
  }
}