import { useEffect, useState , Component } from 'react';
import { useHistory } from 'react-router-dom';
import bg from '../../images/bg.webp';
import background from '../../images/background.jpg';
import * as uiService from '../../services/ui';
import { FaMap  } from "react-icons/fa";
class Home extends Component {
  
   history = () => useHistory();

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
  componentDidMount() {
    window.onload = function () {
          uiService.showDarkHeader();
        }
    this.getLocation();
  };
  render(){
    return (
      <div className="home">
        <img src={background} alt="bg" />
        <div className="home__title">
          <h1>Could not find the place to go?</h1>
          <h1>Great!</h1>
          <div className="home__button-container">
            <button onClick={event =>  window.location.href='/map'}>Show Map <FaMap /></button>
          </div>
        </div>
      </div>
    )
  }

};

export default Home;