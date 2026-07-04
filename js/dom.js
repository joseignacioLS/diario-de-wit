
export const createImage = (src, caption, alt) => {
  const pictureElement = createElement("picture");

  src.forEach(({ src, media }) => {
    const sourceElement = createElement("source", {
      media,
      srcset: src,
    });
    pictureElement.appendChild(sourceElement);
  });


  const imgElement = createElement("img", {
    src: src.find(i => i.default).src,
    alt: alt,
    onerror: () => {
      imgElement.src = "../assets/imgs/loaderror.webp";
    }
  });
  pictureElement.appendChild(imgElement);
  if (caption) {
    const captionElement = createElement("figcaption", {
      innerHTML: caption
    });
    pictureElement.appendChild(captionElement);
  }
  return pictureElement;
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