import allBands from './bands.json'
import './main.scss'


document.addEventListener('DOMContentLoaded',function(){
    console.log(allBands)
    const set = 50
    const band = document.getElementById('cards')
    const bands = allBands.data.slice(0,set)
    console.log(bands)

    //const bandsDom =
    bands.forEach(num => {
        const bandDom = `<div class="card">
        <img src="https://f4.bcbits.com/img/a${num.art_id}_9.jpg" alt="dfjks">
        <div class="title" id="${num.art_id}">${num.album_title}</div>
        <div class="artist">${num.artist_title}</div>
        <div class="type">${num.genre_text}</div>
        </div>`
        band.insertAdjacentHTML('beforeend',bandDom)
    })
})