song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;


function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

    
}

function preload(){
song1=loadSound("song1.mp3");
song2=loadSound("song2.mp3");

}

function draw(){
    image(video, 0, 0,400,400);
    song1.play();
    song1.volume(1);
    song1.rate(2);
document.getElementById("song").innerHTML="Falling-Trevor Danial";

}

function modelLoaded(){
    console.log("poseNet is initialised");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" +leftWristX+ ", leftWristY="+leftWristY);

        
       righttWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX=" +rightWristX+ ", rightWristY="+rightWristY);
    }
}



