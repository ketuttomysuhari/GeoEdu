/* ==========================================================
   FILE : data/meetings/kkg-9.js
   MATA KULIAH : Kerangka Kontrol Geodesi
   PERTEMUAN 9 : GNSS Processing & Evaluasi Jaringan
   DOSEN : Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
   TOTAL : 32 Slides
   SUMBER DATA : GNSS Processing Report bm2_1
========================================================== */

window.slides = [

/* ====================================================== */
{
title:"Cover",
content:`
<div class="cover-slide">
  <span class="badge bg-warning text-dark mb-3">Pertemuan 9</span>
  <h1>KERANGKA KONTROL GEODESI</h1>
  <h3>GNSS Processing & Evaluasi Jaringan</h3>
  <p class="lead mt-4">
    Interpretasi Koordinat, Baseline, Ketelitian, DOP, dan Adjustment Jaringan GNSS
  </p>

  <div class="lecturer-box mt-5">
    Dr. Ir. Ketut Tomy Suhari, S.T., M.T., IRSurv.
  </div>
</div>
`
},

/* ====================================================== */
{
title:"Tujuan Pembelajaran",
content:`
<h2>Tujuan Pembelajaran</h2>
<p>Setelah mengikuti pertemuan ini, mahasiswa diharapkan mampu:</p>

<ul>
  <li>Memahami struktur laporan hasil pemrosesan GNSS.</li>
  <li>Menginterpretasi koordinat geodetik, kartesian, dan proyeksi TM3.</li>
  <li>Menganalisis kualitas solusi GNSS berdasarkan SD, CQ, DOP, dan M0.</li>
  <li>Memahami konsep baseline dalam jaringan GNSS.</li>
  <li>Menjelaskan hubungan GNSS processing dengan adjustment jaringan geodesi.</li>
</ul>

<div class="note-box">
  Fokus utama materi ini adalah membaca hasil processing GNSS secara teknis, bukan hanya menerima koordinat akhir.
</div>
`
},

/* ====================================================== */
{
title:"Konteks Data GNSS",
content:`
<h2>Konteks Data GNSS</h2>

<p>Materi ini menggunakan contoh nyata dari laporan GNSS Processing Report untuk titik:</p>

<div class="info-grid">
  <div><b>Nama Titik</b><br>bm2_1</div>
  <div><b>Solution Type</b><br>Phase Fixed</div>
  <div><b>Sistem Koordinat</b><br>WGS84 dan ID_TM3 51.2</div>
  <div><b>Jumlah Baseline</b><br>2 baseline</div>
</div>

<p>
Data ini menunjukkan hasil pemrosesan terhadap satu titik rover yang dikontrol oleh dua stasiun referensi.
</p>
`
},

/* ====================================================== */
{
title:"Hasil Koordinat Geodetik",
content:`
<h2>Hasil Koordinat Geodetik Titik bm2_1</h2>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Komponen</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Latitude WGS84</td>
      <td>8° 14' 29.4514" S</td>
    </tr>
    <tr>
      <td>Longitude WGS84</td>
      <td>123° 32' 03.5043" E</td>
    </tr>
    <tr>
      <td>Ellipsoidal Height</td>
      <td>66.5221 m</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  Koordinat geodetik menggunakan lintang, bujur, dan tinggi terhadap ellipsoid WGS84.
</div>
`
},

/* ====================================================== */
{
title:"Koordinat Kartesian WGS84",
content:`
<h2>Koordinat Kartesian WGS84</h2>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Komponen</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X</td>
      <td>-3487401.2892 m</td>
    </tr>
    <tr>
      <td>Y</td>
      <td>5262040.2343 m</td>
    </tr>
    <tr>
      <td>Z</td>
      <td>-908232.2020 m</td>
    </tr>
  </tbody>
</table>

<p>
Koordinat kartesian digunakan dalam pemodelan vektor baseline GNSS karena hubungan antar titik dapat dihitung dalam ruang tiga dimensi.
</p>
`
},

/* ====================================================== */
{
title:"Koordinat Proyeksi TM3",
content:`
<h2>Koordinat Proyeksi ID_TM3 51.2</h2>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Komponen</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Easting</td>
      <td>93608.1741 m</td>
    </tr>
    <tr>
      <td>Northing</td>
      <td>588600.2736 m</td>
    </tr>
    <tr>
      <td>Ellipsoidal Height</td>
      <td>66.5221 m</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  Proyeksi TM3 umum digunakan dalam pekerjaan pertanahan dan pemetaan skala besar di Indonesia.
</div>
`
},

/* ====================================================== */
{
title:"Solution Type: Phase Fixed",
content:`
<h2>Solution Type: Phase Fixed</h2>

<p>
Pada laporan, titik <b>bm2_1</b> memiliki solution type <b>Phase Fixed</b>.
</p>

<ul>
  <li>Ambiguitas fase pembawa berhasil diselesaikan sebagai bilangan integer.</li>
  <li>Solusi lebih stabil dibandingkan float solution.</li>
  <li>Umumnya menghasilkan ketelitian mm hingga cm.</li>
  <li>Sangat cocok untuk pekerjaan kontrol geodesi.</li>
</ul>

<div class="note-box">
  Dalam GNSS presisi tinggi, status fixed menjadi indikator penting bahwa solusi telah mencapai kualitas yang baik.
</div>
`
},

/* ====================================================== */
{
title:"Konsep Baseline GNSS",
content:`
<h2>Konsep Baseline GNSS</h2>

<p>
Baseline adalah vektor tiga dimensi yang menghubungkan titik referensi dengan titik rover.
</p>

<div class="formula-box">
  ΔX = X<sub>rover</sub> - X<sub>base</sub><br>
  ΔY = Y<sub>rover</sub> - Y<sub>base</sub><br>
  ΔZ = Z<sub>rover</sub> - Z<sub>base</sub>
</div>

<p>
Pada laporan ini terdapat dua baseline utama:
</p>

<ul>
  <li><b>clwb - bm2_1</b></li>
  <li><b>cuka - bm2_1</b></li>
</ul>
`
},

/* ====================================================== */
{
title:"Panjang Baseline",
content:`
<h2>Panjang Baseline</h2>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Baseline</th>
      <th>Panjang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>clwb - bm2_1</td>
      <td>18,967.6854 m</td>
    </tr>
    <tr>
      <td>cuka - bm2_1</td>
      <td>59,247.4814 m</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  Semakin panjang baseline, pengaruh atmosfer, orbit, dan kesalahan residual biasanya semakin besar.
</div>
`
},

/* ====================================================== */
{
title:"Rumus Panjang Baseline",
content:`
<h2>Rumus Panjang Baseline</h2>

<div class="formula-box">
  L = √(ΔX² + ΔY² + ΔZ²)
</div>

<p>
Keterangan:
</p>

<ul>
  <li><b>L</b> = panjang baseline</li>
  <li><b>ΔX</b> = selisih koordinat X</li>
  <li><b>ΔY</b> = selisih koordinat Y</li>
  <li><b>ΔZ</b> = selisih koordinat Z</li>
</ul>
`
},

/* ====================================================== */
{
title:"Contoh Baseline clwb - bm2_1",
content:`
<h2>Contoh Baseline clwb - bm2_1</h2>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Komponen</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ΔX</td>
      <td>-11489.7517 m</td>
    </tr>
    <tr>
      <td>ΔY</td>
      <td>-5099.7589 m</td>
    </tr>
    <tr>
      <td>ΔZ</td>
      <td>14203.9133 m</td>
    </tr>
    <tr>
      <td>Baseline Length</td>
      <td>18967.6854 m</td>
    </tr>
  </tbody>
</table>
`
},

/* ====================================================== */
{
title:"Contoh Baseline cuka - bm2_1",
content:`
<h2>Contoh Baseline cuka - bm2_1</h2>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Komponen</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ΔX</td>
      <td>-49648.7572 m</td>
    </tr>
    <tr>
      <td>ΔY</td>
      <td>-30930.0367 m</td>
    </tr>
    <tr>
      <td>ΔZ</td>
      <td>9412.6400 m</td>
    </tr>
    <tr>
      <td>Baseline Length</td>
      <td>59247.4814 m</td>
    </tr>
  </tbody>
</table>
`
},

/* ====================================================== */
{
title:"Standard Deviation Koordinat",
content:`
<h2>Standard Deviation Koordinat</h2>

<p>
Standard deviation menunjukkan seberapa besar ketidakpastian nilai koordinat hasil processing.
</p>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Komponen</th>
      <th>SD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SD Latitude</td>
      <td>0.0003 m</td>
    </tr>
    <tr>
      <td>SD Longitude</td>
      <td>0.0004 m</td>
    </tr>
    <tr>
      <td>SD Height</td>
      <td>0.0012 m</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  Nilai SD pada laporan ini berada pada orde milimeter.
</div>
`
},

/* ====================================================== */
{
title:"SD Kartesian",
content:`
<h2>Standard Deviation Kartesian</h2>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Komponen</th>
      <th>SD</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SD X</td>
      <td>0.0007 m</td>
    </tr>
    <tr>
      <td>SD Y</td>
      <td>0.0010 m</td>
    </tr>
    <tr>
      <td>SD Z</td>
      <td>0.0004 m</td>
    </tr>
  </tbody>
</table>

<p>
Semakin kecil SD, semakin presisi hasil estimasi koordinat.
</p>
`
},

/* ====================================================== */
{
title:"Interpretasi SD",
content:`
<h2>Interpretasi Standard Deviation</h2>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Rentang SD</th>
      <th>Interpretasi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&lt; 0.005 m</td>
      <td>Sangat baik untuk kontrol geodesi</td>
    </tr>
    <tr>
      <td>0.005 - 0.020 m</td>
      <td>Baik untuk survei teknis</td>
    </tr>
    <tr>
      <td>&gt; 0.020 m</td>
      <td>Perlu evaluasi ulang</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  SD kecil belum tentu menjamin jaringan bebas masalah. Harus tetap dicek dengan baseline, residual, CQ, dan DOP.
</div>
`
},

/* ====================================================== */
{
title:"Coordinate Quality",
content:`
<h2>Coordinate Quality (CQ)</h2>

<p>
CQ adalah indikator kualitas koordinat hasil estimasi.
</p>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Nilai Baseline clwb</th>
      <th>Nilai Baseline cuka</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CQ 1D</td>
      <td>0.0005 m</td>
      <td>0.0004 m</td>
    </tr>
    <tr>
      <td>CQ 2D</td>
      <td>0.0020 m</td>
      <td>0.0012 m</td>
    </tr>
    <tr>
      <td>CQ 3D</td>
      <td>0.0021 m</td>
      <td>0.0012 m</td>
    </tr>
  </tbody>
</table>
`
},

/* ====================================================== */
{
title:"Interpretasi CQ",
content:`
<h2>Interpretasi CQ</h2>

<ul>
  <li>CQ kecil menunjukkan estimasi koordinat lebih stabil.</li>
  <li>CQ 3D digunakan untuk mengevaluasi kualitas posisi tiga dimensi.</li>
  <li>Nilai CQ pada laporan berada pada orde milimeter.</li>
</ul>

<div class="note-box">
  Pada report ini, baseline cuka - bm2_1 memiliki CQ 3D lebih kecil dibanding baseline clwb - bm2_1.
</div>
`
},

/* ====================================================== */
{
title:"Mean Error M0",
content:`
<h2>Mean Error of Unit Weight (M0)</h2>

<div class="formula-box">
  m₀ = √(vᵀPv / (n - u))
</div>

<p>
Keterangan:
</p>

<ul>
  <li><b>v</b> = residual pengamatan</li>
  <li><b>P</b> = matriks bobot</li>
  <li><b>n</b> = jumlah observasi</li>
  <li><b>u</b> = jumlah parameter tidak diketahui</li>
</ul>
`
},

/* ====================================================== */
{
title:"Nilai M0 dalam Report",
content:`
<h2>Nilai M0 dalam Report</h2>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Baseline</th>
      <th>M0</th>
      <th>Interpretasi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>clwb - bm2_1</td>
      <td>0.51306146</td>
      <td>Model sangat baik, residual relatif kecil</td>
    </tr>
    <tr>
      <td>cuka - bm2_1</td>
      <td>1.11943197</td>
      <td>Masih baik, mendekati nilai ideal 1</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  Nilai M0 mendekati 1 menunjukkan kesesuaian antara model matematis, bobot, dan observasi.
</div>
`
},

/* ====================================================== */
{
title:"DOP dalam GNSS",
content:`
<h2>DOP: Dilution of Precision</h2>

<p>
DOP menunjukkan pengaruh geometri satelit terhadap kualitas posisi.
</p>

<ul>
  <li><b>GDOP</b> = Geometric DOP</li>
  <li><b>PDOP</b> = Position DOP</li>
  <li><b>HDOP</b> = Horizontal DOP</li>
  <li><b>VDOP</b> = Vertical DOP</li>
</ul>

<div class="note-box">
  DOP kecil berarti geometri satelit baik. DOP besar berarti satelit terkonsentrasi dan solusi lebih lemah.
</div>
`
},

/* ====================================================== */
{
title:"Nilai DOP pada Baseline clwb",
content:`
<h2>DOP Baseline clwb - bm2_1</h2>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Range Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GDOP</td>
      <td>11.1 - 1.9</td>
    </tr>
    <tr>
      <td>PDOP</td>
      <td>9.0 - 1.5</td>
    </tr>
    <tr>
      <td>HDOP</td>
      <td>3.6 - 0.7</td>
    </tr>
    <tr>
      <td>VDOP</td>
      <td>8.2 - 1.3</td>
    </tr>
  </tbody>
</table>

<p>
Nilai awal PDOP dan VDOP cukup tinggi, sehingga kualitas geometri satelit pada sebagian waktu kurang ideal.
</p>
`
},

/* ====================================================== */
{
title:"Nilai DOP pada Baseline cuka",
content:`
<h2>DOP Baseline cuka - bm2_1</h2>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Range Nilai</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GDOP</td>
      <td>3.8 - 2.4</td>
    </tr>
    <tr>
      <td>PDOP</td>
      <td>2.2 - 1.4</td>
    </tr>
    <tr>
      <td>HDOP</td>
      <td>0.7 - 0.5</td>
    </tr>
    <tr>
      <td>VDOP</td>
      <td>2.1 - 1.3</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  Baseline cuka memiliki geometri satelit yang lebih stabil dibanding baseline clwb.
</div>
`
},

/* ====================================================== */
{
title:"Klasifikasi DOP",
content:`
<h2>Klasifikasi Umum DOP</h2>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Nilai DOP</th>
      <th>Kualitas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>&lt; 2</td>
      <td>Sangat baik</td>
    </tr>
    <tr>
      <td>2 - 5</td>
      <td>Baik</td>
    </tr>
    <tr>
      <td>5 - 10</td>
      <td>Lemah</td>
    </tr>
    <tr>
      <td>&gt; 10</td>
      <td>Buruk</td>
    </tr>
  </tbody>
</table>
`
},

/* ====================================================== */
{
title:"Parameter Pemrosesan GNSS",
content:`
<h2>Parameter Pemrosesan GNSS</h2>

<table class="table table-bordered table-striped">
  <tbody>
    <tr>
      <td>Cut-Off Angle</td>
      <td>10°</td>
    </tr>
    <tr>
      <td>Frequency</td>
      <td>L1, L2, L5, E5b</td>
    </tr>
    <tr>
      <td>Sampling Rate</td>
      <td>1 second</td>
    </tr>
    <tr>
      <td>Satellite System</td>
      <td>GPS, GLONASS, Galileo, BeiDou, QZSS</td>
    </tr>
    <tr>
      <td>Tropospheric Model</td>
      <td>VMF</td>
    </tr>
    <tr>
      <td>Ionospheric Model</td>
      <td>Computed</td>
    </tr>
  </tbody>
</table>
`
},

/* ====================================================== */
{
title:"Cut-Off Angle",
content:`
<h2>Cut-Off Angle</h2>

<p>
Cut-off angle adalah sudut elevasi minimum satelit yang digunakan dalam pemrosesan.
</p>

<div class="formula-box">
  Satelit digunakan jika elevasi ≥ 10°
</div>

<ul>
  <li>Satelit terlalu rendah cenderung terpengaruh multipath.</li>
  <li>Satelit rendah juga lebih banyak melewati lapisan atmosfer.</li>
  <li>Cut-off 10° masih umum digunakan dalam pemrosesan GNSS.</li>
</ul>
`
},

/* ====================================================== */
{
title:"Pengaruh Panjang Baseline",
content:`
<h2>Pengaruh Panjang Baseline</h2>

<p>
Baseline panjang lebih sensitif terhadap:</p>

<ul>
  <li>Kesalahan ionosfer.</li>
  <li>Kesalahan troposfer.</li>
  <li>Kesalahan orbit satelit.</li>
  <li>Perbedaan kondisi atmosfer antara base dan rover.</li>
</ul>

<div class="note-box">
  Karena itu, baseline 59 km perlu dianalisis lebih hati-hati dibanding baseline 18 km.
</div>
`
},

/* ====================================================== */
{
title:"Perbandingan Dua Baseline",
content:`
<h2>Perbandingan Dua Baseline</h2>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Aspek</th>
      <th>clwb - bm2_1</th>
      <th>cuka - bm2_1</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Panjang</td>
      <td>18.967 km</td>
      <td>59.247 km</td>
    </tr>
    <tr>
      <td>CQ 3D</td>
      <td>0.0021 m</td>
      <td>0.0012 m</td>
    </tr>
    <tr>
      <td>M0</td>
      <td>0.513</td>
      <td>1.119</td>
    </tr>
    <tr>
      <td>DOP</td>
      <td>Lebih bervariasi</td>
      <td>Lebih stabil</td>
    </tr>
  </tbody>
</table>
`
},

/* ====================================================== */
{
title:"Deviasi Antar Solusi",
content:`
<h2>Deviasi Antar Solusi Baseline</h2>

<p>
Pada ringkasan baseline terdapat perbedaan hasil terhadap rata-rata.
</p>

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Reference</th>
      <th>ΔPos</th>
      <th>ΔHeight</th>
      <th>ΔPos & Height</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>clwb</td>
      <td>0.2895 m</td>
      <td>0.2408 m</td>
      <td>0.3766 m</td>
    </tr>
    <tr>
      <td>cuka</td>
      <td>0.0000 m</td>
      <td>0.0000 m</td>
      <td>0.0000 m</td>
    </tr>
  </tbody>
</table>

<div class="note-box">
  Perbedaan ini perlu dianalisis karena dapat menunjukkan adanya inkonsistensi antar baseline.
</div>
`
},

/* ====================================================== */
{
title:"Konsep Adjustment Jaringan",
content:`
<h2>Konsep Adjustment Jaringan</h2>

<p>
Adjustment digunakan untuk memperoleh koordinat paling mungkin berdasarkan seluruh observasi yang tersedia.
</p>

<div class="formula-box">
  l = A x + v
</div>

<ul>
  <li><b>l</b> = vektor observasi</li>
  <li><b>A</b> = matriks desain</li>
  <li><b>x</b> = parameter yang dicari</li>
  <li><b>v</b> = residual</li>
</ul>
`
},

/* ====================================================== */
{
title:"Least Squares Adjustment",
content:`
<h2>Least Squares Adjustment</h2>

<p>
Solusi parameter diperoleh dengan prinsip meminimalkan jumlah kuadrat residual berbobot.
</p>

<div class="formula-box">
  x = (Aᵀ P A)<sup>-1</sup> Aᵀ P l
</div>

<p>
Prinsip utama:
</p>

<ul>
  <li>Observasi dengan bobot lebih besar memiliki pengaruh lebih besar.</li>
  <li>Observasi dengan ketelitian rendah diberi bobot lebih kecil.</li>
  <li>Koordinat akhir adalah solusi kompromi terbaik.</li>
</ul>
`
},

/* ====================================================== */
{
title:"Bobot Observasi",
content:`
<h2>Bobot Observasi</h2>

<p>
Bobot biasanya berbanding terbalik dengan variansi observasi.
</p>

<div class="formula-box">
  P = 1 / σ²
</div>

<p>
Artinya:</p>

<ul>
  <li>SD kecil → variansi kecil → bobot besar.</li>
  <li>SD besar → variansi besar → bobot kecil.</li>
  <li>Baseline berkualitas baik lebih dominan dalam adjustment.</li>
</ul>
`
},

/* ====================================================== */
{
title:"Sumber Error GNSS",
content:`
<h2>Sumber Error GNSS</h2>

<ul>
  <li><b>Ionosfer</b>: menyebabkan delay sinyal GNSS.</li>
  <li><b>Troposfer</b>: dipengaruhi tekanan, suhu, dan kelembapan.</li>
  <li><b>Multipath</b>: pantulan sinyal dari bangunan, tanah, air, atau objek sekitar.</li>
  <li><b>Orbit satelit</b>: kesalahan posisi satelit.</li>
  <li><b>Receiver dan antena</b>: noise alat, phase center variation.</li>
</ul>
`
},

/* ====================================================== */
{
title:"Strategi Perbaikan Jaringan",
content:`
<h2>Strategi Perbaikan Jaringan GNSS</h2>

<ul>
  <li>Gunakan lebih dari satu titik referensi.</li>
  <li>Perpanjang waktu observasi.</li>
  <li>Hindari lokasi dengan multipath tinggi.</li>
  <li>Gunakan orbit presisi jika diperlukan.</li>
  <li>Lakukan pengamatan pada waktu DOP rendah.</li>
  <li>Lakukan adjustment jaringan secara menyeluruh.</li>
</ul>
`
},

/* ====================================================== */
{
title:"Studi Kasus",
content:`
<h2>Studi Kasus bm2_1</h2>

<p>
Diketahui:</p>

<ul>
  <li>Solusi akhir: Phase Fixed</li>
  <li>SD koordinat: orde milimeter</li>
  <li>CQ 3D: 0.0012 m sampai 0.0021 m</li>
  <li>Deviasi baseline clwb terhadap rata-rata: 0.3766 m</li>
</ul>

<div class="note-box">
  Pertanyaan utama: apakah hasil koordinat dapat langsung diterima, atau perlu evaluasi jaringan lebih lanjut?
</div>
`
},

/* ====================================================== */
{
title:"Analisis Studi Kasus",
content:`
<h2>Analisis Studi Kasus</h2>

<p>
Secara numerik, nilai SD dan CQ menunjukkan kualitas internal yang baik. Namun, terdapat deviasi posisi dan tinggi pada salah satu baseline.
</p>

<ul>
  <li>Baseline cuka menjadi solusi yang sangat dekat dengan rata-rata.</li>
  <li>Baseline clwb menunjukkan deviasi posisi dan tinggi lebih besar.</li>
  <li>Perlu dicek kondisi observasi, DOP, multipath, dan kualitas referensi.</li>
</ul>

<div class="note-box">
  Dalam kontrol geodesi, koordinat akhir harus dinilai dari kualitas internal dan konsistensi eksternal jaringan.
</div>
`
},

/* ====================================================== */
{
title:"Soal Latihan 1",
content:`
<h2>Soal Latihan 1: Panjang Baseline</h2>

<p>Diketahui baseline clwb - bm2_1:</p>

<ul>
  <li>ΔX = -11489.7517 m</li>
  <li>ΔY = -5099.7589 m</li>
  <li>ΔZ = 14203.9133 m</li>
</ul>

<p>Hitung panjang baseline menggunakan rumus:</p>

<div class="formula-box">
  L = √(ΔX² + ΔY² + ΔZ²)
</div>
`
},

/* ====================================================== */
{
title:"Soal Latihan 2",
content:`
<h2>Soal Latihan 2: Evaluasi Ketelitian</h2>

<p>Diketahui:</p>

<ul>
  <li>SD X = 0.0007 m</li>
  <li>SD Y = 0.0010 m</li>
  <li>SD Z = 0.0004 m</li>
</ul>

<p>Pertanyaan:</p>

<ol>
  <li>Apakah hasil ini termasuk teliti?</li>
  <li>Apakah hasil ini cukup untuk titik kontrol geodesi?</li>
  <li>Parameter lain apa yang tetap harus diperiksa?</li>
</ol>
`
},

/* ====================================================== */
{
title:"Soal Latihan 3",
content:`
<h2>Soal Latihan 3: Interpretasi DOP</h2>

<p>Diketahui nilai PDOP pada baseline clwb - bm2_1 berkisar antara 9.0 sampai 1.5.</p>

<p>Pertanyaan:</p>

<ol>
  <li>Apa makna PDOP = 9.0?</li>
  <li>Apa makna PDOP = 1.5?</li>
  <li>Kapan waktu pengamatan yang lebih baik?</li>
</ol>
`
},

/* ====================================================== */
{
title:"Soal Latihan 4",
content:`
<h2>Soal Latihan 4: Adjustment</h2>

<p>Diketahui model observasi:</p>

<div class="formula-box">
  l = A x + v
</div>

<p>Pertanyaan:</p>

<ol>
  <li>Jelaskan arti l, A, x, dan v.</li>
  <li>Tuliskan solusi least squares.</li>
  <li>Jelaskan mengapa bobot observasi diperlukan.</li>
</ol>
`
},

/* ====================================================== */
{
title:"Soal Diskusi",
content:`
<h2>Soal Diskusi Kelas</h2>

<p>
Pada report, baseline clwb memiliki deviasi posisi 0.2895 m dan deviasi tinggi 0.2408 m terhadap rata-rata.
</p>

<p>Diskusikan:</p>

<ol>
  <li>Apakah baseline tersebut harus dibuang?</li>
  <li>Apakah perlu pengamatan ulang?</li>
  <li>Parameter apa saja yang harus diperiksa sebelum mengambil keputusan?</li>
</ol>
`
},

/* ====================================================== */
{
title:"Kesimpulan",
content:`
<h2>Kesimpulan</h2>

<ul>
  <li>GNSS processing tidak berhenti pada koordinat akhir.</li>
  <li>Koordinat harus dievaluasi melalui SD, CQ, DOP, M0, dan konsistensi baseline.</li>
  <li>Solution type Phase Fixed menunjukkan kualitas solusi yang baik.</li>
  <li>Deviasi antar baseline tetap harus diperiksa dalam adjustment jaringan.</li>
  <li>Adjustment menghasilkan koordinat terbaik berdasarkan seluruh observasi berbobot.</li>
</ul>

<div class="note-box">
  Dalam Kerangka Kontrol Geodesi, kualitas jaringan lebih penting daripada sekadar memperoleh angka koordinat.
</div>
`
}

];
