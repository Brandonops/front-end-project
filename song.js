$(document).ready(function() {
    const $artistContainer = $("#artist")
    const $songContainer = $("#songTitle")
    const $imageContainer = $("#album-image")
    let track =""
    let trackJSON = localStorage.getItem("song")
    track = JSON.parse(trackJSON)
    $songContainer.html(track.song)
    $artistContainer.html(track.artist)

    let encodedSong = encodeURIComponent(track.song)
    let encodedArtist = encodeURIComponent(track.artist)
    console.log(track.song)
    const $lyricsSection = $("#lyrics")
    $.get(`https://api.lyrics.ovh/v1/${encodedArtist}/${encodedSong}`)
    .then((data) => {
        lyricData = data.lyrics
        console.log(lyricData)
        $lyricsSection.html(lyricData.replaceAll("\n","<br>") )
    })

    $.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${track.artist}&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json`)
    .then((data) => {
        imageData = data.image
        console.log(imageData)
    })


 
})



