function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
window.addEventListener('load', function() {
  const imageContainer = document.querySelector('.image-container');
  const images = imageContainer.querySelectorAll('img');

  function setImageSize() {
    const containerWidth = imageContainer.offsetWidth;
    const imageWidth = containerWidth / images.length - 3; // Jarak antar gambar 3mm

    images.forEach(function(image) {
      image.style.width = `${imageWidth}px`;
      image.style.height = 'auto'; // Mengatur tinggi gambar secara proporsional
    });
  }

  window.addEventListener('resize', setImageSize);
  setImageSize();
});

// slideshow
window.addEventListener('load', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide() {
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });

    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
  }

  setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik

  const slideshow = document.querySelector('.slideshow');
  const prevBtn = document.createElement('button');
  prevBtn.classList.add('prev-btn');
  prevBtn.innerHTML = '&lt;';
  slideshow.appendChild(prevBtn);

  const nextBtn = document.createElement('button');
  nextBtn.classList.add('next-btn');
  nextBtn.innerHTML = '&gt;';
  slideshow.appendChild(nextBtn);

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  showSlide();
});
// product
window.addEventListener('resize', resizeImages);

function resizeImages() {
  const productImages = document.querySelectorAll('.product-image');
  const containerWidth = document.querySelector('.product-container').clientWidth;

  productImages.forEach((image) => {
    image.style.width = containerWidth * 0.25 - 10 + 'px';
    image.style.height = (containerWidth * 0.25 - 10) * (428 / 321) + 'px';
  });
}

resizeImages();
