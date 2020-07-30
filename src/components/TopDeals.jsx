import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from "mdbreact";
import '../scss/Component.scss';

const TopDeals = () => {
    return (
      <div className="mt-5 px-5">
        <h2 className="mb-4">
            <span className="font-weight-500">Top Deals</span> 
            <span className="font-weight-100 mx-3"> | </span>
            <span className="font-22px font-weight-500">See all <MDBIcon icon="angle-double-right"/></span>
        </h2>
        <MDBRow>
          <MDBCol lg="3" md="4" className="mb-4">
            {/* <img src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" className="img-fluid z-depth-1" alt="" />
            <h5 className="text-center mt-2 font-weight-400">Top Deal1</h5> */}
            <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Top Deal1</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Top Deal2</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" waves />
                {/* <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Others/documentation/img%20(55)-mini.jpg" waves /> */}
                <MDBCardBody>
                    <MDBCardTitle>Top Deal3</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="3" md="4" className="mb-4">
            <MDBCard>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
                <MDBCardBody>
                    <MDBCardTitle>Top Deal4</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
}

export default TopDeals;