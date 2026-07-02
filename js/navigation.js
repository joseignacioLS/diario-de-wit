const baseUrl = "https://joseignaciols.github.io/diario-de-wit"
const isProduction = window.location.hostname === "joseignaciols.github.io";

const anchors = document.querySelectorAll("a");

Array.from(anchors).forEach(a => {
    a.href = isProduction ? `${baseUrl}${a.pathname}` : a.href
});
