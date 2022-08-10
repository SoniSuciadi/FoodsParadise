import React, { Fragment } from "react";
import RatingLabel from "./RatingLabel";
const RestaurantProfile = (props) => (
  <div className="card mt-3">
    <div className="card-header">
      <div className="row">
        <div className="col">
          <Fragment>
            <h4 className="text-success " style={{ fontWeight: 800 }}>
              {props.restaurant.name}
            </h4>
            <h6 className="text-succes" style={{ fontWeight: 400 }}>
              {props.restaurant.location.locality}
            </h6>
            <h6 className="text-muted"> {props.restaurant.location.address}</h6>
          </Fragment>
        </div>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md 7">
          <img
            className="img-responsive "
            style={{ borderRadius: 5, width: 500 }}
            src={props.restaurant.featured_image}
            alt=""
          />
        </div>
        <div className="col-md-5">
          <table className="table">
            <tr>
              <td>Rating</td>
              <td>
                <RatingLabel
                  rating_color={props.restaurant.user_rating.rating_color}
                  aggregate_rating={
                    props.restaurant.user_rating.aggregate_rating
                  }
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
              <td>
                {props.restaurant.currency +
                  " " +
                  props.restaurant.average_cost_for_two}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantProfile;
