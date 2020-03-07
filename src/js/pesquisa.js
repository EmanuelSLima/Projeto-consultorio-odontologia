$(function(){
    var barraInicial = 0;
    var isDrag = false;
    var preco_maximo = 70000;
    var preco_atual = 0;

    $('.pointer-barra').mousedown(function(){ 
        isDrag = true;
    });

    $(document).mouseup(function(){ 
        isDrag = false;
        habilitarSelect();
    });

    $('.barra-preco').mousemove(function(e){ 
        if(isDrag){
            desabilitarSelect();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0){
                mouseX = 0;
            }
            if(mouseX > elBase.width()){
                mouseX = elBase.width();
            }
            $('.pointer-barra').css('left', (mouseX-15)+'px');
            var percent = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', percent + '%');

            preco_atual = (percent / 100) * preco_maximo;
            preco_atual = formatarPreco(preco_atual);
            $('.valor-inicial').html('R$'+preco_atual);
        }
    });
    
    function formatarPreco(preco_atual){
        var preco_atual = preco_atual.toFixed(2);
        var preco_arr = preco_atual.split('.');
        var novo_preco = formatarTotal(preco_arr);

        return novo_preco;
    }

    function formatarTotal(preco_arr) {
        if(preco_arr[0] < 1000){
            return preco_arr[0]+','+preco_arr[1];
        }
        else if(preco_arr[0] < 10000){
            return preco_arr[0][0]+'.'+preco_arr[0].substr(1, preco_arr[0].length)+
            ','+preco_arr[1];
        }else{
            return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(1, preco_arr[0].length)+
            ','+preco_arr[1];
        }
    }

    function desabilitarSelect(){
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-0-user-select','none');
        $('body').css('user-select','none');
    }

    function habilitarSelect(){
        $('body').css('-webkit-user-select','auto');
        $('body').css('-moz-user-select','auto');
        $('body').css('-ms-user-select','auto');
        $('body').css('-0-user-select','auto');
        $('body').css('user-select','auto');
    }

    $('[goto=contato]').click(function(){ 
        $('header nav a').css('color','black');
        $('footer nav a').css('color','white');
        $(this).css('color','red');
        $('html, body').animate({'scrollTop':$('#contato').offset().top});
        return false;
    });
});