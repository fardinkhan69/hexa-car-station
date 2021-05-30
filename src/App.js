import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Orderpage from './components/OrderPage/OrderPage/Orderpage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/order/:carid">
              <Orderpage></Orderpage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
