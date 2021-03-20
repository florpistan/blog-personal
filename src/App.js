import React from 'react'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Curriculum from './components/Curriculum'
import Wave from './components/Wave'
import Proyectos from './components/Proyectos.jsx'
import WaveTwo from './components/WaveTwo.jsx'
import LinkedInProfile from './components/LinkedInProfile.jsx'

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Curriculum />
      <Wave />
      <Proyectos />
      <WaveTwo />
      <LinkedInProfile />
    </div>
  );
}

export default App;
