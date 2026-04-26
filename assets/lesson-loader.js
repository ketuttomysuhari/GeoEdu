let currentSlide = 0;

function initLesson() {
  if (!window.slides || !Array.isArray(window.slides)) {
    showLessonError("window.slides tidak ditemukan.");
    return;
  }

  currentSlide = 0;
  renderSlide();
}

function renderSlide() {
  const slideContent = document.getElementById("slideContent");
  const slideCounter = document.getElementById("slideCounter");

  if (!slideContent) return;

  slideContent.innerHTML = window.slides[currentSlide].content;
  slideCounter.innerText =
    `${currentSlide + 1} / ${window.slides.length}`;

  renderThumbs();

  /* render matematika */
  renderMath();
}

function renderMath() {
  const target = document.getElementById("slideContent");

  if (!window.MathJax) return;

  if (MathJax.typesetClear) {
    MathJax.typesetClear([target]);
  }

  if (MathJax.typesetPromise) {
    MathJax.typesetPromise([target]).catch(err => {
      console.log(err);
    });
  }
}

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

function nextSlide() {
  if (currentSlide < window.slides.length - 1) {
    currentSlide++;
    renderSlide();
  }
}

function prevSlide() {
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

function showLessonError(msg) {
  document.getElementById("slideContent").innerHTML = `
    <div class="text-center py-5">
      <h2>Error</h2>
      <p>${msg}</p>
    </div>
  `;
}

document.addEventListener("keydown", function(e){
  if(e.key==="ArrowRight") nextSlide();
  if(e.key==="ArrowLeft") prevSlide();
});
