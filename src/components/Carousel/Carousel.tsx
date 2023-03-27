import React, { memo, useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { CarouselItemType } from '../../types/Carousel';

import "./Carousel.scss";

interface IProps {
  images: CarouselItemType[];
}

interface ICarouselItemExtra extends CarouselItemType {
  percent : number
}

const CarouselItem = ({ imageSrc, imageAlt, percent } : ICarouselItemExtra) => {
  return (
    <div 
      className="carousel__item" 
      style={{ transform: `translateX(${percent}%)`}}>
      <img src={imageSrc} alt={imageAlt} className="carousel__img" />
    </div>
  )
}

const Carousel = ({ images }: IProps) => {
  const numberOfSlides = 3;
  const [transformPercentage, setTransformPercentage] = useState(0);

  useEffect(() => {
    var handle = window.setInterval(() => changeSlide("right"), 5000);
  
    return () => {
      window.clearInterval(handle);
    }
  }, [])

  const changeSlide = (direction : string) => {
    if (direction === "left") {
      // - (numberOfSlides * 100) to make sure it slides to last slide when clicked
      setTransformPercentage(prevPercentage =>
        ((prevPercentage - (numberOfSlides * 100)) + 100) % (numberOfSlides * 100)
      );
    } else if (direction === "right") {
      setTransformPercentage(prevPercentage =>
        (prevPercentage - 100) % (numberOfSlides * 100)
      );
    }
  }

  return (
    <div className="carousel__container">
      <div className="carousel__arrow left" onClick={() => changeSlide("left")}>
        <ArrowBackIosIcon fontSize="small" />
      </div>
      <div 
        className="carousel__list" 
      >
        {images.map((image, index) => {
          return (
            <CarouselItem 
              key={index}
              percent={transformPercentage}
              imageSrc={image.imageSrc} 
              imageAlt={image.imageAlt} 
            />
          )
        })}
      </div>
      <div 
        className="carousel__arrow right" 
        onClick={() => changeSlide("right")}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </div>
    </div>
  )
}

export default memo(Carousel);