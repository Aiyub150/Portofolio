/**
 * Multi-language Support (Indonesian & English) with Auto Geolocation Detection
 * Portfolio - Aiyub Heriyanto
 */

const translations = {
  id: {
    // Navigation
    'nav.profile': 'Profil',
    'nav.skills': 'Keahlian',
    'nav.experience': 'Pengalaman',
    'nav.projects': 'Proyek',
    'nav.certificates': 'Sertifikat',
    'nav.contact': 'Kontak',
    'nav.connect': 'Hubungi Saya',

    // Hero Section
    'hero.eyebrow': 'Mahasiswa Teknik Komputer',
    'hero.title_lines': '["IoT Engineering","&amp; Full Stack","Web Dev."]',
    'hero.title_aria': 'IoT Engineering &amp; Full Stack Web Dev.',
    'hero.desc': 'Saya Aiyub Heriyanto, mahasiswa D3 Teknik Komputer di Politeknik Negeri Jember yang berfokus pada Full Stack Web Development, Internet of Things, dan Artificial Intelligence.',
    'hero.btn_projects': 'Lihat Proyek',
    'hero.btn_contact': 'Hubungi Saya',
    'hero.status_label': 'Posisi Saat Ini',
    'hero.status_title': 'Artificial Intelligence Intern',
    'hero.status_desc': 'Otorita Ibu Kota Nusantara · Deputi Transformasi Hijau dan Digital · Direktorat Kecerdasan Buatan',

    // Profile Section
    'profile.kicker': '01 / Profil',
    'profile.stat_edu_cat': 'PENDIDIKAN',
    'profile.stat_edu_val': 'Polije',
    'profile.stat_edu_sub': 'D3 Teknik Komputer',
    'profile.stat_edu_tag1': 'Jember, ID',
    'profile.stat_edu_tag2': 'Teknik Komputer',
    'profile.stat_edu_desc': 'Fokus rekayasa sistem komputer, embedded IoT, jaringan, serta arsitektur backend di Politeknik Negeri Jember.',

    'profile.stat_exp_cat': 'PENGALAMAN INDUSTRI',
    'profile.stat_exp_val': '2x Magang',
    'profile.stat_exp_sub': 'OIKN & PT UBIG',
    'profile.stat_exp_tag1': 'Otorita IKN',
    'profile.stat_exp_tag2': 'PT UBIG',
    'profile.stat_exp_desc': 'Berkontribusi di Deputi Transformasi Hijau dan Digital (Direktorat Kecerdasan Buatan) Otorita IKN, serta 6 bulan memimpin tim chatbot AI di PT UBIG.',

    'profile.stat_proj_cat': 'KARYA & REKAYASA',
    'profile.stat_proj_val': '10+ Proyek',
    'profile.stat_proj_sub': 'Web, IoT & Edge AI',
    'profile.stat_proj_tag1': 'Production-Ready',
    'profile.stat_proj_tag2': 'Open Source',
    'profile.stat_proj_desc': 'Mengembangkan backend performan tinggi (Go Fiber & Laravel), WebGIS spatial, hingga model edge computer vision & IoT terhubung.',

    'profile.heading': 'Membangun solusi digital dari web, data, perangkat terhubung, sampai AI.',
    'profile.lead': 'Berbasis di Jember, Jawa Timur. Saya memadukan rekayasa backend berkinerja tinggi, arsitektur web modern, dan sistem IoT terhubung untuk menciptakan solusi komputasi yang efisien dan berdampak nyata.',
    'profile.loc': 'Jember, Jawa Timur, Indonesia',
    'profile.edu': 'D3 Teknik Komputer · Politeknik Negeri Jember',
    'profile.intern_history': 'Pernah Internship di Otorita IKN (Direktorat AI) & PT UBIG',
    'profile.cta': 'Lihat Profil LinkedIn',

    // Terminal Component
    'terminal.whoami': 'Aiyub Heriyanto — Software Engineer & Hardware Tinkerer',
    'terminal.about': '<p>Halo! Saya Aiyub, mahasiswa Teknik Komputer asal Jember, Jawa Timur. Sehari-hari saya banyak berkutat di backend engineering (Go & Laravel), merancang arsitektur web app yang scalable, serta ngoprek IoT, mikrokontroler, hingga computer vision untuk edge devices.</p><p>Lebih suka bikin sistem yang arsitekturnya bersih, kencang, dan gampang dirawat daripada yang ribet atau over-engineered. Kalau lagi tidak di depan terminal, biasanya lagi nyolder sirkuit, ngulik robotika, atau nyoba inovasi baru seputar AI.</p>',
    'terminal.status': '<div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Location       :</span> <span class="status-val">Jember, Jawa Timur / Nusantara, ID</span></div><div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Daily Drivers  :</span> <span class="status-val">Go, Laravel, React, Python, C/C++</span></div><div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Current Focus  :</span> <span class="status-val">Building full-stack services & edge AI models</span></div><div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Status         :</span> <span class="status-val">Open for collaboration & engineering opportunities</span></div>',

    // Skills Section
    'skills.kicker': '02 / Skill Focus',
    'skills.heading': 'Tech stack dan keahlian yang teruji di berbagai project nyata.',
    'skills.card1_title': 'Programming Languages',
    'skills.card1_desc': 'Bahasa utama yang saya gunakan untuk backend engineering, web development, komputasi edge, dan hardware embedded.',
    'skills.card2_title': 'Frameworks & Web Ecosystem',
    'skills.card2_desc': 'Framework dan library modern untuk membangun aplikasi web performan tinggi, scalable, aman, dan UI responsif.',
    'skills.card3_title': 'AI, Edge Vision & IoT',
    'skills.card3_desc': 'Teknologi computer vision, NLP, dan protokol komunikasi IoT yang diimplementasikan pada perangkat edge dan server.',
    'skills.card4_title': 'Databases, Cloud & DevOps',
    'skills.card4_desc': 'Database relasional & NoSQL, kontainerisasi, sistem operasi Linux, serta version control untuk deployment andal.',

    // Experience Section
    'exp.kicker': '03 / Pengalaman',
    'exp.heading': 'Perjalanan profesional yang membentuk perspektif saya.',
    'exp.ubig_time': 'Dec 2022 – May 2023 · 6 bulan',
    'exp.ubig_role': 'Student Intern',
    'exp.ubig_sub': 'Apprenticeship / Magang',
    'exp.ubig_location': '📍 Ruko Modern Kav A16-A17, Malang, Jawa Timur · On-site',
    'exp.ubig_desc': 'Menjadi Team Leader untuk team chatbot QuraniBot berbasis Rasa Framework dan berkontribusi dalam tim scraping marketplace menggunakan C# dan Nobox.',
    'exp.ubig_btn': 'Lihat Dokumentasi Magang (5 Foto)',

    'exp.ikn_time': 'Aug 2026 – Dec 2026 · 5 bulan',
    'exp.ikn_badge': 'Aktif',
    'exp.ikn_role': 'Artificial Intelligence Intern',
    'exp.ikn_sub': 'Deputi Bidang Transformasi Hijau dan Digital · Direktorat Kecerdasan Buatan',
    'exp.ikn_location': '📍 Penajam Paser Utara, Kalimantan Timur · On-site',
    'exp.ikn_desc': 'Mengembangkan pemahaman tentang penerapan teknologi, software, dan solusi digital di lingkungan transformasi hijau dan digital pada ibu kota baru Indonesia.',
    'exp.ikn_btn': 'Lihat Dokumentasi Kegiatan (10 Foto)',

    // Projects Section
    'proj.kicker': '04 / Proyek',
    'proj.heading': 'Proyek dan pengalaman yang membentuk cara saya bekerja.',
    'proj.simaset_title': 'Sistem Inventaris Manajemen Aset Tingkat Pemerintah Daerah (Pemda)',
    'proj.simaset_desc': 'Sistem Inventaris Aset Daerah berbasis Laravel untuk mengelola data barang, stok, peminjaman, pengembalian, serta laporan operasional inventaris di lingkungan pemerintah daerah.',
    'proj.isyaratku_title': 'Machine Learning Pendeteksi Hand Gesture Berbasis IoT',
    'proj.isyaratku_desc': 'IsyaratKu-Edge adalah sistem pengenalan dan penerjemahan gestur bahasa isyarat secara real-time berbasis Machine Learning untuk perangkat edge. Sistem ini menggabungkan YOLOv8, MediaPipe, 1D-CNN, dan LSTM untuk mendeteksi tangan, mengekstraksi landmark, mengenali pola gestur secara spasial dan temporal, kemudian menerjemahkannya.',
    'proj.wismon_title': 'Windows System Monitoring',
    'proj.wismon_desc': 'Project monitoring windows yang lebih dari sekedar Task Manager lakukan. Melakukan tindakan pencegahan pada setiap anomali events yang terjadi pada system windows dan bahkan melakukan traffic network pada OS Windows. Ditemani dengan chatbot bernama Dahoo yang dapat membantu user dalam menangani permasalahan pada sistem.',
    'proj.fivegate_title': 'Sistem Akses Pintu Berbasis RFID dan Face Capture',
    'proj.fivegate_desc': 'FiveGate Project merupakan platform sistem akses pintu berbasis RFID dan Face Capture yang mengintegrasikan teknologi RFID, pengambilan gambar wajah, kamera, dan sistem manajemen berbasis web. Sistem ini dirancang untuk mengelola proses autentikasi pengguna melalui RFID, pengambilan data wajah untuk verifikasi, mengendalikan akses pintu secara otomatis, memantau aktivitas perangkat secara real-time, serta menyimpan riwayat akses untuk kebutuhan monitoring dan audit keamanan.',
    'proj.patemon_title': 'Aplikasi Kasir Pemandian Patemon Jember',
    'proj.patemon_desc': 'Project yang dibuat pada bulan Mei 2023 tentang Aplikasi Web Kasir dan Company Profile Pemandian Patemon Jember. Dikembangkan lagi pada September 2026 ke versi 2.0.0 menggunakan arsitektur yang masih sama yaitu PHP Native namun dengan peningkatan Role Based Access Control, Don\'t Repeat Yourself dengan mengambil referensi standart system dari project SIM-ASET.',

    // Certificates Section
    'cert.kicker': '05 / Sertifikat',
    'cert.heading': 'Sertifikat dan Lisensi saya.',

    // Contact Section
    'contact.kicker': '06 / Kontak',
    'contact.heading': 'Mari terhubung untuk belajar, berkolaborasi, atau membangun solusi digital berikutnya.',
    'contact.sub': 'Saya terbuka untuk peluang baru, proyek kolaborasi, atau sekadar berbagi ide.',
    'contact.li_label': 'Lihat langsung di LinkedIn saya:',
    'contact.li_note': 'Data Experience, Education, Sertifikat, dan Projects selalu up-to-date mengikuti profil LinkedIn.',
    'contact.connect_btn': 'Hubungi di LinkedIn',

    // Modals & UI
    'modal.ubig_title': 'Dokumentasi Magang — PT. Universal Big Data',
    'modal.ubig_sub': '5 Foto Dokumentasi Tim & Pengembangan di Malang',
    'modal.ikn_title': 'Dokumentasi Kegiatan — Otorita IKN',
    'modal.ikn_sub': '10 Foto Dokumentasi di Lingkungan Otorita Ibu Kota Nusantara',
    'fab.top_title': 'Kembali ke atas',
    'fab.wa_title': 'Chat via WhatsApp',
    'footer.copyright': '© 2026 Aiyub Heriyanto'
  },

  en: {
    // Navigation
    'nav.profile': 'Profile',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.contact': 'Contact',
    'nav.connect': 'Connect with me',

    // Hero Section
    'hero.eyebrow': 'Computer Engineering Student',
    'hero.title_lines': '["IoT Engineering","&amp; Full Stack","Web Dev."]',
    'hero.title_aria': 'IoT Engineering &amp; Full Stack Web Dev.',
    'hero.desc': 'I am Aiyub Heriyanto, a Computer Engineering student at Politeknik Negeri Jember specializing in Full Stack Web Development, Internet of Things, and Artificial Intelligence.',
    'hero.btn_projects': 'View Projects',
    'hero.btn_contact': 'Contact Me',
    'hero.status_label': 'Current Position',
    'hero.status_title': 'Artificial Intelligence Intern',
    'hero.status_desc': 'Otorita Ibu Kota Nusantara · Deputy for Green and Digital Transformation · Directorate of Artificial Intelligence',

    // Profile Section
    'profile.kicker': '01 / Profile',
    'profile.stat_edu_cat': 'EDUCATION',
    'profile.stat_edu_val': 'Polije',
    'profile.stat_edu_sub': 'Computer Engineering Diploma',
    'profile.stat_edu_tag1': 'Jember, ID',
    'profile.stat_edu_tag2': 'Computer Engineering',
    'profile.stat_edu_desc': 'Focused on computer systems engineering, embedded IoT, networking, and backend architecture at Politeknik Negeri Jember.',

    'profile.stat_exp_cat': 'INDUSTRY EXPERIENCE',
    'profile.stat_exp_val': '2x Internships',
    'profile.stat_exp_sub': 'OIKN & PT UBIG',
    'profile.stat_exp_tag1': 'Otorita IKN',
    'profile.stat_exp_tag2': 'PT UBIG',
    'profile.stat_exp_desc': 'Contributed to the Deputy for Green and Digital Transformation (Directorate of Artificial Intelligence) at Otorita IKN, and 6 months leading the AI chatbot team at PT UBIG.',

    'profile.stat_proj_cat': 'PROJECTS & RESEARCH',
    'profile.stat_proj_val': '10+ Projects',
    'profile.stat_proj_sub': 'Web, IoT & Edge AI',
    'profile.stat_proj_tag1': 'Production-Ready',
    'profile.stat_proj_tag2': 'Open Source',
    'profile.stat_proj_desc': 'Engineered high-performance backends (Go Fiber & Laravel), spatial WebGIS systems, and edge computer vision with IoT integrations.',

    'profile.heading': 'Building digital solutions across web, data, connected hardware, to AI.',
    'profile.lead': 'Based in Jember, East Java. I combine high-performance backend engineering, modern web architectures, and connected IoT systems to engineer efficient, high-impact solutions.',
    'profile.loc': 'Jember, East Java, Indonesia',
    'profile.edu': 'Computer Engineering Diploma · Politeknik Negeri Jember',
    'profile.intern_history': 'Prior Industry Internships at Otorita IKN (Directorate of AI) & PT UBIG',
    'profile.cta': 'View LinkedIn Profile',

    // Terminal Component
    'terminal.whoami': 'Aiyub Heriyanto — Software Engineer & Hardware Tinkerer',
    'terminal.about': '<p>Hi! I am Aiyub, a Computer Engineering student from Jember, East Java, Indonesia. Most of my days are spent in backend engineering (Go & Laravel), architecting scalable web applications, and tinkering with IoT hardware, microcontrollers, and edge computer vision.</p><p>I value clean, resilient, and maintainable systems over unnecessary complexity. Outside the terminal, you will usually find me soldering circuits, exploring robotics, or experimenting with the latest in AI.</p>',
    'terminal.status': '<div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Location       :</span> <span class="status-val">Jember, East Java / Nusantara, ID</span></div><div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Daily Drivers  :</span> <span class="status-val">Go, Laravel, React, Python, C/C++</span></div><div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Current Focus  :</span> <span class="status-val">Building full-stack services & edge AI models</span></div><div class="status-line"><span class="status-tag">[OK]</span> <span class="status-key">Status         :</span> <span class="status-val">Open for collaboration & engineering opportunities</span></div>',

    // Skills Section
    'skills.kicker': '02 / Skill Focus',
    'skills.heading': 'Battle-tested tech stack and engineering skills across real projects.',
    'skills.card1_title': 'Programming Languages',
    'skills.card1_desc': 'Core languages I leverage for robust backend engineering, web development, edge computing, and embedded hardware.',
    'skills.card2_title': 'Frameworks & Web Ecosystem',
    'skills.card2_desc': 'Modern frameworks and libraries for building high-performance, scalable, secure web apps with responsive UI.',
    'skills.card3_title': 'AI, Edge Vision & IoT',
    'skills.card3_desc': 'Computer vision, conversational NLP, and IoT telemetry protocols implemented on edge microcontrollers and cloud services.',
    'skills.card4_title': 'Databases, Cloud & DevOps',
    'skills.card4_desc': 'Relational & NoSQL databases, containerization, Linux environments, and Git version control for resilient deployments.',

    // Experience Section
    'exp.kicker': '03 / Experience',
    'exp.heading': 'Professional milestones shaping my perspective.',
    'exp.ubig_time': 'Dec 2022 – May 2023 · 6 months',
    'exp.ubig_role': 'Student Intern',
    'exp.ubig_sub': 'Apprenticeship',
    'exp.ubig_location': '📍 Ruko Modern Kav A16-A17, Malang, East Java · On-site',
    'exp.ubig_desc': 'Served as Team Leader for the QuraniBot chatbot team using Rasa Framework and contributed to the marketplace scraping team with C# and Nobox.',
    'exp.ubig_btn': 'View Internship Gallery (5 Photos)',

    'exp.ikn_time': 'Aug 2026 – Dec 2026 · 5 months',
    'exp.ikn_badge': 'Active',
    'exp.ikn_role': 'Artificial Intelligence Intern',
    'exp.ikn_sub': 'Deputy for Green & Digital Transformation · Directorate of Artificial Intelligence',
    'exp.ikn_location': '📍 Penajam Paser Utara, East Kalimantan · On-site',
    'exp.ikn_desc': 'Developing hands-on insights into cutting-edge technology, enterprise software, and smart digital solutions within Indonesia\'s new capital.',
    'exp.ikn_btn': 'View Activity Gallery (10 Photos)',

    // Projects Section
    'proj.kicker': '04 / Projects',
    'proj.heading': 'Projects and experiences that define how I engineer.',
    'proj.simaset_title': 'Regional Government Asset Management & Inventory System',
    'proj.simaset_desc': 'A comprehensive Laravel-based regional asset inventory platform to manage item registries, stock counts, borrowing workflows, and operational audit reports for local government entities.',
    'proj.isyaratku_title': 'IoT-Based Machine Learning Hand Gesture Recognition',
    'proj.isyaratku_desc': 'IsyaratKu-Edge is a real-time machine learning sign language gesture recognition & translation system for edge devices. Combines YOLOv8, MediaPipe, 1D-CNN, and LSTM to detect hands, extract spatial-temporal landmark patterns, and perform immediate translation.',
    'proj.wismon_title': 'Windows System Monitoring',
    'proj.wismon_desc': 'An advanced Windows monitoring system beyond standard Task Manager. Proactively detects and mitigates system anomaly events, monitors OS network traffic, and features "Dahoo"—an integrated chatbot assistant to troubleshoot system issues.',
    'proj.fivegate_title': 'RFID & Face Capture Door Access Security System',
    'proj.fivegate_desc': 'FiveGate Project is an access control platform combining RFID and facial capture verification with an integrated web management console. Automatically controls doors, tracks device connectivity in real-time, and stores access logs for security audits.',
    'proj.patemon_title': 'Patemon Baths Point of Sale & Company Profile',
    'proj.patemon_desc': 'Originally created in May 2023 for Patemon Baths POS & Company Profile. Upgraded in September 2026 to v2.0.0 with PHP Native, featuring robust Role-Based Access Control (RBAC), DRY modular architecture, and standards referenced from the SIM-ASET project.',

    // Certificates Section
    'cert.kicker': '05 / Certificates',
    'cert.heading': 'My Certificates and Licenses.',

    // Contact Section
    'contact.kicker': '06 / Contact',
    'contact.heading': 'Let\'s connect to learn, collaborate, or engineer the next digital solution.',
    'contact.sub': 'I am open to new opportunities, collaborative initiatives, or exchanging tech perspectives.',
    'contact.li_label': 'Explore directly on my LinkedIn:',
    'contact.li_note': 'Experience, Education, License, and Project records are continuously updated on LinkedIn.',
    'contact.connect_btn': 'Connect on LinkedIn',

    // Modals & UI
    'modal.ubig_title': 'Internship Documentation — PT. Universal Big Data',
    'modal.ubig_sub': '5 Team & Development Documentation Photos in Malang',
    'modal.ikn_title': 'Activity Documentation — Nusantara Capital Authority',
    'modal.ikn_sub': '10 Documentation Photos at Nusantara Capital City',
    'fab.top_title': 'Back to top',
    'fab.wa_title': 'Chat via WhatsApp',
    'footer.copyright': '© 2026 Aiyub Heriyanto'
  }
};

/**
 * Certificate slides translations
 */
const certTranslations = {
  id: [
    {
      title: 'E-Certificate Workshop Laravel Intermediate',
      desc: 'Berhasil menyelesaikan Workshop Laravel Intermediate yang diselenggarakan Dunia Coding dengan membuat Aplikasi Toko menggunakan Laravel dalam 2 Hari.'
    },
    {
      title: 'E-Certificate Online Shop with Laravel Workshop',
      desc: 'Berhasil menyelesaikan Workshop Online Shop with Laravel yang diselenggarakan Dunia Coding dengan membuat Aplikasi Toko berbasis website dengan Laravel.'
    },
    {
      title: 'IMCE 2.0 Project Favorit Prodi Teknik Komputer Angkatan 2024 Politeknik Negeri Jember',
      desc: 'Mendapatkan penghargaan sebagai Project Favorit di event IMCE 2.0 yang diselenggarakan oleh Politeknik Negeri Jember dengan membuat project berjudul FiveSen: Project Absensi Berbasis IoT.'
    },
    {
      title: 'Sertifikat Kepengurusan UKM Robotika',
      desc: 'Sertifikat kepengurusan sebagai Bendahara & Pemateri UKM Robotika Kepungurusan tahun 2024/2025.'
    },
    {
      title: 'Sertifikat Internship di PT. Universal Big Data',
      desc: 'Sertifikat Penghargaan sebagai Siswa Magang di PT. Universal Big Data dari SMK Negeri 6 Jember.'
    },
    {
      title: 'Sertifikat Penghargaan Pemateri',
      desc: 'Sertifikat Penghargaan sebagai Pemateri Ospek Prodi Teknik Komputer Politeknik Negeri Jember Angkatan 2025.'
    },
    {
      title: 'Sertifikat Uji Kompetensi PT. Mascitra',
      desc: 'Sertifikat Uji Kompetensi membuat aplikasi galeri foto berbasis website diselenggarakan oleh PT. Mascitra.'
    },
    {
      title: 'Sertifikat Kursus Pelatihan IBM Bob',
      desc: 'Sertifikat Penghargaan mengikuti Kursus Pelatihan IBM Bob: Understanding of Agentic Work Flow yang disampaikan oleh CTO IBM Indonesia Wisu Suntoyo.'
    },
    {
      title: 'Certificate Of Accomplishment Maju Bareng AI Program',
      desc: 'Sertikfikat Penghargaaan mengikuti Maju Bareng AI Program yang diselenggarakan oleh Hacktiv8 Indonesia dengan judul kursus: AI Productivity and AI API Integration for Developers. Dan berhasil menyelesaikan Final Project sebagai bagian dari program ini.'
    },
    {
      title: 'E-Certificate Kursus Laravel 12 Mastery',
      desc: 'Sertifikat Penghargaan mengikuti Kursus Laravel 12 Mastery yang diselenggarakan Dunia Coding dengan membuat Smart Blog Apps with AI Integration.'
    }
  ],
  en: [
    {
      title: 'E-Certificate Intermediate Laravel Workshop',
      desc: 'Successfully completed Intermediate Laravel Workshop by Dunia Coding by building a Store Application with Laravel in 2 days.'
    },
    {
      title: 'E-Certificate Online Shop with Laravel Workshop',
      desc: 'Successfully completed Online Shop with Laravel Workshop by Dunia Coding by developing a web-based Store App.'
    },
    {
      title: 'IMCE 2.0 Favorite Project - Computer Engineering 2024 Politeknik Negeri Jember',
      desc: 'Awarded as Favorite Project at the IMCE 2.0 event held by Politeknik Negeri Jember with "FiveSen: IoT Attendance Project".'
    },
    {
      title: 'Robotics Club Management Certificate',
      desc: 'Certificate of stewardship as Treasurer & Instructor in the Robotics Student Club for the 2024/2025 tenure.'
    },
    {
      title: 'Internship Certificate at PT. Universal Big Data',
      desc: 'Appreciation Certificate as an Intern at PT. Universal Big Data from SMK Negeri 6 Jember.'
    },
    {
      title: 'Instructor Appreciation Certificate',
      desc: 'Certificate of Appreciation as Guest Speaker & Instructor for Computer Engineering Orientation 2025 at Politeknik Negeri Jember.'
    },
    {
      title: 'Competency Certification PT. Mascitra',
      desc: 'Vocational Competency Certificate for developing a web-based photo gallery application certified by PT. Mascitra.'
    },
    {
      title: 'IBM Bob Training Course Certificate',
      desc: 'Award Certificate for completing IBM Bob: Understanding of Agentic Work Flow delivered by CTO of IBM Indonesia Wisu Suntoyo.'
    },
    {
      title: 'Certificate Of Accomplishment Maju Bareng AI Program',
      desc: 'Certificate of Accomplishment from Maju Bareng AI Program organized by Hacktiv8 Indonesia: AI Productivity & AI API Integration for Developers, completing the Final Project.'
    },
    {
      title: 'E-Certificate Laravel 12 Mastery Course',
      desc: 'Certificate of Accomplishment for Laravel 12 Mastery Course by Dunia Coding by building Smart Blog Apps with AI Integration.'
    }
  ]
};

// Global state
window.currentLang = 'id';
window.translations = translations;
window.certTranslations = certTranslations;
window.setLanguage = setLanguage;

/**
 * Detect location: If accessed from abroad, default to 'en', else 'id'
 */
function detectVisitorLanguage() {
  // 1. Check user manual choice in localStorage first
  const savedLang = localStorage.getItem('aiyub_lang');
  if (savedLang && (savedLang === 'id' || savedLang === 'en')) {
    return savedLang;
  }

  // 2. Client-side Timezone check (instant, no network latency)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    const indonesiaTimezones = ['Asia/Jakarta', 'Asia/Pontianak', 'Asia/Makassar', 'Asia/Jayapura'];
    const isIndonesianTZ = indonesiaTimezones.some(it => tz.toLowerCase() === it.toLowerCase()) || tz.toLowerCase().includes('jakarta');
    
    // Check browser navigator language
    const navLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    const isIndoLang = navLang.startsWith('id');

    // If neither Indonesian timezone nor Indonesian browser language -> abroad visitor!
    if (!isIndonesianTZ && !isIndoLang) {
      return 'en';
    }
  } catch (e) {
    // fallback
  }

  return 'id';
}

/**
 * Non-blocking Geo-IP verification (Tier 3)
 */
function verifyGeoIP() {
  if (localStorage.getItem('aiyub_lang')) return; // user already chose manually

  // Quick non-blocking fetch to check country code
  fetch('https://api.country.is/', { cache: 'no-store' })
    .then(res => res.json())
    .then(data => {
      if (data && data.country && data.country !== 'ID') {
        if (!localStorage.getItem('aiyub_lang')) {
          setLanguage('en', false); // Switch to English for foreign visitors
        }
      }
    })
    .catch(() => {
      // Secondary fallback endpoint
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data && data.country_code && data.country_code !== 'ID') {
            if (!localStorage.getItem('aiyub_lang')) {
              setLanguage('en', false);
            }
          }
        })
        .catch(() => {});
    });
}

/**
 * Update DOM elements with translation keys
 */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.id;

  // 1. Elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // 2. Elements with data-i18n-attr (e.g. data-i18n-attr="aria-label:nav.profile")
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const attrConfig = el.getAttribute('data-i18n-attr');
    const pairs = attrConfig.split(';');
    pairs.forEach(pair => {
      const [attr, key] = pair.split(':');
      if (attr && key && dict[key]) {
        el.setAttribute(attr.trim(), dict[key]);
      }
    });
  });

  // 3. Update Hero Title lines & desc attributes for typewriter
  const heroTitle = document.getElementById('hero-title');
  const heroDesc  = document.getElementById('hero-desc');
  if (heroTitle && dict['hero.title_lines']) {
    heroTitle.dataset.lines = dict['hero.title_lines'];
    heroTitle.setAttribute('aria-label', dict['hero.title_aria'] || '');
    try {
      const lines = JSON.parse(dict['hero.title_lines'] || '[]');
      heroTitle.innerHTML = lines.map(l => l.replace(/&amp;/g, '&')).join('<br>') + '<span class="typing-cursor cursor-done" aria-hidden="true"></span>';
    } catch (e) {}
  }
  if (heroDesc && dict['hero.desc']) {
    heroDesc.dataset.text = dict['hero.desc'];
    heroDesc.innerHTML = dict['hero.desc'] + '<span class="typing-cursor cursor-done" aria-hidden="true"></span>';
  }

  // 4. Update Panorama Swiper caption if present
  const certList = certTranslations[lang] || certTranslations.id;
  const swiperSlides = document.querySelectorAll('.pano-slide');
  swiperSlides.forEach((slide, idx) => {
    if (certList[idx]) {
      slide.dataset.title = certList[idx].title;
      slide.dataset.desc  = certList[idx].desc;
    }
  });

  const panoTitle = document.getElementById('pano-caption-title');
  const panoDesc  = document.getElementById('pano-caption-desc');
  const activeSlide = document.querySelector('.swiper-slide-active');
  if (activeSlide && panoTitle && panoDesc) {
    panoTitle.textContent = activeSlide.dataset.title || panoTitle.textContent;
    panoDesc.textContent  = activeSlide.dataset.desc  || panoDesc.textContent;
  }

  // 5. Update language switcher button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.dataset.lang;
    btn.classList.toggle('active', btnLang === lang);
    btn.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
  });

  // 6. Update document lang attribute
  document.documentElement.lang = lang;
}

/**
 * Set active language
 */
function setLanguage(lang, persist = true) {
  if (lang !== 'id' && lang !== 'en') lang = 'id';
  window.currentLang = lang;

  if (persist) {
    localStorage.setItem('aiyub_lang', lang);
  }

  applyTranslations(lang);

  // Dispatch custom event for any listeners (e.g., gallery or typewriter reset)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Initialize language system
 */
function initLanguage() {
  const initialLang = detectVisitorLanguage();
  setLanguage(initialLang, false);

  // Hook language switcher button clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.dataset.lang;
      setLanguage(targetLang, true);
    });
  });

  // Verify non-blocking Geo-IP in background
  verifyGeoIP();
}

// Auto init on DOMContentLoaded or immediately if DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}
