import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import '../scss/Component.scss';

const BestSellers = () => {
    return (
      <div className="mt-5 px-5">
        <h2 className="mb-4">
            <span className="font-weight-500">Best Sellers</span> 
            <span className="font-weight-100 mx-3"> | </span>
            <span className="font-22px font-weight-500">See all <MDBIcon icon="angle-double-right"/></span>
        </h2>
        <MDBRow>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-1" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal1</h5>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-1-half" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal2</h5>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal3</h5>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal4</h5>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal4</h5>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal4</h5>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal4</h5>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-2" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal4</h5>
          </MDBCol>
        </MDBRow>
      </div>
    );
}

export default BestSellers;