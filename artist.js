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
  const $artistChartHtmlArray = chartArray.map(function (currentArtist, index) {

    let listenersWCommas = addingCommas(`${currentArtist.listeners}`)
    let playcountWCommas = addingCommas(`${currentArtist.playcount}`)
    return `<tr>

      <th scope="row">${index + 1}</th>
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
  renderArtist(urlEncodedSearchString);

  
});
function renderArtist(artist) {
fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json&format=json`)
  .then(function (response) { return response.json(); })
  .then(function (data) {

    let $artistContainer = $("#table-chart")
    let $bioContainer = $(".content")
    let $artistBioSummary = data.artist
    $("#mainArtistJumbo").css("display","none");
    console.log($artistBioSummary);

    $artistContainer.html("");
    $bioContainer.html(renderartistbio($artistBioSummary));


  })
  .catch((error) => {
    console.log(error);
  })
}
function renderartistbio(artist) {
  return `
        <div class="jumbotron jumbotron-fluid d-flex ml-10">
          <img src="test-image.jpeg" style=" width: 200px; height: 200px;">
        <div class="container">
          <h1 class="display-4" id="h1-title">${artist.name}</h1>
          <div id="listeners-and-plays">
            <p class="lead" id="listeners">Listeners</br>${addingCommas(artist.stats.listeners)}</p>
            <p class="lead" id="playcount">Plays</br>${addingCommas(artist.stats.playcount)}</p>
          </div>
        </div>
      </div>

      <div id="bioContainer">
      <h2 style="margin-bottom: 25px";>Artist's Summary:</h2>
      <p style="line-height: 2em;">${artist.bio.content}</p>
    `
}


