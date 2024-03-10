import * as React from 'react';
import { HouseType, houseData } from '../../lib/data';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const Page = () => {
  redirect("/home")
  return ( 
    <>
    This is home page
    {/* {
      houseData.map((e:HouseType)=>{
        return <>
        <Image src={e.img} alt = "" height={100} width={100} />
        {
          e.innerimg.map((iimg:string)=>{
            return <>
            <Image src={iimg} alt = "" height={100} width={100} />
            </>
          })
        }
        <h2>{e.name}</h2>
        <h3>Rent: ${e.rent}</h3>
        </>
      })
    } */}
    </>
   );
}
 
export default Page;