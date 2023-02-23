const urlParams = new URLSearchParams(window.location.search);
const ferietype = urlParams.get("ferietype");
const url = `https://rejseguide-668d.restdb.io/rest/destinationer?q={"ferietype":"${ferietype}"}`;

const options = {
  headers: {
    'x-apikey': "63f745c1478852088da6858c"
  }
};

document.querySelector("#cat_overskrift").textContent = ferietype;
document.querySelector(".breadcrumbs p").textContent = ferietype;

function hentData() {
  fetch(url, options)
  .then((respons) => respons.json()).then(visData);

}


const main = document.querySelector("main");
const template = document.querySelector("template").content;

function visData(json) {
  json.forEach((rejse) => {
    if (rejse.ferietype == ferietype) {
      const klon = template.cloneNode(true);
      klon.querySelector("#liste_billede").src = "img/" + rejse.billede;
      klon.querySelector(".des_tekst").textContent = rejse.destination;
      klon.querySelector(".link").href += rejse.destination;
      main.appendChild(klon);
    }

  });
}
hentData();
