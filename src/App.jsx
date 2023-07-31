import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import '@fortawesome/fontawesome-free/js/fontawesome.js'
import '@fortawesome/fontawesome-free/js/solid.js'

import './assets/css/fonts.css';
import './App.css'
import LecteurComponent from "./components/lecteur.component.jsx";
function App() {

  return (
    <>
      <LecteurComponent />
    </>
  )
}

export default App
