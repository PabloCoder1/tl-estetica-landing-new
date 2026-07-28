import { MARQUEE } from "@/lib/data";

export default function Marquee() {
  const lista = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {lista.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
