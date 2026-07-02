import { sortSessions } from "./utils.js";

export const createImage = (src, caption, alt) => {
    const figureElement = createElement("figure");

    const imgElement = createElement("img", {
        src: src,
        alt: alt,
        onerror: () => {
            imgElement.src = "../assets/imgs/loaderror.webp";
        }
    });
    figureElement.appendChild(imgElement);
    if (caption) {
        const captionElement = createElement("figcaption", {
            innerHTML: caption
        });
        figureElement.appendChild(captionElement);
    }
    return figureElement
}


export const createElement = (tag, attrs = {}) => {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
        if (key === "class") {
            element.classList.add(...value.split(" "));
        } else if (key === "style") {
            for (const [styleKey, styleValue] of Object.entries(value)) {
                element.style[styleKey] = styleValue;
            }
        } else {
            element[key] = value
        }
    }
    return element
}


export const renderMenu = (sessions) => {
    const ulElement = document.querySelector("#menu-list");
    if (!ulElement) return;

    sortSessions(sessions)
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
                textContent: `#${session.session} ${session.title}`
            });
            liElement.appendChild(aElement);
            arcUlElement.appendChild(liElement);
        });
}

export const renderDiaryEntries = (sessions) => {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    sortSessions(sessions)
        .filter(({ title }) => title !== undefined)
        .forEach(session => {
            const articleElement = createElement("article", { class: "session" });
            const titleElement = createElement("h3", {
                class: "title",
                textContent: `#${session.arc ? session.arc + "." : ""}${session.session} ${session.title}`,
                id: `arc-${session.arc ?? 1}-sesion-${session.session}`
            });
            articleElement.appendChild(titleElement);
            if (session.img) {
                const imgElement = createImage(
                    session.img.src,
                    session.img.caption,
                    `Fotografía del la ${session.session} página del diario del Truhan Errante`
                );
                articleElement.appendChild(imgElement);
            }
            if (session.text) {
                if (typeof session.text === "string") {
                    const textElement = createElement("p", {
                        textContent: session.text
                    });
                    articleElement.appendChild(textElement);
                } else if (Array.isArray(session.text)) {
                    session.text.forEach(text => {
                        const textElement = createElement("p", {
                            textContent: text
                        });
                        articleElement.appendChild(textElement);
                    });
                }
            }
            mainElement.appendChild(articleElement);
        });
}