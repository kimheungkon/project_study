$(function(){
   var section = $('#contents > .parallax > div');
   var sectionInfo = [];
   var objectInfo = [];
   
   section.each(function(i){
       var tg = $(this);
       sectionInfo.push(tg.offset().top);
       
       objectInfo.push([]);
      
      var child = tg.children();
      child.each(function(j){
          var t = $(this);
          objectInfo[i][j] = t.position().top;
      });
  });
  console.log(objectInfo);
     
    section.css('position', 'fixed');
    
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        
        section.each(function(i){
            var tg = $(this);
            var tt = -1 * sct + sectionInfo[i];
            if(sct > sectionInfo[i]) tt *= 0.5;

            tg.css('top', tt);
        });
    });
});