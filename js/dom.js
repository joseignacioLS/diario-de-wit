
export const createImage = (src, caption, alt) => {
  const figureElement = createElement("figure");

  const imgElement = createElement("img", {
    src: src,
    alt: alt,
    onerror: () => {
      imgElement.src = "../assets/imgs/loaderror.webp";
    }
  });
  figureElement.appendChild(imgElement);
  if (caption) {
    const captionElement = createElement("figcaption", {
      innerHTML: caption
    });
    figureElement.appendChild(captionElement);
  }
  return figureElement;
};


export const createElement = (tag, attrs = {}) => {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") {
      element.classList.add(...value.split(" "));
    } else if (key === "style") {
      for (const [styleKey, styleValue] of Object.entries(value)) {
        element.style[styleKey] = styleValue;
      }
    } else {
      element[key] = value;
    }
  }
  return element;
};