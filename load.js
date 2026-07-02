import { createElement } from "./js/render.js";

const games = [
    {
        title: "El Truhan Errante",
        url: "/el-truhan-errante/"
    },
    {
        title: "El Diario de Wit",
        url: undefined
    }
]

const render = () => {
    const gamesListElement = document.querySelector('#games-list');
    if (!gamesListElement) return;
    games.forEach(game => {
        const listItem = createElement('li');
        const linkItem = createElement('a', {
            href: game.url ?? "",
            textContent: game.title,
            ariaLabel: game.url === undefined ? "Enlace deshabilitado" : ""
        });
        listItem.appendChild(linkItem);
        gamesListElement.appendChild(listItem);
    });
}

render();