// --------------
const app = function(){
  const url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url, requestComplete);

  document.addEventListener('load', function() {
    let dataArray = regionsList(countries);
    new PieChart();
    // new ColumnChart("The Top 5 Dogs", "Dog breed", [30, 25, 20, 10, 5], ["Labrador", "German Shepherd", "Bulldog", "Golden Retriever", "Beagle"]);
    // new ColumnChart("Countries by Region", "Region", region, dataArray);
});
// --------------
}

const makeRequest = function(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback);
  request.send();
}

const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  regionsList(countries);
}

const regionsList = function(countries){
  newArray = []
  countries.forEach(function(country){
    newArray.push(country.region);
  })
  console.log(newArray);

  let africaCount = 0;
  let asiaCount = 0;
  let europeCount = 0;
  let oceaniaCount = 0;
  let americasCount = 0;
  let polarCount = 0;
  let noneCount = 0;

  newArray.forEach(function(area){
    if (area === "Africa") {
      africaCount += 1;
    } else if (area === "Asia") {
      asiaCount += 1;
    } else if (area === "Europe") {
      europeCount += 1;
    } else if (area === "Oceania") {
      oceaniaCount += 1;
    } else if (area === "Americas") {
      americasCount += 1;
    } else if (area === "Polar") {
      polarCount += 1;
    } else if (area === "") {
      noneCount += 1;
    }
    dataArray = [];
    dataArray.push(africaCount);
    dataArray.push(asiaCount);
    dataArray.push(europeCount);
    dataArray.push(oceaniaCount);
    dataArray.push(americasCount);
    dataArray.push(polarCount);
    dataArray.push(noneCount);
    })
    console.log(dataArray);
    let region = ["Africa", "Asia", "Europe", "Oceania", "Americas", "Polar", "None"];

    new ColumnChart("Countries by Region", "Region", dataArray, region);
};

document.addEventListener('DOMContentLoaded', app);
