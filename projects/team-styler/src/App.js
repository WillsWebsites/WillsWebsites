import { Fragment } from 'react';

import Header from './components/Layout//Header/Header';
import Main from './components/Layout/Main/Main';
import Footer from './components/Layout/Footer/Footer';

import './App.css';


function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
