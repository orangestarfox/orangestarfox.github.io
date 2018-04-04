var paint=-1;
var X=0;
var Y=0;
var color="#000000"
function Paint(e){
paint=-paint;
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
X=e.clientX-6;
Y=e.clientY-12;
}
function drawCanvas(){
   var  r;  
var x=0
var y=0;  
let i=0; 

 
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
for ( i = 0; i < 200000; i++){  
 r = Math.random() *100;  
        if (r == 0) { x = 0; y = 0.16*y; }
        else if (r > 0 && r <= 85) { x = 0.85*x + 0.04*y; y = (-0.04)*x + 0.85*y + 1.6; }
        else if (r>85&&r<=92) { x = 0.2*x + (-0.26)*y; y = 0.23*x + 0.22*y + 1.6; }
        else { x = (-0.15)*x + 0.28*y; y = 0.26*x + 0.24*y + 0.44; }

cxt.beginPath()
cxt.moveTo(x * 50+200,y * 50);
cxt.lineTo(x * 50+200+1,y * 50 +1);
 var color = document.getElementById("html5colorpicker").value;
cxt.strokeStyle=color;
cxt.stroke();
}

}

function drawTree(){

var canvas = document.getElementById("myCanvas"),ctx = canvas.getContext("2d"),W = canvas.width,H = canvas.height;
var maxAngle = Math.PI/2,maxBranch = 3;
//document.body.appendChild(canvas);

var x = x || W /2,y = y || H /2 + 200;
draw(x,y,60,-Math.PI/2,12,12);




 function draw(startX,startY,length,angle,depth,branchWidth){
var color,endX,endY,subBranches,newAngle,newLength;
ctx.beginPath();
ctx.moveTo(startX,startY);
endX = startX + length * Math.cos(angle);
endY = startY + length * Math.sin(angle);
ctx.lineCap = 'round';
ctx.lineWidth = branchWidth;
ctx.lineTo(endX,endY);
if(depth--<=2){
color = 'rgb(0,' + (rand(128,192)>>0) + ',0)';
}else{
color = 'rgb(' + (rand(64,128)>>0) + ',50,25)';
}
ctx.strokeStyle = color;
ctx.stroke();
if(!depth) return;
subBranches = rand(1,maxBranch);
branchWidth *= 0.7;
for(var i=0;i<subBranches;i++){
newAngle = angle + rand(-Math.PI/4,Math.PI/4);
newLength = length * rand(0.7,1);
draw(endX,endY,newLength,newAngle,depth,branchWidth)
}
}
function rand(min,max){
return Math.random() * (max-min) + min;
}

}




function cnvs_getCoordinates(e)
{
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");

x=e.clientX-6;
y=e.clientY-12;
if(paint==1){
cxt.moveTo(X,Y);
cxt.lineTo(x,y);
X=x;
Y=y;

//cxt.lineTo(10,50);

 var color = document.getElementById("html5colorpicker").value;
cxt.strokeStyle=color;
cxt.stroke();
}
document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
}
function cnvs_clearCoordinates()
{
document.getElementById("xycoordinates").innerHTML="";
}