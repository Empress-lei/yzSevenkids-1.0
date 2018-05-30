/**
 * Created by Administrator on 2018/5/11.
 */
$(function () {
    $(".cst").click(function () {
        var aaa = $(this).index();
        $(".cst").eq(aaa).addClass("swiper-slide-active").siblings().removeClass('swiper-slide-active');
    });
    // 获取用户的下拉列表
    $(".user_slide").click(function () {
        $(".user_div").slideToggle();
        $(".render_div").hide();
        $(".render_slide a").removeClass("cur_aicon");
        if($(".swiper-slide-active a").hasClass("cur_aicon")) {
            $(".swiper-slide-active a").removeClass("cur_aicon");
        }else {
            $(".swiper-slide-active a").addClass("cur_aicon");
        }

    })
    seleRender(".user_ul .user_li");
    // 入园转化下拉列表
    $(".render_slide").click(function () {
        $(".render_slide .render_div").slideToggle();
        $(".user_div").hide();
        $(".user_slide a").removeClass("cur_aicon");
        if($(".swiper-slide-active a").hasClass("cur_aicon")) {
            $(".swiper-slide-active a").removeClass("cur_aicon");
        }else {
            $(".swiper-slide-active a").addClass("cur_aicon");
        }
    })
    seleRender(".render_ul .render_li");
    //我的活动
    var initialSlide = 0;
    var swiper = new Swiper('.obtain_user', {
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
    var swiper1 = new Swiper('.obtain_list', {
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
//  $(window).scroll(function(event){
//      var aa = $(window).scrollTop();
//      console.log(aa)
//      if(aa >= 200) {
//          $(".obtain_user").css("position","fixed");
//      }else {
//          $(".obtain_user").css("position","absolute");
//      }
//  });
    //滑动处理
    var startX, startY;
    document.addEventListener('touchstart',function (ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
        // console.log("----进入了----")
        $(".obruser_my").animate({"right":"-2rem"},300);
    }, false);

    document.addEventListener('touchend',function (ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        $(".obruser_my").animate({"right":0},300);
        // console.log("----离开了----")
//      var direction = GetSlideDirection(startX, startY, endX, endY);
//      switch(direction) {
//          case 0:
//              break;
//          case 1:
//              // 向上
//              // alert("up");
//              $(".obruser_my").animate({"right":"-2rem"},500);
//
//              break;
//          case 2:
//              // 向下
//              // alert("down");
//              $(".obruser_my").animate({"right":0},500);
//              break;
//
//          default:
//      }
    }, false);
    $(window).scroll(function(event){
        var bb = $(window).scrollTop();
        console.log(bb)
        if(bb == 0) {
            $(".obruser_my").animate({"right":0},300);
        }
    });
})
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

//单选选择标签
function seleRender(item) {
    var item = $(item);
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).siblings("li").addClass("active_first");
    })
    item.on("click", function () {
        item.removeClass("active_first");
        $(this).addClass("active_first");

    })
}
