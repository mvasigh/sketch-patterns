import p5 from "p5";

const WIDTH = 800;
const HEIGHT = 800;
let k = 3;

/** @type {(p: p5) => void} */
export default (p) => {
  /**
   * Runs once at the beginning of the sketch.
   */
  p.setup = () => {
    p.createCanvas(WIDTH, HEIGHT);
    p.background(0);
  };
  
  /**
   * Runs once for each frame
   */
  p.draw = () => {
    p.background(20);
    p.loadPixels();
    for (let x = 0; x < WIDTH; x++) {
      for (let y = 0; y < HEIGHT; y++) {
        let i = ((y * WIDTH) + x) * 4;
        let val = (x & y) & (x ^ y) % k ? 200 : 0;
        if (!val) {
          continue;
        }
        p.pixels[i] = p.pixels[i + 1] = p.pixels[i + 2] = val;
        p.pixels[i + 3] = val;
      }
    }
    p.updatePixels();

    k += 4;
  };
};
