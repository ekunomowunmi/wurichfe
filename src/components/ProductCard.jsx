import React, { Component } from 'react';
import {MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBCardText,MDBBtn} from 'mdbreact';

//Stateless Functional Component
const ProductCard = (props) => {
    return(
      // style={{ width: "22rem" }}
        <MDBCol>
              <MDBCard >
                <MDBCardImage className="img-fluid" src={props.image_Url} waves />
                <MDBCardBody>
                  <MDBCardTitle>{props.name}</MDBCardTitle>
                  <MDBCardText>
                   {props.description}
                  </MDBCardText>
                  <MDBBtn href={props.ig_link} target="_blank">View</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
                );
    }
export default ProductCard;