import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <h1>Generate a Marathon Training Plan</h1>
      <p>Select training length</p>
      <select>
        <option>12 Week Plan</option>
        <option>16 Week Plan</option>
        <option>20 Week Plan</option>
        <option>174 Week Plan</option>
      </select>
      <p>What date is your marathon?</p>
      <input type="date" />
      <button>Submit</button>
    </>
  )
}

export default App
