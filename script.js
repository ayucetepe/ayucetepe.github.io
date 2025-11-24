document.addEventListener("DOMContentLoaded", function() {

    // ======================================================
    // 1. MODAL, GALERİ VE LIGHTBOX İŞLEMLERİ
    // ======================================================

    // --- İŞ DENEYİMİ (WORK EXPERIENCE) ---
    const expModal = document.getElementById("experienceModal");
    const workCards = document.querySelectorAll(".work-card");
    const expCloseBtn = expModal ? expModal.querySelector(".close-btn") : null;

    // Galeri ve Lightbox Elemanları
    const gallerySection = document.getElementById("modal-gallery-section");
    const openGalleryBtn = document.getElementById("open-gallery-btn");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    let currentProjectImages = [];
    let currentImageIndex = 0;

    // İş Deneyimi Kartlarına Tıklama
    if (expModal && workCards.length > 0) {
        workCards.forEach(card => {
            card.addEventListener("click", () => {
                // Verileri HTML'den çek
                const title = card.getAttribute("data-title") || "";
                const project = card.getAttribute("data-project") || "";
                const client = card.getAttribute("data-client") || "";
                const company = card.getAttribute("data-company") || "";
                const location = card.getAttribute("data-location") || "";
                const date = card.getAttribute("data-date") || "";
                const description = card.getAttribute("data-description") || "";
                const manager = card.getAttribute("data-manager") || "";

                // Galeri verisini çek
                const galleryData = card.getAttribute("data-gallery");
                if (galleryData && galleryData.trim() !== "") {
                    currentProjectImages = galleryData.split(',').map(item => item.trim());
                } else {
                    currentProjectImages = [];
                }

                // Modal İçeriğini Doldur
                const titleEl = document.getElementById("modal-title");
                const metaEl = document.getElementById("modal-meta");
                const descEl = document.getElementById("modal-description");

                if(titleEl) titleEl.innerText = title;
                if(metaEl) metaEl.innerHTML = `<span style="color:var(--primary-color)">${company}</span> | ${location} | ${date}`;
                if(descEl) descEl.innerHTML = `
                    <p><strong>Project:</strong> ${project}</p>
                    <p><strong>Client:</strong> ${client}</p>
                    <hr style="margin: 15px 0; border: 0; border-top: 1px solid #ddd;">
                    <strong style="color:var(--primary-color); display:block; margin-bottom:5px;">Job Description:</strong>
                    <p>${description}</p>
                    <br>
                    <strong style="color:var(--primary-color); display:block; margin-bottom:5px;">Project Management / Contact:</strong>
                    <p>${manager}</p>
                `;

                // Galeri Butonunu Göster/Gizle
                if (gallerySection) {
                    gallerySection.style.display = currentProjectImages.length > 0 ? "block" : "none";
                }

                // Modalı Aç
                expModal.style.display = "block";
            });
        });

        if(expCloseBtn) {
            expCloseBtn.addEventListener("click", () => { expModal.style.display = "none"; });
        }

        // Galeri Butonu Tıklama
        if(openGalleryBtn) {
            openGalleryBtn.addEventListener("click", () => {
                if(currentProjectImages.length > 0) {
                    currentImageIndex = 0;
                    if(lightboxImg) lightboxImg.src = currentProjectImages[currentImageIndex];
                    if(lightbox) lightbox.style.display = "block";
                }
            });
        }
    }

    // --- SERTİFİKA (CERTIFICATES) ---
    const certModal = document.getElementById("certificateModal");
    const certCards = document.querySelectorAll(".cert-card");
    const certCloseBtn = certModal ? certModal.querySelector(".close-btn") : null;

    if (certModal && certCards.length > 0) {
        certCards.forEach(card => {
            card.addEventListener("click", () => {
                const title = card.getAttribute("data-title") || "";
                const issuer = card.getAttribute("data-issuer") || "";
                const date = card.getAttribute("data-date") || "";
                const desc = card.getAttribute("data-desc") || "";
                const imagePath = card.getAttribute("data-image") || "";

                const cTitle = document.getElementById("cert-title");
                const cMeta = document.getElementById("cert-meta");
                const cDesc = document.getElementById("cert-desc");
                const cImg = document.getElementById("cert-img");

                if(cTitle) cTitle.innerText = title;
                if(cMeta) cMeta.innerText = `${issuer} | ${date}`;
                if(cDesc) cDesc.innerText = desc;

                if (cImg) {
                    if (imagePath && imagePath.trim() !== "") {
                        cImg.src = imagePath;
                        cImg.style.display = "block";
                    } else {
                        cImg.style.display = "none";
                    }
                }

                certModal.style.display = "block";
            });
        });

        if(certCloseBtn) {
            certCloseBtn.addEventListener("click", () => { certModal.style.display = "none"; });
        }
    }

    // --- LIGHTBOX (RESİM SLAYT) ---
    if(lightbox) {
        if(lightboxClose) {
            lightboxClose.addEventListener("click", () => { lightbox.style.display = "none"; });
        }
        // Global Slide Değiştirme Fonksiyonu
        window.changeSlide = (n) => {
            currentImageIndex += n;
            if (currentImageIndex >= currentProjectImages.length) currentImageIndex = 0;
            else if (currentImageIndex < 0) currentImageIndex = currentProjectImages.length - 1;

            if(lightboxImg) lightboxImg.src = currentProjectImages[currentImageIndex];
        };
    }

    // PENCERELERİ DIŞARI TIKLAYINCA KAPATMA
    window.addEventListener("click", (event) => {
        if (expModal && event.target == expModal) expModal.style.display = "none";
        if (certModal && event.target == certModal) certModal.style.display = "none";
        if (lightbox && event.target == lightbox) lightbox.style.display = "none";
    });


    // ======================================================
    // 2. HEADER YÜKLEME VE BAŞLATMA
    // ======================================================
    const headerPlaceholder = document.getElementById("global-header");

    if (headerPlaceholder) {
        fetch("header.html")
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;

                // Header HTML geldikten sonra fonksiyonları başlat
                initializeTheme();
                initializeMobileMenu();
                highlightActivePage();

                // Kayıtlı dili yükle ve başlat
                const savedLang = localStorage.getItem('language') || 'en';
                if (typeof window.setLanguage === 'function') {
                    window.setLanguage(savedLang);
                }
            })
            .catch(error => console.error("Header yüklenemedi:", error));
    } else {
        // Header manuel eklenmişse
        initializeTheme();
        const savedLang = localStorage.getItem('language') || 'en';
        if (typeof window.setLanguage === 'function') {
            window.setLanguage(savedLang);
        }
    }

    // ======================================================
    // 3. YARDIMCI FONKSİYONLAR
    // ======================================================

    function highlightActivePage() {
        const currentPath = window.location.pathname.split("/").pop() || "index.html";
        const links = document.querySelectorAll("nav a, .mobile-nav a");
        links.forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("active");
            }
        });
    }

    function initializeTheme() {
        const themeSwitchers = [
            document.getElementById('theme-switcher'),
            document.getElementById('mobile-theme-switcher')
        ];
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeSwitchers.forEach(btn => { if(btn) btn.checked = (currentTheme === 'dark'); });
        }
        themeSwitchers.forEach(btn => {
            if(!btn) return;
            btn.addEventListener('change', function() {
                const theme = this.checked ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('theme', theme);
                themeSwitchers.forEach(otherBtn => { if(otherBtn) otherBtn.checked = this.checked; });
            });
        });
    }

    function initializeMobileMenu() {
        const hamburger = document.querySelector(".hamburger");
        const mobileNav = document.querySelector(".mobile-nav");
        if(hamburger && mobileNav) {
            hamburger.addEventListener("click", () => {
                hamburger.classList.toggle("active");
                mobileNav.classList.toggle("active");
            });
            // Linke tıklayınca menüyü kapat
            mobileNav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove("active");
                    mobileNav.classList.remove("active");
                });
            });
        }
    }

});

// ======================================================
// 4. GLOBAL FONKSİYONLAR (Window nesnesine bağlı)
// ======================================================

// --- DİL DEĞİŞTİRME FONKSİYONU ---
window.setLanguage = (lang) => {
    // Çeviri dosyası yoksa işlem yapma
    if (typeof translations === 'undefined') return;

    // 1. Metinleri Güncelle
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // !!! DÜZELTME BURADA YAPILDI !!!
            // Eğer çeviri 'about_text' veya 'skills_long_text' ise HTML olarak işle
            if (key === 'about_text' || key === 'skills_long_text') {
                el.innerHTML = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // 2. Placeholder (Input) Güncelle
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
         if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // 3. İş Deneyimi Kartlarını Güncelle
    if (translations[lang].jobs) {
        document.querySelectorAll('.work-card').forEach(card => {
            const id = card.getAttribute('data-id');
            const jobData = translations[lang].jobs[id];

            if (jobData) {
                // Başlık
                const h3 = card.querySelector('h3');
                if(h3) h3.innerText = jobData.title;

                // Data attribute'larını güncelle (Modal açılınca doğru veri görünsün)
                card.setAttribute('data-title', jobData.title);
                if(jobData.desc) card.setAttribute('data-description', jobData.desc);
                if(jobData.project) card.setAttribute('data-project', jobData.project);
            }
        });
    }

    // 4. Görünen Dil İsimlerini Güncelle (EN, TR vb.)
    const langNames = {
        "en": "English",
        "tr": "Türkçe",
        "ru": "Русский",
        "ar": "العربية"
    };

    // Masaüstü Profil Dropdown içindeki yazı
    const desktopLangText = document.getElementById("desktop-lang-text");
    if(desktopLangText) desktopLangText.innerText = langNames[lang];

    // Mobil Menü (Accordion) içindeki yazı
    const mobileLangText = document.getElementById("mobile-lang-text");
    if(mobileLangText) mobileLangText.innerText = langNames[lang];

    // 5. RTL (Arapça) Desteği
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.lang = 'ar';
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.lang = lang;
    }

    // 6. Açık Olan Menüleri Kapat
    // Mobil Dil Listesi
    const mobileList = document.getElementById("mobile-lang-list");
    if(mobileList) mobileList.classList.remove("open");

    // Masaüstü Custom Select
    const customSelect = document.querySelector(".custom-select-wrapper");
    if(customSelect) customSelect.classList.remove("open");

    // 7. Kaydet
    localStorage.setItem('language', lang);
};


// --- HEADER PROFİL MENÜSÜ AÇ/KAPA ---
window.toggleProfileMenu = function() {
    const menu = document.getElementById("profile-dropdown");
    if (menu) {
        menu.classList.toggle("active");
    }
};

// --- MOBİL DİL MENÜSÜ AÇ/KAPA (Accordion) ---
window.toggleMobileLang = function() {
    const list = document.getElementById("mobile-lang-list");
    const arrow = document.querySelector(".accordion-btn .arrow");
    if (list) {
        list.classList.toggle("open");
        if(arrow) {
             arrow.style.transform = list.classList.contains("open") ? "rotate(180deg)" : "rotate(0deg)";
             arrow.style.transition = "transform 0.3s";
        }
    }
};

// --- DIŞARI TIKLAYINCA MENÜLERİ KAPAT ---
window.addEventListener("click", function(e) {
    // Profil Menüsünü Kapat
    const profileMenu = document.getElementById("profile-dropdown");
    const profileTrigger = document.querySelector(".profile-trigger");

    if (profileMenu && profileTrigger && !profileMenu.contains(e.target) && !profileTrigger.contains(e.target)) {
        profileMenu.classList.remove("active");
    }

    // Masaüstü Dil Dropdown'u Kapat
    const customSelect = document.querySelector(".custom-select-wrapper");
    if (customSelect && !customSelect.contains(e.target)) {
        customSelect.classList.remove("open");
    }
});
