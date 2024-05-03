import React from 'react'
import './appDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For Better Experience Download Tomato App</p> {/* Corrected closing tag */}
    <div className="app-download-platforms">
      <img src={assets.play_store} alt="Play Store" /> {/* Corrected closing brace and added alt text */}
      <img src={assets.app_store} alt="App Store" /> {/* Corrected closing brace and added alt text */}
    </div>
  </div>
  )
}

export default AppDownload
