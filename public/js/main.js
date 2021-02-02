$(document).ready(function(){
    $('div#content').hide();
    $('#bttn').on('click',function(){
        $('div#content').toggle();
    });
    $('div#content').hide();   
});