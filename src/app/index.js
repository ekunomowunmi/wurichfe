import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from '../routes/route';
import NavbarPage from '../components/NavbarPage';
import { ProductList, ProductCreate, HomePage } from '../pages';
// import HomePage from '../pages/Homepage';
    // "react-router-dom": "4.3.1", package.json
class App extends Component {
    state = {  }
    render() {
        return (
            <React.Fragment>
                <Router>
                <NavbarPage/>
                    <Routes/>
                {/* <Switch>
                    <Route path="/" exact component = {HomePage} />
                    <Route path="/products"  component = {ProductList} />
                    <Route path="/product/create" component = {ProductCreate} />

                </Switch> */}

                </Router>


                {/* <div>
                    <Link to="/products">Products</Link>
                </div> */}
            </React.Fragment>
         );
    }
}
 
export default App;