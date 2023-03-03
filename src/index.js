import React from 'react';
import ReactDOM from 'react-dom/client';
import { combineReducers } from "redux";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import taskReducer from "./store/reducers/task";

const rootReducer = combineReducers({
    task: taskReducer
})

const store = configureStore({ reducer: rootReducer });

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
