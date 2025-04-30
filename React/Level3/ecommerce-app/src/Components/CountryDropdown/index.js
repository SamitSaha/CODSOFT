import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);
    const [countryList, setcountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry = (index, country) => {
        setselectedTab(index);
        setisOpenModal(false); 
        context.setselectedCountry(country)
    }
    useEffect(() => {
        setcountryList(context.countryList);
    }, [context.countryList]); 

    const filterList = (e) => {

        const keyword = e.target.value.toLowerCase();
        if(keyword!== ""){
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            });          
            setcountryList(list);
        } else {
            setcountryList(context.countryList);
        }
    }
    return (
        <>
            <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className='lable'>Select Location</span>
                    <span className='name'>
                    {
                        context.selectedCountry!==" " ? context.selectedCountry.length>10 ? 
                         context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Select Locations'
                    }</span>
                    {/* <span className='name'>Narayanganj</span> */}
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            {/* Dialouge part starts here. */}

            <Dialog open={isOpenModal} className='locationModal' onClose={() => setisOpenModal(false)} TransitionComponent={Transition}>
                <h3 className='mb-0'>Select Your Location Here.</h3>
                <p>Enter you Delivery Address and you will the updates on the location.</p>
                <Button className='close_' onClick={() => setisOpenModal(false)}><IoClose /></Button>

                <div className="headerSearch w-100">
                    <input type='text' placeholder='Search your location here.' onChange={filterList} />
                    <Button><FaSearch /></Button>
                </div>


                <ul className='countryList mt-3'>

                    {/* context.countryList?.length !== 0 && context.countryList?.map((item, index) => { */}
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                                    className={`${selectedTab === index ? 'active' : ''}`}
                                >{item.country}</Button></li>
                            );
                        })
                    }


                    {/* <li><Button onClick={() => setisOpenModal(false)}>Narayanganj 2</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Chattagram 3</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Shylet 4</Button></li>
                    <li><Button onClick={() => setisOpenModal(false)}>Rajshahi 5</Button></li> */}


                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown
