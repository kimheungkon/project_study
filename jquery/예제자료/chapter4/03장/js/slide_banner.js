$(function(){ // $(document).ready(function(){ });
    var button = $('#buttonList > li');
    var visual = $('#brandVisual > ul > li');
    var current = 0;
    
    button.click(function(){
    	var tg = $(this);
    	var i = tg.index();
    	
    	button.removeClass('on');
    	tg.addClass('on');
    	
    	move(i);
    });
    
    function move(i){
    	visual.eq(current).css('left', 0).stop().animate({left:'-100%'});
    	visual.eq(i).css('left', '100%').stop().animate({left:0});
    	
    	current = i;
    }
    
    setInterval(function(){
    	var n = current + 1;
    	if(n == button.size()) n = 0;
    	button.eq(n).trigger('click');
    }, 7000)
});