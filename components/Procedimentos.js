"use client";

import { useState } from "react";
import { CATEGORIAS } from "@/lib/data";

export default function Procedimentos() {
  const [ativa, setAtiva] = useState(CATEGORIAS[0].id);
  const categoria = CATEGORIAS.find((c) => c.id === ativa);

  return (
    <section className="section" id="procedimentos">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Escolha o seu cuidado</div>
          <h2>Procedimentos</h2>
          <div className="rule" />
          <p>
            Cada indicação nasce de uma conversa sobre a sua rotina, seus hábitos
            e objetivos.
          </p>
        </div>

        <div className="tabs">
          {CATEGORIAS.map((c) => (
            <button
              key={c.id}
              className={`tab ${ativa === c.id ? "active" : ""}`}
              onClick={() => setAtiva(c.id)}
            >
              {c.nome}
            </button>
          ))}
        </div>

        <div className="cards">
          {categoria.procedimentos.map((p) => (
            <article className="card" key={p.nome}>
              <div className="card-top">
                <h3>{p.nome}</h3>
                <span className="price">{p.preco}</span>
              </div>
              <p>{p.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
