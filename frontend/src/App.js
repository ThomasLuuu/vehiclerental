import './App.css';
import LiveAnywhere from './components/LiveAnywhere/LiveAnywhere';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ExploreNearby from './components/ExploreNearby/ExploreNearby';
import { useState } from 'react';
// import InfiniteScroll from './components/LiveAnywhere/InfiniteScroll';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPage] = useState(1);
  // InfiniteScroll(query, pageNumber);
  return (
    <>
    {loading === false ? (
      <div className="App">
      {/* <Loading /> */}
      <Header />
      {/* <ExploreNearby />
      <LiveAnywhere /> */}
      <PostTitle/>
      <InfoLine/>
      <ShowcasePics/>
      <Footer />
    </div>
    ) : (
      <Loading /> 
    )}
    </>
  );
}

export default App;
