import { sessions as ElDiarioDeWit } from "./sessions/el-diario-de-wit.js";
import { sessions as ElTruhanErrante } from "./sessions/el-truhan-errante.js";
import { sessions as Kuzo } from "./sessions/kuzo.js";
import { sessions as LaEscupidera } from "./sessions/la-escupidera.js";

export const games = [
    {
        title: "El Festival de las Bestias",
        tag: "festival-de-las-bestias",
        startDate: "2026",
        endDate: "Actualidad",
        order: 1,
        summary: "La pequeña ciudad de Elmore ha perdido su defensa contra las bestias. El grupo debe aventurarse en las cavernas para tratar de arreglar el sistema, ¡y cocinar deliciosas recetas!",
        tags: ["GM", "DaggerHeart"],
        sessions: []
    },
    {
        title: "El Truhan Errante",
        tag: "el-truhan-errante",
        startDate: "2025",
        endDate: "2026",
        order: 1,
        summary: "El Truhan Errante es el nombre del barco en el que Cornelio Tramontana, en el puerto de Marea Baja. El capitán Damián ha encomendado a Cornelio, junto a sus compañeros Rufus y Silvestre, que pongan a la tripulación del Truhan Errante de vuelta en altamar, consiguiendo una reparación... o quizás un nuevo barco.",
        tags: ["Jugador", "BRP"],
        sessions: ElTruhanErrante
    },
    {
        title: "Kuzo",
        tag: "kuzo",
        startDate: "2025",
        endDate: "2025",
        order: 2,
        summary: "Kuzo es un clérigo Kenku que junto a dos aventureros, trata de encontrar su destino en la senda de Mask.",
        tags: ["Jugador", "D&D"],
        sessions: Kuzo
    },
    {
        title: "La Escupidera",
        tag: "la-escupidera",
        startDate: "2020",
        endDate: "2024",
        order: 3,
        summary: "Este es el resumen desde mi punto de vista como <em>Game Master</em> de una partida de vaqueros. La protagonizan Alain, Vince y Will, tres vaqueros que trabajan en un rancho dirigido por Tomas. Entre sus quehaceres se encuentra cuidar de las reses, mantener el rancho y pelearse con sus acerrimos enemigos, Wyatt y sus muchachos, del otro rancho. Todo cambia cuando Tomas adquiere de propiedad de una mina abandonada hace años.",
        tags: ["GM", "Call of Cthulhu"],
        sessions: LaEscupidera
    },
    {
        title: "El Diario de Wit",
        tag: "el-diario-de-wit",
        startDate: "2010",
        endDate: "?",
        order: 4,
        summary: "Por desgracia el diario de Wit original se ha perdido en el tiempo. Tengo algunas cosas sueltas, pero no para recomponer la campaña que jugué en su momento.",
        tags: ["Jugador", "D&D"],
        sessions: ElDiarioDeWit
    }
];