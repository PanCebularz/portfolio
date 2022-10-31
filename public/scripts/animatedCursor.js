'use strict';

const animatedCursor = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const particlesArray = [];

  let hue = 0;

  canvas.width = document.body.clientWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', function () {
    canvas.width = document.body.clientWidth;
    canvas.height = window.innerHeight;
  });

  const mouse = {
    x: undefined,
    y: undefined,
  };

  canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 1; i++) {
      particlesArray.push(new Particle());
    }
  });

  canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 3; i++) {
      particlesArray.push(new Particle());
    }
  });

  const colors = ['#00B998', '#b3fff1', '#77a4bd', '#6D96AC'];

  class Particle {
    constructor() {
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = colors[Math.floor(Math.random() * 4)];
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) {
        this.size -= 0.1;
      }
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  let handleParticles = () => {
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
      for (let j = i; j < particlesArray.length; j++) {
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          ctx.beginPath();
          ctx.strokeStyle = particlesArray[i].color;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
      if (particlesArray[i].size <= 0.1) {
        particlesArray.splice(i, 1);
        i--;
      }
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue += 2;
    requestAnimationFrame(animate);
  };

  animate();
};

export default animatedCursor;
