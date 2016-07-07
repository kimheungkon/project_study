$(function(){
       var menu = $('#gnb > li');
       var wrap = $('#gnbWrap');
       var menuHeight = menu.children('a').height();
       
       menu.on({
           mouseover:function(){
               var tg = $(this);
               menu.removeClass('on');
              tg.addClass('on');
              
              var th = menuHeight + tg.find('> .sGnbArea').height();
              
              wrap.stop().animate({height:th});
          },
          mouseout:function(){
              var tg = $(this);
              tg.removeClass('on');
              
              wrap.stop().animate({height:menuHeight});
          }
      });
});