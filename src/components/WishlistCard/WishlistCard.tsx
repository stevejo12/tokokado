import React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./WishlistCard.scss";

interface IProps {
  id: number;
  thumbnail: string;
  price: number;
  title: string;
  // key: any;
}

const WishlistCard = ({ thumbnail, title, price }: IProps) => {
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
          IDR {price}
        </Typography>
      </CardContent>
      <CardActions>
        <button className="wishlistCard__button">Add to Cart</button>
      </CardActions>
    </Card>
  )
}

export default WishlistCard