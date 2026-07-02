import { createImage, createElement, renderMenu, renderDiaryEntries } from "../js/render.js";
import { sessions } from "./data.js";


const render = async () => {
    renderDiaryEntries(sessions);
    renderMenu(sessions);
};

render();
