import React from "react";
import { Link } from "react-router-dom";
import RatingLabel from "./RatingLabel";
const RestaurantCard = (props) => (
  <div className="col-md-6 style={{ marginBottom: 20 }}">
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-md-3">
            <img
              className="img-responsive"
              style={{ borderRadius: 5, width: 100 }}
              src={props.restaurant.thumb}
              alt=""
            ></img>
          </div>
          <div className="col-md-9">
            <h4 className="text-success " style={{ fontWeight: 800 }}>
              {props.restaurant.name}
            </h4>
            <h6>{props.restaurant.location.locality}</h6>
            <h6 className="text-muted">{props.restaurant.location.address}</h6>
          </div>
        </div>
      </div>
      <div className="card-body ">
        <table className="table">
          <tr>
            <td>Rating</td>
            <td>
              <RatingLabel
                rating_color={props.restaurant.user_rating.rating_color}
                aggregate_rating={props.restaurant.user_rating.aggregate_rating}
                rating_text={props.restaurant.user_rating.rating_text}
              />
            </td>
          </tr>

          <tr>
            <td>Cuisines</td>
            <td>{props.restaurant.cuisines}</td>
          </tr>
          <tr>
            <td>Cost for two</td>
            <td>{props.restaurant.average_cost_for_two}</td>
          </tr>
        </table>
      </div>
      <div className="card-footer">
        <Link
          to={`/restaurant/${props.restaurant.id}`}
          style={{ textDecoration: "none" }}
        >
          <button type="button" class="btn btn-outline-success btn-block">
            View Restaurant Details
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default RestaurantCard;
