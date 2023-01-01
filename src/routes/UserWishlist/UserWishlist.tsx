import React, { useState, useEffect } from 'react'
import { 
  BsInstagram, 
  BsTwitter, 
  BsTwitch, 
  BsShareFill, 
  BsGift,
  BsPeopleFill
} from "react-icons/bs";
import { IPrice } from '../../models/price';
import JSONData from "../../data/WishlistPage.json";
import WishlistCard from '../../components/WishlistCard/WishlistCard';

import "./UserWishlist.scss";

interface Data {
  id: number;
  image: string;
  price: IPrice;
  title: string;
  websiteBy: string;
}

const UserWishlist = () => {
  const [products, setProducts] = useState<Data[]>([]);

  useEffect(() => {
    //https://dummyjson.com/docs/products
    // fetch("https://dummyjson.com/products")
    //   .then(res => res.json())
    //   .then(data => {
    //     setProducts(data?.products)
    const productsList = JSONData.wishlist.products;
    setProducts(productsList);
    //   });
  }, [])
  

  return (
    <div className="userWishlist__container">
      <div className="userWishlist__background">
        <img 
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" 
          alt="user-background"
        />
      </div>
      <div className="userWishlist__about">
        <div className="userWishlist__profile">
          {/* Profile Picture */}
          <div className="userWishlist__profile-picture">
            <img 
              src="https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" 
              alt="" 
            />
          </div>
          {/* Description */}
          <div className="userWishlist__profile-description">
            <span className="userWishlist__profile-description-name">
              Name
            </span>
            <span className="userWishlist__profile-description-username">
              @username
            </span>
          </div>
        </div>
        <ul className="userWishlist__socials">
          {/* TODO Update Socials with Link (List? Blank = Not Shown) */}
          <li className="userWishlist__socials-icon">
            <BsTwitch />
            <span>My Twitch Channel</span>
          </li>
          <li className="userWishlist__socials-icon">
            <BsInstagram />
            <span>My Insta</span>
          </li>
          <li className="userWishlist__socials-icon">
            <BsTwitter />
            <span>My Twitter</span>
          </li>
          <li className="userWishlist__socials-icon">
            <BsShareFill />
          </li>
        </ul>
      </div>
      <div className="userWishlist__wishlist">
        <ul className="userWishlist__listOptions">
          <li className="userWishlist__listOptions-option">
            <BsGift />
            <span>Wishlist</span>
          </li>
          <li className="userWishlist__listOptions-option">
            <BsPeopleFill />
            <span>Gifters</span>
          </li>
        </ul>
        <div className="userWishlist__wishlist-text">
          <span className="userWishlist__subTitle">
            "Thanks for taking the time to check out my wishlist! These are things I feel might enhance my future adventures...stay tuned :-D" <strong>- Name</strong>
          </span>
        </div>
       
        <span className="text">All Gifts</span>
        <div className="userWishlist__wishlist-items">
          {/* TODO: Pagination Show 10 at a time? remove  */}
          {/* https://mui.com/material-ui/react-pagination/ */}
          {products.map(product => (
            <WishlistCard
              key={product.id}
              id={product.id} 
              thumbnail={product.image}
              price={product.price}
              title={product.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserWishlist