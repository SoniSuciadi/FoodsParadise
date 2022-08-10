import React from "react";

const RatingLabel = (props) => (
  <button
    className="btn "
    style={{
      color: "white",
      background: `#${props.rating_color}`,
    }}
  >
    {`${props.aggregate_rating} (${props.rating_text})`}
  </button>
);
export default RatingLabel;
