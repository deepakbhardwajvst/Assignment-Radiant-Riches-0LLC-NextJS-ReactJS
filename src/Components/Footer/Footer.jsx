import { FaAngleDown } from "react-icons/fa6";

import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="f-container container">
                <div className="footer-box">
                    <h3>Categories</h3>
                    <p>Web Builder</p>
                    <p>Hosting</p>
                    <p>About</p><p>Data Center</p><p>Robotic-Automation</p>
                </div>
                <div className="footer-box">
                    <h3>Contact</h3>
                    <p>Contact</p>
                    <p>Privacy Policy</p>
                    <p>Terms Of Service</p>
                    <p>about</p>
                    <p>Categories</p>
                </div>
                <div className="footer-box">
                    <p className='footer-us'><span className='footer-span'>United States</span> <span>
                        <FaAngleDown className="FaAngleDown" />
                    </span></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
