import React from 'react'

import "./Home.scss";

const Home = () => {
  return (
    <div className="home__wrapper">
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