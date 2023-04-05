import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Card from './components/Card/Card';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from './components/Product/Product';
import Feedback from "./components/Feedback/Feedback"
import AdminLogin from "./components/Admin user/AdminLogin"
import Order from './components/Order/Order';



function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact><AdminLogin/></Route>
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <Route path="/card" exact><Card/></Route>
        <Route path="/product" exact><Product/></Route>
        <Route path="/order" exact><Order/></Route>
        <Route path="/feedback" exact><Feedback/></Route>
      </div>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
