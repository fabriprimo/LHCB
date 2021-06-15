var canvas;
var amount = 100;

function windowResized(){
    
    resizeCanvas(windowWidth, 3100, WEBGL);
}
function setup() {
  canvas = createCanvas(windowWidth, 3100, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    frameRate(30);
    
    

}

function draw() {
  background(175);
   
  
    push();
  translate(-200, -1000);
  rotateX(radians(mouseY/10));
  rotateY(radians(mouseX/10));
  rotateZ(radians(mouseX*mouseY/10));
    normalMaterial();
  noStroke();
  torus(400,20);
    pop();
    
    push();
  
     translate(random(100, 600), random(0, -600));
  normalMaterial();
  noStroke();
     for (var i=0; i<50; i++){
    sphere(i);
     }
    pop();
  
    
    push();
  
     translate(mouseX-600, 650);
  normalMaterial();
  noStroke();
    sphere(50);
    pop();
    
    
push();
normalMaterial();
noStroke();
translate(-300, 3000);
for (var i = 0; i <= amount; i++) {
var y = map(i, 0, amount, -height*0.6, height*0.6);
var x = map(tan(radians((frameCount + (i*4)))), -1, 1, -width*0.4, width*0.4);
push();
translate(x, y);
sphere(30); 
pop();
}
pop();
    
    
    
    
    

    

  




  
  
  
}