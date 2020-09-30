import React, { Fragment } from 'react';
import './css/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets'
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  // eslint-disable-next-line
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="app">
      {!user ? <Login/> : (
        <Fragment>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </Fragment>
      )}

    </div>
  );
}

export default App;
