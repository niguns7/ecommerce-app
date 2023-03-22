import React from 'react'
import Tdata from './Tdata'
import Slider from "react-slick";


const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const TopCart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
    <Slider {...settings}>
        {
          Tdata.map((value,index) => {
            return(
              
              <div className="box product" key={index}>
                <div className="nametop d_flex">
                  <span className='teft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className="img">
                  <img src={value.cover} alt="" />
                </div>
              </div>
              
            )
          })}
          </Slider>
    </>
  )
}

export default TopCart