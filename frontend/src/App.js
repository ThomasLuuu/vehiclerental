import './App.css';
import LiveAnywhere from './components/LiveAnywhere/LiveAnywhere';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';

function App() {
  return (
    <div className="App">
      <Header />
      <ExploreNearby />
      <LiveAnywhere />
      <Footer />
    </div>
  );
}

export default App;
