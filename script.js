var div = document.createElement("div");



var h1 = document.createElement("h1");
h1.id="color";
h1.innerHTML=" Twitter Inspired Character Counter";
//h1.addEventListener("mouseover",divcolor);

h1.addEventListener("click",mousexy);




var textarea = document.createElement("textarea");
textarea.id = "count";
textarea.setAttribute("placeholder","whats's happening?");
textarea.addEventListener("keyup",countcharacter);


var span = document.createElement("span");
span.innerHTML = "you inserted characters";

var spanxy = document.createElement("span");
spanxy.id="xy";


var break1 = document.createElement("br");


var break2 = document.createElement("br");
var break3 = document.createElement("br");
var break4 = document.createElement("br");
var break5 = document.createElement("br");
var break6 = document.createElement("br");
var break7 = document.createElement("br");

var button1 = document.createElement("button");
button1.innerHTML=" Full Screen Mode";
button1.id="fullscreen";
button1.addEventListener("click",toggleFullScreen);


var button2 = document.createElement("button");
button2.innerHTML=" Exit ";
button2.id="exitfullscreen";
button2.addEventListener("click",exittoggleFullScreen);


div.append(h1);
document.body.append (div);
//document.body.append(textarea,break1,span,break4);


document.body.append (break6,spanxy,break7);

document.body.append(break2,button1,break3,break5,button2);



function divcolor()
{
    document.getElementById("color").style.backgroundColor="#666666";
}


function countcharacter()
{
    var count= document.getElementById("count").value.length;
    console.log(count);
    var res = prompt ("want to display count in site");
    console.log
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } 
  }

  function exittoggleFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } 
     
    
  }

  function mousexy(event)
   {
    let y = event.offsetY;
    let x = event.offsetX;
   document.getElementById("xy").innerHTML = "The x and y coordinate is: " + x + "," + y;
  }
