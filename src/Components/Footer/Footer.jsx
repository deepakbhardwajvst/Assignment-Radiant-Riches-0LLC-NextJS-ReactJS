import { FaAngleDown } from "react-icons/fa6";

import React from 'react';
import './Footer.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="f-container container">
                <div className="footer-box">
                    <h3>Categories</h3>
                    <p><Link href="/">Web Builder</Link></p>
                    <p><Link href="/">Hosting</Link></p>
                    <p><Link href="/">About</Link></p>
                    <p><Link href="/">Data Center</Link></p>
                    <p><Link href="/">Robotic-Automation</Link></p>
                </div>
                <div className="footer-box">
                    <h3>Contact</h3>
                    <p><Link href="/">Contact</Link></p>
                    <p><Link href="/">Privacy Policy</Link></p>
                    <p><Link href="/">Terms Of Service</Link></p>
                    <p><Link href="/">about</Link></p>
                    <p><Link href="/">Categories</Link></p>
                </div>
                <div className="footer-box">
                    <p className='footer-us'><span className='footer-span'>United States</span> <span>
                        <FaAngleDown />
                    </span></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
