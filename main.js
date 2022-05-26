peter_pan = "";
frozen = "";

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    frozen = loadSound("frozen.mp3");
    peter_pan = loadSound("peter_pan.mp3");
}

function draw()
{
    image(video, 0, 0, 500, 400);
}