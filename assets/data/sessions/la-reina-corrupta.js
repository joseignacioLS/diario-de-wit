export const sessions = [
    {
        arc: 1,
        session: 0,
        title: "El Mapa de Valleverde",
        body: [{
            type: "img",
            src: [
                { src: "@/assets/imgs/la-reina-corrupta/mapa-512.webp", media: `(width <= 512px)` },
                { src: "@/assets/imgs/la-reina-corrupta/mapa-1024.webp", media: `(width <= 1024px)` },
                { src: "@/assets/imgs/la-reina-corrupta/mapa.webp", media: `(width > 1024px)`, default: true },
            ],
            alt: "Fotografía del mapa de Valleverde",
            caption: undefined
        }]
    },
];