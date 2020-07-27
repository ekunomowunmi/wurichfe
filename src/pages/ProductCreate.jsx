import React, { Component } from 'react';
import apis from '../api' ;
import { MDBContainer, MDBRow, MDBCol,
    MDBBtn, MDBInput, MDBIcon, MDBBadge} from 'mdbreact';
 

class ProductCreate extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            ig_link:'',
            image_Url:'',
            description:'',
            price:0,
            top_ten:false,
            category_id:''
        }
    }

    handleInputChange = inputName => value => {
        const nextVal = value;
        this.setState({
            [inputName]:nextVal
        });
    };


    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <h1>Create Product</h1>
                    <MDBRow>
                        <MDBCol>
                            <form>
                                <MDBInput label="Product Name" name="name" icon="envelope" group
                                type="text" validate />
                                <MDBInput label="Instagram Link" name="ig_link" icon="instagram" group
                                type="text" validate />
                                <MDBInput label="Image Url" name="image_Url" icon="images" group
                                type="text" validate />
                                <MDBInput label="Description" name="description" icon="info" group
                                type="text" validate />
                                <MDBInput label="Price" name="price" icon="dollar-sign" group
                                type="text" validate />
                                <MDBInput label="Choose Category" name="category_id" icon="envelope" group
                                type="text" validate />
                                <div>
                                    <MDBBtn color="primary">Add</MDBBtn>
                                </div>


                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </React.Fragment>
         );
    }
}
 
export default ProductCreate;