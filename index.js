$(document).ready(function () {
    const $trackContainer = $("#chart")

    $.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json")
        .then((data) => {
            chartData = data.tracks.track
            // console.log(chartData)
            let chartHTML = renderChart(chartData)
            $trackContainer.html(chartHTML)
        })




})

 function renderChart(chartArray) {

    const chartHtmlArray = chartArray.map((currentTrack) => {

        $.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=7781e08c195a7c652f6a3d277ef99b45&artist=${currentTrack.artist.name}&track=${currentTrack.name}&format=json`)
            .then((data) => {
                trackData = data.track
                // console.log(trackData.duration)

            })
     return `<div>${currentTrack.name}/ ${currentTrack.artist.name}/ ${currentTrack.playcount}/{trackData.album.title} {trackData.duration} </div>`

    })
    return chartHtmlArray.join("")
}