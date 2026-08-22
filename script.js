/**
 * Aziz Yucetepe - Portfolyo Script (Modallar, Galeri & Lightbox, Filtreleme, Sosyal Menü, i18n Entegrasyonu)
 */

let currentGallery = [];
let currentSlideIndex = 0;

document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================================================
    // 1. TEMA YÖNETİMİ (DARK / LIGHT MODE)
    // =========================================================================
    const currentTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);

    window.toggleTheme = function() {
        const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    };

    // =========================================================================
    // 2. AKTİF MENÜ SAYFASINI VURGULA
    // =========================================================================
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // =========================================================================
    // 3. İŞ DENEYİMİ DETAY MODALI & GALERİ YÖNETİMİ (DİLE DUYARLI)
    // =========================================================================
    const expModal = document.getElementById("experienceModal");
    const gallerySection = document.getElementById("modal-gallery-section");
    const openGalleryBtn = document.getElementById("open-gallery-btn");

    if (expModal) {
        document.querySelectorAll(".work-card").forEach(card => {
            card.addEventListener("click", function() {
                // Aktif dil paketini al
                const lang = localStorage.getItem("selected_lang") || "en";
                const t = (window.translations && window.translations[lang]) ? window.translations[lang] : {};

                const title = this.getAttribute("data-title") || this.querySelector("h3").innerText;
                const project = this.getAttribute("data-project") || "";
                const company = this.getAttribute("data-company") || "";
                const location = this.getAttribute("data-location") || "";
                let date = this.getAttribute("data-date") || "";
                const client = this.getAttribute("data-client") || "";
                const description = this.getAttribute("data-description") || (this.querySelector(".timeline-body") ? this.querySelector(".timeline-body").innerHTML : "");
                const galleryData = this.getAttribute("data-gallery");

                // Tarihteki "Present" ifadesini seçili dile göre çevir
                if (t.lbl_present && date.includes("Present")) {
                    date = date.replace("Present", t.lbl_present);
                }

                // Galeri Fotoğrafları
                currentGallery = galleryData ? galleryData.split(",").map(s => s.trim()).filter(s => s) : [];
                if (gallerySection) {
                    gallerySection.style.display = currentGallery.length > 0 ? "block" : "none";
                }

                // Proje Yöneticileri, LinkedIn & WhatsApp
                let contactsHTML = "";
                const contactsData = this.getAttribute("data-contacts");
                if (contactsData) {
                    try {
                        const contacts = JSON.parse(contactsData);
                        if (contacts.length > 0) {
                            contactsHTML = `<div class="contacts-container">`;
                            contacts.forEach(person => {
                                let cleanNumber = person.whatsapp ? person.whatsapp.replace(/\D/g, '') : '';
                                let waButton = cleanNumber ? `
                                    <a href="https://wa.me/${cleanNumber}" target="_blank" class="contact-wa-btn">
                                        <i class="fab fa-whatsapp"></i> WhatsApp
                                    </a>` : '';
                                let liButton = person.linkedin ? `
                                    <a href="${person.linkedin}" target="_blank" class="contact-wa-btn" style="background:#0a66c2;">
                                        <i class="fab fa-linkedin"></i> LinkedIn
                                    </a>` : '';
                                contactsHTML += `
                                    <div class="contact-person-card">
                                        <div>
                                            <strong>${person.name}</strong> 
                                            <div style="font-size:0.8rem; color:var(--text-muted);">${person.title}</div>
                                        </div>
                                        <div style="display:flex; gap:6px;">${liButton} ${waButton}</div>
                                    </div>`;
                            });
                            contactsHTML += `</div>`;
                        }
                    } catch(e) {
                        console.error("Contacts JSON hatası:", e);
                    }
                }

                // Çeviri Başlık Etiketleri
                const lblProject = t.lbl_project || "Project";
                const lblClient = t.lbl_client || "Client";
                const lblContacts = t.lbl_contacts || "Project Contacts & References:";
                const btnGallery = t.btn_view_gallery || "View Project Gallery";

                // Modal İçeriğini Doldur
                const modalTitle = document.getElementById("modal-title");
                const modalMeta = document.getElementById("modal-meta");
                const modalDesc = document.getElementById("modal-description");

                if (modalTitle) modalTitle.innerText = title;
                if (modalMeta) modalMeta.innerHTML = `<strong>${company}</strong> | ${location} | ${date}`;
                if (modalDesc) {
                    modalDesc.innerHTML = `
                        <p style="margin-bottom:6px;"><strong>${lblProject}:</strong> ${project}</p>
                        ${client ? `<p style="margin-bottom:8px; color:var(--text-muted); font-size:0.88rem;"><strong>${lblClient}:</strong> ${client}</p>` : ''}
                        <hr style="margin: 12px 0; border: 0; border-top: 1px solid var(--border);">
                        <div style="line-height: 1.8; margin-bottom: 15px;">${description}</div>
                        ${contactsHTML ? `<h4 style="color:var(--primary); margin-top:15px; margin-bottom:8px;">${lblContacts}</h4>` + contactsHTML : ''}
                    `;
                }

                // Galeri Buton Metnini Güncelle
                if (openGalleryBtn) {
                    openGalleryBtn.innerHTML = `<i class="fas fa-images"></i> ${btnGallery}`;
                }

                expModal.style.display = "block";
            });
        });

        const closeBtn = expModal.querySelector(".close-btn");
        if (closeBtn) {
            closeBtn.onclick = () => { expModal.style.display = "none"; };
        }
    }

    // Galeri Açma Butonu
    if (openGalleryBtn) {
        openGalleryBtn.onclick = function() {
            if (currentGallery.length > 0) {
                openLightbox(0);
            }
        };
    }

    // =========================================================================
    // 4. SERTİFİKA DETAY MODALI
    // =========================================================================
    const certModal = document.getElementById("certificateModal");
    if (certModal) {
        document.querySelectorAll(".cert-card").forEach(card => {
            card.addEventListener("click", function() {
                const title = this.getAttribute("data-title") || this.querySelector("h3").innerText;
                const imgPath = this.getAttribute("data-image") || "";
                const desc = this.getAttribute("data-desc") || "";

                const cTitle = document.getElementById("cert-title");
                const cImg = document.getElementById("cert-img");
                const cDesc = document.getElementById("cert-desc");

                if (cTitle) cTitle.innerText = title;
                if (cImg) {
                    cImg.src = imgPath;
                    cImg.style.display = imgPath ? "block" : "none";
                }
                if (cDesc) cDesc.innerText = desc;

                certModal.style.display = "block";
            });
        });

        const closeBtn = certModal.querySelector(".close-btn");
        if (closeBtn) {
            closeBtn.onclick = () => { certModal.style.display = "none"; };
        }
    }

    // =========================================================================
    // 5. MOBİL AÇILIR MENÜ (DRAWER) KONTROLÜ
    // =========================================================================
    const userBtn = document.getElementById("userMenuBtn");
    const userDrop = document.getElementById("userDropdown");
    const backdrop = document.getElementById("drawerBackdrop");

    function closeDrawer() {
        if (userDrop) userDrop.classList.remove("show");
        if (backdrop) backdrop.classList.remove("show");
    }

    function openDrawer() {
        if (userDrop) userDrop.classList.add("show");
        if (backdrop) backdrop.classList.add("show");
    }

    if (userBtn && userDrop) {
        userBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            if (userDrop.classList.contains("show")) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });

        userDrop.addEventListener("click", function(e) {
            e.stopPropagation();
        });

        if (backdrop) {
            backdrop.addEventListener("click", closeDrawer);
        }
        document.addEventListener("click", closeDrawer);
    }

    // Modalları dışarı tıklayınca kapatma
    window.onclick = function(e) {
        if (expModal && e.target === expModal) expModal.style.display = "none";
        if (certModal && e.target === certModal) certModal.style.display = "none";
        const lb = document.getElementById("lightbox");
        if (lb && e.target === lb) closeLightbox();
    };
});

// =============================================================================
// 6. LIGHTBOX GALERİ FONKSİYONLARI
// =============================================================================
function openLightbox(index) {
    currentSlideIndex = index;
    const lb = document.getElementById("lightbox");
    const lbImg = document.getElementById("lightbox-img");
    if (lb && lbImg && currentGallery.length > 0) {
        lbImg.src = currentGallery[currentSlideIndex];
        lb.style.display = "block";
    }
}

function closeLightbox() {
    const lb = document.getElementById("lightbox");
    if (lb) lb.style.display = "none";
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= currentGallery.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = currentGallery.length - 1;
    const lbImg = document.getElementById("lightbox-img");
    if (lbImg) lbImg.src = currentGallery[currentSlideIndex];
}

// =============================================================================
// 7. ZAMAN TÜNELİ KATEGORİ FİLTRELEME
// =============================================================================
window.filterTimeline = function(category, btn) {
    document.querySelectorAll(".timeline-filters .filter-chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");

    const items = document.querySelectorAll(".timeline-item");
    items.forEach(item => {
        if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
            item.style.opacity = "1";
        } else {
            item.style.display = "none";
            item.style.opacity = "0";
        }
    });
};

// =============================================================================
// 8. SERTİFİKA & REFERANS FİLTRELEME
// =============================================================================
window.filterCerts = function(category, btn) {
    document.querySelectorAll(".timeline-filters .filter-chip").forEach(c => c.classList.remove("active"));
    btn.classList.add("active");

    const cards = document.querySelectorAll(".cert-card");
    cards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
            card.style.opacity = "1";
        } else {
            card.style.display = "none";
            card.style.opacity = "0";
        }
    });
};
