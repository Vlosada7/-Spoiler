import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useUser } from '@clerk/clerk-react'
// import { getReviews } from '../../ApiService';
import './Reviews.css'

const Reviews = () => {
  const { id } = useParams();
  const { user } = useUser();
  console.log(id);
  console.log(user.username)
  const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   const showReviews = async () => {
  //     try {
  //       const response = await getReviews(id);
  //       setReviews(response);
  //     } catch (error) {
  //       console.error('Erro: ', error)
  //     }
  //   };
  //   showReviews();
  // }, [])

  return (
    <>
      <p>REVIEW TAB</p>
      

    </>
  )



}

export default Reviews;