import { CONTATO } from "@/lib/data";

export default function Sobre() {
  return (
    <section className="section section-alt" id="sobre">
      <div className="container about">
        <div className="about-photo">
          <img src="/IMG_7513.jpeg" alt="" />
        </div>

        <div className="about-text">
          <div className="eyebrow left">Prazer, {CONTATO.nome.split(" ")[0]}</div>

          <p>
            Acredito que a estética não é sobre mudar quem você é, mas sobre
            valorizar a beleza que já existe em você.
          </p>

          <p>
            Por isso, cada atendimento é realizado de forma personalizada, com
            atenção, cuidado e respeito às suas necessidades. Gosto de entender
            suas expectativas e oferecer um atendimento acolhedor, onde você se
            sinta confortável e segura.
          </p>

          <p>
            Meu objetivo vai além dos procedimentos: quero que você tenha um
            momento para cuidar de si, elevar sua autoestima e se sentir ainda
            mais confiante ao se olhar no espelho.
          </p>

          <p>Seja bem-vinda. Será um prazer cuidar de você.</p>

          <div className="sparkles">✦ ✦ ✦</div>
        </div>
      </div>
    </section>
  );
}