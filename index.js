const genreZeroBtn = document.getElementById('genre-0');
const genreOneBtn = document.getElementById('genre-1');
const genreTwoBtn = document.getElementById('genre-2');
const genreThreeBtn = document.getElementById('genre-3');

const soundBtns = document.getElementsByName('sound-btn');

const setGenre = (ev) => {
    genreId = ev.path[0].id;
    if(genreId === 'genre-0'){
        for(btn of soundBtns){
            btn.setAttribute('class', 'default');
        }
    }else if(genreId === 'genre-1'){
        for(btn of soundBtns){
            btn.setAttribute('class', 'as');
        }
    }
    else if(genreId === 'genre-2'){
        for(btn of soundBtns){
            btn.setAttribute('class', 'spp');
        }     
    }else{
        for(btn of soundBtns){
            btn.setAttribute('class', 'hp');
        }
    }
}

genreZeroBtn.addEventListener('click', setGenre)
genreOneBtn.addEventListener('click', setGenre);
genreTwoBtn.addEventListener('click', setGenre);
genreThreeBtn.addEventListener('click', setGenre)