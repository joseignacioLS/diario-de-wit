export const sessions = [
  {
    arc: 1,
    session: 1,
    title: "Cartel de la partida",
    body: [{
      type: "img",
      src: [
        { src: "@/assets/imgs/la-maldicion-de-davy-jones/poster-256.webp", media: `(width <= 256px)` },
        { src: "@/assets/imgs/la-maldicion-de-davy-jones/poster-512.webp", media: `(width <= 512px)` },
        { src: "@/assets/imgs/la-maldicion-de-davy-jones/poster.webp", media: `(width > 512px)`, default: true },
      ],
      alt: "Poster del evento de Halloween 2026. Ilustración digital de una calavera sobre un montón de monedas",
      caption: undefined
    }]
  },
];