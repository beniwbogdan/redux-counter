import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {createStore} from "redux"
 

const initialState = {
  counter:0,
}

const reducer=(state= initialState, action)=>{
  switch(action.type){
    case "ADD_ONE":
      return{...state, counter:state.counter+action.payload}
    case "DELETE_ONE":
      return{...state, counter:state.counter-action.payload}
    default:
      return state;
  }
}

let store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
