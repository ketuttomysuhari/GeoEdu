window.slides = [

{
title:"Cover",
content:`
<div class="cover-slide">
<span class="badge bg-warning text-dark mb-3">Pertemuan 8</span>
<h1>KERANGKA KONTROL GEODESI</h1>
<h3>Adjustment / Perataan Pengukuran</h3>


<div class="lecturer-box mt-5">
Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
</div>
</div>
`
},

{
title:"Capaian",
content:`
<h2>Capaian Pembelajaran</h2>

<div class="info-box">
<ul class="fs-5">
<li>Memahami konsep adjustment.</li>
<li>Menjelaskan jenis kesalahan pengukuran.</li>
<li>Menggunakan metode least squares.</li>
<li>Menganalisis misclosure jaringan.</li>
<li>Memahami ketelitian hasil adjustment.</li>
</ul>
</div>
`
},

{
title:"Outline",
content:`
<h2>Outline Materi</h2>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box">
<ol>
<li>Pendahuluan</li>
<li>Kesalahan pengukuran</li>
<li>Distribusi normal</li>
<li>Least Squares</li>
<li>Bobot observasi</li>
</ol>
</div>
</div>

<div class="col-md-6">
<div class="info-box">
<ol start="6">
<li>Model matematis</li>
<li>Poligon tertutup</li>
<li>Leveling</li>
<li>GNSS</li>
<li>Ketelitian hasil</li>
</ol>
</div>
</div>
</div>
`
},

{
title:"Definisi",
content:`
<h2>I. Pendahuluan</h2>

<p>
Kerangka Kontrol Geodesi adalah jaringan titik tetap yang memiliki koordinat
teliti dan digunakan sebagai dasar survei serta pemetaan.
</p>

<div class="info-box">
<ul>
<li>Kontrol horizontal</li>
<li>Kontrol vertikal</li>
<li>Kontrol 3D</li>
<li>Jaringan GNSS</li>
</ul>
</div>
`
},

{
title:"Mengapa Adjustment",
content:`
<h2>Mengapa Perlu Adjustment?</h2>

<p>
Observasi lapangan tidak pernah sempurna. Nilai yang diukur berulang
akan berbeda karena error.
</p>

<div class="math-box math-display" data-tex="l_i=x+e_i"></div>

<ul>
<li>l_i = observasi</li>
<li>x = nilai benar</li>
<li>e_i = error</li>
</ul>

<div class="example-box">
Contoh jarak AB:
100.024 m, 100.019 m, 100.027 m
</div>
`
},

{
title:"Rata-rata",
content:`
<h2>Nilai Rata-rata</h2>

<div class="math-box math-display"
data-tex="\\bar{x}=\\frac{100.024+100.019+100.027}{3}=100.0233">
</div>

<div class="note-box">
Rata-rata adalah pendekatan awal nilai paling mungkin.
</div>
`
},

{
title:"Redundansi",
content:`
<h2>Redundansi Pengamatan</h2>

<div class="math-box math-display"
data-tex="r=n-u">
</div>

<ul>
<li>n = jumlah observasi</li>
<li>u = jumlah parameter</li>
<li>r = redundansi</li>
</ul>

<div class="example-box">
Jika n=10 dan u=6 maka r=4
</div>
`
},

{
title:"Jenis Error",
content:`
<h2>Jenis Kesalahan</h2>

<div class="row g-3">

<div class="col-md-4">
<div class="info-box h-100">
<h5>Blunder</h5>
Kesalahan kasar.
</div>
</div>

<div class="col-md-4">
<div class="info-box h-100">
<h5>Sistematis</h5>
Kesalahan berpola.
</div>
</div>

<div class="col-md-4">
<div class="info-box h-100">
<h5>Acak</h5>
Kesalahan kecil acak.
</div>
</div>

</div>
`
},

{
title:"Distribusi Normal",
content:`
<h2>Distribusi Normal</h2>

<div class="math-box math-display"
data-tex="f(e)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{e^2}{2\\sigma^2}}">
</div>

<div class="info-box">
<ul>
<li>Error kecil sering terjadi</li>
<li>Error besar jarang terjadi</li>
<li>Distribusi simetris</li>
</ul>
</div>
`
},

{
title:"Least Squares",
content:`
<h2>Least Squares</h2>

<div class="math-box math-display"
data-tex="\\sum v_i^2=min">
</div>

<p>
Cari parameter yang membuat jumlah kuadrat residual minimum.
</p>
`
},

{
title:"Weighted LS",
content:`
<h2>Weighted Least Squares</h2>

<div class="math-box math-display"
data-tex="\\Phi=v^TPv=min">
</div>

<ul>
<li>v = residual</li>
<li>P = bobot</li>
</ul>
`
},

{
title:"Bobot",
content:`
<h2>Bobot Pengamatan</h2>

<div class="math-box math-display"
data-tex="p_i=\\frac{1}{\\sigma_i^2}">
</div>

<div class="example-box">
Semakin kecil sigma, semakin besar bobot.
</div>
`
},

{
title:"Model Linear",
content:`
<h2>Model Linear</h2>

<div class="math-box math-display"
data-tex="v=A\\hat{x}-l">
</div>

<ul>
<li>A = matriks desain</li>
<li>xhat = parameter</li>
<li>l = observasi</li>
</ul>
`
},

{
title:"Normal Equation",
content:`
<h2>Normal Equation</h2>

<div class="math-box math-display"
data-tex="A^TPA\\hat{x}=A^TPl">
</div>

<div class="math-box math-display"
data-tex="\\hat{x}=(A^TPA)^{-1}A^TPl">
</div>
`
},

{
title:"Contoh 1",
content:`
<h2>Contoh Adjustment Sederhana</h2>

<div class="example-box">
25.124 m  
25.118 m  
25.121 m
</div>

<div class="math-box math-display"
data-tex="\\bar{x}=25.121">
</div>
`
},

{
title:"Residual",
content:`
<h2>Residual</h2>

<div class="math-box math-display"
data-tex="v_i=l_i-\\bar{x}">
</div>

<ul>
<li>v1 = +0.003</li>
<li>v2 = -0.003</li>
<li>v3 = 0.000</li>
</ul>
`
},

{
title:"Standar Deviasi",
content:`
<h2>Standar Deviasi</h2>

<div class="math-box math-display"
data-tex="s=\\sqrt{\\frac{\\sum v_i^2}{n-1}}">
</div>
`
},

{
title:"Poligon",
content:`
<h2>Poligon Tertutup</h2>

<div class="math-box math-display"
data-tex="\\sum \\beta=(n-2)180^\\circ">
</div>

<div class="example-box">
Untuk 4 titik = 360 derajat
</div>
`
},

{
title:"Misclosure Sudut",
content:`
<h2>Misclosure Sudut</h2>

<div class="math-box math-display"
data-tex="f_\\beta=+18''">
</div>

<div class="math-box math-display"
data-tex="c_i=-\\frac{18''}{4}=-4.5''">
</div>
`
},

{
title:"Leveling",
content:`
<h2>Adjustment Leveling</h2>

<div class="math-box math-display"
data-tex="\\sum BS-\\sum FS=\\Delta H">
</div>

<div class="example-box">
Misclosure leveling = +0.006 m
</div>
`
},

{
title:"Distribusi Leveling",
content:`
<h2>Koreksi Leveling</h2>

<div class="math-box math-display"
data-tex="c_i=-f\\frac{L_i}{\\sum L}">
</div>
`
},

{
title:"GNSS",
content:`
<h2>Adjustment GNSS</h2>

<div class="info-box">
AB = 1542.334 m<br>
BC = 2130.112 m<br>
AC = 3672.451 m
</div>

<div class="math-box math-display"
data-tex="AB+BC=3672.446">
</div>

<div class="math-box math-display"
data-tex="f=-0.005m">
</div>
`
},

{
title:"Kovariansi",
content:`
<h2>Ketelitian Hasil</h2>

<div class="math-box math-display"
data-tex="\\Sigma_x=\\hat{\\sigma}_0^2(A^TPA)^{-1}">
</div>
`
},

{
title:"Variansi",
content:`
<h2>Variansi Aposteriori</h2>

<div class="math-box math-display"
data-tex="\\hat{\\sigma}_0^2=\\frac{v^TPv}{n-u}">
</div>
`
},

{
title:"Error Ellipse",
content:`
<h2>Error Ellipse</h2>

<div class="info-box">
<ul>
<li>Sumbu mayor = arah error terbesar</li>
<li>Sumbu minor = arah error terkecil</li>
<li>Ellipse kecil = hasil teliti</li>
</ul>
</div>
`
},

{
title:"Deteksi Blunder",
content:`
<h2>Deteksi Blunder</h2>

<div class="math-box math-display"
data-tex="r_i=\\frac{v_i}{\\sigma_{v_i}}">
</div>

<div class="note-box">
Residual sangat besar perlu diperiksa.
</div>
`
},

{
title:"Monitoring",
content:`
<h2>Aplikasi Monitoring</h2>

<div class="example-box">
Bendungan bergeser 8 mm horizontal.
Perlu evaluasi struktural.
</div>
`
},

{
title:"Konstruksi",
content:`
<h2>Aplikasi Konstruksi</h2>

<p>
Jaringan kontrol digunakan untuk staking out jalan,
gedung, jembatan, dan terowongan.
</p>
`
},

{
title:"Latihan",
content:`
<h2>Latihan</h2>

<p>
Jika sudut poligon 5 titik memiliki misclosure +25'',
berapa koreksi tiap sudut?
</p>

<div class="math-box math-display"
data-tex="c_i=-\\frac{25''}{5}=-5''">
</div>
`
},

{
title:"Kesimpulan",
content:`
<h2>Kesimpulan</h2>

<ul class="fs-5">
<li>Semua pengukuran mengandung error.</li>
<li>Adjustment diperlukan agar hasil konsisten.</li>
<li>Least Squares metode utama.</li>
<li>Bobot penting untuk kualitas data berbeda.</li>
<li>Koordinat harus disertai ketelitian.</li>
</ul>
`
},

{
title:"Diskusi",
content:`
<h2>Diskusi</h2>

<ol class="fs-5">
<li>Mengapa redundansi penting?</li>
<li>Kenapa GNSS statik teliti?</li>
<li>Bagaimana AI mendeteksi blunder?</li>
</ol>
`
},

{
title:"Quote",
content:`
<div class="quote-slide">
<h2>
No measurement is complete until its uncertainty is known.
</h2>

<p>
Dalam geodesi, hasil ukur tanpa ketelitian belum lengkap.
</p>
</div>
`
}

];
