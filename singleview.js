const urlParams = new URLSearchParams(window.location.search);
const destination = urlParams.get("destination");
const url = `https://rejseguide-668d.restdb.io/rest/destinationer?q={"destination":"${destination}"}`;

const options = {
  headers: {
    "x-apikey": "63f745c1478852088da6858c",
  },
};

function hentData() {
  fetch(url, options).then((respons) => respons.json()).then(visData);
}

function visData(product) {
document.querySelector(".h1_single").textContent = product.ferietype;

}

hentData();