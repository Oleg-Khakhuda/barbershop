const slider = () => {
  const images = document.querySelectorAll('.slider__image');
  const prevButton = document.querySelector('.slider__btn-prev');
  const nextButton = document.querySelector('.slider__btn-next');
  const dots = document.querySelectorAll('.slider__counter');

  let currentImage = 0;
  let currentDot = 0;

  function showImage(index) {
    images[currentImage].classList.remove('active');
    currentImage = (index + images.length) % images.length;
    images[currentImage].classList.add('active');
  }

  function showDot(index) {
    dots[currentDot].classList.remove('active');
    currentDot = (index + dots.length) % dots.length;
    dots[currentDot].classList.add('active');
  }

  function showNextImage() {
    showImage(currentImage + 1);
    showDot(currentDot + 1);
  }

  function showPrevImage() {
    showImage(currentImage - 1);
    showDot(currentDot - 1);
  }

  nextButton.addEventListener('click', showNextImage);
  prevButton.addEventListener('click', showPrevImage);

  showImage(0);
  showDot(0);

  setInterval(() => {
    showNextImage();
  }, 7000);
};

slider();
