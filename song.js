$(document).ready(function() {
    const $artistContainer = $("#artist")
    const $songContainer = $("#songTitle")
    const $imageContainer = $("#album-image")
    const $tagContainer = $("#tagList")
    const $releaseContainer = $("#release-date")
    const $bioContainer = $("#bio-section")
    let track =""
    let trackJSON = localStorage.getItem("song")
    track = JSON.parse(trackJSON)
    $songContainer.html(track.song)
    $artistContainer.html(track.artist)
    $imageContainer.html(`<img class ="album-image mt-3" id="album-image" src="${track.img}" alt=""></img>`)
    $tagContainer.html(`<li class="list-inline-item" id="tagList">${track.tags[0].name}</li>`)
    console.log(track.tags)
    $releaseContainer.html(`<p class="release-date">${track.date}</p>`)
    $bioContainer.html(`<p>${track.bio}</p>`)

    let encodedSong = encodeURIComponent(track.song)
    let encodedArtist = encodeURIComponent(track.artist)
    console.log(track.song)
    const $lyricsSection = $("#lyrics")
    $.get(`https://api.lyrics.ovh/v1/${encodedArtist}/${encodedSong}`)
    .then((data) => { //if lyric data === "" do this else do this
        lyricData = data.lyrics
        $lyricsSection.html(lyricData.replaceAll("\n","<br>"))


    
    
    })


    $.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${track.artist}&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json`)
    .then((data) => {
        imageData = data.image
        console.log(imageData)
    })


 
})



