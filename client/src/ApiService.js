//User:
export const getFavs = async (fullUser) => {
  const userInfo = {
    username: fullUser.username
  }
  const all = await fetch(`${process.env.REACT_APP_BASE_SERVER_URL}/home/${userInfo.username}`);
  const favIds = await all.json();
  
  const showList = await Promise.all(favIds.map(async ({ id }) => {
    const showInfo = await getFavId(id);
    return showInfo;
  }));
  
  return showList;
}

export const checkFavs = async (id) => {
  const all = await fetch(`${process.env.REACT_APP_BASE_SERVER_URL}/home`);
  return all.json();
}

export const deleteShow = async (info) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_BASE_SERVER_URL}/${info.username}/show/${info.id}`, {
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
  return fetch(`${process.env.REACT_APP_BASE_API_URL}tv/${id}?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=en-US`, {
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
  
  const response = await fetch(`${process.env.REACT_APP_BASE_SERVER_URL}/show/${allInfo.id}`, {
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
  return fetch(`${process.env.REACT_APP_BASE_API_URL}tv/popular?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=en-US`, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'}, 
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
};

export const getCategories = async () => {
  return fetch(`${process.env.REACT_APP_BASE_API_URL}genre/tv/list?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=en-US`,{
    method: 'GET', 
    headers: {'Content-Type': 'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const getShow = async (showId) => {
  return fetch(`${process.env.REACT_APP_BASE_API_URL}tv/${showId}?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=en-US`, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const findByCat = async (catName) => {
  return fetch(`${process.env.REACT_APP_BASE_API_URL}search/tv?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=en-US&page=1&query=${catName}&include_adult=false`, {
    method: 'GET', 
    headers: {'Content-Type': 'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const getFindShow = async (query) => {
  return fetch(`${process.env.REACT_APP_BASE_API_URL}search/tv?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=en-US&page=1&query=${query}&include_adult=false`, {
    method: 'GET', 
    headers: {'Content-Type':'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

export const getEp = async (id, seasonNumber) => {
  return fetch(`
  ${process.env.REACT_APP_BASE_API_URL}/tv/${id}/season/${seasonNumber}?api_key=${process.env.REACT_APP_BASE_API_KEY}&language=en-US`, {
    method: 'GET', 
    headers: {'Content-Type':'application/json'},
  })
  .then((res) => res.json())
  .catch((err) => console.log(err));
}

//Revies: 

export const getReviews= async (reviewId) => {
  const reviewInfo = {
    id: reviewId
  }
  const all = await fetch(`${process.env.REACT_APP_BASE_SERVER_URL}/tv/${reviewInfo.id}/reviews`);
  
  return all.json();
}

export const postReview = async (review) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_SERVER_URL}/tv/${review.id}/reviews`, {
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