class Block{
  constructor(x, y, width, height) {
      var options = {
         
        //  restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
     
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visibility = 255;
      
      
    }
   
    display(){
      console.log(this.body.speed);
      console.log(this.visibility);
      console.log(score);
    if(this.body.speed <4){
       
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility-5;
      //tint(200,this.Visiblity);
      //rect(0,0,this.width, this.height);
      pop();
      
    }
  }
   score() {
    if(this.visibility <0 && this.visibility>-105) {
      score++;
    }
   }
}