"use client";

import { useState } from "react";
import { CATEGORIAS, CONTATO } from "@/lib/data";
import WhatsIcon from "./WhatsIcon";

export default function Agendamento() {
  const [nome, setNome] = useState("");
  const [procedimento, setProcedimento] = useState("");

  function agendar() {
    const texto =
      `Olá! Me chamo ${nome || "(sem nome)"} e gostaria de agendar um horário.` +
      (procedimento ? ` Procedimento: ${procedimento}.` : "");

    window.open(
      `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );
  }

  return (
    <section className="section" id="agendamento">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">Agendamento</div>
          <h2>Reserve o seu momento de cuidado</h2>
          <div className="rule" />
        </div>

        <div className="form-card">
          <div className="field">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite aqui o seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="proc">Procedimento</label>
            <select
              id="proc"
              value={procedimento}
              onChange={(e) => setProcedimento(e.target.value)}
            >
              <option value="">Escolha o seu procedimento</option>
              {CATEGORIAS.map((c) => (
                <optgroup key={c.id} label={c.nome}>
                  {c.procedimentos.map((p) => (
                    <option key={p.nome} value={p.nome}>
                      {p.nome} — {p.preco}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <button className="btn btn-whats" onClick={agendar}>
            <WhatsIcon />
            Agendar pelo WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
