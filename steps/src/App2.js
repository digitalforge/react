import { useState } from 'react'

export default function App2() {
  return <Counter />
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  function handleReset() {
    setStep(1)
    setCount(0)
  }

  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <div className='container'>
      <div className='date-steps'>
        <input
          type='range'
          min='0'
          max='10'
          value={step}
          onChange={e => setStep(Number(e.target.value))}
        ></input>
        <span>{step}</span>
        {/* <button onClick={() => setStep(s => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(s => s + 1)}>+</button> */}
      </div>
      <div className='date-count'>
        <button onClick={() => setCount(c => c - step)}>-</button>
        <input
          type='text'
          value={count}
          onChange={e => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount(c => c + step)}>+</button>
      </div>
      <div className='date'>
        <p>
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
          {date.toDateString()}
        </p>
      </div>
      {count !== 0 || step !== 1 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  )
}
