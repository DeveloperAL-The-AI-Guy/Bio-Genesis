import React, { useEffect, useRef } from 'react';
import { COLORS } from '../constants';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  angle: number; // for gentle orbital drift
}

const OrbitalBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const particleCount = Math.min(20, Math.floor(window.innerWidth / 50)); // Responsive count
      particles.current = [];

      for (let i = 0; i < particleCount; i++) {
        // Randomly assign colors based on the logic: 70% white, 20% cyan, 10% magenta
        const rand = Math.random();
        let color = COLORS.WHITE;
        if (rand > 0.7) color = COLORS.CYAN;
        if (rand > 0.9) color = COLORS.MAGENTA;

        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 40 + 20, // Large radius for metaball effect
          color: color,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      // Clear with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        // Update position (Brownian-ish + weak orbital)
        p.angle += 0.002;
        p.x += p.vx + Math.cos(p.angle) * 0.2;
        p.y += p.vy + Math.sin(p.angle) * 0.2;

        // Soft mouse attraction
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 400) {
          p.x += dx * 0.001;
          p.y += dy * 0.001;
        }

        // Boundary wrap
        if (p.x < -p.radius) p.x = canvas.width + p.radius;
        if (p.x > canvas.width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = canvas.height + p.radius;
        if (p.y > canvas.height + p.radius) p.y = -p.radius;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Ensure colors are suitable for the contrast filter
        // High opacity is needed for the contrast filter to pick it up as a solid blob
        ctx.fillStyle = p.color;
        
        // We modulate opacity slightly for depth
        ctx.globalAlpha = 0.6; 
        ctx.fill();
        ctx.globalAlpha = 1.0;
        
        // Draw connections for nearby particles
        for (let j = i + 1; j < particles.current.length; j++) {
            const p2 = particles.current[j];
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            if (dist2 < 200) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                // Bezier curve for organic feel? 
                // A straight line with the blur filter looks like a biological strand
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = COLORS.WHITE;
                ctx.lineWidth = 2; // Thicker for blur to catch
                ctx.globalAlpha = (1 - dist2 / 200) * 0.2;
                ctx.stroke();
                ctx.globalAlpha = 1.0;
            }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        // The core metaball trick: Blur + High Contrast
        // Contrast clamps the alpha channel, making blurred edges sharp
        background: 'transparent', // Let body background show through
        filter: 'blur(12px) contrast(20)', 
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full opacity-60" />
    </div>
  );
};

export default OrbitalBackground;