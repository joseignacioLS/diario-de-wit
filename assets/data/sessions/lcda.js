const imgFolder = "@/assets/imgs/lcda/";

export const sessions = [
    {
        arc: 2,
        session: 59,
        title: "El Laboratorio de Joana",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}LaboratorioJoana-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}LaboratorioJoana-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}LaboratorioJoana.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate del Laboratorio de Joana",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 58,
        title: "El cementerio de Lesterni",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}CementerioLesterni-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}CementerioLesterni-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}CementerioLesterni.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate en el cementerio de Lesterni",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 53,
        title: "El Lago bajo Lesterni",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}LagoBajoLesterni-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}LagoBajoLesterni-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}LagoBajoLesterni.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate en el lago bajo Lesterni",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 50,
        title: "El Pueblo de Arashi",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}Arashi-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}Arashi-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}Arashi.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate en Arashi",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 49,
        title: "El Pantano de Arashi",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}PantanoArashi-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}PantanoArashi-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}PantanoArashi.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate del pantano de Arashi",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 47,
        title: "La Venganza de Paulonemio",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}GuaridaPaulonemio-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}GuaridaPaulonemio-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}GuaridaPaulonemio.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate de la guarida de Paulnemio",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 44,
        title: "La Cripta de Noos",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}CriptaNoos-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}CriptaNoos-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}CriptaNoos.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate de la cripta bajo la ciudad de Noos",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 42,
        title: "Las Alcantarillas de Noos",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}AlcantarillasNoos-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}AlcantarillasNoos-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}AlcantarillasNoos.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate de las alcantarillas de Noos",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 38,
        title: "La Guarida del Dragón",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}GuaridaDragonBlanco-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}GuaridaDragonBlanco-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}GuaridaDragonBlanco.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate de la guarida del dragón blanco",
            caption: undefined
        }]
    },
    {
        arc: 2,
        session: 36,
        title: "El Ataque del Dragón a Kindral",
        body: [{
            type: "img",
            src: [
                { src: `${imgFolder}AtaqueDelDragon-256.webp`, media: `(width <= 256px)` },
                { src: `${imgFolder}AtaqueDelDragon-512.webp`, media: `(width <= 512px)` },
                { src: `${imgFolder}AtaqueDelDragon.webp`, media: `(width > 512px)`, default: true }
            ],
            alt: "Dibujo del mapa de combate de Kindral",
            caption: undefined
        }]
    },
];