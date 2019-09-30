


$( document ).ready(function() {
    $("#portTrigger").on("click",function(){
        $("#defaultWrap").animate({opacity: "0.0"}, 150);
        $("#defaultWrap").animate({height:'0px'}, 250);
        $("#portfolioWrap").animate({height: '100vh'}, 250); 
        $("#portfolioWrap").animate({flexBasis: '75%'}, 105);      
        $("nav.mainNav").animate({width: '25%'}, 125);
    });
});