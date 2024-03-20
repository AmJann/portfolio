import React from 'react'
import '../css/projects.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import restarauntFinder from '../images/projects/restaraunt-finder.png';

import Slider from 'react-slick';

function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          adaptiveHeight:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div>
        <h3 className='stamp'>Projects</h3>

    </div>
    <div className='carousel'>
      <Slider {...settings}>
      <div className="box">

        <img src={restarauntFinder} style={{ width: '100%', height: 'auto' }} className='projectImg' alt='home page of restaraunt finder app'></img>
        <h5>Restarunt Finder</h5>
      </div>
      <div className="box">
        <h3>2</h3>
      </div>
      <div className="box">
        <h3>3</h3>
      </div>
      <div className="box">
        <h3>4</h3>
      </div>
      <div className="box">
        <h3>5</h3>
      </div>
      </Slider>
    </div>
    </>
  )
}

export default Projects