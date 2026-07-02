import { createElement } from "./js/render.js";

const baseUrl = "https://joseignaciols.github.io/diario-de-wit"
const isProduction = window.location.hostname === "joseignaciols.github.io";
const games = [
    {
        title: "El Truhan Errante",
        url: "/el-truhan-errante/"
    }
]
const gamesListElement = document.querySelector('#games-list');

games.forEach(game => {
    const listItem = createElement('li');
    const linkItem = createElement('a', {
        href: isProduction ? baseUrl + game.url : game.url,
        textContent: game.title
    });
    listItem.appendChild(linkItem);
    gamesListElement?.appendChild(listItem);
});