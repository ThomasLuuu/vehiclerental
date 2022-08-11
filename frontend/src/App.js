import './App.css';
import LiveAnywhere from './components/LiveAnywhere/LiveAnywhere';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';
import { useState, useEffect } from 'react';
import InfiniteScroll from './components/LiveAnywhere/InfiniteScroll';
import {Loading} from './components/Loading/Loading';
function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPage] = useState(1);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])
  return (
    <>
    {loading === false ? (
      <div className="App">
      {/* <Loading /> */}
      <Header />
      <ExploreNearby />
      <LiveAnywhere />
      <Footer />
    </div>
    ) : (
      <Loading /> 
    )}
    </>
  );
}

export default App;
