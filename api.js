import { config } from "./config.js";

const BASE_URL = config.api_base_url
const API_KEY = config.api_key
const API_URL = `${BASE_URL}discover/movie?${API_KEY}&include_video=true&sort_by=popularity.desc&page=1`
const SEARCH_URL = `${BASE_URL} + '/search/movie?' + ${API_KEY}`

export let getPopularMovies = async (url) => {
    let data= []
    try {
        let response = await fetch(API_URL);
        let responseData = await response.json()
        data = responseData?.results 
    } catch (error) {
        
    }
    return data;
}

let form = document.getElementById("form");
let input = document.getElementById("input");


form.addEventListener('click', (e)=>{
    e.preventDefault();

    const searchValue = input.value;
    if(searchValue && searchValue !==''){
        getPopularMovies(SEARCH_URL+'&query='+input)
    }
    
})
