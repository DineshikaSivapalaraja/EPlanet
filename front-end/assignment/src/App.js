import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';

function App() {
  // Step1 : Fetch data from Database
  const { productItems } = Data

  const [ cartItem, setCardItem] = useState([])
  return (
    <>
       <Router>
        <Header/>
        <Switch>
        <Route path="/" exact>
            <Pages productItems={productItems}/>
            </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
