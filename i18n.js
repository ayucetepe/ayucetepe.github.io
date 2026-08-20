/**
 * Aziz Yucetepe - i18n Çok Dilli Yönetim Motoru
 */

function setLanguage(lang) {
    if (!window.translations || !window.translations[lang]) {
        console.warn("Dil paketi bulunamadı:", lang);
        return;
    }

    const rtlLangs = ['ar', 'ur', 'he', 'fa'];
    const data = window.translations[lang];
    localStorage.setItem("selected_lang", lang);

    // 1. Dil ve RTL/LTR Yönünü Ayarla
    document.documentElement.lang = lang;
    document.documentElement.dir = rtlLangs.includes(lang) ? "rtl" : "ltr";

    // 2. data-translate Etiketli Metinleri Güncelle
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (data[key]) {
            el.innerHTML = data[key];
        }
    });

    // 3. Input Placeholder Çevirileri
    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (data[key]) {
            el.placeholder = data[key];
        }
    });

    // 4. İş Deneyimi Kartlarını Güncelle
    if (data.jobs) {
        document.querySelectorAll(".work-card").forEach(card => {
            const id = card.getAttribute("data-id");
            if (data.jobs[id]) {
                const job = data.jobs[id];
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

    // 5. Sertifika Kartlarını Güncelle
    if (data.certs) {
        document.querySelectorAll(".cert-card").forEach(card => {
            const id = card.getAttribute("data-id");
            if (data.certs[id]) {
                const cert = data.certs[id];
                if (cert.title) card.setAttribute("data-title", cert.title);
                if (cert.desc) card.setAttribute("data-desc", cert.desc);
            }
        });
    }

    // 6. Select Menülerini Eşitle
    document.querySelectorAll(".lang-select, .lang-dropdown").forEach(select => {
        select.value = lang;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selected_lang") || "en";
    setLanguage(savedLang);
});