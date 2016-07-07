    $(document).ready(function(){
        	var count = 0;
        	var piece = $('#draggable_wrapper > div');
        	var gallery = $('#gallery_wrapper > div');
        	var cnt = 0;
        	randomPosition();
        	
        	function randomPosition(){
        		piece.each(function(){
        			var tl = Math.random() * 300;
        			var tt = Math.random() * 300;
        			
        			$(this).css({left:tl, top:tt});
        		});
        	}
        	
        	piece.draggable({revert:'invalid'});
        	
        	gallery.each(function(i){
        	   var dropper = $(this);
        	   var targetPiece = piece.eq(dropper.index());
        	   dropper.droppable({
        	      accept:targetPiece,
        	      drop:function(){
        	          var tg = $(this);
        	          var tx = tg.offset().left;
        	          var ty = tg.offset().top;
        	          targetPiece.animate({left:tx, top:ty},{duration:400, complete:function(){
        	              cnt++;
                          if(9 == cnt) {
                                piece.remove();
                                gallery.css({
                                    opacity:1,
                                    margin:0
                                });
                                
                                alert('성공~!');
                          }
        	          }});
        	      }
        	   });
        	});
    });