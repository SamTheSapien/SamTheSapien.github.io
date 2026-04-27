const translations = {
    "en": {
        "nav_cv": "samthesapien",
        "blog_1": "Check my blog!",
        "blog_2": "With Hack The Box",
        "blog_3": "and CTF walkthroughs",
        "banner_prefix": "I am a",
        "role_1": "Cybersecurity Researcher",
        "role_2": "Specialist Pentester",
        "role_3": "DFIR & Forensics investigator",
        "role_4": "CTF player",
        "contact_title": "Contact",
        "contact_email": "Email",
        "contact_loc": "Lisbon, Portugal",
        "contact_addr": "Address",
        "contact_req": "Request personally",
        "contact_phone": "Phone",
        "form_name": "Name *",
        "form_email": "Email *",
        "form_msg": "Your Message",
        "form_send": "Send Message",
        "form_success": "Thank you, your message has been sent.",
        "form_error": "Error occurred while sending email. Please try again later."
    },
    "pt": {
        "nav_cv": "samthesapien",
        "blog_1": "Visita o meu blog!",
        "blog_2": "Com Hack The Box",
        "blog_3": "e write-ups de CTFs",
        "banner_prefix": "Eu sou",
        "role_1": "Investigador de Cibersegurança",
        "role_2": "Pentester Especialista",
        "role_3": "Investigador de DFIR e Forense",
        "role_4": "Jogador de CTF",
        "contact_title": "Contacto",
        "contact_email": "Email",
        "contact_loc": "Lisboa, Portugal",
        "contact_addr": "Endereço",
        "contact_req": "A pedido",
        "contact_phone": "Telemóvel",
        "form_name": "Nome *",
        "form_email": "Email *",
        "form_msg": "A tua mensagem",
        "form_send": "Enviar Mensagem",
        "form_success": "Obrigado, a tua mensagem foi enviada.",
        "form_error": "Ocorreu um erro ao enviar o email. Por favor, tenta novamente mais tarde."
    }
};

function setLanguage(lang) {
    // Save to local storage
    localStorage.setItem('cv_lang', lang);

    // Update active class on language switcher
    document.querySelectorAll('.lang ul li a').forEach(el => el.classList.remove('active'));
    const activeLink = document.querySelector(`.lang ul li a[onclick="setLanguage('${lang}')"]`);
    if (activeLink) activeLink.classList.add('active');

    // Update elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('cv_lang') || 'en';
    setLanguage(savedLang);
});
