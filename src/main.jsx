import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Myfavorite from './pages/MyFavorite';
// import { FavoriteMoviesProvider } from "./components/Favorite";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      
        <Routes>
          <Route element={<App/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="movie/:id" element={<Movies/>}/>
            <Route path="search" element={<Search/>}/>
<<<<<<< HEAD
            <Route path="/myfavorite" element={<Myfavorite/>}/>
=======
            <Route path="/myfavorite" element={<MyFavorite/>}/>
>>>>>>> ea326a9c1a2968616efc3c013b2fdacac4a29c20
            <Route path="/" element={<Home/>}/>
            {/* <Route path='/provider' element={<FavoriteMoviesProvider/>}/> */}
          </Route>
        </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
);