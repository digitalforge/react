import { useState } from 'react'

export default function App() {
  return (
    <div>
      <TipCaluculator />
    </div>
  )
}

function TipCaluculator() {
  const [bill, setBill] = useState('')
  const [per1, setPer1] = useState(0)
  const [per2, setPer2] = useState(0)

  const tip = bill * ((per1 + per2) / 2 / 100)

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />
      <PercentageInput percentage={per1} onSelect={setPer1}>
        What you think of the service?
      </PercentageInput>
      <PercentageInput percentage={per2} onSelect={setPer2}>
        What did your friend thing of the service?
      </PercentageInput>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset />
        </>
      )}
    </>
  )
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>What was the bill price?</label>
      <input
        type='text'
        placeholder='bill cost'
        value={bill}
        onChange={e => onSetBill(Number(e.target.value))}
      />
    </div>
  )
}

function PercentageInput({ percentage, onSelect, children }) {
  return (
    <div>
      {children}{' '}
      <select
        value={percentage}
        onChange={e => onSelect(Number(e.target.value))}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>It was ok(5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>It was Amazing! (20%)</option>
      </select>
    </div>
  )
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>{`You pay ${bill + tip} (${bill} + ${tip} tip)`}</h3>
    </div>
  )
}

function Reset() {}
