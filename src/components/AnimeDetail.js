import React from 'react';
import '../styles/AnimeDetail.css';

const AnimeDetail = ({ anime }) => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <div className="row">
                <div className="col-md-8">
                    <div className="video-container">
                        <iframe
                            src={anime.videoUrl}
                            title={anime.title}
                            frameBorder="0"
                            allowFullScreen
                            className="video-frame"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="episodes-list">
                        <h4>Episodes</h4>
                        {anime.episodes.map(episode => (
                            <div key={episode.id} className="episode">
                                {episode.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeDetail;
