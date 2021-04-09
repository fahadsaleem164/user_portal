import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
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
  import FlashMessage from 'react-flash-message' 
  import  "../../layout/Student.css";


class SendInvitation extends Component {

    constructor(props) {
        super(props);

        if (localStorage.getItem("state_full_lorem_ipsum") == null) {
            this.state = {
              state_full_lorem_ipsum: false,
            };
          } else if (localStorage.getItem("state_full_lorem_ipsum") == "true") {
            this.state = {
                visible : false,
                state_full_lorem_ipsum: true,
                token: localStorage.getItem("token"),
                event_token: localStorage.getItem("event_token"),
                load_class: "loaderscreen", //already load screen diplay none
                visibility: true,  
                data:[],
                questions_ansawers : [],
                msg : '',
                error_status : ''
              };
            }
    
        
    }
 
    openModal() {
        this.setState({
            visible : true
        });
    }
 
    closeModal() {
        this.setState({
            visible : false
        });
    }

    componentDidMount() {
        const axiosOptions = {
          url:
            process.env.React_App_API_URL +
            "student/user-list-for-invitation?event_token=" +
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
               
              });

           
          })
          .catch((err) => console.log(err));
      }

      handleSubmit(event,id) {

        event.preventDefault();
    
        this.setState({
          load_class: "loaderscreen",
          visibility: true,
          error_status: "",
        });
    
    
        axios({
          method: 'post',
          url: process.env.React_App_API_URL + "student/send-invitation",
          headers: {
                Authorization: `Bearer ${this.state.token}`,
              },
          data: {
            member_id: id,
            event_token:this.state.event_token,
          }
        }).then((response) => {
          
          console.log(response.data.message);

            this.setState({
              load_class: "loaderscreen_loaded",
              visibility: false,
            });
    
            if (response.data.status == 0) {
    
                this.setState({
                    error_status: "error",
                    msg: response.data.message,
                  });

            }else if(response.data.status == 1){
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
               
                {/* <div onClick={() => this.openModal()}>Send Invitation</div> */}
                {/* <input type="button" value="Open"  /> */}
                {/* <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h1>Title</h1>
                        <p>Some Contents</p>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal> */}

               


                <section>
                        <div class="container">
                        <div class="row">
                        <div class="col-12 col-lg-3"></div>
                        <div class="col-12 col-lg-6">

                            
                        {this.state.error_status == "error" ? (
                          <div class="col-12 m-0 p-2 input-group">
                            {/* <p style={{ color: "red" }}>{this.state.msg}</p> */}
                            <FlashMessage duration={5000}>
                                    <strong style={{color:'red'}}>{this.state.msg}</strong>
                                    </FlashMessage>
                          </div>
                        ) : null}
                        ​ {/* Display Sucess message */}
                        {this.state.error_status == "success" ? (
                          <div class="col-12 m-0 p-2 input-group">
                             <FlashMessage duration={5000}>
                                      <h4 id="flash_message_heading">{this.state.msg}</h4>
                                    </FlashMessage>
                          </div>
                        ) : null}
                                                     <table>
                                                            <tr>
                                                                <th>Firstname</th>
                                                                <th>Lastname</th>
                                                                <th>email</th>
                                                                <th>Send Invitation</th>
                                                            </tr>

                                                            {this.state.data.map(i => 
                                                                <tr className='data_row'>
                                                                    <td>{i.first_name}</td>
                                                                    <td>{i.last_name}</td>
                                                                    <td>{i.email}</td>
                                                                    <button className="button" onClick={(event) => this.handleSubmit(event , i.member_id)}>Send Invitation</button>
                                                                </tr>
                          
                                                                )}
                                                           
                                                            
                                                    </table>
                                            </div>
                                        </div>
                                    </div>
                           

            </section>
            </>
        );
    }
}

export default SendInvitation 