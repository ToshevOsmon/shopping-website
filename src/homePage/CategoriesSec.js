import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const CategoriesSec = () => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <div className="categories">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <MenuIcon className="menuIcon" />
                    All categories
                </DropdownToggle>
                <DropdownMenu>

                    <DropdownItem>Menu1</DropdownItem>
                    <DropdownItem>Menu2</DropdownItem>
                    <DropdownItem>Menu3</DropdownItem>
                    <DropdownItem id="responsiveIcon">
                        <div className="icons">
                            <a href="#" className="bulimlar"><FavoriteBorderIcon /></a>
                            <a href="#" className="bulimlar"><PersonIcon /></a>
                            <a href="#" className="bulimlar"><AddShoppingCartIcon /></a>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ul className="links">
                <li className="link_item">
                    <a herf="#" className="link active">Home</a>
                </li>
                <li className="link_item">
                    <a herf="#" className="link ">New arrivals</a>
                </li>
                <li className="link_item">
                    <a herf="#" className="link ">Trending</a>
                </li>
                <li className="link_item">
                    <a herf="#" className="link ">Deals for you</a>
                </li>
                <li className="link_item">
                    <a herf="#" className="link ">Discounts</a>
                </li>
                <li className="link_item">
                    <a herf="#" className="link ">Weekly offers</a>
                </li>
                <li className="link_item">
                    <a herf="#" className="link ">Become a ventor</a>
                </li>
            </ul>

        </div>
    );
};


export default CategoriesSec;