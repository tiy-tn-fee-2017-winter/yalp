import { combineReducers } from 'redux';
import restaurants from './reducer/restaurants';
import userResource from './resources/user';

export default combineReducers({
  restaurants,
  users: userResource.reducer,
});
