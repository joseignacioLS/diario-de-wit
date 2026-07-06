import fs from "node:fs/promises";
import path from "node:path";
import { games } from "../assets/data/games.js";
import { generateGameDate } from "./render.js";

const directory = "./games";

async function main() {
  console.log("Add games to home");

  const home = await fs.readFile("./index.html", "utf-8");
  const cleanPage = home.replace(
    /<ul id="games-list">[\s\S]*?<\/ul>/,
    `<ul id="games-list">
      ${games
        .map((game) => {
          const gameDate = generateGameDate(game.startDate, game.endDate);
          return `
          <li>
            <a
              href="${game.url}"
              class="interactive-card"
              aria-disabled="${game.url === undefined}"
            >
              ${game.title} ${gameDate ? `(${gameDate})` : ""}
            </a>
          </li>`;
        })
        .join("\n")}
    </ul>`
  );

  await fs.writeFile("./index.html", cleanPage);

  console.log("Clear games directory");
  await fs.rm(directory, { recursive: true, force: true });
  await fs.mkdir(directory, { recursive: true });

  console.log("Create games");
  const pageTemplate = await fs.readFile("./assets/diaryTemplate.html", "utf-8");

  for (const game of games) {
    const gameDir = path.join(directory, game.tag);
    console.log("> ", game.tag);
    await fs.mkdir(gameDir, { recursive: true });

    const gamePage = pageTemplate
      .replaceAll("item:title", game.title)
      .replaceAll("item:summary", game.summary)
      .replaceAll("item:description", game.summary)
      .replaceAll("item:path", game.url)
      .replaceAll("item:tag", game.tag);

    await fs.writeFile(path.join(gameDir, "index.html"), gamePage);
    console.log(game.title);
  }
}

await main();