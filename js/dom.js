
export const createImage = (src, caption, alt) => {
  const wrapperElement = createElement("div",
    { class: "image-wrapper" }
  );
  const pictureElement = createElement("picture");

  wrapperElement.appendChild(pictureElement);

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

  // ZOOM

  const zoomElement = createElement("div", {
    style: {
      backgroundImage: `url("${src.find(i => i.default).src}")`
    },
    class: "zoom-in",
    ariaHidden: "true"
  });

  wrapperElement.addEventListener("mousemove", (e) => {
    const x = e.clientX - (e.target.getBoundingClientRect()?.x ?? 0);
    const y = e.clientY - (e.target.getBoundingClientRect()?.y ?? 0);

    const w = Math.round(100 * x / e.target.offsetWidth);
    const h = Math.round(100 * y / e.target.offsetHeight);

    zoomElement.style.top = `${h}%`;
    zoomElement.style.left = `${w}%`;

    zoomElement.style.backgroundPosition = `${w + (w - 50) / 50 * 6}% ${h + (h - 50) / 50 * 6}%`;
  });

  wrapperElement.appendChild(zoomElement);
  return wrapperElement;
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
    }
    else {
      element[key] = value;
    }
  }
  return element;
};