import { generateImgSources } from "../../js/utils.js";

const imgFolder = "@/assets/imgs/kuzo/";

export const sessions = [
    {
        arc: 1,
        session: 0,
        title: "Trasfondo",
        body: [

            {
                type: "img",
                src: generateImgSources("trasfondo", [256, 512], imgFolder),
                alt: "Fotografía del trasfondo de Kuzo",
                caption: undefined
            }
        ]
    },
    {
        arc: 1,
        session: 1,
        title: "Un nuevo grupo",
        body: [
            {
                type: "img",
                src: generateImgSources("Sesion01-1", [256, 512], imgFolder),
                alt: "Fotografía de la primera página del diario de Kuzo",
                caption: undefined
            },
            {
                type: "img",
                src: generateImgSources("Sesion01-2", [256, 512], imgFolder),
                alt: "Fotografía de la segunda página del diario de Kuzo",
                caption: undefined
            }]
    },
    {
        arc: 1,
        session: 2,
        title: "Adentrándose en lo desconocido",
        body: [
            {
                type: "img",
                src: generateImgSources("Sesion02", [256, 512], imgFolder),
                alt: "Fotografía de la tercera página del diario de Kuzo",
                caption: undefined
            }
        ]
    },
    {
        arc: 1,
        session: 3,
        title: "Adiós",
        body: [
            {
                type: "img",
                src: generateImgSources("Sesion03", [256, 512], imgFolder),
                alt: "Fotografía de la despedida de Kuzo. Su cuerpo yace al lado de una hoguera y hay unas palabras de despedida en las que se lamenta de su soledad.",
                caption: undefined
            },
            { type: "p", text: "Por desgracia Kuzo no tiene un final feliz. La última pelea fue letal. Dio su vida por proteger a dos personas a las que dos días antes llamaba extraños ante un ser despiadado que carbonizó sus restos." }
        ]
    },
];