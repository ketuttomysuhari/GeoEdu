const BS = "\\";
const DM = (tex) => `<div class="math-box">${BS}[${tex}${BS}]</div>`;
const IM = (tex) => `${BS}(${tex}${BS})`;

const slides = [
  {
    title: "Cover",
    content: `
      <div class="cover-slide">
        <span class="badge bg-warning text-dark mb-3">Pertemuan 8</span>
        <h1>KERANGKA KONTROL GEODESI</h1>
        <h3>Adjustment / Perataan Pengukuran</h3>
        <p class="lead mt-4">Disusun untuk Mata Kuliah Geodesi / Survei Teknik</p>
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
    <h4>1.1 Kerangka Kontrol Geodesi</h4>

    <p>
      Kerangka Kontrol Geodesi (KKG) adalah jaringan titik-titik referensi
      yang koordinatnya ditentukan dengan ketelitian tinggi dalam suatu sistem
      datum tertentu. Titik-titik ini menjadi dasar bagi seluruh kegiatan
      survei, pemetaan, rekayasa teknik, kadaster, navigasi, hingga monitoring
      deformasi permukaan bumi.
    </p>

    <p>
      Secara filosofis, KKG adalah <b>bahasa posisi</b> yang menyatukan semua
      pengukuran. Tanpa kerangka kontrol, setiap pengukuran berdiri sendiri,
      tidak saling terhubung, dan kehilangan makna spasial. Dengan adanya KKG,
      setiap titik di lapangan memiliki hubungan matematis terhadap titik lain,
      terhadap wilayah, bahkan terhadap bumi secara keseluruhan.
    </p>

    <div class="quote-box">
      <b>Filosofi Geodesi:</b><br>
      “Jika suatu titik diketahui dengan benar, maka titik-titik lain dapat
      ditentukan dengan benar pula.”
    </div>

    <p>
      Karena itu, kualitas suatu peta, bangunan, batas tanah, maupun sistem
      navigasi modern sangat bergantung pada kualitas kerangka kontrol yang
      menopangnya.
    </p>

    <div class="row g-3">

      <div class="col-md-6">
        <div class="info-box h-100">
          <h5>Fungsi Utama KKG</h5>
          <ul>
            <li>Fondasi Sistem Informasi Geografis (SIG)</li>
            <li>Referensi pembangunan jalan, jembatan, gedung</li>
            <li>Acuan batas bidang tanah dan kadaster</li>
            <li>Kontrol jaringan pengukuran detail</li>
            <li>Monitoring deformasi, amblesan, longsor, gempa</li>
            <li>Dasar integrasi data GNSS, UAV, LiDAR, dan citra satelit</li>
          </ul>
        </div>
      </div>

      <div class="col-md-6">
        <div class="info-box h-100">
          <h5>Tujuan Pengukuran pada KKG</h5>
          <ul>
            <li><b>Akurasi</b> = dekat dengan nilai sebenarnya</li>
            <li><b>Presisi</b> = hasil berulang yang konsisten</li>
            <li><b>Reliabilitas</b> = mampu mendeteksi kesalahan</li>
            <li><b>Konsistensi</b> = sesuai datum & sistem koordinat</li>
            <li><b>Redundansi</b> = observasi cukup untuk pengecekan</li>
            <li><b>Stabilitas</b> = titik kontrol tidak mudah berubah</li>
          </ul>
        </div>
      </div>

    </div>

    <div class="example-box mt-4">
      <b>Contoh Sederhana:</b><br>
      Jika sebuah gedung dibangun tanpa titik acuan yang benar,
      maka posisi kolom, elevasi lantai, dan batas lahan dapat bergeser.
      Namun jika semua pekerjaan mengacu pada KKG yang sama,
      maka seluruh elemen akan konsisten dan presisi.
    </div>

    <div class="note-box mt-4">
      <b>Inti Pemahaman:</b><br>
      KKG bukan sekadar kumpulan patok atau koordinat,
      tetapi sistem kepercayaan ilmiah bahwa setiap posisi di bumi
      dapat ditentukan, diuji, dan dipertanggungjawabkan secara matematis.
    </div>
  `
},

{
  title: "Mengapa Adjustment?",
  content: `
    <h2>1.2 Mengapa Perlu Adjustment?</h2>

    <p>
      Setiap hasil pengukuran mengandung error, sehingga nilai observasi
      tidak sama persis dengan nilai sebenarnya. Hubungan dasarnya:
    </p>

    ${DM(String.raw`l_i = x + e_i`)}

    <ul>
      <li>${IM(String.raw`l_i`)} = observasi ke-i</li>
      <li>${IM(String.raw`x`)} = nilai benar / nilai paling mungkin</li>
      <li>${IM(String.raw`e_i`)} = error pengamatan</li>
    </ul>

    <div class="example-box">
      <b>Contoh Penerapan Rumus:</b><br><br>

      Misal jarak sebenarnya titik AB diasumsikan:
      ${IM(String.raw`x = 100.0233\\,m`)}

      <br><br>
      Hasil pengukuran ke-1:
      ${IM(String.raw`l_1 = 100.024\\,m`)}

      Maka:
      ${DM(String.raw`100.024 = 100.0233 + e_1`)}

      ${DM(String.raw`e_1 = 100.024 - 100.0233 = +0.0007\\,m`)}

      <hr>

      Hasil pengukuran ke-2:
      ${IM(String.raw`l_2 = 100.019\\,m`)}

      ${DM(String.raw`100.019 = 100.0233 + e_2`)}

      ${DM(String.raw`e_2 = -0.0043\\,m`)}

      <hr>

      Hasil pengukuran ke-3:
      ${IM(String.raw`l_3 = 100.027\\,m`)}

      ${DM(String.raw`100.027 = 100.0233 + e_3`)}

      ${DM(String.raw`e_3 = +0.0037\\,m`)}
    </div>

    <div class="note-box">
      <b>Makna:</b><br>
      Nilai ${IM(String.raw`e_i`)} positif berarti hasil ukur lebih besar dari nilai benar,
      sedangkan negatif berarti lebih kecil. Dalam adjustment,
      error-error ini diminimalkan agar diperoleh estimasi terbaik.
    </div>
  `
},

{
  title: "Jenis Kesalahan",
  content: `
    <h2>II. Teori Kesalahan</h2>
    <h4>2.1 Jenis Kesalahan Pengukuran</h4>

    <p>
      Dalam survei dan geodesi, tidak semua kesalahan diperlakukan sama.
      Ada kesalahan yang <b>harus dihilangkan</b>, ada yang <b>dapat dikoreksi</b>,
      dan ada yang <b>tidak dapat dihilangkan sepenuhnya</b> sehingga dianalisis
      dengan statistik.
    </p>

    <div class="row g-3">

      <div class="col-md-4">
        <div class="info-box h-100">
          <h5>1. Blunder (Kesalahan Kasar)</h5>

          <p>
            Kesalahan besar akibat kelalaian manusia atau prosedur salah.
            <b>Tidak disarankan masuk ke adjustment</b> karena merusak hasil.
          </p>

          <b>Contoh:</b><br>
          25.124 m tertulis 52.124 m<br>
          Salah target titik B menjadi titik C<br>
          Salah input satuan cm menjadi m

          <hr>

          <b>Cara Mengetahui:</b>
          <ul>
            <li>Nilai jauh berbeda dari pengukuran lain</li>
            <li>Tidak logis secara geometri</li>
            <li>Misclosure sangat besar</li>
            <li>Uji residual menunjukkan outlier</li>
          </ul>

          <b>Tindakan:</b><br>
          Ulang ukur / hapus data salah.
        </div>
      </div>

      <div class="col-md-4">
        <div class="info-box h-100">
          <h5>2. Sistematis</h5>

          <p>
            Kesalahan berpola, memiliki arah tertentu, dan
            <b>bisa diperbaiki dengan model koreksi</b>.
          </p>

          <b>Contoh:</b><br>
          Koreksi suhu pita ukur<br>
          Koreksi tekanan atmosfer EDM<br>
          Konstanta prisma total station<br>
          Kolimasi alat

          <hr>

          <b>Cara Mengetahui:</b>
          <ul>
            <li>Terjadi berulang dengan pola sama</li>
            <li>Selisih proporsional terhadap jarak</li>
            <li>Diketahui dari kalibrasi alat</li>
            <li>Sesuai teori fisik instrumen</li>
          </ul>

          <b>Tindakan:</b><br>
          Terapkan koreksi sebelum adjustment.
        </div>
      </div>

      <div class="col-md-4">
        <div class="info-box h-100">
          <h5>3. Acak (Random Error)</h5>

          <p>
            Kesalahan kecil yang berubah-ubah tanpa pola tetap.
            <b>Tidak bisa dihilangkan seluruhnya</b>,
            tetapi dapat diperkecil dengan observasi berulang.
          </p>

          <b>Contoh:</b><br>
          Fluktuasi bacaan sudut ±2″<br>
          Getaran tripod kecil<br>
          Ketelitian pembacaan operator

          <hr>

          <b>Cara Mengetahui:</b>
          <ul>
            <li>Nilai menyebar di sekitar rata-rata</li>
            <li>Tidak memiliki pola tetap</li>
            <li>Mengikuti distribusi normal</li>
            <li>Dianalisis dengan standar deviasi</li>
          </ul>

          <b>Tindakan:</b><br>
          Gunakan adjustment Least Squares.
        </div>
      </div>

    </div>

    <div class="example-box mt-4">
      <b>Contoh Praktik:</b><br>
      Pengukuran jarak dilakukan 5 kali:
      100.021, 100.022, 100.020, 100.021, 130.000 m
      <br><br>
      Nilai 130.000 m kemungkinan <b>blunder</b> karena jauh menyimpang.
      Nilai lain adalah variasi <b>acak</b>.
    </div>

    <div class="note-box mt-4">
      <b>Urutan yang benar sebelum Adjustment:</b><br>
      1. Deteksi dan buang blunder<br>
      2. Koreksi kesalahan sistematis<br>
      3. Sesuaikan sisa error acak dengan metode perataan
    </div>
  `
},

  {
    title: "Distribusi Error",
    content: `
      <h2>2.2 Distribusi Kesalahan Acak</h2>

      <p>
        Dalam geodesi, kesalahan acak sering diasumsikan mengikuti distribusi normal.
      </p>

      ${DM(String.raw`f(e)=\frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{e^2}{2\sigma^2}\right)`)}

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Makna</h5>
            <ul>
              <li>Error kecil lebih sering muncul</li>
              <li>Error besar lebih jarang muncul</li>
              <li>Distribusi simetris terhadap nol</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h5>Digunakan Untuk</h5>
            <ul>
              <li>Analisis residual</li>
              <li>Uji statistik</li>
              <li>Estimasi ketelitian</li>
              <li>Deteksi blunder</li>
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
        Metode kuadrat terkecil mencari nilai parameter yang membuat jumlah kuadrat
        residual menjadi minimum.
      </p>

      ${DM(String.raw`\sum_{i=1}^{n} v_i^2 = \min`)}

      <p>
        Untuk pengamatan dengan bobot berbeda, digunakan bentuk berbobot:
      </p>

      ${DM(String.raw`\Phi = v^T P v = \min`)}

      <div class="info-box">
        <h5>Keterangan</h5>
        <ul>
          <li>${IM(String.raw`v`)} = vektor residual</li>
          <li>${IM(String.raw`P`)} = matriks bobot pengamatan</li>
          <li>${IM(String.raw`\Phi`)} = fungsi objektif yang diminimumkan</li>
        </ul>
      </div>

      <div class="example-box mt-3">
        Pengamatan dengan ketelitian lebih tinggi diberi bobot lebih besar.
      </div>
    `
  },

  {
    title: "Model Observasi",
    content: `
      <h2>3.2 Model Matematis Adjustment</h2>

      <p>
        Model umum observasi dalam adjustment dapat ditulis sebagai:
      </p>

      ${DM(String.raw`L_b + v = F(X_a)`)}

      <p>
        Untuk model linear atau model yang telah dilinearisasi:
      </p>

      ${DM(String.raw`v = A\hat{x} - l`)}

      <div class="info-box">
        <h5>Keterangan</h5>
        <ul>
          <li>${IM(String.raw`A`)} = matriks desain</li>
          <li>${IM(String.raw`\hat{x}`)} = koreksi / parameter estimasi</li>
          <li>${IM(String.raw`l`)} = vektor observasi tereduksi</li>
          <li>${IM(String.raw`v`)} = residual</li>
        </ul>
      </div>
    `
  },

  {
    title: "Normal Equation",
    content: `
      <h2>3.3 Normal Equation</h2>

      <p>
        Dengan meminimumkan fungsi objektif ${IM(String.raw`\Phi = v^TPv`)},
        diperoleh persamaan normal:
      </p>

      ${DM(String.raw`A^T P A \hat{x} = A^T P l`)}

      <p>
        Solusi parameter adjustment:
      </p>

      ${DM(String.raw`\hat{x} = (A^T P A)^{-1} A^T P l`)}

      <div class="note-box">
        Persamaan ini merupakan dasar perataan jaringan kontrol geodesi modern.
      </div>
    `
  },

  {
    title: "Bobot Pengamatan",
    content: `
      <h2>3.4 Bobot Pengamatan</h2>

      <p>
        Jika pengamatan memiliki ketelitian berbeda, bobot diberikan berdasarkan variansinya.
      </p>

      ${DM(String.raw`p_i = \frac{1}{\sigma_i^2}`)}

      <p>
        Dalam bentuk matriks:
      </p>

      ${DM(String.raw`P = \Sigma_l^{-1}`)}

      <div class="example-box">
        Jika pengamatan A memiliki ${IM(String.raw`\sigma=2\,mm`)} dan pengamatan B memiliki
        ${IM(String.raw`\sigma=5\,mm`)}, maka bobot A lebih besar daripada B.
      </div>
    `
  },

  {
    title: "Rata-rata Berbobot",
    content: `
      <h2>IV. Contoh Adjustment Sederhana</h2>
      <h4>4.1 Rata-rata Berbobot</h4>

      <p>
        Untuk beberapa observasi dengan bobot berbeda, nilai terbaik dihitung dengan:
      </p>

      ${DM(String.raw`\bar{x}_w = \frac{\sum p_i l_i}{\sum p_i}`)}

      <table class="table table-bordered table-sm">
        <thead class="table-primary">
          <tr>
            <th>Observasi</th>
            <th>Jarak</th>
            <th>Standar Deviasi</th>
            <th>Bobot</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>L1</td><td>100.024 m</td><td>2 mm</td><td>0.250</td></tr>
          <tr><td>L2</td><td>100.019 m</td><td>3 mm</td><td>0.111</td></tr>
          <tr><td>L3</td><td>100.027 m</td><td>5 mm</td><td>0.040</td></tr>
        </tbody>
      </table>

      ${DM(String.raw`\bar{x}_w=\frac{(0.250)(100.024)+(0.111)(100.019)+(0.040)(100.027)}{0.250+0.111+0.040}`)}

      <div class="note-box">
        Observasi yang lebih teliti memberikan pengaruh lebih besar terhadap nilai akhir.
      </div>
    `
  },

  {
    title: "Poligon Tertutup",
    content: `
      <h2>4.2 Adjustment Sudut Poligon Tertutup</h2>

      <p>
        Untuk poligon tertutup dengan ${IM(String.raw`n`)} titik, jumlah sudut teoritis:
      </p>

      ${DM(String.raw`\sum \beta_{\text{teori}} = (n-2)\times 180^\circ`)}

      <p>
        Untuk 4 titik:
      </p>

      ${DM(String.raw`\sum \beta_{\text{teori}}=(4-2)\times 180^\circ=360^\circ`)}

      <p>
        Sudut terukur: 90°00’10”, 89°59’55”, 90°00’05”, 90°00’08”.
      </p>

      ${DM(String.raw`\sum \beta_{\text{ukur}} = 360^\circ 00'18"`)}

      ${DM(String.raw`f_\beta = \sum \beta_{\text{ukur}}-\sum \beta_{\text{teori}}=+18"`)}

      ${DM(String.raw`c_i = -\frac{f_\beta}{n}=-\frac{18"}{4}=-4.5"`)}

      <div class="example-box">
        Setiap sudut dikoreksi sebesar -4.5 detik.
      </div>
    `
  },

  {
    title: "GNSS Statik",
    content: `
      <h2>4.3 Adjustment Jaringan GNSS Statik</h2>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Tahapan</h5>
            <ol>
              <li>Observasi GNSS statik 1–4 jam</li>
              <li>Pengolahan baseline</li>
              <li>Pembentukan loop jaringan</li>
              <li>Adjustment least squares</li>
              <li>Analisis residual dan ketelitian</li>
            </ol>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h5>Contoh Baseline</h5>
            <ul>
              <li>AB = 1542.334 m</li>
              <li>BC = 2130.112 m</li>
              <li>AC = 3672.451 m</li>
            </ul>
          </div>
        </div>
      </div>

      ${DM(String.raw`AB + BC = 1542.334 + 2130.112 = 3672.446\,m`)}

      ${DM(String.raw`f = 3672.446 - 3672.451 = -0.005\,m`)}

      <div class="note-box">
        Misclosure 5 mm harus didistribusikan ke jaringan melalui adjustment.
      </div>
    `
  },

  {
    title: "Ketelitian",
    content: `
      <h2>V. Ketelitian Hasil Adjustment</h2>
      <h4>5.1 Variansi Aposteriori</h4>

      <p>
        Faktor variansi aposteriori menunjukkan kualitas umum hasil adjustment.
      </p>

      ${DM(String.raw`\hat{\sigma}_0^2 = \frac{v^T P v}{n-u}`)}

      <ul>
        <li>${IM(String.raw`n`)} = jumlah observasi</li>
        <li>${IM(String.raw`u`)} = jumlah parameter</li>
        <li>${IM(String.raw`n-u`)} = derajat bebas</li>
      </ul>

      <h4 class="mt-3">5.2 Kovariansi Parameter</h4>

      ${DM(String.raw`\Sigma_{\hat{x}}=\hat{\sigma}_0^2(A^TPA)^{-1}`)}

      <div class="example-box">
        Hasil akhir adjustment bukan hanya koordinat, tetapi juga ketelitian koordinat.
      </div>
    `
  },

  {
    title: "Error Ellipse",
    content: `
      <h2>5.3 Error Ellipse</h2>

      <p>
        Error ellipse menggambarkan ketidakpastian posisi horizontal titik hasil adjustment.
      </p>

      ${DM(String.raw`\Sigma_{xy}=
\begin{bmatrix}
\sigma_x^2 & \sigma_{xy}\\
\sigma_{xy} & \sigma_y^2
\end{bmatrix}`)}

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Sumbu Mayor</h5>
            <p>Arah ketidakpastian posisi terbesar.</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h5>Sumbu Minor</h5>
            <p>Arah ketidakpastian posisi terkecil.</p>
          </div>
        </div>
      </div>

      <div class="note-box mt-3">
        Semakin kecil error ellipse, semakin baik ketelitian koordinat titik.
      </div>
    `
  },

  {
    title: "Deteksi Blunder",
    content: `
      <h2>5.4 Deteksi Blunder dari Residual</h2>

      <p>
        Residual dapat digunakan untuk mengevaluasi pengamatan yang mencurigakan.
      </p>

      ${DM(String.raw`r_i = \frac{v_i}{\sigma_{v_i}}`)}

      <div class="info-box">
        <h5>Interpretasi</h5>
        <ul>
          <li>Jika ${IM(String.raw`|r_i|`)} kecil, pengamatan masih wajar</li>
          <li>Jika ${IM(String.raw`|r_i|`)} besar, pengamatan perlu diperiksa</li>
          <li>Jika melewati ambang statistik, pengamatan dapat dianggap blunder</li>
        </ul>
      </div>

      <div class="example-box mt-3">
        Pada GNSS, residual besar dapat menunjukkan multipath, cycle slip,
        atau kesalahan centering antena.
      </div>
    `
  },

  {
    title: "Latihan Interaktif",
    content: `
      <h2>VI. Latihan Interaktif</h2>

      <p>Diketahui pengukuran jarak AB:</p>

      <ul>
        <li>25.124 m</li>
        <li>25.118 m</li>
        <li>25.121 m</li>
      </ul>

      <p>Hitung nilai terbaik, residual, dan standar deviasi.</p>

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
        <i class="bi bi-calculator me-1"></i>Hitung
      </button>

      <div id="latihanResult" class="result-box mt-3">
        Hasil perhitungan akan muncul di sini.
      </div>
    `
  },

  {
    title: "Kesimpulan",
    content: `
      <h2>VII. Kesimpulan</h2>

      <ul class="fs-5">
        <li>Kerangka Kontrol Geodesi memerlukan jaringan yang konsisten dan teliti.</li>
        <li>Adjustment digunakan untuk memperoleh nilai parameter paling mungkin.</li>
        <li>Least Squares meminimumkan jumlah kuadrat residual.</li>
        <li>Bobot diperlukan karena kualitas pengamatan tidak selalu sama.</li>
        <li>Hasil adjustment harus disertai ketelitian dan kovariansi.</li>
        <li>Residual dapat membantu mendeteksi blunder.</li>
      </ul>

      <div class="note-box mt-4">
        <b>Diskusi:</b>
        <ol>
          <li>Mengapa redundansi penting dalam jaringan kontrol?</li>
          <li>Apa beda rata-rata biasa dan rata-rata berbobot?</li>
          <li>Mengapa koordinat tanpa ketelitian belum lengkap?</li>
        </ol>
      </div>
    `
  },

  {
    title: "Quote",
    content: `
      <div class="quote-slide">
        <h2>“No measurement is complete until its uncertainty is known.”</h2>
        <p>Dalam geodesi, hasil ukur tanpa ketelitian belum menjadi hasil yang lengkap.</p>
      </div>
    `
  }
];

let currentSlide = 0;

function renderSlide() {
  const slideContent = document.getElementById("slideContent");
  const slideCounter = document.getElementById("slideCounter");

  slideContent.innerHTML = slides[currentSlide].content;
  slideCounter.innerText = `${currentSlide + 1} / ${slides.length}`;

  renderThumbs();

  if (window.MathJax && MathJax.typesetPromise) {
    MathJax.typesetClear([slideContent]);
    MathJax.typesetPromise([slideContent]);
  }
}

function renderThumbs() {
  const thumbs = document.getElementById("slideThumbs");
  if (!thumbs) return;

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
  const mean = values.reduce((a, b) => a + b, 0) / n;
  const residuals = values.map(v => v - mean);
  const variance = residuals.reduce((sum, r) => sum + r * r, 0) / (n - 1);
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

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

document.addEventListener("DOMContentLoaded", renderSlide);
