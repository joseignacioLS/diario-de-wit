import fs from "node:fs/promises";
import path from "node:path";
import { games } from "../assets/data/games.js";


const directory = "./games/";

console.log("Clear directory");
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