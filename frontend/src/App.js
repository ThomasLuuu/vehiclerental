import './App.css';
import LiveAnywhere from './components/LiveAnywhere/LiveAnywhere';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';
import {PostTitle, InfoLine, ShowcasePics} from './components/DetailedProfile';
function App() {

  return (
    <div className="App">
      <Header />
      {/* <ExploreNearby />
      <LiveAnywhere /> */}
      <PostTitle/>
      <InfoLine/>
      <ShowcasePics/>
      <Footer />
    </div>
  );
}

export default App;
