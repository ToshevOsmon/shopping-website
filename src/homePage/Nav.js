import React from 'react';
import Logo from '../images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ResponsiveModal from './ResponsiveModal'


const Nav = () => {
    return (
        <>
            <nav className="navigation">
                <a href="#" className="nav-logo">
                    <img src={Logo} alt="Logotip image" />
                </a>
                <ResponsiveModal className="responsivemodel" />
                <div className="searchSec">
                    <form>
                        <input type="text"
                            className="searchInput"
                            placeholder="Search For Products, Brands, & Categories " />
                        <button className="searchBtn" type="button">
                            <SearchIcon />
                        </button>
                    </form>
                </div>

                <div className="icons">
                    <a href="#" className="bulimlar"><FavoriteBorderIcon /></a>
                    <a href="#" className="bulimlar"><PersonIcon /></a>
                    <a href="#" className="bulimlar"><AddShoppingCartIcon /></a>
                </div>

            </nav>
        </>
    );
};


export default Nav;