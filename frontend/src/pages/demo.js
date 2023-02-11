import React, { useRef, useEffect } from 'react';

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;

    c.strokeStyle = "red";
    c.fillStyle = "black";
    c.lineWidth = 0.1;

    const points = {
      number: 333,
      connectDistance: 50,
      mouseDistance: 100,
      array: [],
    };

    function Point() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vectorX = Math.random() - 0.5;
      this.vectorY = Math.random() - 0.5;
      this.speedX = Math.random() * 20;
      this.speedY = Math.random() * 20;
      this.radius = Math.random() * 5;
    }

    Point.prototype = {
      drawPoint: function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        c.fill();
      },

      nextPosition: function () {
        const tempP = this;
        if (tempP.x < 0 || tempP.x > w) {
          tempP.vectorX = -tempP.vectorX;
        } else if (tempP.y < 0 || tempP.y > h) {
          tempP.vectorY = -tempP.vectorY;
        }
        tempP.x += tempP.vectorX * tempP.speedX;
        tempP.y += tempP.vectorY * tempP.speedY;
      },
    };

    function init() {
      for (let i = 0; i < points.number; i++) {
        points.array.push(new Point());
        points.array[i].drawPoint();
      }
    }

    function connectEach() {
      const tempArray = points.array;
      for (let i = 0; i < points.number; i++) {
        for (let j = 0; j < points.number; j++) {
          const preP = points.array[i];
          const nextP = tempArray[j];
          if (
            preP.x - nextP.x < points.connectDistance &&
            preP.y - nextP.y < points.connectDistance &&
            preP.x - nextP.x > -points.connectDistance &&
            preP.y - nextP.y > -points.connectDistance
          ) {
            c.beginPath();
            c.moveTo(preP.x, preP.y);
            c.lineTo(nextP.x, nextP.y);
            c.stroke();
            c.closePath();
          }
        }
      }
    }

    function animatedPart() {
      c.clearRect(0, 0, w, h);
      for (let i = 0; i < points.number; i++) {
        points.array[i].nextPosition();
        points.array[i].drawPoint();
      }
      connectEach();
      requestAnimationFrame(animatedPart);
    }
    init();
    animatedPart();
  }, []);

  return (
    <canvas
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default Particles;
