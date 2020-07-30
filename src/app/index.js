import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from '../routes/route';
import NavbarPage from '../components/NavbarPage';
import Header from '../components/Header';
import Footer from '../components/footer';
class App extends Component {

    render() {
        return (
            <React.Fragment>
                <Router>
                    <>
                        <Header />
                        <NavbarPage />
                        <Routes />
                        <Footer />
                    </>
                </Router>


            </React.Fragment>
         );
    }
}
 
export default App;