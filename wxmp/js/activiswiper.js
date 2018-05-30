/**
 * Created by Administrator on 2018/5/11.
 */
$(function() {
    //我的活动
    var initialSlide = 0;
    var swiper = new Swiper('.activity_div', {
        pagination: '.swiper-pagination',
        slidesPerView : 3,
        initialSlide: initialSlide,
        centeredSlides: true,
        controlBy:'container',
        slideToClickedSlide:true,
        paginationClickable: true,
        onClick: function(swiper){
            console.log(swiper.activeIndex);
        }
    });
    var swiper1 = new Swiper('.activi_list', {
        pagination: '.swiper-pagination',
        slidesPerView : "auto",
        spaceBetween : 30,
        paginationClickable: true,
        centeredSlides: true,
        autoHeight: true,
        initialSlide: initialSlide,
        control: [swiper],
        slideToClickedSlide: true,
        onSlideChangeEnd: function(swiper) {
            console.log(swiper.activeIndex)
            $(".cst").eq(swiper.activeIndex).addClass("swiper-slide-active").siblings().removeClass('swiper-slide-active');
        },
    });
    swiper.params.control = swiper1;
    swiper1.params.control = swiper;

    //获取用户
    var swiper2 = new Swiper('.obruser_div', {
        pagination: '.swiper-pagination',
        slidesPerView : 4,
        initialSlide: initialSlide,
        centeredSlides: true,
        controlBy:'container',
        slideToClickedSlide:true,
        paginationClickable: true,
        onClick: function(swiper){
            console.log(swiper.activeIndex);
        }
    });
    var swiper3 = new Swiper('.obruser_list', {
        pagination: '.swiper-pagination',
        slidesPerView : "auto",
        spaceBetween : 30,
        paginationClickable: true,
        centeredSlides: true,
        autoHeight: true,
        initialSlide: initialSlide,
        control: [swiper2],
        slideToClickedSlide: true,
        onSlideChangeEnd: function(swiper) {
            console.log(swiper.activeIndex)
            $(".cst").eq(swiper.activeIndex).addClass("swiper-slide-active").siblings().removeClass('swiper-slide-active');
        },
    });
    swiper2.params.control = swiper3;

    var swiper4 = new Swiper('.conver_div', {
        pagination: '.swiper-pagination',
        slidesPerView : 4,
        spaceBetween : 20,
        initialSlide: initialSlide,
        // centeredSlides : true,
        slidesOffsetAfter : 0,
        controlBy:'container',
        slideToClickedSlide:true,
        paginationClickable: true,
        onClick: function(swiper){
            console.log(swiper.activeIndex);
        }
    });
    var swiper5 = new Swiper('.conver_silde', {
        pagination: '.swiper-pagination',
        slidesPerView : "auto",
        spaceBetween : 30,
        paginationClickable: true,
        centeredSlides: true,
        autoHeight: true,
        initialSlide: initialSlide,
        control: [swiper4],
        slideToClickedSlide: true,
        onSlideChangeEnd: function(swiper) {
            console.log(swiper.activeIndex)
            $(".cst").eq(swiper.activeIndex).addClass("swiper-slide-active").siblings().removeClass('swiper-slide-active');
        },
    });
    swiper4.params.control = swiper5;

    
    //滑动处理
    var startX, startY;
    document.addEventListener('touchstart',function (ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
        // console.log("----进入了----")
    }, false);

    document.addEventListener('touchend',function (ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        // console.log("----离开了----")
        var direction = GetSlideDirection(startX, startY, endX, endY);
        switch(direction) {
            case 0:
                break;
            case 1:
                // 向上
                // alert("up");
                $(".obruser_my").animate({"right":"-3.4rem"},500);
                $(".obruser_tit").animate({"right":"0"},500);
                break;
            case 2:
                // 向下
                // alert("down");
                $(".obruser_tit").animate({"right":"-2rem"},500);
                $(".obruser_my").animate({"right":0},500);
                break;

            default:
        }
    }, false);
    $(window).scroll(function(event){
        var aa = $(window).scrollTop();
        console.log(aa)
        if(aa == 0) {
            $(".obruser_tit").animate({"right":"-2rem"},500);
            $(".obruser_my").animate({"right":0},500);
        }
    });
});
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    //var dx = endX - startX;
    var result = 0;
    if(dy>0) {//向上滑动
        result=1;
    }else{//向下滑动
        result=2;
    }
    return result;
}
