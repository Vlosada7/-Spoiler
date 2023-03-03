const BASE_URL = 'http://localhost:4000';
const API_URL = 'https://api.themoviedb.org/3/';
const API_IMAGES = 'http://image.tmdb.org/t/p/';
const API_KEY = '5237caacb7e0c70115c1cc6b132a3767'

// const API_URL_DISCOVERY = 'https://api.themoviedb.org/3/discover/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=free&with_status=0&with_type=0';

const API_URL_DISCOVERY = 'https://api.themoviedb.org/3/tv/popular?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&page=1';

const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&page=1&query=(Game%20Of%20Thrones)&include_adult=false'

const API_URL_CATEGORIES = 'https://api.themoviedb.org/3/genre/tv/list?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US';

const API_URL_FIND = 'https://api.themoviedb.org/3/tv/{tv_id}?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US';


export const getFavs = async () => {
  const all = await fetch(BASE_URL + '/home');
  const favIds = await all.json();
  const showList = [];

  for (const fav of favIds) {
    const showInfo = await getFavId(fav.id);
    showList.push(showInfo);
  }
  return showList;
}

export const checkFavs = async (id) => {
  const all = await fetch(BASE_URL + '/home');
  return all.json();
}

export const deleteShow = async (info) => {
  const showid = {
    id: info.id
  }
  const response = await fetch(`${BASE_URL}/show/${showid.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(info), 
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error: ', error)
  })
  return response;
  
}


export const getFavId = async (id) => {
  return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US`, {
    method: "GET", 
    headers: {'Content-Type': 'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const saveShow = async (info) => {
  const response = await fetch(BASE_URL + '/show/id', {
    method: "POST", 
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(info),
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error: ', error)
  })
  return response;
}

export const discover = async () => {
  return fetch(API_URL_DISCOVERY, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'}, 
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
};

export const getCategories = async () => {
  return fetch(API_URL_CATEGORIES, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const getShow = async (showId) => {
  return fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US`, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const findByCat = async (catName) => {
  return fetch(`https://api.themoviedb.org/3/search/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&page=1&query=${catName}&include_adult=false`, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}