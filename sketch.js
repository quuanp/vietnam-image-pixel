let img; let originalImg; let canvasW = 600; let canvasH = 600;
let pix =[];
let cols, rows;
let size = 5;
let rectX, rectY, rectW, rectH;

let updateInterval = 10;

function preload(){
  originalImg = loadImage("images/2.jpg");
}

function setup() {
  createCanvas(canvasW, canvasH);
  originalImg.resize(canvasW,0);
  
  img = createImage(canvasW, canvasH);
  img.copy(originalImg, 0, 0, canvasW, canvasH, 0, 0, canvasW, canvasH);
  img.filter(GRAY);
  fetchPixels(0,0);
 
}

function draw() {
  background(220);
  tint(100);
  image(img, 0, 0);
  stroke(255,10);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      let x = rectX + i*size;
      let y= rectY + j*size;
      fill(pix[i][j]);
      rect(x,y,size,size);
    }
  }
}

function mouseMoved(){
  noCursor();
  if (frameCount % updateInterval == 0){
      fetchPixels(mouseX,mouseY);
  }
}

function fetchPixels(x,y){
  
  rectW=floor(random(30,40));
  rectH=floor(random(25,30));
  
// rectX=random(0,width - rectW);
// rectY=random(0,height - rectH);
  
  rectX = x;
  rectY = y;
  
  cols = rectW;
  rows = rectH;
  
  for (let i=0; i<cols; i++){
    pix[i] = [];
    for (let j=0;j<rows;j++){
      let x = rectX + i*size;
      let y= rectY + j*size;
      pix[i][j] = originalImg.get(x,y);
    }
  }
  
  
}
