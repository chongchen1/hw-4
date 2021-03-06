function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
}

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playingA) {
    background(0, 255, 255);
    var str = '20';
    var diameter = float(str);
    ellipse(width / 2, height / 2, diameter, diameter);
  } 
  if (playingS) {
    background(51,51,204);
    ellipseMode(RADIUS); // Set ellipseMode to RADIUS
    fill(255); // Set fill to white
    ellipse(50, 50, 30, 30); // Draw white ellipse using RADIUS mode
    ellipseMode(CENTER); // Set ellipseMode to CENTER
    fill(100); // Set fill to gray
    ellipse(50, 50, 30, 30); // Draw gray ellipse using CENTER mode
  } 
  if (playingD) {
    background(0,153,102);
    ellipseMode(CORNER); // Set ellipseMode is CORNER
    fill(255); // Set fill to white
    ellipse(25, 25, 50, 50); // Draw white ellipse using CORNER mode

    ellipseMode(CORNERS); // Set ellipseMode to CORNERS
    fill(100); // Set fill to gray
    ellipse(25, 25, 50, 50); // Draw gray ellipse using CORNERS mode
  } 
  if (playingF) {
    background(255,153,0);
    triangle(30, 75, 58, 20, 86, 75);
  }
}
function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    playingA = true;
    osc = oscA;
  } else if (key == 'S') {
    playingS = true;
    osc = oscS;
  } else if (key == 'D') {
    playingD = true;
    osc = oscD;
  } else if (key == 'F') {
    playingF = true;
    osc = oscF;
  }
  if (osc) {
    osc.amp(0.9, 0.2);
}
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playingA = false;
    playingS = false;
    playingD = false;
    playingF = false;
  }
  
}
