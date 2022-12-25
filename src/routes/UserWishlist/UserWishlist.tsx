import React from 'react'
import { 
  BsInstagram, 
  BsTwitter, 
  BsTwitch, 
  BsShareFill, 
  BsGift
} from "react-icons/bs"

import "./UserWishlist.scss";

const UserWishlist = () => {
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
            <BsInstagram />
            <span>My Insta</span>
          </li>
          <li className="userWishlist__listOptions-option">
            <BsTwitter />
            <span>My Twitter</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UserWishlist