/**
 * Created by Administrator on 2018/3/27.
 */
$(function () {
    //轮播图
    //banner轮播图
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 1,
        paginationClickable: true,//点击之后继续可以轮播
        pagination: '.swiper-pagination',
        centeredSlides: true,
        grabCursor: true,//鼠标光标
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        setWrapperSize :true,//自动轮播
        speed: 500,
        autoplay: 5000,
        loopAdditionalSlides : 1,
        autoplayDisableOnInteraction: false,
    })
    $('.swiper-container .swiper-slide').mouseenter(function () {
        mySwiper.stopAutoplay();
    })
    $('.swiper-container .swiper-slide').mouseleave(function () {
        mySwiper.startAutoplay();
    })
    //微课轮播
    var swiper = new Swiper('.myswiper', {
        slidesPerView : "auto",
        spaceBetween : 15,
        // loop : false,
        // autoplay: 5000,
        setWrapperSize :true,//自动轮播
        centeredSlides: true,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction: false//点击后打断auto-play
    });
})
