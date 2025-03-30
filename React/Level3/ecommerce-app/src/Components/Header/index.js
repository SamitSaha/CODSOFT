import React from 'react'
import Logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-purple">
            <div className="container">
                <p className="mb-0 mt-0 text-center">Due to 2025 <b>Eid Vacation</b> is ongoing on, orders get 30% discount for unlimitate purchase. </p>
            </div>
        </div>

        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="logoWrapper d-flex align-items-center col-sm-2">
                        <Link to={'/'}> <img src={Logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="part2 col-sm-10 d-flex align-items-center">
                        <Button className="countryDrop">
                            Your Location 
                        </Button>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
