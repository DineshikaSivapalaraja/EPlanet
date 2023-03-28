import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import Sdata from './components/shop/Sdata';
import { useState } from 'react';
import Cart from "./common/cart/Cart"
import Footer from './common/footer/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';


function App() {
  // Step1 : Fetch data from Database
  const { productItems } = Data
  const { shopItems } = Sdata

  const [ cartItem, setCardItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id)
    if (productExit) {
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCardItem([...cartItem, {...product, qty: 1}])
  }
}


const decreaseQty = (product) => {
  const productExit = cartItem.find((item) => item.id === product.id)
  if (productExit.qty === 1) {
    setCardItem(cartItem.filter((item) => item.id !== product.id))
  }
  else{
    setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  }

}

  return (
    <>
       <Router>
        <Header cartItem={cartItem}/>
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty}/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>

  );
}


export default App;
