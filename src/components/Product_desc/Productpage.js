import React from "react";
import "./Productdescpage.css";
import img from "../../assets/diffrent/23.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidecontents from "./SideContents/Sidecontents";
import Productdetails from "./Product_details/Productdetails";


const Productdescpage = () => {
  // const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //   };

  return (
    <>
      <div className="prodectdesc-container">
        <div className="prodectdesc-items">
          <div className="prodectdesc-contents">
            <div className="product-image">
              <img src={img} alt="product" />

              <div className="product-img-slide">
                {/* <Slider {...settings}> */}
                <img src={img} alt="product" />
                <img src={img} alt="product" />
                <img src={img} alt="product" />
                <img src={img} alt="product" />
                {/* </Slider> */}
              </div>
            </div>

            <div className="product-description">
              <span>Q12 Smartwatch For Kids</span>
              <div className="product-rating">
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <label> 8 ratings</label> <label> | 15 answer questions</label> 
              </div>

              <div className="product-brand">
                <label>Brand: Mallard | Explore more with mallard</label>
              </div>

              <div className="product-pricing">
                <h2>Rs. 2999</h2>
                <label>Rs.4999</label> <spam>40%</spam>
              </div>

              <div className="product-color-family">
                <label> Color Family :</label>
                <div className="product-colors">
                  <img src={img} alt="product" />
                  <img src={img} alt="product" />
                  <img src={img} alt="product" />
                </div>
              </div>

              <div className="product-qty">
                <label> Quantity :</label>
                <button onClick={null} className="minusbutton">
                  <i className="fa fa-minus"></i>
                </button>
                <span>1</span>
                <button onClick={null} className="plusbutton">
                  <i className="fa fa-plus"></i>
                </button>
              </div>

              <div className="purchase-buttons">
                        <button className='cart-button'> <span>Add to Cart</span> </button>
                        <button className='buy-button'> <span>Buy Now</span> </button>
              </div>
            </div>
          </div>
          <Sidecontents />
        </div>
        <Productdetails />
      </div>
    </>
  );
};

export default Productdescpage;
