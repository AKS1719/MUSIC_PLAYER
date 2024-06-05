
// const hourEl = document.getElemenhan tById("pm");




obj = {
    1:"Different World",
    2:"Arcade",
    3:"At My Worst",
    4:"Doraemon",
    5:"Duniya Song",
    6:"Faded",
    7:"Fallin for you",
    8:"First Kiss",
    9:"Friend Like you",
    10:"Gaddi Lambprghini",
    11:"Guitar Sikhda",
    12:"Hosanna",
    13:"I love You",
    14:"Kabhi kabhi aditi",
    15:"Kaise hua",
    16:"Kale je libas di ",
    17:"Kalla sohna nai",
    18:"Love me like you do ",
    19:"main koi aise geet gaun",
    20:"Na ja",
    21:"Pahla Pyar",
    22:"Play Date",
    23:"Qaafirana",
    24:"Raabta",
    25:"Rang Gora",
    26:"Shape of You",
    27:"Closer",
    28:"Wallian",
    29:"Zalima",
    30:"Zara sa",
}

function myfunc(parameter)
{
    var trackThubmnail = document.getElementById("trackThumbnail");
    trackThubmnail.innerHTML=`<img src="/thumnails/${parameter}.jpeg" height="50px" alt="">`
    e1 = document.getElementById("pm");
    e1.innerHTML = obj[parameter];
    e2.innerHTML = `
    <audio hidden class="audio-tg" autoplay controls src="/music/${parameter}.mp3" type="audio/mp3" id="audio"></audio>
    <div class="controls">
    <div class="seekingTime" style="display: flex;">
    <h6 id="startTime" style="margin-right: 2px;">00</h6><input type="range" name="seekbar" id="seekbar"><h6 id="EndTime" style="margin-left: 2px;">00</h6>
 </div>
               <div id="controlsBtn">
                  <button type="button" onclick="changePrev(${parameter});"><img src="/img/prev.png" alt=""></button>
                  <button type="button" onclick="playPause();" id="playPause"><img src="/img/pause.png" alt=""></button>
                  <button type="button" onclick="changeNext(${parameter});"><img src="/img/next.png" alt=""></button>
               </div>
            </div>
`; 
    Seeking();
}

function changeNext(parameter)
{
    if(parameter==30)
    {
        myfunc(1);
    }
    else{
        myfunc(++parameter);
    }
}

function changePrev(parameter)
{
    if(parameter==1)
    {
        myfunc(30);
    }
    else{
        myfunc(--parameter);
    }
}
function playPause()
{
    var playPause = document.getElementById("playPause");
    if(audio.paused==false)
    {
        audio.pause();
        playPause.innerHTML = `<img src="/Dashboard/images/play.png" alt="">`
    }
    else{
        audio.play();
        playPause.innerHTML = `<img src="/Dashboard/images/pause.png" alt="">`
    }
}

window.onload = function()
{
   
    e2 = document.getElementById("controls");
    document.getElementById("seekbar").value=0;
}

