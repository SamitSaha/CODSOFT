import React, { useContext } from 'react'
import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import SearchBox from './SearchBox';
import UserCart from './UserCart';
import Navigation from './Navigation';
import { MyContext } from '../../App';

// import { FaSearch } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import Button from '@mui/material/Button';
// import { IoMenu } from "react-icons/io5";
const Header = () => {

  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
          <div className="container">
            <p className="mb-0 mt-0 text-center">Due to 2025 <b>Eid Vacation</b> is ongoing on, orders get 30% discount for unlimitate purchase. </p>
          </div>
        </div>

        <header className="header">
          <div className="container">
            <div className="row">
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={'/'}> <img src={Logo} alt="Logo" />
                </Link>
              </div>

              <div className="part2 col-sm-10 d-flex align-items-center">

                {/* Country drop down api connection */}
                {context.countryList.length !== 0 && <CountryDropdown />}

                {/* Header Search  Here */}
                <SearchBox />
                
                {/* User Cart  Here */}
                <UserCart />

              </div>

            </div>
          </div>
        </header>

        {/* Navigation bar here */}
        <Navigation />

      </div>
    </>
  )
}

export default Header
