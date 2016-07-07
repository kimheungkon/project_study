$(function(){
      var current = 0;
      var thumbListSize = 6;
      var thumbnail = $('#thumbnail');
      var prev = thumbnail.find('> .left');
      var next = thumbnail.find('> .right');
      var container = thumbnail.find('> .container > ul');
      var containWidth = thumbnail.find('> .container').width();
      var thumb = container.find('> .thumb');
      var maxSize = thumb.size();
      var image = $('#gallery #image > p');
      
      next.on('click', function(){
          if(current < maxSize / thumbListSize - 1) current++;
          console.log(current);
      });
      
      prev.on('click', function(){
          if(current > 0) current--;
          console.log(current);
      });
      
      thumb.on('click', function(){
          image.css('display', 'none');
          var i = $(this).index();
          image.eq(i).css('display', 'block');
      });
});