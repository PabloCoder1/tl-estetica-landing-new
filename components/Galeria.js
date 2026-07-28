"use client";

import { useRef } from "react";
import { GALERIA } from "@/lib/data";

export default function Galeria() {
  const trackRef = useRef(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (e) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture?.(e.pointerId);
    el.style.cursor = "grabbing";
  };

  const onPointerMove = (e) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - dx;
  };

  const endDrag = (e) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current.active = false;
    el.style.cursor = "grab";
    el.releasePointerCapture?.(e.pointerId);
  };

  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="section" id="galeria">
      <div className="container section-head">
        <div className="eyebrow">Galeria</div>
        <h2>A beleza nos detalhes</h2>
        <div className="rule" />
      </div>

      <div
        className="gallery"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onClickCapture={onClickCapture}
      >
        {GALERIA.map((src, i) => (
          <div className="gallery-item" key={i}>
            {src ? (
              <img src={src} alt={`Resultado ${i + 1}`} draggable={false} />
            ) : (
              `Foto ${i + 1}`
            )}
          </div>
        ))}
      </div>

      <p className="gallery-hint">⟵ deslize para ver mais ⟶</p>
    </section>
  );
}