function preload() {
}

function setup() {
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 600);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 600);

    rect(0, 10, 575, 20);
    rect(0, 570, 575, 20);
    rect(570, 10, 20, 575);
    rect(10, 10, 20, 575);
    fill(20, 80, 145);
    stroke(20, 80, 145);
    ellipse(0, 20, 80, 80);
    ellipse(0, 570, 80, 80);
    ellipse(570, 570, 80, 80);
    ellipse(600, 20, 80, 80);
    fill(103, 51, 107);
    stroke(103, 51, 107);
}

function take_snapshot() {
    save('student_name.png');
}

