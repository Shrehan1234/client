import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AnimeCard.css';
import '../styles/Animeimage.css';  // Import the new image styles

const AnimeCard = ({ anime }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 animate__animated">
            <div className="card anime-card">
                <img src={anime.image} className="card-img-top" alt={anime.title} />
                <div className="card-body">
                    <h5 className="card-title">{anime.title}</h5>
                    <p className="card-text">Rating: {anime.rating}</p>
                    <Link to={`/anime/${anime.id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AnimeCard;
