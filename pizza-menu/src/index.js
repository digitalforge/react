import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { pizzaData } from './data.js'

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  return (
    <div className='menu'>
      <h2>Our Menu</h2>

      <Pizza
        name='Pizza Margherita'
        ingredients='Tomato and mozarella'
        photoName='pizzas/margherita.jpg'
        price={10}
      />
      <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mushrooms'
        price={12}
        photoName='pizzas/funghi.jpg'
      />
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closedHour = 22
  const isOpen = hour >= openHour && hour <= closedHour

  // if (isOpen) alert("We're currently Open")
  // else alert("Sorry we're closed")
  // const mins = new Date().getMinutes()
  // const seconds = new Date().getSeconds()

  // console.log(`${hour}:${mins}:${seconds}`)
  // return React.createElement('footer', null, "We're currently open")
  return <footer className='footer'>{new Date().toLocaleTimeString()}</footer>
}

function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price}</span>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
