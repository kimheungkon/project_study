$(function(){
	var thumbnail = $('#thumbnail');
	var container = thumbnail.find('> .container > ul');
	var thumb = container.find('> .thumb');
	var image = $('#gallery #image > p');
	
	thumb.on('click', function(){
		image.css('display', 'none');
		var i = $(this).index();
		image.eq(i).css('display', 'block');
	});
});