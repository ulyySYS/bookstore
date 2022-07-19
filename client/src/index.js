import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import Contacts from './components/Contacts/Contacts';
import Nothing from './components/Nothing';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="Categories" element={<Categories />} />
          <Route path="contacts" element={<Contacts />} />

          {/*for when the url doesnt exist */}
          <Route path="*" element={<Nothing/>} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);


