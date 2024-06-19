import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div class='test'>
      <h1>Hello React</h1>
      <Pizza />
    </div>
  )
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/margherita.jpg' alt='Pizza Margherita' />
      <h2>Pizza Margherita</h2>
      <p>Tomato and mozarella</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
