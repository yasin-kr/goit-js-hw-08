"use strict";
const images = [
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg>",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg>",
    description: "Aerial Beach View",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg>",
    description: "Flower Blooms",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg>",
    description: "Alpine Mountains",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg>",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg>",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg>",
    description: "Nature Landscape",
  },
  {
    preview:
      "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg>",
    original:
      "<https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg>",
    description: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelector(".gallery");
let markup = "";

for (const { preview, original, description } of images) {
  const newPreview = preview.slice(1, -1);
  const newOriginal = original.slice(1, -1);

  markup += `<li class="gallery-item">
  <a class="gallery-link" href="${newOriginal}">
    <img
      class="gallery-image"
      src="${newPreview}"
      data-source="${newOriginal}"
      alt="${description}"
      width = "360"
      height = "200"
    />
  </a>
</li>
`;
}

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  const clickedEl = e.target;
  if (!clickedEl.classList.contains("gallery-image")) return;

  const largeImg = clickedEl.dataset.source;
  const description = clickedEl.alt;
  const instance = basicLightbox.create(`
        <img src = "${largeImg}" alt = "${description}" style="max-width: 90vw; max-height: 90vh;"/>
        `);

  instance.show();

  function handleEsc(e) {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleEsc);
    }
  }
  document.addEventListener("keydown", handleEsc);
}
