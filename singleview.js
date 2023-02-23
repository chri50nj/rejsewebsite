const urlParams = new URLSearchParams(window.location.search);
/* får fat i produktet */
const id = urlParams.get("id");
const url = `https://rejseguide-668d.restdb.io/rest/destinationer?q={"id":"${id}"}`; //?q={"fieldname":"emne"}


const options = {
  headers: {
    "x-apikey": "63f745c1478852088da6858c",
  },
};

function hentData() {
  fetch(url, options)
    .then((respons) => respons.json()).then(visProdukt);

}

function visProdukt(product) {

  document.querySelector(".h1_single").textContent = product.destination;
  document.querySelector(".beskrivelse").textContent = product.beskrivelse;
  document.querySelector(".verdensdel").textContent = product.verdensdel;
  document.querySelector(".hovedstad-stoersteby").textContent = product.hovedstad;
  document.querySelector("#about_img").src = "img/" + product.billede;
}
hentData();
