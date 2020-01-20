import {combineReducers} from 'redux';
import Reducer from './reducer';
import ReducerColor from './reducerColor';

export default combineReducers({
  username: Reducer,
  color: ReducerColor,
});
