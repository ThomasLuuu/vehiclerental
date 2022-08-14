import React,{Component} from 'react';
import Card from './Card';
import Dummy_Data from './dummydata.json';
import './ExploreNearby.css'
class ExploreNearby extends Component {
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
  render(){

    return (
      <div id ="ExploreNearby">
        <h2 >Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid cols-4">
          
          {Dummy_Data.map((data) => {
            return <Card key={data.img} img={data.img} url={data.img} location={data.location} distance={data.distance} />;
          })}
        </div>
      </div>
    );
  }
}
export default ExploreNearby;
