const urlParams = new URLSearchParams(window.location.search);
/* får fat i produktet */
const id = urlParams.get("id");
const url = `hhttps://rejseguide-668d.restdb.io/rest/destinationer?q={"id":"${id}"}`; //?q={"fieldname":"emne"}


const options = {
  headers: {
    "x-apikey": "63f745c1478852088da6858c",
  },
};

function hentData() {
  fetch(url, options)
    .then((respons) => respons.json())
    .then(visData);
}

function visData(rejse) {
  console.log(rejse);

  document.querySelector(".h1_single").textContent = rejse.destination;
  document.querySelector(".beskrivelse").textContent = rejse.beskrivelse;
  document.querySelector(".verdensdel").textContent = rejse.verdensdel;
  document.querySelector(".hovedstad-stoersteby").textContent = rejse.hovedstad;
  document.querySelector("#about_img").src = "img/" + rejse.billede;
}
hentData();
