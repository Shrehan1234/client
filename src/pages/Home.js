import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimeCard from '../components/AnimeCard';
import '../styles/Home.css';

const Home = () => {
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        // Fetch anime data from your backend
        axios.get('/api/animes')
            .then(response => setAnimes(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-5">
            <div className="row">
                {animes.map(anime => (
                    <AnimeCard key={anime.id} anime={anime} />
                ))}
            </div>
        </div>
    );
};

export default Home;
