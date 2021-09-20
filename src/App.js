import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register'
import Todo from './Todo';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';


function App() {
  return (
    <div >
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/todo' component={Todo}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
