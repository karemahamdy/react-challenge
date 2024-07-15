
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div>
    <TipCalculater/>
    </div>
  );
}

function TipCalculater() {
  const [bill, SetBill] = useState("")
  const [percentage1 , OnSetPecentage1] = useState(0)
  const [percentage2 , OnSetPecentage2] = useState(0)
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function ResetButton() {
    SetBill("")
    OnSetPecentage1(0)
    OnSetPecentage2(0)

  }
  return(
    <>
    <BillInput bill={bill} onSetBill={SetBill} />
    <SelectPercentage  percentage={percentage1} OnSetPecentage={OnSetPecentage1}>How did you like the service?</SelectPercentage>
    <SelectPercentage percentage={percentage2} OnSetPecentage={OnSetPecentage2}>How did your friend like the service?</SelectPercentage>
    <Output bill={bill} tip={tip}/>
    <Reset ResetButton={ResetButton}/>
    </>
  )
}

function BillInput({ bill , onSetBill }) {
  return(
    <>
    <label>How much was the bill?</label>
    <input
        type="text"
        placeholder="Bill value"
       value={bill}
       onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </>
  )
}

function SelectPercentage({ children, percentage, OnSetPecentage}) {
  return(
    <div className='App-header'>
    <label>{children}</label>
    <select
      value={percentage}
      onChange={(e) => OnSetPecentage(Number(e.target.value))}    
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return(
    <>
    <h3>You pay ${bill} (${bill} + $0 {tip})</h3>
    </>
  )
}


function Reset({ResetButton}) {
  return(
    <>
    <button onClick={ResetButton}>Reset</button>
    </>
  )
}

export default App;

