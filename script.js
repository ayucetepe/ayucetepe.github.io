// --- FONKSİYON BÖLÜMÜ ---

let currentLangData = {};
let currentLang = 'en';

async function fetchLanguageData(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        if (!response.ok) {
            console.error(`Dil dosyası yüklenemedi: ${lang}.json. İngilizce'ye dönülüyor.`);
            // Ana dil (İngilizce) yüklenemezse hata fırlat, aksi halde İngilizce'yi dene
            if (lang === 'en') throw new Error('Ana dil dosyası (en.json) bulunamadı.');
            return await fetchLanguageData('en');
        }
        return await response.json();
    } catch (error) {
        console.error("Dil verisi alınırken kritik hata:", error);
        document.body.innerHTML = "Error loading language files. Please contact support."; // Kullanıcıya hata göster
        return {};
    }
}

async function applyTranslations() {
    // Temel çeviriler
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (currentLangData[key] !== undefined) {
            el.innerHTML = currentLangData[key];
        }
    });

    document.title = currentLangData.pageTitle || "Aziz Yucetepe";

    loadDetailedSkills();
    loadTechnicalSkills();
    loadExperience();
    loadReferences();
    loadTraining();
    loadCertificates();
}

window.setLanguage = async function(lang) {
    currentLang = lang;
    currentLangData = await fetchLanguageData(lang);
    
    applyTranslations();

    const langBtn = document.getElementById('language-btn');
    langBtn.innerHTML = `<i class="fas fa-globe"></i> ${lang.toUpperCase()}`;
    
    document.querySelectorAll('.dropdown-item').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    const dropdown = document.getElementById('language-dropdown');
    dropdown.setAttribute('hidden', '');
    langBtn.setAttribute('aria-expanded', 'false');
}

function loadTraining() {
    const container = document.getElementById('training-list');
    container.innerHTML = '';
    (currentLangData.trainingList || []).forEach(item => {
        container.innerHTML += `<li>${item}</li>`;
    });
}

function loadCertificates() {
    const container = document.getElementById('certificates-list');
    container.innerHTML = '';
    (currentLangData.certificatesList || []).forEach(item => {
        container.innerHTML += `<li>${item}</li>`;
    });
}

function loadDetailedSkills() {
    const container = document.getElementById('skills-list');
    container.innerHTML = '';
    const skills = currentLangData.skills || {};
    for (const skill in skills) {
        container.innerHTML += `<div class="skill-item"><p>${skill}</p><div class="progress-bar"><div class="progress" style="width: ${skills[skill]}%;"></div></div></div>`;
    }
}

function loadTechnicalSkills() {
    const container = document.getElementById('tech-skills-list');
    container.innerHTML = '';
    (currentLangData.techSkillsList || []).forEach(skill => {
        container.innerHTML += `<li>${skill}</li>`;
    });
}

function loadExperience() {
    const container = document.querySelector('.experience-list');
    container.innerHTML = '';
    const workExperienceData = currentLangData.workExperience || []; 
    workExperienceData.forEach(job => {
        container.innerHTML += `
            <details class="experience-card">
                <summary>
                    <div class="job-title">${job.title}</div>
                    <div class="job-info"><strong>${job.project}</strong> · ${job.company} · <em>${job.date} | ${job.location}</em></div>
                </summary>
                <div class="job-description">${job.description}</div>
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
                 d.setAttribute('open', '');
            }
        });

        toggleBtn.style.display = 'inline-block';
        toggleBtn.innerText = currentLangData.showMore || 'Show more';
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.dataset.expanded = 'false';

        toggleBtn.onclick = () => {
            const isExpanded = toggleBtn.dataset.expanded === 'true';
            details.forEach((d, i) => {
                if (i >= visibleCount) d.style.display = isExpanded ? 'none' : 'block';
            });
            toggleBtn.dataset.expanded = String(!isExpanded);
            toggleBtn.innerText = isExpanded ? (currentLangData.showMore || 'Show more') : (currentLangData.showLess || 'Show less');
            toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
        };
    } else {
        toggleBtn.style.display = 'none';
        details.forEach(d => d.setAttribute('open', ''));
    }
}

function loadReferences() {
    const container = document.querySelector('.references-grid');
    container.innerHTML = '';
    const referencesData = currentLangData.references || [];
    referencesData.forEach(ref => {
        const rawPhone = ref.phone || '';
        const phoneDigits = rawPhone.replace(/[^+\d]/g, '');
        const waDigits = phoneDigits.replace(/^\+/, '');
        const telHref = phoneDigits ? `tel:${phoneDigits}` : '';
        const waHref = waDigits ? `https://wa.me/${waDigits}` : '';

        container.innerHTML += `
            <div class="reference-card">
                <div class="name">${ref.name}</div>
                <div class="title">${ref.title}</div>
                <div class="phone">
                    ${telHref ? `<a href="${telHref}">${rawPhone}</a>` : rawPhone}
                    ${waHref ? `<a class="wa-link" aria-label="WhatsApp ${ref.name}" href="${waHref}" target="_blank" rel="noopener"><i class="fab fa-whatsapp"></i></a>` : ''}
                </div>
            </div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const isLightMode = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        themeToggle.setAttribute('aria-pressed', String(isLightMode));
    });
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.setAttribute('aria-pressed', 'true');
    }
    
    const languageBtn = document.getElementById('language-btn');
    const languageDropdown = document.getElementById('language-dropdown');
    
    languageBtn.addEventListener('click', () => {
        const isHidden = languageDropdown.hasAttribute('hidden');
        languageDropdown.toggleAttribute('hidden', !isHidden);
        languageBtn.setAttribute('aria-expanded', String(isHidden));
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-switcher')) {
            languageDropdown.setAttribute('hidden', '');
            languageBtn.setAttribute('aria-expanded', 'false');
        }
    });
    
    setLanguage('en');

});
