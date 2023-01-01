import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useCurrency } from '../../context/CurrencyContext';
import { IPrice } from '../../models/price';

import "./WishlistCard.scss";

interface IProps {
  id: number;
  thumbnail: string;
  price: IPrice;
  title: string;
}

const WishlistCard = ({ thumbnail, title, price }: IProps) => {
  const { currency } = useCurrency();

  return (
    <Card className="wishlistCard__container">
      <div className="wishlistCard__image-container">
        <CardMedia
          className="wishlistCard__image"
          image={thumbnail}
        />
      </div>
      <CardContent>
        <Typography>
          {title}
        </Typography>
        <Typography>
          by amazon.com
        </Typography>
        <Typography>
          {currency} {price[currency]}
        </Typography>
      </CardContent>
      <CardActions>
        <button className="wishlistCard__button">Add to Cart</button>
      </CardActions>
    </Card>
  )
}

export default WishlistCard