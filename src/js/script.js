$(function(){

    menuMobile();
    inputMask();

    //Funcao do menu mobile
    function menuMobile(){
        $('.menu-mobile').click(function(){ 
            $('.menu-mobile ul').slideToggle();
        });
    }

    //Funcao da mascara de fomulario
    function inputMask(){
        $('input[name=telefone]').mask('(99)99999-9999');
    }
});