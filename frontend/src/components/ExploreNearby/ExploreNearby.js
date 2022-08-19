import React, {useState,Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Dummy_Data from "./dummydata.json";
import './ExploreNearby.css';
import ModalFilter from './Modal';

class ExploreNearby extends Component {
  handleOnClose = () => setShowModal(false)
    
  getLocation = function(){

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const geoApi = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      fetch(geoApi).then((response) => response.json())
        .then(data => {
          console.log(data.principalSubdivision)
          console.log(data)});
    }

    const error = (error) => {
      console.log(error)
    }

    navigator.geolocation.getCurrentPosition(success,error);
  };
  componentDidMount = () => {
    this.getLocation();
  };

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    
      <div className="ExploreNearby">
        <div className="Button">
          <h2 className="">Expore Nearby</h2>
          {/* <button onClick={() => setShowModal(true)} className="bg-red-50 text-black px-3 py-1 rounded-lg hover:scale-95 transition text-xl" >
            <span className="inline-flex justify-center	">
            <svg className="h-7 w-7 pr-2 pt-1 " viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
              <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
            <span className = "">Filters</span>
            </span>
          </button> */}
        </div>
        <Slider {...settings}>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid cols-4"> */}
        {Dummy_Data.map((item) => (
        <div className="card cursor-pointer ">
         <div className="card-top">
           <img  src={item.img} alt={item.location}/>
           <h1>{item.location}</h1>
          </div>
          <div className="card-bottom"> 
            <h3>{item.distance}</h3>
          </div>
        </div>
        ))}
        {/* </div> */}
        
        </Slider>
      </div>
      
    );
  }
}

export default ExploreNearby;
