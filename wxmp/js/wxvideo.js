/**
 * 
 * Created by Administrator on 2018/5/10.
 */
var videoObj={
    playBefore:function(){return true},
    playAfter:function(){}
};
$(function () {
    $(".play_btn").click(function () {
        videoClick();
    });
})
function videoClick() {
    if(videoObj.playBefore){
        if(!videoObj.playBefore()){
            return;
        }
    }
    $(".video_play").hide();
    $(".video_share").show()
    var myPlayer =  videojs("#my-video");  //初始化视频
    myPlayer.play();
    myPlayer.on("ended", function(){
        $(".video_play").show();
        $(".video_share").hide()
    });
    if(videoObj.playAfter){
        videoObj.playAfter();
    }
}