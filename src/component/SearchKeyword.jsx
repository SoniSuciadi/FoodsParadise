import React, { Fragment } from "react";
const SeachKeyword = (props) => (
  <Fragment>
    <div className="card">
      <div className="card-body">
        <div className="form-row ">
          <input
            type="text"
            class="form-control col-md-10"
            placeholder="Type keyword or city name"
            onChange={props.onChange}
            value={props.value}
          ></input>
          <button className="btn btn-primary col-md-2" onClick={props.onClick}>
            Add to Criteria
          </button>
        </div>
      </div>
    </div>
  </Fragment>
);
export default SeachKeyword;
