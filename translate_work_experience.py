#!/usr/bin/env python3
# This script generates translated work experience data for all 5 new languages

translations = {
    "titles": {
        "Welding Supervisor": {
            "de": "Schweißmeister",
            "ru": "Мастер сварки",
            "ar": "مشرف اللحام",
            "zh": "焊接主管",
            "it": "Supervisore della Saldatura"
        },
        "Welding Foreman": {
            "de": "Schweißmeister",
            "ru": "Бригадир сварщиков",
            "ar": "رئيس فريق اللحام",
            "zh": "焊接工长",
            "it": "Caposquadra Saldatori"
        },
        "Welder": {
            "de": "Schweißer",
            "ru": "Сварщик",
            "ar": "ملحام",
            "zh": "焊工",
            "it": "Saldatore"
        }
    },
    "projects": {
        "Basrah Refinery Upgrading Project GC2 Package": {
            "de": "Basra-Raffinerie-Modernisierungsprojekt GC2-Paket",
            "ru": "Проект модернизации нефтеперерабатывающего завода Басра, пакет GC2",
            "ar": "مشروع ترقية مصفاة البصرة GC2",
            "zh": "巴士拉炼油厂升级项目 GC2 包",
            "it": "Progetto di Aggiornamento Raffineria di Bassora GC2"
        },
        "HAOR Modernization Project": {
            "de": "HAOR-Modernisierungsprojekt",
            "ru": "Проект модернизации HAOR",
            "ar": "مشروع حداثة HAOR",
            "zh": "HAOR现代化项目",
            "it": "Progetto di Modernizzazione HAOR"
        },
        "MNPZ HydroCracker Unit": {
            "de": "MNPZ-Hydrocrackeringanlage",
            "ru": "Гидрокрекер MNPZ",
            "ar": "وحدة MNPZ HydroCracker",
            "zh": "MNPZ加氢裂化装置",
            "it": "Impianto Hydrocracker MNPZ"
        },
        "Azerikimya – EP300": {
            "de": "Azerikimya – EP300",
            "ru": "Azerikimya – EP300",
            "ar": "Azerikimya – EP300",
            "zh": "Azerikimya – EP300",
            "it": "Azerikimya – EP300"
        },
        "Socar Polymer – Sumgayit PP / HDPE Production Facility": {
            "de": "Socar Polymer – Sumgayit PP / HDPE Produktionsanlage",
            "ru": "Socar Polymer – Завод по производству ПП/HDPE в Сумгаите",
            "ar": "مصنع Socar Polymer لإنتاج PP / HDPE في سومغاييت",
            "zh": "Socar Polymer – 苏姆盖特 PP / HDPE 生产设施",
            "it": "Impianto di Produzione Socar Polymer PP / HDPE Sumgayit"
        },
        "Shah-Deniz-Stage-2-SD2 Project-Fabrication-Offshore-Facilities-and-Hook-and-Commissioning-Support": {
            "de": "Shah-Deniz-Stufe-2-SD2-Projekt",
            "ru": "Проект Шах-Дениз Этап 2 SD2",
            "ar": "مشروع شاه دنيز المرحلة 2 SD2",
            "zh": "沙-丹尼兹第二阶段 SD2 项目",
            "it": "Progetto Shah-Deniz Fase 2 SD2"
        },
        "Baku Olympic Stadium Project": {
            "de": "Baku-Olympiastadion-Projekt",
            "ru": "Проект олимпийского стадиона Баку",
            "ar": "مشروع الملعب الأولمبي في باكو",
            "zh": "巴库奥林匹克体育场项目",
            "it": "Progetto Stadio Olimpico di Baku"
        },
        "OGB Water Pipeline D.B": {
            "de": "OGB-Wasserleitungsprojekt",
            "ru": "Проект водопровода OGB",
            "ar": "مشروع خط أنابيب المياه OGB",
            "zh": "OGB 供水管道项目",
            "it": "Progetto Oleodotto d'Acqua OGB"
        },
        "Sangachal Terminal 2nd Produced Water Tank Construction": {
            "de": "Bau des 2. Produktwassertanks des Sangachal-Terminals",
            "ru": "Строительство 2-го резервуара использованной воды терминала Сангачал",
            "ar": "بناء خزان المياه المعالجة الثاني لمحطة سانجاتشال",
            "zh": "桑加查尔终点站第二生产水罐建设",
            "it": "Costruzione del Secondo Serbatoio d'Acqua Prodotta del Terminal Sangachal"
        },
        "COP-WC-PDQ-Fabrication-Topsides-Drilling-Facilities-and-Integration-Living-Quarters": {
            "de": "COP-WC-PDQ-Fabrikation",
            "ru": "Проект COP-WC-PDQ",
            "ar": "مشروع COP-WC-PDQ",
            "zh": "COP-WC-PDQ 制造项目",
            "it": "Progetto COP-WC-PDQ"
        },
        "TPG 500 outside North Sea": {
            "de": "TPG 500 Offshore-Plattformen",
            "ru": "Морские платформы TPG 500",
            "ar": "منصات TPG 500 البحرية",
            "zh": "TPG 500 海上平台",
            "it": "Piattaforme Offshore TPG 500"
        },
        "AGT Pipeline": {
            "de": "AGT-Pipeline",
            "ru": "Проект AGT Pipeline",
            "ar": "مشروع خط أنابيب AGT",
            "zh": "AGT 管道项目",
            "it": "Progetto Oleodotto AGT"
        },
        "Sangachal Terminal E.P": {
            "de": "Sangachal-Terminal-Erweiterung",
            "ru": "Расширение терминала Сангачал",
            "ar": "توسع محطة سانجاتشال",
            "zh": "桑加查尔终点站扩建",
            "it": "Espansione del Terminal Sangachal"
        },
        "Severnaya 400 MW Gas Combined Cycle Power Plant": {
            "de": "Severnaya 400-MW-Gaskombikraftwerk",
            "ru": "ГЭС Severnaya 400 МВт",
            "ar": "محطة Severnaya للكهرباء بقوة 400 ميجاواط",
            "zh": "Severnaya 400 兆瓦燃气联合循环电厂",
            "it": "Centrale Termoelettrica Severnaya 400 MW a Ciclo Combinato"
        },
        "Isomerization Unit": {
            "de": "Isomerisierungsanlage",
            "ru": "Установка изомеризации",
            "ar": "وحدة الاختزال",
            "zh": "异构化装置",
            "it": "Unità di Isomerizzazione"
        },
        "CCR & Isomerization units": {
            "de": "CCR- und Isomerisierungsanlagen",
            "ru": "Установки CCR и изомеризации",
            "ar": "وحدات CCR والاختزال",
            "zh": "CCR 和异构化装置",
            "it": "Unità CCR e di Isomerizzazione"
        },
        "Fergana Oil Refinery": {
            "de": "Fergana-Ölraffinerie",
            "ru": "Нефтеперерабатывающий завод Фергона",
            "ar": "مصفاة فرغانة للنفط",
            "zh": "费尔干纳炼油厂",
            "it": "Raffineria di Petrolio di Fergana"
        },
        "Etilen Polietilen Petkim": {
            "de": "Etilen-Polyethylen-Petkim",
            "ru": "Этилен-Полиэтилен Petkim",
            "ar": "الإثيلين البولي إيثيلين Petkim",
            "zh": "乙烯聚乙烯 Petkim",
            "it": "Etilene Polietilene Petkim"
        },
        "CCR & ISO Unit Tüpraş": {
            "de": "CCR- und ISO-Einheit Tüpraş",
            "ru": "Установки CCR и ISO Tüpraş",
            "ar": "وحدات CCR و ISO Tüpraş",
            "zh": "Tüpraş CCR 和 ISO 单元",
            "it": "Unità CCR e ISO Tüpraş"
        }
    },
    "locations": {
        "Basrah, Iraq": {
            "de": "Basra, Irak",
            "ru": "Басра, Ирак",
            "ar": "البصرة، العراق",
            "zh": "巴士拉，伊拉克",
            "it": "Bassora, Iraq"
        },
        "Baku, Azerbaijan": {
            "de": "Baku, Aserbaidschan",
            "ru": "Баку, Азербайджан",
            "ar": "باكو، أذربيجان",
            "zh": "巴库，阿塞拜疆",
            "it": "Baku, Azerbaigian"
        },
        "Mozyr, Belarus": {
            "de": "Mozyr, Belarus",
            "ru": "Мозырь, Беларусь",
            "ar": "مدينة موزير، بيلاروسيا",
            "zh": "莫济尔，白俄罗斯",
            "it": "Mozyr, Bielorussia"
        },
        "Sumqayit, Azerbaijan": {
            "de": "Sumgayit, Aserbaidschan",
            "ru": "Сумгаит, Азербайджан",
            "ar": "سومغاييت، أذربيجان",
            "zh": "苏姆盖特，阿塞拜疆",
            "it": "Sumgayit, Azerbaigian"
        },
        "Oguz, Azerbaijan": {
            "de": "Oğuz, Aserbaidschan",
            "ru": "Огуз, Азербайджан",
            "ar": "أوغوز، أذربيجان",
            "zh": "乌古兹，阿塞拜疆",
            "it": "Oguz, Azerbaigian"
        },
        "Izmit, Turkey": {
            "de": "Izmit, Türkei",
            "ru": "Измит, Турция",
            "ar": "إزميت، تركيا",
            "zh": "伊兹密特，土耳其",
            "it": "Izmit, Turchia"
        },
        "Izmir, Turkey": {
            "de": "Izmir, Türkei",
            "ru": "Измир, Турция",
            "ar": "إزمير، تركيا",
            "zh": "伊兹密尔，土耳其",
            "it": "Izmir, Turchia"
        },
        "Fergana, Uzbekistan": {
            "de": "Fergana, Usbekistan",
            "ru": "Фергона, Узбекистан",
            "ar": "فرغانة، أوزبكستان",
            "zh": "费尔干纳，乌兹别克斯坦",
            "it": "Fergana, Uzbekistan"
        }
    },
    "descriptions_common": {
        "supervision_piping": {
            "de": "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten",
            "ru": "• Надзор за сваркой трубопроводов и монтажом<br>• Ответственность за организацию материалов и персонала для всех сварочных работ<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения",
            "ar": "• الإشراف على لحام تصنيع وتركيب الأنابيب<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم",
            "zh": "• 监督管道制造和安装焊接<br>• 负责组织所有焊接活动的材料和人员<br>• 与建筑管理部门协调并与质量控制部门合作<br>• 在施工期间监督所有焊工（SMAW、GTAW）<br>• 编制QA/QC、NDT和进度报告",
            "it": "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori"
        },
        "supervision_piping_saw": {
            "de": "• Beaufsichtigung von Rohrverfertigung und Montagearbeiten<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW, SAW) während der Arbeitsausführung<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten",
            "ru": "• Надзор за сваркой трубопроводов и монтажом<br>• Ответственность за организацию материалов и персонала для всех сварочных работ<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества<br>• Надзор над всеми сварщиками (SMAW, GTAW, SAW) во время выполнения работ<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения",
            "ar": "• الإشراف على لحام تصنيع وتركيب الأنابيب<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة<br>• الإشراف على جميع الملحامين (SMAW, GTAW, SAW) أثناء الأداء<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم",
            "zh": "• 监督管道制造和安装焊接<br>• 负责组织所有焊接活动的材料和人员<br>• 与建筑管理部门协调并与质量控制部门合作<br>• 在施工期间监督所有焊工（SMAW、GTAW、SAW）<br>• 编制QA/QC、NDT和进度报告",
            "it": "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità<br>• Supervisione di tutti i saldatori (SMAW, GTAW, SAW) durante l'esecuzione dei lavori<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori"
        },
        "supervision_borehole": {
            "de": "• Beaufsichtigung von Bohrlochrohrverfertigung und Montage<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW) während der Arbeitsausführung<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten",
            "ru": "• Надзор за сваркой скважинных трубопроводов и монтажом<br>• Ответственность за организацию материалов и персонала для всех сварочных работ<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества<br>• Надзор над всеми сварщиками (SMAW, GTAW) во время выполнения работ<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения",
            "ar": "• الإشراف على لحام تصنيع وتركيب أنابيب الآبار<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة<br>• الإشراف على جميع الملحامين (SMAW, GTAW) أثناء الأداء<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم",
            "zh": "• 监督钻井管道制造和安装焊接<br>• 负责组织所有焊接活动的材料和人员<br>• 与建筑管理部门协调并与质量控制部门合作<br>• 在施工期间监督所有焊工（SMAW、GTAW）<br>• 编制QA/QC、NDT和进度报告",
            "it": "• Supervisione della saldatura nella fabbricazione e montaggio dei tubi di perforazione<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità<br>• Supervisione di tutti i saldatori (SMAW, GTAW) durante l'esecuzione dei lavori<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori"
        },
        "supervision_tank": {
            "de": "• Beaufsichtigung von Montageschweißarbeiten eines 21000 m³ Tanks<br>• Verantwortlich für Material- und Personalorganisation für alle Schweißarbeiten<br>• Koordination mit Bauleitung und Zusammenarbeit mit Qualitätskontrolle<br>• Beaufsichtigung aller Schweißer (SMAW, GTAW, SAW) während der Arbeitsausführung<br>• Erstellung von QA/QC-, NDT- und Fortschrittsberichten",
            "ru": "• Надзор за монтажной сваркой резервуара вместимостью 21000 м³<br>• Ответственность за организацию материалов и персонала для всех сварочных работ<br>• Координация с руководством проекта и сотрудничество с отделом контроля качества<br>• Надзор над всеми сварщиками (SMAW, GTAW, SAW) во время выполнения работ<br>• Подготовка отчетов QA/QC, NDT и отчетов о ходе выполнения",
            "ar": "• الإشراف على لحام التركيب لخزان بسعة 21000 م3<br>• المسؤولية عن تنظيم المواد والموظفين لجميع أنشطة اللحام<br>• التنسيق مع إدارة البناء والتعاون مع مراقبة الجودة<br>• الإشراف على جميع الملحامين (SMAW, GTAW, SAW) أثناء الأداء<br>• تجميع تقارير QA/QC وNDT وتقارير التقدم",
            "zh": "• 监督容量 21000 立方米储罐的安装焊接<br>• 负责组织所有焊接活动的材料和人员<br>• 与建筑管理部门协调并与质量控制部门合作<br>• 在施工期间监督所有焊工（SMAW、GTAW、SAW）<br>• 编制QA/QC、NDT和进度报告",
            "it": "• Supervisione della saldatura di montaggio di un serbatoio da 21000 m³<br>• Responsabile dell'organizzazione di materiali e personale per tutte le attività di saldatura<br>• Coordinamento con la gestione del cantiere e cooperazione con il controllo di qualità<br>• Supervisione di tutti i saldatori (SMAW, GTAW, SAW) durante l'esecuzione dei lavori<br>• Compilazione di report QA/QC, NDT e di avanzamento lavori"
        },
        "welder_offshore": {
            "de": "• Arbeit an Fertigung und Montage von Offshore-Plattformen TPG 500<br>• Schweißarbeiten mit (GTAW / FCAW-GS / SMAW) an Rohren verschiedener Stahlarten<br>• Erfahrung mit Kohlenstoffstahl, Tieftemperaturstahl, Edelstahl, Cu-Ni, Duplexstahl und Superduplexstahl<br>• Alle Arbeiten nach Korrosionsprüfungen akzeptiert",
            "ru": "• Работа по изготовлению и монтажу морских платформ TPG 500<br>• Сварочные работы с использованием (GTAW / FCAW-GS / SMAW) различных типов труб<br>• Опыт с углеродистой сталью, криогенной сталью, нержавеющей сталью, Cu-Ni, дуплексом и супердуплексом<br>• Все работы выполнены с соблюдением испытаний на коррозию",
            "ar": "• العمل على تصنيع وتركيب منصات TPG 500 البحرية<br>• عمليات اللحام باستخدام (GTAW / FCAW-GS / SMAW) على أنواع مختلفة من الأنابيب<br>• خبرة مع الفولاذ الكربوني والفولاذ منخفض الحرارة والفولاذ المقاوم للصدأ وCu-Ni والدوبلكس والسوبر دوبلكس<br>• جميع الأعمال مقبولة مع اختبارات التآكل",
            "zh": "• 从事 TPG 500 海上平台的制造和安装工作<br>• 使用（GTAW / FCAW-GS / SMAW）进行各种钢管焊接<br>• 拥有碳钢、低温钢、不锈钢、Cu-Ni、双相钢和超级双相钢的经验<br>• 所有工作均经过腐蚀测试验收",
            "it": "• Lavoro su fabbricazione e montaggio delle piattaforme offshore TPG 500<br>• Processi di saldatura con (GTAW / FCAW-GS / SMAW) su vari tipi di tubi<br>• Esperienza con acciaio al carbonio, acciaio a bassa temperatura, acciaio inossidabile, Cu-Ni, duplex e superduplex<br>• Tutti i lavori accettati con test di corrosione"
        },
        "welder_pipeline": {
            "de": "• Arbeit an Fertigung und Pipeline der AGT-Pipeline<br>• Schweißarbeiten an Rohren ab 1/2\" mit (GTAW / SMAW) in Berg- und Talrichtung<br>• Verschiedene Stahlarten mit unterschiedlichen Zusatzstoffen<br>• Alle Arbeiten nach akzeptierten Tests abgeschlossen",
            "ru": "• Работа по изготовлению трубопровода AGT<br>• Сварочные работы на трубопроводе размером 1/2\" и выше с использованием (GTAW / SMAW)<br>• Разные стальные материалы с различными присадками<br>• Все работы завершены после принятых испытаний",
            "ar": "• العمل على تصنيع خط أنابيب AGT<br>• عمليات اللحام على الأنابيب بحجم 1/2\" وأكبر باستخدام (GTAW / SMAW)<br>• أنواع مختلفة من المواد الفولاذية مع إضافات مختلفة<br>• جميع الأعمال مكتملة بعد الاختبارات المقبولة",
            "zh": "• 从事 AGT 管道的制造和铺设工作<br>• 1/2\" 及以上管道的焊接工作，使用（GTAW / SMAW）<br>• 不同的钢铁材料和不同的添加剂<br>• 所有工作在通过测试后完成",
            "it": "• Lavoro su fabbricazione e oleodotto AGT<br>• Processi di saldatura su tubi da 1/2\" e superiori con (GTAW / SMAW)<br>• Diversi tipi di materiali in acciaio con diversi additivi<br>• Tutti i lavori completati dopo i test accettati"
        },
        "welder_expansion": {
            "de": "• Arbeit an Fertigung und Vor-Ort-Erweiterung des Terminals<br>• Schweißarbeiten an Rohren ab 1/2\" mit (GTAW / SMAW)<br>• Verschiedene Stahlarten mit unterschiedlichen Zusatzstoffen<br>• Alle Arbeiten nach akzeptierten Tests abgeschlossen",
            "ru": "• Работа по изготовлению и расширению терминала на месте<br>• Сварочные работы на трубопроводе размером 1/2\" и выше с использованием (GTAW / SMAW)<br>• Разные стальные материалы с различными присадками<br>• Все работы завершены после принятых испытаний",
            "ar": "• العمل على تصنيع وتوسيع الترمينال في الموقع<br>• عمليات اللحام على الأنابيب بحجم 1/2\" وأكبر باستخدام (GTAW / SMAW)<br>• أنواع مختلفة من المواد الفولاذية مع إضافات مختلفة<br>• جميع الأعمال مكتملة بعد الاختبارات المقبولة",
            "zh": "• 从事终点站现场的制造和扩建工作<br>• 1/2\" 及以上管道的焊接工作，使用（GTAW / SMAW）<br>• 不同的钢铁材料和不同的添加剂<br>• 所有工作在通过测试后完成",
            "it": "• Lavoro su fabbricazione e ampliamento del terminal in loco<br>• Processi di saldatura su tubi da 1/2\" e superiori con (GTAW / SMAW)<br>• Diversi tipi di materiali in acciaio con diversi additivi<br>• Tutti i lavori completati dopo i test accettati"
        },
        "welder_powerplant": {
            "de": "• Arbeit an Fertigung und Vor-Ort-Kraftwerk<br>• Schweißarbeiten an Rohren ab 1/2\" mit (GTAW / SMAW)<br>• Verschiedene Stahlarten einschließlich P91, P22, P11<br>• Alle Arbeiten nach akzeptierten Tests abgeschlossen",
            "ru": "• Работа по изготовлению и электростанции на месте<br>• Сварочные работы на трубопроводе размером 1/2\" и выше с использованием (GTAW / SMAW)<br>• Различные типы стали, включая P91, P22, P11<br>• Все работы завершены после принятых испытаний",
            "ar": "• العمل على تصنيع ومحطة الطاقة في الموقع<br>• عمليات اللحام على الأنابيب بحجم 1/2\" وأكبر باستخدام (GTAW / SMAW)<br>• أنواع مختلفة من المواد الفولاذية بما في ذلك P91 و P22 و P11<br>• جميع الأعمال مكتملة بعد الاختبارات المقبولة",
            "zh": "• 从事发电厂现场的制造工作<br>• 1/2\" 及以上管道的焊接工作，使用（GTAW / SMAW）<br>• 不同的钢铁材料，包括 P91、P22、P11<br>• 所有工作在通过测试后完成",
            "it": "• Lavoro su fabbricazione e centrale termoelettrica in loco<br>• Processi di saldatura su tubi da 1/2\" e superiori con (GTAW / SMAW)<br>• Diversi tipi di acciaio inclusi P91, P22, P11<br>• Tutti i lavori completati dopo i test accettati"
        }
    }
}

# Print all translations in JavaScript format for easy copy-paste
if __name__ == "__main__":
    print("Translation data generated. Now we need to manually apply these to the 21 projects.")
    print("Key pattern: Each job should have de, ru, ar, zh, it translations")
