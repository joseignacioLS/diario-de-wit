import { sortSessions } from "./utils.js";
import { createElement, createImage } from "./dom.js";

export const renderGameList = () => {
    const gamesListElement = document.querySelector('#games-list');
    if (!gamesListElement) return;
    import("../assets/data/games.js").then(({ games }) => {
        games.forEach(game => {
            const listItem = createElement('li');
            const linkItem = createElement('a', {
                href: game.url ?? "", class: "interactive-card",
                textContent: game.title,
                ariaDisabled: game.url === undefined
            });
            listItem.appendChild(linkItem);
            gamesListElement.appendChild(listItem);
        });
    });
};


const renderDiaryMenu = (sessions) => {
    const ulElement = document.querySelector("#menu-list");
    if (!ulElement) return;

    sessions
        .forEach(session => {
            if (!session.title) {
                return;
            }
            const arc = session.arc ?? 1;
            let arcUlElement = document.querySelector(`#menu-arc-${arc}`);
            if (!arcUlElement) {
                arcUlElement = createElement("ul", { id: `menu-arc-${arc}` });
                ulElement.appendChild(createElement("p", { textContent: `Arco ${arc}` }));
                ulElement.appendChild(arcUlElement);
            }
            const liElement = createElement("li");
            const aElement = createElement("a", {
                href: `#arc-${session.arc ?? 1}-sesion-${session.session}`,
                textContent: `#${session.session} ${session.title}`,
                class: "interactive-card"
            });
            liElement.appendChild(aElement);
            arcUlElement.appendChild(liElement);
        });
};

const generateSessionArticle = (session, diary) => {
    const articleElement = createElement("article", { class: "session" });
    const titleElement = createElement("h4", {
        class: "title",
        textContent: `#${session.arc ? session.arc + "." : ""}${session.session} ${session.title}`,
        id: `arc-${session.arc ?? 1}-sesion-${session.session}`
    });
    articleElement.appendChild(titleElement);

    session.body.forEach((entry) => {
        if (entry.type === "img") {
            const imgElement = createImage(
                `../assets/imgs/${diary}${entry.src}`,
                entry.caption,
                entry.alt
            );
            articleElement.appendChild(imgElement);
        }
        else if (entry.type === "p") {
            const textElement = createElement("p", {
                textContent: entry.text
            });
            articleElement.appendChild(textElement);
        }
    });
    return articleElement;
};

const renderDiaryEntries = (sessions, diary) => {
    const sessionsElement = document.querySelector("#sessions");
    if (!sessionsElement) return;
    let currentArc = 0;

    const checkArc = (sessionArc) => {
        if (sessionArc > currentArc) {
            currentArc = sessionArc;
            const arcElement = createElement("h3", {
                textContent: `Arco ${currentArc}`
            });
            sessionsElement.appendChild(arcElement);
        }
    };

    sessions
        .filter(({ title }) => title !== undefined)
        .forEach(session => {
            checkArc(session.arc ?? 1);
            sessionsElement.appendChild(generateSessionArticle(session, diary));
        });
};

const resetRender = () => {
    const menuListElement = document.querySelector("#menu-list");
    const sessionsElement = document.querySelector("#sessions");
    if (menuListElement) {
        menuListElement.innerHTML = "";
    }
    if (sessionsElement) {
        sessionsElement.innerHTML = "";
    }
};


export const renderDiary = async (name, asc = false) => {
    resetRender();
    const sessions = await import("../" + name + "/data.js").then(m => m.sessions);
    if (!sessions) return;
    const sortedSessions = sortSessions(sessions, asc);
    renderDiaryEntries(sortedSessions, name);
    renderDiaryMenu(sortedSessions);
};
