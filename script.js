//API_URL
const API_KEY = 'api_key=a24d6a520184aa756861818178a4db27';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'discover/movie?&sort_by=popularity.desc&' + API_KEY; 
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const SEARCH_URL = BASE_URL + 'search/movie?' + API_KEY;

//DOM
const moviesDiv = document.getElementById("movies");
const form = document.getElementById("form");
const inputValue = document.getElementById("input");
const main = document.getElementById("main");
const container = document.getElementById("container");
const row = document.getElementById("row");

getMovies(API_URL)
function getMovies(url){

    fetch(url).then(res => res.json()).then(data =>{
        renderMovies(data.results);
    })
}

function renderMovies(data){
    row.innerHTML='' ;

    data.forEach(movie => {
        const {title, poster_path, vote_average, release_date} = movie ;
        const movContainer = document.createElement("div");
        movContainer.classList.add("col-md-3");
        movContainer.innerHTML += 
    `
    <div class="card mt-3 mb-3">
      <img src="${IMG_URL + poster_path}" class="img rounded" alt="...">
        <div class="card-img-overlay">
        <div class="row text-light">
        <span class="col-md-9 col-sm-3"><i class="bi bi-star-fill"></i> ${vote_average}</span>
        <p class="card-title col-md-9 col-sm-2 text-light">${release_date}</p>
        </div>
        <a class="card-title position-absolute bottom-0 start-50 translate-middle text-light text-center">${title}</a>
        </div>
    </div>
    </div>
    `
    row.append(movContainer);
    });

}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchValue = inputValue.value;

    if(searchValue){
        getMovies(SEARCH_URL+'&query='+searchValue)
    }else{
        getMovies(API_URL);
    }
})
