let albumContainer = document.querySelector(".cardClass")




function renderAlbum(albumArray) {
    const albumHTMLArray = albumArray.map(function (currentAlbum) {
        return ` <div class="cardClass">
        <div class="card" style="width: 18rem;">
        <img src="${currentAlbum.image[3]['#text']}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${currentAlbum.name}</h5>
        <p class="card-text">${currentAlbum.artist.name}</p>
        <a href="${currentAlbum.artist.url}"> <p  card="card-text">${currentAlbum.artist.url} </a></p>
        </div>
        </div>
        </div>
        </a>`
        
    })
    return albumHTMLArray.join('')
}
$(document).ready(function () {
    albumContainer = document.querySelector(".cardRow")
    const $searchResult = $(".search-bar")
    $searchResult.on("submit",(e) => {
        const searchAlbum = document.querySelector(".search").value
        const uricode = encodeURI(searchAlbum)
        e.preventDefault()
        console.log(searchAlbum)
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${uricode}&api_key=7781e08c195a7c652f6a3d277ef99b45&format=json`)
            .then((response) =>{
                return response.json()
            })
            .then(data => {
                console.log(data)
                albumContainer.innerHTML = renderAlbum(data.topalbums.album)
            })
    })
})
