const urlParams = new URLSearchParams(window.location.search);

// find id
console.log(urlParams);

/* får fat i produktet */
const dest = urlParams.get("dest");
const url = `https://rejseguide-349f.restdb.io/rest/destinationer?q={"destination":"${dest}"}`; //?q={"fieldname":"emne"}

const options = {
  headers: {
    "x-apikey": "63f49cb7478852088da68515",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  data = json;
  vis(json);

  const dest = urlParams.get("dest");
  console.log(dest);
}

const main = document.querySelector("main");

function vis(json) {
  console.log(json);
  json.forEach((rejse) => {
    document.querySelector(".h1_single").textContent = rejse.destination;
    document.querySelector(".beskrivelse").textContent = rejse.beskrivelse;
    document.querySelector(".verdensdel").textContent = rejse.verdensdel;
    document.querySelector(".hovedstad-stoersteby").textContent = rejse.hovedstad;
    document.querySelector("#about_img").src = "img/" + rejse.billede;
  });
}
hentData();
