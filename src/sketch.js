import p5 from "p5";

const WIDTH = 720;
const HEIGHT = 720;

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
    p.stroke(255);
    p.strokeWeight(1);
    p.noFill();
    p.circle(WIDTH / 2, HEIGHT / 2, 200);
    p.circle(WIDTH / 2, HEIGHT / 2, 180);
    p.circle(WIDTH / 2, HEIGHT / 2, 160);
  };

  /**
   * Runs when an OSC message is received
   */
  p.onmessage = ({ address, args, timeTag }) => {
    switch (address) {
      case "/ping": {
        console.log("pong!", args);
      }
    }
  };
};
