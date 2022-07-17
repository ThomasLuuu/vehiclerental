import './App.css';
<<<<<<< HEAD
import { LiveAnywhere } from './components/LiveAnywhere';
import ExploreNearby from './components/ExploreNearbyComponent/ExploreNearby';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <ExploreNearby />
=======
import { LiveAnywhere } from './components/LiveAnywhere/LiveAnywhere';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <ExploreNearby /> */}
>>>>>>> khuong-dev
      <LiveAnywhere />
      <Footer />
    </div>
  );
}

export default App;
