import Link from 'next/link';
import * as React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="ftop">
                    <div className="ftleft">
                        <div className="ftl">
                            <li><h4>Contact Info</h4></li>
                            <li>Changunarayan-6,Phedi</li>
                            <li>Bhaktapur, Nepal</li>
                            <li>Email: birajlamichhane57@gmail.com</li>
                            <li>Phone: 9768407902</li>
                        </div>
                        <div className="ftl">
                            <li><h4>Navigation</h4></li>
                            <li>Home</li>
                            <li>Listing</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </div>
                    </div>
                    <div className="ftright">
                        <h4>Subscribe To B-House</h4>
                        <p>Enter your email address and get daily information</p>
                        <div className="esearch">
                            <input type="text" placeholder='Email address' className='emailsearch' />
                            <button className='esbtn'>Search</button>
                        </div>
                    </div>
                </div>

                <div className="fbottom">
                    <div className="fbright">
                        <p>B-Home &copy; 2024 All Rights Reserved. Made by birajlamichhane75</p>
                    </div>
                    <div className="fbleft">
                        <div className="media">
                            <Link href="https://www.facebook.com/biraj.lamichhane.18" target='_blank'><FaFacebook  className='icon'/></Link>
                            <Link href="https://www.instagram.com/birajlamichhane75/" target='_blank'><FaInstagram className='icon' /></Link>
                            <Link href="https://www.linkedin.com/in/biraj-lamichhane-746754277/" target='_blank'><FaLinkedin className='icon' /></Link>
                            <Link href="https://github.com/birajlamichhane75" target='_blank'><FaGithub className='icon'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;