/* ==========================================================
   FILE : data/meetings/kkg-9.js
   MATA KULIAH : Kerangka Kontrol Geodesi
   PERTEMUAN 9 : Implementasi Adjustment Jaringan Kontrol Geodesi
   DOSEN : Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
   TOTAL : 40 Slides
========================================================== */

window.slides = [

/* ====================================================== */
{
title:"Cover",
content:`
<div class="cover-slide">
<span class="badge bg-warning text-dark mb-3">Pertemuan 9</span>
<h1>KERANGKA KONTROL GEODESI</h1>
<h3>Implementasi Adjustment Jaringan Kontrol Geodesi</h3>
<p class="lead mt-4">
Dari Teori Least Squares Menuju Perhitungan Jaringan Horizontal, Vertikal, dan GNSS
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
<li>Menjelaskan tahapan implementasi adjustment jaringan kontrol geodesi.</li>
<li>Menyusun model observasi sederhana dalam bentuk matriks.</li>
<li>Membentuk matriks desain ${"\$begin:math:text$A\\$end:math:text$"}, vektor observasi ${"\$begin:math:text$l\\$end:math:text$"}, dan matriks bobot ${"\$begin:math:text$P\\$end:math:text$"}.</li>
<li>Menghitung parameter koreksi menggunakan persamaan normal.</li>
<li>Menganalisis residual, standar deviasi, dan kualitas jaringan.</li>
<li>Menerapkan konsep adjustment pada leveling, poligon, dan jaringan GNSS.</li>
</ul>
</div>
`
},

/* ====================================================== */
{
title:"Keterkaitan Pertemuan 8 dan 9",
content:`
<h2>Hubungan Materi Sebelumnya</h2>

<p>
Pada Pertemuan 8, kita mempelajari teori dasar adjustment, jenis kesalahan,
distribusi error, Least Squares, bobot pengamatan, residual, dan ketelitian.
Pada Pertemuan 9, teori tersebut akan dibawa ke tahap implementasi.
</p>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box h-100">
<h5>Pertemuan 8</h5>
<ul>
<li>Konsep error</li>
<li>Least Squares</li>
<li>Bobot</li>
<li>Residual</li>
<li>Misclosure</li>
</ul>
</div>
</div>

<div class="col-md-6">
<div class="info-box h-100">
<h5>Pertemuan 9</h5>
<ul>
<li>Menyusun persamaan observasi</li>
<li>Membentuk matriks</li>
<li>Menghitung parameter</li>
<li>Menganalisis hasil</li>
<li>Implementasi jaringan</li>
</ul>
</div>
</div>
</div>

<div class="note-box mt-4">
Pertemuan 9 adalah jembatan antara teori matematis dan praktik komputasi adjustment.
</div>
`
},

/* ====================================================== */
{
title:"Filosofi Implementasi",
content:`
<h2>Filosofi Adjustment Jaringan</h2>

<p>
Dalam geodesi, pengukuran tidak hanya bertujuan menghasilkan angka.
Pengukuran harus menghasilkan posisi yang konsisten, dapat diuji,
dan dapat dipertanggungjawabkan.
</p>

<div class="quote-box">
<b>Filosofi Utama:</b><br>
Adjustment adalah proses mengubah data lapangan yang tidak sempurna
menjadi model posisi yang paling mungkin secara matematis.
</div>

<p>
Artinya, kita menerima bahwa observasi memiliki error.
Namun kita tidak berhenti pada kesalahan tersebut.
Kita mengolahnya agar menghasilkan keputusan spasial terbaik.
</p>

<div class="example-box">
Jika tiga jalur pengukuran menuju satu titik menghasilkan koordinat sedikit berbeda,
maka adjustment mencari satu koordinat akhir yang paling konsisten terhadap semua observasi.
</div>
`
},

/* ====================================================== */
{
title:"Alur Umum Adjustment",
content:`
<h2>I. Alur Umum Implementasi Adjustment</h2>

<div class="info-box">
<ol class="fs-5">
<li>Mengumpulkan data observasi lapangan.</li>
<li>Melakukan pengecekan blunder.</li>
<li>Menerapkan koreksi sistematis.</li>
<li>Menyusun model matematis observasi.</li>
<li>Membentuk matriks desain ${"\$begin:math:text$A\\$end:math:text$"}.</li>
<li>Membentuk vektor misclosure ${"\$begin:math:text$l\\$end:math:text$"}.</li>
<li>Menentukan matriks bobot ${"\$begin:math:text$P\\$end:math:text$"}.</li>
<li>Menyelesaikan persamaan normal.</li>
<li>Menghitung residual.</li>
<li>Menganalisis ketelitian dan kualitas hasil.</li>
</ol>
</div>

<div class="note-box">
Adjustment yang baik bukan hanya menghitung koordinat,
tetapi juga mengevaluasi kualitas data dan ketelitian hasil.
</div>
`
},

/* ====================================================== */
{
title:"Model Observasi Umum",
content:`
<h2>1.1 Model Observasi Umum</h2>

<p>
Model observasi menyatakan hubungan antara hasil pengukuran dan parameter
yang ingin dicari.
</p>

<div class="math-box math-display" data-tex="L_b + v = F(X_a)"></div>

<ul>
<li>${"\$begin:math:text$L\_b\\$end:math:text$"} = observasi lapangan</li>
<li>${"\$begin:math:text$v\\$end:math:text$"} = residual atau koreksi observasi</li>
<li>${"\$begin:math:text$F\(X\_a\)\\$end:math:text$"} = fungsi parameter yang dicari</li>
<li>${"\$begin:math:text$X\_a\\$end:math:text$"} = parameter akhir hasil adjustment</li>
</ul>

<div class="example-box">
Contoh sederhana:
<br>
Jika beda tinggi hasil ukur adalah 2.345 m, maka modelnya:
<div class="math-box math-display" data-tex="H_B - H_A = 2.345"></div>
</div>
`
},

/* ====================================================== */
{
title:"Model Linear",
content:`
<h2>1.2 Model Linear Adjustment</h2>

<p>
Banyak persoalan adjustment dapat dinyatakan dalam bentuk linear:
</p>

<div class="math-box math-display" data-tex="v=A\\hat{x}-l"></div>

<div class="info-box">
<ul>
<li>${"\$begin:math:text$A\\$end:math:text$"} = matriks desain</li>
<li>${"\$begin:math:text$\\\\hat\{x\}\\$end:math:text$"} = koreksi parameter</li>
<li>${"\$begin:math:text$l\\$end:math:text$"} = vektor misclosure</li>
<li>${"\$begin:math:text$v\\$end:math:text$"} = residual</li>
</ul>
</div>

<div class="note-box">
Matriks ${"\$begin:math:text$A\\$end:math:text$"} adalah jantung adjustment, karena menunjukkan hubungan
antara observasi dan parameter yang dicari.
</div>
`
},

/* ====================================================== */
{
title:"Makna Matriks A",
content:`
<h2>1.3 Makna Matriks Desain A</h2>

<p>
Matriks desain ${"\$begin:math:text$A\\$end:math:text$"} berisi koefisien yang menjelaskan bagaimana perubahan
parameter memengaruhi observasi.
</p>

<div class="math-box math-display" data-tex="A=\\frac{\\partial F}{\\partial X}"></div>

<div class="example-box">
Jika modelnya:
<div class="math-box math-display" data-tex="H_B-H_A=\\Delta h"></div>

Maka terhadap parameter ${"\$begin:math:text$H\_A\\$end:math:text$"} dan ${"\$begin:math:text$H\_B\\$end:math:text$"}:
<div class="math-box math-display" data-tex="A=[-1 \\quad +1]"></div>
</div>

<div class="note-box">
Koefisien -1 berarti jika ${"\$begin:math:text$H\_A\\$end:math:text$"} naik, beda tinggi menurun.
Koefisien +1 berarti jika ${"\$begin:math:text$H\_B\\$end:math:text$"} naik, beda tinggi meningkat.
</div>
`
},

/* ====================================================== */
{
title:"Vektor Misclosure",
content:`
<h2>1.4 Vektor Misclosure</h2>

<p>
Misclosure adalah selisih antara observasi dan nilai yang dihitung dari
parameter pendekatan.
</p>

<div class="math-box math-display" data-tex="l=L_b-F(X_0)"></div>

<ul>
<li>${"\$begin:math:text$L\_b\\$end:math:text$"} = observasi</li>
<li>${"\$begin:math:text$F\(X\_0\)\\$end:math:text$"} = nilai hitungan dari parameter pendekatan</li>
<li>${"\$begin:math:text$l\\$end:math:text$"} = selisih yang harus diselesaikan oleh adjustment</li>
</ul>

<div class="example-box">
Jika beda tinggi terukur 1.250 m, tetapi dari koordinat pendekatan diperoleh 1.245 m:
<div class="math-box math-display" data-tex="l=1.250-1.245=0.005\\,m"></div>
</div>
`
},

/* ====================================================== */
{
title:"Persamaan Normal",
content:`
<h2>II. Penyelesaian Least Squares</h2>

<p>
Dengan prinsip meminimumkan jumlah kuadrat residual berbobot:
</p>

<div class="math-box math-display" data-tex="\\Phi=v^TPv=min"></div>

<p>
diperoleh persamaan normal:
</p>

<div class="math-box math-display" data-tex="A^TPA\\hat{x}=A^TPl"></div>

<p>
Solusi parameter koreksi:
</p>

<div class="math-box math-display" data-tex="\\hat{x}=(A^TPA)^{-1}A^TPl"></div>

<div class="note-box">
Persamaan ini menjadi dasar perhitungan adjustment pada software geodesi modern.
</div>
`
},

/* ====================================================== */
{
title:"Makna Bobot",
content:`
<h2>2.1 Matriks Bobot</h2>

<p>
Bobot menunjukkan tingkat kepercayaan terhadap suatu observasi.
Observasi yang lebih teliti diberi bobot lebih besar.
</p>

<div class="math-box math-display" data-tex="p_i=\\frac{1}{\\sigma_i^2}"></div>

<div class="example-box">
Jika:
<ul>
<li>Observasi A: ${"\$begin:math:text$\\\\sigma\=2\\\\\,mm\\$end:math:text$"}</li>
<li>Observasi B: ${"\$begin:math:text$\\\\sigma\=5\\\\\,mm\\$end:math:text$"}</li>
</ul>

Maka:
<div class="math-box math-display" data-tex="p_A=\\frac{1}{2^2}=0.25"></div>
<div class="math-box math-display" data-tex="p_B=\\frac{1}{5^2}=0.04"></div>
</div>

<div class="note-box">
Observasi A lebih dipercaya karena standar deviasinya lebih kecil.
</div>
`
},

/* ====================================================== */
{
title:"Contoh Matriks Bobot",
content:`
<h2>2.2 Matriks Bobot Diagonal</h2>

<p>
Jika observasi dianggap tidak saling berkorelasi, maka matriks bobot berbentuk diagonal.
</p>

<div class="math-box math-display" data-tex="
P=
\\begin{bmatrix}
p_1 & 0 & 0\\\\
0 & p_2 & 0\\\\
0 & 0 & p_3
\\end{bmatrix}
"></div>

<div class="example-box">
Untuk tiga pengamatan dengan bobot 0.25, 0.11, dan 0.04:
<div class="math-box math-display" data-tex="
P=
\\begin{bmatrix}
0.25 & 0 & 0\\\\
0 & 0.11 & 0\\\\
0 & 0 & 0.04
\\end{bmatrix}
"></div>
</div>
`
},

/* ====================================================== */
{
title:"Contoh 1: Rata-rata Berbobot",
content:`
<h2>III. Contoh Implementasi 1</h2>
<h4>Rata-rata Berbobot</h4>

<p>
Tiga hasil pengamatan jarak AB:
</p>

<table class="table table-bordered table-sm">
<thead class="table-primary">
<tr>
<th>Observasi</th>
<th>Jarak</th>
<th>σ</th>
<th>Bobot</th>
</tr>
</thead>
<tbody>
<tr><td>L1</td><td>100.024 m</td><td>2 mm</td><td>0.250</td></tr>
<tr><td>L2</td><td>100.019 m</td><td>3 mm</td><td>0.111</td></tr>
<tr><td>L3</td><td>100.027 m</td><td>5 mm</td><td>0.040</td></tr>
</tbody>
</table>

<div class="math-box math-display" data-tex="
\\bar{x}_w=\\frac{\\sum p_i l_i}{\\sum p_i}
"></div>

<div class="note-box">
Data yang lebih teliti memberi pengaruh lebih besar terhadap nilai akhir.
</div>
`
},

/* ====================================================== */
{
title:"Hitungan Rata-rata Berbobot",
content:`
<h2>3.1 Hitungan Rata-rata Berbobot</h2>

<div class="math-box math-display" data-tex="
\\bar{x}_w=
\\frac{(0.250)(100.024)+(0.111)(100.019)+(0.040)(100.027)}
{0.250+0.111+0.040}
"></div>

<div class="math-box math-display" data-tex="
\\bar{x}_w=100.0230\\,m
"></div>

<div class="example-box">
Hasil 100.0230 m lebih dekat ke observasi pertama karena observasi pertama
memiliki bobot paling besar.
</div>

<div class="quote-box">
<b>Makna:</b><br>
Dalam adjustment, data yang lebih teliti memiliki “suara” lebih besar
dalam menentukan hasil akhir.
</div>
`
},

/* ====================================================== */
{
title:"Residual Rata-rata Berbobot",
content:`
<h2>3.2 Residual Rata-rata Berbobot</h2>

<p>
Residual dihitung sebagai:
</p>

<div class="math-box math-display" data-tex="v_i=l_i-\\bar{x}_w"></div>

<div class="info-box">
<ul>
<li>${"\$begin:math:text$v\_1\=100\.024\-100\.0230\=\+0\.0010\\\\\,m\\$end:math:text$"}</li>
<li>${"\$begin:math:text$v\_2\=100\.019\-100\.0230\=\-0\.0040\\\\\,m\\$end:math:text$"}</li>
<li>${"\$begin:math:text$v\_3\=100\.027\-100\.0230\=\+0\.0040\\\\\,m\\$end:math:text$"}</li>
</ul>
</div>

<div class="note-box">
Residual menunjukkan seberapa jauh setiap observasi terhadap nilai akhir hasil adjustment.
</div>
`
},

/* ====================================================== */
{
title:"Contoh 2: Leveling Sederhana",
content:`
<h2>IV. Contoh Implementasi 2</h2>
<h4>Adjustment Leveling Sederhana</h4>

<p>
Diketahui elevasi titik A adalah 100.000 m.
Dilakukan pengukuran beda tinggi menuju titik B melalui tiga jalur.
</p>

<table class="table table-bordered table-sm">
<thead class="table-primary">
<tr>
<th>Jalur</th>
<th>Δh Terukur</th>
<th>Panjang Jalur</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>+2.345 m</td><td>1 km</td></tr>
<tr><td>2</td><td>+2.349 m</td><td>2 km</td></tr>
<tr><td>3</td><td>+2.342 m</td><td>1.5 km</td></tr>
</tbody>
</table>

<div class="note-box">
Karena panjang jalur berbeda, ketelitian tiap jalur juga berbeda.
</div>
`
},

/* ====================================================== */
{
title:"Bobot Leveling",
content:`
<h2>4.1 Bobot pada Leveling</h2>

<p>
Dalam leveling, ketelitian sering bergantung pada panjang jalur.
Semakin panjang jalur, semakin besar kemungkinan akumulasi error.
</p>

<div class="math-box math-display" data-tex="p_i=\\frac{1}{L_i}"></div>

<div class="info-box">
<ul>
<li>${"\$begin:math:text$p\_1\=1\/1\=1\.000\\$end:math:text$"}</li>
<li>${"\$begin:math:text$p\_2\=1\/2\=0\.500\\$end:math:text$"}</li>
<li>${"\$begin:math:text$p\_3\=1\/1\.5\=0\.667\\$end:math:text$"}</li>
</ul>
</div>

<div class="example-box">
Jalur 1 memiliki bobot paling besar karena jalurnya paling pendek.
</div>
`
},

/* ====================================================== */
{
title:"Hasil Elevasi B",
content:`
<h2>4.2 Menghitung Elevasi B</h2>

<p>
Nilai terbaik beda tinggi:
</p>

<div class="math-box math-display" data-tex="
\\Delta h_w=\\frac{(1.000)(2.345)+(0.500)(2.349)+(0.667)(2.342)}
{1.000+0.500+0.667}
"></div>

<div class="math-box math-display" data-tex="
\\Delta h_w=2.3449\\,m
"></div>

<p>
Maka elevasi titik B:
</p>

<div class="math-box math-display" data-tex="
H_B=H_A+\\Delta h_w=100.000+2.3449=102.3449\\,m
"></div>
`
},

/* ====================================================== */
{
title:"Contoh 3: Poligon Tertutup",
content:`
<h2>V. Contoh Implementasi 3</h2>
<h4>Adjustment Sudut Poligon Tertutup</h4>

<p>
Untuk poligon tertutup dengan ${"\$begin:math:text$n\\$end:math:text$"} titik:
</p>

<div class="math-box math-display" data-tex="
\\sum \\beta_{teori}=(n-2)180^\\circ
"></div>

<div class="example-box">
Untuk poligon 5 titik:
<div class="math-box math-display" data-tex="
\\sum \\beta_{teori}=(5-2)180^\\circ=540^\\circ
"></div>
</div>

<div class="note-box">
Jika jumlah sudut ukur tidak sama dengan jumlah teoritis,
maka terdapat misclosure sudut.
</div>
`
},

/* ====================================================== */
{
title:"Misclosure Poligon",
content:`
<h2>5.1 Misclosure Sudut</h2>

<p>
Misal jumlah sudut hasil pengukuran:
</p>

<div class="math-box math-display" data-tex="
\\sum \\beta_{ukur}=540^\\circ00'25''
"></div>

<p>
Maka misclosure:
</p>

<div class="math-box math-display" data-tex="
f_\\beta=\\sum \\beta_{ukur}-\\sum \\beta_{teori}
"></div>

<div class="math-box math-display" data-tex="
f_\\beta=+25''
"></div>

<div class="example-box">
Tanda positif berarti sudut hasil ukur terlalu besar 25 detik.
</div>
`
},

/* ====================================================== */
{
title:"Koreksi Sudut Poligon",
content:`
<h2>5.2 Distribusi Koreksi Sudut</h2>

<p>
Jika semua sudut dianggap memiliki bobot sama:
</p>

<div class="math-box math-display" data-tex="
c_i=-\\frac{f_\\beta}{n}
"></div>

<div class="math-box math-display" data-tex="
c_i=-\\frac{25''}{5}=-5''
"></div>

<div class="note-box">
Setiap sudut dikoreksi sebesar -5 detik agar jumlah sudut sesuai teori.
</div>

<div class="quote-box">
<b>Makna:</b><br>
Adjustment tidak menghapus error, tetapi mendistribusikannya secara rasional.
</div>
`
},

/* ====================================================== */
{
title:"Contoh 4: Jaringan GNSS",
content:`
<h2>VI. Contoh Implementasi 4</h2>
<h4>Adjustment Jaringan GNSS Statik</h4>

<p>
Dalam jaringan GNSS, observasi dapat berupa baseline antar titik.
Misalnya terdapat titik A, B, dan C.
</p>

<div class="info-box">
<ul>
<li>Baseline AB = 1542.334 m</li>
<li>Baseline BC = 2130.112 m</li>
<li>Baseline AC = 3672.451 m</li>
</ul>
</div>

<div class="math-box math-display" data-tex="
AB+BC=1542.334+2130.112=3672.446\\,m
"></div>

<div class="math-box math-display" data-tex="
f=3672.446-3672.451=-0.005\\,m
"></div>

<div class="note-box">
Misclosure 5 mm harus dianalisis dan didistribusikan ke jaringan.
</div>
`
},

/* ====================================================== */
{
title:"Makna Misclosure GNSS",
content:`
<h2>6.1 Interpretasi Misclosure GNSS</h2>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box h-100">
<h5>Jika Misclosure Kecil</h5>
<ul>
<li>Jaringan relatif konsisten</li>
<li>Baseline saling mendukung</li>
<li>Kemungkinan data baik</li>
</ul>
</div>
</div>

<div class="col-md-6">
<div class="info-box h-100">
<h5>Jika Misclosure Besar</h5>
<ul>
<li>Ada kemungkinan multipath</li>
<li>Cycle slip</li>
<li>Kesalahan centering antena</li>
<li>Durasi observasi kurang</li>
</ul>
</div>
</div>
</div>

<div class="note-box mt-4">
Misclosure bukan hanya angka, tetapi indikator kualitas jaringan.
</div>
`
},

/* ====================================================== */
{
title:"Strategi Implementasi GNSS",
content:`
<h2>6.2 Tahapan Adjustment GNSS</h2>

<div class="info-box">
<ol class="fs-5">
<li>Menentukan titik kontrol tetap.</li>
<li>Mengamati baseline GNSS statik.</li>
<li>Mengolah baseline dan kovariansi.</li>
<li>Membentuk loop jaringan.</li>
<li>Melakukan adjustment bebas atau terikat.</li>
<li>Menganalisis residual baseline.</li>
<li>Mengevaluasi error ellipse titik.</li>
<li>Menetapkan koordinat final.</li>
</ol>
</div>

<div class="quote-box">
GNSS adjustment bukan hanya menghitung posisi,
tetapi juga menguji konsistensi antar baseline.
</div>
`
},

/* ====================================================== */
{
title:"Free Network Adjustment",
content:`
<h2>VII. Free Network Adjustment</h2>

<p>
Free Network Adjustment adalah adjustment jaringan tanpa mengunci titik kontrol
secara penuh. Tujuannya adalah mengevaluasi bentuk internal jaringan.
</p>

<div class="info-box">
<h5>Karakteristik</h5>
<ul>
<li>Tidak langsung dipaksa mengikuti datum eksternal.</li>
<li>Cocok untuk mengecek kualitas internal jaringan.</li>
<li>Baik untuk monitoring deformasi.</li>
<li>Membantu mendeteksi titik yang tidak stabil.</li>
</ul>
</div>

<div class="note-box">
Free network menjawab pertanyaan: apakah jaringan ini konsisten secara internal?
</div>
`
},

/* ====================================================== */
{
title:"Constrained Adjustment",
content:`
<h2>7.1 Constrained Adjustment</h2>

<p>
Constrained Adjustment adalah adjustment dengan mengikat satu atau beberapa
titik pada koordinat tetap.
</p>

<div class="info-box">
<h5>Digunakan untuk:</h5>
<ul>
<li>Menghubungkan jaringan lokal ke datum nasional.</li>
<li>Mengintegrasikan jaringan proyek ke SRGI atau sistem referensi resmi.</li>
<li>Menjamin koordinat hasil sesuai sistem yang digunakan.</li>
</ul>
</div>

<div class="example-box">
Contoh:
Titik A dan B adalah titik kontrol nasional.
Titik C, D, dan E dihitung berdasarkan jaringan yang diikat ke A dan B.
</div>

<div class="note-box">
Constrained adjustment menjawab pertanyaan: di mana posisi jaringan ini dalam sistem referensi tertentu?
</div>
`
},

/* ====================================================== */
{
title:"Minimally Constrained",
content:`
<h2>7.2 Minimally Constrained Adjustment</h2>

<p>
Minimally constrained adjustment menggunakan ikatan minimum agar jaringan
memiliki datum, tetapi tidak terlalu dipaksa oleh titik kontrol luar.
</p>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box h-100">
<h5>Kelebihan</h5>
<ul>
<li>Menjaga bentuk jaringan</li>
<li>Mengurangi distorsi akibat titik kontrol luar</li>
<li>Cocok untuk analisis kualitas jaringan</li>
</ul>
</div>
</div>

<div class="col-md-6">
<div class="info-box h-100">
<h5>Risiko</h5>
<ul>
<li>Perlu pemahaman datum</li>
<li>Tidak boleh sembarang memilih titik ikat</li>
<li>Analisis hasil harus hati-hati</li>
</ul>
</div>
</div>
</div>
`
},

/* ====================================================== */
{
title:"Kontrol Kualitas Data",
content:`
<h2>VIII. Kontrol Kualitas Data</h2>

<p>
Sebelum adjustment dilakukan, data harus melewati kontrol kualitas.
</p>

<div class="info-box">
<ol class="fs-5">
<li>Cek kelengkapan data.</li>
<li>Cek format satuan.</li>
<li>Cek blunder kasar.</li>
<li>Cek konsistensi geometri.</li>
<li>Cek nilai residual awal.</li>
<li>Cek standar deviasi observasi.</li>
<li>Cek metadata alat dan metode.</li>
</ol>
</div>

<div class="note-box">
Garbage in, garbage out. Data buruk akan menghasilkan adjustment buruk.
</div>
`
},

/* ====================================================== */
{
title:"Deteksi Blunder",
content:`
<h2>8.1 Deteksi Blunder dari Residual</h2>

<p>
Residual standar dapat digunakan untuk mengevaluasi observasi yang mencurigakan.
</p>

<div class="math-box math-display" data-tex="
r_i=\\frac{v_i}{\\sigma_{v_i}}
"></div>

<div class="info-box">
<ul>
<li>Jika ${"\$begin:math:text$\|r\_i\| \< 2\\$end:math:text$"} → observasi umumnya masih wajar.</li>
<li>Jika ${"\$begin:math:text$2 \\\\le \|r\_i\| \< 3\\$end:math:text$"} → perlu diperiksa.</li>
<li>Jika ${"\$begin:math:text$\|r\_i\| \\\\ge 3\\$end:math:text$"} → dicurigai outlier/blunder.</li>
</ul>
</div>

<div class="example-box">
Residual besar pada GNSS dapat mengindikasikan multipath, cycle slip,
atau kesalahan tinggi antena.
</div>
`
},

/* ====================================================== */
{
title:"Variansi Aposteriori",
content:`
<h2>IX. Evaluasi Ketelitian</h2>
<h4>9.1 Variansi Aposteriori</h4>

<p>
Variansi aposteriori menunjukkan kualitas umum adjustment setelah residual dihitung.
</p>

<div class="math-box math-display" data-tex="
\\hat{\\sigma}_0^2=\\frac{v^TPv}{n-u}
"></div>

<ul>
<li>${"\$begin:math:text$n\\$end:math:text$"} = jumlah observasi</li>
<li>${"\$begin:math:text$u\\$end:math:text$"} = jumlah parameter</li>
<li>${"\$begin:math:text$n\-u\\$end:math:text$"} = derajat bebas</li>
</ul>

<div class="note-box">
Nilai ini membantu mengevaluasi apakah bobot pengamatan realistis atau tidak.
</div>
`
},

/* ====================================================== */
{
title:"Kovariansi Parameter",
content:`
<h2>9.2 Kovariansi Parameter</h2>

<p>
Setelah parameter dihitung, ketelitiannya diperoleh dari matriks kovariansi.
</p>

<div class="math-box math-display" data-tex="
\\Sigma_{\\hat{x}}=\\hat{\\sigma}_0^2(A^TPA)^{-1}
"></div>

<div class="info-box">
<h5>Makna Matriks Kovariansi</h5>
<ul>
<li>Diagonal menunjukkan variansi parameter.</li>
<li>Akar variansi menghasilkan standar deviasi.</li>
<li>Elemen luar diagonal menunjukkan korelasi antar parameter.</li>
</ul>
</div>

<div class="quote-box">
Koordinat tanpa ketelitian belum menjadi produk geodesi yang lengkap.
</div>
`
},

/* ====================================================== */
{
title:"Error Ellipse",
content:`
<h2>9.3 Error Ellipse</h2>

<p>
Error ellipse menggambarkan ketidakpastian posisi horizontal suatu titik.
</p>

<div class="math-box math-display" data-tex="
\\Sigma_{xy}=
\\begin{bmatrix}
\\sigma_x^2 & \\sigma_{xy}\\\\
\\sigma_{xy} & \\sigma_y^2
\\end{bmatrix}
"></div>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box h-100">
<h5>Sumbu Mayor</h5>
<p>Arah dengan ketidakpastian posisi terbesar.</p>
</div>
</div>

<div class="col-md-6">
<div class="info-box h-100">
<h5>Sumbu Minor</h5>
<p>Arah dengan ketidakpastian posisi terkecil.</p>
</div>
</div>
</div>

<div class="note-box mt-4">
Semakin kecil error ellipse, semakin baik kualitas koordinat titik.
</div>
`
},

/* ====================================================== */
{
title:"Ilustrasi Error Ellipse",
content:`
<h2>9.4 Ilustrasi Error Ellipse</h2>

<div class="text-center my-4">
<svg viewBox="0 0 700 360" style="max-width:100%;background:#fff;border-radius:12px;padding:10px">
<line x1="80" y1="280" x2="620" y2="280" stroke="#333" stroke-width="2"/>
<line x1="350" y1="40" x2="350" y2="320" stroke="#333" stroke-width="2"/>

<ellipse cx="350" cy="180" rx="150" ry="60"
fill="rgba(13,110,253,0.15)" stroke="#0d6efd" stroke-width="4"
transform="rotate(-25 350 180)" />

<circle cx="350" cy="180" r="6" fill="#dc3545"/>

<text x="360" y="175" font-size="16" font-weight="bold">Titik hasil adjustment</text>
<text x="470" y="120" font-size="15">Sumbu mayor</text>
<text x="245" y="245" font-size="15">Sumbu minor</text>
<text x="310" y="330" font-size="16">Ketidakpastian posisi horizontal</text>
</svg>
</div>

<div class="note-box">
Error ellipse membantu membaca arah dan besar ketidakpastian koordinat.
</div>
`
},

/* ====================================================== */
{
title:"Implementasi Spreadsheet",
content:`
<h2>X. Implementasi dengan Spreadsheet</h2>

<p>
Adjustment sederhana dapat dilakukan menggunakan Excel, LibreOffice Calc,
atau Google Sheets.
</p>

<div class="info-box">
<h5>Kolom yang Dibutuhkan</h5>
<ul>
<li>Nomor observasi</li>
<li>Nilai observasi</li>
<li>Standar deviasi</li>
<li>Bobot</li>
<li>Nilai hasil adjustment</li>
<li>Residual</li>
<li>Residual kuadrat berbobot</li>
</ul>
</div>

<div class="example-box">
Untuk rata-rata berbobot:
<br>
Kolom bobot = ${"\$begin:math:text$1\/\\\\sigma\^2\\$end:math:text$"}
<br>
Nilai akhir = ${"\$begin:math:text$\\\\sum p\_i l\_i \/ \\\\sum p\_i\\$end:math:text$"}
</div>
`
},

/* ====================================================== */
{
title:"Implementasi JavaScript",
content:`
<h2>10.1 Implementasi dengan JavaScript</h2>

<p>
Pada GeoEdu, konsep adjustment dapat dibuat interaktif menggunakan JavaScript.
Mahasiswa dapat mengubah nilai observasi dan langsung melihat hasilnya.
</p>

<pre><code>
const obs = [25.124, 25.118, 25.121];
const n = obs.length;
const mean = obs.reduce((a,b) => a+b, 0) / n;
const residuals = obs.map(v => v - mean);
const variance = residuals.reduce((s,r) => s + r*r, 0) / (n-1);
const stdDev = Math.sqrt(variance);
</code></pre>

<div class="note-box">
Implementasi komputasi membantu mahasiswa melihat hubungan antara teori dan angka.
</div>
`
},

/* ====================================================== */
{
title:"Latihan Interaktif 1",
content:`
<h2>XI. Latihan Interaktif 1</h2>

<p>Masukkan tiga hasil pengukuran jarak, lalu hitung nilai rata-rata dan residual.</p>

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

<button class="btn btn-primary mt-3" onclick="hitungRataKkg9()">
<i class="bi bi-calculator me-1"></i>Hitung
</button>

<div id="hasilRataKkg9" class="result-box mt-3">
Hasil perhitungan akan muncul di sini.
</div>
`
},

/* ====================================================== */
{
title:"Latihan Interaktif 2",
content:`
<h2>11.1 Latihan Interaktif 2</h2>

<p>Hitung koreksi sudut poligon tertutup.</p>

<div class="row g-2">
<div class="col-md-6">
<label>Jumlah titik poligon</label>
<input id="jumlahTitikPoligon" class="form-control" value="5">
</div>
<div class="col-md-6">
<label>Misclosure sudut dalam detik</label>
<input id="misclosureSudut" class="form-control" value="25">
</div>
</div>

<button class="btn btn-success mt-3" onclick="hitungKoreksiSudutKkg9()">
<i class="bi bi-calculator me-1"></i>Hitung Koreksi
</button>

<div id="hasilSudutKkg9" class="result-box mt-3">
Hasil koreksi akan muncul di sini.
</div>
`
},

/* ====================================================== */
{
title:"Latihan Interaktif 3",
content:`
<h2>11.2 Latihan Interaktif 3</h2>

<p>Hitung bobot berdasarkan standar deviasi.</p>

<div class="row g-2">
<div class="col-md-4">
<label>σ1 dalam mm</label>
<input id="sigma1" class="form-control" value="2">
</div>
<div class="col-md-4">
<label>σ2 dalam mm</label>
<input id="sigma2" class="form-control" value="3">
</div>
<div class="col-md-4">
<label>σ3 dalam mm</label>
<input id="sigma3" class="form-control" value="5">
</div>
</div>

<button class="btn btn-warning mt-3" onclick="hitungBobotKkg9()">
<i class="bi bi-calculator me-1"></i>Hitung Bobot
</button>

<div id="hasilBobotKkg9" class="result-box mt-3">
Hasil bobot akan muncul di sini.
</div>
`
},

/* ====================================================== */
{
title:"Studi Kasus 1",
content:`
<h2>XII. Studi Kasus 1: Jaringan Kontrol Kampus</h2>

<p>
Sebuah kampus ingin membangun jaringan kontrol untuk pemetaan detail,
aset bangunan, dan pemodelan 3D.
</p>

<div class="info-box">
<h5>Data Lapangan</h5>
<ul>
<li>5 titik kontrol horizontal</li>
<li>3 titik benchmark vertikal</li>
<li>Observasi GNSS statik 1 jam</li>
<li>Pengukuran poligon menggunakan total station</li>
<li>Leveling antar benchmark</li>
</ul>
</div>

<div class="note-box">
Adjustment diperlukan agar seluruh titik berada dalam satu sistem koordinat yang konsisten.
</div>
`
},

/* ====================================================== */
{
title:"Studi Kasus 2",
content:`
<h2>12.1 Studi Kasus 2: Monitoring Deformasi</h2>

<p>
Pada monitoring deformasi, adjustment digunakan untuk membedakan apakah
perubahan koordinat merupakan gerakan nyata atau hanya noise pengukuran.
</p>

<table class="table table-bordered table-sm">
<thead class="table-primary">
<tr>
<th>Titik</th>
<th>Shift Horizontal</th>
<th>σ Posisi</th>
<th>Interpretasi</th>
</tr>
</thead>
<tbody>
<tr><td>P1</td><td>2 mm</td><td>3 mm</td><td>Belum signifikan</td></tr>
<tr><td>P2</td><td>9 mm</td><td>2 mm</td><td>Signifikan</td></tr>
<tr><td>P3</td><td>4 mm</td><td>5 mm</td><td>Belum signifikan</td></tr>
</tbody>
</table>

<div class="quote-box">
Dalam monitoring deformasi, angka pergeseran harus selalu dibandingkan dengan ketelitiannya.
</div>
`
},

/* ====================================================== */
{
title:"Studi Kasus 3",
content:`
<h2>12.2 Studi Kasus 3: Kadaster dan Batas Tanah</h2>

<p>
Dalam pekerjaan kadaster, titik batas harus memiliki posisi yang konsisten
terhadap kerangka kontrol.
</p>

<div class="info-box">
<h5>Masalah jika tanpa adjustment</h5>
<ul>
<li>Batas bidang tidak menutup.</li>
<li>Luas bidang berbeda antar metode.</li>
<li>Koordinat titik batas tidak konsisten.</li>
<li>Potensi sengketa meningkat.</li>
</ul>
</div>

<div class="note-box">
Adjustment membantu memastikan posisi batas tanah dapat dipertanggungjawabkan.
</div>
`
},

/* ====================================================== */
{
title:"Kesalahan Umum Mahasiswa",
content:`
<h2>XIII. Kesalahan Umum dalam Adjustment</h2>

<div class="info-box">
<ul class="fs-5">
<li>Langsung melakukan adjustment tanpa mengecek blunder.</li>
<li>Menganggap semua observasi memiliki bobot sama.</li>
<li>Tidak memahami makna residual.</li>
<li>Hanya melaporkan koordinat tanpa ketelitian.</li>
<li>Tidak mengecek derajat bebas.</li>
<li>Salah membedakan error, residual, dan koreksi.</li>
<li>Salah menggunakan satuan meter, milimeter, derajat, dan detik.</li>
</ul>
</div>

<div class="note-box">
Adjustment bukan hanya proses menghitung, tetapi proses berpikir kritis terhadap data.
</div>
`
},

/* ====================================================== */
{
title:"Checklist Adjustment",
content:`
<h2>13.1 Checklist Sebelum Adjustment</h2>

<div class="row g-3">
<div class="col-md-6">
<div class="info-box h-100">
<h5>Data</h5>
<ul>
<li>Apakah data lengkap?</li>
<li>Apakah satuan benar?</li>
<li>Apakah metadata alat tersedia?</li>
<li>Apakah ada observasi mencurigakan?</li>
</ul>
</div>
</div>

<div class="col-md-6">
<div class="info-box h-100">
<h5>Model</h5>
<ul>
<li>Apakah parameter jelas?</li>
<li>Apakah matriks A benar?</li>
<li>Apakah bobot realistis?</li>
<li>Apakah datum sudah ditentukan?</li>
</ul>
</div>
</div>
</div>

<div class="note-box mt-4">
Checklist ini penting agar hasil adjustment tidak hanya benar secara angka,
tetapi juga benar secara geodesi.
</div>
`
},

/* ====================================================== */
{
title:"Tugas 1",
content:`
<h2>XIV. Tugas 1</h2>
<h4>Adjustment Sederhana Jaringan Kontrol</h4>

<div class="example-box">
Diketahui hasil pengukuran jarak AB sebanyak 5 kali:
<ul>
<li>100.024 m</li>
<li>100.019 m</li>
<li>100.027 m</li>
<li>100.022 m</li>
<li>100.020 m</li>
</ul>
</div>

<div class="info-box">
<h5>Kerjakan:</h5>
<ol>
<li>Hitung nilai rata-rata.</li>
<li>Hitung residual setiap observasi.</li>
<li>Hitung jumlah kuadrat residual.</li>
<li>Hitung standar deviasi.</li>
<li>Jelaskan apakah terdapat indikasi blunder.</li>
<li>Buat interpretasi geodesi dari hasil tersebut.</li>
</ol>
</div>

<div class="note-box">
Dikumpulkan dalam format PDF dengan tabel hitungan dan penjelasan singkat.
</div>
`
},

/* ====================================================== */
{
title:"Format Jawaban Tugas",
content:`
<h2>14.1 Format Jawaban Tugas 1</h2>

<div class="info-box">
<h5>Struktur Laporan</h5>
<ol class="fs-5">
<li>Judul dan identitas mahasiswa.</li>
<li>Tujuan perhitungan.</li>
<li>Data observasi.</li>
<li>Rumus yang digunakan.</li>
<li>Tabel perhitungan residual.</li>
<li>Standar deviasi.</li>
<li>Analisis blunder.</li>
<li>Kesimpulan.</li>
</ol>
</div>

<div class="example-box">
Contoh tabel:
<br>
Observasi | Nilai | Residual | Residual²
</div>
`
},

/* ====================================================== */
{
title:"Kriteria Penilaian",
content:`
<h2>14.2 Kriteria Penilaian Tugas 1</h2>

<table class="table table-bordered">
<thead class="table-primary">
<tr>
<th>Komponen</th>
<th>Bobot</th>
</tr>
</thead>
<tbody>
<tr><td>Kelengkapan data dan tabel</td><td>20%</td></tr>
<tr><td>Ketepatan rumus</td><td>20%</td></tr>
<tr><td>Ketepatan hitungan</td><td>25%</td></tr>
<tr><td>Analisis residual dan blunder</td><td>20%</td></tr>
<tr><td>Kesimpulan geodesi</td><td>15%</td></tr>
</tbody>
</table>

<div class="note-box">
Nilai tinggi diberikan kepada jawaban yang tidak hanya benar secara angka,
tetapi juga mampu menjelaskan makna hasil.
</div>
`
},

/* ====================================================== */
{
title:"Ringkasan Materi",
content:`
<h2>XV. Ringkasan</h2>

<ul class="fs-5">
<li>Adjustment adalah proses mencari solusi terbaik dari observasi yang tidak sempurna.</li>
<li>Implementasi adjustment membutuhkan model observasi, matriks desain, bobot, dan residual.</li>
<li>Bobot menentukan tingkat pengaruh observasi dalam solusi akhir.</li>
<li>Residual digunakan untuk mengevaluasi kualitas data.</li>
<li>Kovariansi dan error ellipse menunjukkan ketelitian hasil.</li>
<li>Dalam GNSS, poligon, leveling, dan kadaster, adjustment adalah fondasi kontrol kualitas.</li>
</ul>
`
},

/* ====================================================== */
{
title:"Diskusi Kelas",
content:`
<h2>Diskusi Kelas</h2>

<ol class="fs-5">
<li>Mengapa observasi dengan standar deviasi kecil diberi bobot lebih besar?</li>
<li>Apa perbedaan free network dan constrained adjustment?</li>
<li>Mengapa residual besar belum tentu langsung berarti blunder?</li>
<li>Mengapa koordinat harus disertai standar deviasi?</li>
<li>Bagaimana adjustment digunakan dalam monitoring deformasi?</li>
</ol>
`
},

/* ====================================================== */
{
title:"Penutup",
content:`
<div class="quote-slide">
<h2>
“Adjustment is not only computation, but also judgement.”
</h2>

<p>
Dalam geodesi, kemampuan menghitung harus selalu disertai kemampuan
menilai kualitas data.
</p>
</div>
`
}

];

/* ==========================================================
   FUNGSI INTERAKTIF PERTEMUAN 9
========================================================== */

function hitungRataKkg9() {
  const values = [
    parseFloat(document.getElementById("obs1").value),
    parseFloat(document.getElementById("obs2").value),
    parseFloat(document.getElementById("obs3").value)
  ];

  if (values.some(isNaN)) {
    document.getElementById("hasilRataKkg9").innerHTML = "Input tidak valid.";
    return;
  }

  const n = values.length;
  const mean = values.reduce((a, b) => a + b, 0) / n;
  const residuals = values.map(v => v - mean);
  const sumSq = residuals.reduce((s, r) => s + r * r, 0);
  const stdDev = Math.sqrt(sumSq / (n - 1));

  document.getElementById("hasilRataKkg9").innerHTML = `
    <b>Nilai rata-rata:</b> ${mean.toFixed(4)} m<br>
    <b>Residual:</b><br>
    v1 = ${residuals[0].toFixed(4)} m<br>
    v2 = ${residuals[1].toFixed(4)} m<br>
    v3 = ${residuals[2].toFixed(4)} m<br>
    <b>Jumlah kuadrat residual:</b> ${sumSq.toFixed(8)} m²<br>
    <b>Standar deviasi:</b> ${stdDev.toFixed(4)} m
  `;
}

function hitungKoreksiSudutKkg9() {
  const n = parseFloat(document.getElementById("jumlahTitikPoligon").value);
  const f = parseFloat(document.getElementById("misclosureSudut").value);

  if (isNaN(n) || isNaN(f) || n <= 0) {
    document.getElementById("hasilSudutKkg9").innerHTML = "Input tidak valid.";
    return;
  }

  const c = -f / n;

  document.getElementById("hasilSudutKkg9").innerHTML = `
    <b>Jumlah titik:</b> ${n}<br>
    <b>Misclosure:</b> ${f} detik<br>
    <b>Koreksi tiap sudut:</b> ${c.toFixed(3)} detik<br>
    <br>
    Artinya setiap sudut harus diberi koreksi sebesar ${c.toFixed(3)} detik.
  `;
}

function hitungBobotKkg9() {
  const sigmas = [
    parseFloat(document.getElementById("sigma1").value),
    parseFloat(document.getElementById("sigma2").value),
    parseFloat(document.getElementById("sigma3").value)
  ];

  if (sigmas.some(v => isNaN(v) || v <= 0)) {
    document.getElementById("hasilBobotKkg9").innerHTML = "Input tidak valid.";
    return;
  }

  const weights = sigmas.map(s => 1 / (s * s));
  const sumWeights = weights.reduce((a, b) => a + b, 0);
  const normalized = weights.map(w => w / sumWeights);

  document.getElementById("hasilBobotKkg9").innerHTML = `
    <b>Bobot absolut:</b><br>
    p1 = ${weights[0].toFixed(4)}<br>
    p2 = ${weights[1].toFixed(4)}<br>
    p3 = ${weights[2].toFixed(4)}<br><br>

    <b>Bobot ternormalisasi:</b><br>
    p1 = ${normalized[0].toFixed(4)}<br>
    p2 = ${normalized[1].toFixed(4)}<br>
    p3 = ${normalized[2].toFixed(4)}<br><br>

    Observasi dengan sigma paling kecil memiliki bobot paling besar.
  `;
}
