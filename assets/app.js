const courses = [
  {id:'kerangka-kontrol-geodesi', code:'GEO-201', title:'Kerangka Kontrol Geodesi', icon:'bi-bezier2', desc:'Mempelajari titik kontrol horizontal, vertikal, datum, orde jaringan, dan penerapannya pada pemetaan dan konstruksi.'},
  {id:'sistem-informasi-geografis', code:'GEO-202', title:'Sistem Informasi Geografis', icon:'bi-map', desc:'Konsep data spasial, basis data geospasial, analisis overlay, buffer, query, dan visualisasi peta digital.'},
  {id:'penginderaan-jauh', code:'GEO-203', title:'Penginderaan Jauh', icon:'bi-satellite', desc:'Dasar citra satelit, resolusi citra, interpretasi visual, klasifikasi, dan pemanfaatan CSRT.'},
  {id:'pemodelan-3d-geospasial', code:'GEO-204', title:'Pemodelan 3D Geospasial', icon:'bi-box', desc:'Akuisisi, point cloud, mesh, glTF, 3D Tiles, X3D, dan visualisasi web 3D.'}
];

const lessonTitles = [
  'Kontrak Perkuliahan dan Pengantar', 'Konsep Dasar dan Ruang Lingkup', 'Sistem Referensi dan Datum', 'Kerangka Kontrol Horizontal',
  'Kerangka Kontrol Vertikal', 'GNSS untuk Kontrol Geodesi', 'Pengukuran Sudut dan Jarak', 'Perataan Jaringan',
  'Ketelitian dan Orde Jaringan', 'Transformasi Koordinat', 'Desain Jaringan Kontrol', 'Studi Kasus Lapangan',
  'Pengolahan Data', 'Visualisasi dan Pelaporan', 'Presentasi Proyek', 'Evaluasi Akhir Semester'
];

function getParam(name){ return new URLSearchParams(window.location.search).get(name); }
function findCourse(){ return courses.find(c=>c.id===getParam('course')) || courses[0]; }

function renderCourses(){
  const el=document.getElementById('courseList'); if(!el) return;
  el.innerHTML=courses.map(c=>`
    <div class="col-md-6 col-lg-4">
      <div class="card course-card shadow-sm h-100">
        <div class="card-body p-4">
          <div class="course-icon mb-4"><i class="bi ${c.icon}"></i></div>
          <div class="course-meta mb-2">${c.code} • 16 Pertemuan</div>
          <h4 class="fw-bold">${c.title}</h4>
          <p class="text-muted">${c.desc}</p>
          <a class="btn btn-primary rounded-pill px-4" href="course.html?course=${c.id}">Buka Mata Kuliah <i class="bi bi-arrow-right ms-1"></i></a>
        </div>
      </div>
    </div>`).join('');
}

function renderLessons(){
  const list=document.getElementById('lessonList'); if(!list) return;
  const c=findCourse();
  document.getElementById('courseCode').textContent=c.code;
  document.getElementById('courseTitle').textContent=c.title;
  document.getElementById('courseDescription').textContent=c.desc;
  list.innerHTML=lessonTitles.map((t,i)=>`
    <div class="col-md-6 col-lg-4">
      <div class="card lesson-card h-100 shadow-sm">
        <div class="card-body p-4 d-flex gap-3">
          <div class="meeting-pill">${i+1}</div>
          <div>
            <h5 class="fw-bold mb-2">Pertemuan ${i+1}</h5>
            <p class="mb-3 text-muted">${t}</p>
            <a href="lesson.html?course=${c.id}&meet=${i+1}" class="btn btn-outline-primary btn-sm rounded-pill">Buka Slide</a>
          </div>
        </div>
      </div>
    </div>`).join('');
}

let currentSlide=0;
function buildSlides(){
  const c=findCourse();
  const meet=parseInt(getParam('meet')||'1');
  const topic=lessonTitles[meet-1] || lessonTitles[0];
  return [
    {title:`${topic}`, subtitle:`${c.title} • Pertemuan ${meet}`, body:`<div class="slide-highlight mt-4">Tujuan pembelajaran: mahasiswa memahami konsep utama, istilah teknis, serta penerapan praktis pada bidang geospasial.</div>`},
    {title:'Capaian Pembelajaran', body:`<ul class="slide-list"><li>Menjelaskan konsep dasar topik pertemuan.</li><li>Mengidentifikasi komponen penting dalam praktik geomatika.</li><li>Menghubungkan teori dengan studi kasus lapangan.</li></ul>`},
    {title:'Konsep Utama', body:`<div class="row g-3"><div class="col-md-6"><div class="slide-highlight"><b>Data</b><br>Informasi spasial dan atribut yang digunakan untuk analisis.</div></div><div class="col-md-6"><div class="slide-highlight"><b>Metode</b><br>Prosedur pengukuran, pengolahan, dan validasi.</div></div></div>`},
    {title:'Contoh Ilustrasi', body:`<p class="slide-subtitle">Dalam praktik geodesi dan pemetaan, kesalahan pemilihan referensi dapat menyebabkan pergeseran posisi, inkonsistensi elevasi, dan kesalahan interpretasi peta.</p><div class="formula-box mt-4">Koordinat + Datum + Ketelitian = Kerangka Acuan yang Andal</div>`},
    {title:'Diskusi Kelas', body:`<ul class="slide-list"><li>Apa risiko jika titik acuan tidak konsisten?</li><li>Bagaimana cara memvalidasi hasil pengukuran?</li><li>Bagaimana topik ini diterapkan pada proyek nyata?</li></ul><div class="slide-highlight mt-3">Tugas: buat ringkasan 1 halaman dan contoh kasus penerapan.</div>`}
  ];
}
function renderSlide(){
  const content=document.getElementById('slideContent'); if(!content) return;
  const slides=buildSlides(); const s=slides[currentSlide];
  content.innerHTML=`<div><h1 class="slide-title">${s.title}</h1>${s.subtitle?`<p class="slide-subtitle mt-3">${s.subtitle}</p>`:''}<div class="mt-4">${s.body}</div></div>`;
  document.getElementById('slideCounter').textContent=`${currentSlide+1} / ${slides.length}`;
  renderThumbs(slides);
  const back=document.getElementById('backToCourse'); if(back) back.href=`course.html?course=${getParam('course')||courses[0].id}`;
}
function renderThumbs(slides){
  const thumbs=document.getElementById('slideThumbs'); if(!thumbs) return;
  thumbs.innerHTML=slides.map((s,i)=>`<div class="thumb-item ${i===currentSlide?'active':''}" onclick="goSlide(${i})">${i+1}. ${s.title}</div>`).join('');
}
function nextSlide(){ const slides=buildSlides(); currentSlide=(currentSlide+1)%slides.length; renderSlide(); }
function prevSlide(){ const slides=buildSlides(); currentSlide=(currentSlide-1+slides.length)%slides.length; renderSlide(); }
function goSlide(i){ currentSlide=i; renderSlide(); }
function toggleFullscreen(){ if(!document.fullscreenElement){document.documentElement.requestFullscreen();}else{document.exitFullscreen();} }
document.addEventListener('keydown',e=>{ if(document.getElementById('slideContent')){ if(e.key==='ArrowRight') nextSlide(); if(e.key==='ArrowLeft') prevSlide(); }});

document.addEventListener('DOMContentLoaded',()=>{ renderCourses(); renderLessons(); renderSlide(); });
