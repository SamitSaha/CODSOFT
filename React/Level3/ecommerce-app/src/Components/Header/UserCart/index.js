import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const UserCart = () => {
    return (
        <>
            <div className="part3 d-flex align-items-center">
                <button className='circle mr-3'><FaRegUser /></button>
                <div className="ml-uato d-flex align-items-center cartTab">
                    <span className="price">$100.00</span>
                    <div className="position-relative ml-3">
                        <button className='circle '><IoCartOutline /></button>
                        <span className="count d-flex align-items-center justify-content-center">1</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCart
