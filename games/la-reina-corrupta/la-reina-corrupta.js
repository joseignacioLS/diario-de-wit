import { generateImgSources } from "../../js/utils.js";

const imgFolder = "@/assets/imgs/la-reina-corrupta/";

export const sessions = [
    {
        arc: 1,
        session: 0,
        title: "El Mapa de Valleverde",
        body: [{
            type: "img",
            src: generateImgSources("mapa", [512, 1024], imgFolder),
            alt: "Fotografía del mapa de Valleverde",
            caption: undefined
        }]
    },
];