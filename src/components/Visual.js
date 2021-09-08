import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Visual.css';

function Visual(props) {
  return (
    <div className="visual-container">
      <video src="/videos/video_aurora.mp4" autoPlay loop muted />
      <h1>WONDERFUL ADVENTURE</h1>
      <p>What are you waiting for?</p>
      <div className="visual-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">EXPLORE NOW</Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH VIDEO <i className="far fa-play-circle" /></Button>
      </div>
    </div>
  );
}

export default Visual;