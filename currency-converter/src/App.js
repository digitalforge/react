import { useEffect, useState } from 'react'

export default function App() {
  // `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
  const [amount, setAmount] = useState(50)
  const [converted, setConverted] = useState('')
  const [from, setFrom] = useState('EUR')
  const [to, setTo] = useState('USD')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function convert() {
      setIsLoading(true)
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
        )
        const data = await res.json()
        setIsLoading(false)
        setConverted(Number(data.rates[to]).toFixed(2))
      } catch (err) {
        console.log(err.message)
      }
    }
    if (from === to) return setConverted(amount)
    convert()
  }, [amount, from, to])

  return (
    <>
      <div>
        <input
          type='text'
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          disabled={isLoading}
        />
        <select value={from} onChange={e => setFrom(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='CAD'>CAD</option>
          <option value='INR'>INR</option>
        </select>
        <select value={to} onChange={e => setTo(e.target.value)}>
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='CAD'>CAD</option>
          <option value='INR'>INR</option>
        </select>
      </div>
      {converted > 0 && (
        <p>
          {amount}
          <small>{from}</small> is {converted}
          <small>{to}</small>
        </p>
      )}
    </>
  )
}
