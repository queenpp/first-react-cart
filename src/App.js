
import React, { Component } from 'react';

// import './App.css';
import './css/materialize.css';
import Navbar from'./components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends Component {
	  render() {
    return (
       <BrowserRouter>
            <div className="App">
           
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/> 
                    <Route path="/cart" component={Cart}/>
                  </Switch>


             </div>
       </BrowserRouter>
      
    );
}
}
export default App;