import { useState } from 'react'

export default function App() {
  return (
    <div className='App'>
      <TipCaluculator />
    </div>
  )
}

function TipCaluculator() {
  const [bill, setBill] = useState(0)
  const [per1, setPer1] = useState(0)
  const [per2, setPer2] = useState(0)

  const tip = bill * ((per1 + per2) / 2 / 100)

  function handleReset() {
    setBill(0)
    setPer1(0)
    setPer2(0)
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={per1} onSelect={setPer1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={per2} onSelect={setPer2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          {' '}
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />{' '}
        </>
      )}
    </>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type='text'
        placeholder='Bill Cost'
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))}
      />
    </div>
  )
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={e => onSelect(Number(e.target.value))}
      >
        <option value='0'>Dissatisfied</option>
        <option value='5'>It was ok</option>
        <option value='10'>It was good!</option>
        <option value='20'>Absolutely Amazing!</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  )
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>
}
