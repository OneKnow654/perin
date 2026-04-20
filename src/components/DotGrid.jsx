'use client';
import { useRef, useEffect } from 'react';

export default function DotGrid({
  dotSize = 6,
  gap = 25,
  baseColor = '#e5e7eb',
  activeColor = '#6366f1',
  proximity = 100,
}) {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  // Build grid
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      canvas.width = w;
      canvas.height = h;

      const newDots = [];
      for (let y = gap; y < h; y += gap) {
        for (let x = gap; x < w; x += gap) {
          newDots.push({ x, y, ox: 0, oy: 0 });
        }
      }
      dots.current = newDots;
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [gap]);

  // Mouse tracking
  useEffect(() => {
    const move = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Click shockwave (GSAP)
  useEffect(() => {
    const handleClick = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      dots.current.forEach(dot => {
        const dx = dot.x - cx;
        const dy = dot.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          const force = (1 - dist / 200) * 20;

          dot.ox += dx * 0.2 * force;
          dot.oy += dy * 0.2 * force;
        }
      });
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const draw = () => {
      const { x: mx, y: my } = mouse.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.current.forEach(dot => {
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const influence = Math.max(0, 1 - dist / proximity);

        // Smooth return
        dot.ox *= 0.9;
        dot.oy *= 0.9;

        const x = dot.x + dot.ox - dx * influence * 0.15;
        const y = dot.y + dot.oy - dy * influence * 0.15;

        ctx.fillStyle = influence > 0 ? activeColor : baseColor;

        ctx.beginPath();
        ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();
  }, [dotSize, baseColor, activeColor, proximity]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}