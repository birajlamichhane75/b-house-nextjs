import * as React from 'react';
import Topic from '../../../components/Topic';
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <Topic topic="Contact" />
            <div className='c-container'>
                <div className="ctop">
                    <div className="contact-info">
                        <IoLocation className='icon' />
                        <div className="contact-text">
                            <p className='contact-title'>Address</p>
                            <p>Phedi, Changunarayan-6</p>
                            <p>Bhaktapur, Nepal</p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <MdEmail className='icon' />
                        <div className="contact-text">
                            <p className='contact-title'>Email Address</p>
                            <p>birajlamichhane57@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <FaPhoneSquareAlt className='icon' />
                        <div className="contact-text">
                            <p className='contact-title'>Call Us</p>
                            <p>+977 9768407902</p>
                        </div>
                    </div>
                </div>

                <div className="c-btm">
                    <p className = "heading" style={{ textAlign: 'center', fontSize: 25, textTransform: 'uppercase', marginBottom:"3rem"}}>Message Us</p>
                    <form className="c-bottom">
                        <input className="form-dets" type="text" placeholder='Name' />
                        <input className="form-dets" type="text" placeholder='Email' />
                        <input className="form-dets" type="text" placeholder='Phone' />
                        <select className="form-dets" >
                            <option>Buy</option>
                            <option>Sell</option>
                        </select>
                        <textarea className='form-dets form-textarea' placeholder='Message'></textarea>
                        <button className='btn' style={{margin:'3rem auto'}}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;