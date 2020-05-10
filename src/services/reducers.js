import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import {firestoreReducer } from 'redux-firestore'
import getProducts from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import filtersReducer from './filters/reducer';
import sortReducer from './sort/reducer';

import authReducer from "./auth";
//import { firebaseReducer } from "react-redux-firebase";
import apiStatusReducer from "./apiStatus";

export default combineReducers({
  firestore: firestoreReducer,
  shelf: getProducts,
  cart: cartReducer,
  total: totalReducer,
  filters: filtersReducer,
  sort: sortReducer,
  firebaseReducer,
  authReducer,
  apiStatusReducer
});
