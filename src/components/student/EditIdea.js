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

class EditIdea extends Component {

  constructor(props) {

    super(props);

    if (localStorage.getItem("state_full_lorem_ipsum") == null) {
        this.state = {
          state_full_lorem_ipsum: false,
        };
      } else if (localStorage.getItem("state_full_lorem_ipsum") == "true") {
        this.state = {
            state_full_lorem_ipsum: true,
            token: localStorage.getItem("token"),
            event_token: localStorage.getItem("event_token"),
            load_class: "loaderscreen", //already load screen diplay none
            visibility: true,  
            data:[],
            questions_ansawers : [],
            name: "",
            description: "",
            problem_statement: "",
            innovation: "",
            idea_impact: "",
            tag_line: "",
            explain_reason: "",
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
          };
        }

    }


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


    componentDidMount() {
        const axiosOptions = {
          url:
            process.env.React_App_API_URL +
            "student/idea?event_token=" +
            this.state.event_token,
          method: "get",
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
        };
    
        axios(axiosOptions)
          .then((response) => {

            console.log(response.data.data)
        
            this.setState({
                
                load_class: "loaderscreen_loaded",
                visibility:false,
                data : response.data.data,
                questions_ansawers : response.data.data.user_answer_of_idea,
                name: response.data.data.name,
                description: response.data.data.description,
                explain_reason : response.data.data.explain_reason,
                idea_impact : response.data.data.idea_impact,
                problem_statement : response.data.data.problem_statement,
                innovation : response.data.data.innovation,
                tag_line : response.data.data.tag_line
                

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
          method: 'put',
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
            event_token:this.state.event_token,
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
                  if(response.data.errors != undefined){
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
      
                    if (response.data.errors.question_answers != undefined) {
                      this.setState({
                           question_and_ans_error_msg : response.data.errors.question_answers[0]
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
           <Header/>
           <ScreenLoader
              load_class={this.state.load_class}
              visiblity={this.state.visibility}
            />
           <section>
              <div class="container">
                <div class="row">
                  <div class="col-12 col-lg-3"></div>
                  <div class="col-12 col-lg-6">
                    <h1 style={{ textAlign: "center" }}>Edit Idea</h1>
                    <form
                      name=""
                      method="POST"
                      onSubmit={(event) => this.handleSubmit(event)}
                    >
                      <div class="row form-group-margin">
                        {/* Display validation error */}

                        {this.state.question_and_ans_error_msg != "" ? (
                          <div class="col-12 m-0 p-2 input-group">
                            <p style={{ color: "red" }}>{this.state.question_and_ans_error_msg}</p>
                          </div>
                        ) : null}



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
                           
                            {/* error_messages */}
                          {this.state.error_messages != undefined ? (

                            <>
                               {this.state.error_messages.name != undefined ? (
                                 <>
                                {ReactTooltip.show(this.name_ref)}
                                <ReactTooltip
                                  id="name"
                                  getContent={() => {
                                    return this.state.error_messages.name;
                                  }}
                                />
                                </>
                                ): null}
                            </>
                            ) : null}

                        
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
                        {this.state.error_messages != undefined ? (

                          <>
                          {this.state.error_messages.tag_line != undefined ? (
                            <>{ReactTooltip.show(this.tag_line_ref)}
                             <ReactTooltip
                            id="tag_line"
                            getContent={() => {
                              return this.state.error_messages.tag_line;
                            }}
                          />
                            </>
                          ) : null}

                          </>
                          ) : null}

                         

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

                        {this.state.error_messages != undefined ? (
                          <>
                          {this.state.error_messages.description !=
                          undefined ? (
                            <>{ReactTooltip.show(this.description_ref)}
                             <ReactTooltip
                            id="description"
                            getContent={() => {
                              return this.state.error_messages.description;
                            }}
                          />
                            </>
                          ) : null}
                          </>
                          ) : null}


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

                        {this.state.error_messages != undefined ? (
                          <>

                          {this.state.error_messages.problem_statement !=
                          undefined ? (
                            <>{ReactTooltip.show(this.problem_statement_ref)}
                             <ReactTooltip
                            id="problem_statement"
                            getContent={() => {
                              return this.state.error_messages
                                .problem_statement;
                            }}
                          />
                            </>
                          ) : null}

                          </>
                          ) : null}

                         

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
                        {this.state.error_messages != undefined ? (
                          <>
                          
                          {this.state.error_messages.innovation != undefined ? (
                            <>{ReactTooltip.show(this.innovation_ref)}
                            <ReactTooltip
                            id="innovation"
                            getContent={() => {
                              return this.state.error_messages.innovation;
                            }}
                          />
                            </>
                          ) : null}

                          </>
                           ) : null}

                          
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

                        {this.state.error_messages != undefined ? (
                          <>

                          {this.state.error_messages.idea_impact !=
                          undefined ? (
                            <>{ReactTooltip.show(this.idea_impact_ref)}
                             <ReactTooltip
                            id="idea_impact"
                            getContent={() => {
                              return this.state.error_messages.idea_impact;
                            }}
                          />
                            </>
                          ) : null}
                          </>
                          ) : null}
                         

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
                      
                   
                        <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">

                        {this.state.error_messages != undefined ? (
                          <>

                          {this.state.error_messages.explain_reason !=
                          undefined ? (
                            <>{ReactTooltip.show(this.explain_reason_ref)}
                             <ReactTooltip
                            id="explain_reason"
                            getContent={() => {
                              return this.state.error_messages.explain_reason;
                            }}
                          />
                            </>
                          ) : null}
                          </>
                           ) : null}

                         
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
                
    )
}



}

export default EditIdea;
