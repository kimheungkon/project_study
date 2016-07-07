$(function(){ // $(document).ready(function(){ });
    var visual = $('#brandVisual > ul > li');
    var button = $('#buttonList > li');
    var current = 0;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    
    timer();
    function timer(){
        setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            button.eq(n).trigger('click');
        }, 5000);
    }
    
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
});