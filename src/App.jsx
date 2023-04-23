import React from 'react'
import generatePlan from './logic'
import './App.css'

function App() {

  const [marathonDate, setMarathonDate] = React.useState("2023-04-10")
  const plan = generatePlan()
  const daysInPlan = Object.keys(plan)
  let datesAssignedObj = {}

  for (const day of daysInPlan) {
    const date = new Date(marathonDate)
    date.setDate(date.getDate() - day);

    datesAssignedObj = {
      ...datesAssignedObj,
      [date.toUTCString()]: plan[day]
    }
  }

  const datesInPlan = Object.keys(datesAssignedObj).reverse()

  const planJSX = datesInPlan.map(day => <p>{day.slice(0, 16)}: Run {datesAssignedObj[day]} Miles</p>)

  function changeDate(date) {
    setMarathonDate(date)
  }

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
      <input type="date" onChange={(e) => changeDate(e.target.value)} value={marathonDate}/>
      {planJSX}
      <strong>{"MARTHON ON: " + new Date(marathonDate).toUTCString().slice(0,16)}</strong>
    </>
  )
}

export default App
