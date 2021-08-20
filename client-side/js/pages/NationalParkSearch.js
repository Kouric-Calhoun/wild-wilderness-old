export default function NationalParkSearch() {
    "use strict";

const apiKey = "6XB7opkRrhb1fX0Y1HcLLF14FqncMpSKcdozMy6S";
const searchURL = "https://developer.nps.gov/api/v1/parks";

$(document).ready(function () {
  watchSubmitForm();
});

function watchSubmitForm() {
  console.log("watchSumbitForm works!");
  $("#search-form").submit((e) => {
    e.preventDefault();
    let searchState = $("#state-name-input").val();
    let numResults = $("#number-input").val();
    getNationalParks(searchState, numResults);
  });
}

function formatQueryParams(params) {
  console.log("formatQueryParams function works!");
  const queryItems = Object.keys(params).map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  );
  return queryItems.join("&");
}

function getNationalParks(query, limit = 10) {
  console.log("getNationalPark works!");

  const params = {
    stateCode: query,
    limit,
    api_key: apiKey,
  };

  const queryString = formatQueryParams(params);
  const url = searchURL + "?" + queryString;

  console.log(url);

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((responseJson) => displayResults(responseJson))
    .catch((err) => {
      console.log(err);
      alert("Something went wrong, try again!");
    });
}

function displayResults(responseJson) {
  console.log("displayResult function works");
  $("#results-list").empty();
  for (let i = 0; i < responseJson.data.length; i++) {
    $("#results-list").append(`<br> <br>
    <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">${responseJson.data[i].fullName}</h3>
    </div>
    <div class="panel-body">
    <div class= "row>
     <div class="col-md-3">
     <h4 class="panel-title">${responseJson.data[i].description}</h4>
     <p> <p>
     </div>
     <div class= "row>
     <div class="col-md-3">
     <a href=" ${responseJson.data[i].url}">Visit Park's Website</a>
     </div>
    </div> 
  </div>`);
  }
  $("#results-list").removeClass("hidden");
 }
}