import resource from '../resources/restaurant';

const { actionCreators } = resource;

export const { create, findAll, findOne, update, destroy } = actionCreators;

const createReviewComplete = (restaurantId, data) => ({
  type: 'RESTAURANT@ADD_REVIEW_COMPLETE',
  restaurantId,
  data
});

export const createReview = (restaurantId, formData) => dispatch =>
  fetch(`http://localhost:3333/restaurants/${restaurantId}/reviews`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.jwt}`,
    },
    body: JSON.stringify(formData)
  }).then(r => r.json()).then(review => dispatch(createReviewComplete(restaurantId, review)));
