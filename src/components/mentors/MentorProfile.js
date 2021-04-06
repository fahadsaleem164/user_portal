import React, { Component } from "react";
import axios from "axios";
import * as qs from "query-string";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Header from "./../../layout/Header";
import Loader from "react-loader-spinner";
import ScreenLoader from "../../layout/ScreenLoader";
import FlashMessage from "react-flash-message";


class MentorProfile extends Component {
  constructor(props) {
    let Params = new URLSearchParams(props.location.search);
    localStorage.getItem("token");

    super(props);
    // welcome

    this.state = {
      token: localStorage.getItem("token"),
      event_token: localStorage.getItem("event_token"),
      first_name: "",
      last_name: "",
      city: "",
      mobile_no: "",
      address: "",
      country: "",
      org_name: "",
      designation: "",
      education: "",
      work_exp: "",
      areas_of_coach: "",
      visibility: true,
      load_class: "loaderscreen",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    const axiosOptions = {
      url:
        process.env.React_App_API_URL +
        "mentor/profile?event_token=" +
        this.state.event_token,
      method: "get",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    };

    axios(axiosOptions)
      .then((response) => {
        console.log(response);

        if (
          response.data.data.address &&
          response.data.data.address != "null"
        ) {
          this.setState({
            address: response.data.data.address,
          });
        }

        if (
          response.data.data.country &&
          response.data.data.country != "null"
        ) {
          this.setState({
            country: response.data.data.country,
          });
        }

        if (
          response.data.data.org_name &&
          response.data.data.org_name != "null"
        ) {
          this.setState({
            org_name: response.data.data.org_name,
          });
        }

        if (
          response.data.data.designation &&
          response.data.data.designation != "null"
        ) {
          this.setState({
            designation: response.data.data.designation,
          });
        }

        if (
          response.data.data.education &&
          response.data.data.education != "null"
        ) {
          this.setState({
            education: response.data.data.education,
          });
        }

        if (
          response.data.data.work_exp &&
          response.data.data.work_exp != "null"
        ) {
          this.setState({
            work_exp: response.data.data.work_exp,
          });
        }

        if (
          response.data.data.areas_of_coach &&
          response.data.data.areas_of_coach != "null"
        ) {
          this.setState({
            areas_of_coach: response.data.data.areas_of_coach,
          });
        }

        this.setState({
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          city: response.data.data.city,
          mobile_no: response.data.data.mobile_no,
          event_token: this.state.event_token,
          load_class: "loaderscreen_loaded",
          visibility: false, //when response come visibility of loader icon become false
        });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      visibility: true,
      load_class: "loaderscreen",
      errorStatus: "",
    });

    const formData = {};

    var fd = new FormData();

    fd.append("first_name", this.state.first_name);
    fd.append("last_name", this.state.last_name);
    fd.append("city", this.state.city);
    fd.append("mobile_no", this.state.mobile_no);
    fd.append("address", this.state.address);
    fd.append("mobile_no", this.state.mobile_no);
    fd.append("country", this.state.country);
    fd.append("org_name", this.state.org_name);
    fd.append("designation", this.state.designation);
    fd.append("education", this.state.education);
    fd.append("work_exp", this.state.work_exp);
    fd.append("areas_of_coach", this.state.areas_of_coach);
    fd.append("event_token", this.state.event_token);

    for (var key of fd.entries()) {
      formData[key[0]] = key[1];
    }
    console.log(formData);
    const axiosOptions = {
      url: process.env.React_App_API_URL + "mentor/profile",
      method: "put",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${this.state.token}`,
      },
      data: qs.stringify(formData),
    };

    axios(axiosOptions)
      .then((response) => {
        // AFTER get response loading image become invisiable
        this.setState({
          load_class: "loaderscreen_loaded",
          visibility: false, //when response come visibility of loader icon become false
        });

        if (response.data.status == 0) {
          this.setState({
            errorStatus: "error",
            msg: response.data.message,
          });
        } else {
          this.setState({
            errorStatus: "success",
            msg: response.data.message,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Header />

        <ScreenLoader
          load_class={this.state.load_class}
          visiblity={this.state.visibility}
        />

        <section>
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg-3"></div>
              <div class="col-12 col-lg-6">
                <h1 style={{ textAlign: "center" }}>Mentor Profile</h1>
                <form
                  name="user form"
                  method="POST"
                  onSubmit={(event) => this.handleSubmit(event)}
                >
                  {/* Display error message */}
                  {this.state.errorStatus == "error" ? (
                    <div class="col-12 m-0 p-2 input-group">
                      <FlashMessage duration={5000}>
                        <strong style={{ color: "red" }}>
                          {this.state.msg}
                        </strong>
                      </FlashMessage>
                    </div>
                  ) : null}
                  ​{/* Display success message */}
                  {this.state.errorStatus == "success" ? (
                    <div class="col-12 m-0 p-2 input-group">
                      <FlashMessage duration={5000}>
                        <h4 id="flash_message_heading">{this.state.msg}</h4>
                      </FlashMessage>
                    </div>
                  ) : null}
                  <div class="row form-group-margin">
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="first_name">
                        First Name
                        <input
                          type="text"
                          name="first_name"
                          value={this.state.first_name}
                          class="form-control field-name"
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="last_name">
                        Last Name
                        <input
                          type="text"
                          name="last_name"
                          class="form-control field-name"
                          value={this.state.last_name}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="city">
                        City
                        <input
                          type="text"
                          name="city"
                          class="form-control field-name"
                          value={this.state.city}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="mobile_no">
                        Mobile Number
                        <input
                          type="number"
                          name="mobile_no"
                          class="form-control field-name"
                          value={this.state.mobile_no}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="address">
                        Address
                        <input
                          type="text"
                          name="address"
                          class="form-control field-name"
                          value={this.state.address}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="country">
                        Country
                        <input
                          type="text"
                          name="country"
                          class="form-control field-name"
                          value="Pakistan"
                          readOnly
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="org_name">
                        Orgnization Name
                        <input
                          type="text"
                          name="org_name"
                          class="form-control field-name"
                          value={this.state.org_name}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="designation">
                        Designation
                        <input
                          type="text"
                          name="designation"
                          class="form-control field-name"
                          value={this.state.designation}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="no_of_emp">
                        Education
                        <input
                          type="text"
                          name="education"
                          class="form-control field-name"
                          value={this.state.education}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>

                    <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                      <label for="no_of_emp">
                        Area of Coaching
                        <input
                          type="text"
                          name="areas_of_coach"
                          class="form-control field-name"
                          value={this.state.areas_of_coach}
                          onChange={this.handleChange}
                        />
                      </label>
                    </div>

                    <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                      <label for="org_intro">
                        Work Experience
                        {/* <input type="text" name="work_exp" class="form-control field-name" value={this.state.work_exp} onChange={this.handleChange}/> */}
                        <textarea
                          name="work_exp"
                          value={this.state.work_exp}
                          onChange={this.handleChange}
                          class="form-control field-name"
                        ></textarea>
                      </label>
                    </div>

                    <div class="col-12 input-group m-0 p-2">
                      <input
                        type="submit"
                        class="btn primary-button"
                        value="Update"
                        style={{ marginLeft: "33%", width: "198px" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-12 col-lg-3"></div>
            </div>
            <div class="container" style={{ height: "130px" }}></div>
          </div>
        </section>
      </>
    );
  }
}

export default MentorProfile;
