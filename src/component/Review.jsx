import React from "react";
import Loader from "react-loader-spinner";
import RatingLabel from "./RatingLabel";
const Reviews = (props) => (
  <div className="col-md-12 " style={{ marginBottom: 20 }}>
    <div className="card">
      <div className="card-body">
        <h4 className="text-success" style={{ fontWeight: 800 }}>
          Review
        </h4>
        {props.reviews ? (
          props.reviews.map(({ review }) => (
            <div className="card border-success mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={review.user.profile_image}
                      style={{ borderRadius: 5 }}
                    />
                  </div>
                  <div className="col-md-10">
                    <h4>{review.user.name}</h4>
                    {review.user.foodie_level ? (
                      <RatingLabel
                        rating_color={review.user.foodie_color}
                        aggregate_rating={review.user.foodie_level_num}
                        rating_text={review.user.foodie_level}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-muted">{review.review_time_friendly}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <RatingLabel
                      rating_color={review.rating_color}
                      aggregate_rating={review.rating}
                      rating_text={review.rating_text}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p>{review.review_text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        )}
      </div>
    </div>
  </div>
);
export default Reviews;
