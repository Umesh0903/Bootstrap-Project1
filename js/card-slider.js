document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");
    const slides = document.querySelectorAll(".slide");
    const prevArrow = document.getElementById("prevArrow");
    const nextArrow = document.getElementById("nextArrow");
  
    let currentIndex = 0;
  
    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
  
    prevArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });
  
    nextArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });
  });
  