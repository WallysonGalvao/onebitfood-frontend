import { combineReducers } from 'redux';
import RestaurantsRducer from './restaurantsReducer';

export default combineReducers({
    restaurantsState: RestaurantsRducer
});