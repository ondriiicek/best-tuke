/*(function(){

var firstSection = $('.univerzita');
var secondSection = $('.studenti');
var thirdSection = $('.firmy');




$(window).resize(function(){
    var width = $(window).width();

    if(width > 1200){
        firstSection.css("display","none")
        firstSection.slideDown(500);

        if($(window).height() > 798 ){
            secondSection.slideDown(500);
            
        }
        else{
            $(window).on ('scroll', function(){
    
                var secondSectionHeight = secondSection.height();
                let scrollBottom = $(window).scrollTop() + $(window).height();
            
                if( scrollBottom > secondSectionHeight ){
                    secondSection.slideDown(700);
                }
    
            })
        }
    
    
        $(window).scroll(function(){
    
            var thirdSectionHeight = thirdSection.height();
            let scrollBottom = $(window).scrollTop() + $(window).height();
            
            if( ( (scrollBottom) -1500 ) > thirdSectionHeight ){
                thirdSection.slideDown(700);
            }
    
        })
    }
    
})

    

})(jQuery);*/




