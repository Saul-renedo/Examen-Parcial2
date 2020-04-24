class Samus{
  constructor(){
    this.X = 30;
    this.Y = 290;
    this.velx = 10;
    this.vely = 10;
    this.img = [];
    this.img2 = [];
    this.frame = 0;
    this.dirx = 0.20;
    this.diry= 0.20;
    this.flecha=1;
    
    for(var j = 0; j < 41; j++){
     this.img2[j] = loadImage("samus2/samus1_"+j+".gif");
   }     
    for(var i = 0; i < 17; i++){
      this.img[i] = loadImage("samus1/samus_"+i+".gif");
    }
  
  }
  mostrar(){
    push();
    imageMode(CENTER);
    translate(this.X,this.Y);
    scale(this.dirx,this.diry);
    if(this.flecha==3||this.flecha==4){
    image(this.img[this.frame], 0,0);
    }
    else{
      image(this.img2[this.frame], 0,0);
    }
    pop();
  }
  tecla(){
    if(keyCode == 87 && keyIsPressed){
      heroe.arriba()
      municion.arriba();
      dir = keyCode;
      this.flecha=1;
    }
    if(keyCode == 83 && keyIsPressed){
      heroe.abajo()
      municion.abajo();
      dir = keyCode;
      this.flecha=2;
    }
    if (keyCode == 68 && keyIsPressed){
      heroe.derecha();
      municion.derecha();
      dir = keyCode;
      this.flecha=3;
    }
    if(keyCode == 65 && keyIsPressed){
      heroe.izquierda()
      municion.izquierda();
      dir = keyCode;
      this.flecha=4;
    }
  }

  derecha(){
    this.dirx=0.20;
    this.frame++
    if(this.frame > 16){
      this.frame=0;
    }
    this.X=this.X+this.velx;
  }
  izquierda(){
    this.dirx=-0.20;
    this.frame++
    if(this.frame > 16){
      this.frame=0;
    }
    this.X=this.X-this.velx;
  }
  arriba(){
    this.diry=0.20;
    this.frame++
    if(this.frame > 16){
      this.frame=0;
    }
    this.Y=this.Y-this.vely;
  }
  abajo(){
    this.diry=0.20;
    this.frame++
    if(this.frame > 16){
      this.frame=0;
    }
    this.Y=this.Y+this.vely;
  }
}
