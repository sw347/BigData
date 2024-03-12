// main.js
document.addEventListener('DOMContentLoaded', function() {
    const sliderContent = document.getElementById('sliderContent'); // 오타 수정: getElementsById -> getElementById
    let slideIndex = 0;
  
    function nextSlide() {
      slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
      updateSlider();
    }
  
    function updateSlider() {
      const translateValue = -slideIndex * 100 + '%';
      sliderContent.style.transform = `translateX(${translateValue})`; // 오타 수정: ' -> `
    }
  
    // 자동 슬라이드 설정 3초 = 3000
    setInterval(nextSlide, 3000);
  });
  