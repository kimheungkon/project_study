$(document).ready(function(){
       var piece = $('#draggable_wrapper > div');
       var gallery = $('#gallery_wrapper > div');

       randomPosition();
       
       function randomPosition(){
           piece.each(function(){
              var tl = Math.random() * 300;
              var tt = Math.random() * 300;
              
              $(this).css({left:tl, top:tt});
          });
     }
});