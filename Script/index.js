function dropmenu(){
    document.getElementById("dropmenu").classList.toggle("showmenu");
}
// var con3 = setInterval(function(){
//     chervon("right");
// },1000)
$(".con3").mouseover(function(){
    clearInterval(con3);
})
$(".con3").mouseout(function(){
    con3 = setInterval(function(){
        chervon("right");
    },1000)
})
function chervon(b){
    var arrItem = [];
    var length = document.getElementsByClassName("showp").length;
    for(let i=0;i<length;i++){
        arrItem.push(document.getElementsByClassName("showp")[i].innerHTML);
    }
    if(b=="left"){
        var tem = arrItem[length-1];
        for(let i =length-1;i>=0;i--){
            document.getElementsByClassName("showp")[i].innerHTML = arrItem[i-1];
            if(i==0) document.getElementsByClassName("showp")[i].innerHTML = tem;
        }
    }
    if(b=="right"){
        var tem = arrItem[0];
        for(let i =0;i<length;i++){
            document.getElementsByClassName("showp")[i].innerHTML=arrItem[i+1];
            if(i==length-1) document.getElementsByClassName("showp")[i].innerHTML = tem;
        }
    }
}
var posi = 0;
var tudong =  setInterval(function(){
    posi++;
    if(posi > (document.getElementsByClassName("con5-item").length - 1)) posi = 0;
    positions(posi);
    activeBtn(posi);
},5000);
document.getElementById("chervon-btn").addEventListener('click',function(){
    console.log("clear");
    clearInterval(tudong);
},true);
document.getElementById("chervon-btn").addEventListener('blur',function(){
    tudong =  setInterval(function(){
        posi++;
        if(posi > (document.getElementsByClassName("con5-item").length - 1)) posi = 0;
            positions(posi);
            activeBtn(posi);
        },5000);
},true);
positions(posi);
function btnchange(a){
    var length = document.getElementsByClassName("con5-item").length;
    if(a=="left"){
        posi--;
        if(posi<0) posi = (length-1);
        positions(posi);
    }
    if(a=="right"){
        posi++;
        if(posi>(length-1)) posi = 0;
        positions(posi);
    }
    activeBtn(posi);
}
function positions(po){
    var length = document.getElementsByClassName("con5-item").length;
    if($("body").width()>1024){
        for(let i = 0;i<po;i++){
            document.getElementsByClassName("con5-item")[i].style.left = "-100%";
            if(i==po-1){
                document.getElementsByClassName("con5-item")[i].style.left = "-50%";
            }
            document.getElementsByClassName("con5-item")[i].style.opacity = "0.6";
        }
        document.getElementsByClassName("con5-item")[po].style.left = "20%";
        document.getElementsByClassName("con5-item")[po].style.opacity = "1";
        for(let i = po+1;i<length;i++){
            if(i==po+1){
                document.getElementsByClassName("con5-item")[i].style.left = "90%";
            }
            else document.getElementsByClassName("con5-item")[i].style.left = "200%";
            document.getElementsByClassName("con5-item")[i].style.opacity = "0.6";
        }
    }
    else {
        for(let i = 0;i<po;i++){
            document.getElementsByClassName("con5-item")[i].style.left = "-200%";
            if(i==po-1){
                document.getElementsByClassName("con5-item")[i].style.left = "-100%";
            }
            document.getElementsByClassName("con5-item")[i].style.opacity = "0.6";
        }
        document.getElementsByClassName("con5-item")[po].style.left = "1%";
        document.getElementsByClassName("con5-item")[po].style.opacity = "1";
        for(let i = po+1;i<length;i++){
            if(i==po+1){
                document.getElementsByClassName("con5-item")[i].style.left = "150%";
            }
            else document.getElementsByClassName("con5-item")[i].style.left = "200%";
            document.getElementsByClassName("con5-item")[i].style.opacity = "0.6";
        }
    }
}
document.getElementById(posi).style.backgroundColor = "#EAA451";
function btnClick(){
    var a = document.activeElement.getAttribute('id');
    posi = a;
    console.log(a);
    if(a){
        positions(Number.parseInt(a,10));
        activeBtn(a);
    }
}
function activeBtn(a){
    for(let i = 0; i<document.getElementsByClassName("btn-choose").length;i++){
        if(i==a) document.getElementById(i).style.backgroundColor = "#EAA451";
        else document.getElementById(i).style.backgroundColor = "#d1d1d1";
    }
}



$(window).resize(function(){
    let a = $("body").width();
    $("#re").text(a);
    positions(posi);
})

// slider-con2
function chervonCon2(b){
    var arrItem = [];
    var length = document.getElementsByClassName("con2Content").length;
    console.log(length);
    for(let i=0;i<length;i++){
        arrItem.push(document.getElementsByClassName("con2Content")[i].innerHTML);
    }
    if(b=="left"){
        var tem = arrItem[length-1];
        for(let i =length-1;i>=0;i--){
            document.getElementsByClassName("con2Content")[i].innerHTML = arrItem[i-1];
            if(i==0) document.getElementsByClassName("con2Content")[i].innerHTML = tem;
        }
    }
    if(b=="right"){
        var tem = arrItem[0];
        for(let i =0;i<length;i++){
            document.getElementsByClassName("con2Content")[i].innerHTML=arrItem[i+1];
            if(i==length-1) document.getElementsByClassName("con2Content")[i].innerHTML = tem;
        }
    }
}
// slider all
var sliderPo = 1;
check("n"+sliderPo);
$(".btnslider").on('click', function(){
    if($(this).attr('id')=="up"){
        sliderPo--;
        if(sliderPo <1) sliderPo = 1;
        var a = "#con" + sliderPo;
    }
    if($(this).attr('id')=="down"){
        sliderPo++;
        if(sliderPo >5) sliderPo = 5;
        var a = "#con" + sliderPo;
    }
    slider(a);
    check("n"+sliderPo);
})
function check(a){
    for(let i = 1;i<$("#slider a").length+1;i++){
        if(a == ("n"+i)) {
            $("#n" + i).css('backgroundColor','#EAA451');
            sliderPo = i;
        }
        else $("#n"+i).css('backgroundColor','#f1f1f1');
    }
}
$("#slider a").on('click',function(){
    var a = "#co" + $(this).attr('id');
    var b = $(this).attr('id');
    slider(a);
    check(b);
})
function slider(a){
    $('html, body').animate({
        scrollTop: $(a).offset().top
    }, 1000);
}