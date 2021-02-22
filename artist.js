$(document).ready(function () {
  const $artistContainer = $("#tbody")

  fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json')
  .then(function (response) { return response.json(); })
  .then(function (data) {

    let $artistChart = data.artists.artist
    console.log($artistChart);
    $artistContainer.html(renderChart($artistChart));
    console.log(data.artists.artist);
    
  })
  .catch((error) => {
    console.log(error);
  })


})

function addingCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function renderChart(chartArray) {
  const $artistChartHtmlArray = chartArray.map(function (currentArtist,index) {

      let listenersWCommas = addingCommas(`${currentArtist.listeners}`)
      let playcountWCommas = addingCommas(`${currentArtist.playcount}`)
      return `<tr>

      <th scope="row">${index+1}</th>
      <td>${(currentArtist.name).toUpperCase()}</td>
      <td>${listenersWCommas}</td>
      <td>${playcountWCommas}</td>
    </tr>`

  })
  return $artistChartHtmlArray.join("");
};



const $myForm = $("#search-form");
$myForm.on("submit", (e) => {
    
    const searchString = document.querySelector("#search-bar-input").value;
    const urlEncodedSearchString = encodeURIComponent(searchString);
    e.preventDefault();
    console.log(searchString);
    console.log(urlEncodedSearchString);

fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${urlEncodedSearchString}&api_key=http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${urlEncodedSearchString}&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json&format=json`)
  .then(function (response) { return response.json(); })
  .then(function (data) {

    let $artistContainer = $("#tbody")
    let $artistBioSummary = data.artist.bio.content
    console.log($artistBioSummary);

    $artistContainer.html(renderBio($artistBioSummary));

  })
  .catch((error) => {
    console.log(error);
  })

});

function renderBio(artistBio) {
      return `<tr>
      <td>${(artistBio).toUpperCase()}</td>
    </tr>`

  }
