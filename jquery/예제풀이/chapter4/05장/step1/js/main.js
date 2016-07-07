$(function(){
     var section = $('#contents > .parallax > div');
     var sectionInfo = [];
     
     section.each(function(i){
         var tg = $(this);
         sectionInfo.push(tg.offset().top);
     });
     
    section.css('position', 'fixed');
    
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        
        section.each(function(i){
            var tg = $(this);
            var tt = -1 * sct + sectionInfo[i];
            
            tg.css('top', tt);
        });
    });
});