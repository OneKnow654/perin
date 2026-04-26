import { useRef, useState } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export default function HoverZoomImage({ src, alt, className, baseScale = 1.1, zoomScale = 2.5 }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Motion values to track percentages
  const x = useMotionValue(50);
  const y = useMotionValue(50);

  // Apply spring physics for slow, smooth panning movement
  const springConfig = { damping: 30, stiffness: 60, mass: 0.8 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Combine X and Y into a valid transform-origin string
  const transformOrigin = useMotionTemplate`${smoothX}% ${smoothY}%`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const relativeX = e.clientX - left;
    const relativeY = e.clientY - top;

    // Convert relative position to percentage and clamp to prevent panning out of bounds
    const clamp = (val, min, max) => Math.min(Math.max(val, min), max);
    const xPct = clamp((relativeX / width) * 100, 25, 75);
    const yPct = clamp((relativeY / height) * 100, 25, 75);

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
    // Smoothly return origin to center when leaving
    x.set(50);
    y.set(50);
  };

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden flex items-center justify-center ${isClicked ? 'cursor-zoom-out' : 'cursor-zoom-in'} ${className || ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsClicked(!isClicked)}
    >
      <motion.img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-contain"
        animate={{
          scale: isClicked ? zoomScale * 1.3 : (isHovered ? zoomScale : baseScale),
        }}
        style={{
          transformOrigin,
        }}
        transition={{
          scale: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
      />
    </div>
  );
}
