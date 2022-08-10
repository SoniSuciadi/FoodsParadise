import React, { Component, Fragment } from "react";
import axios from "axios";
import { API } from "../config/api";
import CategoryList from "../component/CategoriList";
import SeachKeyword from "../component/SearchKeyword";
import SearchCriteria from "../component/SearchCriteria";

import RestaurantCard from "../component/ResturantCard";
import Loader from "react-loader-spinner";

class City extends Component {
  constructor() {
    super();
    this.state = {
      city: null,
      categories: null,
      categorySelected: null,
      keyword: "",
      criteria: [],
      restaurants: [],
    };
  }
  transformCategoriesData(categories) {
    let categoriesTransformed = categories.map((category) => {
      return category.categories;
    });
    return categoriesTransformed;
  }
  getCityData = (city_id) => {
    let url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params: {
          city_ids: `${city_id}`,
        },
      })
      .then(({ data }) => {
        let city = data.location_suggestions[0];
        console.log(city);
        let newCriteria = {
          criteriaName: "City",
          data: { name: city.name },
        };
        let criteria = [...this.state.criteria];
        criteria.push(newCriteria);
        this.setState({ city, criteria });
      });
  };
  componentDidMount() {
    let { city_id } = this.props.match.params;
    console.log(this.props.match);
    this.getCityData(city_id);
    this.getCategoriesData();
  }
  hendlerClickCategory = (category) => {
    let criteria = [...this.state.criteria];
    criteria = criteria.filter((cri) => cri.criteriaName !== "Category");
    let newCriteria = {
      criteriaName: "Category",
      data: category,
    };

    criteria.push(newCriteria);

    this.setState({ categorySelected: category, criteria });
  };
  hendlerOnChangeKeyword = (event) => {
    this.setState({ keyword: event.target.value });
  };
  hendlerOnClickAddCategory = (event) => {
    let criteria = [...this.state.criteria];
    criteria = criteria.filter((crit) => crit.criteriaName !== "Keyword");

    let newCriteria = {
      criteriaName: "Keyword",
      data: { name: this.state.keyword },
    };

    criteria.push(newCriteria);
    this.setState({ keyword: "", criteria });
  };
  hendlerRemoveCategori = (index) => {
    let criteria = [...this.state.criteria];
    criteria.splice(index, 1);
    this.setState({ criteria });
  };
  getCategoriesData = () => {
    let url = `${API.zomato.baseUrl}/categories`;
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
      })
      .then(({ data }) => {
        let categories = this.transformCategoriesData(data.categories);
        console.log(categories);
        this.setState({ categories });
      })
      .catch((err) => console.log(err));
  };
  hendlerClickSearch = () => {
    this.setState({ restaurants: null });
    let url = `${API.zomato.baseUrl}/search`;
    let params = {};

    for (let cri of this.state.criteria) {
      switch (cri.criteriaName) {
        case "City":
          params.entity_id = cri.data.id;
          params.entity_type = "city";
          break;
        case "Category":
          params.category = cri.data.name;
          break;
        case "Keyword":
          params.q = cri.data.name;
          break;
        default:
          break;
      }
    }
    console.log(params);
    axios
      .get(url, {
        headers: {
          "user-key": API.zomato.api_key,
        },
        params,
      })
      .then(({ data }) => {
        // console.log(data);
        this.setState({ restaurants: data.restaurants });
      })
      .catch((err) => console.log(err));
  };
  renderRestaurants = () => {
    if (this.state.restaurants == null) {
      return (
        <div className="col">
          <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
        </div>
      );
    }

    if (this.state.restaurants.length > 0) {
      return this.state.restaurants.map(({ restaurant }) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ));
    } else {
      return (
        <div className="col">
          <p>No Data available. Please select criteria, and click Search</p>
        </div>
      );
    }
  };
  render() {
    return (
      <Fragment>
        <div
          className="container-fluid"
          style={{ marginBottom: 30, marginTop: 30 }}
        >
          {this.state.city && (
            <div className="row">
              <div className="col">
                <h4 className="text-success">
                  Restaurant in {this.state.city.name},{" "}
                  {this.state.city.country_name}
                </h4>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-md-3">
              <h3>Categori</h3>
              <CategoryList
                categories={this.state.categories}
                categorySelected={this.state.categorySelected}
                onClick={(category) => this.hendlerClickCategory(category)}
              />
            </div>
            <div className="col-md-9">
              <h3>Keyword</h3>
              <SeachKeyword
                value={this.state.keyword}
                onChange={this.hendlerOnChangeKeyword}
                onClick={this.hendlerOnClickAddCategory}
              />

              <SearchCriteria
                onClickRemoveCriteria={(index) =>
                  this.hendlerRemoveCategori(index)
                }
                onClickSearchRestaurans={this.hendlerClickSearch}
                criteria={this.state.criteria}
              />
              <div className="row">
                <div className="col " style={{ marginBottom: 10 }}>
                  <h2 className="text-success">Restaurant List</h2>
                </div>
              </div>
              <div className="row">{this.renderRestaurants()}</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default City;
