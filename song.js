$(document).ready(function() {
    const lyricsSection = $(".lyrics-section")

    $.get("https://api.lyrics.ovh/v1/artist/title")
        .then((data) => {
            lyricData = data.lyric
        })
})