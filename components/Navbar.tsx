import Link from 'next/link';
import * as React from 'react';

const Navbar = () => {
    return ( 
        <>
        <div className="nav">
            <div className="nleft">
                <h3>B-Home</h3>
            </div>
            <div className="nright">
                <ul>
                    <li><Link href = "/home">Home</Link></li>
                    <li><Link href = "/listing">Listing</Link></li>
                    <li><Link href = "/gallery">Gallery</Link></li>
                    <li><Link href = "/contact">Contact</Link></li>
                </ul>
                <div className="buttons">
                <Link href="/book"><button className='nav-btn-l nav-btn'>Book</button></Link>
                <Link href="/book"><button className='nav-btn-r nav-btn'>Explore</button></Link>
                </div>

            </div>
        </div>
        </>
     );
}
 
export default Navbar;