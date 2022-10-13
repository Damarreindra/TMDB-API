const moviesDiv = document.getElementById("movies")

import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies);
    movies.forEach(item=>{
            moviesDiv.innerHTML += 
            `
            <div class="col-6 col-md-3 mt-3 mb-3">
            <div class="card">
              <img src="${config.img_base_url + item.poster_path}" class="img rounded" alt="...">
                <div class="card-img-overlay">
                <div class="row text-light">
                <span class="col-md-9 col-sm-3"><i class="bi bi-star-fill"></i> ${item.vote_average}</span>
                <p class="card-title col-md-9 col-sm-2 text-light">${item.release_date}</p>
                </div>
                <a class="card-title position-absolute bottom-0 start-50 translate-middle text-light text-center">${item.title}</a>
                </div>
            </div>
            </div>
            `
           
        })
}

