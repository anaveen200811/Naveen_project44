class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("launcher Gameee");
    this.title.position(displayWidth/2 - 350, 0);

    this.input.position(displayWidth/2 - 300 , displayHeight/2 - 150);
    this.button.position(displayWidth/2 - 225, displayHeight/2 -100);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      gameState+=1;
      player = this.input.value();
    });
  }
}
