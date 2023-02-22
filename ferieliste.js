const url = "https://rejseguide-349f.restdb.io/rest/destinationer";

const options = {
  headers: {
    "x-apikey": "63f49cb7478852088da68515",
  },
};

async function hentData() {
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  json.forEach((rejse) => {
    const klon = template.cloneNode(true);
    klon.querySelector("#liste_billede").src = "img/" + rejse.billede;
    klon.querySelector(".des_tekst").textContent = rejse.destination;
    main.appendChild(klon);
  });
}
hentData();
