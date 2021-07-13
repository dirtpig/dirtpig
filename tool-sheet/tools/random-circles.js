let x = 1;

      // think of it as a very small program and we interact with it through the console
      function random(number) {
        // in console enter 'random(insert # here)'' to generate random number between 0 and your number
        return Math.floor(Math.random() * number); // this is the program code that is written into your function. it generates the output and returns it
      }

      function a() {
        let y = 2;
        output(y);
      }

      function b() {
        let z = 3;
        output(z); //this function was defined below in the global scope; on the same level as function b() is defined so it can be called within function b().
      }

      function output(value) {
        const para = document.createElement("p"); // in our HTML document create the HTML element <p>

        document.body.appendChild(para); // append our new <p> called 'para' to the <body> of our HTML document

        para.textContent = "Value: " + value; // assign the textContent of our <p> element to be a string comprised of Value: [value]; where value the value of whatever operand is in the operation
      }

      // button example that draws circles starts here
      const btn = document.querySelector("button");
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");

      let WIDTH = document.documentElement.clientWidth;
      let HEIGHT = document.documentElement.clientHeight;

      canvas.width = WIDTH;
      canvas.height = HEIGHT;

      function random(number) {
        return Math.floor(Math.random() * number);
      }

      function draw() {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        for (let i = 0; i < 100; i++) {
          ctx.beginPath();
          ctx.fillStyle = "rgba(255,0,0,0.5)";
          ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
          ctx.fill();
        }
      }

      btn.addEventListener("click", draw);