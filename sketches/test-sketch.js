const s = p => {
  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);

  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

// const frame = document.querySelector("#frame")
new p5(s); // invoke p5