import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <TipCalculater/>
    </div>
  );
}

function TipCalculater() {
  return(
    <>
    <BillInout/>
    <SelectPercentage>How did you like the service?</SelectPercentage>
    <SelectPercentage>How did your friend like the service?</SelectPercentage>
    <Output/>
    <Reset/>
    </>
  )
}

function BillInout() {
  return(
    <>
    <label>How much was the bill?</label>
    <input
        type="text"
        placeholder="Bill value"
        value="0"
      
      />
    </>
  )
}

function SelectPercentage({children}) {
  return(
    <div className='App-header'>
    <label>{children}</label>
    <select
        value="0"
        
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output() {
  return(
    <>
    <h3>You pay $50 ($50 + $0 tip)</h3>
    </>
  )
}


function Reset() {
  return(
    <>
    <button>Reset</button>
    </>
  )
}








export default App;

