import { useState } from 'react'

export default function App2() {
  return <Counter />
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)

  return (
    <div className='container'>
      <div className='date-steps'>
        <button onClick={() => setStep(s => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep(s => s + 1)}>+</button>
      </div>
      <div className='date-count'>
        <button onClick={() => setCount(c => c - step)}>-</button>
        <span>Count: {count}</span>
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
    </div>
  )
}
