import React, { Component } from 'react'
import {MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBCardTitle,MDBCardText,MDBBtn} from 'mdbreact';

const Category = (props) => {
    return (
    <React.Fragment>
        {/* <MDBBtn className="ml-3" outline color="transparent" size = "sm" onClick={() => props.onSelectCategory(props.id)}>{props.name}</MDBBtn> */}
        <p className="ml-3 category-list" outline="true" color="transparent" size = "sm" onClick={() => props.onSelectCategory(props.id)}>{props.name}</p>
    </React.Fragment>
    );
}

export default Category;