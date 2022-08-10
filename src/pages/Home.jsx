import React, { Component, Fragment } from "react";
import CityList from "../component/CityList";
import SearchCity from "../component/SearchCity";
import ImageAndWellcome from "../component/ImageAndWellcome";
import mainImage from "../assets/images/image3.png";
import axios from "axios";
import { API } from "../config/api";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      keywordSearch: "",
      featuredCities: null,
      citiesResultSearch: null,
    };
  }

  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  };
  getFeaturedCities = () => {
    let url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": `${API.zomato.api_key}`,
        },
        params: {
          city_ids: "74,11052,170",
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({
            featuredCities: data.location_suggestions,
          });
        } else {
        }
      })
      .catch((err) => console.log(err));
  };

  searchHandler = () => {
    let url = `${API.zomato.baseUrl}/cities`;
    axios
      .get(url, {
        headers: {
          "user-key": `${API.zomato.api_key}`,
        },
        params: {
          q: this.state.keyword,
        },
      })
      .then(({ data }) => {
        if (data.status === "success") {
          this.setState({
            citiesResultSearch: data.location_suggestions,
            keyword: "",
            keywordSearch: this.state.keyword,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getFeaturedCities();
    // this.citiesResultSearch();
  }
  render() {
    const citiesDummy = [
      { id: 72, name: "Jakarta", country_name: "Indonesia" },
      { id: 11052, name: "Bandung", country_name: "Indonesia" },
      { id: 170, name: "Bali", country_name: "Indonesia" },
    ];
    return (
      <Fragment>
        <ImageAndWellcome mainImage={mainImage} />
        <div className="container " style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList
            title="Featured Cities"
            cities={this.state.featuredCities}
          />
          <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
            onClick={this.searchHandler}
          />
          {this.state.keywordSearch != "" && (
            <CityList
              title="Search Result"
              cities={this.state.citiesResultSearch}
              keywordSearch={this.state.keywordSearch}
            />
          )}
        </div>
      </Fragment>
    );
  }
}
export default Home;
