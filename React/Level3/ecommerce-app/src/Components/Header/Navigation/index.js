import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";

const Navigation = () => {

    const [isOpenSidebarVal, setisOpenSidebarVal] = useState(true);
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 navPart1">
                            <div className="catWrapper">
                                <Button className='allCatTab align-items-center' onClick={()=>setisOpenSidebarVal(!isOpenSidebarVal)}>
                                    <span className='icon1 mr-2'><IoMenu /></span>
                                    <span className='text'>ALL CATEGORIES</span>
                                    <span className='icon2 ml-2'><FaAngleDown /></span>
                                </Button>
                                <div className={`sidebarNav ${isOpenSidebarVal ===  true ? 'open' : '' }`}>
                                <ul>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                    <li><Link to="/"><Button>SubProduct</Button></Link></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9 navPart2 d-flex align-items-center">
                            <ul className="list list-inline">
                                <li className="list-inline-item"><Link to="/"> <Button><FaHome /> &nbsp; Home </Button> </Link></li>
                                <li className="list-inline-item">
                                    <Link to="/"> <Button><MdOutlineProductionQuantityLimits /> &nbsp; Product 1</Button> </Link>
                                    <div className="submenu">
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"> <Button><MdOutlineProductionQuantityLimits /> &nbsp; Product 2</Button> </Link>
                                    <div className="submenu">
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"> <Button><MdOutlineProductionQuantityLimits /> &nbsp; Product 3</Button> </Link>
                                    <div className="submenu">
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"> <Button><BiMessageDetail />  &nbsp; Details</Button> </Link>
                                    <div className="submenu">
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"> <Button><BiSolidUserDetail /> &nbsp; About Us</Button> </Link>
                                    <div className="submenu">
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/"> <Button><IoMdContacts /> &nbsp; Contact</Button> </Link>
                                    <div className="submenu">
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                        <Link to="/"><Button>SubProduct</Button></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
