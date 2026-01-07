// --- 1. Definisi Elemen DOM (Paling Atas) ---
const userDataForm = document.getElementById("userDataForm");
const personalDataForm = document.getElementById("personalDataForm");
const testQuestions = document.getElementById("testQuestions");
const testResults = document.getElementById("testResults");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const currentQuestionEl = document.getElementById("currentQuestion");
const totalQuestionsEl = document.getElementById("totalQuestions");
const progressFill = document.getElementById("progressFill");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const saveResultsBtn = document.getElementById("saveResultsBtn");
const consultResultBtn = document.getElementById("consultResultBtn");

// Elemen Hasil
const interestCategoryMBTI = document.getElementById("interestCategoryMBTI");
const learningStyleMBTI = document.getElementById("learningStyleMBTI");
const personalityTypeMBTI = document.getElementById("personalityTypeMBTI");
const interestCategoryDISC = document.getElementById("interestCategoryDISC");
const learningStyleDISC = document.getElementById("learningStyleDISC");
const personalityTypeDISC = document.getElementById("personalityTypeDISC");
const personalityDescription = document.getElementById("personalityDescription");
const strengthsList = document.getElementById("strengthsList");
const workEnvironment = document.getElementById("workEnvironment");
const recommendationCards = document.getElementById("recommendationCards");
const careerList = document.getElementById("careerList");

// Data untuk tes minat bakat
const testData = {
  questions: [
    // --- MBTI Section (1-20) ---
    {
      id: 1,
      text: "Saya lebih nyaman dengan kegiatan yang sudah direncanakan.",
      options: [
        { id: 1, text: "Ya", value: "judging" },
        { id: 2, text: "Tidak", value: "perceiving" },
      ],
    },
    {
      id: 2,
      text: "Saya mendapat energi dari waktu sendiri.",
      options: [
        { id: 1, text: "Ya", value: "introvert" },
        { id: 2, text: "Tidak", value: "extrovert" },
      ],
    },
    {
      id: 3,
      text: "Saya fokus pada fakta.",
      options: [
        { id: 1, text: "Ya", value: "sensing" },
        { id: 2, text: "Tidak", value: "intuitive" },
      ],
    },
    {
      id: 4,
      text: "Saya membuat keputusan berdasarkan logika.",
      options: [
        { id: 1, text: "Ya", value: "thinking" },
        { id: 2, text: "Tidak", value: "feeling" },
      ],
    },
    {
      id: 5,
      text: "Saya suka rutinitas.",
      options: [
        { id: 1, text: "Ya", value: "judging" },
        { id: 2, text: "Tidak", value: "perceiving" },
      ],
    },
    {
      id: 6,
      text: "Saya pendiam di situasi baru.",
      options: [
        { id: 1, text: "Ya", value: "introvert" },
        { id: 2, text: "Tidak", value: "extrovert" },
      ],
    },
    {
      id: 7,
      text: "Saya detail-oriented.",
      options: [
        { id: 1, text: "Ya", value: "sensing" },
        { id: 2, text: "Tidak", value: "intuitive" },
      ],
    },
    {
      id: 8,
      text: "Saya objektif dalam menilai sesuatu.",
      options: [
        { id: 1, text: "Ya", value: "thinking" },
        { id: 2, text: "Tidak", value: "feeling" },
      ],
    },
    {
      id: 9,
      text: "Saya suka struktur.",
      options: [
        { id: 1, text: "Ya", value: "judging" },
        { id: 2, text: "Tidak", value: "perceiving" },
      ],
    },
    {
      id: 10,
      text: "Saya menjaga jarak dengan orang baru.",
      options: [
        { id: 1, text: "Ya", value: "introvert" },
        { id: 2, text: "Tidak", value: "extrovert" },
      ],
    },
    {
      id: 11,
      text: "Saya bekerja secara teratur.",
      options: [
        { id: 1, text: "Ya", value: "sensing" },
        { id: 2, text: "Tidak", value: "intuitive" },
      ],
    },
    {
      id: 12,
      text: "Saya menyukai hal yang stabil.",
      options: [
        { id: 1, text: "Ya", value: "judging" },
        { id: 2, text: "Tidak", value: "perceiving" },
      ],
    },
    {
      id: 13,
      text: "Saya berpikir sebelum bertindak.",
      options: [
        { id: 1, text: "Ya", value: "introvert" },
        { id: 2, text: "Tidak", value: "extrovert" },
      ],
    },
    {
      id: 14,
      text: "Saya teliti dalam pekerjaan.",
      options: [
        { id: 1, text: "Ya", value: "sensing" },
        { id: 2, text: "Tidak", value: "intuitive" },
      ],
    },
    {
      id: 15,
      text: "Saya menghargai logika daripada perasaan.",
      options: [
        { id: 1, text: "Ya", value: "thinking" },
        { id: 2, text: "Tidak", value: "feeling" },
      ],
    },
    {
      id: 16,
      text: "Saya suka bekerja sendiri.",
      options: [
        { id: 1, text: "Ya", value: "introvert" },
        { id: 2, text: "Tidak", value: "extrovert" },
      ],
    },
    {
      id: 17,
      text: "Saya lebih percaya bukti konkret.",
      options: [
        { id: 1, text: "Ya", value: "sensing" },
        { id: 2, text: "Tidak", value: "intuitive" },
      ],
    },
    {
      id: 18,
      text: "Saya menyelesaikan tugas lebih cepat jika ada aturan jelas.",
      options: [
        { id: 1, text: "Ya", value: "judging" },
        { id: 2, text: "Tidak", value: "perceiving" },
      ],
    },
    {
      id: 19,
      text: "Saya berhati-hati dalam membuat keputusan.",
      options: [
        { id: 1, text: "Ya", value: "introvert" },
        { id: 2, text: "Tidak", value: "extrovert" },
      ],
    },
    {
      id: 20,
      text: "Saya butuh ketenangan saat bekerja.",
      options: [
        { id: 1, text: "Ya", value: "introvert" },
        { id: 2, text: "Tidak", value: "extrovert" },
      ],
    },

    // --- DISC Section (21-36) - ID Dilanjutkan ---
    {
      id: 21,
      text: "Pilih satu sifat yang paling menggambarkan diri Anda:",
      options: [
        { id: 1, text: "Tegas", value: "dominance" },
        { id: 2, text: "Ramah", value: "influence" },
        { id: 3, text: "Stabil", value: "steadiness" },
        { id: 4, text: "Teliti", value: "compliance" },
      ],
    },
    {
      id: 22,
      text: "Pilih satu sifat yang paling menggambarkan diri Anda:",
      options: [
        { id: 1, text: "Cepat mengambil keputusan", value: "dominance" },
        { id: 2, text: "Suka berbicara", value: "influence" },
        { id: 3, text: "Sabar", value: "steadiness" },
        { id: 4, text: "Perfeksionis", value: "compliance" },
      ],
    },
    {
      id: 23,
      text: "Pilih satu sifat yang paling menggambarkan diri Anda:",
      options: [
        { id: 1, text: "Kompetitif", value: "dominance" },
        { id: 2, text: "Persuasif", value: "influence" },
        { id: 3, text: "Konsisten", value: "steadiness" },
        { id: 4, text: "Analitis", value: "compliance" },
      ],
    },
    {
      id: 24,
      text: "Pilih satu sifat yang paling menggambarkan diri Anda:",
      options: [
        { id: 1, text: "Berani mengambil risiko", value: "dominance" },
        { id: 2, text: "Optimis", value: "influence" },
        { id: 3, text: "Tenang", value: "steadiness" },
        { id: 4, text: "Presisi tinggi", value: "compliance" },
      ],
    },
    {
      id: 25,
      text: "Pilih satu sifat yang paling menggambarkan diri Anda:",
      options: [
        { id: 1, text: "Dominan", value: "dominance" },
        { id: 2, text: "Energik", value: "influence" },
        { id: 3, text: "Setia", value: "steadiness" },
        { id: 4, text: "Sistematis", value: "compliance" },
      ],
    },
    {
      id: 26,
      text: "Pilih fokus utama Anda:",
      options: [
        { id: 1, text: "Fokus pada hasil", value: "dominance" },
        { id: 2, text: "Fokus pada hubungan", value: "influence" },
        { id: 3, text: "Fokus pada kestabilan", value: "steadiness" },
        { id: 4, text: "Fokus pada ketelitian", value: "compliance" },
      ],
    },
    {
      id: 27,
      text: "Apa yang paling Anda sukai?",
      options: [
        { id: 1, text: "Menyukai tantangan", value: "dominance" },
        { id: 2, text: "Menyukai interaksi", value: "influence" },
        { id: 3, text: "Menyukai rutinitas", value: "steadiness" },
        { id: 4, text: "Menyukai keakuratan", value: "compliance" },
      ],
    },
    {
      id: 28,
      text: "Gaya komunikasi Anda cenderung:",
      options: [
        { id: 1, text: "Langsung", value: "dominance" },
        { id: 2, text: "Ekspresif", value: "influence" },
        { id: 3, text: "Mendukung", value: "steadiness" },
        { id: 4, text: "Hati-hati", value: "compliance" },
      ],
    },
    {
      id: 29,
      text: "Pilih sifat yang paling menggambarkan diri Anda:",
      options: [
        { id: 1, text: "Teguh pendirian", value: "dominance" },
        { id: 2, text: "Antusias", value: "influence" },
        { id: 3, text: "Penuh pertimbangan", value: "steadiness" },
        { id: 4, text: "Teratur", value: "compliance" },
      ],
    },
    {
      id: 30,
      text: "Bagaimana Anda terkesan di mata orang lain?",
      options: [
        { id: 1, text: "Terkesan kuat", value: "dominance" },
        { id: 2, text: "Terkesan ramah", value: "influence" },
        { id: 3, text: "Terkesan pendiam", value: "steadiness" },
        { id: 4, text: "Terkesan kaku", value: "compliance" },
      ],
    },
    {
      id: 31,
      text: "Peran Anda dalam tim cenderung:",
      options: [
        { id: 1, text: "Mengarahkan tim", value: "dominance" },
        { id: 2, text: "Membangun suasana", value: "influence" },
        { id: 3, text: "Menjaga keharmonisan", value: "steadiness" },
        { id: 4, text: "Mengatur detail", value: "compliance" },
      ],
    },
    {
      id: 32,
      text: "Tujuan utama Anda adalah:",
      options: [
        { id: 1, text: "Hasil yang dicapai", value: "dominance" },
        { id: 2, text: "Relasi yang baik", value: "influence" },
        { id: 3, text: "Stabilitas situasi", value: "steadiness" },
        { id: 4, text: "Akurasi pekerjaan", value: "compliance" },
      ],
    },
    {
      id: 33,
      text: "Gaya berbicara Anda cenderung:",
      options: [
        { id: 1, text: "Memotong pembicaraan jika perlu", value: "dominance" },
        { id: 2, text: "Berbicara panjang lebar", value: "influence" },
        { id: 3, text: "Lebih suka mendengarkan", value: "steadiness" },
        { id: 4, text: "Berbicara seperlunya", value: "compliance" },
      ],
    },
    {
      id: 34,
      text: "Pilih sifat yang paling menggambarkan diri Anda:",
      options: [
        { id: 1, text: "Tergesa-gesa", value: "dominance" },
        { id: 2, text: "Ceria", value: "influence" },
        { id: 3, text: "Konsisten", value: "steadiness" },
        { id: 4, text: "Teliti", value: "compliance" },
      ],
    },
    {
      id: 35,
      text: "Dalam situasi kelompok, Anda cenderung:",
      options: [
        { id: 1, text: "Mengambil kendali", value: "dominance" },
        { id: 2, text: "Menghibur", value: "influence" },
        { id: 3, text: "Menenangkan", value: "steadiness" },
        { id: 4, text: "Menganalisis", value: "compliance" },
      ],
    },
    {
      id: 36,
      text: "Gaya bekerja Anda cenderung:",
      options: [
        { id: 1, text: "Bekerja cepat", value: "dominance" },
        { id: 2, text: "Bekerja komunikatif", value: "influence" },
        { id: 3, text: "Bekerja stabil", value: "steadiness" },
        { id: 4, text: "Bekerja sistematis", value: "compliance" },
      ],
    },
  ],
  recommendations: {
    // 1. INTJ (Architect)
    intj: {
      categoryMBTI: "INTJ - The Architect",
      learningStyleMBTI: "Analitis & Mandiri",
      personalityTypeMBTI: "Strategis & Visioner",
      description: "Pemikir imajinatif dan strategis, dengan rencana untuk segala hal.",
      majors: [
        { name: "Teknik Informatika", description: "Logika & Algoritma" },
        { name: "Arsitektur", description: "Perencanaan & Desain" },
      ],
      careers: ["Software Engineer", "Arsitek", "Data Scientist", "Strategic Planner"],
    },

    // 2. INTP (Logician)
    intp: {
      categoryMBTI: "INTP - The Logician",
      learningStyleMBTI: "Konseptual & Logis",
      personalityTypeMBTI: "Inovatif & Penasaran",
      description: "Penemu yang inovatif dengan haus akan pengetahuan yang tak tertahankan.",
      majors: [
        { name: "Fisika/Matematika", description: "Analisis Teoretis" },
        { name: "Filsafat", description: "Pemikiran Kritis" },
      ],
      careers: ["Programmer", "Ilmuwan", "Dosen", "Analis Sistem"],
    },

    // 3. ENTJ (Commander)
    entj: {
      categoryMBTI: "ENTJ - The Commander",
      learningStyleMBTI: "Terstruktur & Debat",
      personalityTypeMBTI: "Tegas & Pemimpin",
      description: "Pemimpin yang berani, imajinatif, dan berkemauan keras.",
      majors: [
        { name: "Manajemen Bisnis", description: "Kepemimpinan" },
        { name: "Hukum", description: "Argumentasi & Aturan" },
      ],
      careers: ["CEO/Eksekutif", "Pengacara", "Konsultan Bisnis", "Hakim"],
    },

    // 4. ENTP (Debater)
    entp: {
      categoryMBTI: "ENTP - The Debater",
      learningStyleMBTI: "Diskusi & Eksploratif",
      personalityTypeMBTI: "Cerdas & Penasaran",
      description: "Pemikir yang cerdas dan serius yang gatal akan tantangan intelektual.",
      majors: [
        { name: "Ilmu Politik", description: "Debat & Strategi" },
        { name: "Kewirausahaan", description: "Inovasi Bisnis" },
      ],
      careers: ["Entrepreneur", "Pengacara", "Marketing Director", "Politisi"],
    },

    // 5. INFJ (Advocate)
    infj: {
      categoryMBTI: "INFJ - The Advocate",
      learningStyleMBTI: "Visual & Reflektif",
      personalityTypeMBTI: "Idealis & Mistis",
      description: "Pendiam dan mistis, namun idealis yang sangat menginspirasi dan tak kenal lelah.",
      majors: [
        { name: "Psikologi", description: "Memahami Manusia" },
        { name: "Sastra", description: "Ekspresi Tulisan" },
      ],
      careers: ["Psikolog", "Konselor", "Penulis", "Pekerja Sosial"],
    },

    // 6. INFP (Mediator)
    infp: {
      categoryMBTI: "INFP - The Mediator",
      learningStyleMBTI: "Kreatif & Personal",
      personalityTypeMBTI: "Puitis & Baik Hati",
      description: "Orang yang puitis, baik hati, dan altruistik, selalu ingin membantu tujuan baik.",
      majors: [
        { name: "Desain Grafis", description: "Kreativitas Visual" },
        { name: "Sastra Inggris", description: "Seni Bahasa" },
      ],
      careers: ["Desainer Grafis", "Penulis", "Editor", "Seniman"],
    },

    // 7. ENFJ (Protagonist)
    enfj: {
      categoryMBTI: "ENFJ - The Protagonist",
      learningStyleMBTI: "Sosial & Terorganisir",
      personalityTypeMBTI: "Karismatik & Inspiratif",
      description: "Pemimpin yang karismatik dan inspiratif, mampu memukau pendengarnya.",
      majors: [
        { name: "Hubungan Internasional", description: "Diplomasi" },
        { name: "Ilmu Komunikasi", description: "Public Speaking" },
      ],
      careers: ["HRD", "Motivator", "Diplomat", "Guru"],
    },

    // 8. ENFP (Campaigner)
    enfp: {
      categoryMBTI: "ENFP - The Campaigner",
      learningStyleMBTI: "Interaktif & Spontan",
      personalityTypeMBTI: "Antusias & Kreatif",
      description: "Semangat bebas yang antusias, kreatif, dan mudah bergaul.",
      majors: [
        { name: "Marketing", description: "Promosi & Ide" },
        { name: "Jurnalistik", description: "Investigasi Cerita" },
      ],
      careers: ["Jurnalis", "Content Creator", "Event Planner", "Public Relations"],
    },

    // 9. ISTJ (Logistician)
    istj: {
      categoryMBTI: "ISTJ - The Logistician",
      learningStyleMBTI: "Fakta & Hapalan",
      personalityTypeMBTI: "Praktis & Bertanggung Jawab",
      description: "Individu yang praktis dan mengutamakan fakta, keandalannya tak diragukan.",
      majors: [
        { name: "Akuntansi", description: "Ketelitian Data" },
        { name: "Administrasi Negara", description: "Tata Kelola" },
      ],
      careers: ["Akuntan", "Auditor", "Pegawai Negeri", "Admin Database"],
    },

    // 10. ISFJ (Defender)
    isfj: {
      categoryMBTI: "ISFJ - The Defender",
      learningStyleMBTI: "Step-by-step & Konkret",
      personalityTypeMBTI: "Pelindung & Setia",
      description: "Pelindung yang sangat berdedikasi dan hangat, selalu siap membela orang yang dicintainya.",
      majors: [
        { name: "Keperawatan", description: "Pelayanan Kesehatan" },
        { name: "Pendidikan Guru SD", description: "Mengayomi" },
      ],
      careers: ["Perawat", "Guru", "Administrasi HR", "Pustakawan"],
    },

    // 11. ESTJ (Executive)
    estj: {
      categoryMBTI: "ESTJ - The Executive",
      learningStyleMBTI: "Logis & Terstruktur",
      personalityTypeMBTI: "Administrator Handal",
      description: "Administrator hebat, tak tertandingi dalam mengelola sesuatu atau orang.",
      majors: [
        { name: "Manajemen Operasional", description: "Efisiensi Sistem" },
        { name: "Hukum", description: "Penegakan Aturan" },
      ],
      careers: ["Manajer Proyek", "Polisi/Militer", "Hakim", "Auditor"],
    },

    // 12. ESFJ (Consul)
    esfj: {
      categoryMBTI: "ESFJ - The Consul",
      learningStyleMBTI: "Diskusi & Praktik",
      personalityTypeMBTI: "Peduli & Populer",
      description: "Orang yang sangat peduli, sosial, dan populer, selalu ingin membantu.",
      majors: [
        { name: "Pariwisata", description: "Pelayanan Publik" },
        { name: "Bimbingan Konseling", description: "Membantu Masalah" },
      ],
      careers: ["Pemandu Wisata", "Customer Service", "Guru", "Perawat"],
    },

    // 13. ISTP (Virtuoso)
    istp: {
      categoryMBTI: "ISTP - The Virtuoso",
      learningStyleMBTI: "Kinestetik & Praktik",
      personalityTypeMBTI: "Berani & Terampil",
      description: "Experimenter yang berani dan praktis, menguasai berbagai alat.",
      majors: [
        { name: "Teknik Mesin", description: "Mekanika" },
        { name: "Teknik Sipil", description: "Konstruksi" },
      ],
      careers: ["Mekanik", "Pilot", "Insinyur", "Atlet"],
    },

    // 14. ISFP (Adventurer)
    isfp: {
      categoryMBTI: "ISFP - The Adventurer",
      learningStyleMBTI: "Visual & Artistik",
      personalityTypeMBTI: "Fleksibel & Menawan",
      description: "Seniman yang fleksibel dan menawan, selalu siap menjelajahi hal baru.",
      majors: [
        { name: "Desain Interior", description: "Estetika Ruang" },
        { name: "Seni Rupa", description: "Ekspresi Seni" },
      ],
      careers: ["Desainer", "Seniman", "Fotografer", "Chef"],
    },

    // 15. ESTP (Entrepreneur)
    estp: {
      categoryMBTI: "ESTP - The Entrepreneur",
      learningStyleMBTI: "Learning by Doing",
      personalityTypeMBTI: "Cerdas & Energik",
      description: "Orang yang cerdas, bersemangat, dan sangat tanggap, menikmati hidup di ujung tanduk.",
      majors: [
        { name: "Pemasaran", description: "Negosiasi & Sales" },
        { name: "Olahraga", description: "Aktivitas Fisik" },
      ],
      careers: ["Sales Manager", "Entrepreneur", "Pialang Saham", "Atlet"],
    },

    // 16. ESFP (Entertainer)
    esfp: {
      categoryMBTI: "ESFP - The Entertainer",
      learningStyleMBTI: "Sosial & Praktik",
      personalityTypeMBTI: "Spontan & Bersemangat",
      description: "Orang yang spontan, bersemangat, dan antusias, hidup tidak pernah membosankan di dekat mereka.",
      majors: [
        { name: "Seni Pertunjukan", description: "Tampil di Panggung" },
        { name: "Perhotelan", description: "Hospitality" },
      ],
      careers: ["Aktor/Aktris", "Event Organizer", "Tour Guide", "Penyanyi"],
    },

    // 1. Dominance (D)
    dominance: {
      categoryDISC: "Dominance (D)",
      learningStyleDISC: "Cepat & To the Point",
      personalityTypeDISC: "Tegas & Berorientasi Hasil",
      description: "Anda menyukai tantangan, mengambil kendali, dan fokus pada hasil akhir yang cepat.",
      majors: [{ name: "Manajemen Bisnis", description: "Kepemimpinan Organisasi" }],
      careers: ["Direktur", "Manager", "Pengusaha"],
    },

    // 2. Influence (I)
    influence: {
      categoryDISC: "Influence (I)",
      learningStyleDISC: "Visual & Interaktif",
      personalityTypeDISC: "Optimis & Antusias",
      description: "Anda suka bergaul, persuasif, dan membangun hubungan dengan orang lain.",
      majors: [{ name: "Ilmu Komunikasi", description: "Public Relations" }],
      careers: ["Sales", "Public Relations", "Presenter"],
    },

    // 3. Steadiness (S)
    steadiness: {
      categoryDISC: "Steadiness (S)",
      learningStyleDISC: "Bertahap & Kooperatif",
      personalityTypeDISC: "Tenang & Konsisten",
      description: "Anda pendengar yang baik, sabar, dan menyukai lingkungan yang stabil serta harmonis.",
      majors: [{ name: "Psikologi/Konseling", description: "Membantu Orang Lain" }],
      careers: ["Konselor", "HRD", "Perawat", "Guru"],
    },

    // 4. Compliance (C)
    compliance: {
      categoryDISC: "Compliance (C)",
      learningStyleDISC: "Detail & Analitis",
      personalityTypeDISC: "Teliti & Sistematis",
      description: "Anda menyukai akurasi, bekerja berdasarkan data, dan mengikuti aturan dengan cermat.",
      majors: [{ name: "Akuntansi/Keuangan", description: "Ketelitian Angka" }],
      careers: ["Akuntan", "Programmer", "Analis Data", "Auditor"],
    },
  },
};

// State untuk tes
let testState = {
  currentQuestionIndex: 0,
  answers: [],
  result: null,
};

// Inisialisasi
function init() {
  // Update total pertanyaan di UI
  if (totalQuestionsEl) totalQuestionsEl.textContent = testData.questions.length;

  // Handle Form Submit (Pindah dari Form ke Soal)
  if (personalDataForm) {
    personalDataForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const userData = {
        name: document.getElementById("userName").value,
        email: document.getElementById("userEmail").value,
        school: document.getElementById("userSchool").value,
      };
      console.log("Data Peserta:", userData);

      // Hide Form, Show Questions
      userDataForm.classList.add("hidden");
      testQuestions.classList.remove("hidden");

      // Mulai Load Soal Pertama
      loadQuestion();
    });
  }

  // Event Listeners Tombol
  if (prevBtn) prevBtn.addEventListener("click", prevQuestion);
  if (nextBtn) nextBtn.addEventListener("click", nextQuestion);
  if (finishBtn) finishBtn.addEventListener("click", finishTest);
  if (saveResultsBtn) saveResultsBtn.addEventListener("click", saveResults);
  // Cari baris ini di dalam function init()
  if (consultResultBtn) {
    consultResultBtn.addEventListener("click", () => {
      // Ambil nama user jika ada, kalau tidak pakai default
      const userName = document.getElementById("userName").value || "Saya";

      // Pesan Template
      const message = `Halo Admin, nama saya ${userName}. Saya sudah menyelesaikan Tes Minat Bakat di RightMajor dan ingin konsultasi lebih lanjut mengenai hasilnya.`;

      // Buka WhatsApp
      window.open(`https://wa.me/62895701790702?text=${encodeURIComponent(message)}`, "_blank");
    });
  }
  // --- Tambahkan ini di script.js ---

  // Logic untuk Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  // Jika ada tombol auth (login/register), uncomment baris bawah:
  // const authButtons = document.querySelector('.auth-buttons');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      // Toggle class active
      navLinks.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");

      // Jika ada auth buttons
      // authButtons.classList.toggle('active');

      // Ubah icon dari bars ke times (X)
      const icon = mobileMenuBtn.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Tutup menu saat link diklik (UX yang baik)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenuBtn.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });
}

// Fungsi untuk memulai tes
function startTest() {
  // Reset state tes
  testState = {
    currentQuestionIndex: 0,
    answers: [],
    result: null,
  };

  testResults.classList.add("hidden");
  testQuestions.classList.add("hidden");
  userDataForm.classList.remove("hidden");

  // Tampilkan pertanyaan pertama
  loadQuestion();

  // Scroll ke section tes
  window.scrollTo({
    top: document.getElementById("test").offsetTop - 80,
    behavior: "smooth",
  });
}

// Fungsi untuk memuat pertanyaan
function loadQuestion() {
  const question = testData.questions[testState.currentQuestionIndex];
  questionText.textContent = question.text;
  currentQuestionEl.textContent = testState.currentQuestionIndex + 1;

  // Update Progress Bar
  const pct = ((testState.currentQuestionIndex + 1) / testData.questions.length) * 100;
  progressFill.style.width = `${pct}%`;

  optionsContainer.innerHTML = "";
  const currentAnswer = testState.answers[testState.currentQuestionIndex];

  // Render Pilihan Jawaban
  question.options.forEach((opt) => {
    const div = document.createElement("div");
    div.className = "option";
    // Tandai jika sudah dipilih sebelumnya
    if (currentAnswer === opt.id) div.classList.add("selected");

    div.innerHTML = `<div class="option-number">${opt.id}</div><div class="option-text">${opt.text}</div>`;

    // Event Click
    div.onclick = () => selectOption(opt.id);
    optionsContainer.appendChild(div);
  });

  // Atur tombol 'Sebelumnya'
  prevBtn.disabled = testState.currentQuestionIndex === 0;

  // --- LOGIKA BARU UNTUK DISABLE TOMBOL ---
  // Cek apakah soal ini sudah punya jawaban?
  const hasAnswer = currentAnswer !== undefined;

  // Tampilkan/Sembunyikan tombol Next/Finish
  if (testState.currentQuestionIndex === testData.questions.length - 1) {
    nextBtn.classList.add("hidden");
    finishBtn.classList.remove("hidden");

    // Disable Finish jika belum dijawab
    finishBtn.disabled = !hasAnswer;
  } else {
    nextBtn.classList.remove("hidden");
    finishBtn.classList.add("hidden");

    // Disable Next jika belum dijawab
    nextBtn.disabled = !hasAnswer;
  }
}

function selectOption(id) {
  // Simpan jawaban
  testState.answers[testState.currentQuestionIndex] = id;

  // Render ulang untuk visualisasi 'selected' (warna biru pada opsi)
  loadQuestion();

  // --- LOGIKA BARU ---
  // Karena sudah memilih, aktifkan tombol Next atau Finish
  nextBtn.disabled = false;
  finishBtn.disabled = false;
}

function prevQuestion() {
  if (testState.currentQuestionIndex > 0) {
    testState.currentQuestionIndex--;
    loadQuestion();
  }
}

function nextQuestion() {
  // Cek apakah user sudah menjawab
  if (testState.answers[testState.currentQuestionIndex] === undefined) {
    alert("Silakan pilih salah satu jawaban terlebih dahulu!");
    return; // Stop, jangan pindah halaman
  }

  if (testState.currentQuestionIndex < testData.questions.length - 1) {
    testState.currentQuestionIndex++;
    loadQuestion();
    window.scrollTo({ top: testQuestions.offsetTop - 50, behavior: "smooth" });
  }
}

function calculateResult() {
  console.log("Memulai perhitungan skor...");

  // --- 1. Hitung MBTI (Soal Index 0-19) ---
  const scoresMBTI = { I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  // Mapping nilai jawaban ke kode MBTI
  const mbtiMap = {
    introvert: "I",
    extrovert: "E",
    sensing: "S",
    intuitive: "N",
    thinking: "T",
    feeling: "F",
    judging: "J",
    perceiving: "P",
  };

  let totalIE = 0,
    totalSN = 0,
    totalTF = 0,
    totalJP = 0;

  for (let i = 0; i < 20; i++) {
    const ansId = testState.answers[i];
    // Jika user belum jawab, default ke opsi 1 agar tidak error
    if (!ansId) continue;

    const q = testData.questions[i];
    const opt = q.options.find((o) => o.id === ansId);

    if (opt && mbtiMap[opt.value]) {
      const code = mbtiMap[opt.value];
      scoresMBTI[code]++;
      if (code === "I" || code === "E") totalIE++;
      if (code === "S" || code === "N") totalSN++;
      if (code === "T" || code === "F") totalTF++;
      if (code === "J" || code === "P") totalJP++;
    }
  }

  // Tentukan huruf MBTI
  let mbti = "";
  mbti += scoresMBTI.I >= scoresMBTI.E ? "I" : "E";
  mbti += scoresMBTI.S >= scoresMBTI.N ? "S" : "N";
  mbti += scoresMBTI.T >= scoresMBTI.F ? "T" : "F";
  mbti += scoresMBTI.J >= scoresMBTI.P ? "J" : "P";

  const pctIE = Math.max(scoresMBTI.I, scoresMBTI.E) / (totalIE || 1);
  const pctSN = Math.max(scoresMBTI.S, scoresMBTI.N) / (totalSN || 1);
  const pctTF = Math.max(scoresMBTI.T, scoresMBTI.F) / (totalTF || 1);
  const pctJP = Math.max(scoresMBTI.J, scoresMBTI.P) / (totalJP || 1);

  const mbtiMatchScore = Math.round(((pctIE + pctSN + pctTF + pctJP) / 4) * 100);
  console.log("Hasil MBTI:", mbti, "Match:", mbtiMatchScore + "%");

  // --- 2. Hitung DISC (Soal Index 20-35) ---
  const scoresDISC = { dominance: 0, influence: 0, steadiness: 0, compliance: 0 };
  let totalDISCAnswered = 0;

  for (let i = 20; i < 36; i++) {
    const ansId = testState.answers[i];
    if (!ansId) continue;

    const q = testData.questions[i];
    if (!q) continue;

    const opt = q.options.find((o) => o.id === ansId);
    if (opt) {
      scoresDISC[opt.value]++;
      totalDISCAnswered++;
    }
  }

  // Cari skor tertinggi DISC
  let disc = Object.keys(scoresDISC).reduce((a, b) => (scoresDISC[a] >= scoresDISC[b] ? a : b));

  const discMatchScore = Math.round((scoresDISC[disc] / (totalDISCAnswered || 16)) * 100);

  console.log("Hasil DISC:", disc, "Match:", discMatchScore + "%");

  // --- 3. Tampilkan Data ---
  const mbtiKey = mbti.toLowerCase();
  const recMBTI = testData.recommendations[mbtiKey] || testData.recommendations["intj"];
  const recDISC = testData.recommendations[disc] || testData.recommendations["dominance"];

  if (interestCategoryMBTI) interestCategoryMBTI.textContent = recMBTI.categoryMBTI || mbti;
  if (learningStyleMBTI) learningStyleMBTI.textContent = recMBTI.learningStyleMBTI || "-";
  if (personalityTypeMBTI) personalityTypeMBTI.textContent = recMBTI.personalityTypeMBTI || "-";

  if (interestCategoryDISC) interestCategoryDISC.textContent = recDISC.categoryDISC || disc;
  if (learningStyleDISC) learningStyleDISC.textContent = recDISC.learningStyleDISC || "-";
  if (personalityTypeDISC) personalityTypeDISC.textContent = recDISC.personalityTypeDISC || "-";

  if (personalityDescription) {
    personalityDescription.textContent = recMBTI.description + " " + recDISC.description;
  }

  // Update Kartu Rekomendasi Jurusan
  if (recommendationCards) {
    recommendationCards.innerHTML = "";

    // Ambil jurusan dari MBTI dan masukkan skor MBTI
    const majorsMBTI = (recMBTI.majors || []).map((m) => ({
      ...m,
      calculatedMatch: mbtiMatchScore, // Pakai skor hasil hitungan MBTI
    }));

    // Ambil jurusan dari DISC dan masukkan skor DISC
    const majorsDISC = (recDISC.majors || []).map((m) => ({
      ...m,
      calculatedMatch: discMatchScore, // Pakai skor hasil hitungan DISC
    }));

    // Gabungkan rekomendasi jurusan dari MBTI dan DISC agar lebih kaya
    const allMajors = [...majorsMBTI, ...majorsDISC];

    // Hilangkan duplikasi jurusan jika ada
    const uniqueMajors = [];
    allMajors.forEach((m) => {
      const existing = uniqueMajors.find((u) => u.name === m.name);
      if (existing) {
        // Jika sudah ada, update skor ke yang paling tinggi
        existing.calculatedMatch = Math.max(existing.calculatedMatch, m.calculatedMatch);
      } else {
        uniqueMajors.push(m);
      }
    });

    uniqueMajors.sort((a, b) => b.calculatedMatch - a.calculatedMatch);

    uniqueMajors.forEach((m) => {
      recommendationCards.innerHTML += `
            <div class="recommendation-card">
                <h5>${m.name}</h5>
                <p>${m.description}</p>
                <div class="match-score">${m.calculatedMatch}% Match</div>
            </div>`;
    });
  }

  // Update List Karir
  if (careerList) {
    careerList.innerHTML = "";
    const allCareers = [...(recMBTI.careers || []), ...(recDISC.careers || [])];
    const uniqueCareers = [...new Set(allCareers)];

    uniqueCareers.forEach((career) => {
      const careerItem = document.createElement("div");
      careerItem.className = "career-item";
      careerItem.textContent = career;
      careerList.appendChild(careerItem);
    });
  }
}

function finishTest() {
  // Validasi terakhir: Pastikan soal terakhir sudah dijawab
  if (testState.answers[testState.currentQuestionIndex] === undefined) {
    alert("Silakan jawab pertanyaan terakhir sebelum melihat hasil.");
    return;
  }

  calculateResult();
  testQuestions.classList.add("hidden");
  testResults.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Fungsi untuk menyimpan hasil

async function saveResults() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p", "mm", "a4");
  const element = document.getElementById("testResults");
  const actions = document.querySelector(".results-actions");

  actions.style.display = "none"; // Sembunyikan tombol

  try {
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const name = document.getElementById("userName").value || "Peserta";

    doc.text(`Hasil Tes Minat Bakat: ${name}`, 10, 10);
    // Hitung rasio agar pas A4
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    doc.addImage(imgData, "PNG", 0, 20, pdfWidth, pdfHeight);
    doc.save(`Hasil_Tes_${name}.pdf`);
  } catch (err) {
    alert("Gagal export PDF");
    console.error(err);
  } finally {
    actions.style.display = "flex"; // Munculkan tombol lagi
  }
}

// Inisialisasi saat halaman dimuat
document.addEventListener("DOMContentLoaded", init);
