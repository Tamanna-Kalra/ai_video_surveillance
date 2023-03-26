objects = [];
status = "";
video = "";
function preload() {
    video = createVideo("video.mp4");
}
function setup() {
    canvas = createCanvas(480 , 380);
    canvas.position(530, 285);
    video.hide();
}
function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw() {
    image(video , 0 , 0 , 480 , 380);
    if(status != "") {
        objectDetector.detect(video , gotResult);
    }
}
function gotResult(error , results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}