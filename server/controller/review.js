const Reviews = require('../models/reviews.js');

const getReviews = async (req, res) => {
  const reviewId = req.params.id;
  console.log('pegou o review do id:', reviewId);
  try {
    const reviews = await Reviews.find({ id: reviewId });
    res.send(reviews); // corrigido para enviar as reviews encontradas
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao buscar reviews');
  }
};

const postReview = async (req, res) => {
  // const reviewId = req.params.id;
  // console.log('Postou um novo review no id:' + reviewId);
  const newReview = {
    id: req.body.id,
    reviews: {
      content: req.body.review.content,
      author: req.body.review.author
    }
  };

  try {
    const post = await Reviews.findOne({ id: newReview.id }); // corrigido para usar findOne em vez de find
    if (!post) {
      const newPost = await Reviews.create({ id: newReview.id, reviews: [] }); // corrigido para criar um novo objeto com um array vazio de reviews
      await Reviews.updateOne(
        { id: newReview.id },
        { $push: { reviews: { content: newReview.reviews.content, author: newReview.reviews.author } } }
      );
      res.status(201).json({ id: newReview.id });
    } else {
      await Reviews.updateOne(
        { id: newReview.id },
        { $push: { reviews: { content: newReview.reviews.content, author: newReview.reviews.author } } }
      );
      res.status(201).json({ id: newReview.id });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Erro ao adicionar review');
  }
};

module.exports = { getReviews, postReview };