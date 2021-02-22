$(document).ready(function() {
    const $artistContainer = $("#artist")
    const $songContainer = $("#songTitle")
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


 
})



