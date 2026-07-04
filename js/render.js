import { sortSessions } from "./utils.js";
import { createElement, createImage } from "./dom.js";


const generateGameDate = (startDate, endDate) => {
    if (!startDate || !endDate) return "?";
    if (startDate === endDate) return startDate;
    return `${startDate} - ${endDate}`;
};

export const renderGameList = (games) => {
    const gamesListElement = document.querySelector('#games-list');
    if (!gamesListElement) return;
    games
        .sort((a, b) => {
            return a.order - b.order;
        })
        .forEach(game => {
            const listItem = createElement('li');
            const gameDate = generateGameDate(game.startDate, game.endDate);
            const linkItem = createElement('a', {
                href: game.url ?? "", class: "interactive-card",
                textContent: `${game.title} ${gameDate ? `(${gameDate})` : ""}`,
                ariaDisabled: game.url === undefined
            });
            listItem.appendChild(linkItem);
            gamesListElement.appendChild(listItem);
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
                entry.src,
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


export const addSortListener = (diary) => {
    document.querySelector("#sort")?.addEventListener("click", (e) => {
        if (e.currentTarget.dataset.sort === "desc") {
            e.currentTarget.dataset.sort = "asc";
            e.target.src = "../assets/icons/sort-descending.svg";
            renderDiary(diary, true);
        } else {
            e.currentTarget.dataset.sort = "desc";
            e.target.src = "../assets/icons/sort-ascending.svg";
            renderDiary(diary, false);
        }
    });
};