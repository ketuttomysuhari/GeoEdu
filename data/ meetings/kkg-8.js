/* ==========================================================
   FILE : data/meetings/kkg-8.js
   MATA KULIAH : Kerangka Kontrol Geodesi
   PERTEMUAN 8 : Adjustment / Perataan Pengukuran
   DOSEN : Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
   TOTAL : 32 Slides
========================================================== */

window.slides = [

/* ====================================================== */
{
title:"Cover",
content:`
<div class="cover-slide">
<span class="badge bg-warning text-dark mb-3">Pertemuan 8</span>
<h1>KERANGKA KONTROL GEODESI</h1>
<h3>Adjustment / Perataan Pengukuran</h3>
<p class="lead mt-4">
Teori, Konsep, Ilustrasi, Contoh Hitungan, dan Aplikasi Jaringan Geodesi
</p>

<div class="lecturer-box mt-5">
Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
</div>
</div>
`
},

/* ====================================================== */
{
title:"Capaian Pembelajaran",
content:`
<h2>Capaian Pembelajaran</h2>

<div class="info-box">
<h5>Setelah pertemuan ini mahasiswa mampu:</h5>
<ul class="fs-5">
<li>Menjelaskan konsep adjustment pada survei geodesi.</li>
<li>Membedakan jenis kesalahan pengukuran.</li>
<li>Menggunakan prinsip Least Squares.</li>
<li>Menghitung misclosure sederhana.</li>
<li>Memahami kovariansi dan ketelitian hasil.</li>
<li>Menganalisis jaringan kontrol horizontal maupun vertikal.</li>
</ul>
</div>
`
},

/* ====================================================== */
{
title:"Outline",
content:`
<h2>Outline Materi</h2>

<div class="row g-3">

<div class="col-md-6">
<div class="info-box">
<ol>
<li>Pendahuluan</li>
<li>Konsep error pengukuran</li>
<li>Mengapa perlu adjustment</li>
<li>Distribusi normal</li>
<li>Least Squares</li>
<li>Bobot pengamatan</li>
</ol>
</div>
</div>

<div class="col-md-6">
<div class="info-box">
<ol start="7">
<li>Model matematis jaringan</li>
<li>Perataan poligon</li>
<li>Perataan leveling</li>
<li>Adjustment GNSS</li>
<li>Ketelitian hasil</li>
<li>Studi kasus dan latihan</li>
</ol>
</div>
</div>

</div>
`
},

/* ====================================================== */
{
title:"Definisi KKG",
content:`
<h2>I. Pendahuluan</h2>
<h4>1.1 Kerangka Kontrol Geodesi</h4>

<p>
Kerangka Kontrol Geodesi adalah sistem titik-titik referensi yang memiliki koordinat
dengan ketelitian tinggi dan digunakan sebagai dasar seluruh pengukuran spasial.
</p>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box">
<h5>Jenis</h5>
<ul>
<li>Kontrol Horizontal</li>
<li>Kontrol Vertikal</li>
<li>Kontrol 3D</li>
<li>Kontrol GNSS / CORS</li>
</ul>
</div>
</div>

<div class="col-md-6">
<div class="info-box">
<h5>Aplikasi</h5>
<ul>
<li>Pemetaan nasional</li>
<li>Kadaster</li>
<li>Monitoring bendungan</li>
<li>Jalan tol dan konstruksi</li>
</ul>
</div>
</div>
</div>
`
},

/* ====================================================== */
{
title:"Mengapa Adjustment",
content:`
<h2>1.2 Mengapa Perlu Adjustment?</h2>

<p>
Observasi lapangan selalu mengandung kesalahan. Jika tidak dilakukan perataan,
maka hasil koordinat menjadi tidak konsisten.
</p>

<div class="example-box">
<b>Contoh:</b><br>
Jarak AB diukur tiga kali:
<ul>
<li>100.024 m</li>
<li>100.019 m</li>
<li>100.027 m</li>
</ul>
</div>

<div class="math-box math-display" data-tex="\\bar{x}=\\frac{100.024+100.019+100.027}{3}=100.0233\\,m"></div>

<div class="note-box">
Adjustment mencari nilai paling mungkin dari beberapa observasi.
</div>
`
},

/* ====================================================== */
{
title:"Konsep Redundansi",
content:`
<h2>1.3 Redundansi Pengamatan</h2>

<p>
Redundansi adalah jumlah observasi yang melebihi minimum yang diperlukan.
Redundansi penting untuk kontrol kualitas dan deteksi kesalahan.
</p>

<div class="math-box math-display" data-tex="r=n-u"></div>

<ul>
<li><b>n</b> = jumlah observasi</li>
<li><b>u</b> = jumlah parameter tak diketahui</li>
<li><b>r</b> = redundansi / derajat bebas</li>
</ul>

<div class="example-box">
Jika 10 observasi digunakan untuk mencari 6 parameter:
<br><br>
r = 10 - 6 = 4
</div>
`
},

/* ====================================================== */
{
title:"Jenis Kesalahan",
content:`
<h2>II. Jenis Kesalahan</h2>

<div class="row g-3">

<div class="col-md-4">
<div class="info-box h-100">
<h5>Blunder</h5>
Kesalahan kasar akibat manusia.
<br><br>
Contoh: salah input angka.
</div>
</div>

<div class="col-md-4">
<div class="info-box h-100">
<h5>Sistematis</h5>
Kesalahan berpola.
<br><br>
Contoh: koreksi suhu pita ukur.
</div>
</div>

<div class="col-md-4">
<div class="info-box h-100">
<h5>Acak</h5>
Kesalahan kecil tak beraturan.
<br><br>
Contoh: getaran tripod.
</div>
</div>

</div>
`
},

/* ====================================================== */
{
title:"Ilustrasi Error",
content:`
<h2>2.1 Ilustrasi Error</h2>

<div class="row g-3">

<div class="col-md-6">
<div class="info-box">
<h5>Target Sebenarnya</h5>
<p>Titik berada di posisi tetap.</p>
</div>
</div>

<div class="col-md-6">
<div class="info-box">
<h5>Hasil Pengukuran Berulang</h5>
<p>
Titik hasil menyebar di sekitar posisi sebenarnya.
Semakin rapat sebaran, semakin presisi.
</p>
</div>
</div>

</div>

<div class="note-box mt-4">
Akurasi = dekat pusat sebenarnya.  
Presisi = rapat antar hasil pengukuran.
</div>
`
},

/* ====================================================== */
{
title:"Distribusi Normal",
content:`
<h2>III. Distribusi Kesalahan</h2>

<p>
Kesalahan acak umumnya mengikuti distribusi normal.
</p>

<div class="math-box math-display"
data-tex="f(e)=\\frac{1}{\\sigma\\sqrt{2\\pi}}\\exp\\left(-\\frac{e^2}{2\\sigma^2}\\right)">
</div>

<div class="info-box">
<ul>
<li>Error kecil paling sering terjadi</li>
<li>Error besar jarang terjadi</li>
<li>Distribusi simetris terhadap nol</li>
</ul>
</div>
`
},

/* ====================================================== */
{
title:"68-95-99 Rule",
content:`
<h2>3.1 Aturan 68% - 95% - 99.7%</h2>

<div class="info-box">
<ul>
<li>68% data berada pada ±1σ</li>
<li>95% data berada pada ±2σ</li>
<li>99.7% data berada pada ±3σ</li>
</ul>
</div>

<div class="note-box">
Digunakan untuk mendeteksi observasi yang menyimpang ekstrem.
</div>
`
},

/* ====================================================== */
{
title:"Least Squares",
content:`
<h2>IV. Least Squares</h2>

<p>
Prinsip utama:
</p>

<div class="math-box math-display"
data-tex="\\sum_{i=1}^{n} v_i^2 = min">
</div>

<p>
Residual = selisih antara observasi dan hasil hitungan.
</p>

<div class="example-box">
Jika residual kecil, model dianggap baik.
</div>
`
},

/* ====================================================== */
{
title:"Weighted Least Squares",
content:`
<h2>4.1 Weighted Least Squares</h2>

<div class="math-box math-display"
data-tex="\\Phi=v^TPv=min">
</div>

<ul>
<li>P = matriks bobot</li>
<li>Data lebih teliti → bobot lebih besar</li>
<li>Data kasar → bobot lebih kecil</li>
</ul>
`
},

/* ====================================================== */
{
title:"Bobot",
content:`
<h2>4.2 Bobot Pengamatan</h2>

<div class="math-box math-display"
data-tex="p_i=\\frac{1}{\\sigma_i^2}">
</div>

<div class="example-box">
σ = 2 mm → p = 0.25  
<br>
σ = 5 mm → p = 0.04
</div>

<div class="note-box">
Observasi 2 mm lebih dipercaya daripada 5 mm.
</div>
`
},

/* ====================================================== */
{
title:"Model Linear",
content:`
<h2>V. Model Matematis</h2>

<div class="math-box math-display"
data-tex="v=A\\hat{x}-l">
</div>

<ul>
<li>A = matriks desain</li>
<li>x̂ = parameter estimasi</li>
<li>l = observasi</li>
<li>v = residual</li>
</ul>
`
},

/* ====================================================== */
{
title:"Normal Equation",
content:`
<h2>5.1 Persamaan Normal</h2>

<div class="math-box math-display"
data-tex="A^TPA\\hat{x}=A^TPl">
</div>

<div class="math-box math-display"
data-tex="\\hat{x}=(A^TPA)^{-1}A^TPl">
</div>

<div class="note-box">
Digunakan dalam hampir semua software adjustment geodesi.
</div>
`
},

/* ====================================================== */
{
title:"Rata-rata Sederhana",
content:`
<h2>VI. Contoh 1 - Rata-rata</h2>

<div class="example-box">
25.124 m  
25.118 m  
25.121 m
</div>

<div class="math-box math-display"
data-tex="\\bar{x}=\\frac{25.124+25.118+25.121}{3}=25.121">
</div>
`
},

/* ====================================================== */
{
title:"Residual",
content:`
<h2>6.1 Residual</h2>

<div class="math-box math-display"
data-tex="v_i=l_i-\\bar{x}">
</div>

<div class="info-box">
<ul>
<li>v₁ = +0.003</li>
<li>v₂ = -0.003</li>
<li>v₃ = 0.000</li>
</ul>
</div>
`
},

/* ====================================================== */
{
title:"Standar Deviasi",
content:`
<h2>6.2 Standar Deviasi</h2>

<div class="math-box math-display"
data-tex="s=\\sqrt{\\frac{\\sum v_i^2}{n-1}}">
</div>

<div class="note-box">
Menunjukkan sebaran data terhadap rata-rata.
</div>
`
},

/* ====================================================== */
{
title:"Poligon",
content:`
<h2>VII. Adjustment Poligon</h2>

<div class="math-box math-display"
data-tex="\\sum\\beta=(n-2)180^\\circ">
</div>

<p>Untuk 4 titik:</p>

<div class="math-box math-display"
data-tex="(4-2)180^\\circ=360^\\circ">
</div>
`
},

/* ====================================================== */
{
title:"Misclosure Sudut",
content:`
<h2>7.1 Misclosure Sudut</h2>

Sudut ukur:
<ul>
<li>90°00'10"</li>
<li>89°59'55"</li>
<li>90°00'05"</li>
<li>90°00'08"</li>
</ul>

<div class="math-box math-display"
data-tex="f_\\beta=+18''">
</div>
`
},

/* ====================================================== */
{
title:"Distribusi Koreksi",
content:`
<h2>7.2 Distribusi Koreksi</h2>

<div class="math-box math-display"
data-tex="c_i=-\\frac{f_\\beta}{n}">
</div>

<div class="math-box math-display"
data-tex="c_i=-\\frac{18''}{4}=-4.5''">
</div>

<div class="note-box">
Setiap sudut dikoreksi -4.5 detik.
</div>
`
},

/* ====================================================== */
{
title:"Leveling",
content:`
<h2>VIII. Adjustment Leveling</h2>

<div class="math-box math-display"
data-tex="\\sum BS - \\sum FS = \\Delta H">
</div>

<div class="example-box">
Jika beda tinggi teoritis 10.000 m  
hasil ukur 10.006 m  
misclosure = +0.006 m
</div>
`
},

/* ====================================================== */
{
title:"Distribusi Leveling",
content:`
<h2>8.1 Distribusi Misclosure Leveling</h2>

<div class="math-box math-display"
data-tex="c_i=-f\\frac{L_i}{\\sum L}">
</div>

<ul>
<li>Lᵢ = panjang segmen</li>
<li>f = misclosure</li>
</ul>
`
},

/* ====================================================== */
{
title:"GNSS",
content:`
<h2>IX. Adjustment GNSS Statik</h2>

<div class="info-box">
<ul>
<li>AB = 1542.334 m</li>
<li>BC = 2130.112 m</li>
<li>AC = 3672.451 m</li>
</ul>
</div>

<div class="math-box math-display"
data-tex="AB+BC=3672.446">
</div>

<div class="math-box math-display"
data-tex="f=-0.005m">
</div>
`
},

/* ====================================================== */
{
title:"GNSS Meaning",
content:`
<h2>9.1 Interpretasi GNSS</h2>

<div class="note-box">
Misclosure 5 mm menunjukkan jaringan sangat baik.
Namun tetap perlu adjustment untuk konsistensi koordinat akhir.
</div>
`
},

/* ====================================================== */
{
title:"Kovariansi",
content:`
<h2>X. Ketelitian Hasil</h2>

<div class="math-box math-display"
data-tex="\\Sigma_{\\hat{x}}=\\hat{\\sigma}_0^2(A^TPA)^{-1}">
</div>

<div class="math-box math-display"
data-tex="\\hat{\\sigma}_0^2=\\frac{v^TPv}{n-u}">
</div>
`
},

/* ====================================================== */
{
title:"Error Ellipse",
content:`
<h2>10.1 Error Ellipse</h2>

<div class="info-box">
<ul>
<li>Sumbu mayor = arah error terbesar</li>
<li>Sumbu minor = arah error terkecil</li>
<li>Semakin kecil ellipse → semakin teliti</li>
</ul>
</div>
`
},

/* ====================================================== */
{
title:"Deteksi Blunder",
content:`
<h2>XI. Uji Residual</h2>

<div class="math-box math-display"
data-tex="r_i=\\frac{v_i}{\\sigma_{v_i}}">
</div>

<div class="note-box">
Jika |rᵢ| sangat besar, observasi dicurigai blunder.
</div>
`
},

/* ====================================================== */
{
title:"Studi Kasus Bendungan",
content:`
<h2>XII. Studi Kasus Monitoring Bendungan</h2>

<p>
Titik kontrol di bendungan diukur tiap bulan.
Jika koordinat bergeser melebihi toleransi,
maka struktur perlu diperiksa.
</p>

<div class="example-box">
Shift = 8 mm horizontal  
Shift = 3 mm vertikal
</div>
`
},

/* ====================================================== */
{
title:"Studi Kasus Jalan Tol",
content:`
<h2>12.1 Studi Kasus Jalan Tol</h2>

<p>
Jaringan kontrol digunakan untuk staking out alignment jalan.
Jika titik kontrol salah 2 cm, maka trase jalan ikut bergeser.
</p>
`
},

/* ====================================================== */
{
title:"Latihan 1",
content:`
<h2>XIII. Latihan</h2>

<div class="example-box">
Jarak diukur:
50.120  
50.126  
50.124
</div>

<p>
Hitung rata-rata dan residual.
</p>
`
},

/* ====================================================== */
{
title:"Latihan 2",
content:`
<h2>13.1 Latihan</h2>

<p>
Sudut poligon 5 titik memiliki misclosure +25".
Berapa koreksi tiap sudut?
</p>

<div class="math-box math-display"
data-tex="c_i=-\\frac{25''}{5}=-5''">
</div>
`
},

/* ====================================================== */
{
title:"Kesimpulan",
content:`
<h2>XIV. Kesimpulan</h2>

<ul class="fs-5">
<li>Semua pengukuran mengandung error.</li>
<li>Adjustment diperlukan agar hasil konsisten.</li>
<li>Least Squares adalah metode utama.</li>
<li>Bobot penting untuk kualitas data berbeda.</li>
<li>Hasil akhir harus disertai ketelitian.</li>
</ul>
`
},

/* ====================================================== */
{
title:"Diskusi",
content:`
<h2>Diskusi Kelas</h2>

<ol class="fs-5">
<li>Mengapa redundansi penting?</li>
<li>Kenapa GNSS statik lebih teliti dari RTK?</li>
<li>Bagaimana AI mendeteksi blunder otomatis?</li>
<li>Mengapa koordinat harus punya error ellipse?</li>
</ol>
`
},

/* ====================================================== */
{
title:"Quote",
content:`
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
