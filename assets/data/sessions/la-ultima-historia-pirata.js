export const sessions = [
  {
    arc: 1,
    session: 1,
    title: "Cartel de la partida",
    body: [{
      type: "img",
      src: [
        { src: "@/assets/imgs/la-ultima-historia-pirata/poster-256.webp", media: `(width <= 256px)` },
        { src: "@/assets/imgs/la-ultima-historia-pirata/poster-512.webp", media: `(width <= 512px)` },
        { src: "@/assets/imgs/la-ultima-historia-pirata/poster.webp", media: `(width > 512px)`, default: true },
      ],
      alt: "Poster del evento de Halloween 2026. Ilustración digital de una calavera sobre un montón de monedas",
      caption: undefined
    }]
  }, {
    arc: 1,
    session: 2,
    title: "Algunos Assets",
    body: [
      {
        type: "img",
        src: [
          { src: "@/assets/imgs/la-ultima-historia-pirata/skull-256.webp", media: `(width <= 256px)` },
          { src: "@/assets/imgs/la-ultima-historia-pirata/skull-512.webp", media: `(width <= 512px)` },
          { src: "@/assets/imgs/la-ultima-historia-pirata/skull.webp", media: `(width > 512px)`, default: true },
        ],
        alt: "Poster del evento de Halloween 2026. Ilustración digital de una calavera sobre un montón de monedas",
        caption: undefined
      }, {
        type: "img",
        src: [
          { src: "@/assets/imgs/la-ultima-historia-pirata/mermaid-256.webp", media: `(width <= 256px)` },
          { src: "@/assets/imgs/la-ultima-historia-pirata/mermaid-512.webp", media: `(width <= 512px)` },
          { src: "@/assets/imgs/la-ultima-historia-pirata/mermaid.webp", media: `(width > 512px)`, default: true },
        ],
        alt: "Poster del evento de Halloween 2026. Ilustración digital de una calavera sobre un montón de monedas",
        caption: undefined
      }
    ]
  },
  {
    arc: 2,
    session: 1,
    title: "Sesión de Halloween",
    body: [
      {
        type: "p",
        text: "Esta sesión trató sobre un pequeño grupo de piratas, atrapados en la bodega de su propio barco mientras esperan que 'algo', un horror que recorre los puentes superiores del barco pero que no recuerdan, les alcance."
      },
      {
        type: "p",
        text: "El carpintero del barco da un paso al frente y comienza a contar historias del pasado. No para darles esperanza de salvación, sino para recordarles que esto es lo que merecen."
      },
      {
        type: "p",
        text: "La primera historia les lleva al pasado, a recordar su asalto a un barco mercante cuya tripulación ha contraído algún tipo de enfermedad. Aún así los piratas deciden asaltar el barco, la riqueza que pueden conseguir merece la pena. Al volver al presente observan las secuelas de ese aborarje. Una pierna inservible y uno de ellos casi consumido por la enfermedad."
      },
      {
        type: "p",
        text: "La segunda historia trata de como son ordenados acabar con la hija huérfana de un pirata para reclamar su fortuna. Por desgracia esta niña no es lo que parece. Se ven encerrados con ella en su guarida, donde les da caza y les obliga a jugar a un terrible juego por sus vidas."
      },
      {
        type: "p",
        text: "(Mención especial al miembro cojo de la tripulación que se quedó atrás vigilando aquella piedra gigante que bloqueó de forma inesperada al entrada a la guarida)"
      },
      {
        type: "p",
        text: "Finalmente el horror llega a la bodega del barco. Los piratas tratan de escapar de allí. Dos de ellos enfrentan a la criatura. Otros dos consiguen llegar al bote y escapar dejando a uno detrás, flotando en el mar."
      },
    ]
  },
];