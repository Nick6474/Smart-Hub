document.addEventListener('DOMContentLoaded', () => {

    const btnEntrar = document.querySelector('.btn-primary');
    const btnGoogle = document.querySelector('.btn-google');
    if (btnEntrar && btnGoogle) {
        btnEntrar.addEventListener('click', () => { window.location.href = 'dashboard.html'; });
        btnGoogle.addEventListener('click', () => { window.location.href = 'dashboard.html'; });
    }

    const settingsBtn = document.querySelector('.settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => { window.location.href = 'ajustes.html'; });
    }

    const backToLoginBtn = document.querySelector('.back-to-login');
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', () => { window.location.href = 'index.html'; });
    }

    const tvCard = document.querySelector('.favorite-card');
    if (tvCard) {
        tvCard.addEventListener('click', () => { window.location.href = 'control-tv.html'; });
    }

    const sleepCard = document.querySelector('.sleep-card');
    if (sleepCard) {
        sleepCard.addEventListener('click', () => { window.location.href = 'entorno-sueno.html'; });
    }

    const backBtnControl = document.querySelector('.back-btn');
    if (backBtnControl) {
        backBtnControl.addEventListener('click', () => { window.location.href = 'dashboard.html'; });
    }

    const btnSeguir = document.querySelector('.btn-seguir');
    if (btnSeguir) {
        btnSeguir.addEventListener('click', () => { window.location.href = 'dashboard.html'; });
    }

    const btnApagar = document.querySelector('.btn-apagar');
    if (btnApagar) {
        btnApagar.addEventListener('click', () => { window.location.href = 'index.html'; });
    }

    const chNumberBtn = document.querySelector('.ch-number-btn');
    if (chNumberBtn) {
        chNumberBtn.addEventListener('click', () => { window.location.href = 'teclado-tv.html'; });
    }

    const backBtnTeclado = document.querySelector('.back-btn-teclado');
    if (backBtnTeclado) {
        backBtnTeclado.addEventListener('click', () => { window.location.href = 'control-tv.html'; });
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        if (item.textContent.includes('Hogar')) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                window.location.href = 'dashboard.html';
            });
        }
    });

});