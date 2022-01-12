import React from 'react';
import './App.css';
import ImageSlider from './component/imageslider';
import { SliderData } from './component/sliderdata';

function App() {
  return (
  <ImageSlider slides ={SliderData}/>
  )
}

export default App;
