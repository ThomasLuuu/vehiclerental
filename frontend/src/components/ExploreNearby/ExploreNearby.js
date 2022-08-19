import Card from './Card';
import Dummy_Data from './dummydata.json';
import './ExploreNearby.css'
function ExploreNearby() {
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

export default ExploreNearby;
