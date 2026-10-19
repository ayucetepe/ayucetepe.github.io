/**
 * Aziz Yucetepe Portfolio - i18n Translation Engine
 * Architecture: JSON-based, asynchronous, mobile-first compatible.
 */

(function () {
    const DEFAULT_LANG = "en";
    const SUPPORTED_LANGS = ["en", "tr", "de", "ru", "az", "es", "ar"];
    const RTL_LANGS = ["ar"];

    let currentTranslations = {};

    // Helper: Safely resolve nested JSON keys (e.g., "nav.about" or "jobs.0.title")
    function getNestedTranslation(obj, path) {
        if (!obj || !path) return null;
        return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), obj);
    }

    // Public Translation Helper: t("key")
    window.t = function (key, fallback = "") {
        const val = getNestedTranslation(currentTranslations, key);
        return val !== null && val !== undefined ? val : fallback || key;
    };

    // Main Language Switcher
    window.setLanguage = async function (lang) {
        if (!SUPPORTED_LANGS.includes(lang)) {
            lang = DEFAULT_LANG;
        }

        try {
            // Use relative path for maximum compatibility
            const response = await fetch(`./locales/${lang}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load ./locales/${lang}.json: HTTP ${response.status}`);
            }
            currentTranslations = await response.json();
            localStorage.setItem("selected_lang", lang);

            // 1. Set HTML lang and reading direction (RTL / LTR)
            document.documentElement.lang = lang;
            document.documentElement.dir = RTL_LANGS.includes(lang) ? "rtl" : "ltr";

            // 2. Translate regular text & HTML elements: data-i18n="key"
            document.querySelectorAll("[data-i18n]").forEach((el) => {
                const key = el.getAttribute("data-i18n");
                const translated = getNestedTranslation(currentTranslations, key);
                if (translated !== null && translated !== undefined) {
                    el.innerHTML = translated;
                }
            });

            // 3. Translate input placeholders: data-i18n-placeholder="key"
            document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
                const key = el.getAttribute("data-i18n-placeholder");
                const translated = getNestedTranslation(currentTranslations, key);
                if (translated !== null && translated !== undefined) {
                    el.placeholder = translated;
                }
            });

            // 4. Translate element titles/tooltips: data-i18n-title="key"
            document.querySelectorAll("[data-i18n-title]").forEach((el) => {
                const key = el.getAttribute("data-i18n-title");
                const translated = getNestedTranslation(currentTranslations, key);
                if (translated !== null && translated !== undefined) {
                    el.title = translated;
                }
            });

            // 5. Update Dynamic Work Experience Cards (experience.html)
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
                });
            }

            // 6. Update Certificates Cards (certificates.html)
            if (currentTranslations.certs) {
                document.querySelectorAll(".cert-card").forEach((card) => {
                    const id = card.getAttribute("data-id");
                    if (id && currentTranslations.certs[id]) {
                        const cert = currentTranslations.certs[id];
                        if (cert.title) {
                            card.setAttribute("data-title", cert.title);
                            const titleEl = card.querySelector("h3");
                            if (titleEl) titleEl.innerText = cert.title;
                        }
                        if (cert.desc) {
                            card.setAttribute("data-desc", cert.desc);
                            const descEl = card.querySelector(".cert-desc");
                            if (descEl) descEl.innerText = cert.desc;
                        }
                    }
                });
            }

            // 7. Synchronize all language dropdowns on the page
            document.querySelectorAll(".lang-select, .lang-dropdown").forEach((select) => {
                select.value = lang;
            });

            // Dispatch global event
            window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang } }));

        } catch (error) {
            console.warn(
                "i18n Uyarısı: JSON dosyası doğrudan 'file://' protokolüyle açılamaz.\n" +
                "VS Code 'Live Server' eklentisiyle veya web sunucusunda çalıştırın.",
                error
            );
        }
    };

    // Auto-initialize when DOM is ready
    document.addEventListener("DOMContentLoaded", () => {
        const savedLang = localStorage.getItem("selected_lang") || DEFAULT_LANG;
        window.setLanguage(savedLang);
    });
})();