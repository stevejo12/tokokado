import React, { memo, useState } from 'react';
import { CarouselItemType } from '../../types/Carousel';

interface IProps {
  images: CarouselItemType[];
}

const CarouselItem = ({ imageSrc, imageAlt } : CarouselItemType) => {
  return (
    <li className="carousel__item">
      <img src={imageSrc} alt={imageAlt} className="carousel__img" />
    </li>
  )
}

// https://dominicarrojado.com/posts/how-to-create-your-own-swiper-in-react-and-typescript-with-tests-part-1/
const Carousel = ({ images }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="carousel__container">
      <ul className="carousel__list">
        {images.map((image, index) => {
          return (
            <CarouselItem 
              key={index} 
              imageSrc={image.imageSrc} 
              imageAlt={image.imageAlt} 
            />
          )
        })}
      </ul>
    </div>
  )
}

export default memo(Carousel);