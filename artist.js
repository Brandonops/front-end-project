$(document).ready(function () {
  const $bioContainer = $(".bioContainer")
      fetch('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json&format=json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
  
          let $artistBioSummary = data.artist.bio.summary
          console.log($artistBioSummary);
          $bioContainer.html($artistBioSummary)
  
        })
        .catch((error) => {
          console.log(error);
})
      })
