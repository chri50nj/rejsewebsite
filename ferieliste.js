const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);

const _id = urlParams.get("_id");
console.log("id", _id);
const url = `https://rejseguide-349f.restdb.io/rest/destinationer/${_id}`;
console.log(url);
const imagePath = `https://rejseguide-349f.restdb.io/rest/destinationer/${_id}.webp`;

//const url = "https://rejseguide-349f.restdb.io/rest/destinationer"";

const options = {
  headers: {
    "x-apikey": "63f49cb7478852088da68515",
  },
};

function hentData() {
  fetch(url, options)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(rejse) {
  console.log(rejse);

  document.querySelector(".h1_single").textContent = rejse.destination;

  document.querySelector("#about_img").src = "img/" + rejse.billede;
  document.querySelector("#about_img").src = imagePath;
}

hentData();
