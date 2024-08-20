const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderItems = Array.from(document.querySelectorAll(".slider-item"));
const totalItems = sliderItems.length;
const centralImage = document.getElementById("central-image");
const arrowLeft = document.getElementById("left-arrow");
const arrowRight = document.getElementById("right-arrow");
const dotsContainer = document.querySelector(".slider-dots");
let currentIndex = 0; // Индекс для начального изображения

// Инициализация точек навигации
function setupDots() {
  dotsContainer.innerHTML = ""; // Очистка контейнера точек
  sliderItems.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = index;
    if (index === currentIndex) {
      dot.classList.add("active");
    }
    dotsContainer.appendChild(dot);
  });
}

// Обновление слайдера и центрального изображения
function updateSlider() {
  // Пересчитываем смещение
  const offset =
    -currentIndex * (359 + 60) + (sliderWrapper.clientWidth - 780) / 2;
  sliderWrapper.style.transform = `translateX(${offset}px)`;

  // Центральное изображение
  centralImage.src = sliderItems[currentIndex].querySelector("img").src;

  // Обновление классов для непрозрачности
  sliderItems.forEach((item, index) => {
    item.classList.toggle("inactive", index !== currentIndex);
  });

  // Обновление активной точки
  setupDots();
}

// Обработка нажатий на стрелки
arrowLeft.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
  updateSlider();
});

arrowRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateSlider();
});

// Инициализация точек навигации и начального состояния
setupDots();
updateSlider();
