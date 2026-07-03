import { createElement } from "./js/render.js";
import { games } from "./assets/data/games.js";



const render = () => {
    const gamesListElement = document.querySelector('#games-list');
    if (!gamesListElement) return;
    games.forEach(game => {
        const listItem = createElement('li');
        const linkItem = createElement('a', {
            href: game.url ?? "",
            textContent: game.title,
            ariaDisabled: game.url === undefined
        });
        listItem.appendChild(linkItem);
        gamesListElement.appendChild(listItem);
    });
}

render();