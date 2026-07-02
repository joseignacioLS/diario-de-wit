import { createImage, createElement } from "../js/render.js";
import { sessions } from "./data.js";

const renderMenu = () => {
    const ulElement = document.querySelector("#menu-list");
    if (!ulElement) return;

    sessions
        .sort((a, b) => b.number - a.number)
        .forEach(session => {
            if (!session.title) {
                return;
            }
            const liElement = createElement("li");
            const aElement = createElement("a", {
                href: `#sesion-${session.number}`,
                textContent: `#${session.number} ${session.title}`
            });
            liElement.appendChild(aElement);
            ulElement.appendChild(liElement);
        });
}

const renderDiaryEntries = () => {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;
    sessions
        .filter(({ title }) => title !== undefined)
        .sort((a, b) => b.number - a.number)
        .forEach(session => {
            const articleElement = createElement("article", { class: "session" });
            const titleElement = createElement("h3", {
                class: "title",
                textContent: `#${session.number} ${session.title}`,
                id: `sesion-${session.number}`
            });
            articleElement.appendChild(titleElement);
            if (session.img) {
                const imgElement = createImage(
                    session.img.src,
                    session.img.caption,
                    `Fotografía del la ${session.number} página del diario del Truhan Errante`
                );
                articleElement.appendChild(imgElement);
            }
            mainElement.appendChild(articleElement);
        });
}

const render = async () => {
    renderDiaryEntries();
    renderMenu();
};

render();
