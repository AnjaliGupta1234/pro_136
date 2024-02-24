video="";
status = "";
function preload() 
{
    
}

function setup() 
{
    canvas = createCanvas(400 , 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() 
{
    image(video , 0 , 0 , 400 , 380);
}

function modelLoaded() 
{
    console.log("Model Loaded!");
    status = true;
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}
