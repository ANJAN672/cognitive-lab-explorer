
import React, { useEffect, useRef } from 'react';

export const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid properties
    const gridSize = 30;
    let points: { x: number; y: number; vx: number; vy: number }[] = [];

    // Initialize grid points
    const initPoints = () => {
      points = [];
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          points.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
          });
        }
      }
    };

    initPoints();

    // Animation
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw points
      points.forEach((point, i) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.vx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.vy *= -1;

        // Draw point
        ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        points.forEach((otherPoint, j) => {
          if (i === j) return;
          const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
          if (distance < gridSize * 1.5) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 - (distance / (gridSize * 1.5)) * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};
