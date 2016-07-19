$(function(){
    $('nav ul li a').mouseenter(function(){
       $(this).parent().css({
           backgroundColor:'#000'
       })
       $(this).css({
           color:'#fff'
       })
    })
    
    $('nav ul li a').mouseleave(function(){
         $(this).parent().css({
           backgroundColor:'#CCC'
       })
       $(this).css({
           color:'#000'
       })
    })
    // 메뉴 hover 끝
   
})


 //menu 클릭시 해당 위치로 이동
$(function(){
    var spot= [];
    
    $('.content>section').each(function(){
        spot.push($(this).offset().top)
        // console.log(spot)
    })
    
    $('nav ul li a').click(function(){
        
        var aa = $(this).parent().index()
        $('html,body').animate({
            scrollTop:spot[aa]
        })
     
     return false;
        
    })
})
 
//slider banner

$(function(){
    
    var num = $('.slidebanner ul li').length;
    var idx = Math.floor(Math.random()*num);
    
    var sliderWidht = $('.slidebanner ul').width();
   //reboot give addClass'on' for first li    
    $('.slidebanner li').eq(idx).addClass('on').children('img').css({
        display:'block'
    })
    
    var loof = setInterval(function(){
        $('.next').click()
    },1000)
    
    $('.slidebanner').mouseenter(function(){
        clearInterval(loof)
    }).mouseleave(function(){
        loof = setInterval(function(){
        $('.next').click()
        },1000)
    })
    
    $('.d-type .next').click(function(){
        $('.slidebanner ul li').eq(idx).removeClass('on').children('img').animate({
            left : - sliderWidht
        }).parent().next().addClass('on').children('img').css({
            display:'block',
            left : sliderWidht
        }).animate({
            left:'0'
        })
        
        idx++
        
        if(idx == $('.slidebanner ul li').length){
            idx = 0
            $('.slidebanner ul li').eq(idx).children('img').css({
                left: sliderWidht,
                'display':'block'
            }).stop().animate({
                left:'0'
            }).parent().addClass('on').siblings().removeClass('on')
        }
        
    })
    
    $('.d-type .prev').click(function(){
        
        $('.slidebanner ul li').eq(idx).removeClass('on').children('img').animate({
            left : sliderWidht
        }).parent().prev().addClass('on').children('img').css({
            display:'block',
            left: - sliderWidht
        }).animate({
            left:'0'
        })
        
        idx--
        
        if(idx < 0 ){
            idx = $('.slidebanner ul li').length -1
            $('.slidebanner ul li').eq(idx).children('img').css({
                left: -sliderWidht,
                display:'block'
            }).stop().animate({
                left:'0'
            }).parent().addClass('on').siblings().removeClass('on')
        }
        
    })
    
    $('.d-type .slidebanner ul li a').click(function(){
        
        idx = $(this).parent().index();
        var his = $('.slidebanner ul li.on').index();
        
        if(idx > his){
            $('.slidebanner ul li').eq(idx).addClass('on').children('img').css({
                left: sliderWidht,
                display:'block'
            }).animate({
                left:'0'
            })
            
            $('.slidebanner ul li').eq(his).removeClass('on').children('img').animate({
                left: - sliderWidht
            })
        }else if(idx < his){
            $('.slidebanner ul li').eq(idx).addClass('on').children('img').css({
                left: - sliderWidht,
                display: 'block'
            }).animate({
                left:'0'
            })
            
            $('.slidebanner ul li').eq(his).removeClass('on').children('img').animate({
                left: sliderWidht
            })
        }
        
    })
    
})


//fade banner

$(function(){
   var fadeIdx = 0;
   
   $('.fadebanner li').eq(fadeIdx).addClass('on')
   
   var aa = setInterval(function(){
        $('.fadebanner li').eq(fadeIdx).removeClass('on').children('img')
        .fadeOut(2300).parent().next().addClass('on').children('img').fadeIn(2300)
        
        fadeIdx++
        
        if(fadeIdx == $('.fadebanner li').length ){
            fadeIdx = 0
            $('.fadebanner li').eq(fadeIdx).addClass('on').children('img')
            .fadeIn(1300)
        }
   },2000)
    
    $('.fadebanner').mouseenter(function(){
        clearInterval(aa)
    }).mouseleave(function(){
        aa = setInterval(function(){
            $('.fadebanner li').eq(fadeIdx).removeClass('on').children('img')
        .fadeOut(2300).parent().next().addClass('on').children('img').fadeIn(2300)
        
        fadeIdx++
        
        if(fadeIdx == $('.fadebanner li').length ){
            fadeIdx = 0
            $('.fadebanner li').eq(fadeIdx).addClass('on').children('img')
            .fadeIn(2300)
        }
        },2300)
    })
})


//sns 리무브

//wing banner

$(function(){
    
  
				
$(window).scroll(function(){
	
	var sct = $(this).scrollTop()
    	$('.wing').stop().animate({
			top:sct
		})
	})
    
})