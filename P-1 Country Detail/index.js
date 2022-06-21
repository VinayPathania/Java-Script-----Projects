// USING AJAX (Asynchronous JavaScript And XML)

let url = "https://restcountries.com/v3.1/name/bharat";

const container = document.querySelector("#container");

//Send the request to API
const request = new XMLHttpRequest();
request.open("GET", url);
request.send();

// to get the responce
request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
    //  console.log(data);

  const htmlData = `
<div id="card-top">
<img src="${data.flags.png}" id="img" alt="">
<h1 id="country-name">${data.name.nativeName.hin.common}</h1>
<h2 id="country-capital">Capital : ${data.capital}</h2>
</div>
<hr>
<div id="card-footer">
<article class="card-footer-detail">
    <h4 class="footer-detail">${data.languages.hin}</h4>
    <p class="footer-para">Native language</p>
</article>
<article class="card-footer-detail">
    <h4 class="footer-detail">${data.population}</h4>
    <p class="footer-para">Population</p>
</article>
<article class="card-footer-detail">
    <h4 class="footer-detail">${data.demonyms.fra.m}</h4>
    <p class="footer-para">Demonyms</p>
</article>
</div>
`;

container.insertAdjacentHTML("afterbegin",htmlData)
});
