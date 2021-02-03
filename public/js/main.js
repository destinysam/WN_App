$(document).ready(function(){
    $('div#content').hide();
    $('.card.mt-2').each(function(idx,card){
        $(card).find('#readmore').on('click',function(){
            $(card).find('div#content').toggle();
            $(card).find('#readmore').hide();

        });
        $(card).find('#readless').on('click',function(){
            $(card).find('div#content').toggle();
            $(card).find('#readmore').toggle();
        });    
    });  
});