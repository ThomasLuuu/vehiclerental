import './App.css';
import LiveAnywhere from './components/LiveAnyWhere/LiveAnywhere';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <ExploreNearby /> */}
      <LiveAnywhere />
      <Footer />
    </div>
  );
}

export default App;
