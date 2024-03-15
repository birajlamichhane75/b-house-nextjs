/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react';
import Topic from '../../../components/Topic';
import { HouseType, houseData } from '../../../lib/data';
import Homebox from '../../../components/Homebox';
import '../listing/lstyle.css'
import { useRouter } from 'next/navigation';
import { FilterDataType } from '../redux/slice';
import { useSelector } from 'react-redux';

type DataType = {
    filterData: {
        filter: FilterDataType[]
    }
}

const List = () => {
    const [buyRent, setbuyRent] = useState<string | undefined>();
    const [price, setprice] = useState<string | undefined>();
    const [location, setlocation] = useState<string | undefined>();
    const [property, setproperty] = useState<string | undefined>();

    let { push } = useRouter();
    let fData: FilterDataType = useSelector((data: DataType): FilterDataType => {

        return data.filterData.filter[0]
    })
    useEffect(() => {
        if (fData) {
            setbuyRent(fData.buyRent)
            setlocation(fData.location)
            setproperty(fData.property)
        }
    }, []);


    let filterdata = houseData.filter((e: HouseType) => {
        return e.location == fData?.location
    })

    return (
        <>
            <Topic topic="Listing" />
            <div className="main-l-container">
                <div className="filter">
                    <form className="filterbox">
                        <div className="fhead">
                            <p className="heading" style={{ fontSize: 20, color: 'orange' }}>Filter Section</p>
                        </div>
                        <div className="options">
                            <div className='choice'>
                                <label><h4>Buy</h4></label>
                                <select
                                    value={buyRent}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        setbuyRent(e.target.value)
                                    }}>
                                    <option>Buy</option>
                                    <option>Rent</option>
                                </select>
                            </div>

                            <div className='choice'>
                                <label><h4>Location</h4></label>
                                <select
                                    value={location}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        setlocation(e.target.value)
                                    }}>
                                    <option>New York</option>
                                    <option>Texas</option>
                                    <option>London</option>
                                    <option>Los Angelos</option>
                                </select>
                            </div>

                            <div className='choice'>
                                <label><h4>Property Type</h4></label>
                                <select
                                    value={property}
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        setproperty(e.target.value)
                                    }}>
                                    <option>Apartment</option>
                                    <option>Villa</option>
                                </select>
                            </div>

                            <div className="budget choice">
                                <label>Budget</label>
                                <div className='budget-bar'>
                                    <input type="range" />
                                    <div className="range">
                                        <p>$0</p>
                                        <p>$1000</p>
                                    </div>
                                </div>

                            </div>

                            <button type='submit' className='btn'>Search</button>
                        </div>
                    </form>

                </div>
                <div className="l-container">
                    {
                        fData ?
                            filterdata.map((e: HouseType, i: number) => {
                                return <div key={i} onClick={() => {
                                    push(`/listing/${e.slug}`)
                                }}><Homebox key={i} name={e.name} img={e.img} rent={e.rent} location={e.location} rooms={e.rooms} />
                                </div>
                            }) :
                            houseData.map((e, i) => {
                                return <div key={i} onClick={() => {
                                    push(`/listing/${e.slug}`)
                                }}>
                                    <Homebox name={e.name} img={e.img} rent={e.rent} location={e.location} rooms={e.rooms} />
                                </div>
                            })
                    }
                </div>
            </div>


        </>
    );
}

export default List;