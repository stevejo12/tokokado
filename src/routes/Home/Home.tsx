import React, { useEffect } from 'react'
import Carousel from '../../components/Carousel/Carousel';
import CarouselData from "../../data/Carousel.json";
import { CarouselItemType } from '../../types/Carousel';

import "./Home.scss";

const Home = () => {
  const sampleData: CarouselItemType[] = JSON.parse(JSON.stringify(CarouselData.images));
  

  return (
    <div className="home__wrapper">
      <Carousel images={sampleData}/>
      <a href="/register">
        <img
          className="home__image"
          src="https://images.pexels.com/photos/5709063/pexels-photo-5709063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="home-carousell" 
        />
      </a>
    </div>
  )
}

export default Home