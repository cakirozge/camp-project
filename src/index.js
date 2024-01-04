import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18 için güncellenmiş import
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
import reportWebVitals from './reportWebVitals';
import './index.css';


const store = configureStore();

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();





//configureStoreu uygulamaya eklememiz gerekiyor.
// Tüm App için yapıyoruz.--> provider ile --> uygulamayı redux altyapısıyla sarmalladık


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
