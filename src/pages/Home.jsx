import { useState, useEffect } from "react";

import MovieCard from "../components/MovieCard";

import './MovieGrid.css'

const apiKey = import.meta.env.VITE_API_KEY
const moviesURL = import.meta.env.VITE_API_URL

const Home = () => {
    //variaveis de estado
    const [topMovies, setTopMovies] = useState([]);

    //Função assincrona
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedURL);
    }, [])

    return (
        <>
            <div className="container">
                <h2 className="title">Top 20 - Filmes melhores avaliados</h2>
                <div className="movies-container">
                    {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </>
    );
}

export default Home;