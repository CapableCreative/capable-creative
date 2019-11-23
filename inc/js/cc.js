


$( document ).ready(function() {
// Clicking Portfolio on main C+C page changes the main section to display the portfolio.
    $("#portTrigger").on("click",function(){
        $("#defaultWrap").animate({opacity: "0.0"}, 350);
        $("#defaultWrap").animate({height:'0px'}, 350);
        $("#portfolioWrap").animate({height: '100vh'}, 350); 
        $("#portfolioWrap").animate({flexBasis: '75%'}, 205);      
        $("nav.mainNav").animate({width: '25%'}, 225);
        $(".tagline").css({display: "none"});
    });
    $("#homeNav").on("click",function(){
        $("#defaultWrap").animate({opacity: "1.0"}, 250);
        $("#portfolioWrap").animate({height:'0px'}, 350);
        $("#defaultWrap").animate({height: '100vh'}, 350); 
        //$("#portfolioWrap").animate({flexBasis: '75%'}, 105);      
        $("nav.mainNav").animate({width: '33%'}, 225);
        $(".tagline").css({display: "block"});
    });
});