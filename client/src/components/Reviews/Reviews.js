import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useUser } from '@clerk/clerk-react';
import { isEmpty } from "lodash";
import { getReviews } from '../../ApiService';
import './Reviews.css'
import { getShow } from '../../ApiService';
import { postReview } from '../../ApiService';

const Reviews = () => {
  const { id } = useParams();
  const { user } = useUser();
  // console.log(id);
  // console.log(user.username)
  const [reviews, setReviews] = useState([]);
  const [show, setShow] = useState({});
  const [newReview, setNewReview] = useState({
    id: id,
    review: {
      content:'',
      author: user.username
    }
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNewReview({...newReview, review: {...newReview.review, [name] : value}});
  }

  function handleSubmit(event) {
    // event.preventDefault();
    console.log(event);
    const createdReview = {
      id: event.id,
      review: {
        content: event.review.content,
        author: event.review.author
      }
    }
    postReview(createdReview)
    .then((savedReview) => {
      setReviews([...reviews, savedReview])
    })
    setNewReview({
      id: id,
      review: {
        content:'',
        author: user
      }
    })
  }

  function handleCreateButtonClick() {
    if (!newReview.review.content) {
      alert("Please write something in the review to post");
      return
    }
    handleSubmit(newReview);
  }

  useEffect(() => {
    const showInfos = async () => {
      try {
        const response = await getShow(id);
        setShow(response);
      } catch (error) {
        console.error('Error: ', error);
      }
    };
    showInfos();
  })

  useEffect(() => {
    const showReviews = async () => {
      try {
        const response = await getReviews(id);
        setReviews(response.reviews);
      } catch (error) {
        console.error('Erro: ', error)
      }
    };
    showReviews();
  }, [])


  return (
    <div className='principal'>
      {isEmpty(reviews) ? (
      <div className='reviews'>
        <div 
          className='reviews-list'
          style={{ 
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${show.backdrop_path})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
        >
          <p>Sem reviews por enquanto</p>
        </div>
          <div class="reviews-input">
          <input 
              className='input-post' 
              type="text" 
              placeholder="Review the show..."
              name='content'
              value={newReview.review.content}
              onChange={handleChange}
              required
              // readOnly={!user}
            />
            <button 
              type="submit" 
              className="btn btn-primary"
              onClick={handleCreateButtonClick}
              // disabled={!user}
            >
              Send
            </button>
          </div>
      </div>
      ) : (
        <div className='reviews'>
          {reviews.map((review) => (
            <div
              className='single-review'
              key={review.id}
            >
              <p>{review.id}</p>
              <p>{review.review.content}</p>
              <p>{review.review.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
  
}

export default Reviews;