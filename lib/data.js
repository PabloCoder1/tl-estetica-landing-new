export const CONTATO = {
  nome: "Thuany Lima",
  whatsapp: "55 13 974030332", // troque pelo número real (DDI+DDD+número, só dígitos)
  instagram: "https://instagram.com/seuperfil",
  endereco: [
    "Av. Senador Pinheiro Machado, 92",
    "Vila Matias",
    "Santos - SP · CEP 11075-140",
  ],
  mapa:
    "https://www.google.com/maps/search/?api=1&query=Av.+Senador+Pinheiro+Machado,+92+-+Vila+Matias,+Santos+-+SP,+11075-140",
};

export const CATEGORIAS = [
  {
    id: "facial",
    nome: "Estética Facial",
    procedimentos: [
      {
        nome: "Limpeza de Pele",
        preco: "R$ 120",
        descricao:
          "Remoção de cravos e impurezas, controle da oleosidade e hidratação da pele. Ideal para manter a pele saudável, limpa e preparada para outros tratamentos.",
      },
      {
        nome: "Limpeza de Pele + Microagulhamento Facial",
        preco: "R$ 300",
        descricao:
          "Combinação que promove limpeza profunda dos poros e estímulo de colágeno. Auxilia na melhora da textura da pele, poros dilatados, marcas de acne e luminosidade.",
      },
      {
        nome: "Microagulhamento Facial · Pacote 3 Sessões",
        preco: "R$ 500",
        descricao:
          "Protocolo completo para resultados progressivos e duradouros. Indicado para quem busca melhora significativa da textura da pele, cicatrizes de acne e estímulo de colágeno.",
      },
      {
        nome: "Hydra Gloss Lips",
        preco: "R$ 120",
        descricao:
          "Tratamento de hidratação profunda para os lábios, promovendo maciez, viço e aspecto saudável. Ideal para lábios ressecados e sem brilho.",
      },
    ],
  },
  {
    id: "corporal",
    nome: "Estética Corporal",
    procedimentos: [
      {
        nome: "Tratamento de Estrias",
        preco: "A partir de R$ 150",
        descricao:
          "Recupere sua autoestima e conquiste uma pele com aparência mais uniforme. O protocolo estimula a regeneração natural da pele, promovendo melhora progressiva da textura, profundidade e aspecto das estrias. Cada tratamento é personalizado para as necessidades de cada cliente.",
      },
      {
        nome: "Tratamento de Estrias · Pacote 3 Sessões",
        preco: "R$ 750",
        descricao:
          "Para resultados ainda mais expressivos, o protocolo completo de 3 sessões permite um acompanhamento contínuo da regeneração da pele. Ideal para quem deseja uma melhora gradual e consistente na aparência das estrias, com evolução acompanhada em cada etapa.",
      },
    ],
  },
];

export const MARQUEE = [
  "Limpeza de Pele",
  "Microagulhamento",
  "Hydra Gloss Lips",
  "Tratamento de Estrias",
  "Estética Facial",
  "Estética Corporal",
];

// Troque os valores por caminhos reais em /public (ex.: "/galeria/foto1.jpg")
export const GALERIA = ["/8f744824-171a-4c6e-b7b7-17fb52730721.jpeg", "/IMG_0283.jpeg", "/IMG_5991.jpeg", "/IMG_6784.jpeg", "/IMG_6799.jpeg", "/IMG_7086.jpeg", "/IMG_7087.jpeg", "/IMG_7113.jpeg", "/IMG_7118.jpeg", "/IMG_7378.jpeg", "/IMG_7385.jpeg", "/IMG_8010.jpeg", "/IMG_2686_Original.jpeg"];