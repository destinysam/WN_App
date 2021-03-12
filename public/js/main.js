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
    var backtoTop = document.querySelector("#backtotop")
    var rootelement = document.documentElement
    function handleScroll(){
        var scrollTotal = rootelement.scrollHeight - rootelement.clientHeight
        if((rootelement.scrollTop / scrollTotal) > 0.80){
            backtoTop.style.display = "block"
        }else{
            backtoTop.style.display = "none"
        } 
    } 
    function scrollToTop(){
        rootelement.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    backtoTop.addEventListener("click",scrollToTop)
    document.addEventListener("scroll",handleScroll)
});