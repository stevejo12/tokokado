import React, { useState, useEffect } from 'react'
import { 
  BsGift,
  BsPeopleFill
} from "react-icons/bs";
import { IPrice } from '../../models/price';
import { ISocials } from '../../models/socials';
import JSONData from "../../data/WishlistPage.json";
import WishlistCard from '../../components/WishlistCard/WishlistCard';

import "./UserWishlist.scss";
import UserSocials from '../../components/UserSocials/UserSocials';

interface Data {
  id: number;
  image: string;
  price: IPrice;
  title: string;
  websiteBy: string;
}

interface IUser {
  username: string;
  name: string;
  profilePicture: string;
  isOwner: boolean;
  socials: ISocials;
}

const UserWishlist = () => {
  const [user, setUser] = useState<IUser>();
  const [products, setProducts] = useState<Data[]>([]);
  const [notes, setNotes] = useState("");
  const [userSocials, setUserSocials] = useState<ISocials>();

  useEffect(() => {
    const userInfo = JSONData.user;
    setUser(userInfo);
    const productsList = JSONData.wishlist.products;
    setProducts(productsList);
    const note = JSONData.wishlist.notes;
    setNotes(note);
    const socialsList = JSONData.user.socials;
    setUserSocials(socialsList);
  }, [])
  

  return (
    <div className="userWishlist__container">
      <div className="userWishlist__background">
        <img 
          className="userWishlist__background-picture"
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80" 
          alt="user-background"
        />
      </div>
      <div className="userWishlist__about max-container">
        <div className="userWishlist__profile">
          {/* Profile Picture */}
          <div className="userWishlist__profilePicture">
            <img 
              className="userWishlist__profilePicture-img"
              src={user?.profilePicture}
              alt="user-profilePicture" 
            />
          </div>
          {/* Description */}
          <div className="userWishlist__profile-description">
            <span className="userWishlist__profile-description-name">
              {user?.name || "Name"}
            </span>
            <span className="userWishlist__profile-description-username">
              {`@${user?.username}` || "@username"}
            </span>
          </div>
        </div>
        <UserSocials socials={userSocials} />
      </div>
      <div className="userWishlist__wishlist max-container">
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
            {`"${notes}"`} <strong>- {user?.name || "Name"}</strong>
          </span>
        </div>
       
        <div className="userWishlist__wishlistTitle">
          <span className="userWishlist__wishlistTitle-text">All Gifts</span>
        </div>
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
              websiteBy={product.websiteBy}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserWishlist