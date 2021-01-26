import React, { Component } from 'react';
import {connect} from 'react-redux';
import apis from '../api' ;
import classes from '../scss/ProductCreate.module.scss';
import {getAllCategories} from '../actions/categoryActions';
import { MDBContainer, MDBRow, MDBCol,
    MDBBtn, MDBInput, MDBIcon, MDBBadge,
    MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBCardText} from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';

class ProductCreate extends Component {

    initialState = {
        name:'',
        ig_link:'',
        image_Url:'',
        description:'',
        price:0,
        top_ten:false,
        category_id:'',
        errors: {},
        disabled:true
      }
  
      state = this.initialState;
    componentDidMount = async () => {
        await this.props.getAllCategories();
    }

    handleInputChangeAnother = inputName => value => {
        const nextVal = value;
        this.setState({
            [inputName]:nextVal
        });
    };

    handleInputChange = (event) => {
        const {errors} = this.state
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if(!value){
            errors["name"] = 'Cannot be empty';
            this.setState({errors});
        }
        if(name == 'price' && !/^[0-9]*$/){
            errors["price"] ="Price can only be numbers";
            this.setState({errors});
        }
        if (value && (name == 'price' && !/^[0-9]*$/)){
            this.setState({disabled:false});
        }

        this.setState({
            [name]: value
          });
    }

    handleSubmit = async () => {
        const {name, ig_link, image_Url, description, price, category_id} = this.state;
        const newProduct = {
            name, ig_link, image_Url, description, price, category_id
        }
        console.log(newProduct);
        await apis.insertProduct(newProduct).then(res => {
            console.log(res);
        })
    }


    render() {
        const { categories } = this.props.categories;
        const {name, ig_link, image_Url, description, price, category_id, errors} = this.state;
        const cardClass = classes.ProductBackground + ' mt-5'
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBCard className={cardClass}>
                        <MDBCardBody>
                            <MDBCardTitle><h1 className="text-center">Create Product</h1></MDBCardTitle>
                        <MDBRow>
                        <MDBCol className="mx-auto" md="6">
                        <h6 className="text-uppercase mb-4"><Link style={{color: 'black'}} to="/"><MDBIcon className="mr-3" icon="long-arrow-alt-left" />Back To Home</Link></h6>
                            <form>
                                <MDBInput label="Product Name" name="name" hint="Enter your product name" className={classes.inputColor}
                                 icon="envelope" group type="text" value={name} onChange={this.handleInputChange} />
                                 <span className="red">{errors["name"]}</span>
                                <MDBInput label="Instagram Link" name="ig_link" hint="Enter your product instagram link" className={classes.inputColor}
                                 icon="instagram" group type="text" value={ig_link} onChange={this.handleInputChange}  />
                                 <span className="red">{errors["name"]}</span>
                                <MDBInput label="Image Url" name="image_Url" hint="Enter your image Url" className={classes.inputColor}
                                 icon="images" group type="text" value={image_Url} onChange={this.handleInputChange}  />
                                 <span className="red">{errors["name"]}</span>
                                <MDBInput label="Description" name="description" hint="Enter your product description" className={classes.inputColor}
                                 icon="info" group type="text" value={description} onChange={this.handleInputChange}  />
                                 <span className="red">{errors["name"]}</span>
                                <MDBInput label="Price" name="price" hint="Enter your product Price" className={classes.inputColor}
                                 icon="dollar-sign" group type="text" value={price} onChange={this.handleInputChange}  />
                                 <span className="red">{errors["price"]}</span>
                                <div>
                                    <select className="browser-default custom-select" name="category_id" value={category_id} onChange={this.handleInputChange} >
                                    <option disabled>Choose Category</option>
                                        {
                                            categories.map(category => (
                                                <option key = {category._id} value={category._id}>{category.name}</option>
                                            ))
                                        }
                                    </select>
      </div>
                                <div className="text-center">
                                    <MDBBtn color="primary" onClick={this.handleSubmit}>Add Product</MDBBtn>
                                </div>


                            </form>
                        </MDBCol>
                    </MDBRow>

                        </MDBCardBody>
                                        </MDBCard>
                </MDBContainer>

            </React.Fragment>
         );
    }
}
 
const mapStateToProps = state => ({
    categories: state.categories
});
export default connect(mapStateToProps, {getAllCategories})(ProductCreate);