export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="eyebrow">Estética &amp; Cosmética · Santos</div>

        <h1>
          Cuidar da sua beleza
          <br />é destacar a sua essência.
        </h1>

        <div className="sparkles">✦ ✦ ✦</div>

        <p>
          Procedimentos delicados que realçam o que você já tem de mais bonito,
          sem mudar quem você é. Sinta-se bem na própria pele.
        </p>

        <div className="hero-actions">
          <a href="#agendamento" className="btn btn-primary">
            Agendar horário
          </a>
          <a href="#procedimentos" className="btn btn-ghost">
            Ver procedimentos
          </a>
        </div>
      </div>
    </section>
  );
}
