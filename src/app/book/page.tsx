"use client"
import * as React from 'react';
import Topic from '../../../components/Topic';
import { useSelector } from 'react-redux';
import { UserType } from '../redux/userslice';
import Homebox from '../../../components/Homebox';
import { BsBookmarkCheckFill } from "react-icons/bs";
import "./bstyle.css"
import { useRouter } from 'next/navigation';



const Book = () => {
    type UserDataType = {
        userData: {
            user: UserType[]
        }
    }

    let userDets: UserType[] = useSelector((data: UserDataType): UserType[] => {
        return data.userData.user

    })
    let {push} = useRouter()


    return (
        <>
            <Topic topic="Book" />
            <div className="book-container">
                <h2 className='heading'>Booked House</h2>
                { userDets.length == 0?<><h5>You have not booked any house yet!</h5></>:
                    userDets.slice(0).reverse().map((e, i) => {
                        return <div key={i} className='book-house'>
                            <Homebox img={e.hImg} name={e.hName} location={e.hLocation} rent={e.hRent} rooms={e.hRooms} />
                            <div className="houseuser-info">
                            <div className="userdets">
                                <h4>{e.name}</h4>
                                <p style={{fontSize:17, color:"rgb(100, 100, 100)"}}>{e.email}</p>
                                <p style = {{fontSize:17, color:"rgb(130, 130, 130)"}}>{e.phone}</p>
                            </div>
                            <div className="bookicon icon">
                                <BsBookmarkCheckFill className='booked' />
                            </div>
                            </div>
                        </div>

                    })
                }
                <button className='explore' onClick={()=>{
                    push('/listing')
                }}>Explore Houses</button>
            </div>
        </>
    );
}

export default Book;