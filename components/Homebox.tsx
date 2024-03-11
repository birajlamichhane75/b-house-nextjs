/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import Image from 'next/image';
import Link from 'next/link';
import  React, { useEffect, useRef } from 'react';
import { PiHeartFill } from "react-icons/pi";
import { HouseType } from '../lib/data';
import { usePathname } from 'next/navigation';
import { FaHouseCircleCheck } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const Homebox = ({name,img,rent,rooms,location}:HouseType) => {
    let boxRef = useRef<HTMLInputElement>(null)
    let pathname = usePathname();
    let {push} = useRouter()

    useEffect(() => {
        if(pathname == "/book"){
            if(boxRef.current){
                boxRef.current.style.scale = ".7"
            }
        }
    }, []);
    return (
        <>
                <div ref ={boxRef}  className="housebox" onClick={()=>{
                    push("/listing")
                }}>
                    <div  className="himgbox">
                        <Image src={img} alt="house" height={500} width={500} />
                        <h3 className="price">${rent}</h3>
                        <div className="heartbox">
                            {
                                pathname == "/book" ?<FaHouseCircleCheck className='book'/>:<PiHeartFill className='heart' />
                            }
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
        </>
    );
}

export default Homebox;