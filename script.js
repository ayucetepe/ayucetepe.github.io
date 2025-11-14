document.addEventListener('DOMContentLoaded', () => {

    // --- DATA (Değişiklik yok) ---
    const langData = {
        en: { name: "Aziz Yucetepe", title: "Welding Supervisor & Welding Inspector", location: "Izmir, TR / Baku, AZ", aboutTitle: "About Me", aboutText: "A results-driven professional with over 30 years of significant experience in welding and fabrication within the Petroleum & Gas, Power, and Petrochemical industries. Proven expertise in supervising, inspecting, and training on welding operations for both offshore/onshore platforms, power stations, and refineries. Fully proficient in international codes and standards (ASME, API, EN), dedicated to maximizing quality and efficiency in complex projects.", skillsTitle: "Technical Skills", skillsCat1: "Welding Processes & Techniques", skillsCat2: "Standards & Codes", skillsCat3: "Material Knowledge", experienceTitle: "Work Experience", certsTitle: "Certificates & Training", certsCat1: "Certificates", twiMember: "TWI Member (Since 2009)", certsCat2: "Key Trainings", referencesTitle: "References" },
        tr: { name: "Aziz Yücetepe", title: "Kaynak Süpervizörü & Kaynak Enspektörü", location: "İzmir, TR / Bakü, AZ", aboutTitle: "Hakkımda", aboutText: "Petrol & Gaz, Enerji ve Petrokimya sektörlerinde 30 yılı aşkın kaynak ve imalat tecrübesine sahip, sonuç odaklı bir profesyonel. Offshore/onshore platformlar, enerji santralleri ve rafinerilerde kaynak operasyonları, denetim, süpervizyon ve eğitim alanlarında kanıtlanmış uzmanlık. Uluslararası kod ve standartlara (ASME, API, EN) tam hakimiyetle, karmaşık projelerde kalite ve verimliliği en üst düzeye çıkarmayı hedefler.", skillsTitle: "Teknik Yetkinlikler", skillsCat1: "Kaynak Prosesleri ve Teknikleri", skillsCat2: "Standartlar ve Kodlar", skillsCat3: "Malzeme Bilgisi", experienceTitle: "İş Deneyimi", certsTitle: "Sertifikalar ve Eğitimler", certsCat1: "Sertifikalar", twiMember: "TWI Üyesi (2009'dan beri)", certsCat2: "Önemli Eğitimler", referencesTitle: "Referanslar" }
    };
    const experienceData = [ { date: { en: "2022 - 2024", tr: "2022 - 2024" }, title: { en: "Welding Supervisor", tr: "Kaynak Süpervizörü" }, company: "HAOR Modernization Project | ILK Construction", location: "Baku, Azerbaijan", desc: { en: `<ul><li>Supervision on Piping Fabrication & Erection welding at HAOR.</li><li>Responsible for organizing material and personnel for all welding activities.</li><li>Coordination with construction management and cooperation with Quality control.</li><li>Reporting compilation of all final QA/QC, NDT and Progress Follow-up status.</li></ul>`, tr: `<ul><li>HAOR'da Boru İmalat ve Montaj kaynak işlerinin denetimi.</li><li>Tüm kaynak faaliyetleri için malzeme ve personel organizasyonundan sorumlu.</li><li>İnşaat yönetimi ve Kalite kontrol ile koordinasyon.</li><li>Tüm nihai QA/QC, NDT ve İlerleme Takip durumlarının raporlanması.</li></ul>` } }, { date: { en: "2017 - 2022", tr: "2017 - 2022" }, title: { en: "Welding Supervisor", tr: "Kaynak Süpervizörü" }, company: "Multiple Projects (HAOR, Socar, Azerikimya) | Gomag Energy, Ustay Construction", location: "Baku & Sumqayit, Azerbaijan", desc: { en: `<ul><li>Supervised piping fabrication and erection welding across major petrochemical projects.</li><li>Managed welding teams and ensured compliance with approved procedures (SMAW, GTAW).</li><li>Coordinated with quality control for all welding concerns and inspections.</li><li>Compiled and reported final QA/QC and NDT documentation.</li></ul>`, tr: `<ul><li>Büyük petrokimya projelerinde boru imalat ve montaj kaynaklarını denetledi.</li><li>Kaynak ekiplerini yönetti ve onaylı prosedürlere (SMAW, GTAW) uygunluğu sağladı.</li><li>Tüm kaynak konuları ve denetimleri için kalite kontrol ile koordine oldu.</li><li>Nihai QA/QC ve NDT dokümantasyonunu derledi ve raporladı.</li></ul>` } }, { date: { en: "2014 - 2017", tr: "2014 - 2017" }, title: { en: "Welding Supervisor", tr: "Kaynak Süpervizörü" }, company: "Shah Deniz 2 Platforms | Tekfen Construction", location: "Baku, Azerbaijan", desc: { en: `<ul><li>Supervision on Piping Fabrication & Erection welding at SD 2 Topside.</li><li>Responsible for organizing material and personnel for all welding activities (piping and plates).</li><li>Coordination with construction management and cooperation with Quality control.</li><li>Supervision of all the welders (SMAW, GTAW, GS-FCAW) during the performance of the works.</li></ul>`, tr: `<ul><li>SD 2 Topside'da Boru İmalat ve Montaj kaynak işlerinin denetimi.</li><li>Tüm kaynak faaliyetleri (boru ve plaka) için malzeme ve personel organizasyonu.</li><li>İnşaat yönetimi ve Kalite kontrol ile koordinasyon.</li><li>İşlerin performansı sırasında tüm kaynakçıların (SMAW, GTAW, GS-FCAW) denetimi.</li></ul>` } }, { date: { en: "1991 - 2014", tr: "1991 - 2014" }, title: { en: "Welder / Welding Foreman / Supervisor", tr: "Kaynakçı / Kaynak Formeni / Süpervizör" }, company: "Various Key Projects | Tekfen, MQS, Epro, TML Borova", location: "Turkey, Azerbaijan, Uzbekistan, Belarus", desc: { en: `<ul><li>Started as a multi-coded welder, progressed to Foreman and Supervisor roles.</li><li>Worked on major refinery, power plant, and pipeline projects.</li><li>Gained hands-on experience with GTAW, SMAW, FCAW on materials like CS, SS, Duplex, P91, P22.</li><li>Supervised drilling borehole piping, storage tank erection, and topside fabrication.</li></ul>`, tr: `<ul><li>Çok kodlu bir kaynakçı olarak başlayıp Formen ve Süpervizör pozisyonlarına yükseldi.</li><li>Büyük rafineri, enerji santrali ve boru hattı projelerinde çalıştı.</li><li>CS, SS, Duplex, P91, P22 gibi malzemelerde GTAW, SMAW, FCAW ile uygulamalı deneyim kazandı.</li><li>Sondaj kuyusu borulaması, depolama tankı montajı ve platform imalatını denetledi.</li></ul>` } } ];
    const referencesData = [ { name: "ENGIN GUNGORMUS", title: { en: "Projects Director", tr: "Proje Direktörü" }, phone: "+90 530 425 17 43" }, { name: "ÇAGATAY ÇAGLAYAN", title: { en: "Ustay Construction, Country Manager", tr: "Ustay Construction, Ülke Müdürü" }, phone: "+7 926 942 89 62" }, { name: "ALI GURGOZ", title: { en: "Gomag Energy, General Manager", tr: "Gomag Energy, Genel Müdür" }, phone: "+994 50 209 67 50" }, { name: "MUSA KIRCI", title: { en: "BCC Group, Project Director", tr: "BCC Group, Proje Direktörü" }, phone: "+994 51 947 31 34" }, { name: "OZGUR YILDIZ", title: { en: "Tekfen Construction, Piping Manager", tr: "Tekfen Construction, Boru Müdürü" }, phone: "+994 50 332 03 56" }, { name: "ALI RIZA TACYILDIZ", title: { en: "ILK Construction, Const. Manager", tr: "ILK Construction, İnşaat Müdürü" }, phone: "+90 538 261 39 20" }, ];

    // --- ELEMENTS ---
    const themeToggle = document.getElementById('theme-toggle');
    const timelineContainer = document.querySelector('#experience .timeline');
    const referencesContainer = document.querySelector('#references .references-grid');

    // --- THEME SWITCHER ---
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', currentTheme === 'light');
    themeToggle.innerHTML = currentTheme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        let theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        themeToggle.innerHTML = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', theme);
    });

    // --- YENİ DİL SEÇİCİ MANTIĞI ---
    const langSelector = document.querySelector('.language-selector');
    const selectedLangText = document.getElementById('selected-lang-text');
    const langOptions = document.querySelector('.language-options');

    langSelector.addEventListener('click', () => {
        langSelector.classList.toggle('open');
    });

    langOptions.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            langSelector.classList.remove('open');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('open');
        }
    });

    let currentLang = localStorage.getItem('language') || 'en';

    const setLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('language', lang);

        // Update static texts
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            el.innerHTML = langData[lang][key] || el.innerHTML;
        });

        // Update dropdown text
        selectedLangText.textContent = lang === 'en' ? 'English' : 'Türkçe';

        // Populate dynamic content
        populateExperience(lang);
        populateReferences(lang);
    };
    // --- YENİ DİL SEÇİCİ MANTIĞI SONU ---

    // --- DYNAMIC CONTENT POPULATION (Değişiklik yok) ---
    const populateExperience = (lang) => {
        timelineContainer.innerHTML = '';
        experienceData.forEach(item => {
            const li = document.createElement('li');
            li.className = 'timeline-item';
            li.innerHTML = `<div class="timeline-dot"></div><span class="timeline-date">${item.date[lang]}</span><h4 class="timeline-title">${item.title[lang]}</h4><span class="timeline-company">${item.company} | ${item.location}</span><div class="timeline-text">${item.desc[lang]}</div>`;
            timelineContainer.appendChild(li);
        });
    };
    const populateReferences = (lang) => {
        referencesContainer.innerHTML = '';
        referencesData.forEach(ref => {
            const div = document.createElement('div');
            div.className = 'reference-card';
            div.innerHTML = `<h4>${ref.name}</h4><p>${ref.title[lang]}</p><p class="phone">${ref.phone}</p>`;
            referencesContainer.appendChild(div);
        });
    };

    // --- INITIAL LOAD ---
    setLanguage(currentLang);
});