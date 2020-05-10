import React from 'react';
import { Provider } from 'react-redux';
import store from './services/store';
import * as firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const rrfConfig = {
  userProfile: "products",
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance //since we are using Firestore
};


const Root = ({ children}) => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    {children}
    </ReactReduxFirebaseProvider>,
    </Provider>
);

export default Root;
