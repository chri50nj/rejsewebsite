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
  const resspons = await fetch(url, options);
  const json = await resspons.json();
  vis(json);
}

const main = document.querySelector("main");

function vis(json) {
  console.log(json);
  json.forEach((rejse) => {
    document.querySelector(".h1_single").textContent = rejse.destination;
  });
}
hentData();
