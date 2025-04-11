const heroSlider = document.querySelector('#heroSlider');
const carousel = new bootstrap.Carousel(heroSlider, {
  interval: 4000,  // 4 seconds
  ride: 'carousel',
  pause: false
});