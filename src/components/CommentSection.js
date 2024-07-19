import React from 'react';
import '../styles/CommentSection.css';

const CommentSection = ({ comments }) => {
    return (
        <div className="container mt-5 animate__animated animate__fadeIn">
            <h3>Comments</h3>
            {comments.map(comment => (
                <div key={comment.id} className="comment mb-3">
                    <p>{comment.text}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;
