function preload(){

}
function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(120, 240);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();

}
function draw(){
    image(video, 0, 0, 400, 300);
    fill("green")
    rect(359.5, 26, 30, 270)
    fill("orange");
    rect(40, 11, 320, 30);
    fill("orange");
    rect(40, 261, 320, 30);
    fill("rgb(0, 203, 255)")
    circle(374, 26, 50);
    fill("red")
    circle(374, 26, 40);
    fill("rgb(0, 203, 255)")
    circle(374, 275, 50);
    fill("red")
    circle(374, 275, 40);
    fill("green");
    rect(10, 26, 30, 270);
    fill("rgb(0, 203, 255)")
    circle(25, 26, 50);
    fill("red")
    circle(25, 26, 40);
    fill("rgb(0, 203, 255)")
    circle(25, 275, 50);
    fill("red")
    circle(25, 275, 40)
}
function snapshot_takeit(){
    save("ayush_project.png")}