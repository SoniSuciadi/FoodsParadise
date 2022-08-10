import React, { Component, Fragment } from "react";
import axios from "axios";
import { API } from "../config/api";
import Loader from "react-loader-spinner";
import RestaurantProfile from "../component/RestaurantProfile";
import RatingLabel from "../component/RatingLabel";
import Reviews from "../component/Review";

class RestaurantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      review: null,
    };
  }
  getRestaurantData = (restaurant_id) => {
    let url = `${API.zomato.baseUrl}/restaurant`;

    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          res_id: restaurant_id,
        },
      })
      .then(({ data }) => {
        this.setState({ restaurant: data });
      })
      .catch((err) => console.log(err));
  };
  getReviewData = (restaurant_id) => {
    let url = `${API.zomato.baseUrl}/reviews`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          res_id: restaurant_id,
        },
      })
      .then(({ data }) => {
        this.setState({ review: data.user_reviews });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    let { params } = this.props.match;
    this.getRestaurantData(params.restaurant_id);
    this.getReviewData(params.restaurant_id);
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="col-md-12">
            {this.state.restaurant ? (
              <RestaurantProfile restaurant={this.state.restaurant} />
            ) : (
              <Loader
                type="ThreeDots"
                color="#2BAD60"
                height="100"
                width="100"
              />
            )}
          </div>
          <Reviews reviews={this.state.review} />
        </div>
      </Fragment>
    );
  }
}
export default RestaurantDetail;
