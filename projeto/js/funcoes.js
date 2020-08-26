/*==========CARREGANDO==========*/
$(window).on('load', function (){
    document.getElementById("carregando").style.display = "none";
    document.getElementById("corpo").style.display = "block";
});

/*==========MENU==========*/
$(function () {
    $('.botaoMenu').click(function (event) {
        event.stopPropagation();
        if (!$(this).hasClass('menuAtivo')) {
            $(this).addClass('menuAtivo');
            $('nav ul').animate({ 'left': '0px' }, 300);
        } else {
            $(this).removeClass('menuAtivo');
            $('nav ul').animate({ 'left': '-100%' }, 300);
        }
    });
    $('body').on('click', function () {
        $('.botaoMenu').removeClass('menuAtivo');
        $('nav ul').animate({ 'left': '-100%' }, 300);
    });

    $('.linkMenu').on('click', function () {
        $('.botaoMenu').removeClass('menuAtivo');
        $('nav ul').animate({ 'left': '-100%' }, 300);
    });

    /*==========SLIDE==========*/
    $('#slideshow-banner').slide({
        cdTime: 5000,
        controllerLeftButton: "imagens/esquerda.png",
        controllerRightButton: "imagens/direita.png"
    });

    /*==========GALERIA DE IMAGENS (FANCYBOX)==========*/
    $('.fancybox').fancybox({
        openEffect: 'elastic',
        openSpeed: 150,
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        closeBtn: false,

        helpers: {
            title: {
                type: 'inside'
            },
            buttons: {}
        }
    });

    /*==========JANELA MODAL (FANCYBOX)==========*/
    $('.fancyboxFormulario').fancybox({
        openEffect: 'fade',
        closeEffect: 'elastic',
        openSpeed: 1500,
        closeSpeed: 1500,
        title: false,
    });

    /*==========SCROLL SUAVE==========*/
    var $doc = $('html,body');
    $('.scrollSuave').click(function () {
        $doc.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

    /*==========BOTÃO VOLTAR AO TOPO==========*/
    $(document).scroll(function () {
        if ($(this).scrollTop() > 500) {
            document.getElementById("voltarTopo").style.display = "block";
        } else {
            document.getElementById("voltarTopo").style.display = "none";
        }
    });

    //var intervalo = setInterval(function (){
      //  clearInterval(intervalo);

//        document.getElementById("carregando").style.display = "none";
  //      document.getElementById("corpo").style.display = "block";
    //});

});