import './App.css';
import LiveAnywhere from './components/LiveAnywhere/LiveAnywhere';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';
<<<<<<< HEAD

function App() {
=======
import { useState } from 'react';
import InfiniteScroll from './components/LiveAnywhere/InfiniteScroll';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPage] = useState(1);
  InfiniteScroll(query, pageNumber);
>>>>>>> beaedc0f8aa53dbd7b684b381a4f7e85bc15b523
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
