// Hover Menu

    $(function(){
        $('nav ul li a').mouseenter(function(){
            $(this).parent().css({
                backgroundColor: '#000'
            })
            $(this).css({
                color: '#fff'
            })
        })
    
        $('nav ul li a').mouseleave(function(){
            $(this).parent().css({
                backgroundColor: '#ccc'
            })
            $(this).css({
                color: '#000'
            })
        })
    })



// ScrollMove Menu

    $(function() {
        var dest = [];

        $('.content>section').each(function() {
            dest.push($(this).offset().top)
        })
        // 각각의 section의 탑높이값
        
        
        $('nav ul li a').click(function(){
            var aa = $(this).parent().index()
            $('html,body').animate({
                
                scrollTop:dest[aa]
        // a의 부모(li)가 몇번째인지 알려주는 index값
            })
            return false;    
        })
    })
    
    
    
// Slide Banner

    $(function() {

        var idx = Math.floor(Math.random()*num);
        
        var slideWidth = $('.slidebanner').width()
        
        $('.slidebanner .next').click(function(){
            
            $('.slidebanner li').eq(idx).removeClass('on').children('img').animate({
                'left':-slideWidth
            }).parent().next().addClass('on').children('img').css({
                'display':'block',
                'left':slideWidth
            }).animate({
                'left':'0'
            })
            idx ++
            
            if(idx == $('.slidebanner li').length){
                idx = 0;
                $('.slidebanner li').eq(idx).children('img').css({
                    'display':'block',
                    'left':slideWidth
                }).stop().animate({
                    'left':'0'
                }).parent().addClass('on').siblings().removeClass('on')
            }
        })

        
        $('.slidebanner .prev').click(function(){
            
            $('.slidebanner li').eq(idx).removeClass('on').children('img').animate({
                'left':slideWidth
            }).parent().prev().addClass('on').children('img').css({
                'display':'block',
                'left':-slideWidth
            }).animate({
                'left':'0'
            })
            idx --
            
            if(idx < 0){
                idx = $('.slidebanner li').length-1;
                $('.slidebanner li').eq(idx).children('img').css({
                    'display':'block',
                    'left':-slideWidth
                }).stop().animate({
                    'left':'0'
                }).parent().addClass('on').siblings().removeClass('on')
            }
        })        
        
        
        $('.slidebanner li a').click(function() {
            
            idx = $(this).parent().index();
            var his = $('.slidebanner li.on').index();
            
            if(idx > his){
                $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                    'left': slideWidth,
                    'display':'block'
                }).animate({
                    'left':'0'
                })
                $('.slidebanner li').eq(his).removeClass('on').children('img').animate({
                    'left':-slideWidth
                })
            }else if(idx < his){
                $('.slidebanner li').eq(idx).addClass('on').children('img').css({
                    'left': -slideWidth,
                    'display':'block'
                }).animate({
                    'left':'0'
                })
                $('.slidebanner li').eq(his).removeClass('on').children('img').animate({
                    'left':slideWidth
                })                
            }
        })
    })
    
    
    
    
 