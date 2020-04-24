class Metroid{
  constructor(){
    this.X=random(10,390);
    this.Y=random(10,390);
    //this.X = 200;
    //this.Y = 90;
    this.velx = 10;
    this.vely = 10;
    this.img = [];
    this.frame = 0;
    this.dirx = 0.4;
    this.diry= 0.4;
    
    for(var j = 0; j < 4; j++){
     this.img[j] = loadImage("metroid/metroid_"+j+".gif");
   }     
  }
  mostrar(){
    push();
    imageMode(CENTER);
    translate(this.X,this.Y);
    scale(this.dirx,this.diry);
    image(this.img[this.frame], 0,0);
    pop();
  }
  tecla(){
    if(keyCode == 73 && keyIsPressed){
      villano.arriba()
    }
    if(keyCode == 75 && keyIsPressed){
      villano.abajo()
    }
    if (keyCode == 76 && keyIsPressed){
      villano.derecha();
    }
    if(keyCode == 74 && keyIsPressed){
      villano.izquierda()
    }
  }

  derecha(){
    this.dirx=0.4;
    this.frame++
    if(this.frame > 3){
      this.frame=0;
    }
    this.X=this.X+this.velx;
  }
  izquierda(){
    this.dirx=-0.4;
    this.frame++
    if(this.frame > 3){
      this.frame=0;
    }
    this.X=this.X-this.velx;
  }
  arriba(){
    this.diry=0.4;
    this.frame++
    if(this.frame > 3){
      this.frame=0;
    }
    this.Y=this.Y-this.vely;
  }
  abajo(){
        this.diry=0.4;
    this.frame++
    if(this.frame > 3){
      this.frame=0;
    }
    this.Y=this.Y+this.vely;
  }
intersect(other){
    var d = dist(this.X, this.Y, other.X, other.Y);
    if(d < this.size){
      return true;
    }
    else {
      return false;
    }
  }
  die(){
    this.X = width + 100;
    this.Y = height + 100;
  }
}
