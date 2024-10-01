
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
    
    $("#gotop").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 800);
        return false;
    });
});


/*
$(document).ready(function () {

    


    $('#gotop').on('click', function () {
                        console.log('clicked');
                    event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 800);
                });
    
    $('#gotop_2').on('click', function () {
                        console.log('clicked');
                    event.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 400);
                });
    
    /*
            // each(): 제이쿼리 내에서 반복에 해당하는 표현을 하는 메서드
            $('#gotop').each(function(){
                var $ee = $(scrollableElement('html', 'body'));
                // scrollableElement(): scrolltop 메서드를 이용해 스크롤을 할 수 있는 요소를 감지하는 값
                // html, body를 스크롤 가능한 요소로 작성!
                
                $(this).click(function(event){
                    event.preventDefault();
                    // 버튼의 원래 성격을 무력화
                    
                    $ee.animate({ scrollTop: 0 }, 1000, 'linear');
                });
            });
            
            //스크롤탑을 사용할수 있는 요소를 감지하는 함수부분  
            // 이 부분은 사실 의미에 대한 이해를 찾기가 난해할수있으니 그냥 복사해서 사용해도 무방합니다.
            //단 위의 변수명은 동일하게 지정.

            function scrollableElement(elements) {
                var i, len, ee, $ee, scrollable;
                for (i = 0, len = arguments.length; i < len; i++) {
                    ee = arguments[i],
                    $ee = $(ee);
                    if ($ee.scrollTop() > 0) {
                        return ee;
                    } else {
                        $ee.scrollTop(1);
                        scrollable = $ee.scrollTop() > 0;
                        $ee.scrollTop(0);
                        if (scrollable) {
                            return ee;
                        }
                    }
                }
                return [];
            }
            ////////////////////////////////////  
             });

*/
       
