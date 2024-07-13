
import './App.css';
import './index.css'

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="App">
    <Header/>
    <Footer/>
    </div>
  );
}

function Header(){

  return(
 <>
     <header  className='header'>
     <h1>Fast React Pizza Co.</h1>
     </header>
 </>

)}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour)
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour  && hour <= closeHour
    return (
    <>
      <footer className="footer">
        {isOpen ? (
          <p>hello closeHour={closeHour} openHour={openHour} </p>
        ): (
          <p>
            We're happy to welcome you between {openHour}:00 and {closeHour}:00.
          </p>
        )}
        </footer>
    
    </>
  )
}
export default App;
