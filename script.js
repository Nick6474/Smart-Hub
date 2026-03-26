document.addEventListener('DOMContentLoaded', () => {
    
    const btnEntrar = document.querySelector('.btn-primary');
    const btnGoogle = document.querySelector('.btn-google');
    
    if (btnEntrar && btnGoogle) {
        btnEntrar.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
        btnGoogle.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    const backToLoginBtn = document.querySelector('.back-to-login');
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const tvCard = document.querySelector('.favorite-card');
    if (tvCard) {
        tvCard.addEventListener('click', () => {
            window.location.href = 'control-tv.html';
        });
    }

    const backBtnControl = document.querySelector('.back-btn');
    if (backBtnControl) {
        backBtnControl.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }
});