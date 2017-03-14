import unionBy from 'lodash.unionby';

export default function restaurants(state = [], action) {
  switch (action.type) {
    case 'RESTAURANTS@FIND_ALL_COMPLETE':
      return unionBy(action.data, state, 'id');
    case 'RESTAURANTS@FIND_ONE_COMPLETE':
      return unionBy([action.data], state, 'id');
    case 'RESTAURANTS@CREATE_COMPLETE':
      return unionBy([action.data], state, 'id');
    case 'RESTAURANTS@UPDATE_COMPLETE':
      return unionBy([action.data], state, 'id');
    case 'RESTAURANTS@DESTROY_COMPLETE':
      return state.filter(({ id }) => id !== action.id);
    case 'RESTAURANTS@ADD_REVIEW':
      return state.map((r) => {
        if (r.id === action.restaurantId) {
          return {
            ...r,
            reviews: [...r.reviews, action.data],
          };
        }

        return r;
      });
    default:
      return state;
  }
}
