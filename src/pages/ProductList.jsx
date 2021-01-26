import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getAllCategories} from '../actions/categoryActions';
import apis from '../api';
import ProductCard from '../components/ProductCard'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow} from 'mdbreact';
import Category from '../components/Categories';
import {Link} from 'react-router-dom';

import NavbarPage from '../components/NavbarPage';
import Header from '../components/Header';
import Footer from '../components/footer';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            // categories: [],
            columns: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({isLoading:true})
        this.getAllProducts();
        await this.props.getAllCategories();
        console.log('here;',this.props.categories);
        // this.setState({categories: this.props.categories});
        // console.log('second:',this.state.categories);
    }

    getAllProducts = async () => {
        this.setState({isLoading:true})
        await apis.getAllProducts().then(products => {
            this.setState({
                products: products.data.data,
                // isLoading: false
            })
        })
    }

    getProductByCategory = async (categoryId) => {
        this.setState({isLoading:true})
        await apis.getProductsByCategory(categoryId).then(products => {
            this.setState({
                products: products.data.data,
                isLoading: false
            })
        })
    }

    newProduct = () => {
        return (
            <Link to="/admin/product/create"><MDBBtn color="primary" size = "sm" >New Product</MDBBtn></Link>
        );
    }
    render() {
        const {products, isLoading} = this.state;
        const { categories } = this.props.categories;
        return (
            <React.Fragment>
                {/* <Header /> */}
                {/* <NavbarPage /> */}

                    <MDBRow>
                    <MDBCol lg="3" md="3">
                        <MDBContainer>
                        <h1>Categories</h1>

                        <MDBBtn outline color="primary" size = "sm" onClick={()=> this.getAllProducts()}>Clear filters</MDBBtn><br/>
                        {
                            categories.map(category => (
                                <MDBRow className="ml-3"  key = {category._id}>
                                <Category
                                id = {category._id}
                                name = {category.name}
                                onSelectCategory = {this.getProductByCategory}
                                />
                                </MDBRow>
                            ))
                        }
                        </MDBContainer>

                    </MDBCol>
                    <MDBCol lg="9" md="9">
                        <MDBContainer>
                            <MDBRow>
                                {!this.props.loggedIn ? this.newProduct(): ''}
                            </MDBRow>
                            <MDBRow>
                                {
                                    products.map(product => (
                                        <ProductCard
                                            key = {product._id}
                                            id = {product._id}
                                            name = {product.name}
                                            ig_link = {product.ig_link}
                                            image_Url ={product.image_Url}
                                            description = {product.description}
                                            price = {product.price}
                                            />

                                    ))
                                }
                            </MDBRow>
                        </MDBContainer>


                    </MDBCol>

                    </MDBRow>

                {/* <Footer /> */}
            </React.Fragment>
        )
    }
}

// class ProductCard extends Component {
//     render() {
//         return(
// <MDBCol>
//       <MDBCard style={{ width: "22rem" }}>
//         <MDBCardImage className="img-fluid" src={this.props.image_Url} waves />
//         <MDBCardBody>
//           <MDBCardTitle>{this.props.name}</MDBCardTitle>
//           <MDBCardText>
//            {this.props.description}
//           </MDBCardText>
//           <MDBBtn href="#">MDBBtn</MDBBtn>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBCol>
//         )
        
//     }
// }
const mapStateToProps = state => ({
    categories: state.categories
});
export default connect(mapStateToProps, {getAllCategories})(ProductList);