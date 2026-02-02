import { useState } from 'react'

import './App.css'
import Quiz from './Components/quiz'

function App() {

  return (
    <>
      <div className='app-container'>
        <h1>Quiz App</h1>
          <Quiz />
      </div>
    </>
  )
}

export default App
