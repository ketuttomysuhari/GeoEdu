/* =========================================================
   GeoEdu - app.js
   Mata Kuliah : Kerangka Kontrol Geodesi
   Pertemuan 8 : Adjustment / Perataan Pengukuran
   Dosen       : Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
   ========================================================= */

const slides = [
{
title: "Cover",
content: `
<div class="cover-slide">
  <span class="badge bg-warning text-dark mb-3">Pertemuan 8</span>
  <h1>KERANGKA KONTROL GEODESI</h1>
  <h3>Adjustment / Perataan Pengukuran</h3>
  <p class="lead mt-4">Disusun untuk Mata Kuliah Kerangka Kontrol Geodesi</p>

  <div class="lecturer-box mt-5">
    Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
  </div>
</div>
`
},

{
title: "Pengantar KKG",
content: `
<h2>I. Pendahuluan & Konsep Dasar</h2>
<h4>1.1 Pengantar Kerangka Kontrol Geodesi</h4>

<p>
Kerangka Kontrol Geodesi (KKG) adalah jaringan titik tetap yang koordinatnya
ditentukan secara teliti dan menjadi referensi utama seluruh pekerjaan survei,
pemetaan, konstruksi, kadaster, dan monitoring deformasi.
</p>

<div class="row g-3 mt-2">
  <div class="col-md-6">
    <div class="info-box">
      <h5>Fungsi Utama</h5>
      <ul>
        <li>Fondasi Sistem Informasi Geografis</li>
        <li>Dasar pembangunan jalan dan jembatan</li>
        <li>Acuan batas bidang tanah</li>
        <li>Monitoring pergeseran tanah / bangunan</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6">
    <div class="info-box">
      <h5>Tujuan Pengukuran</h5>
      <ul>
        <li><b>Akurasi</b> = dekat nilai benar</li>
        <li><b>Presisi</b> = hasil konsisten</li>
        <li><b>Reliabilitas</b> = mampu deteksi error</li>
      </ul>
    </div>
  </div>
</div>

<div class="example-box mt-3">
<b>Contoh:</b> Titik BM nasional dipakai sebagai referensi pembangunan jalan tol.
</div>
`
},

{
title: "Mengapa Adjustment",
content: `
<h2>1.2 Mengapa Perlu Adjustment?</h2>

<p>
Pengukuran geodesi hampir selalu mengandung perbedaan hasil.
Nilai yang diukur berulang tidak identik karena adanya error.
</p>

<div class="math-box">
\$begin:math:display$
l\_i \= x \+ e\_i
\\$end:math:display$
</div>

<p>
Dengan:
</p>

<ul>
<li>\$begin:math:text$l\_i\\$end:math:text$ = observasi ke-i</li>
<li>\$begin:math:text$x\\$end:math:text$ = nilai benar</li>
<li>\$begin:math:text$e\_i\\$end:math:text$ = error</li>
</ul>

<div class="row g-3">
  <div class="col-md-6">
    <div class="info-box">
      <h5>Contoh Jarak AB</h5>
      <ul>
        <li>100.024 m</li>
        <li>100.019 m</li>
        <li>100.027 m</li>
      </ul>

      <div class="math-box small-math">
      \$begin:math:display$
      \\\\bar\{x\}\=\\\\frac\{100\.024\+100\.019\+100\.027\}\{3\}\=100\.0233\\\\\,m
      \\$end:math:display$
      </div>
    </div>
  </div>

  <div class="col-md-6">
    <div class="info-box">
      <h5>Tujuan Adjustment</h5>
      <ul>
        <li>Mendapat nilai terbaik</li>
        <li>Mengurangi pengaruh error acak</li>
        <li>Menghitung residual</li>
        <li>Menentukan ketelitian hasil</li>
      </ul>
    </div>
  </div>
</div>
`
},

{
title: "Jenis Kesalahan",
content: `
<h2>II. Teori Kesalahan</h2>
<h4>2.1 Jenis Kesalahan</h4>

<div class="row g-3">
  <div class="col-md-4">
    <div class="info-box h-100">
      <h5>1. Blunder</h5>
      <p>Kesalahan kasar akibat salah baca, salah catat, salah target.</p>
      <b>Contoh:</b> 25.123 menjadi 52.123
    </div>
  </div>

  <div class="col-md-4">
    <div class="info-box h-100">
      <h5>2. Sistematis</h5>
      <p>Kesalahan berpola dan dapat dikoreksi.</p>
      <b>Contoh:</b> suhu, tekanan, konstanta alat.
    </div>
  </div>

  <div class="col-md-4">
    <div class="info-box h-100">
      <h5>3. Acak</h5>
      <p>Kesalahan kecil tak beraturan.</p>
      <b>Contoh:</b> fluktuasi bacaan sudut.
    </div>
  </div>
</div>

<div class="note-box mt-4">
Adjustment terutama menangani kesalahan acak, setelah blunder dihapus dan kesalahan sistematis dikoreksi.
</div>
`
},

{
title: "Distribusi Normal",
content: `
<h2>2.2 Distribusi Kesalahan</h2>

<p>
Kesalahan acak biasanya diasumsikan mengikuti distribusi normal.
</p>

<div class="math-box">
\$begin:math:display$
f\(e\)\=\\\\frac\{1\}\{\\\\sigma\\\\sqrt\{2\\\\pi\}\}
\\\\exp\\\\left\(
\-\\\\frac\{e\^2\}\{2\\\\sigma\^2\}
\\\\right\)
\\$end:math:display$
</div>

<div class="row g-3">
  <div class="col-md-6">
    <div class="info-box">
      <h5>Makna</h5>
      <ul>
        <li>Error kecil lebih sering terjadi</li>
        <li>Error besar lebih jarang</li>
        <li>Distribusi simetris</li>
      </ul>
    </div>
  </div>

  <div class="col-md-6">
    <div class="info-box">
      <h5>Aplikasi</h5>
      <ul>
        <li>Analisis residual</li>
        <li>Uji statistik</li>
        <li>Estimasi ketelitian</li>
      </ul>
    </div>
  </div>
</div>
`
},

{
title: "Least Squares",
content: `
<h2>III. Metode Kuadrat Terkecil</h2>
<h4>3.1 Prinsip Least Squares</h4>

<p>
Parameter dicari sehingga jumlah kuadrat residual minimum.
</p>

<div class="math-box">
\$begin:math:display$
\\\\sum\_\{i\=1\}\^\{n\} v\_i\^2 \= \\\\min
\\$end:math:display$
</div>

<p>
Untuk pengamatan berbobot:
</p>

<div class="math-box">
\$begin:math:display$
\\\\Phi \= v\^T P v \= \\\\min
\\$end:math:display$
</div>

<div class="info-box">
<h5>Keterangan</h5>
<ul>
<li>\$begin:math:text$v\\$end:math:text$ = vektor residual</li>
<li>\$begin:math:text$P\\$end:math:text$ = matriks bobot</li>
<li>\$begin:math:text$\\\\Phi\\$end:math:text$ = fungsi objektif</li>
</ul>
</div>

<div class="example-box mt-3">
Pengamatan lebih teliti diberi bobot lebih besar.
</div>
`
},

{
title: "Model Parameter",
content: `
<h2>3.2 Model Adjustment</h2>

<p>
Model linear observasi:
</p>

<div class="math-box">
\$begin:math:display$
v \= A\\\\hat\{x\} \- l
\\$end:math:display$
</div>

<p>
Normal equation:
</p>

<div class="math-box">
\$begin:math:display$
A\^T P A \\\\hat\{x\}\=A\^T P l
\\$end:math:display$
</div>

<p>
Solusi:
</p>

<div class="math-box">
\$begin:math:display$
\\\\hat\{x\}\=\(A\^TPA\)\^\{\-1\}A\^TPl
\\$end:math:display$
</div>

<div class="info-box">
<ul>
<li>\$begin:math:text$A\\$end:math:text$ = matriks desain</li>
<li>\$begin:math:text$\\\\hat\{x\}\\$end:math:text$ = parameter estimasi</li>
<li>\$begin:math:text$l\\$end:math:text$ = observasi</li>
</ul>
</div>
`
},

{
title: "Bobot Pengamatan",
content: `
<h2>3.3 Bobot Pengamatan</h2>

<p>
Jika kualitas pengamatan berbeda, gunakan bobot:
</p>

<div class="math-box">
\$begin:math:display$
p\_i \= \\\\frac\{1\}\{\\\\sigma\_i\^2\}
\\$end:math:display$
</div>

<div class="example-box">
Contoh:
<br>
Pengamatan A: \$begin:math:text$\\\\sigma\=2mm\\$end:math:text$
<br>
Pengamatan B: \$begin:math:text$\\\\sigma\=5mm\\$end:math:text$
<br><br>
Maka A lebih teliti dan bobotnya lebih besar.
</div>
`
},

{
title: "Poligon Tertutup",
content: `
<h2>IV. Contoh Adjustment</h2>
<h4>4.1 Poligon Tertutup</h4>

<p>
Jumlah sudut teoritis:
</p>

<div class="math-box">
\$begin:math:display$
\\\\sum \\\\beta \= \(n\-2\)180\^\\\\circ
\\$end:math:display$
</div>

<p>
Untuk 4 titik:
</p>

<div class="math-box">
\$begin:math:display$
\(4\-2\)180\^\\\\circ\=360\^\\\\circ
\\$end:math:display$
</div>

<p>
Sudut ukur:
90°00’10”, 89°59’55”, 90°00’05”, 90°00’08”
</p>

<div class="math-box">
\$begin:math:display$
f\_\\\\beta \= \+18\"
\\$end:math:display$
\$begin:math:display$
c\_i\=\-\\\\frac\{18\"\}\{4\}\=\-4\.5\"
\\$end:math:display$
</div>

<div class="note-box">
Setiap sudut dikoreksi -4.5 detik.
</div>
`
},

{
title: "GNSS Statik",
content: `
<h2>4.2 Adjustment GNSS Statik</h2>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box">
<h5>Tahapan</h5>
<ol>
<li>Observasi 1–4 jam</li>
<li>Hitung baseline</li>
<li>Bentuk loop jaringan</li>
<li>Adjustment</li>
</ol>
</div>
</div>

<div class="col-md-6">
<div class="info-box">
<h5>Contoh</h5>
AB = 1542.334 m<br>
BC = 2130.112 m<br>
AC = 3672.451 m

<div class="math-box small-math">
\$begin:math:display$
AB\+BC\=3672\.446
\\$end:math:display$
\$begin:math:display$
f\=\-0\.005m
\\$end:math:display$
</div>
</div>
</div>
</div>

<div class="note-box mt-3">
Misclosure 5 mm harus diratakan ke jaringan.
</div>
`
},

{
title: "Ketelitian",
content: `
<h2>V. Ketelitian Hasil Adjustment</h2>

<div class="math-box">
\$begin:math:display$
\\\\Sigma\_\{\\\\hat\{x\}\}\=
\\\\hat\{\\\\sigma\}\_0\^2\(A\^TPA\)\^\{\-1\}
\\$end:math:display$
</div>

<div class="math-box">
\$begin:math:display$
\\\\hat\{\\\\sigma\}\_0\^2\=
\\\\frac\{v\^TPv\}\{n\-u\}
\\$end:math:display$
</div>

<div class="info-box">
<ul>
<li>\$begin:math:text$n\\$end:math:text$ = jumlah observasi</li>
<li>\$begin:math:text$u\\$end:math:text$ = jumlah parameter</li>
<li>\$begin:math:text$n\-u\\$end:math:text$ = derajat bebas</li>
</ul>
</div>

<div class="example-box">
Koordinat hasil adjustment harus disertai ketelitian.
</div>
`
},

{
title: "Latihan",
content: `
<h2>VI. Latihan Interaktif</h2>

<p>
Diketahui pengukuran jarak:
</p>

<ul>
<li>25.124 m</li>
<li>25.118 m</li>
<li>25.121 m</li>
</ul>

<div class="row g-2">
<div class="col-md-4">
<input id="obs1" class="form-control" value="25.124">
</div>

<div class="col-md-4">
<input id="obs2" class="form-control" value="25.118">
</div>

<div class="col-md-4">
<input id="obs3" class="form-control" value="25.121">
</div>
</div>

<button class="btn btn-primary mt-3" onclick="hitungLatihan()">
Hitung
</button>

<div id="latihanResult" class="result-box mt-3">
Hasil muncul di sini.
</div>
`
},

{
title: "Quote",
content: `
<div class="quote-slide">
<h2>
“No measurement is complete until its uncertainty is known.”
</h2>
<p>
Dalam geodesi, hasil ukur tanpa ketelitian belum lengkap.
</p>
</div>
`
}
];

/* ========================================================= */

let currentSlide = 0;

/* ========================================================= */

function renderSlide() {
const content = document.getElementById("slideContent");
const counter = document.getElementById("slideCounter");

content.innerHTML = slides[currentSlide].content;
counter.innerText = `${currentSlide + 1} / ${slides.length}`;

renderThumbs();

if (window.MathJax) {
MathJax.typesetPromise([content]);
}
}

function renderThumbs() {
const thumbs = document.getElementById("slideThumbs");
thumbs.innerHTML = "";

slides.forEach((slide, index) => {
const btn = document.createElement("button");
btn.className = `slide-thumb ${index === currentSlide ? "active" : ""}`;
btn.innerHTML = `
<span>${index + 1}</span>
<p>${slide.title}</p>
`;
btn.onclick = () => {
currentSlide = index;
renderSlide();
};
thumbs.appendChild(btn);
});
}

function nextSlide() {
if (currentSlide < slides.length - 1) {
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

function hitungLatihan() {
const values = [
parseFloat(document.getElementById("obs1").value),
parseFloat(document.getElementById("obs2").value),
parseFloat(document.getElementById("obs3").value)
];

if (values.some(isNaN)) {
document.getElementById("latihanResult").innerHTML = "Input tidak valid.";
return;
}

const n = values.length;
const mean = values.reduce((a,b)=>a+b,0)/n;

const residuals = values.map(v => v - mean);

const variance =
residuals.reduce((sum,r)=>sum+r*r,0)/(n-1);

const stdDev = Math.sqrt(variance);

document.getElementById("latihanResult").innerHTML = `
<b>Nilai terbaik:</b> ${mean.toFixed(4)} m<br>
<b>Residual:</b><br>
v1 = ${residuals[0].toFixed(4)} m<br>
v2 = ${residuals[1].toFixed(4)} m<br>
v3 = ${residuals[2].toFixed(4)} m<br>
<b>Standar deviasi:</b> ${stdDev.toFixed(4)} m
`;
}

document.addEventListener("keydown", function(e){
if(e.key==="ArrowRight") nextSlide();
if(e.key==="ArrowLeft") prevSlide();
});

document.addEventListener("DOMContentLoaded", renderSlide);
