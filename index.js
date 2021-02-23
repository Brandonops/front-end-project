$(document).ready(function () {
    const $trackContainer = $("#tbody")
    const $jumbo1 = $("#jumbo1")
    const $jumbo2 = $("#jumbo2")
    $.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json")
        .then((data) => {
            chartData = data.tracks.track
            // console.log(chartData)
            renderChart(chartData)
            .then((chartHTML) => {

                $trackContainer.html(chartHTML)
            })
        })

    const $searchBar = $("#search-form")
    $searchBar.on('submit', function (e) {

        e.preventDefault()
        const $searchBtn = $("#search")  
        let search = $searchBtn.val()
        search = encodeURIComponent(search)
        $.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${search}&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json`)
        .then((data) => {
            songData = data.results.trackmatches.track
            console.log(songData)
            renderSearch(songData)
            .then((songHTML) => {
                $jumbo1.html("Top Results")
                $jumbo2.html("")
                $trackContainer.html(songHTML)
            })
        })


    })


})
function addArtistToLocal(artist)
{
    let artistData = {artist}

    artistJSON = JSON.stringify(artistData)
    console.log(artistJSON)
    localStorage.setItem('artist',artistJSON)
    window.location.href ="./artist.html"
}
function addToLocal(song,artist,tags,date,img)
{
    let track = {song,artist,tags,date,img}

    trackJSON = JSON.stringify(track)
    console.log(trackJSON)
    localStorage.setItem('song',trackJSON)
    window.location.href ="./song.html"
}
 async function renderChart(chartArray) {
    const chartPromise = chartArray.map(async(currentTrack,index) => {
        
        return await $.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=7781e08c195a7c652f6a3d277ef99b45&artist=${currentTrack.artist.name}&track=${currentTrack.name}&format=json`)
            .then( (data) => {
                trackData = data.track
                let sec = trackData.duration/1000%60
                sec = sec < 10? `0${sec}`: sec
                let min = Math.floor(trackData.duration/1000/60)
                let time = trackData.duration == 0? "": `${min}:${sec}`
                
                return `<tr>
                <th scope="row">${index+1}</th>
                <td><a href="#" onclick ="addToLocal('${currentTrack.name}', '${currentTrack.artist.name}', '${trackData.tag}', '${trackData.wiki? trackData.wiki.published : "no info"}','${trackData.album? trackData.album.image[2]["#text"]: "./test-image.jpeg"}')" > ${(currentTrack.name).toUpperCase()}</a></td>
                <td> <a href= "#" onclick ="addArtistToLocal('${currentTrack.artist.name}')">${currentTrack.artist.name} </a></td>
                <td>${trackData.album? trackData.album.title : "No Album"}</td>
                <td> ${time}</td> 
              </tr>`
            })

    })
   const chartHtmlArray = await Promise.all(chartPromise)
    return chartHtmlArray.join("")
}

async function renderSearch(songData){
    const searchPromise = songData.map(async(currentTrack,index) => {
        
        return await $.get(`http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=7781e08c195a7c652f6a3d277ef99b45&artist=${currentTrack.artist}&track=${currentTrack.name}&format=json`)
            .then( (data) => {
                trackData = data.track
                if (trackData ==undefined)
                {
                    return ""
                }
                let sec = trackData.duration/1000%60
                sec = sec < 10? `0${sec}`: sec
                let min = Math.floor(trackData.duration/1000/60)
                let time = trackData.duration == 0? "": `${min}:${sec}`
                return `<tr>
                <th scope="row">${index+1}</th>
                <td><a href="#" onclick ="addToLocal('${currentTrack.name}', '${currentTrack.artist}')">${(currentTrack.name).toUpperCase()} </a></td>
                <td> <a href= "#">${currentTrack.artist} </a></td>
                <td>${trackData.album? trackData.album.title : "No Album"}</td>
                <td> ${time}</td> 
              </tr>`
            })

    })
   const searchHtmlArray = await Promise.all(searchPromise)
    return searchHtmlArray.join("")
}
