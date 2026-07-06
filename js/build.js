import fs from "node:fs/promises";
import path from "node:path";
import { games } from "../assets/data/games.js";
import { generateGameDate } from "./render.js";

console.log("Add games to home");

fs.readFile("./index.html", "utf-8")
  .then(home => {
    const cleanPage = home.replace(
      /<ul id="games-list">[\s\S]*?<\/ul>/,
      `<ul id="games-list">
      ${games.map(game => {
        const gameDate = generateGameDate(game.startDate, game.endDate)
        return `
          <li>
          <a
          href="${game.url}"
          class="interactive-card"
          aria-disabled="${game.url === undefined}"
          >
          ${game.title} ${gameDate ? `(${gameDate})` : ""}</a>
        </li> `
      }).join("\n")}
      </ul>`
    )
    fs.writeFile("./index.html", cleanPage)
  })



const directory = "./games/";

console.log("Clear games directory");
for (const file of await fs.readdir(directory)) {
  console.log("> ", file);
  await fs.unlink(path.join(directory, file));
}

console.log("Create games");
fs.readFile("./assets/diaryTemplate.html", "utf-8")
  .then(pageTemplate => {

    games.forEach(game => {
      console.log("> ", game.tag);

      fs.writeFile(
        './games/' + game.tag + ".html",
        pageTemplate
          .replaceAll("item:title", game.title)
          .replaceAll("item:summary", game.summary)
          .replaceAll("item:description", game.summary)
          .replaceAll("item:path", game.url)
          .replaceAll("item:tag", game.tag)
        ,
        (err) => {
          if (err) {
            console.error(err);
          } else {
            console.log(game.title);
          }
        });
    });
  });