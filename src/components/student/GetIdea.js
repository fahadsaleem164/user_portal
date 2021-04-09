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

class GetIdea extends Component {

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
            questions_ansawers : []
          };
        }

    }


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
        
            this.setState({
                
                load_class: "loaderscreen_loaded",
                visibility:false,
                data : response.data.data,
                questions_ansawers : response.data.data.user_answer_of_idea

              });

           
          })
          .catch((err) => console.log(err));
      }

   



render() {

  
    console.log(this.state.questions_ansawers)




    return (

                    <>
                        <Header/>

           

        <ScreenLoader
              load_class={this.state.load_class}
              visiblity={this.state.visibility}
            />
        <section id="single" class="section-1 single">
            <div class="container">
                <div class="row">
                    
                 
                    <div class="col-12 col-lg-8 p-0 text">
                        <div class="row intro m-0">
                            <div class="col-12">
                                {/* <span class="pre-title m-0">Donation of clothes and food</span> */}
                                <div class="title-icon">
                                    
                                    <h2><span class="featured"><span><i class="icon icon-present"></i>  </span></span> {this.state.data.name}</h2>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                               <div class="title-icon">
                                    <h5>Description</h5>
                                </div>
                                <div class="col-12 align-self-center">
                                     <p>{this.state.data.description}</p>
                            </div>
                        </div>  

                        <div class="row">
                               <div class="title-icon">
                               <h5>Problem Statement</h5>
                                </div>
                                <div class="col-12 align-self-center">
                                     <p>{this.state.data.problem_statement}</p>
                            </div>
                        </div> 

                        <div class="row">
                               <div class="title-icon">
                               <h5>Innovation</h5>
                                </div>
                                <div class="col-12 align-self-center">
                                     <p>{this.state.data.innovation}</p>
                            </div>
                        </div> 


                        <div class="row">
                               <div class="title-icon">
                               <h5>Idea Impact</h5>
                                </div>
                                <div class="col-12 align-self-center">
                                     <p>{this.state.data.idea_impact}</p>
                            </div>
                        </div> 

                        <div class="row">
                               <div class="title-icon">
                               <h5>Explain Reason</h5>
                                </div>
                                <div class="col-12 align-self-center">
                                     <p>{this.state.data.explain_reason}</p>
                            </div>
                        </div>

                        {this.state.questions_ansawers.map(i => 
                                  <div class="row">
                                  <div class="title-icon">
                                  <h5>{i.question}</h5>
                                   </div>
                                   <div class="col-12 align-self-center">
                                        <p>{i.answer}</p>
                               </div>
                           </div>
                        )}
                       

                    



                    </div>
                    
                 
                    <aside class="col-12 col-lg-4 pl-lg-5 p-0 float-right sidebar">                    
                        <div class="row">
                            <div class="col-12 align-self-center text-left">
                                <h4>Event Photos</h4>
                                
                                
                                <div class="gallery row justify-content-center">
                                    <a class="col-6 pl-0 item" href="assets/images/project-1.jpg">
                                        <img src="assets/images/project-1.jpg" alt="Project" class="w-100"/>
                                    </a>
                                    <a class="col-6 pr-0 item" href="assets/images/project-2.jpg">
                                        <img src="assets/images/project-2.jpg" alt="Project" class="w-100"/>
                                    </a>
                                    <a class="col-6 pl-0 item" href="assets/images/project-3.jpg">
                                        <img src="assets/images/project-3.jpg" alt="Project" class="w-100"/>
                                    </a>
                                    <a class="col-6 pr-0 item" href="assets/images/project-4.jpg">
                                        <img src="assets/images/project-4.jpg" alt="Project" class="w-100"/>
                                    </a>
                                    <a class="col-6 pl-0 item" href="assets/images/project-5.jpg">
                                        <img src="assets/images/project-5.jpg" alt="Project" class="w-100"/>
                                    </a>
                                    <a class="col-6 pr-0 item" href="assets/images/project-6.jpg">
                                        <img src="assets/images/project-6.jpg" alt="Project" class="w-100"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
           
            
                        </>
                
    )
}



}

export default GetIdea;
