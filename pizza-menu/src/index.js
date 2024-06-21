import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { pizzaData } from './data.js'

function App() {
  return (
    <div className='container'>
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
      {pizzaData.length > 0 ? (
        <ul className='pizzas'>
          {pizzaData.map(pizza => (
            <Pizza pizzaObj={pizza} key={pizza.id} />
          ))}
        </ul>
      ) : (
        <p>No Pizzas Available.</p>
      )}
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
  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>We're open until {closedHour}:00. Come visit us or order online</p>
          <button className='btn'>Order Now</button>
        </div>
      ) : (
        <p>Sorry, we're closed. We open at {openHour}:00</p>
      )}
    </footer>
  )
}

function Pizza(props) {
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
