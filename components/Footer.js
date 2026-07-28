import { CONTATO } from "@/lib/data";
import WhatsIcon from "./WhatsIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{CONTATO.nome}</h3>
          <p className="footer-tag">
            Cuidar da sua beleza é
            <br />
            destacar a sua essência.
          </p>
        </div>

        <div>
          <div className="footer-label">Como chegar</div>
          {CONTATO.endereco.map((linha) => (
            <a
              key={linha}
              className="footer-link"
              href={CONTATO.mapa}
              target="_blank"
              rel="noreferrer"
            >
              {linha}
            </a>
          ))}
        </div>

        <div>
          <div className="footer-label">Fale comigo</div>

          <a
            className="footer-social"
            href={`https://wa.me/${CONTATO.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsIcon size={17} />
            WhatsApp
          </a>

          <a
            className="footer-social"
            href={CONTATO.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        © {new Date().getFullYear()} {CONTATO.nome}
      </div>
    </footer>
  );
}
