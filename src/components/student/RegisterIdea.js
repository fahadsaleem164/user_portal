import React, { Component } from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import * as qs from "query-string";
import Header from "./../../layout/Header";
import ScreenLoader from "../../layout/ScreenLoader";
import ReactTooltip from "react-tooltip";

class RegisterIdea extends Component {
  constructor(props) {
    super(props);

    //Get local storage value here  start here
    if (localStorage.getItem("state_full_lorem_ipsum") == null) {
      this.state = {
        state_full_lorem_ipsum: false,
      };
    } else if (localStorage.getItem("state_full_lorem_ipsum") == "true") {
      this.state = {
        state_full_lorem_ipsum: true,
        token: localStorage.getItem("token"),
        event_token: localStorage.getItem("event_token"),
        error_status: "",
        error_messages: [],
        name: "",
        description: "",
        problem_statement: "",
        innovation: "",
        idea_impact: "",
        tag_line: "",
        explain_reason: "",
        load_class: "loaderscreen_loaded", //already load screen diplay none
        visibility: false,
        name_validation: "",
        description_validation: "",
        problem_statement_validation: "",
        innovation_validation: "",
        idea_impact_validation: "",
        tag_line_validation: "",
        explain_reason_validation: "",
        data_tip_disable_name: false,
        data_tip_disable_description: false,
        data_tip_disable_problem_statement: false,
        data_tip_disable_innovation: false,
        data_tip_disable_idea_impact: false,
        data_tip_disable_tag_line: false,
        data_tip_disable_explain_reason: false,
        questions: [],
        answer_res: [],
        ques : '',
        ans : '',
        ques_ans : [],
        myarray : []
     

      
      };
    }
  }


  handlChangeQuestions = (event) => {

    this.state.ques = event.target.id.split("q_a")[0];
    this.state.ans =  event.target.id.split("q_a")[1]

    this.state.ques_ans.push(
      {
      "question": this.state.ques ,
      "answer" :  this.state.ans
     }
    )

    console.log(this.state.ques_ans)
  

    if (this.state.answer_res[this.state.ques] !== undefined) {
      


      if (event.target.type === "checkbox"){

      if(event.target.checked === false){
      
          
         this.state.answer_res[this.state.ques].splice(this.state.answer_res[this.state.ques].indexOf(this.state.ans), 1) 
        //  console.log(this.state.answer_res)      
     
  
    } else

        if(this.state.answer_res[this.state.ques].includes(this.state.ans) == true) {
            // console.log("already exist")
        
          } else { 
            // console.log("ok")
     
          this.state.answer_res[this.state.ques] = this.state.answer_res[
            this.state.ques
          ].concat(this.state.ans);
        
        }
        
       }  else {
      
        this.state.answer_res[this.state.ques] = [
          this.state.ans
        ];
    }  } else {
     
      this.state.answer_res[this.state.ques] = [
        this.state.ans
      ];
    }


    console.log(this.state.answer_res)

  }
  //   onchange value input filed get data from fields
  handleChange = (event) => {

    this.setState({ [event.target.name]: event.target.value });

    
  
    if (event.target.name == "name" && event.target.value == "") {
      this.setState({
        name_validation: "in_valid",
      });
    } else if (event.target.name == "name" && event.target.value != "") {
      this.setState({
        name_validation: "valid_input",
        data_tip_disable_name: true,
      });
    }

    if (event.target.name == "tag_line" && event.target.value == "") {
      this.setState({
        tag_line_validation: "in_valid",
      });
    } else if (event.target.name == "tag_line" && event.target.value != "") {
      this.setState({
        tag_line_validation: "valid_input",
        data_tip_disable_tag_line: true,
      });
    }

    if (event.target.name == "description" && event.target.value == "") {
      this.setState({
        description_validation: "in_valid",
      });
    } else if (event.target.name == "description" && event.target.value != "") {
      this.setState({
        description_validation: "valid_input",
        data_tip_disable_description: true,
      });
    }

    if (event.target.name == "problem_statement" && event.target.value == "") {
      this.setState({
        problem_statement_validation: "in_valid",
      });
    } else if (
      event.target.name == "problem_statement" &&
      event.target.value != ""
    ) {
      this.setState({
        problem_statement_validation: "valid_input",
        data_tip_disable_problem_statement: true,
      });
    }

    if (event.target.name == "innovation" && event.target.value == "") {
      this.setState({
        innovation_validation: "in_valid",
      });
    } else if (event.target.name == "innovation" && event.target.value != "") {
      this.setState({
        innovation_validation: "valid_input",
        data_tip_disable_innovation: true,
      });
    }

    if (event.target.name == "idea_impact" && event.target.value == "") {
      this.setState({
        idea_impact_validation: "in_valid",
      });
    } else if (event.target.name == "idea_impact" && event.target.value != "") {
      this.setState({
        idea_impact_validation: "valid_input",
        data_tip_disable_idea_impact: true,
      });
    }

    if (event.target.name == "explain_reason" && event.target.value == "") {
      this.setState({
        explain_reason_validation: "in_valid",
      });
    } else if (
      event.target.name == "explain_reason" &&
      event.target.value != ""
    ) {
      this.setState({
        explain_reason_validation: "valid_input",
        data_tip_disable_explain_reason: true,
      });
    }
  };

  //   This function handles image upload

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];

      this.setState({
        logo: event.target.files[0],
      });
    }
  };

  componentDidMount() {
    const axiosOptions = {
      url:
        process.env.React_App_API_URL +
        "student/event-q-ans?event_token=" +
        this.state.event_token,
      method: "get",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
      },
    };

    axios(axiosOptions)
      .then((response) => {
        // {this.state.data.map((data , index) => (
        //   console.log()
        //   ))}

        console.log(response.data.data.question);

        this.setState({
          questions: response.data.data.question,
        });
      })
      .catch((err) => console.log(err));
  }

  handleSubmit(event) {

    event.preventDefault();

    this.setState({
      load_class: "loaderscreen",
      visibility: true,
      error_status: "",
    });


    axios({
      method: 'post',
      url: process.env.React_App_API_URL + "student/idea",
      headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
      data: {
        name:this.state.name,
        tag_line: this.state.tag_line,
        description: this.state.description,
        problem_statement: this.state.problem_statement,
        innovation: this.state.innovation,
        idea_impact: this.state.idea_impact,
        explain_reason: this.state.explain_reason,
        question_answers:this.state.ques_ans,
        event_token:this.state.event_token
      }
    }).then((response) => {
      
      console.log(response);
        this.setState({
          load_class: "loaderscreen_loaded",
          visibility: false,
        });

        if (response.data.status == 0) {

              this.setState({
                error_status: "error",
                msg: response.data.message,
                error_messages: response.data.errors,
      
              });
      
              if (response.data.status == 0) {
                if (response.data.errors.name != undefined) {
                  this.setState({
                    name_validation: "in_valid",
                    data_tip_disable_name: false,
                  });
                } else {
                  this.setState({
                    name_validation: "valid",
                  });
                }
      
                if (response.data.errors.tag_line != undefined) {
                  this.setState({
                    tag_line_validation: "in_valid",
                    data_tip_disable_tag_line: false,
                  });
                } else {
                  this.setState({
                    tag_line_validation: "valid",
                  });
                }
      
                if (response.data.errors.description != undefined) {
                  this.setState({
                    description_validation: "in_valid",
                    data_tip_disable_description: false,
                  });
                } else {
                  this.setState({
                    description_validation: "valid",
                  });
                }
      
                if (response.data.errors.problem_statement != undefined) {
                  this.setState({
                    problem_statement_validation: "in_valid",
                    data_tip_disable_problem_statement: false,
                  });
                } else {
                  this.setState({
                    problem_statement_validation: "valid",
                  });
                }
      
                if (response.data.errors.innovation != undefined) {
                  this.setState({
                    innovation_validation: "in_valid",
                    data_tip_disable_innovation: false,
                  });
                } else {
                  this.setState({
                    innovation_validation: "valid",
                  });
                }
      
                if (response.data.errors.idea_impact != undefined) {
                  this.setState({
                    idea_impact_validation: "in_valid",
                    data_tip_disable_idea_impact: false,
                  });
                } else {
                  this.setState({
                    idea_impact_validation: "valid",
                  });
                }
      
                if (response.data.errors.explain_reason != undefined) {
                  this.setState({
                    explain_reason_validation: "in_valid",
                    data_tip_disable_explain_reason: false,
                  });
                } else {
                  this.setState({
                    explain_reason_validation: "valid",
                  });
                }
              }
            }else {
                  this.setState({
                    error_status: "success",
                    msg: response.data.message,
                  });
                }

    });

    

  }

  render() {
    return (
      <>
        {/* First of all check user login if not login then redirect to home page */}
        {this.state.state_full_lorem_ipsum == false ? (
          <>
            <Redirect to="/" />
          </>
        ) : null}

        {/* If user login then show this message   */}

        {this.state.state_full_lorem_ipsum == true ? (
          <>
            <ScreenLoader
              load_class={this.state.load_class}
              visiblity={this.state.visibility}
            />
            <Header />
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-12 col-lg-3"></div>
                  <div class="col-12 col-lg-6">
                    <h1 style={{ textAlign: "center" }}>Add New Idea</h1>
                    <form
                      name=""
                      method="POST"
                      onSubmit={(event) => this.handleSubmit(event)}
                    >
                      <div class="row form-group-margin">
                        {/* Display validation error */}
                        {this.state.error_status == "error" ? (
                          <div class="col-12 m-0 p-2 input-group">
                            <p style={{ color: "red" }}>{this.state.msg}</p>
                          </div>
                        ) : null}
                        ​ {/* Display Sucess message */}
                        {this.state.error_status == "success" ? (
                          <div class="col-12 m-0 p-2 input-group">
                            <p style={{ color: "green" }}>{this.state.msg}</p>
                          </div>
                        ) : null}



                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {/* {this.state.error_messages.name != undefined ? (
                            <>{ReactTooltip.show(this.name_ref)}</>
                          ) : null} */}

                          <ReactTooltip
                            id="name"
                            getContent={() => {
                              return this.state.error_messages.name;
                            }}
                          />
                          <label for="name">Name</label>
                          <input
                            type="text"
                            name="name"
                            data-tip-disable={this.state.data_tip_disable_name}
                            data-background-color="red"
                            data-effect="solid"
                            data-event-off="click"
                            data-for="name"
                            ref={(ref) => (this.name_ref = ref)}
                            data-tip=""
                            value={this.state.name}
                            className={this.state.name_validation}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {this.state.error_messages.tag_line != undefined ? (
                            <>{ReactTooltip.show(this.tag_line_ref)}</>
                          ) : null}

                          <ReactTooltip
                            id="tag_line"
                            getContent={() => {
                              return this.state.error_messages.tag_line;
                            }}
                          />

                          <label for="tagline">Tagline</label>
                          <input
                            type="text"
                            name="tag_line"
                            data-tip-disable={
                              this.state.data_tip_disable_tag_line
                            }
                            data-background-color="red"
                            data-effect="solid"
                            data-event-off="click"
                            data-for="tag_line"
                            ref={(ref) => (this.tag_line_ref = ref)}
                            data-tip=""
                            value={this.state.tag_line}
                            className={this.state.tag_line_validation}
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {this.state.error_messages.description !=
                          undefined ? (
                            <>{ReactTooltip.show(this.description_ref)}</>
                          ) : null}

                          <ReactTooltip
                            id="description"
                            getContent={() => {
                              return this.state.error_messages.description;
                            }}
                          />
                          <label for="description">Description</label>
                          <textarea
                            name="description"
                            data-tip-disable={
                              this.state.data_tip_disable_description
                            }
                            data-background-color="red"
                            data-effect="solid"
                            data-event-off="click"
                            data-for="description"
                            ref={(ref) => (this.description_ref = ref)}
                            data-tip=""
                            value={this.state.description}
                            onChange={this.handleChange}
                            className={this.state.description_validation}
                          ></textarea>
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {this.state.error_messages.problem_statement !=
                          undefined ? (
                            <>{ReactTooltip.show(this.problem_statement_ref)}</>
                          ) : null}

                          <ReactTooltip
                            id="problem_statement"
                            getContent={() => {
                              return this.state.error_messages
                                .problem_statement;
                            }}
                          />

                          <label for="description">Problem Statement</label>
                          <textarea
                            name="problem_statement"
                            data-tip-disable={
                              this.state.data_tip_disable_problem_statement
                            }
                            data-background-color="red"
                            data-effect="solid"
                            data-event-off="click"
                            data-for="problem_statement"
                            ref={(ref) => (this.problem_statement_ref = ref)}
                            data-tip=""
                            value={this.state.problem_statement}
                            onChange={this.handleChange}
                            className={this.state.problem_statement_validation}
                          ></textarea>
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {this.state.error_messages.innovation != undefined ? (
                            <>{ReactTooltip.show(this.innovation_ref)}</>
                          ) : null}

                          <ReactTooltip
                            id="innovation"
                            getContent={() => {
                              return this.state.error_messages.innovation;
                            }}
                          />
                          <label for="description">Innovation</label>

                          <textarea
                            name="innovation"
                            data-tip-disable={
                              this.state.data_tip_disable_innovation
                            }
                            data-background-color="red"
                            data-effect="solid"
                            data-event-off="click"
                            data-for="innovation"
                            ref={(ref) => (this.innovation_ref = ref)}
                            data-tip="innovation"
                            value={this.state.innovation}
                            onChange={this.handleChange}
                            className={this.state.innovation_validation}
                          ></textarea>
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {this.state.error_messages.idea_impact !=
                          undefined ? (
                            <>{ReactTooltip.show(this.idea_impact_ref)}</>
                          ) : null}

                          <ReactTooltip
                            id="idea_impact"
                            getContent={() => {
                              return this.state.error_messages.idea_impact;
                            }}
                          />

                          <label for="description">Idea Impact</label>
                          <textarea
                            name="idea_impact"
                            data-tip-disable={
                              this.state.data_tip_disable_idea_impact
                            }
                            data-background-color="red"
                            data-effect="solid"
                            data-event-off="click"
                            data-for="idea_impact"
                            ref={(ref) => (this.idea_impact_ref = ref)}
                            data-tip=""
                            value={this.state.idea_impact}
                            onChange={this.handleChange}
                            className={this.state.idea_impact_validation}
                          ></textarea>
                        </div>
                        {/* Handle question and ansawersclass="col-12 col-md-6 col-lg-6 m-0 p-2 input-group" */}
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {this.state.questions.map((data, index) => (
                            <>
                              <h3 for="description">{data.question}</h3>
                              {data.type == "multiple" ? (
                                <>
                                  {data.answer.map((val) => {
                                    return (
                                      <>
                                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                          {/* <div className="form-inline"></div> */}
                                          <div>
                                            {" "}
                                            <label>
                                              <input
                                                type="checkbox"
                                                name={val.id}
                                                id={data.id + "q_a" + val.id}
                                                onChange={this.handlChangeQuestions}
                                              />{" "}
                                              {val.answer}
                                            </label>{" "}
                                          </div>
                                        </div>
                                      </>
                                    );
                                  })}
                                </>
                              ) : null}

                              {data.type == "single" ? (
                                <>
                                  {data.answer.map((val) => {
                                    return (
                                      <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                        <div>
                                            
                                          <label>
                                            <input
                                              type="radio"
                                              id={data.id + "q_a" + val.id}
                                              name={index}
                                              onChange={this.handlChangeQuestions} />
                                                {val.answer}
                                          </label>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </>
                              ) : null}
                            </>
                          ))}
                        </div>
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                          {this.state.error_messages.explain_reason !=
                          undefined ? (
                            <>{ReactTooltip.show(this.explain_reason_ref)}</>
                          ) : null}

                          <ReactTooltip
                            id="explain_reason"
                            getContent={() => {
                              return this.state.error_messages.explain_reason;
                            }}
                          />
                          <label for="logo">Explain Reason</label>
                          <textarea
                            name="explain_reason"
                            data-tip-disable={
                              this.state.data_tip_disable_explain_reason
                            }
                            data-background-color="red"
                            data-effect="solid"
                            data-event-off="click"
                            data-for="explain_reason"
                            ref={(ref) => (this.explain_reason_ref = ref)}
                            data-tip=""
                            value={this.state.explain_reason}
                            onChange={this.handleChange}
                            className={this.state.explain_reason_validation}
                          ></textarea>
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
                  ​<div class="col-12 col-lg-3"></div>
                </div>
              </div>
            </section>
          </>
        ) : null}
      </>
    );
  }
}

export default RegisterIdea;
