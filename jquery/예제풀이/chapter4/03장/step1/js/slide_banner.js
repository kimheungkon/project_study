$(function(){ // $(document).ready(function(){ });
    var visual = $('#brandVisual > ul > li');
    var button = $('#buttonList > li');
    
    button.on({
        click:function(){
            var tg = $(this);
            var i = tg.index();
            alert(i);
        }
    });
});