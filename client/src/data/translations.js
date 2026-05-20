const translations = {
  en: {
    name: "English",
    flag: "🇬🇧",
    questions: [
      {
        id: 1,
        question: "Which is associated with RLNC?",
        options: ["Governance voting", "Smart contract execution", "Privacy", "Flexible recovery"],
        explanation: "RLNC (Random Linear Network Coding) is known for flexible recovery — nodes can reconstruct data from any combination of encoded packets, even with packet loss."
      },
      {
        id: 2,
        question: "Which problem can slow propagation cause?",
        options: ["Rug pull", "Increased token supply", "Lower validator count", "Delayed synchronization"],
        explanation: "Slow propagation causes delayed synchronization — nodes take longer to agree on the latest state, hurting performance and validator competitiveness."
      },
      {
        id: 3,
        question: "Which is NOT true about RLNC?",
        options: ["It uses encoded packet combinations", "It improves resilience during packet loss", "It requires packets to arrive in order", "It reduces retransmissions"],
        explanation: "RLNC does NOT require packets to arrive in order — that's one of its key advantages. Any combination of encoded packets can reconstruct the original data."
      },
      {
        id: 4,
        question: "Which is NOT true about Optimum?",
        options: ["It focuses on networking efficiency", "It improves data propagation", "It replaces blockchain consensus", "It supports real-time infrastructure"],
        explanation: "Optimum does NOT replace blockchain consensus — it works alongside existing consensus mechanisms with zero protocol changes required."
      },
      {
        id: 5,
        question: "Which is NOT true about DeRAM?",
        options: ["It replaces smart contracts entirely", "It enables real-time data access", "It acts as a decentralized memory layer", "It supports distributed systems"],
        explanation: "DeRAM does NOT replace smart contracts — it is a decentralized memory layer that complements existing blockchain infrastructure."
      },
      {
        id: 6,
        question: "Which is NOT true about Flexnodes?",
        options: ["They help relay encoded data", "They are responsible for token minting", "They participate in network propagation", "They support RLNC-based transmission"],
        explanation: "Flexnodes are NOT responsible for token minting — they encode, decode and relay RLNC-coded gossip frames across the Optimum network."
      },
      {
        id: 7,
        question: "Low latency helps validators by:",
        options: ["Reducing stake", "Receiving data faster", "Increasing supply", "Reducing nodes"],
        explanation: "Low latency means validators receive blocks and transactions faster — giving them a competitive edge to capture rewards and act on opportunities first."
      },
      {
        id: 8,
        question: "Which is NOT part of Optimum's focus?",
        options: ["Data movement", "Networking scalability", "Real-time coordination", "Token inflation mechanics"],
        explanation: "Optimum focuses on data movement, networking scalability, and real-time coordination — token inflation mechanics are not part of its core mission."
      },
      {
        id: 9,
        question: "You can get the refined role without having the observer role",
        options: ["False", "True", "Probably by chance", "If the Mod likes you"],
        explanation: "True — you can get the refined role directly without needing the observer role first."
      },
      {
        id: 10,
        question: "Which of these is MOST directly related to Optimum's core networking architecture?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p is Optimum's core networking protocol — it is the RLNC-powered P2P data transmission layer that delivers 6–20x faster block propagation than Gossipsub."
      }
    ]
  },

  vi: {
    name: "Tiếng Việt",
    flag: "🇻🇳",
    questions: [
      {
        id: 1,
        question: "Điều gì liên quan đến RLNC?",
        options: ["Bỏ phiếu quản trị", "Thực thi hợp đồng thông minh", "Quyền riêng tư", "Phục hồi linh hoạt"],
        explanation: "RLNC (Mã hóa mạng tuyến tính ngẫu nhiên) được biết đến với khả năng phục hồi linh hoạt — các nút có thể tái tạo dữ liệu từ bất kỳ tổ hợp gói mã hóa nào, kể cả khi mất gói."
      },
      {
        id: 2,
        question: "Truyền tải chậm có thể gây ra vấn đề gì?",
        options: ["Rug pull", "Tăng nguồn cung token", "Giảm số lượng validator", "Đồng bộ hóa bị trì hoãn"],
        explanation: "Truyền tải chậm gây ra đồng bộ hóa bị trì hoãn — các nút mất nhiều thời gian hơn để đồng ý về trạng thái mới nhất."
      },
      {
        id: 3,
        question: "Điều nào KHÔNG đúng về RLNC?",
        options: ["Sử dụng tổ hợp gói mã hóa", "Cải thiện khả năng phục hồi khi mất gói", "Yêu cầu gói đến theo thứ tự", "Giảm việc truyền lại"],
        explanation: "RLNC KHÔNG yêu cầu các gói đến theo thứ tự — đây là một trong những lợi thế chính của nó."
      },
      {
        id: 4,
        question: "Điều nào KHÔNG đúng về Optimum?",
        options: ["Tập trung vào hiệu quả mạng", "Cải thiện truyền tải dữ liệu", "Thay thế đồng thuận blockchain", "Hỗ trợ cơ sở hạ tầng thời gian thực"],
        explanation: "Optimum KHÔNG thay thế đồng thuận blockchain — nó hoạt động cùng với các cơ chế đồng thuận hiện có mà không cần thay đổi giao thức."
      },
      {
        id: 5,
        question: "Điều nào KHÔNG đúng về DeRAM?",
        options: ["Hoàn toàn thay thế hợp đồng thông minh", "Cho phép truy cập dữ liệu thời gian thực", "Hoạt động như lớp bộ nhớ phi tập trung", "Hỗ trợ hệ thống phân tán"],
        explanation: "DeRAM KHÔNG thay thế hợp đồng thông minh — nó là lớp bộ nhớ phi tập trung bổ sung cho cơ sở hạ tầng blockchain hiện có."
      },
      {
        id: 6,
        question: "Điều nào KHÔNG đúng về Flexnodes?",
        options: ["Giúp chuyển tiếp dữ liệu mã hóa", "Chịu trách nhiệm đúc token", "Tham gia truyền tải mạng", "Hỗ trợ truyền dựa trên RLNC"],
        explanation: "Flexnodes KHÔNG chịu trách nhiệm đúc token — chúng mã hóa, giải mã và chuyển tiếp các khung gossip mã hóa RLNC."
      },
      {
        id: 7,
        question: "Độ trễ thấp giúp ích cho validators bằng cách:",
        options: ["Giảm cổ phần", "Nhận dữ liệu nhanh hơn", "Tăng nguồn cung", "Giảm số nút"],
        explanation: "Độ trễ thấp có nghĩa là validators nhận các khối và giao dịch nhanh hơn — mang lại lợi thế cạnh tranh để nắm bắt phần thưởng."
      },
      {
        id: 8,
        question: "Điều nào KHÔNG nằm trong trọng tâm của Optimum?",
        options: ["Di chuyển dữ liệu", "Khả năng mở rộng mạng", "Phối hợp thời gian thực", "Cơ chế lạm phát token"],
        explanation: "Optimum tập trung vào di chuyển dữ liệu, khả năng mở rộng mạng và phối hợp thời gian thực — cơ chế lạm phát token không phải là trọng tâm."
      },
      {
        id: 9,
        question: "Bạn có thể nhận vai refined mà không cần có vai observer",
        options: ["Sai", "Đúng", "Có thể do may mắn", "Nếu Mod thích bạn"],
        explanation: "Đúng — bạn có thể nhận vai refined trực tiếp mà không cần vai observer trước."
      },
      {
        id: 10,
        question: "Điều nào liên quan TRỰC TIẾP NHẤT đến kiến trúc mạng cốt lõi của Optimum?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p là giao thức mạng cốt lõi của Optimum — lớp truyền dữ liệu P2P được hỗ trợ bởi RLNC, nhanh hơn Gossipsub 6–20 lần."
      }
    ]
  },

  ru: {
    name: "Русский",
    flag: "🇷🇺",
    questions: [
      {
        id: 1,
        question: "Что связано с RLNC?",
        options: ["Голосование по управлению", "Выполнение смарт-контрактов", "Конфиденциальность", "Гибкое восстановление"],
        explanation: "RLNC (случайное линейное сетевое кодирование) известно гибким восстановлением — узлы могут восстанавливать данные из любой комбинации закодированных пакетов."
      },
      {
        id: 2,
        question: "Какую проблему может вызвать медленное распространение?",
        options: ["Rug pull", "Увеличение предложения токенов", "Снижение числа валидаторов", "Задержка синхронизации"],
        explanation: "Медленное распространение вызывает задержку синхронизации — узлам требуется больше времени для согласования последнего состояния."
      },
      {
        id: 3,
        question: "Что НЕ верно относительно RLNC?",
        options: ["Использует закодированные комбинации пакетов", "Улучшает устойчивость при потере пакетов", "Требует прибытия пакетов по порядку", "Уменьшает повторные передачи"],
        explanation: "RLNC НЕ требует, чтобы пакеты приходили по порядку — это одно из его ключевых преимуществ."
      },
      {
        id: 4,
        question: "Что НЕ верно относительно Optimum?",
        options: ["Фокусируется на эффективности сети", "Улучшает распространение данных", "Заменяет консенсус блокчейна", "Поддерживает инфраструктуру реального времени"],
        explanation: "Optimum НЕ заменяет консенсус блокчейна — он работает совместно с существующими механизмами консенсуса без изменения протокола."
      },
      {
        id: 5,
        question: "Что НЕ верно относительно DeRAM?",
        options: ["Полностью заменяет смарт-контракты", "Обеспечивает доступ к данным в реальном времени", "Действует как децентрализованный уровень памяти", "Поддерживает распределённые системы"],
        explanation: "DeRAM НЕ заменяет смарт-контракты — это децентрализованный уровень памяти, дополняющий существующую инфраструктуру блокчейна."
      },
      {
        id: 6,
        question: "Что НЕ верно относительно Flexnodes?",
        options: ["Помогают передавать закодированные данные", "Отвечают за выпуск токенов", "Участвуют в распространении по сети", "Поддерживают передачу на основе RLNC"],
        explanation: "Flexnodes НЕ отвечают за выпуск токенов — они кодируют, декодируют и передают закодированные RLNC-кадры."
      },
      {
        id: 7,
        question: "Низкая задержка помогает валидаторам:",
        options: ["Уменьшать стейк", "Получать данные быстрее", "Увеличивать предложение", "Сокращать количество узлов"],
        explanation: "Низкая задержка означает, что валидаторы получают блоки и транзакции быстрее — давая им конкурентное преимущество для получения вознаграждений."
      },
      {
        id: 8,
        question: "Что НЕ входит в фокус Optimum?",
        options: ["Перемещение данных", "Масштабируемость сети", "Координация в реальном времени", "Механика инфляции токенов"],
        explanation: "Optimum фокусируется на перемещении данных, масштабируемости сети и координации в реальном времени — механика инфляции токенов не является частью его миссии."
      },
      {
        id: 9,
        question: "Можно получить роль refined без роли observer",
        options: ["Нет", "Да", "Возможно, случайно", "Если Mod вас одобрит"],
        explanation: "Верно — вы можете получить роль refined напрямую, без необходимости сначала иметь роль observer."
      },
      {
        id: 10,
        question: "Что наиболее НЕПОСРЕДСТВЕННО связано с основной сетевой архитектурой Optimum?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p — основной сетевой протокол Optimum — уровень передачи данных P2P на базе RLNC, который работает в 6–20 раз быстрее Gossipsub."
      }
    ]
  },

  bn: {
    name: "বাংলা",
    flag: "🇧🇩",
    questions: [
      {
        id: 1,
        question: "RLNC-এর সাথে কোনটি সম্পর্কিত?",
        options: ["গভর্ন্যান্স ভোটিং", "স্মার্ট কন্ট্র্যাক্ট এক্সিকিউশন", "গোপনীয়তা", "নমনীয় পুনরুদ্ধার"],
        explanation: "RLNC (র্যান্ডম লিনিয়ার নেটওয়ার্ক কোডিং) নমনীয় পুনরুদ্ধারের জন্য পরিচিত — নোডগুলি যেকোনো এনকোডেড প্যাকেটের সমন্বয় থেকে ডেটা পুনর্গঠন করতে পারে।"
      },
      {
        id: 2,
        question: "ধীর প্রচার কোন সমস্যা সৃষ্টি করতে পারে?",
        options: ["Rug pull", "টোকেন সরবরাহ বৃদ্ধি", "ভ্যালিডেটর সংখ্যা হ্রাস", "বিলম্বিত সিঙ্ক্রোনাইজেশন"],
        explanation: "ধীর প্রচার বিলম্বিত সিঙ্ক্রোনাইজেশন ঘটায় — নোডগুলি সর্বশেষ অবস্থায় সম্মত হতে বেশি সময় নেয়।"
      },
      {
        id: 3,
        question: "RLNC সম্পর্কে কোনটি সত্য নয়?",
        options: ["এনকোডেড প্যাকেট সমন্বয় ব্যবহার করে", "প্যাকেট ক্ষতিতে স্থিতিস্থাপকতা উন্নত করে", "প্যাকেট ক্রমানুসারে আসা প্রয়োজন", "পুনরায় প্রেরণ হ্রাস করে"],
        explanation: "RLNC-এর প্যাকেট ক্রমানুসারে আসার প্রয়োজন নেই — এটি এর অন্যতম প্রধান সুবিধা।"
      },
      {
        id: 4,
        question: "Optimum সম্পর্কে কোনটি সত্য নয়?",
        options: ["নেটওয়ার্ক দক্ষতায় মনোযোগ দেয়", "ডেটা প্রচার উন্নত করে", "ব্লকচেইন কনসেনসাস প্রতিস্থাপন করে", "রিয়েল-টাইম অবকাঠামো সমর্থন করে"],
        explanation: "Optimum ব্লকচেইন কনসেনসাস প্রতিস্থাপন করে না — এটি বিদ্যমান কনসেনসাস মেকানিজমের পাশাপাশি কাজ করে।"
      },
      {
        id: 5,
        question: "DeRAM সম্পর্কে কোনটি সত্য নয়?",
        options: ["সম্পূর্ণরূপে স্মার্ট কন্ট্র্যাক্ট প্রতিস্থাপন করে", "রিয়েল-টাইম ডেটা অ্যাক্সেস সক্ষম করে", "বিকেন্দ্রীভূত মেমরি স্তর হিসাবে কাজ করে", "বিতরণ করা সিস্টেম সমর্থন করে"],
        explanation: "DeRAM স্মার্ট কন্ট্র্যাক্ট প্রতিস্থাপন করে না — এটি একটি বিকেন্দ্রীভূত মেমরি স্তর যা বিদ্যমান ব্লকচেইন অবকাঠামো পরিপূরক করে।"
      },
      {
        id: 6,
        question: "Flexnodes সম্পর্কে কোনটি সত্য নয়?",
        options: ["এনকোডেড ডেটা রিলে করতে সাহায্য করে", "টোকেন মিন্টিংয়ের জন্য দায়ী", "নেটওয়ার্ক প্রচারে অংশগ্রহণ করে", "RLNC-ভিত্তিক ট্রান্সমিশন সমর্থন করে"],
        explanation: "Flexnodes টোকেন মিন্টিংয়ের জন্য দায়ী নয় — তারা RLNC-কোডেড গসিপ ফ্রেম এনকোড, ডিকোড এবং রিলে করে।"
      },
      {
        id: 7,
        question: "কম লেটেন্সি ভ্যালিডেটরদের সাহায্য করে:",
        options: ["স্টেক কমিয়ে", "দ্রুত ডেটা পেয়ে", "সরবরাহ বাড়িয়ে", "নোড কমিয়ে"],
        explanation: "কম লেটেন্সি মানে ভ্যালিডেটররা দ্রুত ব্লক এবং লেনদেন পায় — পুরস্কার এবং সুযোগ ধরার প্রতিযোগিতামূলক সুবিধা দেয়।"
      },
      {
        id: 8,
        question: "কোনটি Optimum-এর ফোকাসের অংশ নয়?",
        options: ["ডেটা মুভমেন্ট", "নেটওয়ার্ক স্কেলেবিলিটি", "রিয়েল-টাইম সমন্বয়", "টোকেন ইনফ্লেশন মেকানিক্স"],
        explanation: "Optimum ডেটা মুভমেন্ট, নেটওয়ার্ক স্কেলেবিলিটি এবং রিয়েল-টাইম সমন্বয়ে মনোযোগ দেয় — টোকেন ইনফ্লেশন মেকানিক্স এর মূল মিশনের অংশ নয়।"
      },
      {
        id: 9,
        question: "আপনি observer রোল ছাড়াই refined রোল পেতে পারেন",
        options: ["মিথ্যা", "সত্য", "সম্ভবত ঘটনাক্রমে", "যদি Mod পছন্দ করেন"],
        explanation: "সত্য — আপনি সরাসরি refined রোল পেতে পারেন observer রোল ছাড়াই।"
      },
      {
        id: 10,
        question: "Optimum-এর মূল নেটওয়ার্ক আর্কিটেকচারের সাথে সবচেয়ে সরাসরি সম্পর্কিত কোনটি?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p হল Optimum-এর মূল নেটওয়ার্ক প্রোটোকল — RLNC-চালিত P2P ডেটা ট্রান্সমিশন লেয়ার যা Gossipsub-এর চেয়ে ৬-২০ গুণ দ্রুত।"
      }
    ]
  },

  id: {
    name: "Bahasa Indonesia",
    flag: "🇮🇩",
    questions: [
      {
        id: 1,
        question: "Apa yang dikaitkan dengan RLNC?",
        options: ["Pemungutan suara tata kelola", "Eksekusi smart contract", "Privasi", "Pemulihan fleksibel"],
        explanation: "RLNC (Random Linear Network Coding) dikenal dengan pemulihan fleksibel — node dapat merekonstruksi data dari kombinasi paket terenkripsi apa pun."
      },
      {
        id: 2,
        question: "Masalah apa yang dapat disebabkan oleh propagasi yang lambat?",
        options: ["Rug pull", "Peningkatan pasokan token", "Jumlah validator lebih rendah", "Sinkronisasi tertunda"],
        explanation: "Propagasi lambat menyebabkan sinkronisasi tertunda — node membutuhkan lebih banyak waktu untuk menyepakati status terbaru."
      },
      {
        id: 3,
        question: "Mana yang TIDAK benar tentang RLNC?",
        options: ["Menggunakan kombinasi paket terenkripsi", "Meningkatkan ketahanan saat kehilangan paket", "Membutuhkan paket datang secara berurutan", "Mengurangi transmisi ulang"],
        explanation: "RLNC TIDAK memerlukan paket datang secara berurutan — ini adalah salah satu keunggulan utamanya."
      },
      {
        id: 4,
        question: "Mana yang TIDAK benar tentang Optimum?",
        options: ["Berfokus pada efisiensi jaringan", "Meningkatkan propagasi data", "Menggantikan konsensus blockchain", "Mendukung infrastruktur real-time"],
        explanation: "Optimum TIDAK menggantikan konsensus blockchain — ia bekerja berdampingan dengan mekanisme konsensus yang ada tanpa perubahan protokol."
      },
      {
        id: 5,
        question: "Mana yang TIDAK benar tentang DeRAM?",
        options: ["Sepenuhnya menggantikan smart contract", "Memungkinkan akses data real-time", "Bertindak sebagai lapisan memori terdesentralisasi", "Mendukung sistem terdistribusi"],
        explanation: "DeRAM TIDAK menggantikan smart contract — ini adalah lapisan memori terdesentralisasi yang melengkapi infrastruktur blockchain yang ada."
      },
      {
        id: 6,
        question: "Mana yang TIDAK benar tentang Flexnodes?",
        options: ["Membantu meneruskan data terenkripsi", "Bertanggung jawab atas pencetakan token", "Berpartisipasi dalam propagasi jaringan", "Mendukung transmisi berbasis RLNC"],
        explanation: "Flexnodes TIDAK bertanggung jawab atas pencetakan token — mereka mengenkripsi, mendekripsi, dan meneruskan frame gossip berkode RLNC."
      },
      {
        id: 7,
        question: "Latensi rendah membantu validator dengan:",
        options: ["Mengurangi stake", "Menerima data lebih cepat", "Meningkatkan pasokan", "Mengurangi node"],
        explanation: "Latensi rendah berarti validator menerima blok dan transaksi lebih cepat — memberikan keunggulan kompetitif untuk menangkap hadiah."
      },
      {
        id: 8,
        question: "Mana yang BUKAN bagian dari fokus Optimum?",
        options: ["Pergerakan data", "Skalabilitas jaringan", "Koordinasi real-time", "Mekanika inflasi token"],
        explanation: "Optimum berfokus pada pergerakan data, skalabilitas jaringan, dan koordinasi real-time — mekanika inflasi token bukan bagian dari misinya."
      },
      {
        id: 9,
        question: "Anda bisa mendapatkan peran refined tanpa memiliki peran observer",
        options: ["Salah", "Benar", "Mungkin secara kebetulan", "Jika Mod menyukaimu"],
        explanation: "Benar — Anda bisa mendapatkan peran refined secara langsung tanpa perlu peran observer terlebih dahulu."
      },
      {
        id: 10,
        question: "Mana yang paling LANGSUNG terkait dengan arsitektur jaringan inti Optimum?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p adalah protokol jaringan inti Optimum — lapisan transmisi data P2P berbasis RLNC yang 6–20x lebih cepat dari Gossipsub."
      }
    ]
  },

  hi: {
    name: "हिन्दी",
    flag: "🇮🇳",
    questions: [
      {
        id: 1,
        question: "RLNC के साथ क्या जुड़ा है?",
        options: ["गवर्नेंस वोटिंग", "स्मार्ट कॉन्ट्रैक्ट एक्जीक्यूशन", "गोपनीयता", "लचीली रिकवरी"],
        explanation: "RLNC (रैंडम लीनियर नेटवर्क कोडिंग) लचीली रिकवरी के लिए जाना जाता है — नोड्स एन्कोडेड पैकेट के किसी भी संयोजन से डेटा पुनर्निर्माण कर सकते हैं।"
      },
      {
        id: 2,
        question: "धीमा प्रसार किस समस्या का कारण बन सकता है?",
        options: ["Rug pull", "टोकन आपूर्ति में वृद्धि", "वैलिडेटर की संख्या में कमी", "सिंक्रोनाइज़ेशन में देरी"],
        explanation: "धीमा प्रसार सिंक्रोनाइज़ेशन में देरी का कारण बनता है — नोड्स को नवीनतम स्थिति पर सहमत होने में अधिक समय लगता है।"
      },
      {
        id: 3,
        question: "RLNC के बारे में क्या सच नहीं है?",
        options: ["एन्कोडेड पैकेट संयोजन का उपयोग करता है", "पैकेट हानि के दौरान लचीलापन सुधारता है", "पैकेट को क्रम में आना आवश्यक है", "पुनः प्रेषण को कम करता है"],
        explanation: "RLNC को पैकेट के क्रम में आने की आवश्यकता नहीं है — यह इसके प्रमुख फायदों में से एक है।"
      },
      {
        id: 4,
        question: "Optimum के बारे में क्या सच नहीं है?",
        options: ["नेटवर्क दक्षता पर ध्यान देता है", "डेटा प्रसार में सुधार करता है", "ब्लॉकचेन कंसेंसस को बदलता है", "रियल-टाइम इंफ्रास्ट्रक्चर का समर्थन करता है"],
        explanation: "Optimum ब्लॉकचेन कंसेंसस को नहीं बदलता — यह मौजूदा कंसेंसस तंत्र के साथ काम करता है।"
      },
      {
        id: 5,
        question: "DeRAM के बारे में क्या सच नहीं है?",
        options: ["स्मार्ट कॉन्ट्रैक्ट को पूरी तरह बदलता है", "रियल-टाइम डेटा एक्सेस सक्षम करता है", "विकेंद्रीकृत मेमोरी परत के रूप में कार्य करता है", "वितरित सिस्टम का समर्थन करता है"],
        explanation: "DeRAM स्मार्ट कॉन्ट्रैक्ट को नहीं बदलता — यह एक विकेंद्रीकृत मेमोरी परत है जो मौजूदा ब्लॉकचेन इंफ्रास्ट्रक्चर की पूरक है।"
      },
      {
        id: 6,
        question: "Flexnodes के बारे में क्या सच नहीं है?",
        options: ["एन्कोडेड डेटा रिले करने में मदद करते हैं", "टोकन मिंटिंग के लिए जिम्मेदार हैं", "नेटवर्क प्रसार में भाग लेते हैं", "RLNC-आधारित ट्रांसमिशन का समर्थन करते हैं"],
        explanation: "Flexnodes टोकन मिंटिंग के लिए जिम्मेदार नहीं हैं — वे RLNC-कोडेड गॉसिप फ्रेम को एन्कोड, डिकोड और रिले करते हैं।"
      },
      {
        id: 7,
        question: "कम लेटेंसी वैलिडेटर की मदद करती है:",
        options: ["स्टेक कम करके", "डेटा तेजी से प्राप्त करके", "आपूर्ति बढ़ाकर", "नोड्स कम करके"],
        explanation: "कम लेटेंसी का मतलब है वैलिडेटर ब्लॉक और ट्रांजैक्शन तेजी से प्राप्त करते हैं — पुरस्कार पाने का प्रतिस्पर्धात्मक लाभ मिलता है।"
      },
      {
        id: 8,
        question: "Optimum के फोकस का हिस्सा क्या नहीं है?",
        options: ["डेटा मूवमेंट", "नेटवर्क स्केलेबिलिटी", "रियल-टाइम समन्वय", "टोकन इन्फ्लेशन मैकेनिक्स"],
        explanation: "Optimum डेटा मूवमेंट, नेटवर्क स्केलेबिलिटी और रियल-टाइम समन्वय पर ध्यान देता है — टोकन इन्फ्लेशन मैकेनिक्स इसके मिशन का हिस्सा नहीं है।"
      },
      {
        id: 9,
        question: "आप observer रोल के बिना refined रोल प्राप्त कर सकते हैं",
        options: ["गलत", "सही", "शायद संयोग से", "अगर Mod पसंद करे"],
        explanation: "सही — आप observer रोल के बिना सीधे refined रोल प्राप्त कर सकते हैं।"
      },
      {
        id: 10,
        question: "Optimum की मूल नेटवर्क आर्किटेक्चर से सबसे सीधे कौन जुड़ा है?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p Optimum का मूल नेटवर्क प्रोटोकॉल है — RLNC-संचालित P2P डेटा ट्रांसमिशन परत जो Gossipsub से 6–20 गुना तेज है।"
      }
    ]
  },

  zh: {
    name: "中文",
    flag: "🇨🇳",
    questions: [
      {
        id: 1,
        question: "哪项与RLNC相关？",
        options: ["治理投票", "智能合约执行", "隐私", "灵活恢复"],
        explanation: "RLNC（随机线性网络编码）以灵活恢复著称——节点可以从任意编码数据包组合中重建数据，即使在丢包情况下也能正常工作。"
      },
      {
        id: 2,
        question: "慢速传播会导致什么问题？",
        options: ["Rug pull", "代币供应增加", "验证者数量减少", "同步延迟"],
        explanation: "慢速传播会导致同步延迟——节点需要更长时间才能就最新状态达成一致，影响性能和验证者竞争力。"
      },
      {
        id: 3,
        question: "关于RLNC，哪项说法不正确？",
        options: ["使用编码数据包组合", "提高丢包时的弹性", "要求数据包按顺序到达", "减少重传"],
        explanation: "RLNC不要求数据包按顺序到达——这是其主要优势之一。任意编码数据包组合都可以重建原始数据。"
      },
      {
        id: 4,
        question: "关于Optimum，哪项说法不正确？",
        options: ["专注于网络效率", "改善数据传播", "取代区块链共识", "支持实时基础设施"],
        explanation: "Optimum不会取代区块链共识——它与现有共识机制协同工作，无需任何协议更改。"
      },
      {
        id: 5,
        question: "关于DeRAM，哪项说法不正确？",
        options: ["完全取代智能合约", "支持实时数据访问", "充当去中心化内存层", "支持分布式系统"],
        explanation: "DeRAM不会取代智能合约——它是一个去中心化内存层，作为现有区块链基础设施的补充。"
      },
      {
        id: 6,
        question: "关于Flexnodes，哪项说法不正确？",
        options: ["帮助中继编码数据", "负责代币铸造", "参与网络传播", "支持基于RLNC的传输"],
        explanation: "Flexnodes不负责代币铸造——它们对RLNC编码的gossip帧进行编码、解码和中继。"
      },
      {
        id: 7,
        question: "低延迟如何帮助验证者？",
        options: ["减少质押", "更快接收数据", "增加供应", "减少节点"],
        explanation: "低延迟意味着验证者更快地接收区块和交易——赋予他们捕获奖励和机会的竞争优势。"
      },
      {
        id: 8,
        question: "哪项不是Optimum的关注点？",
        options: ["数据移动", "网络可扩展性", "实时协调", "代币通胀机制"],
        explanation: "Optimum专注于数据移动、网络可扩展性和实时协调——代币通胀机制不是其核心使命的一部分。"
      },
      {
        id: 9,
        question: "您可以在没有observer角色的情况下获得refined角色",
        options: ["错误", "正确", "可能偶然获得", "如果Mod喜欢你"],
        explanation: "正确——您可以直接获得refined角色，无需先拥有observer角色。"
      },
      {
        id: 10,
        question: "哪项与Optimum核心网络架构最直接相关？",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p是Optimum的核心网络协议——基于RLNC的P2P数据传输层，比Gossipsub快6–20倍。"
      }
    ]
  },

  fil: {
    name: "Filipino",
    flag: "🇵🇭",
    questions: [
      {
        id: 1,
        question: "Alin ang nauugnay sa RLNC?",
        options: ["Pagboto sa governance", "Pagpapatupad ng smart contract", "Privacy", "Flexible na pagbawi"],
        explanation: "Ang RLNC (Random Linear Network Coding) ay kilala sa flexible na pagbawi — ang mga node ay maaaring i-reconstruct ang data mula sa anumang kombinasyon ng encoded na packets."
      },
      {
        id: 2,
        question: "Anong problema ang maaaring dulot ng mabagal na propagasyon?",
        options: ["Rug pull", "Pagtaas ng supply ng token", "Pagbaba ng bilang ng validator", "Naantalang synchronization"],
        explanation: "Ang mabagal na propagasyon ay nagdudulot ng naantalang synchronization — ang mga node ay nangangailangan ng mas matagal na panahon upang sumang-ayon sa pinakabagong estado."
      },
      {
        id: 3,
        question: "Alin ang HINDI totoo tungkol sa RLNC?",
        options: ["Gumagamit ng encoded packet combinations", "Pinapabuti ang katatagan sa panahon ng packet loss", "Kinakailangan ang pagdating ng packets sa pagkakasunud-sunod", "Binabawasan ang mga retransmission"],
        explanation: "Ang RLNC ay HINDI nangangailangan ng mga packet na dumating sa pagkakasunud-sunod — ito ay isa sa mga pangunahing kalamangan nito."
      },
      {
        id: 4,
        question: "Alin ang HINDI totoo tungkol sa Optimum?",
        options: ["Nakatuon sa kahusayan ng network", "Pinapabuti ang propagasyon ng data", "Pinapalitan ang blockchain consensus", "Sinusuportahan ang real-time na imprastraktura"],
        explanation: "Ang Optimum ay HINDI pinapalitan ang blockchain consensus — ito ay gumagana kasabay ng mga umiiral na mekanismo ng consensus nang walang anumang pagbabago sa protokol."
      },
      {
        id: 5,
        question: "Alin ang HINDI totoo tungkol sa DeRAM?",
        options: ["Ganap na pinapalitan ang mga smart contract", "Nagbibigay-daan sa real-time na pag-access sa data", "Gumaganap bilang desentralisadong memory layer", "Sinusuportahan ang mga distributed system"],
        explanation: "Ang DeRAM ay HINDI pinapalitan ang mga smart contract — ito ay isang desentralisadong memory layer na nagpupunan sa umiiral na blockchain infrastructure."
      },
      {
        id: 6,
        question: "Alin ang HINDI totoo tungkol sa Flexnodes?",
        options: ["Tumutulong sa pag-relay ng encoded data", "Responsable sa token minting", "Lumalahok sa network propagation", "Sinusuportahan ang RLNC-based na transmission"],
        explanation: "Ang mga Flexnode ay HINDI responsable sa token minting — nag-e-encode, nagde-decode, at nag-ri-relay sila ng RLNC-coded na gossip frames."
      },
      {
        id: 7,
        question: "Ang mababang latency ay tumutulong sa mga validator sa pamamagitan ng:",
        options: ["Pagbabawas ng stake", "Mas mabilis na pagtanggap ng data", "Pagdaragdag ng supply", "Pagbabawas ng mga node"],
        explanation: "Ang mababang latency ay nangangahulugang mas mabilis na natanggap ng mga validator ang mga bloke at transaksyon — nagbibigay ng kompetitibong kalamangan."
      },
      {
        id: 8,
        question: "Alin ang HINDI bahagi ng pokus ng Optimum?",
        options: ["Paggalaw ng data", "Scalability ng network", "Real-time na koordinasyon", "Mekanika ng token inflation"],
        explanation: "Ang Optimum ay nakatuon sa paggalaw ng data, scalability ng network, at real-time na koordinasyon — ang mekanika ng token inflation ay hindi bahagi ng pangunahing misyon nito."
      },
      {
        id: 9,
        question: "Maaari kang makakuha ng refined role nang wala ang observer role",
        options: ["Mali", "Tama", "Marahil sa pagkakataon", "Kung gusto ka ng Mod"],
        explanation: "Tama — maaari kang direktang makakuha ng refined role nang hindi kailangan ang observer role."
      },
      {
        id: 10,
        question: "Alin ang pinaka-DIREKTANG nauugnay sa pangunahing network architecture ng Optimum?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "Ang mump2p ang pangunahing network protocol ng Optimum — ang RLNC-powered P2P data transmission layer na 6–20x mas mabilis kaysa sa Gossipsub."
      }
    ]
  },

  uk: {
    name: "Українська",
    flag: "🇺🇦",
    questions: [
      {
        id: 1,
        question: "Що пов'язане з RLNC?",
        options: ["Голосування з управління", "Виконання смарт-контрактів", "Конфіденційність", "Гнучке відновлення"],
        explanation: "RLNC (випадкове лінійне мережеве кодування) відоме гнучким відновленням — вузли можуть відновлювати дані з будь-якої комбінації закодованих пакетів."
      },
      {
        id: 2,
        question: "Яку проблему може спричинити повільне поширення?",
        options: ["Rug pull", "Збільшення пропозиції токенів", "Зменшення кількості валідаторів", "Затримка синхронізації"],
        explanation: "Повільне поширення спричиняє затримку синхронізації — вузлам потрібно більше часу для узгодження останнього стану."
      },
      {
        id: 3,
        question: "Що НЕ є правдою щодо RLNC?",
        options: ["Використовує закодовані комбінації пакетів", "Покращує стійкість при втраті пакетів", "Вимагає надходження пакетів у порядку", "Зменшує повторні передачі"],
        explanation: "RLNC НЕ вимагає надходження пакетів у порядку — це одна з ключових переваг."
      },
      {
        id: 4,
        question: "Що НЕ є правдою щодо Optimum?",
        options: ["Зосереджується на ефективності мережі", "Покращує поширення даних", "Замінює консенсус блокчейну", "Підтримує інфраструктуру реального часу"],
        explanation: "Optimum НЕ замінює консенсус блокчейну — він працює поряд з існуючими механізмами консенсусу без змін протоколу."
      },
      {
        id: 5,
        question: "Що НЕ є правдою щодо DeRAM?",
        options: ["Повністю замінює смарт-контракти", "Забезпечує доступ до даних у реальному часі", "Діє як децентралізований рівень пам'яті", "Підтримує розподілені системи"],
        explanation: "DeRAM НЕ замінює смарт-контракти — це децентралізований рівень пам'яті, що доповнює існуючу інфраструктуру блокчейну."
      },
      {
        id: 6,
        question: "Що НЕ є правдою щодо Flexnodes?",
        options: ["Допомагають передавати закодовані дані", "Відповідають за випуск токенів", "Беруть участь у поширенні мережею", "Підтримують передачу на основі RLNC"],
        explanation: "Flexnodes НЕ відповідають за випуск токенів — вони кодують, декодують і передають закодовані RLNC-кадри."
      },
      {
        id: 7,
        question: "Низька затримка допомагає валідаторам:",
        options: ["Зменшувати стейк", "Отримувати дані швидше", "Збільшувати пропозицію", "Зменшувати кількість вузлів"],
        explanation: "Низька затримка означає, що валідатори отримують блоки та транзакції швидше — даючи конкурентну перевагу для отримання винагород."
      },
      {
        id: 8,
        question: "Що НЕ є частиною фокусу Optimum?",
        options: ["Переміщення даних", "Масштабованість мережі", "Координація в реальному часі", "Механіка інфляції токенів"],
        explanation: "Optimum зосереджується на переміщенні даних, масштабованості мережі та координації в реальному часі — механіка інфляції токенів не є частиною його місії."
      },
      {
        id: 9,
        question: "Ви можете отримати роль refined без ролі observer",
        options: ["Ні", "Так", "Можливо, випадково", "Якщо Mod схвалить"],
        explanation: "Так — ви можете отримати роль refined безпосередньо, без необхідності мати роль observer."
      },
      {
        id: 10,
        question: "Що найбільш БЕЗПОСЕРЕДНЬО пов'язане з основною мережевою архітектурою Optimum?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p — основний мережевий протокол Optimum — рівень передачі даних P2P на базі RLNC, який працює в 6–20 разів швидше за Gossipsub."
      }
    ]
  },

  ko: {
    name: "한국어",
    flag: "🇰🇷",
    questions: [
      {
        id: 1,
        question: "RLNC와 관련된 것은 무엇입니까?",
        options: ["거버넌스 투표", "스마트 계약 실행", "개인 정보 보호", "유연한 복구"],
        explanation: "RLNC(무작위 선형 네트워크 코딩)는 유연한 복구로 알려져 있습니다 — 노드는 패킷 손실이 있어도 인코딩된 패킷의 어떤 조합에서도 데이터를 재구성할 수 있습니다."
      },
      {
        id: 2,
        question: "느린 전파는 어떤 문제를 일으킬 수 있습니까?",
        options: ["Rug pull", "토큰 공급 증가", "검증자 수 감소", "동기화 지연"],
        explanation: "느린 전파는 동기화 지연을 유발합니다 — 노드가 최신 상태에 동의하는 데 더 오랜 시간이 걸립니다."
      },
      {
        id: 3,
        question: "RLNC에 대해 사실이 아닌 것은?",
        options: ["인코딩된 패킷 조합을 사용합니다", "패킷 손실 시 복원력을 향상시킵니다", "패킷이 순서대로 도착해야 합니다", "재전송을 줄입니다"],
        explanation: "RLNC는 패킷이 순서대로 도착할 필요가 없습니다 — 이것이 주요 장점 중 하나입니다."
      },
      {
        id: 4,
        question: "Optimum에 대해 사실이 아닌 것은?",
        options: ["네트워크 효율성에 집중합니다", "데이터 전파를 개선합니다", "블록체인 합의를 대체합니다", "실시간 인프라를 지원합니다"],
        explanation: "Optimum은 블록체인 합의를 대체하지 않습니다 — 프로토콜 변경 없이 기존 합의 메커니즘과 함께 작동합니다."
      },
      {
        id: 5,
        question: "DeRAM에 대해 사실이 아닌 것은?",
        options: ["스마트 계약을 완전히 대체합니다", "실시간 데이터 액세스를 가능하게 합니다", "탈중앙화된 메모리 레이어 역할을 합니다", "분산 시스템을 지원합니다"],
        explanation: "DeRAM은 스마트 계약을 대체하지 않습니다 — 기존 블록체인 인프라를 보완하는 탈중앙화된 메모리 레이어입니다."
      },
      {
        id: 6,
        question: "Flexnodes에 대해 사실이 아닌 것은?",
        options: ["인코딩된 데이터 릴레이를 도웁니다", "토큰 발행을 담당합니다", "네트워크 전파에 참여합니다", "RLNC 기반 전송을 지원합니다"],
        explanation: "Flexnodes는 토큰 발행을 담당하지 않습니다 — RLNC 코딩된 가십 프레임을 인코딩, 디코딩 및 릴레이합니다."
      },
      {
        id: 7,
        question: "낮은 지연 시간은 검증자에게 어떻게 도움이 됩니까?",
        options: ["스테이크 감소", "더 빠른 데이터 수신", "공급 증가", "노드 감소"],
        explanation: "낮은 지연 시간은 검증자가 블록과 거래를 더 빠르게 받는다는 것을 의미합니다 — 보상과 기회를 잡기 위한 경쟁 우위를 제공합니다."
      },
      {
        id: 8,
        question: "Optimum의 초점에 포함되지 않는 것은?",
        options: ["데이터 이동", "네트워크 확장성", "실시간 조정", "토큰 인플레이션 메커니즘"],
        explanation: "Optimum은 데이터 이동, 네트워크 확장성, 실시간 조정에 집중합니다 — 토큰 인플레이션 메커니즘은 핵심 미션의 일부가 아닙니다."
      },
      {
        id: 9,
        question: "observer 역할 없이 refined 역할을 얻을 수 있습니다",
        options: ["거짓", "참", "우연히 가능", "Mod가 좋아하면"],
        explanation: "참 — observer 역할 없이 직접 refined 역할을 얻을 수 있습니다."
      },
      {
        id: 10,
        question: "Optimum의 핵심 네트워크 아키텍처와 가장 직접적으로 관련된 것은?",
        options: ["Flexnodes", "DeRAM", "RLNC", "mump2p"],
        explanation: "mump2p는 Optimum의 핵심 네트워크 프로토콜입니다 — Gossipsub보다 6–20배 빠른 RLNC 기반 P2P 데이터 전송 레이어입니다."
      }
    ]
  }
};

export default translations;

// UI string translations for each language
export const ui = {
  en: { communityKnowledgeQuiz: "Community Knowledge Quiz", enterName: "Enter your name...", joinGame: "JOIN GAME", iAmHost: "I am the host", hostPassword: "HOST PASSWORD", enterPassword: "Enter host password...", loginAsHost: "LOGIN AS HOST", cancel: "Cancel", enterNameFirst: "Enter your name first", hostDashboard: "Host Dashboard", youAreHost: "You are the host", gameSettings: "GAME SETTINGS", numberOfQuestions: "Number of questions", categories: "Categories (blank = all)", startGame: "START GAME ▶", players: "PLAYERS", waitingForHost: "Waiting for the host to start...", inTheRoom: "IN THE ROOM", getReady: "GET READY", gameStarting: "Game starting...", you: "you" },
  vi: { communityKnowledgeQuiz: "Câu Đố Kiến Thức Cộng Đồng", enterName: "Nhập tên của bạn...", joinGame: "THAM GIA", iAmHost: "Tôi là người dẫn", hostPassword: "MẬT KHẨU HOST", enterPassword: "Nhập mật khẩu...", loginAsHost: "ĐĂNG NHẬP HOST", cancel: "Hủy", enterNameFirst: "Nhập tên trước", hostDashboard: "Bảng Điều Khiển Host", youAreHost: "Bạn là host", gameSettings: "CÀI ĐẶT TRÒ CHƠI", numberOfQuestions: "Số câu hỏi", categories: "Danh mục (trống = tất cả)", startGame: "BẮT ĐẦU ▶", players: "NGƯỜI CHƠI", waitingForHost: "Chờ host bắt đầu...", inTheRoom: "TRONG PHÒNG", getReady: "CHUẨN BỊ", gameStarting: "Trò chơi sắp bắt đầu...", you: "bạn" },
  ru: { communityKnowledgeQuiz: "Викторина сообщества", enterName: "Введите ваше имя...", joinGame: "ПРИСОЕДИНИТЬСЯ", iAmHost: "Я ведущий", hostPassword: "ПАРОЛЬ ХОСТА", enterPassword: "Введите пароль...", loginAsHost: "ВОЙТИ КАК ХОСТ", cancel: "Отмена", enterNameFirst: "Сначала введите имя", hostDashboard: "Панель ведущего", youAreHost: "Вы ведущий", gameSettings: "НАСТРОЙКИ ИГРЫ", numberOfQuestions: "Количество вопросов", categories: "Категории (пусто = все)", startGame: "НАЧАТЬ ИГРУ ▶", players: "ИГРОКИ", waitingForHost: "Ожидание ведущего...", inTheRoom: "В КОМНАТЕ", getReady: "ПРИГОТОВЬТЕСЬ", gameStarting: "Игра начинается...", you: "вы" },
  bn: { communityKnowledgeQuiz: "কমিউনিটি কুইজ", enterName: "আপনার নাম লিখুন...", joinGame: "যোগ দিন", iAmHost: "আমি হোস্ট", hostPassword: "হোস্ট পাসওয়ার্ড", enterPassword: "পাসওয়ার্ড লিখুন...", loginAsHost: "হোস্ট হিসেবে লগইন", cancel: "বাতিল", enterNameFirst: "আগে নাম লিখুন", hostDashboard: "হোস্ট ড্যাশবোর্ড", youAreHost: "আপনি হোস্ট", gameSettings: "গেম সেটিংস", numberOfQuestions: "প্রশ্নের সংখ্যা", categories: "বিভাগ (খালি = সব)", startGame: "গেম শুরু ▶", players: "খেলোয়াড়", waitingForHost: "হোস্টের জন্য অপেক্ষা...", inTheRoom: "রুমে আছেন", getReady: "প্রস্তুত হন", gameStarting: "গেম শুরু হচ্ছে...", you: "আপনি" },
  id: { communityKnowledgeQuiz: "Kuis Pengetahuan Komunitas", enterName: "Masukkan nama Anda...", joinGame: "BERGABUNG", iAmHost: "Saya adalah host", hostPassword: "KATA SANDI HOST", enterPassword: "Masukkan kata sandi...", loginAsHost: "MASUK SEBAGAI HOST", cancel: "Batal", enterNameFirst: "Masukkan nama terlebih dahulu", hostDashboard: "Dasbor Host", youAreHost: "Anda adalah host", gameSettings: "PENGATURAN PERMAINAN", numberOfQuestions: "Jumlah pertanyaan", categories: "Kategori (kosong = semua)", startGame: "MULAI PERMAINAN ▶", players: "PEMAIN", waitingForHost: "Menunggu host memulai...", inTheRoom: "DI RUANGAN", getReady: "BERSIAPLAH", gameStarting: "Permainan dimulai...", you: "kamu" },
  hi: { communityKnowledgeQuiz: "सामुदायिक ज्ञान प्रश्नोत्तरी", enterName: "अपना नाम दर्ज करें...", joinGame: "जॉइन करें", iAmHost: "मैं होस्ट हूं", hostPassword: "होस्ट पासवर्ड", enterPassword: "पासवर्ड दर्ज करें...", loginAsHost: "होस्ट के रूप में लॉगिन", cancel: "रद्द करें", enterNameFirst: "पहले नाम दर्ज करें", hostDashboard: "होस्ट डैशबोर्ड", youAreHost: "आप होस्ट हैं", gameSettings: "गेम सेटिंग्स", numberOfQuestions: "प्रश्नों की संख्या", categories: "श्रेणियां (खाली = सभी)", startGame: "गेम शुरू करें ▶", players: "खिलाड़ी", waitingForHost: "होस्ट का इंतजार...", inTheRoom: "रूम में", getReady: "तैयार हो जाएं", gameStarting: "गेम शुरू हो रहा है...", you: "आप" },
  zh: { communityKnowledgeQuiz: "社区知识竞赛", enterName: "输入您的名字...", joinGame: "加入游戏", iAmHost: "我是主持人", hostPassword: "主持人密码", enterPassword: "输入密码...", loginAsHost: "以主持人身份登录", cancel: "取消", enterNameFirst: "请先输入姓名", hostDashboard: "主持人面板", youAreHost: "您是主持人", gameSettings: "游戏设置", numberOfQuestions: "题目数量", categories: "类别（空白=全部）", startGame: "开始游戏 ▶", players: "玩家", waitingForHost: "等待主持人开始...", inTheRoom: "在房间内", getReady: "准备好了", gameStarting: "游戏即将开始...", you: "你" },
  fil: { communityKnowledgeQuiz: "Community Knowledge Quiz", enterName: "Ilagay ang iyong pangalan...", joinGame: "SUMALI", iAmHost: "Ako ang host", hostPassword: "HOST PASSWORD", enterPassword: "Ilagay ang password...", loginAsHost: "MAG-LOGIN BILANG HOST", cancel: "Kanselahin", enterNameFirst: "Ilagay muna ang pangalan", hostDashboard: "Host Dashboard", youAreHost: "Ikaw ang host", gameSettings: "MGA SETTING NG LARO", numberOfQuestions: "Bilang ng mga tanong", categories: "Mga kategorya (blangko = lahat)", startGame: "SIMULAN ANG LARO ▶", players: "MGA MANLALARO", waitingForHost: "Naghihintay sa host...", inTheRoom: "SA SILID", getReady: "MAGHANDA", gameStarting: "Nagsisimula na ang laro...", you: "ikaw" },
  uk: { communityKnowledgeQuiz: "Вікторина спільноти", enterName: "Введіть ваше ім'я...", joinGame: "ПРИЄДНАТИСЯ", iAmHost: "Я ведучий", hostPassword: "ПАРОЛЬ ВЕДУЧОГО", enterPassword: "Введіть пароль...", loginAsHost: "УВІЙТИ ЯК ВЕДУЧИЙ", cancel: "Скасувати", enterNameFirst: "Спочатку введіть ім'я", hostDashboard: "Панель ведучого", youAreHost: "Ви ведучий", gameSettings: "НАЛАШТУВАННЯ ГРИ", numberOfQuestions: "Кількість питань", categories: "Категорії (порожньо = всі)", startGame: "ПОЧАТИ ГРУ ▶", players: "ГРАВЦІ", waitingForHost: "Очікування ведучого...", inTheRoom: "У КІМНАТІ", getReady: "ПРИГОТУЙТЕСЬ", gameStarting: "Гра починається...", you: "ви" },
  ko: { communityKnowledgeQuiz: "커뮤니티 지식 퀴즈", enterName: "이름을 입력하세요...", joinGame: "참가하기", iAmHost: "나는 호스트입니다", hostPassword: "호스트 비밀번호", enterPassword: "비밀번호 입력...", loginAsHost: "호스트로 로그인", cancel: "취소", enterNameFirst: "먼저 이름을 입력하세요", hostDashboard: "호스트 대시보드", youAreHost: "당신이 호스트입니다", gameSettings: "게임 설정", numberOfQuestions: "문제 수", categories: "카테고리 (빈칸 = 전체)", startGame: "게임 시작 ▶", players: "플레이어", waitingForHost: "호스트를 기다리는 중...", inTheRoom: "방에 있는 사람", getReady: "준비하세요", gameStarting: "게임 시작 중...", you: "나" },
};
