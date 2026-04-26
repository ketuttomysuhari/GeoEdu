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
    title: "Konsep KKG",
    content: `
      <h2>I. Pendahuluan & Konsep Dasar</h2>
      <h4>1.1 Pengantar Kerangka Kontrol Geodesi</h4>

      <p>
        <b>Kerangka Kontrol Geodesi (KKG)</b> adalah jaringan titik tetap yang koordinatnya
        ditentukan secara teliti dan menjadi referensi utama dalam survei, pemetaan,
        konstruksi, kadaster, serta monitoring deformasi.
      </p>

      <div class="row g-3 mt-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Fungsi KKG</h5>
            <ul>
              <li>Fondasi Sistem Informasi Geografis</li>
              <li>Referensi pembangunan jalan, jembatan, dan gedung</li>
              <li>Acuan batas tanah dan kadaster</li>
              <li>Kontrol deformasi bendungan, jembatan, dan lereng</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h5>Tujuan Pengukuran</h5>
            <ul>
              <li><b>Akurasi</b>: dekat dengan nilai benar</li>
              <li><b>Presisi</b>: hasil pengukuran konsisten</li>
              <li><b>Reliabilitas</b>: mampu mendeteksi kesalahan</li>
              <li><b>Konsistensi</b>: sesuai sistem referensi geodesi</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="example-box mt-3">
        <b>Contoh:</b> Titik Bench Mark nasional dipakai sebagai acuan survei jalan tol,
        jaringan kota, dan pengukuran batas bidang tanah.
      </div>
    `
  },

  {
    title: "Mengapa Adjustment?",
    content: `
      <h2>1.2 Mengapa Perlu Adjustment?</h2>

      <p>
        Dalam survei geodesi, pengukuran jarang menghasilkan nilai yang sama persis.
        Perbedaan terjadi karena kesalahan alat, manusia, lingkungan, dan kondisi observasi.
      </p>

      <div class="math-box">
        \$begin:math:display$
        l\_i \= x \+ e\_i
        \\$end:math:display$
      </div>

      <p>
        Dengan $begin:math:text$l\_i$end:math:text$ sebagai observasi, $begin:math:text$x$end:math:text$ nilai benar, dan $begin:math:text$e\_i$end:math:text$ kesalahan pengukuran.
      </p>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Contoh Pengukuran Jarak AB</h5>
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
              <li>Menentukan nilai paling mungkin</li>
              <li>Mendistribusikan misclosure</li>
              <li>Menghitung residual pengamatan</li>
              <li>Menentukan ketelitian koordinat</li>
              <li>Mendeteksi blunder</li>
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
      <h4>2.1 Jenis Kesalahan dalam Pengukuran</h4>

      <div class="row g-3">
        <div class="col-md-4">
          <div class="info-box h-100">
            <h5>1. Blunder</h5>
            <p>Kesalahan kasar akibat salah baca, salah input, salah target, atau salah catat.</p>
            <b>Contoh:</b> 100.024 m tercatat 110.024 m.
          </div>
        </div>

        <div class="col-md-4">
          <div class="info-box h-100">
            <h5>2. Sistematis</h5>
            <p>Kesalahan berpola dan dapat dikoreksi menggunakan model koreksi.</p>
            <b>Contoh:</b> koreksi suhu, tekanan, konstanta prisma.
          </div>
        </div>

        <div class="col-md-4">
          <div class="info-box h-100">
            <h5>3. Acak</h5>
            <p>Kesalahan kecil yang tidak dapat dihilangkan, tetapi dapat dimodelkan secara statistik.</p>
            <b>Contoh:</b> fluktuasi bacaan sudut beberapa detik.
          </div>
        </div>
      </div>

      <div class="note-box mt-4">
        Adjustment terutama digunakan untuk menangani <b>kesalahan acak</b>,
        setelah blunder dan kesalahan sistematis dikoreksi.
      </div>
    `
  },

  {
    title: "Distribusi Normal",
    content: `
      <h2>2.2 Distribusi Kesalahan</h2>

      <p>
        Dalam adjustment geodesi, kesalahan acak sering diasumsikan mengikuti distribusi normal.
      </p>

      <div class="math-box">
        \$begin:math:display$
        f\(e\)\=\\\\frac\{1\}\{\\\\sigma\\\\sqrt\{2\\\\pi\}\}
        \\\\exp\\\\left\(\-\\\\frac\{e\^2\}\{2\\\\sigma\^2\}\\\\right\)
        \\$end:math:display$
      </div>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Makna Statistik</h5>
            <ul>
              <li>Error kecil lebih sering terjadi</li>
              <li>Error besar lebih jarang terjadi</li>
              <li>Distribusi simetris terhadap nol</li>
              <li>Rata-rata error mendekati nol</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h5>Dalam Geodesi Digunakan Untuk</h5>
            <ul>
              <li>Analisis residual</li>
              <li>Uji blunder</li>
              <li>Estimasi standar deviasi</li>
              <li>Penentuan interval kepercayaan</li>
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
        Metode kuadrat terkecil mencari nilai parameter yang membuat jumlah kuadrat residual minimum.
      </p>

      <div class="math-box">
        \$begin:math:display$
        \\\\sum\_\{i\=1\}\^\{n\} v\_i\^2 \= minimum
        \\$end:math:display$
      </div>

      <p>Jika setiap pengamatan memiliki bobot berbeda, digunakan bentuk berbobot:</p>

      <div class="math-box">
        \$begin:math:display$
        \\\\Phi \= v\^T P v \= minimum
        \\$end:math:display$
      </div>

      <div class="info-box">
        <h5>Keterangan</h5>
        <ul>
          <li>$begin:math:text$v$end:math:text$ = vektor residual</li>
          <li>$begin:math:text$P$end:math:text$ = matriks bobot pengamatan</li>
          <li>$begin:math:text$\\Phi$end:math:text$ = fungsi objektif yang diminimumkan</li>
        </ul>
      </div>

      <div class="example-box">
        <b>Interpretasi geodesi:</b> pengamatan dengan ketelitian lebih tinggi diberi bobot lebih besar.
      </div>
    `
  },

  {
    title: "Model Fungsional",
    content: `
      <h2>3.2 Model Fungsional Adjustment</h2>

      <p>
        Hubungan antara observasi dan parameter dinyatakan dengan model matematis.
      </p>

      <div class="math-box">
        \$begin:math:display$
        L\_b \+ v \= F\(X\_a\)
        \\$end:math:display$
      </div>

      <p>
        Untuk kasus linear atau setelah dilinearisasi:
      </p>

      <div class="math-box">
        \$begin:math:display$
        v \= A\\\\hat\{x\} \- l
        \\$end:math:display$
      </div>

      <div class="math-box">
        \$begin:math:display$
        A\^T P A \\\\hat\{x\} \= A\^T P l
        \\$end:math:display$
      </div>

      <div class="math-box">
        \$begin:math:display$
        \\\\hat\{x\}\=\(A\^TPA\)\^\{\-1\}A\^TPl
        \\$end:math:display$
      </div>

      <div class="note-box">
        Persamaan $begin:math:text$A\^TPA\\\\hat\{x\}\=A\^TPl$end:math:text$ disebut <b>normal equation</b>.
      </div>
    `
  },

  {
    title: "Bobot Pengamatan",
    content: `
      <h2>3.3 Bobot Pengamatan</h2>

      <p>
        Tidak semua pengamatan memiliki kualitas sama. Oleh karena itu, adjustment menggunakan bobot.
      </p>

      <div class="math-box">
        \$begin:math:display$
        p\_i \= \\\\frac\{\\\\sigma\_0\^2\}\{\\\\sigma\_i\^2\}
        \\$end:math:display$
      </div>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Jika Standar Deviasi Kecil</h5>
            <p>Pengamatan lebih teliti, sehingga bobotnya lebih besar.</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h5>Jika Standar Deviasi Besar</h5>
            <p>Pengamatan kurang teliti, sehingga bobotnya lebih kecil.</p>
          </div>
        </div>
      </div>

      <div class="example-box mt-3">
        <b>Contoh:</b><br>
        Pengamatan A memiliki $begin:math:text$\\sigma\=2\\\,mm$end:math:text$, pengamatan B memiliki $begin:math:text$\\sigma\=5\\\,mm$end:math:text$.  
        Maka pengamatan A harus diberi bobot lebih besar karena lebih teliti.
      </div>
    `
  },

  {
    title: "Contoh Rata-rata Berbobot",
    content: `
      <h2>IV. Contoh Adjustment Sederhana</h2>
      <h4>4.1 Rata-rata Berbobot</h4>

      <p>Diketahui tiga pengukuran jarak dengan standar deviasi berbeda:</p>

      <table class="table table-bordered table-sm">
        <thead class="table-primary">
          <tr>
            <th>Observasi</th>
            <th>Jarak (m)</th>
            <th>Standar Deviasi</th>
            <th>Bobot</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>L1</td><td>100.024</td><td>2 mm</td><td>1/2² = 0.250</td></tr>
          <tr><td>L2</td><td>100.019</td><td>3 mm</td><td>1/3² = 0.111</td></tr>
          <tr><td>L3</td><td>100.027</td><td>5 mm</td><td>1/5² = 0.040</td></tr>
        </tbody>
      </table>

      <div class="math-box">
        \$begin:math:display$
        \\\\bar\{x\}\_w \= \\\\frac\{\\\\sum p\_i l\_i\}\{\\\\sum p\_i\}
        \\$end:math:display$
      </div>

      <div class="math-box">
        \$begin:math:display$
        \\\\bar\{x\}\_w \=
        \\\\frac\{\(0\.250\)\(100\.024\)\+\(0\.111\)\(100\.019\)\+\(0\.040\)\(100\.027\)\}
        \{0\.250\+0\.111\+0\.040\}
        \\$end:math:display$
      </div>

      <div class="note-box">
        Nilai dengan standar deviasi lebih kecil memberi kontribusi lebih besar terhadap hasil akhir.
      </div>
    `
  },

  {
    title: "Poligon Tertutup",
    content: `
      <h2>4.2 Adjustment Sudut Poligon Tertutup</h2>

      <p>Untuk poligon tertutup dengan $begin:math:text$n$end:math:text$ titik, jumlah sudut teoritis adalah:</p>

      <div class="math-box">
        \$begin:math:display$
        \\\\sum \\\\beta\_\{teori\} \= \(n\-2\) \\\\times 180\^\\\\circ
        \\$end:math:display$
      </div>

      <p>Jika poligon memiliki 4 titik:</p>

      <div class="math-box">
        \$begin:math:display$
        \\\\sum \\\\beta\_\{teori\} \= \(4\-2\) \\\\times 180\^\\\\circ \= 360\^\\\\circ
        \\$end:math:display$
      </div>

      <p>Sudut terukur:</p>
      <ul>
        <li>90°00’10”</li>
        <li>89°59’55”</li>
        <li>90°00’05”</li>
        <li>90°00’08”</li>
      </ul>

      <div class="math-box">
        \$begin:math:display$
        \\\\sum \\\\beta\_\{ukur\}\=360\^\\\\circ 00\'18\"
        \\$end:math:display$
        \$begin:math:display$
        f\_\\\\beta \= \\\\sum \\\\beta\_\{ukur\}\-\\\\sum \\\\beta\_\{teori\}\=\+18\"
        \\$end:math:display$
        \$begin:math:display$
        c\_i \= \-\\\\frac\{f\_\\\\beta\}\{n\}\=\-\\\\frac\{18\"\}\{4\}\=\-4\.5\"
        \\$end:math:display$
      </div>

      <div class="example-box">
        Setiap sudut dikoreksi sebesar $begin:math:text$\-4\.5\"$end:math:text$ agar jumlah sudut kembali menjadi $begin:math:text$360\^\\\\circ$end:math:text$.
      </div>
    `
  },

  {
    title: "GNSS Statik",
    content: `
      <h2>4.3 Adjustment Jaringan GNSS Statik</h2>

      <p>
        Dalam GNSS statik, adjustment dilakukan terhadap baseline antar titik.
        Redundansi muncul karena terdapat loop jaringan.
      </p>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Tahapan</h5>
            <ol>
              <li>Observasi GNSS 1–4 jam</li>
              <li>Pengolahan baseline</li>
              <li>Pembentukan jaringan</li>
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

            <div class="math-box small-math">
              \$begin:math:display$
              AB\+BC\=3672\.446\\\\\,m
              \\$end:math:display$
              \$begin:math:display$
              f\=3672\.446\-3672\.451\=\-0\.005\\\\\,m
              \\$end:math:display$
            </div>
          </div>
        </div>
      </div>

      <div class="note-box">
        Misclosure 5 mm menunjukkan adanya ketidaksesuaian loop yang harus didistribusikan melalui adjustment.
      </div>
    `
  },

  {
    title: "Kovariansi & Error Ellipse",
    content: `
      <h2>V. Ketelitian Hasil Adjustment</h2>
      <h4>5.1 Kovariansi Parameter</h4>

      <p>
        Hasil adjustment tidak hanya berupa koordinat, tetapi juga ketelitiannya.
      </p>

      <div class="math-box">
        \$begin:math:display$
        \\\\Sigma\_\{\\\\hat\{x\}\} \= \\\\hat\{\\\\sigma\}\_0\^2 \(A\^T P A\)\^\{\-1\}
        \\$end:math:display$
      </div>

      <p>Dengan faktor variansi aposteriori:</p>

      <div class="math-box">
        \$begin:math:display$
        \\\\hat\{\\\\sigma\}\_0\^2 \= \\\\frac\{v\^T P v\}\{n\-u\}
        \\$end:math:display$
      </div>

      <div class="row g-3">
        <div class="col-md-6">
          <div class="info-box">
            <h5>Keterangan</h5>
            <ul>
              <li>$begin:math:text$n$end:math:text$ = jumlah observasi</li>
              <li>$begin:math:text$u$end:math:text$ = jumlah parameter</li>
              <li>$begin:math:text$n\-u$end:math:text$ = derajat bebas</li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <div class="info-box">
            <h5>Error Ellipse</h5>
            <ul>
              <li>Sumbu mayor menunjukkan arah ketidakpastian terbesar</li>
              <li>Sumbu minor menunjukkan arah ketidakpastian terkecil</li>
              <li>Semakin kecil elips, semakin baik kualitas koordinat</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },

  {
    title: "Uji Blunder",
    content: `
      <h2>5.2 Deteksi Blunder</h2>

      <p>
        Setelah adjustment, residual dapat digunakan untuk mendeteksi pengamatan yang mencurigakan.
      </p>

      <div class="math-box">
        \$begin:math:display$
        r\_i \= \\\\frac\{v\_i\}\{\\\\sigma\_\{v\_i\}\}
        \\$end:math:display$
      </div>

      <div class="info-box">
        <h5>Interpretasi</h5>
        <ul>
          <li>Jika $begin:math:text$\|r\_i\|$end:math:text$ kecil, pengamatan masih wajar</li>
          <li>Jika $begin:math:text$\|r\_i\|$end:math:text$ besar, pengamatan perlu diperiksa</li>
          <li>Jika melewati ambang statistik, pengamatan dapat dianggap blunder</li>
        </ul>
      </div>

      <div class="example-box">
        <b>Contoh:</b> Jika residual satu baseline GNSS jauh lebih besar daripada baseline lain,
        kemungkinan terjadi multipath, cycle slip, atau kesalahan centering antena.
      </div>
    `
  },

  {
    title: "Kesimpulan",
    content: `
      <h2>VI. Kesimpulan</h2>

      <ul class="fs-5">
        <li>Kerangka Kontrol Geodesi membutuhkan jaringan yang konsisten dan teliti.</li>
        <li>Adjustment digunakan untuk memperoleh nilai parameter paling mungkin.</li>
        <li>Least Squares menjadi metode utama karena berbasis optimasi residual.</li>
        <li>Bobot pengamatan penting karena kualitas data tidak selalu sama.</li>
        <li>Hasil adjustment harus disertai informasi ketelitian.</li>
        <li>Residual dapat digunakan untuk mengevaluasi kualitas jaringan dan mendeteksi blunder.</li>
      </ul>

      <div class="note-box mt-4">
        <b>Diskusi:</b>
        <ol>
          <li>Mengapa redundansi penting dalam jaringan kontrol?</li>
          <li>Apa perbedaan rata-rata biasa dan rata-rata berbobot?</li>
          <li>Mengapa hasil koordinat harus disertai nilai ketelitian?</li>
        </ol>
      </div>
    `
  },

  {
    title: "Latihan",
    content: `
      <h2>VII. Latihan Interaktif</h2>

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
    title: "Quote",
    content: `
      <div class="quote-slide">
        <h2>“No measurement is complete until its uncertainty is known.”</h2>
        <p>Dalam geodesi, koordinat tanpa ketelitian belum menjadi hasil pengukuran yang lengkap.</p>
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

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function renderThumbs() {
  const thumbs = document.getElementById("slideThumbs");
  thumbs.innerHTML = "";

  slides.forEach((slide, index) => {
    const item = document.createElement("button");
    item.className = `slide-thumb ${index === currentSlide ? "active" : ""}`;
    item.innerHTML = `
      <span>${index + 1}</span>
      <p>${slide.title}</p>
    `;
    item.onclick = () => {
      currentSlide = index;
      renderSlide();
    };
    thumbs.appendChild(item);
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
  const elem = document.documentElement;

  if (!document.fullscreenElement) {
    elem.requestFullscreen();
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
