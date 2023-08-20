// 动态心跳，更改自己的名称
$(document).ready(function(e) {
    updateName(); // 页面加载完毕时先执行一次
    setInterval(updateName, 1000); // 每隔1秒钟执行一次
});

function updateName() {
    $('.copyright').html('<span style="color: silver;">@ 2023</span> <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer" style="color: red; animation: heartbeat 1s infinite;"></i> <span style="color: silver;">By XIRYG.</span>');
    var style = document.createElement('style');
    style.innerHTML = '@keyframes heartbeat { 0% { transform: scale(1); } 25% { transform: scale(0.9); } 50% { transform: scale(1); } 75% { transform: scale(0.9); } 100% { transform: scale(1); } }';
    document.head.appendChild(style);
}


$(document).ready(function(e){
    show_date_time();
})

//本站运行时间，更改自己建立站点的时间
function show_date_time(){
$('.framework-info').html('<span style="border: 1px solid white; padding: 5px; color: white;">本站已经安全运行<span id="span_dt_dt" style="color: #fff;"></span></span>');
window.setTimeout("show_date_time()", 1000);
BirthDay=new Date("8/1/2023 0:0:0");
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=Math.floor(e_hrsold);
e_minsold=(e_hrsold-hrsold)*60;
minsold=Math.floor((e_hrsold-hrsold)*60);
seconds=Math.floor((e_minsold-minsold)*60);
span_dt_dt.innerHTML='<font style=color:#afb4db>'+daysold+'</font> 天 <font style=color:#f391a9>'+hrsold+'</font> 时 <font style=color:#fdb933>'+minsold+'</font> 分 <font style=color:#a3cf62>'+seconds+'</font> 秒';
}