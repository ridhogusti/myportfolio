import React from 'react';
import './App.css';
import HomeBannerArea from './components/HomeBannerArea'
import HomeGalleryArea from './components/HomeGalleryArea'
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <HomeBannerArea />
      <HomeGalleryArea />
    </div>
  );
}

export default App;
