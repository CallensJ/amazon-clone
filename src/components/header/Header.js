import React from "react";
import "./Header.scss";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        className="header__logo"
        alt="logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
           <span className="header__optionLineOne">
            Hello Guest
           </span>
           <span className="header__optionLineTwo">
            Sign in
           </span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">
            Returns
           </span>
           <span className="header__optionLineTwo">
            & Orders
           </span>
        </div>
        <div className="header__option">
        <span className="header__optionLineOne">
            Your
           </span>
           <span className="header__optionLineTwo">
            Prime
           </span>
        </div>
        <div className="header__optionBasket">
           <ShoppingBasketIcon /> 
           <span  className="header__optionLineTwo header__basketCount">panier</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
