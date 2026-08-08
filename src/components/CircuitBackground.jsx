import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const spacing = 50;
    const dots = [];
    const traces = [];
    const chips = [];

    // Initialize grid of dots
    const cols = Math.floor(canvas.width / spacing) + 1;
    const rows = Math.floor(canvas.height / spacing) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        dots.push({ x: i * spacing, y: j * spacing });
      }
    }

    // Create random traces between dots (Limit for performance)
    const numTraces = Math.min(40, Math.floor((cols * rows) / 15));
    for (let i = 0; i < numTraces; i++) {
      const startDot = dots[Math.floor(Math.random() * dots.length)];
      const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
      const length = Math.floor(Math.random() * 5 + 1) * spacing;
      
      const endDot = {
        x: direction === 'horizontal' ? startDot.x + length : startDot.x,
        y: direction === 'vertical' ? startDot.y + length : startDot.y,
      };

      // Add a pulse to each trace with tech colors
      const color = Math.random() > 0.5 ? '#2563EB' : '#06B6D4';
      traces.push({
        start: startDot,
        end: endDot,
        pulseProgress: Math.random(),
        speed: Math.random() * 0.003 + 0.001,
        color: color
      });

      // Randomly place a chip/node at intersections
      if (Math.random() > 0.7) {
        chips.push({ x: startDot.x, y: startDot.y, phase: Math.random() * Math.PI * 2, color });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw traces and pulses
      traces.forEach(trace => {
        // Draw base line (trace path)
        ctx.beginPath();
        ctx.moveTo(trace.start.x, trace.start.y);
        ctx.lineTo(trace.end.x, trace.end.y);
        ctx.strokeStyle = 'rgba(203, 213, 225, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Update and draw pulse (data packet)
        trace.pulseProgress += trace.speed;
        if (trace.pulseProgress > 1) {
          trace.pulseProgress = 0;
        }

        const pulseX = trace.start.x + (trace.end.x - trace.start.x) * trace.pulseProgress;
        const pulseY = trace.start.y + (trace.end.y - trace.start.y) * trace.pulseProgress;

        ctx.fillStyle = trace.color;
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw glowing nodes (chips)
      chips.forEach(chip => {
        chip.phase += 0.05;
        const glow = Math.abs(Math.sin(chip.phase));
        
        // Draw a techy square node
        ctx.strokeStyle = chip.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(chip.x - 4, chip.y - 4, 8, 8);
        ctx.stroke();
        
        // Inner core
        ctx.fillStyle = chip.color;
        ctx.globalAlpha = 0.2 + (glow * 0.6); // Fast opacity instead of blur
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none"
    />
  );
};

export default CircuitBackground;
