$(function(){ // $(document).ready(function(){ });
    var visual = $('#brandVisual > ul > li');
    var button = $('#buttonList > li');
    var current = 0;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();

            button.removeClass('on');
            tg.addClass('on');

            move(i);
        }
    });
    
    function move(i){
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
});