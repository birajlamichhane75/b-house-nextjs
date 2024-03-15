/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import * as React from 'react';
import Topic from '../../../components/Topic';
import Homebox from '../../../components/Homebox';
import { HouseType, houseData } from '../../../lib/data';
import '../home/hstyle.css'
import Image from 'next/image';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/navigation';

const home = () => {
    let {push} = useRouter()
    return (
        <><Topic topic="FIND THE PROPERTY FOR RENT" />
            <div className="outer-container">
                <p className = "heading" style={{ textAlign: 'center', textTransform: 'uppercase' }}>Featured Listing</p>
                <div className="container">
                    {
                        houseData.map((e: HouseType,i:number) => {
                            return <Homebox key = {i} name={e.name} img={e.img} rent={e.rent} location={e.location} rooms={e.rooms} />
                        })
                    }

                </div>

                <div className='search'><button className='btn' onClick={()=>{
                    push("/listing")
                }}>View All</button></div>
            </div>

            <div className="container-2">
                <p className="heading" style={{ textAlign: 'center', textTransform: 'uppercase' }}>What are you looking </p>

                <div className="img-box">
                    <div className="box1 box">
                        <Image src="https://i.pinimg.com/originals/61/c8/23/61c823a8bddb7875d926290766df8d0a.jpg" alt="house" height={500} width={500} />
                    </div>
                    <div className="box2 box">
                        <Image src="https://greenhome-next.vercel.app/_next/image?url=%2Fphotos%2Fproperty3.jpg&w=1920&q=75" alt="house" height={500} width={500} />
                    </div>
                    <div className="box3 box">
                        <Image src="https://wallpapercave.com/wp/wp2406726.jpg" alt="house" height={500} width={500} />
                    </div>
                    <div className="box4 box">
                        <Image src="https://th.bing.com/th/id/OIP.WdAAolm---1ePIqNkp88bwHaE9?rs=1&pid=ImgDetMain" alt="house" height={500} width={500} />
                    </div>
                </div>
            </div>

            <div className="container-3">
            <p className="heading" style={{ textAlign: 'center', textTransform: 'uppercase' }}>Our Client</p>
                <div className="happyclient">
                    <p style={{fontSize:19,textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Recusandae similique tempore maiores saepe dolorem debitis aliquam culpa,
                        neque explicabo necessitatibus accusamus ex odit labore officia ipsum temporibus
                        iusto aut obcaecati distinctio adipisci iste quae?
                    </p>
                    <div className="clientdets">
                        <h4 className='client' style={{color:"rgb(255, 156, 156)"}}>Evan Sebastian</h4>
                        <p style={{fontSize:16,color:"gray"}}>Founder of ABC</p>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default home;