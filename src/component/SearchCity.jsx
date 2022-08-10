import React, { Fragment } from "react";
const SearchCity = (props) => (
  <Fragment>
    <div className=" row mb-2">
      <div className="col-sm-12">
        <h3>Search City</h3>
      </div>
    </div>
    <div className="  card">
      <div className="card-body">
        <div className="form-row">
          <div className="col-sm-11">
            <input
              type="text"
              class="form-control "
              placeholder="Type keyword or city name"
              onChange={props.onChange}
              value={props.value}
            />
          </div>
          <div className=" col-sm-1">
            <button className="btn btn-primary " onClick={props.onClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
export default SearchCity;
