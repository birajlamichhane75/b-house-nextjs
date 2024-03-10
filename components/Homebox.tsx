import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { PiHeartFill } from "react-icons/pi";
import { HouseType } from '../lib/data';
const Homebox = ({name,img,rent,rooms,location}:HouseType) => {
    return (
        <>
            <Link href="/listing">
                <div className="housebox">
                    <div className="himgbox">
                        <Image src={img} alt="house" height={500} width={500} />
                        <h3 className="price">${rent}</h3>
                        <div className="heartbox">
                            <PiHeartFill className='heart' />
                        </div>
                    </div>

                    <div className="hbottom">
                        <div className="htext">
                            <h4>{name}</h4>
                            <p>{location}</p>
                        </div>
                        <div className="hinfo">
                            <li>{rooms.bed} Bed</li>
                            <li>{rooms.bath} Bath</li>
                            <li>{rent}/M</li>
                            <li><button>Details</button></li>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default Homebox;