let currentSlide = 0;

function initLesson() {
  if (!window.slides || !Array.isArray(window.slides)) {
    showLessonError("Variabel <b>window.slides</b> tidak ditemukan.");
    return;
  }

  if (window.slides.length === 0) {
    showLessonError("Slide kosong.");
    return;
  }

  currentSlide = 0;
  renderSlide();
}

function renderSlide() {
  const content = document.getElementById("slideContent");
  const counter = document.getElementById("slideCounter");

  if (!content || !counter) return;

  content.innerHTML = window.slides[currentSlide].content;
  counter.innerText = `${currentSlide + 1} / ${window.slides.length}`;

  renderThumbs();
  renderMath();
}

function renderThumbs() {
  const thumbs = document.getElementById("slideThumbs");
  if (!thumbs) return;

  thumbs.innerHTML = "";

  window.slides.forEach((slide, index) => {
    const btn = document.createElement("button");
    btn.className = `slide-thumb ${index === currentSlide ? "active" : ""}`;

    btn.innerHTML = `
      <span>${index + 1}</span>
      <p>${slide.title}</p>
    `;

    btn.onclick = function () {
      currentSlide = index;
      renderSlide();
    };

    thumbs.appendChild(btn);
  });
}

function renderMath() {
  const content = document.getElementById("slideContent");

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetClear([content]);
    MathJax.typesetPromise([content]);
  }
}

function nextSlide() {
  if (!window.slides) return;

  if (currentSlide < window.slides.length - 1) {
    currentSlide++;
    renderSlide();
  }
}

function prevSlide() {
  if (!window.slides) return;

  if (currentSlide > 0) {
    currentSlide--;
    renderSlide();
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function downloadPDF() {
  window.print();
}

function showLessonError(message) {
  const content = document.getElementById("slideContent");

  if (!content) return;

  content.innerHTML = `
    <div class="error-box">
      <i class="bi bi-exclamation-triangle-fill"></i>
      <h2>Materi Tidak Ditemukan</h2>
      <p>${message}</p>
    </div>
  `;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});
