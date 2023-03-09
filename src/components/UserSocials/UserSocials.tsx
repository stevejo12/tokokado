import React from 'react'
import { BsInstagram, BsShareFill, BsTwitch, BsTwitter } from 'react-icons/bs'
import { ISocials } from '../../models/socials'

import "./UserSocials.scss";

interface UserSocialsProps {
  socials?: ISocials;
}

const UserSocials = ({ socials }: UserSocialsProps) => {
  return (
    <ul className="userWishlist__socials">
      {socials?.twitch && (
        <li className="userWishlist__socials-icon">
          <BsTwitch />
          <span>My Twitch Channel</span>
        </li>
      )}
      {socials?.instagram && (
        <li className="userWishlist__socials-icon">
          <BsInstagram />
          <span>My Insta</span>
        </li>
      )}
      {socials?.twitter && (
        <li className="userWishlist__socials-icon">
          <BsTwitter />
          <span>My Twitter</span>
        </li>
      )}
      <li className="userWishlist__socials-icon">
        <BsShareFill />
      </li>
    </ul>
  )
}

export default UserSocials