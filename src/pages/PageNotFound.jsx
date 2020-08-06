import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/Component.scss';
import {Link} from 'react-router-dom';

class PageNotFound extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="text-center vh60 d-flex justify-content-center align-items-center">
                <div>
                    <h2>Page Not Found....</h2>
                    <p>Back to home.... <Link to="/"> Home</Link></p>
                </div>
            </div>
        );
    }
}

PageNotFound.propTypes = {

};

export default PageNotFound;