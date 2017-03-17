import createResource from 'redux-thunk-rest';

export default createResource('restaurant', {
  url: 'http://localhost:3333/restaurants',

  createHeaders: () => {
    console.log('run');

    return { Authorization: `Bearer ${localStorage.jwt}` };
  },

  reducers: {
    items: {
      'RESTAURANT@ADD_REVIEW_COMPLETE': function (state, action) {
        return state.map((r) => {
          if (r.id === action.restaurantId) {
            return {
              ...r,
              reviews: [...r.reviews, action.data],
            };
          }

          return r;
        });
      }
    }
  }
});
