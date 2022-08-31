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
import CarDetail from './components/detail/CarDetail';
import Loading from './components/common/Loading';
import Login from './components/login/Login';
import PrivateRoute from './components/common/PrivateRoute';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';
import SearchResults from './components/search/SearchResults';
import GetMap from './components/map/map';
import MapWrapped from './components/map/map';
import './index.css';

function App() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPage] = useState(1);
  const [loading, setLoading] = useState(true)
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
          <PrivateRoute exact path="/detail" component={CarDetail} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/map" component={GetMap} />
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
