import React from 'react';
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const options = {
  burgerColor: "#001D6E",
  burgerColorHover: "#6CB1EE",
  logo,
  logoWidth: "20vmax",
  logoHoverSize: "10px",
  logoHoverColor: "#144875",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Margin: "1vmax",
  link1Color: "#F9F2ED",
  link1ColorHover: "#6CB1EE",
  navColor1:"#000000",
  navColor2:"#000000",
  navColor3:"#000000",
  navColor4:"#000000",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  searchIcon: true,
  FaShoppingCart: "/search",
  SearchIconElement: FaSearch,
  searchIconColor: "#F9F2ED",
  searchIconColorHover: "#6CB1EE",
  searchIconSize: "2vmax",
  profileIcon: true,
  profileIconUrl: "/login",
  ProfileIconElement: FaUserAlt,
  profileIconColor: "#F9F2ED",
  profileIconColorHover: "#6CB1EE",
  profileIconSize: "2vmax",
  cartIcon: true,
  cartIconUrl: "/",
  CartIconElement: FaShoppingCart,
  cartIconColor: "#F9F2ED",
  cartIconColorHover: "#6CB1EE",
  cartIconMargin: "1vmax",
  cartIconSize: "2vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;