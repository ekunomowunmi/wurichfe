import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import '../scss/Component.scss';

const PopularCategories = () => {
    return (
      <div className="mt-5 px-5">
        <h2 className="mb-4">
            <span className="font-weight-500">Popular Categories</span> 
            <span className="font-weight-100 mx-3"> | </span>
            <span className="font-22px font-weight-500">See all <MDBIcon icon="angle-double-right"/></span>
        </h2>
        <MDBRow>
          <MDBCol lg="2" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-1 brd-radius-50" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Popular Catt1</h5>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-1-half brd-radius-50" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Popular Catt2</h5>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2 brd-radius-50" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Popular Catt3</h5>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2 brd-radius-50" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Popular Catt4</h5>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2 brd-radius-50" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Popular Catt5</h5>
          </MDBCol>
          <MDBCol lg="2" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2 brd-radius-50" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Popular Catt6</h5>
          </MDBCol>
        </MDBRow>
      </div>
    );
}

export default PopularCategories;