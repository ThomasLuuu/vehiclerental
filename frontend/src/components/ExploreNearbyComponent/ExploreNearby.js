import Card from "./Card";
import Dummy_Data from "./dummydata.json"

function ExploreNearby(){
  return (
    <div className="ExploreNearby">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid cols-4">

         <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
    
          {Dummy_Data.map(data => {
          return(
            <Card key={data.img} img={data.img} url={data.img} location={data.location} distance={data.distance}/>
                      )
         })}
         

      </div>
    </div>
  );
}
export default ExploreNearby;