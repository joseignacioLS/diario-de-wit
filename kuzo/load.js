import { createImage, createElement, renderMenu, renderDiaryEntries } from "../js/render.js";
import { sessions } from "./data.js";


const render = async () => {
    const sortedSessions = sortSessions(sessions);
    renderDiaryEntries(sessions, "kuzo");
    renderMenu(sessions);
};

render();
