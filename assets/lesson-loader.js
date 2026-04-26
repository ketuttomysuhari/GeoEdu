/* =====================================================
   GeoEdu - lesson-loader.js
   Loader universal untuk semua mata kuliah / pertemuan
   Dipakai oleh:
   lesson.html?course=kkg&meeting=8
===================================================== */

/* ---------- helper math ---------- */
function renderMath() {
  if (!window.MathJax || !MathJax.typesetPromise) return;

  const target = document.getElementById("slideContent");
  if (!target) return;

  MathJax.typesetClear([target]);
  MathJax.typesetPromise([target]);
}

/* ---------- global state ---------- */
let currentSlide = 0;

/* ---------- init utama ---------- */
function initLesson() {
  if (!window.slides || !Array.isArray(window.slides)) {
    showLessonError(
      "Variabel <b>window.slides</b> tidak ditemukan pada file materi."
    );
    return;
  }

  if (window.slides.length === 0) {
    showLessonError("Slide kosong.");
    return;
  }

  currentSlide = 0;
  renderSlide();
}

/* ---------- render slide ---------- */
function renderSlide() {
  const slideContent = document.getElementById("slideContent");
  const slideCounter = document.getElementById("slideCounter");

  if (!slideContent || !slideCounter) return;

  const item = window.slides[currentSlide];

  slideContent.innerHTML = item.content;
  slideCounter.innerText =
    `${currentSlide + 1} / ${window.slides.length}`;

  renderThumbs();
  renderMath();
}

/* ---------- thumbnail sidebar ---------- */
function renderThumbs() {
  const thumbs = document.getElementById("slideThumbs");
  if (!thumbs) return;

  thumbs.innerHTML = "";

  window.slides.forEach((slide, index) => {
    const btn = document.createElement("button");

    btn.className =
      "slide-thumb " +
      (index === currentSlide ? "active" : "");

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

/* ---------- navigasi ---------- */
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

/* ---------- keyboard ---------- */
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

/* ---------- error helper ---------- */
function showLessonError(msg) {
  const box = document.getElementById("slideContent");

  if (!box) return;

  box.innerHTML = `
    <div class="text-center py-5">
      <h2 class="text-danger">Error</h2>
      <p>${msg}</p>
    </div>
  `;
}

/* ---------- fullscreen ---------- */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

/* ---------- print ---------- */
function downloadPDF() {
  window.print();
}

/* ---------- expose global ---------- */
window.initLesson = initLesson;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.toggleFullscreen = toggleFullscreen;
window.downloadPDF = downloadPDF;
