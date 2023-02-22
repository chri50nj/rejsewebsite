const url = "https://rejseguide-349f.restdb.io/rest/destinationer"

const options = {
  headers: {
    "x-apikey": "63f49cb7478852088da68515",
  },
};

async function hentData(){

  const resspons = await fetch(url, options);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  json.forEach((rejse) => {
    const klon = template.cloneNode(true);
    klon.querySelector("liste_billede").src = "img/" + rejse.billede;
    klon.querySelector("des_tekst").textContent = rejse.destination;
    main.appendChild(klon);
  });
}

hentData();

















// const urlParams = new URLSearchParams(window.location.search);
// console.log("urlParams", urlParams);

// const cat = urlParams.get("cat");
// console.log("cat", cat);
// const link = `https://rejseguide-349f.restdb.io/rest/destinationer?q={"ferietype":"${cat}"}`;

// document.querySelector("#cat_overskrift").textContent = cat;

// async function getData() {
//   const response = await fetch(link);
//   const data = await response.json();

//   console.log(data);
//   // 2. loop // 3. for each
//   data.forEach(showDestination);
// }
// getData();

// const main = document.querySelector("main");
// const template = document.querySelector("template").content;

// function showDestination(rejse) {
//   console.log(rejse);

//   const template = document.querySelector("#ferieliste").textContent;
//   const copy = template.cloneNode(true);

//   copy.querySelector("img").src = "img/" + rejse.billede;

  // copy.querySelector("#liste_billede").src = `https://rejseguide-349f.restdb.io/rest/destinationer/${_id}.webp`;
}

// const _id = urlParams.get("_id");
// console.log("id", _id);
// const url = `https://rejseguide-349f.restdb.io/rest/destinationer/${_id}`;
// console.log(url);
// const imagePath = `https://rejseguide-349f.restdb.io/rest/destinationer/${_id}.webp`;

// //const url = "https://rejseguide-349f.restdb.io/rest/destinationer"";

// const options = {
//   headers: {
//     "x-apikey": "63f49cb7478852088da68515",
//   },
// };

// function hentData() {
//   fetch(url, options)
//     .then((res) => res.json())
//     .then(visProdukt);
// }

// function visProdukt(rejse) {
//   console.log(rejse);
//   document.querySelector(".des_tekst").textContent = rejse.destination;

//   document.querySelector("#about_img").src = "img/" + rejse.billede;
//   document.querySelector("#about_img").src = imagePath;
// }

// hentData();
