// --- VERİ BÖLÜMÜ ---

const translations = {
    en: {
        pageTitle: "Aziz Yucetep — Welding Supervisor",
        jobTitle: "Welding Supervisor, Welding Inspector",
        contactTitle: "CONTACT",
        skillsTitle: "SKILLS",
        trainingTitle: "TRAINING",
        certificatesTitle: "CERTIFICATES",
        downloadCV: "Download CV",
        aboutMeTitle: "ABOUT ME",
        aboutMeText: `Petroleum & Gas Industry - Power Industry - Petrochemical industry. Significant exp. gained in the welding and fabrication industry. Working Offshore / onshore Power station, petrochemical plant, oil refineries at fabrication yard on green field sites and live Installation. Welding Opr. / Welding Inspector / Supervisor / Trainer (33 Years), taking full responsibility for Production welds made on sites. Deployment of welding crews and compliance of approved welding Procedure and protocols. Over see and ensure the quality of workmanship as per client specifications. Calling up intermediate and final N.D.E carry out welder qualification test using approved welding procedure in adherence to client specifications in conjunction with ASME IX / B31.3 EN 287-288 EEMUA 158. API 1104 BS 4515 advanced safety Audits, stop cards and Risk Assessment. Multi Coded Welder (15 Years) with good hands on experience on the following processes. SMAW, GTAW, SAW, GS-FCAW and fully automated techniques,using CSR and wire fed application on Polysoude and Dimetrics orbital welding heads.`,
        techSkillsTitle: "TECHNICAL SKILLS",
        experienceTitle: "WORK EXPERIENCE",
        galleryTitle: "MY CERTIFICATES",
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
        showMore: "Show more",
        showLess: "Show less",
    },
    tr: {
        pageTitle: "Aziz Yucetepe — Kaynak Süpervizörü",
        jobTitle: "Kaynak Süpervizörü, Kaynak Enspektörü",
        contactTitle: "İLETİŞİM",
        skillsTitle: "YETENEKLER",
        trainingTitle: "EĞİTİMLER",
        certificatesTitle: "SERTİFİKALAR",
        downloadCV: "CV'yi İndir",
        aboutMeTitle: "HAKKIMDA",
        aboutMeText: `Petrol ve Gaz Endüstrisi - Enerji Endüstrisi - Petrokimya Endüstrisi. Kaynak ve imalat endüstrisinde önemli deneyim kazanılmıştır. Açık deniz (Offshore) / kara (onshore) enerji santralleri, petrokimya tesisleri, petrol rafinerileri, imalat sahaları ve canlı kurulumlarda çalışılmıştır. Kaynak Operatörü / Kaynak Enspektörü / Süpervizör / Eğitmen (33 Yıl) olarak, sahalarda yapılan üretim kaynaklarının tüm sorumluluğunu üstlenmiş; kaynak ekiplerinin görevlendirilmesi ve onaylanmış kaynak prosedür ve protokollerine uygunluğun sağlanması konularında yetkinlik kazanılmıştır. Müşteri şartnamelerine göre işçilik kalitesini denetlemiş ve güvence altına almıştır. ASME IX / B31.3 EN 287-288 EEMUA 158. API 1104 BS 4515 standartlarına uygun olarak, müşteri şartnamelerine bağlı kalarak onaylı kaynak prosedürünü kullanarak ara ve son N.D.E. kontrollerini talep etmiş ve kaynakçı yeterlilik testlerini gerçekleştirmiştir. İleri düzey güvenlik denetimleri, iş durdurma kartları ve risk değerlendirmesi konularında tecrübelidir. Çok Yönlü Sertifikalı Kaynakçı (15 Yıl) olarak; SMAW, GTAW, SAW, GS-FCAW gibi proseslerde ve Polysoude ve Dimetrics orbital kaynak kafaları kullanılarak yapılan tam otomatik tekniklerde (CSR ve tel beslemeli uygulamalar) yüksek tecrübeye sahiptir.`,
        techSkillsTitle: "TEKNİK BECERİLER",
        experienceTitle: "İŞ DENEYİMİ",
        galleryTitle: "SERTİFİKALARIM",
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
        showMore: "Daha Fazla",
        showLess: "Daha Az",
    },
    de: {
        pageTitle: "Aziz Yucetepe — Schweißmeister",
        jobTitle: "Schweißmeister, Schweißprüfer",
        contactTitle: "KONTAKT",
        skillsTitle: "FÄHIGKEITEN",
        trainingTitle: "SCHULUNGEN",
        certificatesTitle: "ZERTIFIKATE",
        downloadCV: "CV herunterladen",
        aboutMeTitle: "ÜBER MICH",
        aboutMeText: `Erdöl- & Gasindustrie - Energiewirtschaft - Petrochemische Industrie. Umfangreiche Erfahrung in der Schweißerei und Fertigung. Tätigkeiten im Off- und Onshore-Bereich bei Kraftwerken, Petrochemieunternehmen und Ölraffinerien in Fabrication Yards und bei Montagearbeiten. Schweißer / Schweißprüfer / Meister / Ausbilder (33 Jahre) mit vollständiger Verantwortung für Produktionsschweißungen vor Ort. Koordination von Schweißbrigaden und Einhaltung genehmigter Schweißverfahren. Qualitätssicherung nach Kundenspezifikationen. Durchführung von Zwischenprüfungen, Abnahmeprüfungen und Schweißerqualifizierungen gemäß ASME IX / B31.3, EN 287-288, EEMUA 158, API 1104 und BS 4515. Mehrfach zertifizierter Schweißer (15 Jahre) mit umfassenden Kenntnissen in SMAW, GTAW, SAW und GS-FCAW sowie automatisierten Schweißverfahren.`,
        techSkillsTitle: "TECHNISCHE FÄHIGKEITEN",
        experienceTitle: "BERUFSERFAHRUNG",
        galleryTitle: "MEINE ZERTIFIKATE",
        referencesTitle: "REFERENZEN",
        skills: { Outlook: 90, Word: 80, Excel: 70, PowerPoint: 60, CSS: 50, HTML: 50 },
        trainingList: [
            "Arbeitserlaubnis-Supervisor BP",
            "Sicherheitsauditor (Fortgeschrittene) BP",
            "Verhaltenssicherheit-Auditor V.KSI Ltd.",
            "Konstruktion und Qualitätsmanagementsystem TUV",
            "EN 473 RT, PT Level II TUV",
            "Schweißprüfkurs CSWIP - TWI",
            "3.1 Schweißprüfkurs"
        ],
        certificatesList: [
            '<div class="cert-group">MITGLIEDSCHAFT</div>',
            "TWI-Mitglied 2009",
            '<div class="cert-group">ZFP</div>',
            "Eindringprüfung Level-II (EN-473), TUV-Zertifikat 2008",
            "Radiografie Level-II (ASNT-CP-189), Zertifikat 2013",
            '<div class="cert-group">PRÜFER</div>',
            "3.1 Schweißprüfer-Zertifikat 2021"
        ],
        techSkillsList: [
            "Erfahrung in Kraftwerken, Raffinerien, Öl- und Gasanlagen, Pipelines und Drucktanks.",
            "Tiefe Erfahrung in Rohr-, Kessel- und Druckbehälterfertigung sowie Stahlkonstruktion.",
            "Fachkompetenz in Spooling, Schweißplänen, Druckprüfungen und Dokumentation.",
            "Umfassende Kenntnisse internationaler Normen: ISO, DIN, EN, BS, ASME, ASTM, ANSI, ASNT und API.",
            "Vertrautheit mit Spezifikationen von BP, ExxonMobil, Fluor, Technip, Mitsubishi.",
            "Erfahrung in Qualitäts- und Schweißprüfung, Zerstörungsfreie Prüfung (VT, PT) und Schweißerqualifizierung.",
            "Langfristige Arbeit mit SMAW, GTAW, GMAW/GS-FCAW, SAW und Trennschneidprozessen.",
            "Schweißen und Prüfung von Kohlenstoffstahl, Tieftemperaturtechnik, Edelstahl, Duplex und Super-Duplex-Stählen.",
            "Fließend Englisch, Muttersprache Türkisch, fließend Aserbaidschanisch."
        ],
        showMore: "Mehr anzeigen",
        showLess: "Weniger anzeigen",
    },
    ru: {
        pageTitle: "Азиз Юджетепе — Мастер сварки",
        jobTitle: "Мастер сварки, Инспектор сварки",
        contactTitle: "КОНТАКТ",
        skillsTitle: "НАВЫКИ",
        trainingTitle: "ОБУЧЕНИЕ",
        certificatesTitle: "СЕРТИФИКАТЫ",
        downloadCV: "Скачать CV",
        aboutMeTitle: "ОБО МНЕ",
        aboutMeText: `Нефтегазовая промышленность - Энергетика - Нефтехимия. Значительный опыт в сварке и производстве. Работа на морских и береговых объектах — электростанции, нефтехимические предприятия, нефтеперерабатывающие заводы, цеха и строительные площадки. Сварщик / Инспектор / Мастер / Инструктор (33 года) с полной ответственностью за производственные сварные соединения. Координация сварочных бригад и соблюдение утвержденных процедур. Обеспечение качества в соответствии со спецификациями заказчика. Проведение промежуточных и окончательных проверок, сертификация сварщиков по ASME IX, B31.3, EN 287-288, EEMUA 158, API 1104 и BS 4515. Многопрофильный сварщик (15 лет) с опытом SMAW, GTAW, SAW, GS-FCAW и автоматизированных методов.`,
        techSkillsTitle: "ТЕХНИЧЕСКИЕ НАВЫКИ",
        experienceTitle: "ОПЫТ РАБОТЫ",
        galleryTitle: "МОИ СЕРТИФИКАТЫ",
        referencesTitle: "РЕКОМЕНДАЦИИ",
        skills: { Outlook: 90, Word: 80, Excel: 70, PowerPoint: 60, CSS: 50, HTML: 50 },
        trainingList: [
            "Супервизор по пропускам на работу BP",
            "Инспектор по промышленной безопасности (продвинутый) BP",
            "Аудитор поведенческой безопасности V.KSI Ltd.",
            "Система управления качеством строительства TUV",
            "EN 473 РГ, УЗК II уровень TUV",
            "Курс инспекции сварки CSWIP - TWI",
            "3.1 курс инспекции сварки"
        ],
        certificatesList: [
            '<div class="cert-group">ЧЛЕНСТВО</div>',
            "Член TWI 2009",
            '<div class="cert-group">НДК</div>',
            "Капиллярная дефектоскопия Уровень-II (EN-473), сертификат TUV 2008",
            "Радиография Уровень-II (ASNT-CP-189), сертификат 2013",
            '<div class="cert-group">ИНСПЕКТОР</div>',
            "3.1 сертификат инспектора сварки 2021"
        ],
        techSkillsList: [
            "Опыт на электростанциях, нефтеперерабатывающих заводах, объектах нефтегазовой промышленности и газопроводов.",
            "Глубокий опыт в производстве трубопроводов, котлов, сосудов высокого давления и стальных конструкций.",
            "Профессионализм в изготовлении схем сварки, испытаниях на давление и документации.",
            "Прочные знания международных стандартов: ISO, DIN, EN, BS, ASME, ASTM, ANSI, ASNT и API.",
            "Знакомство со спецификациями BP, ExxonMobil, Fluor, Technip, Mitsubishi.",
            "Опыт контроля качества сварки, неразрушающего контроля (ВТ, КД) и аттестации сварщиков.",
            "Долгосрочная работа с SMAW, GTAW, GMAW/GS-FCAW, SAW и резкой методом газовой дуги.",
            "Сварка и контроль углеродистой стали, криогенной стали, нержавеющей стали, дуплекса и супердуплекса.",
            "Свободно говорю по-английски, родной язык — турецкий, свободно говорю по-азербайджански."
        ],
        showMore: "Показать больше",
        showLess: "Показать меньше",
    },
    ar: {
        pageTitle: "عزيز يوجيتيبي — مشرف لحام",
        jobTitle: "مشرف اللحام، مفتش اللحام",
        contactTitle: "التواصل",
        skillsTitle: "المهارات",
        trainingTitle: "التدريب",
        certificatesTitle: "الشهادات",
        downloadCV: "تحميل السيرة الذاتية",
        aboutMeTitle: "عني",
        aboutMeText: `صناعة البترول والغاز - صناعة الطاقة - الصناعة البتروكيماوية. خبرة كبيرة في مجال اللحام والتصنيع. العمل في المشاريع البحرية والبرية — محطات الطاقة، والمصافي، ومحطات المعالجة. ملحام / مفتش لحام / مشرف / مدرب (33 سنة) مع المسؤولية الكاملة عن اللحام الإنتاجي في الموقع. تنسيق فرق اللحام والالتزام بالمعايير المعتمدة. ضمان جودة المنتج وفقاً لمواصفات العميل. إجراء الفحوصات المرحلية والنهائية، وتصديق الملحامين وفقاً لمعايير ASME IX و B31.3 و EN 287-288 و EEMUA 158 و API 1104 و BS 4515. ملحام متعدد التخصصات (15 سنة) ذو خبرة في SMAW و GTAW و SAW و GS-FCAW والتقنيات الآلية.`,
        techSkillsTitle: "المهارات التقنية",
        experienceTitle: "خبرة العمل",
        galleryTitle: "شهاداتي",
        referencesTitle: "المراجع",
        skills: { Outlook: 90, Word: 80, Excel: 70, PowerPoint: 60, CSS: 50, HTML: 50 },
        trainingList: [
            "مشرف تصاريح العمل BP",
            "مراجع السلامة المتقدم BP",
            "مراجع السلامة السلوكية V.KSI Ltd.",
            "نظام إدارة جودة البناء TUV",
            "EN 473 الاختبار بالموجات فوق الصوتية والاختبار بالأشعة السينية المستوى الثاني TUV",
            "دورة فحص اللحام CSWIP - TWI",
            "دورة فحص اللحام 3.1"
        ],
        certificatesList: [
            '<div class="cert-group">العضوية</div>',
            "عضو TWI 2009",
            '<div class="cert-group">الاختبار غير الإتلافي</div>',
            "اختبار الاختراق المستوى الثاني (EN-473)، شهادة TUV 2008",
            "الاختبار بالأشعة السينية المستوى الثاني (ASNT-CP-189)، شهادة 2013",
            '<div class="cert-group">مفتش</div>',
            "شهادة مفتش لحام 3.1 من عام 2021"
        ],
        techSkillsList: [
            "الخبرة في محطات الطاقة والمصافي ومرافق نقل الزيت والغاز والخطوط الأنابيب.",
            "خبرة عميقة في تصنيع الأنابيب والمراجل والأوعية والهياكل الفولاذية.",
            "مهارات متقدمة في إعداد خطط اللحام واختبارات الضغط والتوثيق.",
            "معرفة قوية بالمعايير الدولية: ISO و DIN و EN و BS و ASME و ASTM و ANSI و ASNT و API.",
            "الإلمام بمواصفات BP و ExxonMobil و Fluor و Technip و Mitsubishi.",
            "الخبرة في مراقبة جودة اللحام والاختبارات غير الإتلافية وتصديق الملحامين.",
            "عمل طويل الأمد مع SMAW و GTAW و GMAW/GS-FCAW و SAW والقطع.",
            "لحام ومراقبة الفولاذ الكربوني والفولاذ منخفض الحرارة والفولاذ المقاوم للصدأ والدوبلكس.",
            "إجادة اللغة الإنجليزية، لغة الأم التركية، وإجادة اللغة الأذربيجانية."
        ],
        showMore: "عرض المزيد",
        showLess: "عرض أقل",
    },
    zh: {
        pageTitle: "阿齐兹·尤杰特普 — 焊接主管",
        jobTitle: "焊接主管、焊接检验员",
        contactTitle: "联系方式",
        skillsTitle: "技能",
        trainingTitle: "培训",
        certificatesTitle: "证书",
        downloadCV: "下载简历",
        aboutMeTitle: "关于我",
        aboutMeText: `石油天然气工业 - 能源工业 - 石化工业。在焊接和制造业拥有丰富经验。从事海上和陆地项目工作——电力站、石油精炼厂、石化厂以及制造场地和现场安装。焊接工 / 焊接检验员 / 主管 / 培训师（33年），全面负责现场生产焊接。协调焊接队伍并遵守批准的焊接程序。确保按客户规范进行质量管理。进行中间检查、最终检查、焊工认证（符合ASME IX、B31.3、EN 287-288、EEMUA 158、API 1104和BS 4515标准）。多认证焊接工（15年）拥有SMAW、GTAW、SAW、GS-FCAW和自动焊接技术的丰富经验。`,
        techSkillsTitle: "技术技能",
        experienceTitle: "工作经历",
        galleryTitle: "我的证书",
        referencesTitle: "参考资料",
        skills: { Outlook: 90, Word: 80, Excel: 70, PowerPoint: 60, CSS: 50, HTML: 50 },
        trainingList: [
            "BP工作许可证监督员",
            "BP高级安全审计员",
            "V.KSI Ltd.行为安全审计员",
            "建筑质量管理系统 TUV",
            "EN 473 超声波和射线照相 II级 TUV",
            "CSWIP - TWI 焊接检验课程",
            "3.1 焊接检验课程"
        ],
        certificatesList: [
            '<div class="cert-group">会员资格</div>',
            "TWI 会员 2009",
            '<div class="cert-group">无损检测</div>',
            "液体渗透检测 II级 (EN-473)，TUV 证书 2008",
            "射线照相 II级 (ASNT-CP-189)，证书 2013",
            '<div class="cert-group">检验员</div>',
            "3.1 焊接检验员证书 2021"
        ],
        techSkillsList: [
            "在发电厂、炼油厂、油气装置、管道和储罐方面的经验。",
            "管道、锅炉、压力容器和钢结构制造方面的深厚经验。",
            "焊接计划、压力测试和文档编制方面的专业技能。",
            "国际标准知识牢固：ISO、DIN、EN、BS、ASME、ASTM、ANSI、ASNT 和 API。",
            "对BP、埃克森美孚、Fluor、Technip、三菱等公司规范的深入了解。",
            "焊接质量控制、无损检测（VT、PT）和焊工认证方面的经验。",
            "与SMAW、GTAW、GMAW/GS-FCAW、SAW和切割工艺长期合作。",
            "碳钢、低温钢、不锈钢、双相和超级双相不锈钢的焊接和检验经验。",
            "英文流利，土耳其语为母语，阿塞拜疆语流利。"
        ],
        showMore: "显示更多",
        showLess: "显示较少",
    },
    it: {
        pageTitle: "Aziz Yucetepe — Supervisore della Saldatura",
        jobTitle: "Supervisore della Saldatura, Ispettore della Saldatura",
        contactTitle: "CONTATTI",
        skillsTitle: "COMPETENZE",
        trainingTitle: "FORMAZIONE",
        certificatesTitle: "CERTIFICATI",
        downloadCV: "Scarica CV",
        aboutMeTitle: "CHI SONO",
        aboutMeText: `Industria del Petrolio e del Gas - Industria Energetica - Industria Petrolchimica. Notevole esperienza nel settore della saldatura e della fabbricazione. Lavoro in progetti offshore e onshore — centrali elettriche, raffinerie di petrolio, impianti petrolchimici, cantieri e installazioni. Saldatore / Ispettore di saldatura / Supervisore / Formatore (33 anni) con responsabilità completa per le saldature di produzione in sito. Coordinamento dei team di saldatura e conformità alle procedure approvate. Garantire la qualità della workmanship secondo le specifiche del cliente. Esecuzione di controlli intermedi e finali, certificazione dei saldatori secondo ASME IX, B31.3, EN 287-288, EEMUA 158, API 1104 e BS 4515. Saldatore multifunzionale (15 anni) con esperienza in SMAW, GTAW, SAW, GS-FCAW e tecniche automatizzate.`,
        techSkillsTitle: "COMPETENZE TECNICHE",
        experienceTitle: "ESPERIENZA LAVORATIVA",
        galleryTitle: "I MIEI CERTIFICATI",
        referencesTitle: "REFERENZE",
        skills: { Outlook: 90, Word: 80, Excel: 70, PowerPoint: 60, CSS: 50, HTML: 50 },
        trainingList: [
            "Supervisore Permesso di Lavoro BP",
            "Auditor Sicurezza Avanzato BP",
            "Auditor Sicurezza Comportamentale V.KSI Ltd.",
            "Sistema di Gestione della Qualità delle Costruzioni TUV",
            "EN 473 Ultrasuoni e Radiografia Livello II TUV",
            "Corso di Ispezione Saldatura CSWIP - TWI",
            "Corso di Ispezione Saldatura 3.1"
        ],
        certificatesList: [
            '<div class="cert-group">APPARTENENZA</div>',
            "Membro TWI 2009",
            '<div class="cert-group">PROVE NON DISTRUTTIVE</div>',
            "Penetrante Liquido Livello-II (EN-473), Certificato TUV 2008",
            "Radiografia Livello-II (ASNT-CP-189), Certificato 2013",
            '<div class="cert-group">ISPETTORE</div>',
            "Certificato Ispettore Saldatura 3.1 2021"
        ],
        techSkillsList: [
            "Esperienza in centrali elettriche, raffinerie, impianti petroliferi, gasdotti e serbatoi.",
            "Profonda esperienza nella produzione di tubazioni, caldaie, recipienti in pressione e strutture in acciaio.",
            "Competenze specializzate nella preparazione di piani di saldatura, prove di pressione e documentazione.",
            "Solida conoscenza di standard internazionali: ISO, DIN, EN, BS, ASME, ASTM, ANSI, ASNT e API.",
            "Conoscenza approfondita delle specifiche di BP, ExxonMobil, Fluor, Technip, Mitsubishi.",
            "Esperienza nel controllo di qualità della saldatura, prove non distruttive (VT, PT) e certificazione saldatori.",
            "Lavoro pluriennale con SMAW, GTAW, GMAW/GS-FCAW, SAW e processi di taglio.",
            "Saldatura e ispezione di acciai al carbonio, acciai a bassa temperatura, acciai inossidabili duplex e superduplex.",
            "Inglese fluente, lingua madre turca, azerbaigiano fluente."
        ],
        showMore: "Mostra di più",
        showLess: "Mostra meno",
    }
};

const workExperience = [
    { date: "2024 – 2025 . 10 mo", en: { title: "Welding Supervisor", project: "Basrah Refinery Upgrading Project GC2 Package", company: "JGC Construction Co. | ILK Construction", location: "Basrah, Iraq", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and  plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Basra Rafineri Yükseltme Projesi GC2 Paketi", company: "JGC Construction Co. | ILK Construction", location: "Basra, Irak", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Tüm kaynak faaliyetleri (boru ve levha) için malzeme ve personel organizasyonundan sorumlu.<br>• Tüm kaynak konularında inşaat yönetimi ile koordinasyon ve Kalite kontrol ile işbirliği.<br>• İşlerin performansı sırasında tüm kaynakçıların (SMAW, GTAW) denetlenmesi.<br>• Tüm nihai KG / KK, NDT ve İlerleme Takibi raporlarının derlenmesi vb." }, de: { title: "Schweißmeister", project: "Basra-Raffinerie-Modernisierungsprojekt GC2-Paket", company: "JGC Construction Co. | ILK Construction", location: "Basra, Irak", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Проект модернизации нефтеперерабатывающего завода Басра, пакет GC2", company: "JGC Construction Co. | ILK Construction", location: "Басра, Ирак", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "مشروع ترقية مصفاة البصرة GC2", company: "JGC Construction Co. | ILK Construction", location: "البصرة، العراق", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "巴士拉炼油厂升级项目 GC2 包", company: "JGC Construction Co. | ILK Construction", location: "巴士拉，伊拉克", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Progetto di Aggiornamento Raffineria di Bassora GC2", company: "JGC Construction Co. | ILK Construction", location: "Bassora, Iraq", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2022 – 2024 . 15 mo", en: { title: "Welding Supervisor", project: "HAOR Modernization Project", company: "Maire Tecnimont – KT | ILK Construction", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "HAOR Modernizasyon Projesi", company: "Maire Tecnimont – KT | ILK Construction", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Tüm kaynak faaliyetleri için malzeme ve personel organizasyonundan sorumlu.<br>• İnşaat yönetimi ile koordinasyon ve Kalite kontrol ile işbirliği.<br>• İşlerin performansı sırasında tüm kaynakçıların (SMAW, GTAW) denetlenmesi.<br>• Tüm nihai KG / KK, NDT ve İlerleme Takibi raporlarının derlenmesi." }, de: { title: "Schweißmeister", project: "HAOR-Modernisierungsprojekt", company: "Maire Tecnimont – KT | ILK Construction", location: "Baku, Aserbaidschan", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Проект модернизации HAOR", company: "Maire Tecnimont – KT | ILK Construction", location: "Баку, Азербайджан", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "مشروع حداثة HAOR", company: "Maire Tecnimont – KT | ILK Construction", location: "باكو، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "HAOR现代化项目", company: "Maire Tecnimont – KT | ILK Construction", location: "巴库，阿塞拜疆", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Progetto di Modernizzazione HAOR", company: "Maire Tecnimont – KT | ILK Construction", location: "Baku, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2021– 2022 . 12 mo", en: { title: "Welding Supervisor", project: "HAOR Modernization Project", company: "Tecnicas Reunidas |  Gomag Energy", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "HAOR Modernizasyon Projesi", company: "Tecnicas Reunidas | Gomag Energy", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonundan sorumlu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "HAOR-Modernisierungsprojekt", company: "Tecnicas Reunidas | Gomag Energy", location: "Baku, Aserbaidschan", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Проект модернизации HAOR", company: "Tecnicas Reunidas | Gomag Energy", location: "Баку, Азербайджан", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "مشروع حداثة HAOR", company: "Tecnicas Reunidas | Gomag Energy", location: "باكو، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "HAOR现代化项目", company: "Tecnicas Reunidas | Gomag Energy", location: "巴库，阿塞拜疆", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Progetto di Modernizzazione HAOR", company: "Tecnicas Reunidas | Gomag Energy", location: "Baku, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2020 – 2020 . 8 mo", en: { title: "Welding Supervisor", project: "MNPZ HydroCracker Unit", company: "MNPZ | Socar Construction", location: "Mozyr, Belarus", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "MNPZ HydroCracker Ünitesi", company: "MNPZ | Socar Construction", location: "Mozyr, Belarus", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "MNPZ-Hydrocrackeringanlage", company: "MNPZ | Socar Construction", location: "Mozyr, Belarus", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Гидрокрекер MNPZ", company: "MNPZ | Socar Construction", location: "Мозырь, Беларусь", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "وحدة MNPZ HydroCracker", company: "MNPZ | Socar Construction", location: "موزير، بيلاروسيا", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "MNPZ加氢裂化装置", company: "MNPZ | Socar Construction", location: "莫济尔，白俄罗斯", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Impianto Hydrocracker MNPZ", company: "MNPZ | Socar Construction", location: "Mozyr, Bielorussia", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2019 – 2020 . 12 mo", en: { title: "Welding Supervisor", project: "Azerikimya – EP300", company: "TechnipFMC | Ustay Construction", location: "Sumqayit, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Azerikimya – EP300", company: "TechnipFMC | Ustay Construction", location: "Sumgayıt, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "Azerikimya – EP300", company: "TechnipFMC | Ustay Construction", location: "Sumgayit, Aserbaidschan", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Azerikimya – EP300", company: "TechnipFMC | Ustay Construction", location: "Сумгаит, Азербайджан", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "Azerikimya – EP300", company: "TechnipFMC | Ustay Construction", location: "سومغاييت، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "Azerikimya – EP300", company: "TechnipFMC | Ustay Construction", location: "苏姆盖特，阿塞拜疆", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Azerikimya – EP300", company: "TechnipFMC | Ustay Construction", location: "Sumgayit, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2017 – 2019 . 24 mo", en: { title: "Welding Supervisor", project: "Socar Polymer – Sumgayit PP / HDPE Production Facility", company: "Maire Tecnimont – KT | Ustay Construction", location: "Sumqayit, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Socar Polymer – Sumgayıt PP / HDPE Üretim Tesisi", company: "Tecnimont – KT | Ustay Construction", location: "Sumgayıt, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "Socar Polymer – Sumgayit PP / HDPE Produktionsanlage", company: "Maire Tecnimont – KT | Ustay Construction", location: "Sumgayit, Aserbaidschan", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Socar Polymer – Завод по производству ПП/HDPE в Сумгаите", company: "Maire Tecnimont – KT | Ustay Construction", location: "Сумгаит, Азербайджан", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "مصنع Socar Polymer لإنتاج PP / HDPE في سومغاييت", company: "Maire Tecnimont – KT | Ustay Construction", location: "سومغاييت، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "Socar Polymer – 苏姆盖特 PP / HDPE 生产设施", company: "Maire Tecnimont – KT | Ustay Construction", location: "苏姆盖特，阿塞拜疆", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Socar Polymer – Impianto di Produzione PP / HDPE Sumgayit", company: "Maire Tecnimont – KT | Ustay Construction", location: "Sumgayit, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2015 – 2017 . 24 mo", en: { title: "Welding Supervisor", project: "Shah-Deniz-Stage-2-SD2 Project-Fabrication-Offshore-Facilities-and-Hook-and-Commissioning-Support", company: "BP Exploration (Shah Deniz) Limited | ATA Consortium (Amec - Tekfen - Azfen)", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Şah Deniz Aşama 2 SD2 Projesi", company: "BP Exploration (Shah Deniz) Limited | ATA Consortium (Amec - Tekfen - Azfen)", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "Shah-Deniz-Stufe-2-SD2-Projekt", company: "BP Exploration (Shah Deniz) Limited | ATA Consortium (Amec - Tekfen - Azfen)", location: "Baku, Aserbaidschan", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Проект Шах-Дениз Этап 2 SD2", company: "BP Exploration (Shah Deniz) Limited | ATA Consortium (Amec - Tekfen - Azfen)", location: "Баку, Азербайджан", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "مشروع شاه دنيز المرحلة 2 SD2", company: "BP Exploration (Shah Deniz) Limited | ATA Consortium (Amec - Tekfen - Azfen)", location: "باكو، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "沙-丹尼兹第二阶段 SD2 项目", company: "BP Exploration (Shah Deniz) Limited | ATA Consortium (Amec - Tekfen - Azfen)", location: "巴库，阿塞拜疆", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Progetto Shah-Deniz Fase 2 SD2", company: "BP Exploration (Shah Deniz) Limited | ATA Consortium (Amec - Tekfen - Azfen)", location: "Baku, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2013 – 2015 . 24 mo", en: { title: "Welding Foreman", project: "Baku Olympic Stadium Project", company: "SOCAR | Tekfen Construction and Installation Co., Inc.", location: "Baku, Azerbaijan", description: "• Supervision on Piping Fabrication & Erection welding.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Formeni", project: "Bakü Olimpiyat Stadı Projesi", company: "SOCAR | Tekfen Construction and Installation Co., Inc.", location: "Bakü, Azerbaycan", description: "• Boru İmalat ve Montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "Baku-Olympiastadion-Projekt", company: "SOCAR | Tekfen Construction and Installation Co., Inc.", location: "Baku, Aserbaidschan", description: "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Бригадир сварщиков", project: "Проект олимпийского стадиона Баку", company: "SOCAR | Tekfen Construction and Installation Co., Inc.", location: "Баку, Азербайджан", description: "• Надзор за сваркой трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "رئيس فريق اللحام", project: "مشروع الملعب الأولمبي في باكو", company: "SOCAR | Tekfen Construction and Installation Co., Inc.", location: "باكو، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب الأنابيب.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接工长", project: "巴库奥林匹克体育场项目", company: "SOCAR | Tekfen Construction and Installation Co., Inc.", location: "巴库，阿塞拜疆", description: "• 监督管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Caposquadra Saldatori", project: "Progetto Stadio Olimpico di Baku", company: "SOCAR | Tekfen Construction and Installation Co., Inc.", location: "Baku, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2010 – 2011 . 8 mo", en: { title: "Welding Supervisor", project: "OGB Water Pipeline D.B", company: "Azersu Joint - Stock Company, CES Consulting | Gulf Drilling supply FZA", location: "Oguz, Azerbaijan", description: "• Supervision on Drilling Borehole Piping Fabrication & Erection.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "OGB Su Boru Hattı D.B", company: "Azersu, CES Consulting | Gulf Drilling supply FZA", location: "Oğuz, Azerbaycan", description: "• Sondaj Kuyusu Boru İmalat ve Montaj denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "OGB-Wasserleitungsprojekt", company: "Azersu Joint - Stock Company, CES Consulting | Gulf Drilling supply FZA", location: "Oğuz, Aserbaidschan", description: "• Beaufsichtigung von Bohrlochrohrverfertigung und Montage.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Проект водопровода OGB", company: "Azersu Joint - Stock Company, CES Consulting | Gulf Drilling supply FZA", location: "Огуз, Азербайджан", description: "• Надзор за сваркой скважинных трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "مشروع خط أنابيب المياه OGB", company: "Azersu Joint - Stock Company, CES Consulting | Gulf Drilling supply FZA", location: "أوغوز، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب أنابيب الآبار.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "OGB 供水管道项目", company: "Azersu Joint - Stock Company, CES Consulting | Gulf Drilling supply FZA", location: "乌古兹，阿塞拜疆", description: "• 监督钻井管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Progetto Oleodotto d'Acqua OGB", company: "Azersu Joint - Stock Company, CES Consulting | Gulf Drilling supply FZA", location: "Oguz, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi di perforazione.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2008 – 2010 . 24 mo", en: { title: "Welding Supervisor", project: "OGB Water Pipeline D.B", company: "Azersu Joint - Stock Company, CES Consulting | Arsan & Ozalp JV", location: "Oguz, Azerbaijan", description: "• Supervision on Drilling Borehole Piping Fabrication & Erection.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "OGB Su Boru Hattı D.B", company: "Azersu, CES Consulting | Arsan & Ozalp JV", location: "Oğuz, Azerbaycan", description: "• Sondaj Kuyusu Boru İmalat ve Montaj denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi.<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "OGB-Wasserleitungsprojekt", company: "Azersu Joint - Stock Company, CES Consulting | Arsan & Ozalp JV", location: "Oğuz, Aserbaidschan", description: "• Beaufsichtigung von Bohrlochrohrverfertigung und Montage.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Проект водопровода OGB", company: "Azersu Joint - Stock Company, CES Consulting | Arsan & Ozalp JV", location: "Огуз, Азербайджан", description: "• Надзор за сваркой скважинных трубопроводов и монтажом.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "مشروع خط أنابيب المياه OGB", company: "Azersu Joint - Stock Company, CES Consulting | Arsan & Ozalp JV", location: "أوغوز، أذربيجان", description: "• الإشراف على لحام تصنيع وتركيب أنابيب الآبار.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "OGB 供水管道项目", company: "Azersu Joint - Stock Company, CES Consulting | Arsan & Ozalp JV", location: "乌古兹，阿塞拜疆", description: "• 监督钻井管道制造和安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Progetto Oleodotto d'Acqua OGB", company: "Azersu Joint - Stock Company, CES Consulting | Arsan & Ozalp JV", location: "Oguz, Azerbaigian", description: "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi di perforazione.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2007 – 2008 . 12 mo", en: { title: "Welding Supervisor", project: "Sangachal Terminal 2nd Produced Water Tank Construction", company: "Azerbaijan International Operating Company (AIOC) | Entrepose Contracting S.A., TML Borova", location: "Baku, Azerbaijan", description: "• Supervision on Erection welding of 21000 m3 capacity Produced water T.<br>• Responsible for organizing material and personnel for all welding activities (piping and plates).<br>• Coordination with construction management and cooperation with Quality control for all welding concerns.<br>• Supervision of all the welders (SMAW, GTAW, SAW) during the perf. of the works.<br>• Reporting compilation of all final QA / QC, NDT and Progress Follow-up etc." }, tr: { title: "Kaynak Süpervizörü", project: "Sangachal Terminali 2. Üretilmiş Su Tankı İnşaatı", company: "AIOC | Entrepose Contracting S.A., TML Borova", location: "Bakü, Azerbaycan", description: "• 21000 m3 kapasiteli Üretilmiş Su Tankının montaj kaynağı denetimi.<br>• Malzeme ve personel organizasyonu.<br>• İnşaat yönetimi ve Kalite kontrol ile koordinasyon.<br>• Kaynakçıların denetlenmesi (SMAW, GTAW, SAW).<br>• Raporlama ve takip." }, de: { title: "Schweißmeister", project: "Bau des 2. Produktwassertanks des Sangachal-Terminals", company: "Azerbaijan International Operating Company (AIOC) | Entrepose Contracting S.A., TML Borova", location: "Baku, Aserbaidschan", description: "• Beaufsichtigung von Montageschweißarbeiten eines 21000 m³ Tanks.<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten.<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle.<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW, SAW) während der Arbeitsausführung.<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten." }, ru: { title: "Мастер сварки", project: "Строительство 2-го резервуара использованной воды терминала Сангачал", company: "Azerbaijan International Operating Company (AIOC) | Entrepose Contracting S.A., TML Borova", location: "Баку, Азербайджан", description: "• Надзор за монтажной сваркой резервуара вместимостью 21000 м³.<br>• Ответственность за организацию материалов и персонала для всех сварочных работ.<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества.<br>• Надзор над всеми сварщиками (SMAW, GTAW, SAW) во время выполнения работ.<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения." }, ar: { title: "مشرف اللحام", project: "بناء خزان المياه المعالجة الثاني لمحطة سانجاتشال", company: "Azerbaijan International Operating Company (AIOC) | Entrepose Contracting S.A., TML Borova", location: "باكو، أذربيجان", description: "• الإشراف على لحام التركيب لخزان بسعة 21000 م3.<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام.<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة.<br>• الإشراف على جميع الملحامين (SMAW, GTAW, SAW) أثناء الأداء.<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم." }, zh: { title: "焊接主管", project: "桑加查尔终点站第二生产水罐建设", company: "Azerbaijan International Operating Company (AIOC) | Entrepose Contracting S.A., TML Borova", location: "巴库，阿塞拜疆", description: "• 监督容量 21000 立方米储罐的安装焊接。<br>• 负责组织所有焊接活动的材料和人员。<br>• 与建筑管理部门协调并与质量控制部门合作。<br>• 在施工期间监督所有焊工（SMAW、GTAW、SAW）。<br>• 编制QA/QC、NDT和进度报告。" }, it: { title: "Supervisore della Saldatura", project: "Costruzione del Secondo Serbatoio d'Acqua Prodotta del Terminal Sangachal", company: "Azerbaijan International Operating Company (AIOC) | Entrepose Contracting S.A., TML Borova", location: "Baku, Azerbaigian", description: "• Supervisione della saldatura di montaggio di un serbatoio da 21000 m³.<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura.<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità.<br>• Supervisione di tutti i saldatori (SMAW, GTAW, SAW) durante l'esecuzione dei lavori.<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori." }},
    { date: "2006 – 2007 . 12 mo", en: { title: "Welder", project: "COP-WC-PDQ-Fabrication-Topsides-Drilling-Facilities-and-Integration-Living-Quarters", company: "AIOC, Azerbaijan International Operating Company | Tekfen Construction", location: "Baku, Azerbaijan", description: "• Working on Fabrication & Erection of TPG 500 off-shore platforms. Welding on (GTAW / FCAW-GS / SMAW) welding Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon steel, Stainless Steel, Cu-Ni, Duplex SS, Super Duplex SS with Corrosion Test Acc." }, tr: { title: "Kaynakçı", project: "COP-WC-PDQ-İmalat-Topsides-Sondaj-Tesisleri ve Entegrasyon-Yaşam Alanları", company: "AIOC | Tekfen Construction", location: "Bakü, Azerbaycan", description: "• TPG 500 açık deniz platformlarının İmalat ve Montajında çalışma. Karbon çelik, Düşük Sıcaklık Karbon çelik, Paslanmaz Çelik, Cu-Ni, Dubleks SS, Süper Dubleks SS borularda farklı dolgu teli ve elektrotlarla (GTAW / FCAW-GS / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "COP-WC-PDQ-Fabrikation", company: "AIOC, Azerbaijan International Operating Company | Tekfen Construction", location: "Baku, Aserbaidschan", description: "• Arbeit an Fertigung und Montage von TPG 500 Offshore-Plattformen. Schweißen mit (GTAW / FCAW-GS / SMAW) an Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, Cu-Ni, Duplex-SS, Super-Duplex-SS mit Korrosionstest-Zulassung." }, ru: { title: "Сварщик", project: "Проект COP-WC-PDQ", company: "AIOC, Azerbaijan International Operating Company | Tekfen Construction", location: "Баку, Азербайджан", description: "• Работа по изготовлению и монтажу морских платформ TPG 500. Сварка (GTAW / FCAW-GS / SMAW) с использованием различных присадочных прутков и электродов на трубопроводах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, Cu-Ni, дуплексной и супердуплексной нержавеющей стали с прохождением коррозионных испытаний." }, ar: { title: "ملحام", project: "مشروع تصنيع منصات الحفر البحرية COP-WC-PDQ", company: "AIOC, Azerbaijan International Operating Company | Tekfen Construction", location: "باكو، أذربيجان", description: "• العمل في تصنيع وتركيب منصات بحرية TPG 500. اللحام بعمليات (GTAW / FCAW-GS / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و Cu-Ni، و Duplex SS، و Super Duplex SS مع اجتياز اختبار التآكل." }, zh: { title: "焊工", project: "COP-WC-PDQ 上部模块钻井设施制造与生活区集成项目", company: "AIOC, Azerbaijan International Operating Company | Tekfen Construction", location: "巴库，阿塞拜疆", description: "• 参与TPG 500海上平台的制造和安装工作。使用不同的焊条和焊丝，通过（GTAW / FCAW-GS / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、铜镍合金、双相不锈钢、超级双相不锈钢管道进行焊接，并通过腐蚀测试验收。" }, it: { title: "Saldatore", project: "Fabbricazione Topsides, Impianti di Perforazione e Integrazione Alloggi COP-WC-PDQ", company: "AIOC, Azerbaijan International Operating Company | Tekfen Construction", location: "Baku, Azerbaigian", description: "• Lavoro su Fabbricazione e Montaggio di piattaforme offshore TPG 500. Saldatura con processi (GTAW / FCAW-GS / SMAW) con diverse bacchette e elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, Cu-Ni, Duplex SS, Super Duplex SS con test di corrosione accettato." }},
    { date: "2005 – 2006 . 12 mo", en: { title: "Welder", project: "TPG 500 outside North Sea", company: "AIOC, Azerbaijan International Operating Company | Technip, MQS", location: "Baku, Azerbaijan", description: "• Working on Fabrication & Erection of TPG 500 off-shore platforms. Welding on (GTAW / FCAW-GS / SMAW) welding Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon steel, Stainless Steel, Cu-Ni, Duplex SS, Super Duplex SS with Corrosion Test Acc." }, tr: { title: "Kaynakçı", project: "TPG 500 Kuzey Denizi Dışı", company: "AIOC | Technip, MQS", location: "Bakü, Azerbaycan", description: "• TPG 500 açık deniz platformlarının İmalat ve Montajında çalışma. Çeşitli malzemeler üzerinde (GTAW / FCAW-GS / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "TPG 500 außerhalb der Nordsee", company: "AIOC, Azerbaijan International Operating Company | Technip, MQS", location: "Baku, Aserbaidschan", description: "• Arbeit an Fertigung und Montage von TPG 500 Offshore-Plattformen. Schweißen mit (GTAW / FCAW-GS / SMAW) an Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, Cu-Ni, Duplex-SS, Super-Duplex-SS mit Korrosionstest-Zulassung." }, ru: { title: "Сварщик", project: "TPG 500 за пределами Северного моря", company: "AIOC, Azerbaijan International Operating Company | Technip, MQS", location: "Баку, Азербайджан", description: "• Работа по изготовлению и монтажу морских платформ TPG 500. Сварка (GTAW / FCAW-GS / SMAW) на трубопроводах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, Cu-Ni, дуплексной и супердуплексной нержавеющей стали с прохождением коррозионных испытаний." }, ar: { title: "ملحام", project: "TPG 500 خارج بحر الشمال", company: "AIOC, Azerbaijan International Operating Company | Technip, MQS", location: "باكو، أذربيجان", description: "• العمل في تصنيع وتركيب منصات بحرية TPG 500. اللحام بعمليات (GTAW / FCAW-GS / SMAW) على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و Cu-Ni، و Duplex SS، و Super Duplex SS مع اجتياز اختبار التآكل." }, zh: { title: "焊工", project: "北海以外的 TPG 500 项目", company: "AIOC, Azerbaijan International Operating Company | Technip, MQS", location: "巴库，阿塞拜疆", description: "• 参与TPG 500海上平台的制造和安装工作。使用（GTAW / FCAW-GS / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、铜镍合金、双相不锈钢、超级双相不锈钢管道进行焊接，并通过腐蚀测试验收。" }, it: { title: "Saldatore", project: "TPG 500 fuori dal Mare del Nord", company: "AIOC, Azerbaijan International Operating Company | Technip, MQS", location: "Baku, Azerbaigian", description: "• Lavoro su Fabbricazione e Montaggio di piattaforme offshore TPG 500. Saldatura con processi (GTAW / FCAW-GS / SMAW) su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, Cu-Ni, Duplex SS, Super Duplex SS con test di corrosione accettato." }},
    { date: "2004 – 2005 . 12 mo", en: { title: "Welder", project: "AGT Pipeline", company: "Baku - Tbilisi - Ceyhan Pipeline Co. Ltd. (BTC) & South Caucasus Pipeline Co. (SCP) | CCC", location: "Baku, Azerbaijan", description: "• Working on Fabrication and pipeline of AGT pipeline. 1/2\" and over. Welding on (GTAW / SMAW) welding Processes Up-Hill and Down-Hill with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless steel Test Accepted." }, tr: { title: "Kaynakçı", project: "AGT Boru Hattı", company: "BTC & SCP | CCC", location: "Bakü, Azerbaycan", description: "• AGT boru hattının imalat ve kaynak işleri. 1/2\" ve üzerine borularda Yokuş Yukarı ve Yokuş Aşağı (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "AGT-Pipeline", company: "Baku - Tbilisi - Ceyhan Pipeline Co. Ltd. (BTC) & South Caucasus Pipeline Co. (SCP) | CCC", location: "Baku, Aserbaidschan", description: "• Arbeit an Fertigung und Verlegung der AGT-Pipeline. 1/2\" und größer. Schweißen mit (GTAW / SMAW) in Steig- und Fallposition mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Трубопровод AGT", company: "Baku - Tbilisi - Ceyhan Pipeline Co. Ltd. (BTC) & South Caucasus Pipeline Co. (SCP) | CCC", location: "Баку, Азербайджан", description: "• Работа по изготовлению и прокладке трубопровода AGT. 1/2\" и более. Сварка (GTAW / SMAW) на подъем и спуск с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали. Испытания пройдены." }, ar: { title: "ملحام", project: "خط أنابيب AGT", company: "Baku - Tbilisi - Ceyhan Pipeline Co. Ltd. (BTC) & South Caucasus Pipeline Co. (SCP) | CCC", location: "باكو، أذربيجان", description: "• العمل في تصنيع وخط أنابيب AGT. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) صعودًا وهبوطًا باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني والفولاذ الكربوني منخفض الحرارة والفولاذ المقاوم للصدأ. تم قبول الاختبار." }, zh: { title: "焊工", project: "AGT 管道项目", company: "Baku - Tbilisi - Ceyhan Pipeline Co. Ltd. (BTC) & South Caucasus Pipeline Co. (SCP) | CCC", location: "巴库，阿塞拜疆", description: "• 参与AGT管道的制造和铺设。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）上坡焊和下坡焊工艺对碳钢、低温碳钢、不锈钢管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Oleodotto AGT", company: "Baku - Tbilisi - Ceyhan Pipeline Co. Ltd. (BTC) & South Caucasus Pipeline Co. (SCP) | CCC", location: "Baku, Azerbaigian", description: "• Lavoro sulla fabbricazione e posa dell'oleodotto AGT. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) in posizione ascendente e discendente con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile. Test accettato." }},
    { date: "2003 – 2004 . 12 mo", en: { title: "Welder", project: "Sangachal Terminal E.P", company: "BP Exploration Caspian Sea Limited | Tekfen Construction and Installation Co. Inc.", location: "Baku, Azerbaijan", description: "• Working on Fabrication and at site of Expansion Terminal 1/2\" and over Welding on (GTAW / SMAW) welding Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, Duplex SS, Super Duplex SS Test Accepted." }, tr: { title: "Kaynakçı", project: "Sangachal Terminali Genişletme Projesi", company: "BP Exploration | Tekfen Construction", location: "Bakü, Azerbaycan", description: "• Genişletme Terminali sahasında 1/2\" ve üzerine borularda imalat ve kaynak işleri. Çeşitli malzemelerde (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "Sangachal-Terminal-Erweiterung", company: "BP Exploration Caspian Sea Limited | Tekfen Construction and Installation Co. Inc.", location: "Baku, Aserbaidschan", description: "• Arbeit an Fertigung und vor Ort am Erweiterungsterminal. 1/2\" und größer. Schweißen mit (GTAW / SMAW) mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, Duplex-SS, Super-Duplex-SS. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Расширение терминала Сангачал", company: "BP Exploration Caspian Sea Limited | Tekfen Construction and Installation Co. Inc.", location: "Баку, Азербайджан", description: "• Работа по изготовлению на площадке расширения терминала. 1/2\" и более. Сварка (GTAW / SMAW) с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, дуплексной и супердуплексной нержавеющей стали. Испытания пройдены." }, ar: { title: "ملحام", project: "توسعة محطة سانجاتشال", company: "BP Exploration Caspian Sea Limited | Tekfen Construction and Installation Co. Inc.", location: "باكو، أذربيجان", description: "• العمل في التصنيع وفي موقع محطة التوسعة. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و Duplex SS، و Super Duplex SS. تم قبول الاختبار." }, zh: { title: "焊工", project: "桑加查尔终端扩建项目", company: "BP Exploration Caspian Sea Limited | Tekfen Construction and Installation Co. Inc.", location: "巴库，阿塞拜疆", description: "• 在扩建终端现场进行制造工作。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、双相不锈钢、超级双相不锈钢管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Ampliamento Terminal Sangachal", company: "BP Exploration Caspian Sea Limited | Tekfen Construction and Installation Co. Inc.", location: "Baku, Azerbaigian", description: "• Lavoro sulla fabbricazione e in cantiere del Terminal di Espansione. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, Duplex SS, Super Duplex SS. Test accettato." }},
    { date: "2001 – 2003 . 24 mo", en: { title: "Welder", project: "Severnaya 400 MW Gas Combined Cycle Power Plant", company: "Azerenergy | Mitsui - Mitsubishi Heavy Industries Consortium, Epro Energy, TML", location: "Baku, Azerbaijan", description: "• Working on Fabrication and at site of Power plant 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "Severnaya 400 MW Gaz Kombine Çevrim Santrali", company: "Azerenergy | Mitsui - Mitsubishi, Epro Energy, TML", location: "Bakü, Azerbaycan", description: "• Enerji santrali sahasında 1/2\" ve üzerine borularda imalat ve kaynak işleri. Çeşitli malzemelerde (P91, P22, P11 dahil) (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "Severnaya 400-MW-Gaskombikraftwerk", company: "Azerenergy | Mitsui - Mitsubishi Heavy Industries Consortium, Epro Energy, TML", location: "Baku, Aserbaidschan", description: "• Arbeit an Fertigung und vor Ort am Kraftwerk. 1/2\" und größer. Schweißen mit (GTAW / SMAW) mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, P91, P22, P11. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Газотурбинная электростанция Северная 400 МВт", company: "Azerenergy | Mitsui - Mitsubishi Heavy Industries Consortium, Epro Energy, TML", location: "Баку, Азербайджан", description: "• Работа по изготовлению на площадке электростанции. 1/2\" и более. Сварка (GTAW / SMAW) с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, P91, P22, P11. Испытания пройдены." }, ar: { title: "ملحام", project: "محطة سيفيرنايا 400 ميجاوات للدورة المركبة بالغاز", company: "Azerenergy | Mitsui - Mitsubishi Heavy Industries Consortium, Epro Energy, TML", location: "باكو، أذربيجان", description: "• العمل في التصنيع وفي موقع محطة الطاقة. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و P91، و P22، و P11. تم قبول الاختبار." }, zh: { title: "焊工", project: "Severnaya 400兆瓦燃气联合循环电厂", company: "Azerenergy | Mitsui - Mitsubishi Heavy Industries Consortium, Epro Energy, TML", location: "巴库，阿塞拜疆", description: "• 在电厂现场进行制造工作。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、P91、P22、P11管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Centrale a Ciclo Combinato a Gas Severnaya 400 MW", company: "Azerenergy | Mitsui - Mitsubishi Heavy Industries Consortium, Epro Energy, TML", location: "Baku, Azerbaigian", description: "• Lavoro sulla fabbricazione e in cantiere della centrale elettrica. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, P91, P22, P11. Test accettato." }} ,
    { date: "2000 – 2001 . 12 mo", en: { title: "Welder", project: "Isomerization Unit", company: "Tupras Turkish Petroleum Refineries Co. | Epro Energy, Entes", location: "Izmit, Turkey", description: "• Working on Fabrication and at site of Tüpraş 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "İzomerizasyon Ünitesi", company: "Tüpraş | Epro Energy, Entes", location: "İzmit, Türkiye", description: "• Tüpraş sahasında 1/2\" ve üzerine borularda imalat ve kaynak işleri. Çeşitli malzemelerde (P91, P22, P11 dahil) (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "Isomerisierungsanlage", company: "Tupras Turkish Petroleum Refineries Co. | Epro Energy, Entes", location: "Izmit, Türkei", description: "• Arbeit an Fertigung und vor Ort bei Tüpraş. 1/2\" und größer. Schweißen mit (GTAW / SMAW) mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, P91, P22, P11. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Установка изомеризации", company: "Tupras Turkish Petroleum Refineries Co. | Epro Energy, Entes", location: "Измит, Турция", description: "• Работа по изготовлению на площадке Tüpraş. 1/2\" и более. Сварка (GTAW / SMAW) с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, P91, P22, P11. Испытания пройдены." }, ar: { title: "ملحام", project: "وحدة الأزمرة", company: "Tupras Turkish Petroleum Refineries Co. | Epro Energy, Entes", location: "إزميت، تركيا", description: "• العمل في التصنيع وفي موقع Tüpraş. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و P91، و P22، و P11. تم قبول الاختبار." }, zh: { title: "焊工", project: "异构化装置", company: "Tupras Turkish Petroleum Refineries Co. | Epro Energy, Entes", location: "伊兹米特，土耳其", description: "• 在Tüpraş现场进行制造工作。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、P91、P22、P11管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Unità di Isomerizzazione", company: "Tupras Turkish Petroleum Refineries Co. | Epro Energy, Entes", location: "Izmit, Turchia", description: "• Lavoro sulla fabbricazione e in cantiere di Tüpraş. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, P91, P22, P11. Test accettato." }},
    { date: "1999 – 2000 . 12 mo", en: { title: "Welder", project: "CCR & Isomerization units", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | FWI & Gama Industry Consortium", location: "Izmir, Turkey", description: "• Working on Fabrication and at site of Tüpraş 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "CCR & İzomerizasyon Üniteleri", company: "Tüpraş | FWI & Gama Industry Consortium", location: "İzmir, Türkiye", description: "• Tüpraş sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (P91, P22, P11 dahil) (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "CCR- & Isomerisierungsanlagen", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | FWI & Gama Industry Consortium", location: "Izmir, Türkei", description: "• Arbeit an Fertigung und vor Ort bei Tüpraş. 1/2\" und größer. Schweißen mit (GTAW / SMAW) mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, P91, P22, P11. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Установки CCR и изомеризации", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | FWI & Gama Industry Consortium", location: "Измир, Турция", description: "• Работа по изготовлению на площадке Tüpraş. 1/2\" и более. Сварка (GTAW / SMAW) с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, P91, P22, P11. Испытания пройдены." }, ar: { title: "ملحام", project: "وحدات CCR والأزمرة", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | FWI & Gama Industry Consortium", location: "إزمير، تركيا", description: "• العمل في التصنيع وفي موقع Tüpraş. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و P91، و P22، و P11. تم قبول الاختبار." }, zh: { title: "焊工", project: "CCR和异构化装置", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | FWI & Gama Industry Consortium", location: "伊兹密尔，土耳其", description: "• 在Tüpraş现场进行制造工作。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、P91、P22、P11管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Unità CCR e di Isomerizzazione", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | FWI & Gama Industry Consortium", location: "Izmir, Turchia", description: "• Lavoro sulla fabbricazione e in cantiere di Tüpraş. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, P91, P22, P11. Test accettato." }},
    { date: "1997 – 1998 . 12 mo", en: { title: "Welder", project: "Fergana Oil Refinery", company: "Uzbekneftegas | Tekfen Construction and Installation Co., Inc.", location: "Fergana, Uzbekistan", description: "• Working on Fabrication and at site of Gas Refinery 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "Fergana Petrol Rafinerisi", company: "Uzbekneftegas | Tekfen Construction", location: "Fergana, Özbekistan", description: "• Gaz Rafinerisi sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (P91, P22, P11 dahil) (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "Ölraffinerie Fergana", company: "Uzbekneftegas | Tekfen Construction and Installation Co., Inc.", location: "Fergana, Usbekistan", description: "• Arbeit an Fertigung und vor Ort in der Gasraffinerie. 1/2\" und größer. Schweißen mit (GTAW / SMAW) mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, P91, P22, P11. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Ферганский нефтеперерабатывающий завод", company: "Uzbekneftegas | Tekfen Construction and Installation Co., Inc.", location: "Фергана, Узбекистан", description: "• Работа по изготовлению на площадке газоперерабатывающего завода. 1/2\" и более. Сварка (GTAW / SMAW) с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, P91, P22, P11. Испытания пройдены." }, ar: { title: "ملحام", project: "مصفاة فرغانة للنفط", company: "Uzbekneftegas | Tekfen Construction and Installation Co., Inc.", location: "فرغانة، أوزبكستان", description: "• العمل في التصنيع وفي موقع مصفاة الغاز. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و P91، و P22، و P11. تم قبول الاختبار." }, zh: { title: "焊工", project: "费尔干纳炼油厂", company: "Uzbekneftegas | Tekfen Construction and Installation Co., Inc.", location: "费尔干纳，乌兹别克斯坦", description: "• 在炼油厂现场进行制造工作。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、P91、P22、P11管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Raffineria di Petrolio di Fergana", company: "Uzbekneftegas | Tekfen Construction and Installation Co., Inc.", location: "Fergana, Uzbekistan", description: "• Lavoro sulla fabbricazione e in cantiere della Raffineria di Gas. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, P91, P22, P11. Test accettato." }},
    { date: "1995 – 1997 . 12 mo", en: { title: "Welder", project: "Etilen Polietilen Petkim", company: "Petkim | Engin Makina", location: "Izmir, Turkey", description: "• Working on Fabrication and at site of Petkim 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "Etilen Polietilen Petkim", company: "Petkim | Engin Makina", location: "İzmir, Türkiye", description: "• Petkim sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (P91, P22, P11 dahil) (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "Ethylen-Polyethylen Petkim", company: "Petkim | Engin Makina", location: "Izmir, Türkei", description: "• Arbeit an Fertigung und vor Ort bei Petkim. 1/2\" und größer. Schweißen mit (GTAW / SMAW) mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, P91, P22, P11. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Этилен-Полиэтилен Петким", company: "Petkim | Engin Makina", location: "Измир, Турция", description: "• Работа по изготовлению на площадке Petkim. 1/2\" и более. Сварка (GTAW / SMAW) с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, P91, P22, P11. Испытания пройдены." }, ar: { title: "ملحام", project: "إيثيلين بولي إيثيلين بتكيم", company: "Petkim | Engin Makina", location: "إزمير، تركيا", description: "• العمل في التصنيع وفي موقع Petkim. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و P91، و P22، و P11. تم قبول الاختبار." }, zh: { title: "焊工", project: "Petkim乙烯聚乙烯项目", company: "Petkim | Engin Makina", location: "伊兹密尔，土耳其", description: "• 在Petkim现场进行制造工作。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、P91、P22、P11管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Etilene Polietilene Petkim", company: "Petkim | Engin Makina", location: "Izmir, Turchia", description: "• Lavoro sulla fabbricazione e in cantiere di Petkim. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, P91, P22, P11. Test accettato." }},
    { date: "1991 – 1993 . 12 mo", en: { title: "Welder", project: "CCR & ISO Unit Tüpraş", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | Atilla Dogan", location: "Izmir, Turkey", description: "• Working on Fabrication and at site of Tüpraş 1/2\" and over Welding on (GTAW / SMAW) Processes with different filler rod & electrodes on Piping Carbon steel, Low Temperature Carbon Steel, Stainless Steel, P91, P22, P11 Test Accepted." }, tr: { title: "Kaynakçı", project: "CCR & ISO Ünitesi Tüpraş", company: "Tüpraş | Atilla Dogan", location: "İzmir, Türkiye", description: "• Tüpraş sahasında 1/2\" ve üzeri borularda imalat ve kaynak işleri. Çeşitli malzemelerde (P91, P22, P11 dahil) (GTAW / SMAW) kaynak işlemleri." }, de: { title: "Schweißer", project: "CCR- & ISO-Anlage Tüpraş", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | Atilla Dogan", location: "Izmir, Türkei", description: "• Arbeit an Fertigung und vor Ort bei Tüpraş. 1/2\" und größer. Schweißen mit (GTAW / SMAW) mit verschiedenen Zusatzwerkstoffen auf Rohren aus Kohlenstoffstahl, Tieftemperatur-Kohlenstoffstahl, Edelstahl, P91, P22, P11. Prüfung bestanden." }, ru: { title: "Сварщик", project: "Установка CCR и ISO Tüpraş", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | Atilla Dogan", location: "Измир, Турция", description: "• Работа по изготовлению на площадке Tüpraş. 1/2\" и более. Сварка (GTAW / SMAW) с различными присадочными материалами на трубах из углеродистой стали, низкотемпературной углеродистой стали, нержавеющей стали, P91, P22, P11. Испытания пройдены." }, ar: { title: "ملحام", project: "وحدة CCR و ISO Tüpraş", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | Atilla Dogan", location: "إزمير، تركيا", description: "• العمل في التصنيع وفي موقع Tüpraş. 1/2 بوصة وأكبر. اللحام بعمليات (GTAW / SMAW) باستخدام أسلاك حشو وأقطاب كهربائية مختلفة على أنابيب من الصلب الكربوني، والفولاذ الكربوني منخفض الحرارة، والفولاذ المقاوم للصدأ، و P91، و P22، و P11. تم قبول الاختبار." }, zh: { title: "焊工", project: "Tüpraş CCR和ISO装置", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | Atilla Dogan", location: "伊兹密尔，土耳其", description: "• 在Tüpraş现场进行制造工作。直径1/2英寸及以上。使用不同的焊条和焊丝，通过（GTAW / SMAW）焊接工艺对碳钢、低温碳钢、不锈钢、P91、P22、P11管道进行焊接。测试已验收。" }, it: { title: "Saldatore", project: "Unità CCR e ISO Tüpraş", company: "Tüpraş Türk Petrol Rafinerileri A.Ş. | Atilla Dogan", location: "Izmir, Turchia", description: "• Lavoro sulla fabbricazione e in cantiere di Tüpraş. 1/2\" e superiori. Saldatura con processi (GTAW / SMAW) con diverse bacchette ed elettrodi su tubazioni in acciaio al carbonio, acciaio al carbonio per basse temperature, acciaio inossidabile, P91, P22, P11. Test accettato." }},
];

const referencesData = [
    { en: { name: "ENGIN GUNGORMUS", title: "Project Director" }, tr: { name: "ENGIN GUNGORMUS", title: "Proje Direktörü" }, de: { name: "ENGIN GUNGORMUS", title: "Projektdirektor" }, ru: { name: "ЭНГИН ГЮНГЁРМЮШ", title: "Директор проекта" }, ar: { name: "إنجين جونجورموش", title: "مدير المشروع" }, zh: { name: "ENGIN GUNGORMUS", title: "项目总监" }, it: { name: "ENGIN GUNGORMUS", title: "Direttore del Progetto" }, phone: "+90 530 425 17 43" },
    { en: { name: "ALI GURGOZ", title: "General Manager<br>GoMAG Energy" }, tr: { name: "ALI GURGOZ", title: "Genel Müdür<br>GoMAG Energy" }, de: { name: "ALI GURGOZ", title: "Geschäftsführer<br>GoMAG Energy" }, ru: { name: "АЛИ ГЮРГОЗ", title: "Генеральный директор<br>GoMAG Energy" }, ar: { name: "علي جورجوز", title: "مدير عام<br>GoMAG Energy" }, zh: { name: "ALI GURGOZ", title: "总经理<br>GoMAG Energy" }, it: { name: "ALI GURGOZ", title: "Direttore Generale<br>GoMAG Energy" }, phone: "+90 533 422 88 47" },
    { en: { name: "OZGUR YILDIZ", title: "Construction Manager<br>Tekfen Construction" }, tr: { name: "OZGUR YILDIZ", title: "İnşaat Müdürü<br>Tekfen Construction" }, de: { name: "OZGUR YILDIZ", title: "Bauleiter<br>Tekfen Construction" }, ru: { name: "ОЗГЮР ЙЫЛДЫЗ", title: "Менеджер по строительству<br>Tekfen Construction" }, ar: { name: "أوزغور يلدز", title: "مدير الإنشاءات<br>Tekfen Construction" }, zh: { name: "OZGUR YILDIZ", title: "施工经理<br>Tekfen Construction" }, it: { name: "OZGUR YILDIZ", title: "Direttore dei Lavori<br>Tekfen Construction" }, phone: "+994 50 332 03 56" },
    { en: { name: "CAN KARAMAN", title: "Projects Manager<br>Hill International, Inc." }, tr: { name: "CAN KARAMAN", title: "Proje Müdürü<br>Hill International, Inc." }, de: { name: "CAN KARAMAN", title: "Projektmanager<br>Hill International, Inc." }, ru: { name: "ДЖАН КАРАМАН", title: "Менеджер проектов<br>Hill International, Inc." }, ar: { name: "جان كرمان", title: "مدير المشاريع<br>Hill International, Inc." }, zh: { name: "CAN KARAMAN", title: "项目经理<br>Hill International, Inc." }, it: { name: "CAN KARAMAN", title: "Manager dei Progetti<br>Hill International, Inc." }, phone: "+90 532 761 85 81" },
    { en: { name: "AHMET FİNCİ", title: "Country Manager<br>ILK Construction" }, tr: { name: "AHMET FİNCİ", title: "Ülke Müdürü<br>ILK Construction" }, de: { name: "AHMET FİNCİ", title: "Landesleiter<br>ILK Construction" }, ru: { name: "АХМЕТ ФИНДЖИ", title: "Региональный менеджер<br>ILK Construction" }, ar: { name: "أحمد فينجي", title: "المدير الإقليمي<br>ILK Construction" }, zh: { name: "AHMET FİNCİ", title: "国家经理<br>ILK Construction" }, it: { name: "AHMET FİNCİ", title: "Country Manager<br>ILK Construction" }, phone: "+90 532 596 10 02" },
    { en: { name: "ALI RIZA TACYILDIZ", title: "Project Manager<br>ILK Construction" }, tr: { name: "ALI RIZA TACYILDIZ", title: "Proje Müdürü<br>ILK Construction" }, de: { name: "ALI RIZA TACYILDIZ", title: "Projektmanager<br>ILK Construction" }, ru: { name: "АЛИ РИЗА ТАДЖЙЫЛДЫЗ", title: "Менеджер проекта<br>ILK Construction" }, ar: { name: "علي رضا تاجيلديز", title: "مدير المشروع<br>ILK Construction" }, zh: { name: "ALI RIZA TACYILDIZ", title: "项目经理<br>ILK Construction" }, it: { name: "ALI RIZA TACYILDIZ", title: "Project Manager<br>ILK Construction" }, phone: "+90 538 261 39 20" },
    { en: { name: "DUZGUN YEKLITAS", title: "Construction Manager<br>GoMAG Energy" }, tr: { name: "DUZGUN YEKLITAS", title: "İnşaat Müdürü<br>GoMAG Energy" }, de: { name: "DUZGUN YEKLITAS", title: "Bauleiter<br>GoMAG Energy" }, ru: { name: "ДЮЗГЮН ЙЕКЛИТАШ", title: "Менеджер по строительству<br>GoMAG Energy" }, ar: { name: "دوزغون يكليتاش", title: "مدير الإنشاءات<br>GoMAG Energy" }, zh: { name: "DUZGUN YEKLITAS", title: "施工经理<br>GoMAG Energy" }, it: { name: "DUZGUN YEKLITAS", title: "Direttore dei Lavori<br>GoMAG Energy" }, phone: "+90 544 517 17 62" },
    { en: { name: "BULENT UZEL", title: "Piping Superintendent<br>Tecnicas Reunidas" }, tr: { name: "BULENT UZEL", title: "Boru Şefi<br>Tecnicas Reunidas" }, de: { name: "BULENT UZEL", title: "Rohrleitungs-Superintendent<br>Tecnicas Reunidas" }, ru: { name: "БЮЛЕНТ УЗЕЛ", title: "Начальник участка трубопроводов<br>Tecnicas Reunidas" }, ar: { name: "بولنت أوزيل", title: "مشرف الأنابيب<br>Tecnicas Reunidas" }, zh: { name: "BULENT UZEL", title: "管道主管<br>Tecnicas Reunidas" }, it: { name: "BULENT UZEL", title: "Sovrintendente alle Tubazioni<br>Tecnicas Reunidas" }, phone: "+90 541 714 25 10" },
    { en: { name: "SELAMI KILIÇ", title: "Construction Manager<br>Caspian Technology Supply" }, tr: { name: "SELAMI KILIÇ", title: "İnşaat Müdürü<br>Caspian Technology Supply" }, de: { name: "SELAMI KILIÇ", title: "Bauleiter<br>Caspian Technology Supply" }, ru: { name: "СЕЛАМИ КЫЛЫЧ", title: "Менеджер по строительству<br>Caspian Technology Supply" }, ar: { name: "سلامي كيليتش", title: "مدير الإنشاءات<br>Caspian Technology Supply" }, zh: { name: "SELAMI KILIÇ", title: "施工经理<br>Caspian Technology Supply" }, it: { name: "SELAMI KILIÇ", title: "Direttore dei Lavori<br>Caspian Technology Supply" }, phone: "+994 51 449 34 66" },
    { en: { name: "CAGATAY CAGLAYAN", title: "Country Manager<br>Ustay Construction" }, tr: { name: "CAGATAY CAGLAYAN", title: "Ülke Müdürü<br>Ustay Construction" }, de: { name: "CAGATAY CAGLAYAN", title: "Landesleiter<br>Ustay Construction" }, ru: { name: "ЧАГАТАЙ ЧАГЛАЯН", title: "Региональный менеджер<br>Ustay Construction" }, ar: { name: "تشاتاي تشاغلايان", title: "المدير الإقليمي<br>Ustay Construction" }, zh: { name: "CAGATAY CAGLAYAN", title: "国家经理<br>Ustay Construction" }, it: { name: "CAGATAY CAGLAYAN", title: "Country Manager<br>Ustay Construction" }, phone: "+7 926 942 89 62" },
];


// --- FONKSİYON BÖLÜMÜ ---

// Global scope'a fonksiyonu ekliyoruz ki HTML'den erişilebilsin
window.setLanguage = function(lang) {
    // Basic translations for elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        } else if (translations['en'][key] !== undefined) {
            // Fallback to English if translation is missing
            el.innerHTML = translations['en'][key];
        }
    });

    // Update the main page title
    const pageTitleKey = "pageTitle";
    document.title = (translations[lang] && translations[lang][pageTitleKey]) || translations['en'][pageTitleKey];

    loadDetailedSkills(lang);
    loadTechnicalSkills(lang);
    loadExperience(lang);
    loadReferences(lang);
    loadTraining(lang);
    loadCertificates(lang);

    // Update dropdown button text and active state
    const langBtn = document.getElementById('language-btn');
    const langCode = lang.toUpperCase();
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${langCode}`;
    
    // Update active state in dropdown menu
    document.querySelectorAll('.dropdown-item').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
    });
    
    // Close dropdown after selection
    const dropdown = document.getElementById('language-dropdown');
    dropdown.setAttribute('hidden', '');
    document.getElementById('language-btn').setAttribute('aria-expanded', 'false');
}

function loadTraining(lang) {
    const container = document.getElementById('training-list');
    container.innerHTML = '';
    const list = (translations[lang] && translations[lang].trainingList) || translations.en.trainingList;
    list.forEach(item => {
        container.innerHTML += `<li>${item}</li>`;
    });
}

function loadCertificates(lang) {
    const container = document.getElementById('certificates-list');
    container.innerHTML = '';
    const list = (translations[lang] && translations[lang].certificatesList) || translations.en.certificatesList;
    list.forEach(item => {
        container.innerHTML += `<li>${item}</li>`;
    });
}

function loadDetailedSkills(lang) {
    const container = document.getElementById('skills-list');
    container.innerHTML = '';
    const skills = (translations[lang] && translations[lang].skills) || translations.en.skills;
    for (const skill in skills) {
        container.innerHTML += `<div class="skill-item"><p>${skill}</p><div class="progress-bar"><div class="progress" style="width: ${skills[skill]}%;"></div></div></div>`;
    }
}

function loadTechnicalSkills(lang) {
    const container = document.getElementById('tech-skills-list');
    container.innerHTML = '';
    const list = (translations[lang] && translations[lang].techSkillsList) || translations.en.techSkillsList;
    list.forEach(skill => {
        container.innerHTML += `<li>${skill}</li>`;
    });
}

function loadExperience(lang) {
    const container = document.querySelector('.experience-list');
    container.innerHTML = '';
    workExperience.forEach((job, idx) => {
        const jobData = job[lang] || job.en; // Fallback to English if language not found
        container.innerHTML += `
            <details class="experience-card">
                <summary>
                    <div class="job-title">${jobData.title}</div>
                    <div class="job-info"><strong>${jobData.project}</strong> · ${jobData.company} · <em>${job.date} | ${jobData.location}</em></div>
                </summary>
                <div class="job-description">${jobData.description}</div>
            </details>
        `;
    });

    const details = container.querySelectorAll('details.experience-card');
    const toggleBtn = document.getElementById('experience-toggle');
    const visibleCount = 6;
    
    if (details.length > visibleCount) {
        details.forEach((d, i) => {
            if (i >= visibleCount) {
                d.classList.add('extra-experience');
                d.style.display = 'none';
            } else {
                 d.setAttribute('open', ''); // Open the first few items
            }
        });

        toggleBtn.style.display = 'inline-block';
        toggleBtn.innerText = (translations[lang] && translations[lang].showMore) || translations.en.showMore;
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.dataset.expanded = 'false';

        toggleBtn.onclick = () => {
            const isExpanded = toggleBtn.dataset.expanded === 'true';
            const currentLangShowMore = (translations[lang] && translations[lang].showMore) || translations.en.showMore;
            const currentLangShowLess = (translations[lang] && translations[lang].showLess) || translations.en.showLess;

            details.forEach((d, i) => {
                if (i >= visibleCount) {
                    d.style.display = isExpanded ? 'none' : 'block';
                }
            });

            toggleBtn.dataset.expanded = !isExpanded;
            toggleBtn.innerText = isExpanded ? currentLangShowMore : currentLangShowLess;
            toggleBtn.setAttribute('aria-expanded', !isExpanded);
        };
    } else {
        toggleBtn.style.display = 'none';
        details.forEach(d => d.setAttribute('open', '')); // Open all if less than limit
    }
}

function loadReferences(lang) {
    const container = document.querySelector('.references-grid');
    container.innerHTML = '';
    referencesData.forEach(ref => {
        const refData = ref[lang] || ref.en;
        const displayName = refData.name;
        const displayTitle = refData.title;
        const rawPhone = ref.phone || '';
        const phoneDigits = rawPhone.replace(/[^+\d]/g, '');
        const waDigits = phoneDigits.replace(/^\+/, '');
        const telHref = phoneDigits ? `tel:${phoneDigits}` : '';
        const waHref = waDigits ? `https://wa.me/${waDigits}` : '';

        container.innerHTML += `<div class="reference-card">
                <div class="name">${displayName}</div>
                <div class="title">${displayTitle}</div>
                <div class="phone">${telHref ? `<a href="${telHref}">${rawPhone}</a>` : rawPhone} ${waHref ? `<a class="wa-link" aria-label="WhatsApp ${displayName}" href="${waHref}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i></a>` : ''}</div>
            </div>`;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        themeToggle.setAttribute('aria-pressed', isLightMode);
    });
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        document.body.classList.add('light-mode');
        themeToggle.setAttribute('aria-pressed', 'true');
    }
    
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    
    languageBtn.addEventListener('click', () => {
        const isHidden = languageDropdown.hasAttribute('hidden');
        if (isHidden) {
            languageDropdown.removeAttribute('hidden');
            languageBtn.setAttribute('aria-expanded', 'true');
        } else {
            languageDropdown.setAttribute('hidden', '');
            languageBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-switcher')) {
            languageDropdown.setAttribute('hidden', '');
            languageBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Set default language on page load
    setLanguage('en');
});
