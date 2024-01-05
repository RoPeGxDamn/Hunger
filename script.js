const headerBookBtn = document.querySelector(".main__btn-item:nth-child(1)");
const headerExploreBtn = document.querySelector(".main__btn-item:nth-child(2)");
const peopleSelect = document.querySelector(".people");
const sliderBtns = document.querySelectorAll(".specialties__slider-btn");
const galerieImgItems = document.querySelectorAll(".galerie__img-item");
const menuContainer = document.querySelector(".menu__grid");
const filterBtns = document.querySelectorAll(".menu__filter-item");

const ROOT = "assets/";
const IMG_EXTENSION = ".png";

const peopleOptions = ["1 person", "2 people", "4 people", "8 people"];

const galerieImageNames = [
  "Galerie-Image-1",
  "Galerie-Image-2",
  "Galerie-Image-3",
  "Galerie-Image-4",
];

const dishTypes = [
  "soupe",
  "pizza",
  "pasta",
  "desert",
  "wine",
  "bear",
  "drinks",
];

const menu = [
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[0],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[2],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[5],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[3],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[4],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[0],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[2],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[4],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[1],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[6],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[7],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[7],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[1],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[3],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[7],
  },
  {
    name: "PIZZA QUATRO STAGIONI . . . .",
    cost: "55,68 USD",
    description: "Integer ullamcorper neque eu purus euismod",
    type: dishTypes[2],
  },
];

function initEvents() {
  Array.from(filterBtns).map((item) => {
    item.addEventListener("click", (e) => {
      filterMenu(e);
    });
  });
}

function initSelectTag() {
  try {
    peopleOptions.map((item) => {
      const option = document.createElement("option");
      option.value = option.textContent = item;
      peopleSelect.append(option);
    });
  } catch (error) {
    console.log(error.message);
  }
}

function initGalerieImages() {
  try {
    galerieImageNames.forEach((item, index) => {
      galerieImgItems[index].style.cssText = `background-image: url(${
        ROOT + item + IMG_EXTENSION
      })`;
    });
  } catch (error) {
    console.log(error.message);
  }
}

function initMap() {
  try {
    let map = new google.maps.Map(document.querySelector(".address__map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  } catch (error) {
    console.log(error.message);
  }
}

function initMenu() {
  try {
    menu.map((item) => {
      const el = document.createElement("div");
      el.classList.add("menu__grid-item");
      const title = document.createElement("div");
      title.classList.add("grid-item__title");
      title.textContent = item.name;
      const cost = document.createElement("div");
      cost.classList.add("grid-item__cost");
      cost.textContent = item.cost;
      const description = document.createElement("div");
      description.classList.add("grid-item__description");
      description.textContent = item.description;
      el.append(title, cost, description);
      menuContainer.append(el);
    });
  } catch (error) {
    console.log(error.message);
  }
}

function filterMenu(e) {
  try {
    menuContainer.innerHTML = null;
    if(e.target.textContent == 'all') {
        initMenu()   
    }
    menu
      .filter((i) => i.type == e.target.textContent)
      .map((item) => {
        const el = document.createElement("div");
        el.classList.add("menu__grid-item");
        const title = document.createElement("div");
        title.classList.add("grid-item__title");
        title.textContent = item.name;
        const cost = document.createElement("div");
        cost.classList.add("grid-item__cost");
        cost.textContent = item.cost;
        const description = document.createElement("div");
        description.classList.add("grid-item__description");
        description.textContent = item.description;
        el.append(title, cost, description);
        menuContainer.append(el);
      });
  } catch (error) {
    console.log(error.message);
  }
}

initEvents();
initSelectTag();
initGalerieImages();
initMenu();

console.log(sliderBtns);
