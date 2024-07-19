import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white mt-5 p-4 text-center">
            <p>Developed by Bowring Developers</p>
            <p>Contact: <a href="mailto:your-email@gmail.com" className="text-white">your-email@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/your-github" className="text-white">your-github</a></p>
        </footer>
    );
};

export default Footer;
