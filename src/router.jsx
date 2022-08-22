import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import Home from './pages/Home';
import Movies from './pages/Movies';
import Search from './pages/Search';

export default function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<App />}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="movie/:id" element={<Movies/>}/>
                    <Route path="search" element={<Search/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}