import * as React from 'react';
import Topic from '../../../components/Topic';
import GalleryBox from '../../../components/Gallery';
import { HouseType, houseData } from '../../../lib/data';

const Gallery = () => {
    return (
        <>
            <Topic topic="Gallery" />
            <div className="g-container">
                    
                {
                    houseData.map((e,i)=>{
                        return <GalleryBox key={i} img={e.img} name={e.name} location={e.location} />
                    })
                }
                    {houseData.map((e: HouseType, i: number) => (
                    e.innerimg?.map((inner: string, j: number) => {
                        return <GalleryBox key={`${i}-${j}`} img={inner} name={e.name} location={e.location} />
                    })
                ))}
                   
            </div>
        </>
    );
}

export default Gallery;