function setup() {
    createCanvas(600, 300);
    background("white"); 
  }
  
  function draw() {
    
    stroke ("purple");
    fill("blue");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
      
    }
        
    
      }