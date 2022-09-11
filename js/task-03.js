const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const galleryListEl = document.querySelector("ul");
// console.log(galleryListEl);

// const elements = images.map((image) => {
//   const galleryItemEl = document.createElement("li");
//   galleryItemEl.classList.add("img-item");

//   const galleryImgEl = document.createElement("img");
//   galleryImgEl.src = image.url;
//   galleryImgEl.alt = image.alt;

//   galleryItemEl.appendChild(galleryImgEl);

//   return galleryItemEl;
// });

// galleryListEl.append(...elements);

const galleryListEl = document.querySelector(".gallery");
galleryListEl.setAttribute("style", "list-style: none");

const listNew = images.forEach(({ url, alt }) => {
  galleryListEl.insertAdjacentHTML(
    "beforeend",
    `<li ><img src ="${url}",alt ="${alt}" width = "300px"></li>`
  );
});