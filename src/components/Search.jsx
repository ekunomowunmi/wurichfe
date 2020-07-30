import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import '../scss/Component.scss'

const Search = () => {
  return (
    // <MDBCol md="6">
    <MDBCol md="12">
      <div className="input-group md-form form-sm form-1 pl-0">
        <div className="input-group-prepend">
          <span className="input-group-text blue darken-1" id="basic-text1">
            <MDBIcon className="text-white" icon="search" />
          </span>
        </div>
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
  );
}

export default Search;