import { useEffect, useRef, useState } from "react";
import "./Eyes.css";

export default function Eyes() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setCursor({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="eyes">
      <Eye cursor={cursor} />
      <Eye cursor={cursor} />
    </div>
  );
}

function Eye({ cursor }: { cursor: { x: number; y: number } }) {
  const eyeRef = useRef<HTMLDivElement | null>(null);

  let pupilX = 0;
  let pupilY = 0;

  if (eyeRef.current) {
    const rect = eyeRef.current.getBoundingClientRect();
    const dx = cursor.x - (rect.left + rect.width / 2);
    const dy = cursor.y - (rect.top + rect.height / 2);

    const angle = Math.atan2(dy, dx);
    const maxMove = 6;

    pupilX = Math.cos(angle) * maxMove;
    pupilY = Math.sin(angle) * maxMove;
  }

  return (
    <div className="eye" ref={eyeRef}>
      <div
        className="pupil"
        style={{
          transform: `translate(${pupilX}px, ${pupilY}px)`,
        }}
      />
    </div>
  );
}
