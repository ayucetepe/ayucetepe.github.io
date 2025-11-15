// --- VERİ BÖLÜMÜ ---

const translations = {
    en: {
        pageTitle: "Aziz Yucetepe",
        jobTitle: "Welding Supervisor, Welding Inspector",
        contactTitle: "CONTACT",
        skillsTitle: "SKILLS",
        trainingTitle: "TRAINING",
        certificatesTitle: "CERTIFICATES",
        downloadCV: "Download CV",
        aboutMeTitle: "ABOUT ME",
        aboutMeText: `Petroleum & Gas Industry - Power Industry - Petrochemical industry. Significant exp. gained in the welding and fabrication industry. Working Offshore / onshore Power station, petrochemical plant, oil refineries at fabrication yard on green field sites and live Installation. Welding Opr. / Welding Inspector / Supervisor / Trainer (32 Years), taking full responsibility for Production welds made on sites. Deployment of welding crews and compliance of approved welding Procedure and protocols. Over see and ensure the quality of workmanship as per client specifications. Calling up intermediate and final N.D.E carry out welder qualification test using approved welding procedure in adherence to client specifications in conjunction with ASME IX / B31.3 EN 287-288 EEMUA 158. API 1104 BS 4515 advanced safety Audits, stop cards and Risk Assessment. Multi Coded Welder (15 Years) with good hands on experience on the following processes. SMAW, GTAW, SAW, GS-FCAW and fully automated techniques,using CSR and wire fed application on Polysoude and Dimetrics orbital welding heads.`,
        techSkillsTitle: "TECHNICAL SKILLS",
        experienceTitle: "WORK EXPERIENCE",
        referencesTitle: "REFERENCES",
        skills: { Outlook: 90, Word: 80, Excel: 70, PowerPoint: 60, CSS: 50, HTML: 50 },
        trainingList: [
            "Permit to work Supervisor BP.",
            "Advanced Safety Auditor BP.",
            "Behavioral Safety Auditor V.KSI Ltd.",
            "Constr,Quality Mgmt Sys. TUV.",
            "EN 473 RT,PT II Crs attn. TUV.",
            "Welding Insp Crs.CSWIP - TWI.",
            "3.1 welding inspection course."
        ],
        certificatesList: [
            '<div class="cert-group">MEMBERSHIP</div>',
            "Member of TWI 2009",
            '<div class="cert-group">NDE</div>',
            "DPI Level-II (EN-473),TUV qualif. Cert. 2008.",
            "RT Level-II (ASNT-CP-189) qualif. Cert. 2013.",
            '<div class="cert-group">INSPECTOR</div>',
            "3.1 weld. inspector cert. 2021"
        ],
        techSkillsList: [
            "Experience gained in power plants, refineries, oil & gas processes plants, on-shore gas & oil pipelines, process piping, low pressure & storage tanks, and heavy steel structures.",
            "Deep Exp. in fab. and erection of piping, boilers, pressure vssls, furnaces, tanks, heaters and structural steels.",
            "Expert skills in preparation of spooling, weld map, pressure test packs, piping & weld log book and fab and erection progress follow up records.",
            "Sound exp. with International codes and standards; ISO,DIN,EN,BS-ASME, ASTM, ANSI, ASNT & API.",
            "Exceptional knowledge of multi-national companies specifications like BP, Exxon Mobil, Fluor, Technip, TR, Mitsubishi.",
            "Experience in quality and welding inspection, NDT testing (VT,PT) and welder's qualification.",
            "Closely worked with SMAW, GTAW, GMAW / GS-FCAW, SAW and fusion cutting processes with their components and consumables.",
            "Experience in welding and quality inspection of Carbon Steels, Low Temperature CS, SS, Duplex and Super Duplex Stainless steels, Alloy steels and their welding consumables.",
            "Upper Intermediate verbal & written commun. skills in English & native in Turkish & fluent in Azerbaijani."
        ],
    },
    tr: {
        pageTitle: "Aziz Yucetepe",
        jobTitle: "Kaynak Süpervizörü, Kaynak Enspektörü",
        contactTitle: "İLETİŞİM",
        skillsTitle: "YETENEKLER",
        trainingTitle: "EĞİTİMLER",
        certificatesTitle: "SERTİFİKALAR",
        downloadCV: "CV'yi İndir",
        aboutMeTitle: "HAKKIMDA",
        aboutMeText: `Petrol ve Gaz Endüstrisi - Enerji Endüstrisi - Petrokimya Endüstrisi. Kaynak ve imalat endüstrisinde önemli deneyim kazanılmıştır. Açık deniz (Offshore) / kara (onshore) enerji santralleri, petrokimya tesisleri, petrol rafinerileri, imalat sahaları ve canlı kurulumlarda çalışılmıştır. Kaynak Operatörü / Kaynak Enspektörü / Süpervizör / Eğitmen (32 Yıl) olarak, sahalarda yapılan üretim kaynaklarının tüm sorumluluğunu üstlenmiş; kaynak ekiplerinin görevlendirilmesi ve onaylanmış kaynak prosedür ve protokollerine uygunluğun sağlanması konularında yetkinlik kazanılmıştır. Müşteri şartnamelerine göre işçilik kalitesini denetlemiş ve güvence altına almıştır. ASME IX / B31.3 EN 287-288 EEMUA 158. API 1104 BS 4515 standartlarına uygun olarak, müşteri şartnamelerine bağlı kalarak onaylı kaynak prosedürünü kullanarak ara ve son N.D.E. kontrollerini talep etmiş ve kaynakçı yeterlilik testlerini gerçekleştirmiştir. İleri düzey güvenlik denetimleri, iş durdurma kartları ve risk değerlendirmesi konularında tecrübelidir. Çok Yönlü Sertifikalı Kaynakçı (15 Yıl) olarak; SMAW, GTAW, SAW, GS-FCAW gibi proseslerde ve Polysoude ve Dimetrics orbital kaynak kafaları kullanılarak yapılan tam otomatik tekniklerde (CSR ve tel beslemeli uygulamalar) yüksek tecrübeye sahiptir.`,
        techSkillsTitle: "TEKNİK BECERİLER",
        experienceTitle: "İŞ DENEYİMİ",
        referencesTitle: "REFERANSLAR",
        skills: { Outlook: 90, Word: 80, Excel: 70, PowerPoint: 60, CSS: 50, HTML: 50 },
        trainingList: [
            "Çalışma İzni Süpervizörü BP.",
            "İleri Düzey Güvenlik Denetçisi BP.",
            "Davranışsal Güvenlik Denetçisi V.KSI Ltd.",
            "İnşaat, Kalite Yönetim Sis. TUV.",
            "EN 473 RT,PT II Kursu. TUV.",
            "Kaynak Enspektörlüğü Kursu.CSWIP - TWI.",
            "3.1 kaynak denetim kursu."
        ],
        certificatesList: [
            '<div class="cert-group">ÜYELİK</div>',
            "TWI Üyesi 2009",
            '<div class="cert-group">NDE</div>',
            "DPI Seviye-II (EN-473), TUV kalif. Sert. 2008.",
            "RT Seviye-II (ASNT-CP-189) kalif. Sert. 2013.",
            '<div class="cert-group">ENSPEKTÖR</div>',
            "3.1 kaynak enspektörü sert. 2021"
        ],
        techSkillsList: [
             "Enerji santralleri, rafineriler, petrol ve gaz proses tesisleri, kara gaz ve petrol boru hatları, proses boruları, alçak basınç ve depolama tankları ve ağır çelik yapılarda kazanılan deneyim.",
            "Boru, kazan, basınçlı kaplar, fırınlar, tanklar, ısıtıcılar ve yapısal çeliklerin imalat ve montajında derin deneyim.",
            "Spooling, kaynak haritası, basınç testi paketleri, borulama ve kaynak kütüğü ve imalat ve montaj ilerleme takip kayıtlarının hazırlanmasında uzman beceriler.",
            "Uluslararası kodlar ve standartlarla (ISO, DIN, EN, BS-ASME, ASTM, ANSI, ASNT & API) sağlam deneyim.",
            "BP, Exxon Mobil, Fluor, Technip, TR, Mitsubishi gibi çok uluslu şirketlerin spesifikasyonları hakkında olağanüstü bilgi.",
            "Kalite ve kaynak denetimi, NDT testleri (VT, PT) ve kaynakçı kalifikasyonunda deneyim.",
            "SMAW, GTAW, GMAW / GS-FCAW, SAW ve füzyon kesme prosesleri ve bileşenleri ile yakın çalışma.",
            "Karbon Çelikleri, Düşük Sıcaklık CS, SS, Dubleks ve Süper Dubleks Paslanmaz Çelikler, Alaşımlı çelikler ve kaynak sarf malzemelerinin kaynak ve kalite denetiminde deneyim.",
            "İngilizce'de orta-üstü sözlü ve yazılı iletişim becerileri, anadil Türkçe ve akıcı Azerice."
        ],
    }
};

const workExperience = [
    { date: "2024 – 2025 . 10 mo", en: { title: "Welding Supervisor", project: "Basrah Refinery Upgrading Project GC2 Package", company: "JGC Construction Co. | ILK Construction", location: "Basrah, Iraq", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Basra Rafineri Yükseltme Projesi GC2 Paketi", company: "CL. JGC Construction Co. | CONTR. ILK Construction", location: "Basra, Irak", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Tüm kaynak faaliyetleri (boru ve levha) için malzeme ve personel organizasyonundan sorumlu.<br>• Tüm kaynak konularında inşaat yönetimi ile koordinasyon ve Kalite kontrol ile işbirliği.<br>• İşlerin performansı sırasında tüm kaynakçıların (SMAW, GTAW) denetlenmesi.<br>• Tüm nihai KG / KK, NDT ve İlerleme Takibi raporlarının derlenmesi vb." }},
    { date: "2022 – 2024 . 15 mo", en: { title: "Welding Supervisor", project: "HAOR Modernization Project", company: "CL. Tecnimont – KT | CONTR. ILK Construction", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "HAOR Modernizasyon Projesi", company: "CL. Tecnimont – KT | CONTR. ILK Construction", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Tüm kaynak faaliyetleri için malzeme ve personel organizasyonundan sorumlu.<br>• İnşaat yönetimi ile koordinasyon ve Kalite kontrol ile işbirliği.<br>• İşlerin performansı sırasında tüm kaynakçıların (SMAW, GTAW) denetlenmesi.<br>• Tüm nihai KG / KK, NDT ve İlerleme Takibi raporlarının derlenmesi." }},
    { date: "2021– 2022 . 12 mo", en: { title: "Welding Supervisor", project: "HAOR Modernization Project", company: "CL. Socar | CONTR. Tecnicas Reunidas, Prokon LLC, Gomag Energy", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "HAOR Modernizasyon Projesi", company: "CL. Socar | CONTR. Tecnicas Reunidas, Prokon LLC, Gomag Energy", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonundan sorumlu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2020 – 2020 . 8 mo", en: { title: "Welding Supervisor", project: "MNPZ HydroCracker Unit", company: "CL. MNPZ | CONTR. Socar Construction", location: "Mozyr, Belarus", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "MNPZ HydroCracker Ünitesi", company: "CL. MNPZ | CONTR. Socar Construction", location: "Mozyr, Belarus", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2019 – 2020 . 12 mo", en: { title: "Welding Supervisor", project: "Azerikimya – EP300", company: "CL. TechnipFMC | CONTR. Ustay Construction", location: "Sumqayit, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Azerikimya – EP300", company: "CL. TechnipFMC | CONTR. Ustay Construction", location: "Sumgayıt, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2017 – 2019 . 24 mo", en: { title: "Welding Supervisor", project: "Socar Polymer – Sumgayit PP / HDPE Production Facility", company: "CL. Tecnimont – KT | CONTR. Ustay Construction", location: "Sumqayit, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Socar Polymer – Sumgayıt PP / HDPE Üretim Tesisi", company: "CL. Tecnimont – KT | CONTR. Ustay Construction", location: "Sumgayıt, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2015 – 2017 . 24 mo", en: { title: "Welding Supervisor", project: "Shah-Deniz-Stage-2-SD2 Project-Fabrication-Offshore-Facilities-and-Hook-and-Commissioning-Support", company: "CL. BP Exploration (Shah Deniz) Limited | CONTR. ATA Consortium (Amec - Tekfen - Azfen)", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Şah Deniz Aşama 2 SD2 Projesi", company: "CL. BP Exploration (Shah Deniz) Limited | CONTR. ATA Consortium (Amec - Tekfen - Azfen)", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2013 – 2015 . 24 mo", en: { title: "Welding Foreman", project: "Baku Olympic Stadium Project", company: "CL. SOCAR | CONTR. Tekfen Construction and Installation Co., Inc.", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Formeni", project: "Bakü Olimpiyat Stadı Projesi", company: "CL. SOCAR | CONTR. Tekfen Construction and Installation Co., Inc.", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2010 – 2011 . 8 mo", en: { title: "Welding Supervisor", project: "OGB Water Pipeline D.B", company: "CL. Azersu Joint - Stock Company, CES Consulting | CONTR. Gulf Drilling supply FZA", location: "Oguz, Azerbaijan", description: "• Supervision on Drilling Borehole Piping Fabrication & Erection.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "OGB Su Boru Hattı D.B", company: "CL. Azersu, CES Consulting | CONTR. Gulf Drilling supply FZA", location: "Oğuz, Azerbaycan", description: "• Sondaj Kuyusu Boru İmalat ve Montaj denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2008 – 2010 . 24 mo", en: { title: "Welding Supervisor", project: "OGB Water Pipeline D.B", company: "CL. Azersu Joint - Stock Company, CES Consulting | CONTR. Arsan & Ozalp JV", location: "Oguz, Azerbaijan", description: "• Supervision on Drilling Borehole Piping Fabrication & Erection.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "OGB Su Boru Hattı D.B", company: "CL. Azersu, CES Consulting | CONTR. Arsan & Ozalp JV", location: "Oğuz, Azerbaycan", description: "• Sondaj Kuyusu Boru İmalat ve Montaj denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }},
    { date: "2007 – 2008 . 12 mo", en: { title: "Welding Supervisor", project: "Sangachal Terminal 2nd Produced Water Tank Construction", company: "CL. Azerbaijan International Operating Company (AIOC) | CONTR. Entrepose Contracting S.A., TML Borova", location: "Baku, Azerbaijan", description: "• Supervision on Erection welding of 21000 m3 capacity Produced water T.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW, SAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Sangachal Terminali 2. Üretilmiş Su Tankı İnşaatı", company: "CL. AIOC | CONTR. Entrepose Contracting S.A., TML Borova", location: "Bakü, Azerbaycan", description: "• 21000 m3 kapasiteli Üretilmiş Su Tankının montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi (SMAW, GTAW, SAW).<br>• Raporlama ve takip." }},
    { date: "2006 – 2007 . 12 mo", en: { title: "Welder", project: "COP-WC-PDQ-Fabrication-Topsides-Drilling-Facilities-and-Integration-Living-Quarters", company: "CL. AIOC, Azerbaijan International Operating Company | CONTR. Tekfen Construction", location: "Baku, Azerbaijan", description: "• Working on Fabrication & Erection of TPG 500 off-shore platforms. Welding on (GTAW / FCAW-GS / SMAW) welding Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon steel, Stainless Steel, Cu-Ni, Duplex SS, Super Duplex SS with Corrosion Test Acc." }, tr: { title: "Kaynakçı", project: "COP-WC-PDQ-İmalat-Topsides-Sondaj-Tesisleri ve Entegrasyon-Yaşam Alanları", company: "CL. AIOC | CONTR. Tekfen Construction", location: "Bakü, Azerbaycan", description: "• TPG 500 açık deniz platformlarının İmalat ve Montajında çalışma. Karbon çelik, Düşük Sıcaklık Karbon çelik, Paslanmaz Çelik, Cu-Ni, Dubleks SS, Süper Dubleks SS borularda farklı dolgu teli ve elektrotlarla (GTAW / FCAW-GS / SMAW) kaynak işlemleri." }},
    { date: "2005 – 2006 . 12 mo", en: { title: "Welder", project: "TPG 500 outside North Sea", company: "CL. AIOC, Azerbaijan International Operating Company | CONTR. Technip, MQS", location: "Baku, Azerbaijan", description: "• Working on Fabrication & Erection of TPG 500 off-shore platforms. Welding on (GTAW / FCAW-GS / SMAW) welding Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon steel, Stainless Steel, Cu-Ni, Duplex SS, Super Duplex SS with Corrosion Test Acc." }, tr: { title: "Kaynakçı", project: "TPG 500 Kuzey Denizi Dışı", company: "CL. AIOC | CONTR. Technip, MQS", location: "Bakü, Azerbaycan", description: "• TPG 500 açık deniz platformlarının İmalat ve Montajında çalışma. Çeşitli malzemeler üzerinde (GTAW / FCAW-GS / SMAW) kaynak işlemleri." }},
    { date: "2004 – 2005 . 12 mo", en: { title: "Welder", project: "AGT Pipeline", company: "CL. Baku - Tbilisi - Ceyhan Pipeline Co. Ltd. (BTC) & South Caucasus Pipeline Co. (SCP) | CONTR. CCC", location: "Baku, Azerbaijan", description: "• Working on Fabrication and pipeline of AGT pipeline. 1/2\" and over. Welding on (GTAW / SMAW) welding Processes Up-Hill and Down-Hill with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless steel Test Accepted." }, tr: { title: "Kaynakçı", project: "AGT Boru Hattı", company: "CL. BTC & SCP | CONTR. CCC", location: "Bakü, Azerbaycan", description: "• AGT boru hattının imalat ve kaynak işleri. 1/2\" ve üzeri borularda Yokuş Yukarı ve Yokuş Aşağı (GTAW / SMAW) kaynak işlemleri." }},
    { date: "2003 – 2004 . 12 mo", en: { title: "Welder", project: "Sangachal Terminal E.P", company: "CL. BP Exploration Caspian Sea Limited | CONTR. Tekfen Construction and Installation Co. Inc.", location: "Baku, Azerbaijan", description: "• Working on Fabrication and at site of Expansion Terminal 1/2\" and over Welding on (GTAW / SMAW) welding Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, Duplex SS, Super Duplex SS Test Accepted." }, tr: { title: "Kaynakçı", project: "Sangachal Terminali Genişletme Projesi", company: "CL. BP Exploration | CONTR. Tekfen Construction", location: "Bakü, Azerbaycan", description: "• Genişletme Terminali sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }},
    { date: "2001 – 2003 . 24 mo", en: { title: "Welder", project: "Severnaya 400 MW Gas Combined Cycle Power Plant", company: "CL. Azerenergy | CONTR. Mitsui - Mitsubishi Heavy Industries Consortium, Epro Energy, TML", location: "Baku, Azerbaijan", description: "• Working on Fabrication and at site of Power plant 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "Severnaya 400 MW Gaz Kombine Çevrim Santrali", company: "CL. Azerenergy | CONTR. Mitsui - Mitsubishi, Epro Energy, TML", location: "Bakü, Azerbaycan", description: "• Enerji santrali sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }},
    { date: "2000 – 2001 . 12 mo", en: { title: "Welder", project: "Isomerization Unit", company: "CL. Tupras Turkish Petroleum Refineries Co. | Epro Energy, Entes", location: "Izmit, Turkey", description: "• Working on Fabrication and at site of Tüpraş 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "İzomerizasyon Ünitesi", company: "CL. Tüpraş | Epro Energy, Entes", location: "İzmit, Türkiye", description: "• Tüpraş sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }},
    { date: "1999 – 2000 . 12 mo", en: { title: "Welder", project: "CCR & Isomerization units", company: "CL. Tüpraş Türk Petrol Rafinerileri A.Ş. | CONTR. FWI & Gama Industry Consortium", location: "Izmir, Turkey", description: "• Working on Fabrication and at site of Tüpraş 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "CCR & İzomerizasyon Üniteleri", company: "CL. Tüpraş | CONTR. FWI & Gama Industry Consortium", location: "İzmir, Türkiye", description: "• Tüpraş sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }},
    { date: "1997 – 1998 . 12 mo", en: { title: "Welder", project: "Fergana Oil Refinery", company: "CL. Uzbekneftegas | CONTR. Tekfen Construction and Installation Co., Inc.", location: "Fergana, Uzbekistan", description: "• Working on Fabrication and at site of Gas Refinery 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "Fergana Petrol Rafinerisi", company: "CL. Uzbekneftegas | CONTR. Tekfen Construction", location: "Fergana, Özbekistan", description: "• Gaz Rafinerisi sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }},
    { date: "1995 – 1997 . 12 mo", en: { title: "Welder", project: "Etilen Polietilen Petkim", company: "CL. Petkim | Engin Makina", location: "Izmir, Turkey", description: "• Working on Fabrication and at site of Petkim 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "Etilen Polietilen Petkim", company: "CL. Petkim | Engin Makina", location: "İzmir, Türkiye", description: "• Petkim sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }},
    { date: "1991 – 1993 . 12 mo", en: { title: "Welder", project: "CCR & ISO Unit Tüpraş", company: "CL. Tüpraş Türk Petrol Rafinerileri A.Ş. | Atilla Dogan", location: "Izmir, Turkey", description: "• Working on Fabrication and at site of Tüpraş 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "CCR & ISO Ünitesi Tüpraş", company: "CL. Tüpraş | Atilla Dogan", location: "İzmir, Türkiye", description: "• Tüpraş sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }},
];

const referencesData = [
    { en: { name: "ENGIN GUNGORMUS", title: "Project Director" }, phone: "+90 530 425 17 43" },
    { en: { name: "ALI GURGOZ", title: "General Manage<br>GoMAG Energy" }, phone: "+90 533 422 88 47" },
    { en: { name: "OZGUR YILDIZ", title: "Construction Manager<br>Tekfen Construction" }, phone: "+994 50 332 03 56" },
    { en: { name: "CAN KARAMAN", title: "Project Manager" }, phone: "+90 532 761 85 81" },
    { en: { name: "AHMET FİNCİ", title: "Country Manager<br>ILK Construction" }, phone: "+90 532 596 10 02" },
    { en: { name: "ALI RIZA TACYILDIZ", title: "Project Manager<br>ILK Construction" }, phone: "+90 538 261 39 20" },
    { en: { name: "DUZGUN YEKLITAS", title: "Construction Manager<br>GoMAG Energy" }, phone: "+90 544 517 17 62" },
    { en: { name: "BULENT UZEL", title: "Piping Superintendent<br>Tecnicas Reunidas" }, phone: "+90 541 714 25 10" },
    { en: { name: "SELAMI KILIÇ", title: "Construction Manager<br>Caspian Technology Supply" }, phone: "+994 51 449 34 66" },
    { en: { name: "CAGATAY CAGLAYAN", title: "Country Manager<br>Ustay Construction" }, phone: "+7 926 942 89 62" },
];


// --- FONKSİYON BÖLÜMÜ ---

// Global scope'a fonksiyonu ekliyoruz ki HTML'den erişilebilsin
window.setLanguage = function(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key] != null) {
            el.innerHTML = translations[lang][key];
        }
    });

    loadDetailedSkills(lang);
    loadTechnicalSkills(lang);
    loadExperience(lang);
    loadReferences(lang);
    loadTraining(lang);
    loadCertificates(lang);

    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) btn.classList.add('active');
    });
}

function loadTraining(lang) {
    const container = document.getElementById('training-list');
    container.innerHTML = '';
    translations[lang].trainingList.forEach(item => {
        container.innerHTML += `<li>${item}</li>`;
    });
}

function loadCertificates(lang) {
    const container = document.getElementById('certificates-list');
    container.innerHTML = '';
    translations[lang].certificatesList.forEach(item => {
        container.innerHTML += `<li>${item}</li>`;
    });
}

function loadDetailedSkills(lang) {
    const container = document.getElementById('skills-list');
    container.innerHTML = '';
    const skills = translations[lang].skills;
    for (const skill in skills) {
        container.innerHTML += `<div class="skill-item"><p>${skill}</p><div class="progress-bar"><div class="progress" style="width: ${skills[skill]}%;"></div></div></div>`;
    }
}

function loadTechnicalSkills(lang) {
    const container = document.getElementById('tech-skills-list');
    container.innerHTML = '';
    translations[lang].techSkillsList.forEach(skill => {
        container.innerHTML += `<li>${skill}</li>`;
    });
}

function loadExperience(lang) {
    const container = document.querySelector('.experience-list');
    container.innerHTML = '';
    workExperience.forEach(job => {
        const jobData = job[lang] || job.en;
        container.innerHTML += `<article class="experience-card"><div class="job-title">${jobData.title}</div><div class="job-info"><strong>${jobData.project}</strong><br>${jobData.company}<br><em>${job.date} | ${jobData.location}</em></div><p class="job-description">${jobData.description}</p></article>`;
    });
}

function loadReferences(lang) {
    const container = document.querySelector('.references-grid');
    container.innerHTML = '';
    referencesData.forEach(ref => {
        container.innerHTML += `<div class="reference-card"><div class="name">${ref.en.name}</div><div class="title">${ref.en.title}</div><div class="phone">${ref.phone}</div></div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
    
    // Sayfa ilk yüklendiğinde varsayılan dili ayarla
    setLanguage('en');

});




