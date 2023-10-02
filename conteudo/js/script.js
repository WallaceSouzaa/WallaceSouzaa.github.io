function menuSnow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "conteudo/img/menu_FILL0_wght400_GRAD0_opsz24.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "conteudo/img/close_FILL0_wght400_GRAD0_opsz24.png";
    }
}

const botao = document.getElementById('container');

        botao.addEventListener('click', () => {
            if(document.body.classList.contains('dark')){

                document.body.classList.remove('dark')
                document.body.style.background = '#fff'
                botao.style.border = '2px solid #000'
                document.getElementById('circle').style.transform = 'translateX(110px)'
            } else {

                document.body.classList.add('dark')
                document.body.style.background = '#26242e'
                botao.style.border = '2px solid #fff'
                document.getElementById('circle').style.transform = 'translateX(0px)'
            }
        })