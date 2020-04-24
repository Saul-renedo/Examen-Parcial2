class Proyectil{
  
  constructor(){
    this.speedN = 30;
    this.X = 144;
    this.Y = 228;
    this.vel = 4;
    this.speed = this.speedN;
    this.size = 5;
  }
  mostrar(){
    push();
    rectMode(CENTER);
    fill("#FFFFFF");
    rect(this.X,this.Y, this.size, this.size);
    pop();
  }
  
  
  derecha(){
    this.X=this.X+this.vel;
  }
  derechap(){
    this.X=this.X+this.speed;
  }
  
  
  izquierda(){
    this.X=this.X-this.vel;
  }
  izquierdap(){
    this.X=this.X-this.speed;
  }
  

  arriba(){
    this.Y=this.Y-this.vel;
  }
  arribap(){
    this.Y=this.Y-this.speed;
  }
  
  
  abajo(){
    this.Y=this.Y+this.vel;
  }
  abajop(){
    this.Y=this.Y+this.speed;
  }
  
  disparar(){
    this.speed++
  }
  intersect(player){
    if(this.X > width || this.X < 0 || this.Y > height || this.Y < 0 ){
      this.X = player.X;
      this.Y = player.Y;
    }
  }
  reset(player){
    this.speed = this.speedN;
    this.X = player.X;
    this.Y = player.Y
  }
}
