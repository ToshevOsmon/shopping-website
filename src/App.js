import React from 'react'
import '../src/styles/main.scss'
import '../src/styles/response.scss'
import Ads from './ads/Ads'
import Footer from './footer/Footer'
import CategoriesSec from './homePage/CategoriesSec'
import Home from './homePage/Home'
import Nav from './homePage/Nav'
import NewCollection from './newCollection/NewCollection'
import SmartWatch from './recommended/SmartWatch'
import Trending from './trending/Trending'

function App() {
  return (
    <div className="App">
      <Nav />
      <CategoriesSec />
      <Home />
      <SmartWatch />
      <Ads />
      <NewCollection />
      <Ads />
      <Trending />
      <Ads />
      <Footer />
    </div>
  );
}

export default App;
