/**
 * Created by Administrator on 2017/3/28.
 */

//banner
$(function () {

    let timer=null;
    let $oUl=$('.banner_img');
    let $oL=$('.banner_img li');
    let n=0;
    let num=null;
    let $oWid=$oL.eq(0).width()*$oL.length;
    //console.log($oWid)
    let $ingLen=$oL.length;
    $oUl.width(4191);
    /*$oUl.innerHeight+=$oUl.innerHeight;
    console.log()
    timer=setInterval(function () {
        if(n<$ingLen-1){
            n++;
        }else{
            n=0;
        }
        changeTo(n);
    },2500)

    function changeTo(n) {
        let goLeft=n*$oL.eq(0).width();
        $oUl.animate({left:-goLeft},500)
    }
/!*    clearInterval(timer)
    timer=setInterval(()=>{
        "use strict";
        if(n>=$oL.length){
            clearInterval(timer);
            n=0;
        }
        $oUl.animate({
            left:-($oL.eq(0).width()*n)
        },2000)
        n++;
    },2000)*!/

*/























    $(window).scroll(function () {
        $('.zy_guild_first img').each(function (index, elem) {
            if($(elem).offset().top<$(window).height()+$(document).scrollTop()){
                $(elem).animate({
                    top:0,
                    opacity:1
                },'slow');
            }else{
                $(elem).animate({
                    top:-400,
                    opacity:0
                },30)
            }
        })
    });

});















