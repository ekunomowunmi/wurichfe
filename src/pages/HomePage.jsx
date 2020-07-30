import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import PopularCategories from '../components/PopularCategories';
import TopDeals from '../components/TopDeals';
import BestSellers from '../components/BestSellers';
import apis from '../api';
import { MDBContainer, MDBRow } from 'mdbreact';
import {BrowserRouter as Router, Link} from 'react-router-dom';
class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            categories: [],
            isLoading:false
        }
    }
    componentDidMount = async () => {
        this.setState({isLoading:true})
        await apis.getAllProducts().then(products => {
            this.setState({
                products: products.data.data,
                isLoading: false
            })
        })
    }
    render() { 
        const {products, isLoading} = this.state;
        return ( 
            <React.Fragment>
                {/* <div>
                    <Banner />
                </div> */}
                <Banner />
                <div className="px-5">
                    <PopularCategories />
                    <TopDeals />
                    <BestSellers />
                </div>
                <MDBContainer>
                    <div className="homepage-bg"></div>
                    <MDBRow>
                    {
                        products.map(product => (
                            <ProductCard
                                key = {product._id}
                                id = {product._id}
                                name = {product.name}
                                ig_link = {product.link}
                                image_Url ={product.image_Url}
                                description = {product.description}
                                price = {product.price}
                                />
                        ))
                    }
                    </MDBRow>

                    {/* <div>
                        <Router>
                        <Link to="/products">fjr</Link>
                        </Router>
                    </div> */}
                </MDBContainer>
            </React.Fragment>
         );
    }
}

export default HomePage;