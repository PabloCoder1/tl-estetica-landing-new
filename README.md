# Site Estética — Next.js

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## O que editar

Praticamente tudo fica em **`lib/data.js`**:

| O quê | Onde |
|---|---|
| Número do WhatsApp | `CONTATO.whatsapp` — formato `5513999999999` (só dígitos) |
| Instagram | `CONTATO.instagram` |
| Endereço | `CONTATO.endereco` |
| Procedimentos e preços | `CATEGORIAS` |
| Faixa verde animada | `MARQUEE` |
| Fotos da galeria | `GALERIA` |

## Fotos

1. Coloque as imagens em `public/galeria/`
2. Em `lib/data.js` troque:

```js
export const GALERIA = [
  "/galeria/foto1.jpg",
  "/galeria/foto2.jpg",
  // ...
];
```

Para a foto do "Prazer, Juliana": coloque `public/juliana.jpg` e descomente a linha
`<img src="/juliana.jpg" alt="" />` em `components/Sobre.js`.

## Cores

Todas em `app/globals.css`, no bloco `:root`:

- Verde `#1F3D30`
- Creme `#F7F3EA`
- Dourado `#C9A227`

## Publicar

Sobe direto na Vercel: crie um repositório no GitHub, importe na
[vercel.com](https://vercel.com) e pronto. Sem configuração extra.
