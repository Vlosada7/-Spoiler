const BASE_URL = 'http://localhost:4000';
// const API_URL = 'https://api.themoviedb.org/3/';
// const API_IMAGES = 'http://image.tmdb.org/t/p/';
// const API_KEY = '5237caacb7e0c70115c1cc6b132a3767'

// const API_URL_DISCOVERY = 'https://api.themoviedb.org/3/discover/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=free&with_status=0&with_type=0';

const API_URL_DISCOVERY = 'https://api.themoviedb.org/3/tv/popular?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&page=1';

const API_URL_SEARCH = 'https://api.themoviedb.org/3/search/tv?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US&page=1&query=(Game%20Of%20Thrones)&include_adult=false'

const API_URL_CATEGORIES = 'https://api.themoviedb.org/3/genre/tv/list?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US';

const API_URL_FIND = 'https://api.themoviedb.org/3/tv/{tv_id}?api_key=5237caacb7e0c70115c1cc6b132a3767&language=en-US';

const API_CLERK = 'pk_test_Y2hvaWNlLXJvdWdoeS05NC5jbGVyay5hY2NvdW50cy5kZXYk';

//User:
export const getFavs = async (fullUser) => {
  const userInfo = {
    username: fullUser.username
  }
  const all = await fetch(BASE_URL + `/home/${userInfo.username}`);
  const favIds = await all.json();
  
  const showList = await Promise.all(favIds.map(async ({ id }) => {
    const showInfo = await getFavId(id);
    return showInfo;
  }));
  
  return showList;
}

export const checkFavs = async (id) => {
  const all = await fetch(BASE_URL + '/home');
  return all.json();
}

export const deleteShow = async (info) => {
  // console.log(info)
  try {
    const response = await fetch(`${BASE_URL}/${info.username}/show/${info.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info),
    })
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
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
  const allInfo = {
    username: info.username,
    id: info.id
  }
  
  const response = await fetch(BASE_URL + `/show/${allInfo.id}`, {
    method: "POST", 
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(info),
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error: AQUI ', error)
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

//Revies: 

export const getReviews= async (reviewId) => {
  const reviewInfo = {
    id: reviewId
  }
  const all = await fetch(BASE_URL + `/tv/${reviewInfo.id}/reviews`);
  // const allReviews = await all.json();
  
  // const showList = await Promise.all(allReviews.map(async ({ id }) => {
  //   const showInfo = await getFavId(id);
  //   return showInfo;
  // }));
  
  return all;
}

export const postReview = async (review) => {
  console.log(review);
  const response = await fetch(BASE_URL + `/tv/${review.id}/reviews`, {
    method: "POST", 
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(review),
  })
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error: ', error);
  })
  return response;
}