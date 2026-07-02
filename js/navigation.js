const origin = "https://joseignaciols.github.io"
const projectPathName = "/diario-de-wit"
const isProduction = window.location.hostname === "joseignaciols.github.io";

const anchors = document.querySelectorAll("a");

if (isProduction) {
    Array.from(anchors)
        .forEach(a => {
            a.href = `${origin}${projectPathName}${a.pathname?.replace(projectPathName, "") ?? ""}${a.hash ?? ""}`
        });
}
