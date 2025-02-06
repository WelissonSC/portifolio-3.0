document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.querySelector('.header__hamburguer__menu');
    const menuHamburguerResponse = document.querySelector('.hamburguer__menu');
    const hamburguerIcon = document.querySelector('.hamburguer-icon');
    const hidePhoto = document.querySelector('.main__perfil__photo')

    menuHamburguer.addEventListener('click', () => {
        menuHamburguerResponse.classList.toggle('ativo');
        hamburguerIcon.classList.toggle('ativo');
        hidePhoto.classList.toggle('hide')
    });
});