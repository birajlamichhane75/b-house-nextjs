"use client"
type TopicType = {
    topic:string,
}
import { addFilter } from '@/app/redux/slice';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const Topic = ({topic}:TopicType) => {
    let pathname = usePathname();
    const [buyRent, setbuyRent] = useState<string | undefined >();
    const [location, setlocation] = useState<string | undefined >();
    const [property, setproperty] = useState<string | undefined >();
    const [budget, setbudget] = useState<string | undefined >();
    let dispatch = useDispatch();
    let {push} = useRouter();

    let submitHandler = (e:React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault();
       if(!buyRent || !location || !property || !budget){
        alert("Not Enough Filter")
        return
       }
       else{
        dispatch(addFilter({buyRent,location,property,budget}))
        push("/listing")

       }
        
    }
    return ( 
        <>
        <div className="topic">
            <h3 style={{fontWeight:600,width:500,textAlign:'center'}}>{topic}</h3>
            {
                pathname == "/home"?
                <form className="searchbox" onSubmit={submitHandler}>
                    <select 
                    value = {buyRent}
                    onChange={(e)=>{
                        setbuyRent(e.target.value)
                    }}>
                        <option>Buy</option>
                        <option>Rent</option>
                    </select>

                    <select 

                    value = {location || ""}
                    onChange={(e)=>{
                        setlocation(e.target.value)
                        
                    }}>
                        <option>Location</option>
                        <option>New York</option>
                        <option>Texas</option>
                        <option>London</option>
                        <option>Los Angelos</option>
                    </select>

                    <select
                    value={property}
                    onChange={(e)=>{
                        setproperty(e.target.value)
                    }}>
                        <option>Property Type</option>
                        <option>Apartment</option>
                        <option>Villa</option>
                    </select>

                    <select
                    value={budget}
                    onChange={(e)=>{
                        setbudget(e.target.value)
                    }}>
                        <option>Rent-Budget</option>
                        <option>Below $600</option>
                        <option>Below $1000</option>
                    </select>

                    <div className='search'><button type='submit' className='btn'>Search</button></div>
                </form>
                :null
            }
        </div>
        </>
     );
}
 
export default Topic;