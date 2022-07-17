import './App.css';
import { LiveAnywhere } from './components/LiveAnywhere';
import ExploreNearby from './components/ExploreNearbyComponent/ExploreNearby';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <ExploreNearby />
      <LiveAnywhere />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
