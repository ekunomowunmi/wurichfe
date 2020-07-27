import React, { Component } from 'react'
import apis from '../api';
import ProductCard from '../components/ProductCard'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow} from 'mdbreact';
class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            columns: [],
            isLoading: false
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
                <MDBContainer>
                    <h1>prod list</h1>
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

    {/* this.state.products.map(product => {
                <ProductCard
                key = {product._id}
                id = {product._id}
                name = {product.name}
                ig_link = {product.link}
                image_Url ={product.image_Url}
                description = {product.description}
                price = {product.price}
                />
            })
         ) */}
</MDBContainer>
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
 
export default ProductList;