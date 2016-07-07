$(function(){
    var menu = $('#gnb > li');
    menu.on({
        mouseover:function(){
             var tg = $(this);
            menu.removeClass('on');
            tg.addClass('on');
        },
        mouseout:function(){
            var tg = $(this);
             tg.removeClass('on');
          }
      });
});