# <p align="center"> Alpha Music </p>
<br>
<br>

## Checklist 📋
<hr>

## Your task is to build something awesome with your team!
You'll be using the front-end skills you've developed over the last several weeks.
Each team must present their project and each team member must have a presenting role.
Technical Requirements
Implement a Responsive Design that works on Chrome on OSX, iOS devices, and Android devices.
Access at least 2 remote APIs (data mashup!)
HTML is well structured
Javascript loads correctly and doesn't have any console errors.

<br>

Work in groups
Use agile methodolgy (daily standups)
Create github repo (add all group members as collaborators)
Collaborate using PRs (Pull Requests), making sure to tag a reviewer for approval
Reviewer must code review through Github and approve before the PR can be merged. If there are no comments, the code has spaghetti, or has difficult to read spots, code review didn't happen.
<br>
<br>
Use a feature tracking system, such as:
Github Projects or
Trello.

<br>
<br>

## About our project 📝
<hr>
Alpha music was created for the user to be able to look at top hits, information about the artist, lyrics for their favorite song and ways to search albums by a certain artist. Alpha Music has a very simple and easy user interface, being able to click their song they searched to get to lyrics and how many plays it has, to being able to find more music by the artist by clicking the links provided at the bottom of each album picture .
<br>
<br>
<br>
<br>

## languages Used and technology 💻
<hr>
<br>

<img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
<img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

<br>
<br>
<br>

## Code snipets
<hr>


<p> This is an example of our album API function.
<br>

```js
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

```

<br>
<br>

## List of API's used
<hr>
<br>

* [Audio Scrobbler](http://ws.audioscrobbler.com)
* [Api Lyrics](https://api.lyrics.ovh)

<br>
<br>


## Group
<hr>
 
* [Tyler Hobbs](https://github.com/tylerhobbs94)
* [Willie Rose](https://github.com/willis719)
* [Angel Deluna](https://github.com/AngelDelunadev)
* [Brandon Woolston](https://github.com/Brandonops)

<br>
<br>

## License
<hr>


* [MIT](https://opensource.org/licenses/MIT)
