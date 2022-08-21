import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import React, { useEffect, useState } from "react";
import { AppContext } from './context/AppContext';
import Chat from './components/chat/Chat';
import ChatWithHost from './components/chat/ChatWithHost';
import Header from './components/common/Header';
import Home from './components/home/Home';
import HouseDetail from './components/detail/HouseDetail';
import Loading from './components/common/Loading';
import Login from './components/login/Login';
import PrivateRoute from './components/common/PrivateRoute';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';
import SearchResults from './components/search/SearchResults';
import GetMap from './components/map/map';
import MapWrapped from './components/map/map';
import './index.css';
import {
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

// import React, { useState, useEffect } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   Marker,
//   InfoWindow
// } from "react-google-maps";
// import * as parkData from "./data/skateboard-parks.json";
// import mapStyles from "./mapStyles";

// function Map() {
//   const [selectedPark, setSelectedPark] = useState(null);

//   useEffect(() => {
//     const listener = e => {
//       if (e.key === "Escape") {
//         setSelectedPark(null);
//       }
//     };
//     window.addEventListener("keydown", listener);

//     return () => {
//       window.removeEventListener("keydown", listener);
//     };
//   }, []);

//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
//       defaultOptions={{ styles: mapStyles }}
//     >
//       {parkData.features.map(park => (
//         <Marker
//           key={park.properties.PARK_ID}
//           position={{
//             lat: park.geometry.coordinates[1],
//             lng: park.geometry.coordinates[0]
//           }}
//           onClick={() => {
//             setSelectedPark(park);
//           }}
//           icon={{
//             url: `/skateboarding.svg`,
//             scaledSize: new window.google.maps.Size(25, 25)
//           }}
//         />
//       ))}

//       {selectedPark && (
//         <InfoWindow
//           onCloseClick={() => {
//             setSelectedPark(null);
//           }}
//           position={{
//             lat: selectedPark.geometry.coordinates[1],
//             lng: selectedPark.geometry.coordinates[0]
//           }}
//         >
//           <div>
//             <h2>{selectedPark.properties.NAME}</h2>
//             <p>{selectedPark.properties.DESCRIPTIO}</p>
//           </div>
//         </InfoWindow>
//       )}
//     </GoogleMap>
//   );
// }

// const MapWrapped = withScriptjs(withGoogleMap(Map));
function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
  // const MapWrapped = withScriptjs(withGoogleMap(Map));
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  return (
    <AppContext>
      <Router>
        <Header />
        <Search />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/search" component={SearchResults} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/host" component={ChatWithHost} />
          <PrivateRoute exact path="/detail" component={HouseDetail} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/map" component={GetMap} />
          {/* <PrivateRoute exact path="/map" component={<MapWrapped googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}/>} /> */}

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      <Loading />
    </AppContext>
  );
}

export default App;
