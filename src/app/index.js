import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from '../routes/route';
import NavbarPage from '../components/NavbarPage';
import { AdminHomePage, User } from '../pages';
import AdminSideBar from '../components/AdminSideBar';
// import HomePage from '../pages/Homepage';
    // "react-router-dom": "4.3.1", package.json
class App extends Component {
    isLoggedIn = (props) => {
        // if(this.state.loggedIn) {
        //     return <NavbarPage/>
        // } else {
        //     return <AdminSideBar/>
        // }

    }
    constructor(props){
        super(props);
        this.state = {
            loggedIn:false
        }
    }

    componentDidMount = () => {
        // this.setState({loggedIn:true})
    }
    render() {
        return (
            <React.Fragment>
                {/* <Router>
                    <>
                    <NavbarPage/>
                    <Routes/>
                    </>

                </Router> */}
                <Router>
                    <>
                    {this.state.loggedIn ? <AdminHomePage loggedIn={this.state.loggedIn}/>: <User/>}
                    </>
                </Router>


            </React.Fragment>
         );
    }
}
 
export default App;