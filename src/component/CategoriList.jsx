import React from "react";
import Loader from "react-loader-spinner";
const CategoryList = (props) =>
  props.categories ? (
    <div className="list-grup">
      {props.categories.map((category) => (
        <button
          key={category.id}
          className={
            "list-group-item list-group-item-action " +
            (props.categories && props.categorySelected === category
              ? "active"
              : "")
          }
          onClick={() => props.onClick(category)}
        >
          {category.name}
        </button>
      ))}
    </div>
  ) : (
    <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
  );
export default CategoryList;
