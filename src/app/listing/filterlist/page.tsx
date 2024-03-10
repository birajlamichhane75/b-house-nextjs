"use client"
import { FilterDataType } from '@/app/redux/slice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { HouseType, houseData } from '../../../../lib/data';
import Homebox from '../../../../components/Homebox';

type DataType = {
    filterData: {
        filter: FilterDataType[]
    }
}

const FilterList = () => {
    let fData: FilterDataType = useSelector((data: DataType): FilterDataType => {
        return data.filterData.filter[0]
    })

    let filterdata = houseData.filter((e: HouseType) => {
        return e.location == fData.location
    })


return (
    <>
        <h1>This is filter list</h1>
        {
            filterdata ? filterdata.map((e:HouseType,i:number)=>{
                return <Homebox key={i} name={e.name} img={e.img} rent={e.rent} location={e.location} rooms={e.rooms} />
            }) :
                <><h2>No Data</h2></>
        }
    </>
);
}

export default FilterList;