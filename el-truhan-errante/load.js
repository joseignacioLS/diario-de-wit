import { createImage, createElement, renderMenu, renderDiaryEntries, } from "../js/render.js";
import { sortSessions } from "../js/utils.js";
import { sessions } from "./data.js";


const render = async () => {
    const sortedSessions = sortSessions(sessions);
    renderDiaryEntries(sortedSessions, "el-truhan-errante");
    renderMenu(sortedSessions);
};

render();
