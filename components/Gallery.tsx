import Image from 'next/image';
import * as React from 'react';

type GalleryType = {
    img:string,
    name:string,
    location:string
}
const GalleryBox = ({img,name,location}:GalleryType) => {
    return ( 
        <>
        <div className="gallery-box">
            <div className="img-box">
                <Image src={img} 
                alt ="pic" height={500} width={500} />
            </div>
            <div className="img-info">
                <p style={{fontSize:20,fontWeight:500}}>{name}</p>
                <p style={{opacity:.6}}>{location}</p>
            </div>
        </div>
        </>
     );
}
 
export default GalleryBox;