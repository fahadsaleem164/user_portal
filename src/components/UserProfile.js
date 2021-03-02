import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"


class UserRegister extends Component {

        constructor(props){

            let Params = new URLSearchParams(props.location.search)

            super(props)

            this.state = {
                msg: '' ,
                errorStatus : '',
                token: localStorage.getItem("token"),
                event_token : localStorage.getItem("event_token"),
                first_name : '',
                last_name : '',
                city : '',
                mobile_no : '' ,
                university : '' ,
                campus : '',
                country : '',
                student_id : '',
                class_read : '',
                year_of_study : '',
                field_of_study : null,
                linkedin_profile : null
           }

        }


    handleChange = (event) => {       
        
        this.setState({[event.target.name] : event.target.value});

      }


      componentDidMount(){

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'student/get_profile?event_token='+ this.state.event_token,
            method: "get",
            headers: {
                'Authorization': `Bearer ${this.state.token}`
              }

          }
        
          axios(axiosOptions)
        
          .then(response => {

            console.log(response)

            if(response.data.data.campus){

                this.setState ({
                    campus : response.data.data.campus
                })

            }

            if(response.data.data.student_id){

                this.setState ({
                    student_id : response.data.data.student_id
                })

            }

            if(response.data.data.class){

                this.setState ({
                    class_read : response.data.data.class
                })

            }
            // field_of_study : response.data.data.field_of_study,

            if(response.data.data.field_of_study && response.data.data.field_of_study != "null"){

                this.setState ({
                    field_of_study : response.data.data.field_of_study
                })

            }


            if(response.data.data.university){

                this.setState ({
                    university : response.data.data.university
                })

            }

            if(response.data.data.country){

                this.setState ({
                    country : response.data.data.country
                })

            }

            if(response.data.data.address){

                this.setState ({
                    address : response.data.data.address
                })

            } 

            if(response.data.data.linkedin_profile && response.data.data.linkedin_profile != "null"){

                this.setState ({
                    linkedin_profile : response.data.data.linkedin_profile
                })

            } 


              this.setState({
            
               first_name : response.data.data.first_name , 
               last_name : response.data.data.last_name ,
               city : response.data.data.city,
               mobile_no :response.data.data.mobile_no,
               event_token : this.state.event_token
  
              })

          })
          .catch(err =>

            console.log(err)
           
          )

      }


    handleSubmit(event) {

        event.preventDefault()

        const formData = {}

        var fd = new FormData();
    
        fd.append('first_name', this.state.first_name);
        fd.append('last_name', this.state.last_name);
        fd.append('city', this.state.city);
        fd.append('mobile_no', this.state.mobile_no);
        fd.append('university', this.state.university);
        fd.append('campus', this.state.campus);
        fd.append('country', this.state.country);
        fd.append('student_id', this.state.student_id);
        fd.append('class', this.state.class_read);
        fd.append('year_of_study', this.state.year_of_study);
        fd.append('field_of_study', this.state.field_of_study);
        fd.append('linkedin_profile', this.state.linkedin_profile);
        fd.append('event_token', this.state.event_token);
        
        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }      
        
        
        console.log(formData)

        const axiosOptions = {

          url: process.env.React_App_API_URL + 'student/update_profile',
          method: "post",
          headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
              'Authorization': `Bearer ${this.state.token}`
            },
          data: qs.stringify(formData)
        }
      
        axios(axiosOptions)
          .then(response => {
           console.log(response)
                if(response.data.status == 0){
                   
                    this.setState({
                        errorStatus : 'error',
                        msg:response.data.message,
                      })

                } 
                else {
                   
                    this.setState({
                        errorStatus : 'success', 
                        msg:response.data.message,
                        
                      })
                } 
        
          })
          .catch(err =>
            console.log(err)
          )
      }




    render() {

        return (

            <section>
            <div class="container" >
                <div class="row">
                    <div class="col-12 col-lg-3"></div>
                    <div class="col-12 col-lg-6">
                        <h1 style={{textAlign:'center'}}>User Profile</h1>
                        <form name="" method="POST" onSubmit={event => this.handleSubmit(event)}>
                        {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null}
​
                        {this.state.errorStatus == 'success'?
                            <div class="col-12 m-0 p-2 input-group">
                                <p style={{color:'green'}}>
                                    {this.state.msg}
                                </p>
                                </div>
                            :null}
​
​
                            <div class="row form-group-margin">
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="first_name">
                                        First Name

                                        </label>
                                        <input type="text" name="first_name" value={this.state.first_name} class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="last_name">
                                        Last Name
                                        </label>
                                        <input type="text" name="last_name" value={this.state.last_name} class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="city">
                                        City
                                    </label>
                                        <input type="text" name="city" value={this.state.city} class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>

                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="country">
                                        Country</label>
                                        <input type="text" name="country" value="Pakistan" readOnly="" class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="mobile_no">
                                        Mobile Number</label>
                                        <input type="text" name="mobile_no" value={this.state.mobile_no} class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>

                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="student_id">
                                        Student ID </label>
                                        <input type="text"  name="student_id" value={this.state.student_id} class="form-control field-name" onChange={this.handleChange}/>
                                   
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="which_university">
                                        University</label>
                                        <input type="text" name="university" value={this.state.university}  class="form-control field-name"  onChange={this.handleChange}/>
                                    
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="campus">
                                        Campus</label>
                                        <input type="text" name="campus" value={this.state.campus} class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="class">
                                        Class/Year of Study
                                        </label>
                                        <input type="text" name="class_read"  value={this.state.class_read} class="form-control field-name" onChange={this.handleChange}/>
                                   
                                </div>

                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="field_of_study">
                                        Field of Study
                                        </label>
                                        <input type="text" name="field_of_study" value={this.state.field_of_study} class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>

                                <div class="col-12 input-group m-0 p-2">
                                    <label for="field_of_study">
                                        Linkedin Profile
                                        </label>
                                        <input type="text" name="linkedin_profile" value={this.state.linkedin_profile}  class="form-control field-name" onChange={this.handleChange}/>
                                    
                                </div>
​
                                <div class="col-12 input-group m-0 p-2">
                                    <input type="submit" value="Update"  class="btn primary-button" style={{marginLeft:"33%", width:'198px'}}/>
                                </div>
                            </div>
                        </form>
                    </div>
​
                    <div class="col-12 col-lg-3"></div>
                </div>
                <div class="container" style={{height: "130px"}}>
​
                </div>
            </div>
</section>

               
          
         
        );
    }
}

export default UserRegister