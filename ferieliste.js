const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("ferietype");
const url = `https://rejseguide-668d.restdb.io/rest/destinationer?q={"ferietype":"${ferietype}"}`;

const options = {
  headers: {
    'x-apikey': "63f745c1478852088da6858c"
  }
};

// const urlParams = new URLSearchParams(window.location.search);

// find id
// console.log(urlParams);

/* får fat i produktet */
// const cat = urlParams.get("cat");
// const url = `https://rejseguide-349f.restdb.io/rest/destinationer?q={"ferietype":"${cat}"}`; //?q={"fieldname":"emne"}

// const url = `testfil.json`;

// async function hentData() {
//   const resspons = await fetch(url);
//   const json = await resspons.json();
//   vis(json);
// }

// const main = document.querySelector("main");
// const template = document.querySelector("template").content;

// function vis(json) {
//   json.forEach((rejse) => {
//     if (rejse.ferietype == cat) {
//       const klon = template.cloneNode(true);
//       klon.querySelector("#liste_billede").src = "img/" + rejse.billede;
//       klon.querySelector(".des_tekst").textContent = rejse.destination;
//       klon.querySelector(".link").href += rejse.destination;
//       main.appendChild(klon);
//     }
//   });
// }
// hentData();
