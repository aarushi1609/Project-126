peter_pan = "";
frozen = "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
score_leftWrist = 0;
song1_playing = "";

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    Posenet = ml5.poseNet(video, modelLoaded);
    Posenet.on("pose", gotResults);
}

function modelLoaded()
{
    console.log("Posenet is intialized");
}

function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left Wrist: ", leftWristX, leftWristY);
        console.log("Right Wrist: ", rightWristX, rightWristY);
        score_leftWrist = results[0].pose.keypoints[9].score;
        console.log("Score Left: ", score_leftWrist);
    }
}

function preload()
{
    frozen = loadSound("frozen.mp3");
    peter_pan = loadSound("peter_pan.mp3");
}

function draw()
{
    image(video, 0, 0, 500, 400);
    fill("red");
    song1_playing = peter_pan.isPlaying();
    console.log(song1_playing);
    if(score_leftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 30);
        frozen.stop();
        if(song1_playing == false)
    {
        peter_pan.play();
        document.getElementById("song_name").innerHTML = "Song Name is Peter Pan";
    }
    }
    
}