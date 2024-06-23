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
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map(pizza => (
              <Pizza pizzaObj={pizza} key={pizza.id} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>No Pizzas Available.</p>
      )}
    </div>
  )
}

// function Menu() {
//   return (
//     <div className='menu'>
//       <h2>Our Menu</h2>
//       {pizzaData && (
//         <ul className='pizzas'>
//           {pizzaData.map(pizza => (
//             <Pizza pizzaObj={pizza} key={pizza.id} />
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

function Order({ closedHour, openHour }) {
  return (
    <div className='order'>
      <p>
        We're open from {openHour}:00am until {closedHour}:00pm. Come visit us
        or order online
      </p>
      <button className='btn'>Order Now</button>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 1
  const closedHour = 24
  const isOpen = hour >= openHour && hour <= closedHour

  // if (!isOpen) {
  //   return (
  //     <footer className='footer'>
  //       <p>Sorry, we're closed. We open at {openHour}:00pm</p>
  //     </footer>
  //   )
  // }

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order openHour={openHour} closedHour={closedHour} />
      ) : (
        <p>Sorry, we're closed. We open at {openHour}:00pm</p>
      )}
    </footer>
  )
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
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
