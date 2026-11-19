import fs from "node:fs/promises";
import path from "node:path";
import { games } from "../games/games.js";

const directory = "./games";

async function main() {

  // console.log("Clear games directory");
  // await fs.rm(directory, { recursive: true, force: true });
  // await fs.mkdir(directory, { recursive: true });

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
      .replaceAll("item:path", `/games/${game.tag}`)
      .replaceAll("item:tag", game.tag);

    await fs.writeFile(path.join(gameDir, "index.html"), gamePage);
    console.log(game.title);
  }
}

await main();