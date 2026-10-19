/**
 * Aziz Yucetepe Portfolio - i18n Translation Engine
 * Complete Auto-Translation for Badges, Dates, Filters, and Cards.
 */

(function () {
    const DEFAULT_LANG = "en";
    const SUPPORTED_LANGS = ["en", "tr", "de", "ru", "az", "es", "ar"];
    const RTL_LANGS = ["ar"];

    // Çok Dilli Ay Tablosu (Tarih rozetleri için)
    const MONTH_MAP = {
        en: { Jan: "Jan", Feb: "Feb", Mar: "Mar", Apr: "Apr", May: "May", Jun: "Jun", Jul: "Jul", Aug: "Aug", Sep: "Sep", Oct: "Oct", Nov: "Nov", Dec: "Dec", Present: "Present" },
        tr: { Jan: "Oca", Feb: "Şub", Mar: "Mar", Apr: "Nis", May: "May", Jun: "Haz", Jul: "Tem", Aug: "Ağu", Sep: "Eyl", Oct: "Eki", Nov: "Kas", Dec: "Ara", Present: "Günümüz" },
        az: { Jan: "Yan", Feb: "Fev", Mar: "Mar", Apr: "Apr", May: "May", Jun: "İyn", Jul: "İyl", Aug: "Avq", Sep: "Sen", Oct: "Okt", Nov: "Noy", Dec: "Dek", Present: "Hal-hazırda" },
        de: { Jan: "Jan", Feb: "Feb", Mar: "Mär", Apr: "Apr", May: "Mai", Jun: "Jun", Jul: "Jul", Aug: "Aug", Sep: "Sep", Oct: "Okt", Nov: "Nov", Dec: "Dez", Present: "Heute" },
        ru: { Jan: "Янв", Feb: "Фев", Mar: "Мар", Apr: "Апр", May: "Май", Jun: "Июн", Jul: "Июл", Aug: "Авг", Sep: "Сен", Oct: "Окт", Nov: "Ноя", Dec: "Дек", Present: "Настоящее время" },
        es: { Jan: "Ene", Feb: "Feb", Mar: "Mar", Abr: "Abr", May: "May", Jun: "Jun", Jul: "Jul", Aug: "Ago", Sep: "Sep", Oct: "Oct", Nov: "Nov", Dic: "Dic", Present: "Presente" },
        ar: { Jan: "يناير", Feb: "فبراير", Mar: "مارس", Apr: "أبريل", May: "مايو", Jun: "يونيو", Jul: "يوليو", Aug: "أغسطس", Sep: "سبتمبر", Oct: "أكتوبر", Nov: "نوفمبر", Dec: "ديسمبر", Present: "الحالي" }
    };

    let currentTranslations = {};

    function getNestedTranslation(obj, path) {
        if (!obj || !path) return null;
        return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
    }

    window.t = function (key, fallback = "") {
        const val = getNestedTranslation(currentTranslations, key);
        return val !== null && val !== undefined ? val : fallback || key;
    };

    window.setLanguage = async function (lang) {
        if (!SUPPORTED_LANGS.includes(lang)) {
            lang = DEFAULT_LANG;
        }

        try {
            const response = await fetch(`./locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ./locales/${lang}.json`);
            }
            currentTranslations = await response.json();
            localStorage.setItem("selected_lang", lang);

            // 1. Dil ve RTL/LTR Ayarı
            document.documentElement.lang = lang;
            document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

            // 2. data-i18n Etiketli Metinler
            document.querySelectorAll("[data-i18n]").forEach((el) => {
                const key = el.getAttribute("data-i18n");
                const translated = getNestedTranslation(currentTranslations, key);
                if (translated !== null && translated !== undefined) {
                    el.innerHTML = translated;
                }
            });

            // 3. Form Yer Tutucuları (Placeholders)
            document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
                const key = el.getAttribute("data-i18n-placeholder");
                const translated = getNestedTranslation(currentTranslations, key);
                if (translated !== null && translated !== undefined) {
                    el.placeholder = translated;
                }
            });

            // 4. İŞ DENEYİMLERİ (experience.html) Kart ve Buton Çevirileri
            if (currentTranslations.jobs) {
                document.querySelectorAll(".work-card").forEach((card) => {
                    const id = card.getAttribute("data-id");
                    if (id !== null && currentTranslations.jobs[id]) {
                        const job = currentTranslations.jobs[id];

                        if (job.title) {
                            card.setAttribute("data-title", job.title);
                            const titleEl = card.querySelector(".timeline-title") || card.querySelector("h3");
                            if (titleEl) titleEl.innerText = job.title;
                        }

                        if (job.desc) {
                            card.setAttribute("data-description", job.desc);
                            const bodyEl = card.querySelector(".timeline-body");
                            if (bodyEl) bodyEl.innerHTML = job.desc;
                        }
                    }

                    // "Details & Gallery" ve "View Details" Butonlarını Çevir
                    const moreBtn = card.querySelector(".feed-btn-more");
                    if (moreBtn) {
                        const hasGallery = moreBtn.querySelector(".fa-images");
                        if (hasGallery) {
                            const label = window.t("common.details_gallery", "Details & Gallery");
                            moreBtn.innerHTML = `<i class="fas fa-images"></i> ${label} <i class="fas fa-arrow-right"></i>`;
                        } else {
                            const label = window.t("common.view_details", "View Details");
                            moreBtn.innerHTML = `${label} <i class="fas fa-arrow-right"></i>`;
                        }
                    }
                });

                // Tarih Rozetlerindeki Ayları Çevir (Feb 2026 - Sep 2026 vb.)
                document.querySelectorAll(".feed-date-badge").forEach((badge) => {
                    let original = badge.getAttribute("data-original-date");
                    if (!original) {
                        original = badge.innerText.trim();
                        badge.setAttribute("data-original-date", original);
                    }

                    let translatedDate = original;
                    const langMap = MONTH_MAP[lang] || MONTH_MAP.en;
                    const enMap = MONTH_MAP.en;

                    Object.keys(enMap).forEach((m) => {
                        const regex = new RegExp(`\\b${m}\\b`, "g");
                        translatedDate = translatedDate.replace(regex, langMap[m] || m);
                    });

                    badge.innerText = translatedDate;
                });
            }

            // 5. SERTİFİKALAR (certificates.html) Kart, Başlık, Rozet ve Filtre Çevirileri
            if (currentTranslations.certs) {
                // Sayfa Başlığı
                const certPageTitle = document.querySelector("#certsList") ? document.querySelector("h1.page-title") : null;
                if (certPageTitle) {
                    certPageTitle.innerText = lang === "tr" ? "Sertifikalar ve Referanslar" :
                                              lang === "az" ? "Sertifikatlar və İstinadlar" :
                                              lang === "de" ? "Zertifikate & Referenzen" :
                                              lang === "ru" ? "Сертификаты и рекомендации" :
                                              lang === "es" ? "Certificados y Referencias" :
                                              lang === "ar" ? "الشهادات والمراجع" : "Certificates & References";
                }

                // Filtre Çipleri
                const certFilters = document.querySelectorAll(".timeline-filters .filter-chip");
                if (certFilters.length >= 3 && currentTranslations.certs_ui) {
                    certFilters[0].innerHTML = `<i class="fas fa-layer-group"></i> ${window.t("certs_ui.filter_all", "All (11)")}`;
                    certFilters[1].innerHTML = `<i class="fas fa-stamp"></i> ${window.t("certs_ui.filter_qual", "Qualifications (4)")}`;
                    certFilters[2].innerHTML = `<i class="fas fa-building"></i> ${window.t("certs_ui.filter_ref", "Company References (7)")}`;
                }

                // Kartların İçeriği & Rozetleri
                document.querySelectorAll(".cert-card").forEach((card) => {
                    const id = card.getAttribute("data-id");
                    if (id && currentTranslations.certs[id]) {
                        const cert = currentTranslations.certs[id];
                        if (cert.title) {
                            const titleEl = card.querySelector("h3");
                            if (titleEl) titleEl.innerText = cert.title;
                        }
                        if (cert.desc) {
                            const descEl = card.querySelector(".cert-desc");
                            if (descEl) descEl.innerText = cert.desc;
                        }
                    }

                    // "Qualification" ve "Company Reference" Rozetleri
                    const qualBadge = card.querySelector(".cert-badge-qualification");
                    if (qualBadge) {
                        qualBadge.innerText = window.t("certs_ui.badge_qual", "Qualification");
                    }
                    const refBadge = card.querySelector(".cert-badge-reference");
                    if (refBadge) {
                        refBadge.innerText = window.t("certs_ui.badge_ref", "Company Reference");
                    }

                    // "View Document" Hover Overlay
                    const overlay = card.querySelector(".cert-overlay");
                    if (overlay) {
                        overlay.innerHTML = `<i class="fas fa-search-plus"></i> ${window.t("certs_ui.view_doc", "View Document")}`;
                    }
                });
            }

            // 6. Sayfadaki Tüm Dil Seçicilerini Senkronize Et
            document.querySelectorAll(".lang-select, .lang-dropdown").forEach((select) => {
                select.value = lang;
            });

            window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));

        } catch (error) {
            console.warn("i18n Yükleme Hatası:", error);
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem("selected_lang") || DEFAULT_LANG;
        window.setLanguage(savedLang);
    });
})();