import React from "react";
import CityCard from "./CityCard";
import Loader from "react-loader-spinner";
const CityList = (props) => (
  <div className=" mt-3">
    <div className="row">
      <div className="col">
        <h3>{props.title}</h3>
        {props.keywordSearch != "" && props.title === "Search Result" && (
          <h6 class="text-muted">
            Search Result For Keyword {props.keywordSearch}
          </h6>
        )}
      </div>
    </div>
    <div className="row">
      {props.cities == null ? (
        <div
          style={{
            width: "100%",
            height: "100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
      ) : (
        _renderCityList(props.cities)
      )}
    </div>
  </div>
);
const _renderCityList = (cities) => {
  if (cities.length > 0) {
    return cities.map((city) => <CityCard key={city.id} city={city} />);
  } else {
    return (
      <div className="col">
        <h1 className="text-muted  text-center">Data Not Found</h1>
      </div>
    );
  }
};

export default CityList;
