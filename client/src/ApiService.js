const BASE_URL = 'http://localhost:4000';
const API_URL = 'https://api.themoviedb.org/3/';
const API_IMAGES = 'http://image.tmdb.org/t/p/';
const API_KEY = '5237caacb7e0c70115c1cc6b132a3767'

const API_URL_DISCOVERY = 'https://api.themoviedb.org/3/discover/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=free&with_status=0&with_type=0';

export const getFavs = async () => {
  // try {
  //   const all = await fetch(BASE_URL + '/home');
  //   return all.json();
  // } catch (error) {
  //   console.log('Error: ', error);
  // }
}

export const discover = async () => {
  return fetch(API_URL_DISCOVERY, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'}, 
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}