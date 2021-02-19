$(document).ready(function () {
    const $trackContainer = $("#chart")

    $.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json")
        .then((data) => {
            chartData = data.tracks.track
            // console.log(chartData)
            renderChart(chartData)
            .then((chartHTML) => {

                $trackContainer.html(chartHTML)
            })
        })




})

 async function renderChart(chartArray) {

    const chartPromise = chartArray.map(async(currentTrack) => {

        return await $.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=7781e08c195a7c652f6a3d277ef99b45&artist=${currentTrack.artist.name}&track=${currentTrack.name}&format=json`)
            .then( (data) => {
                trackData = data.track
                console.log(trackData)
                
                return `<div>${currentTrack.name} ${currentTrack.artist.name}/ ${currentTrack.playcount}/${trackData.album? trackData.album.title : ""} ${trackData.duration} </div>`
            })

    })
   const chartHtmlArray = await Promise.all(chartPromise)
    return chartHtmlArray.join("")
}
