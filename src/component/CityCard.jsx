import React, { Compone } from "react";
import { Link } from "react-router-dom";

const CityCard = (props) => (
  <div className="col-md-4">
    <div className="card bg-light mb-3">
      <div className="card-body">
        <div className="card-card-title">
          <h3>{props.city.name}</h3>
          <p>{props.city.country_name}</p>
          <Link to={`city/${props.city.id}`} className="card-text">
            See restaurants in {props.city.name}
          </Link>
        </div>
      </div>
    </div>
  </div>
);
export default CityCard;
