import React, { Component } from 'react';
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"
import {connect } from 'react-redux'
import axios from "axios"
import * as qs from "query-string"


class RegisterIdea extends Component {
    constructor(props){

        super(props)
        //Get local storage value here  start here
        if(localStorage.getItem("state_full_lorem_ipsum") == null){
          
              this.state = {
  
                  state_full_lorem_ipsum : false
              
              } 

        } else if(localStorage.getItem("state_full_lorem_ipsum") == 'true') {
             
              this.state = {
                  state_full_lorem_ipsum : true,
                  token: localStorage.getItem("token"),
                  event_token : localStorage.getItem("event_token"),
                  error_status : '',
                  name:'',
                  description:'',
                  problem_statement:'',
                  innovation:'',
                  idea_impact:'',
                  idea_classified_as:'',
                  scale_of_business:'',
                  describe_idea:'',
                  exp_reason: '',
                  logo : '',
               
              }
        }


    }
//   onchange value input filed get data from fields
    handleChange = (event) => {       
        
        this.setState({[event.target.name] : event.target.value});

      }


    //   This function handles image upload

      onImageChange = event => {

        if (event.target.files && event.target.files[0]) {

          let img = event.target.files[0];

          this.setState({
            logo: event.target.files[0]
          });

        }

      };


      handleSubmit(event) {

        event.preventDefault()
        let formdata = new FormData();

        formdata.append('name', this.state.name)
        formdata.append('description', this.state.description)
        formdata.append('problem_statement', this.state.problem_statement)
        formdata.append('innovation', this.state.innovation)
        formdata.append('idea_impact', this.state.idea_impact)
        formdata.append('idea_classified_as', this.state.idea_classified_as)
        formdata.append('scale_of_business', this.state.scale_of_business)
        formdata.append('describe_idea', this.state.describe_idea)
        formdata.append('exp_reason', this.state.exp_reason)
        formdata.append('logo', this.state.logo)
        formdata.append('event_token', this.state.event_token)
     

        console.log(this.state.logo)

        axios({
            url : process.env.React_App_API_URL + 'student/submit_idea',
            method : "POST" , 
            headers : {
                'Authorization': `Bearer ${this.state.token}`
            },
            data : formdata
        }).then((res)=>{
            console.log(res)
                            if(res.data.status == 0){

                                this.setState({
                                    error_status : 'error',
                                    msg:res.data.message,
                                })
            
                            } else {
                            
                                this.setState({
                                    error_status : 'success', 
                                    msg:res.data.message,
                                    
                                })
                            } 
           }) 
    }


    render() {
        return (
            <>

            {/* First of all check user login if not login then redirect to home page */}
            {this.state.state_full_lorem_ipsum == false?
                <>
                    <Redirect to='/' />
                </>
            :null}

            {/* If user login then show this message   */}

             {this.state.state_full_lorem_ipsum == true?
                <>
                        <section>
                                <div class="container" >
                                    <div class="row">
                                        <div class="col-12 col-lg-3"></div>
                                         <div class="col-12 col-lg-6">
                                            <h1 style={{textAlign:'center'}}>Add New Idea</h1>
                                            <form name="" method="POST" onSubmit={event => this.handleSubmit(event)}>

                                                <div class="row form-group-margin">

                                                    {/* Display validation error */}
                                                        {this.state.error_status == 'error'?
                                                            <div class="col-12 m-0 p-2 input-group">
                                                                <p style={{color:'red'}}>{this.state.msg}</p>
                                                                </div>
                                                            :null}
                                ​                    {/* Display Sucess message */}
                                                        {this.state.error_status == 'success'?
                                                            <div class="col-12 m-0 p-2 input-group">
                                                                <p style={{color:'green'}}>
                                                                    {this.state.msg}
                                                                </p>
                                                                </div>
                                                            :null}

                                                    <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                        <label for="name">
                                                            Name
                                                            </label>
                                                            <input type="text" name="name" class="form-control field-name" onChange={this.handleChange}/>
                                                        
                                                    </div>

                                                    <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Description
                                                      </label>
                                                       <textarea name="description" onChange={this.handleChange} class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Problem Statement
                                                      </label>
                                                       <textarea name="problem_statement" onChange={this.handleChange} class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Innovation
                                                      </label>
                                                       <textarea name="innovation" onChange={this.handleChange} class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Idea Impact
                                                      </label>
                                                       <textarea name="idea_impact" onChange={this.handleChange} class="form-control field-name"></textarea>
                                                   </div>


                                                   <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Idea Classification
                                                      </label>
                                                      <select  name="idea_classified_as" onChange={this.handleChange}>
                                                        
                                                        <option>Select Idea Classification</option>
                                                         <option>Coastal</option>
                                                         <option>CPEC</option>
                                                      </select>
                                                   </div>


                                                   <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Scale of Business
                                                      </label>
                                                      <select  name="scale_of_business" onChange={this.handleChange}>
                                                        <option>Select Scale of Business</option>
                                                         <option>Small</option>
                                                         <option>Medium</option>
                                                         <option>Large</option>
                                                      </select>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Describe your Idea
                                                      </label>
                                                       <textarea name="describe_idea" onChange={this.handleChange} class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Reasoning
                                                      </label>
                                                       <textarea name="exp_reason" onChange={this.handleChange} class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                <label for="logo">
                                                                    Logo
                                                                    </label>
                                                                    <input type="file" name="logo"  class="form-control field-name" onChange={this.onImageChange}/>
                                                                
                                                            </div>
                    
    
                                                    <div class="col-12 input-group m-0 p-2">
                                                        <input type="submit" value="Add"  class="btn primary-button" style={{marginLeft:"33%", width:'198px'}}/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                    ​
                                        <div class="col-12 col-lg-3"></div>
                                    </div>
                                
                                </div>
                        </section>
                </>
            :null}

    </>
           
        );
    }
}

const  mapStateToProps = (state) => {
    
    return (
        {
            login_status : state.login_status
        }
    )
  }

export default  connect(mapStateToProps)(RegisterIdea);
