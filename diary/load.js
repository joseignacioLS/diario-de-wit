import { createImage, createElement, renderMenu, renderDiaryEntries, renderDiaryInfo } from "../js/render.js";
import { sortSessions } from "../js/utils.js"
import { diaries } from "./data.js";

const render = async () => {
    const url = new URL(window.location.href);
    const diary = new URLSearchParams(url.search).get("diary");
    const sessions = sortSessions(diaries[diary].sessions);
    renderDiaryInfo(diaries[diary].title, diaries[diary].summary);
    renderMenu(sessions);
    renderDiaryEntries(diary, sessions);
};

render();
