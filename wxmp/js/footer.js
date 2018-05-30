/**
 * Created by Administrator on 2018/5/10.
 */
$(function () {
    var homeImgGray = './images/icon/home_icongra.png';
    var homeImgOrange = './images/icon/home_iconora.png';
    var actiGray = './images/icon/acti_icongra.png';
    var actiOrange = './images/icon/acti_iconora.png';
    var meGray = './images/icon/megra.png';
    var meOrange = './images/icon/meora.png';
    //获取首页的img
    var img = $(".footer_nav :nth-child(1) img");
    var src = $(img).attr('src');
    // 点击首页
    $(".footer_nav :nth-child(1)").on('click', function() {
        $(".footer_nav :nth-child(1) p").removeClass('nav_text').addClass('navcolor');
        $(".footer_nav :nth-child(1) img").attr('src', homeImgOrange);
        $(".footer_nav :nth-child(2) p").removeClass('navcolor').addClass('nav_text');
        $(".footer_nav :nth-child(2) img").attr('src', actiGray);
        $(".footer_nav :nth-child(3) p").removeClass('navcolor').addClass('nav_text');
        $(".footer_nav :nth-child(3) img").attr('src', meGray);
    });
    //获取活动的img
    var actImg = $(".footer_nav :nth-child(2) img");
    var actSrc = $(actImg).attr('src');
    $(".footer_nav :nth-child(2)").on('click', function() {
        $(".footer_nav :nth-child(1) p").removeClass('navcolor').addClass('nav_text');
        $(".footer_nav :nth-child(1) img").attr('src', homeImgGray);
        $(".footer_nav :nth-child(2) p").removeClass('nav_text').addClass('navcolor');
        $(".footer_nav :nth-child(2) img").attr('src', actiOrange);
        $(".footer_nav :nth-child(3) p").removeClass('navcolor').addClass('nav_text');
        $(".footer_nav :nth-child(3) img").attr('src', meGray);
    });
    //获取我的img
    var meImg = $(".footer_nav :nth-child(2) img");
    var actSrc = $(meImg).attr('src');
    $(".footer_nav :nth-child(3)").on('click', function() {
        $(".footer_nav :nth-child(1) p").removeClass('navcolor').addClass('nav_text');
        $(".footer_nav :nth-child(1) img").attr('src', homeImgGray);
        $(".footer_nav :nth-child(2) p").removeClass('navcolor').addClass('nav_text');
        $(".footer_nav :nth-child(2) img").attr('src', actiGray);
        $(".footer_nav :nth-child(3) p").removeClass('nav_text').addClass('navcolor');
        $(".footer_nav :nth-child(3) img").attr('src', meOrange);
    });
})