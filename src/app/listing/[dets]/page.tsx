"use client"
import React, { useEffect, useState } from 'react';
import Topic from '../../../../components/Topic';
import Image from 'next/image';
import "../[dets]/detstyle.css"
import { FaBed } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { TbGardenCart } from "react-icons/tb";
import { FaKitchenSet } from "react-icons/fa6";
import { GiFireflake } from "react-icons/gi";
import { HouseType, houseData } from '../../../../lib/data';

type ParamsType = {
    dets: string
}

const Details = ({ params }: { params: ParamsType }) => {
    const [housedets, sethousedets] = useState<HouseType | null>(null);

    useEffect(() => {
        const datafound = houseData.find((e: HouseType) => e.slug === params.dets);
        if (datafound) {
            sethousedets(datafound);
        }
    }, [params.dets]);

    return (
        <>
            {housedets && <Topic topic={housedets.name} />}
            <div className='detail-page'>
                {housedets && (
                    <div className="house-look">
                        <div className="d-top">
                            <div className="d-rent">
                                <p>Rent</p>
                                <div className='d-rentprice'><h3>${housedets.rent}</h3><span><p>/month</p></span></div>
                            </div>
                            <div className="d-book">
                                <button className='btn'>Book Now</button>
                            </div>
                        </div>

                        <div className="d-pic">
                            <div className="d-img d-img1">
                                <Image src={`${housedets.innerimg?.[2]}`} alt="d-image" height={500} width={600}/>
                            </div>
                            <div className="d-img d-img2">
                                <Image src={`${housedets.innerimg?.[0]}`} alt="d-image" height={500} width={500} />
                            </div>
                            <div className="d-img d-img3">
                                <Image src={`${housedets.innerimg?.[1]}`} alt="d-image" height={500} width={500} />
                            </div>
                        </div>
                    </div>
                )}

                {housedets && (
                    <div className="house-info">
                        <div className="overview">
                            <p className = "heading" style={{ fontSize: 22, textTransform: 'uppercase' }}>Overview</p>
                            <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, placeat veritatis?
                                Placeat, tempore, mollitia assumenda corporis reprehenderit iusto a natus soluta fugiat
                                similique at quia voluptates quam totam architecto repellendus doloremque ipsa alias quibusdam
                                voluptas molestias sapiente suscipit tempora. Autem.
                            </p>
                        </div>
                        <div className="antities">
                            <p className = "heading" style={{  fontSize: 22, textTransform: 'uppercase' }}>AMENITIES</p>
                            <div className="feature-list">
                                <li><span><FaBed className='icon' /></span>{housedets.rooms.bed} Bedroom</li>
                                <li><span><FaBath className='icon' /></span>{housedets.rooms.bath} Bathroom</li>
                                <li><span><FaPersonSwimming className='icon' /></span>Swimming Pool</li>
                                <li><span><TbGardenCart className='icon' /></span>Garden</li>
                                <li><span><FaKitchenSet className='icon' /></span>Kitchen</li>
                                <li><span><FaCarAlt className='icon' /></span>Car Parking</li>
                                <li><span><GiFireflake className='icon' /></span>Central heating</li>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Details;
