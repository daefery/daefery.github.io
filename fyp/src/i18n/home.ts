// Homepage copy in English (the canonical page at /) and Indonesian (/id/).
// English strings are the approved copy; change them only together with tests/portfolio.spec.ts.
// Indonesian uses saya/Anda: the site is read by business owners and hiring managers, so it stays formal but plain.

export type Lang = 'en' | 'id'

export const LANG_PATH: Record<Lang, string> = { en: '/', id: '/id/' }

type Tile = { tag: string; em: string; title: string; body: string; pills?: string[] }
type App = { name: string; href: string; img: string; alt: string; body: string; meta: string }
type Job = { name: string; years: string; body: string }

export type HomeCopy = {
  meta: { title: string; description: string; locale: string; ogAlt: string }
  nav: { sections: [string, string][]; explore: string; cta: string; switchLabel: string; switchText: string; switchAria: string; aria: string; home: string; skip: string }
  hero: { chip: string; h1a: string; h1b: string; sub: string; seeWork: string; cv: string; note: string }
  stats: [string, string][]
  approach: { kick: string; h2: string; lead: string; tiles: Tile[] }
  work: {
    kick: string; h2: string; lead: string
    marketing: Tile & { flow: string[]; gate: string; publish: string }
    platform: Tile
    brodev: Tile; ravnori: Tile; lariksa: Tile; penadf: Tile
    edbot: Tile & { alt: string }
    openSource: { title: string; chips: [string, string, string][] }
    earlier: { title: string; chips: [string, string, string][] }
  }
  research: { kick: string; h2: string; tag: string; em: string; title: string; body: string; paper: string; authors: string; venue: string; link: string }
  products: { kick: string; h2: string; lead: string; apps: App[] }
  experience: { kick: string; h2: string; jobs: Job[] }
  writing: { kick: string; h2: string; soon: string; month: string; all: string }
  workWithMe: { kick: string; h2: string; lead: string; tiles: Tile[] }
  final: { h2a: string; h2b: string; body: string; project: string; projectSubject: string; role: string; roleSubject: string; orEmail: string }
  footer: { pages: [string, string][] }
  console: {
    aria: string; ledger: string; agentSays: string; checks: string; attempts: string; status: string
    who: Record<'agent' | 'gate', string>
    steps: string[]
    done: string; waiting: string; passing: string; failing: string; running: string
    closed: string; open: string; verified: string; paused: string
    replay: string; pause: string; resume: string
  }
}

const shared = {
  experienceNames: ['Solve Education!', 'Xtremax', 'Elephant Talk', 'Suzuki Indomobil'],
}

export const home: Record<Lang, HomeCopy> = {
  en: {
    meta: {
      title: 'System design and AI-assisted delivery',
      description:
        'Senior software engineer in Indonesia (UTC+7). Application architecture, AI workflows and AI-assisted delivery. Twelve years in software, eight fully remote. Open to remote roles and project work.',
      locale: 'en_US',
      ogAlt: 'system design and AI-assisted delivery',
    },
    nav: {
      sections: [
        ['#approach', 'Approach'],
        ['#work', 'Work'],
        ['#research', 'Research'],
        ['#products', 'Products'],
        ['#writing', 'Writing'],
      ],
      explore: 'Explore',
      cta: 'Work with me',
      switchLabel: 'id',
      switchText: 'ID',
      switchAria: 'Baca dalam Bahasa Indonesia',
      aria: 'Portfolio navigation',
      home: 'Fery Yundara Putera, home',
      skip: 'Skip to content',
    },
    hero: {
      chip: 'Fery Yundara Putera · Open to roles and projects · Indonesia, UTC+7',
      h1a: 'I design systems.',
      h1b: 'I build with AI.',
      sub: "I'm Fery. I design applications and the workflows around them, using AI to help plan, implement and review. I set the constraints and check the result.",
      seeWork: 'See the work',
      cv: 'Download CV',
      note: 'Illustration of the rule my orchestrator enforces: an agent saying "done" never closes a task.',
    },
    stats: [
      ['12 yrs', 'software design and delivery'],
      ['32M+', 'lessons on edbot.ai'],
      ['4 apps', 'built and shipped solo'],
      ['8 yrs', 'fully remote, 10+ countries'],
    ],
    approach: {
      kick: '// how I work',
      h2: 'From a workflow to working software.',
      lead: 'AI helps with planning and implementation. I keep the design decisions explicit and check the result against the original need.',
      tiles: [
        { tag: '01 / define', em: 'requirements', title: 'Start with the workflow', body: "Map who uses the system, where work gets stuck, and what needs a person's approval. Set the scope before asking an agent to build." },
        { tag: '02 / design', em: 'architecture', title: 'Make the trade-offs explicit', body: 'Define system boundaries and data flow. Record failure paths and release checks, so the plan explains how the system will run.' },
        { tag: '03 / direct', em: 'AI-assisted delivery', title: 'Give agents bounded tasks', body: 'Use AI to turn a reviewed plan into small changes. Give each task a clear scope and acceptance criteria, with isolated workspaces where needed.' },
        { tag: '04 / verify', em: 'review and testing', title: 'Check the whole path', body: "Review the changes and test the user's workflow. An agent's completion message is a claim to check; passing unit tests alone can still miss a broken first run." },
      ],
    },
    work: {
      kick: '// selected work',
      h2: 'The design behind the software.',
      lead: 'Human approval in marketing automation. Task isolation in coding-agent tools. Application architecture and release automation for edbot.ai.',
      marketing: {
        tag: 'production · 2026', em: 'Claude on Bedrock', title: "A marketing agent that can't publish on its own",
        body: 'I designed the path from staff updates to draft posts, with human approval required before publication. Built on AWS Bedrock.',
        flow: ['update', 'draft', 'review'], gate: 'human gate', publish: 'publish',
      },
      platform: { tag: 'platform', em: '2026', title: '0 → 7', body: "live tools on Solve Education's automation platform in one quarter." },
      brodev: { tag: 'personal project · Brodev', em: 'orchestration', title: 'Rules for agent-led delivery', body: 'I designed a coding-agent orchestrator with isolated git worktrees and task closure based on passing project checks. Architecture decisions live in ADRs.', pills: ['Rust', 'git worktrees', 'verification gates'] },
      ravnori: { tag: 'open source · ravnori', em: 'released ↗', title: 'Memory across agent sessions', body: 'Local-first memory built from agent transcripts. Events and read progress commit in one SQLite transaction, so interrupted capture can resume.', pills: ['Rust', 'SQLite', 'Claude Code / Codex / pi'] },
      lariksa: { tag: 'open source · Lariksa', em: 'released ↗', title: 'Meeting notes that cite their source', body: "A Windows app that records a call and writes the minutes with AI on the laptop. Every action item points to a transcript line, and code drops any reference that doesn't exist.", pills: ['Rust', 'Tauri', 'local Whisper + LLM'] },
      penadf: { tag: 'open source · PenaDF', em: 'new ↗', title: 'An offline PDF app for Windows', body: 'Open PDFs in tabs, then sign, comment, fill forms, reorder pages, compare two versions or add a password. Every edit runs on the PC; nothing is uploaded.', pills: ['Rust', 'PDFium', '16 MB installed'] },
      edbot: { tag: 'edtech at scale · 2018 to 2025', em: 'edbot.ai ↗', title: 'Application architecture at learning-platform scale', body: "I owned the frontend architecture of edbot.ai, which delivered 32M+ lessons across 10+ countries. I also introduced the team's first CI/CD pipeline and end-to-end tests.", pills: ['React', 'Next.js', 'CI/CD', '100K+ peak monthly users'], alt: 'edbot.ai landing page' },
      openSource: {
        title: 'Open source contributions',
        chips: [
          ['https://github.com/Automattic/jetpack/pull/53574', 'Automattic/jetpack #53574', 'PHP bug fix with tests, merged'],
          ['https://github.com/Automattic/jetpack/pull/53543', 'Automattic/jetpack #53543', 'PHP, merged after review'],
        ],
      },
      earlier: {
        title: 'Earlier at Solve Education',
        chips: [
          ['https://content.solveeducation.org/', 'Content+', 'LLM drafting tool, real-time collaboration'],
          ['https://learnalytics.solveeducation.org/', 'Learnalytics', 'learner analytics dashboard'],
          ['https://localizy.dawnofcivilization.net/', 'Localizy', 'translation workflows'],
          ['https://ed.solveeducation.org/', 'Ed The Bot', 'portal for an English-learning chatbot'],
          ['https://dawnofcivilization.net', 'Dawn of Civilization', 'history learning game, Django'],
        ],
      },
    },
    research: {
      kick: '// evaluation and verification',
      h2: 'Selected research.',
      tag: 'Accepted workshop poster',
      em: '2026 · non-archival',
      title: 'When a forecasting score rewards the wrong report',
      body: 'A benchmark can reward a forecaster for reporting something other than what it believes. We examine why, test the mechanism in simulation and practice tasks, and propose normalization fixed before the outcome.',
      paper: 'Per-Outcome Baseline Normalization Makes Proper Forecast Scores Improper',
      authors: 'Fery Yundara Putera and Bramantya Farid Prakoso.',
      venue: 'Accepted for poster presentation at Agenthon 2026: Verifiable AI for Quantitative Finance, a workshop at NeurIPS 2026.',
      link: 'Workshop details ↗',
    },
    products: {
      kick: '// side products',
      h2: 'Four apps, from idea to release.',
      lead: 'Personal products I designed and shipped solo, each with a different workflow and platform constraint.',
      apps: [
        { name: 'Vacua', href: '/products/vacua/', img: '/assets/img/products/vacua-screen.webp', alt: 'Vacua scanning a Mac for junk files', body: 'Mac cleaner with a Safe or Moderate label on every item. 9 scan categories, $12 once.', meta: 'macOS · SwiftUI' },
        { name: 'Qadha', href: 'https://play.google.com/store/apps/details?id=com.qadha.islam', img: '/assets/img/products/qadha-screen.webp', alt: "Qadha showing the day's prayer focus", body: 'A 30-day guided reset for prayer consistency. Donation-based, nothing paywalled.', meta: 'Google Play · React Native' },
        { name: 'Plareon', href: '/products/plareon/', img: '/assets/img/products/plareon-screen.webp', alt: 'Plareon cover: a basketball player dribbling on court', body: 'Daily basketball plans for 6 player types, with audio drills and an Elite tier.', meta: 'iOS, Android · Supabase' },
        { name: 'Zokuu', href: '/products/zokuu/', img: '/assets/img/products/zokuu-screen.webp', alt: 'Zokuu alarm screens', body: 'Alarms that fire even in Doze mode or after a reboot. No account, no network.', meta: 'Android · native Kotlin' },
      ],
    },
    experience: {
      kick: '// experience',
      h2: 'Twelve years, mostly remote.',
      jobs: [
        { name: shared.experienceNames[0], years: '2018 to now', body: "Senior Software Engineer. I lead the AI automation platform and built the team's AI coding-agent setup. Before that I owned edbot.ai's frontend and built the team's first CI/CD." },
        { name: shared.experienceNames[1], years: '2016 to 2018', body: 'Backend Developer. Maintained three live client projects for teams in Singapore and Indonesia. Certified in Sitefinity CRM.' },
        { name: shared.experienceNames[2], years: '2015 to 2017', body: 'Software Developer. C# microservices and two AngularJS web apps, Spain and Indonesia.' },
        { name: shared.experienceNames[3], years: '2014 to 2015', body: '.NET Developer. Dealer management system used in every main branch office.' },
      ],
    },
    writing: { kick: '// writing', h2: 'Notes from the gate.', soon: 'soon', month: 'May 2026', all: 'All posts on Medium →' },
    workWithMe: {
      kick: '// work with me',
      h2: 'Two ways to work together.',
      lead: "I'm open to a full-time remote role, and to project-based or freelance work. Both follow the same process: define, design, build with AI, verify.",
      tiles: [
        { tag: 'full-time · remote', em: 'UTC+7', title: 'Join your team', body: 'Application and AI systems design, with responsibility for delivery. My working day overlaps with Asia, Australia and the European morning.' },
        { tag: 'project · freelance', em: 'open now', title: 'Build one thing, well', body: 'A project with a clear finish line: a new product, an AI workflow or a rebuild. You get a written plan before any code, working software at each step, and a handover your team can run.' },
        { tag: 'AI workflows', em: 'human approval', title: 'Automation that knows when to stop', body: "Workflows that do the routine work and wait where a person must decide. Proof: a marketing workflow on AWS Bedrock that can't publish without approval." },
        { tag: 'products', em: 'idea to release', title: 'From idea to the app store', body: 'Web and mobile products shipped end to end. Proof: four apps I designed and released solo on macOS, iOS and Android.' },
        { tag: 'teams', em: 'AI-assisted delivery', title: 'Coding agents your team can trust', body: 'Shared rules, required checks and delivery commands, so agent work passes review. Proof: the setup my team uses today.' },
      ],
    },
    final: {
      h2a: 'Want to build something ',
      h2b: 'world‑class?',
      body: 'Tell me what you want to build, as a project or a full-time role. I reply within 24 hours with questions and a first take on scope.',
      project: 'Start a project',
      projectSubject: 'Project: ',
      role: 'Discuss a full-time role',
      roleSubject: 'Full-time role: ',
      orEmail: 'Or email',
    },
    footer: {
      pages: [
        ['/resume/', 'Resume'],
        ['/works/', 'Project archive'],
        ['/products/', 'All products'],
        ['/blog/', 'Blog'],
        ['/contact/', 'Contact'],
      ],
    },
    console: {
      aria: "Illustration of how an agent's work gets verified",
      ledger: 'Task ledger', agentSays: 'Agent says', checks: 'Project checks', attempts: 'Attempts', status: 'Status',
      who: { agent: 'agent', gate: 'gate' },
      steps: ['edit 3 files, run tests', '"done, all tests pass"', "run the project's own checks …", '✗ 2 failing → task stays open', 'fix the failures, try again', '✓ all checks pass → closed on evidence'],
      done: '"done"', waiting: 'waiting', passing: 'passing', failing: '2 failing', running: 'running',
      closed: 'closed', open: 'open', verified: 'verified', paused: 'paused',
      replay: 'Replay illustration', pause: 'Pause illustration', resume: 'Resume illustration',
    },
  },

  id: {
    meta: {
      title: 'Desain sistem dan pengembangan dengan AI',
      description:
        'Senior software engineer di Indonesia (UTC+7). Arsitektur aplikasi, alur kerja AI, dan pengembangan software dengan bantuan AI. Dua belas tahun di software, delapan tahun full remote. Terbuka untuk posisi remote dan proyek.',
      locale: 'id_ID',
      ogAlt: 'desain sistem dan pengembangan dengan AI',
    },
    nav: {
      sections: [
        ['#approach', 'Cara kerja'],
        ['#work', 'Karya'],
        ['#research', 'Riset'],
        ['#products', 'Produk'],
        ['#writing', 'Tulisan'],
      ],
      explore: 'Menu',
      cta: 'Kerja sama',
      switchLabel: 'en',
      switchText: 'EN',
      switchAria: 'Read in English',
      aria: 'Navigasi portofolio',
      home: 'Fery Yundara Putera, beranda',
      skip: 'Lewati ke konten',
    },
    hero: {
      chip: 'Fery Yundara Putera · Terbuka untuk posisi dan proyek · Indonesia, UTC+7',
      h1a: 'Merancang sistem.',
      h1b: 'Membangun dengan AI.',
      sub: 'Saya Fery. Saya merancang aplikasi beserta alur kerja di sekitarnya, dengan bantuan AI untuk merencanakan, membangun, dan meninjau. Batasannya saya yang menentukan, hasilnya saya yang memeriksa.',
      seeWork: 'Lihat karya',
      cv: 'Unduh CV',
      note: 'Ilustrasi aturan yang dijalankan orchestrator saya: agent yang bilang "selesai" tidak pernah langsung menutup tugas.',
    },
    stats: [
      ['12 thn', 'merancang dan membangun software'],
      ['32 jt+', 'pelajaran di edbot.ai'],
      ['4 app', 'dibangun dan dirilis sendiri'],
      ['8 thn', 'full remote, 10+ negara'],
    ],
    approach: {
      kick: '// cara saya bekerja',
      h2: 'Dari alur kerja menjadi software yang berjalan.',
      lead: 'AI membantu perencanaan dan implementasi. Keputusan desainnya saya buat jelas, dan hasilnya saya cek terhadap kebutuhan awal.',
      tiles: [
        { tag: '01 / definisi', em: 'kebutuhan', title: 'Mulai dari alur kerja', body: 'Petakan siapa yang memakai sistem, di mana pekerjaan tersendat, dan bagian mana yang perlu persetujuan orang. Cakupannya ditetapkan sebelum agent mulai membangun.' },
        { tag: '02 / desain', em: 'arsitektur', title: 'Trade-off dibuat jelas', body: 'Tentukan batas sistem dan alur datanya. Skenario kegagalan dan pemeriksaan sebelum rilis dicatat, supaya rencananya menjelaskan cara sistem itu berjalan.' },
        { tag: '03 / arahkan', em: 'pengembangan dengan AI', title: 'Tugas agent selalu terbatas', body: 'AI mengubah rencana yang sudah ditinjau menjadi perubahan-perubahan kecil. Setiap tugas punya cakupan dan kriteria penerimaan yang jelas, dengan workspace terpisah bila perlu.' },
        { tag: '04 / verifikasi', em: 'review dan testing', title: 'Seluruh alur dicek', body: 'Perubahan ditinjau dan alur kerja pengguna diuji. Pesan "selesai" dari agent adalah klaim yang harus dicek, karena unit test yang lolos pun bisa melewatkan kegagalan saat aplikasi pertama kali dijalankan.' },
      ],
    },
    work: {
      kick: '// karya pilihan',
      h2: 'Desain di balik software-nya.',
      lead: 'Persetujuan manusia di otomasi marketing. Isolasi tugas di tools coding agent. Arsitektur aplikasi dan otomasi rilis untuk edbot.ai.',
      marketing: {
        tag: 'produksi · 2026', em: 'Claude di Bedrock', title: 'Agen marketing yang butuh persetujuan sebelum menerbitkan konten',
        body: 'Saya merancang jalur dari update staf sampai draft post, dengan persetujuan manusia yang wajib sebelum publikasi. Dibangun di AWS Bedrock.',
        flow: ['update', 'draft', 'review'], gate: 'persetujuan', publish: 'terbit',
      },
      platform: { tag: 'platform', em: '2026', title: '0 → 7', body: 'tool yang aktif di platform otomasi Solve Education dalam satu kuartal.' },
      brodev: { tag: 'proyek pribadi · Brodev', em: 'orkestrasi', title: 'Aturan pengembangan software dengan agen AI', body: 'Saya merancang orchestrator coding agent dengan git worktree terpisah. Tugas baru ditutup setelah pemeriksaan proyek lolos, dan keputusan arsitekturnya dicatat di ADR.', pills: ['Rust', 'git worktree', 'gerbang verifikasi'] },
      ravnori: { tag: 'open source · ravnori', em: 'dirilis ↗', title: 'Memori lintas sesi agent', body: 'Memori local-first yang dibangun dari transkrip agent. Event dan progres baca di-commit dalam satu transaksi SQLite, jadi perekaman yang terputus bisa dilanjutkan.', pills: ['Rust', 'SQLite', 'Claude Code / Codex / pi'] },
      lariksa: { tag: 'open source · Lariksa', em: 'dirilis ↗', title: 'Notulen rapat yang menyebut sumbernya', body: 'Aplikasi Windows yang merekam panggilan lalu menulis notulennya dengan AI di laptop sendiri. Setiap action item menunjuk ke baris transkrip, dan kode membuang rujukan yang tidak ada.', pills: ['Rust', 'Tauri', 'Whisper + LLM lokal'] },
      penadf: { tag: 'open source · PenaDF', em: 'baru ↗', title: 'Aplikasi PDF offline untuk Windows', body: 'Buka PDF dalam tab, lalu tanda tangani, beri komentar, isi formulir, atur ulang halaman, bandingkan dua versi, atau tambahkan password. Semua edit berjalan di PC, tidak ada yang diunggah.', pills: ['Rust', 'PDFium', '16 MB terpasang'] },
      edbot: { tag: 'edtech skala besar · 2018 sampai 2025', em: 'edbot.ai ↗', title: 'Arsitektur aplikasi di skala platform belajar', body: 'Saya memegang arsitektur frontend edbot.ai, yang sudah menghadirkan lebih dari 32 juta pelajaran di 10+ negara. Saya juga memperkenalkan pipeline CI/CD dan end-to-end test pertama di tim.', pills: ['React', 'Next.js', 'CI/CD', '100 ribu+ pengguna per bulan di masa puncak'], alt: 'Halaman depan edbot.ai' },
      openSource: {
        title: 'Kontribusi open source',
        chips: [
          ['https://github.com/Automattic/jetpack/pull/53574', 'Automattic/jetpack #53574', 'perbaikan bug PHP dengan test, di-merge'],
          ['https://github.com/Automattic/jetpack/pull/53543', 'Automattic/jetpack #53543', 'PHP, di-merge setelah review'],
        ],
      },
      earlier: {
        title: 'Sebelumnya di Solve Education',
        chips: [
          ['https://content.solveeducation.org/', 'Content+', 'tool drafting dengan LLM, kolaborasi real-time'],
          ['https://learnalytics.solveeducation.org/', 'Learnalytics', 'dashboard analitik pelajar'],
          ['https://localizy.dawnofcivilization.net/', 'Localizy', 'alur kerja penerjemahan'],
          ['https://ed.solveeducation.org/', 'Ed The Bot', 'portal chatbot belajar bahasa Inggris'],
          ['https://dawnofcivilization.net', 'Dawn of Civilization', 'game belajar sejarah, Django'],
        ],
      },
    },
    research: {
      kick: '// evaluasi dan verifikasi',
      h2: 'Riset pilihan.',
      tag: 'Poster workshop yang diterima',
      em: '2026 · non-archival',
      title: 'Saat skor forecasting memberi nilai pada laporan yang keliru',
      body: 'Sebuah benchmark bisa memberi nilai lebih kepada forecaster yang melaporkan hal berbeda dari yang sebenarnya ia yakini. Kami membahas penyebabnya, menguji mekanismenya lewat simulasi dan tugas latihan, lalu mengusulkan normalisasi yang ditetapkan sebelum hasilnya diketahui.',
      paper: 'Per-Outcome Baseline Normalization Makes Proper Forecast Scores Improper',
      authors: 'Fery Yundara Putera dan Bramantya Farid Prakoso.',
      venue: 'Diterima untuk presentasi poster di Agenthon 2026: Verifiable AI for Quantitative Finance, sebuah workshop di NeurIPS 2026.',
      link: 'Detail workshop ↗',
    },
    products: {
      kick: '// produk sampingan',
      h2: 'Empat aplikasi, dari ide sampai rilis.',
      lead: 'Produk pribadi yang saya rancang dan rilis sendiri, masing-masing dengan alur kerja dan batasan platform yang berbeda.',
      apps: [
        { name: 'Vacua', href: '/products/vacua/', img: '/assets/img/products/vacua-screen.webp', alt: 'Vacua memindai file sampah di Mac', body: 'Pembersih Mac dengan label Aman atau Sedang di setiap item. 9 kategori pemindaian, $12 sekali bayar.', meta: 'macOS · SwiftUI' },
        { name: 'Qadha', href: 'https://play.google.com/store/apps/details?id=com.qadha.islam', img: '/assets/img/products/qadha-screen.webp', alt: 'Qadha menampilkan fokus shalat hari ini', body: 'Program 30 hari untuk kembali konsisten shalat. Berbasis donasi, tanpa paywall.', meta: 'Google Play · React Native' },
        { name: 'Plareon', href: '/products/plareon/', img: '/assets/img/products/plareon-screen.webp', alt: 'Cover Plareon: pemain basket menggiring bola di lapangan', body: 'Rencana latihan basket harian untuk 6 tipe pemain, dengan drill audio dan tier Elite.', meta: 'iOS, Android · Supabase' },
        { name: 'Zokuu', href: '/products/zokuu/', img: '/assets/img/products/zokuu-screen.webp', alt: 'Layar alarm Zokuu', body: 'Alarm yang tetap berbunyi dalam mode Doze atau setelah HP restart. Tanpa akun, tanpa internet.', meta: 'Android · Kotlin native' },
      ],
    },
    experience: {
      kick: '// pengalaman',
      h2: 'Dua belas tahun, sebagian besar remote.',
      jobs: [
        { name: shared.experienceNames[0], years: '2018 sampai sekarang', body: 'Senior Software Engineer. Saya memimpin platform otomasi AI dan membangun setup coding agent untuk tim. Sebelumnya saya memegang frontend edbot.ai dan membangun CI/CD pertama di tim.' },
        { name: shared.experienceNames[1], years: '2016 sampai 2018', body: 'Backend Developer. Menangani tiga proyek klien yang sudah live untuk tim di Singapura dan Indonesia. Bersertifikat Sitefinity CRM.' },
        { name: shared.experienceNames[2], years: '2015 sampai 2017', body: 'Software Developer. Microservice C# dan dua aplikasi web AngularJS, untuk tim di Spanyol dan Indonesia.' },
        { name: shared.experienceNames[3], years: '2014 sampai 2015', body: '.NET Developer. Sistem manajemen dealer yang dipakai di semua kantor cabang utama.' },
      ],
    },
    writing: { kick: '// tulisan', h2: 'Catatan dari lapangan.', soon: 'segera', month: 'Mei 2026', all: 'Semua tulisan di Medium (bahasa Inggris) →' },
    workWithMe: {
      kick: '// kerja sama',
      h2: 'Dua cara bekerja sama.',
      lead: 'Saya terbuka untuk posisi full-time remote, juga untuk proyek atau pekerjaan freelance. Keduanya memakai proses yang sama: definisikan, rancang, bangun dengan AI, lalu verifikasi.',
      tiles: [
        { tag: 'full-time · remote', em: 'UTC+7', title: 'Bergabung dengan tim Anda', body: 'Desain aplikasi dan sistem AI, dengan tanggung jawab sampai delivery. Jam kerja saya bisa berkolaborasi dengan tim di Asia, Australia, dan Eropa pada pagi hari mereka.' },
        { tag: 'proyek · freelance', em: 'terbuka sekarang', title: 'Satu proyek, dikerjakan dengan benar', body: 'Proyek dengan garis akhir yang jelas: produk baru, alur kerja AI, atau membangun ulang sistem. Anda mendapat rencana tertulis sebelum ada kode, software yang berjalan di setiap tahap, dan serah terima supaya tim Anda bisa melanjutkannya sendiri.' },
        { tag: 'alur kerja AI', em: 'persetujuan manusia', title: 'Otomasi yang tahu kapan berhenti', body: 'Alur kerja yang mengerjakan tugas rutin dan menunggu di titik yang butuh keputusan orang. Buktinya: alur kerja marketing di AWS Bedrock yang tidak bisa publish tanpa persetujuan.' },
        { tag: 'produk', em: 'ide sampai rilis', title: 'Dari ide sampai app store', body: 'Produk web dan mobile yang dikerjakan dari awal sampai rilis. Buktinya: empat aplikasi yang saya rancang dan rilis sendiri di macOS, iOS, dan Android.' },
        { tag: 'tim', em: 'pengembangan dengan AI', title: 'Coding agent yang bisa dipercaya tim Anda', body: 'Aturan bersama, pemeriksaan wajib, dan perintah delivery, supaya hasil kerja agent lolos review. Buktinya: setup yang dipakai tim saya sekarang.' },
      ],
    },
    final: {
      h2a: 'Mau membangun sesuatu yang ',
      h2b: 'kelas dunia?',
      body: 'Ceritakan apa yang ingin Anda bangun, sebagai proyek atau posisi full-time. Saya membalas dalam 24 jam dengan beberapa pertanyaan dan gambaran awal cakupannya.',
      project: 'Mulai proyek',
      projectSubject: 'Proyek: ',
      role: 'Diskusi posisi full-time',
      roleSubject: 'Posisi full-time: ',
      orEmail: 'Atau email ke',
    },
    footer: {
      pages: [
        ['/resume/', 'Resume'],
        ['/works/', 'Arsip proyek'],
        ['/products/', 'Semua produk'],
        ['/blog/', 'Blog'],
        ['/contact/', 'Kontak'],
      ],
    },
    console: {
      aria: 'Ilustrasi cara hasil kerja agent diverifikasi',
      ledger: 'Catatan tugas', agentSays: 'Kata agent', checks: 'Pemeriksaan proyek', attempts: 'Percobaan', status: 'Status',
      who: { agent: 'agent', gate: 'gerbang' },
      steps: ['ubah 3 file, jalankan test', '"selesai, semua test lolos"', 'jalankan pemeriksaan proyek …', '✗ 2 gagal → tugas tetap terbuka', 'perbaiki yang gagal, coba lagi', '✓ semua lolos → ditutup dengan bukti'],
      done: '"selesai"', waiting: 'menunggu', passing: 'lolos', failing: '2 gagal', running: 'berjalan',
      closed: 'ditutup', open: 'terbuka', verified: 'terverifikasi', paused: 'dijeda',
      replay: 'Ulangi ilustrasi', pause: 'Jeda ilustrasi', resume: 'Lanjutkan ilustrasi',
    },
  },
}
