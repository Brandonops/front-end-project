$(document).ready(function () {
    const $trackContainer = $("#tbody")

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
    // let count =1
    const chartPromise = chartArray.map(async(currentTrack,index) => {
        
        return await $.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=7781e08c195a7c652f6a3d277ef99b45&artist=${currentTrack.artist.name}&track=${currentTrack.name}&format=json`)
            .then( (data) => {
                trackData = data.track
                console.log(trackData)
                let sec = trackData.duration/1000%60
                sec = sec < 10? `0${sec}`: sec
                let min = Math.floor(trackData.duration/1000/60)
                let time = trackData.duration == 0? "": `${min}:${sec}`
                return `<tr>
                <th scope="row">${index+1}</th>
                <td>${(currentTrack.name).toUpperCase()}</td>
                <td>${currentTrack.artist.name}</td>
                <td>${trackData.album? trackData.album.title : "No Album"}</td>
                <td> ${time}</td>
              </tr>`
            })

    })
   const chartHtmlArray = await Promise.all(chartPromise)
    return chartHtmlArray.join("")
}
