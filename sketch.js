var heroe;
var villano=[];
var fondo;
var x1=0;
var x2;
var scrollSpeed = 1;
var municion = [];
var dir;

function setup(){
  
  fondo = loadImage("fondo.png");
  createCanvas(400,400);
  x2=width;
  frameRate(15);
  heroe = new Samus();
  //villano = new Metroid();
  for(var k=0; k<31; k++){
    villano[k] = new Metroid();
  }
    municion = new Proyectil();
}

function draw(){
  image(fondo, x1, 0, width, height);
  image(fondo, x2, 0, width, height);
  x1 -= scrollSpeed;
  x2 -= scrollSpeed;
  
  if (x1 < -width){
    x1 = width;
  }
  if (x2 < -width){
    x2 = width;
  }
  for (var k = 0; k < villano.length; k++){
    villano[k].mostrar();
  }
  
if (keyIsPressed == true){
      if (keyCode == 32){
         municion.mostrar()
         municion.disparar()
         municion.intersect(heroe);
         if (dir == 68){
           municion.derechap();
         }
         else if (dir == 65){
           municion.izquierdap();
         }
         else if (dir == 87){
            municion.arribap();
         }
         else if (dir == 83){
           municion.abajop();
         }
       }
    }
  else {
    municion.reset(heroe);
  }
  heroe.mostrar();
  heroe.tecla();
}
