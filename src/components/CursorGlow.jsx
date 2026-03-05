import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      if (glowRef.current) {
        glowRef.current.style.background = `
          radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(168,85,247,0.25), transparent 60%),
          radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.25), transparent 60%)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
};

export default CursorGlow;