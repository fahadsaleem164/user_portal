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
                field_of_study : '',
                linkedin_profile : ''
           }

        }


    handleChange = (event) => {       
        
        this.setState({[event.target.name] : event.target.value});

      }


      componentDidMount(){

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'student/get_profile?event_token='+this.state.event_token,
            method: "get",
            headers: {
                'Authorization': `Bearer ${this.state.token}`
              }

          }
        
          axios(axiosOptions)
        
          .then(response => {
            console.log(response)
              this.setState({
            
               first_name : response.data.data.first_name , 
               last_name : response.data.data.last_name ,
               city : response.data.data.city,
               mobile_no :response.data.data.mobile_no,
               address : response.data.data.address,
               country : response.data.data.country,
               university : response.data.data.university,
               campus :response.data.data.campus,
               student_id : response.data.data.student_id,
               class_read :response.data.data.class,
               field_of_study : response.data.data.field_of_study,
               linkedin_profile : response.data.data.linkedin_profile,
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

            <section class="section-2"  style={{background:"#eef4ed"}}>
            <div class="container" >
                <div class="row">
                    <div class="col-12 col-lg-3"></div>
                    <div class="col-12 col-lg-6">
                        <h1 style={{textAlign:'center'}}>User Profile</h1>
                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
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
                                        <input type="text" name="first_name" value={this.state.first_name} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="last_name">
                                        Last Name
                                        <input type="text" name="last_name" value={this.state.last_name} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="city">
                                        City
                                        <input type="text" name="city" value={this.state.city} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="mobile_no">
                                        Mobile Number
                                        <input type="text" name="mobile_no" value={this.state.mobile_no} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="which_university">
                                        University
                                        <input type="text" name="university" value={this.state.university}  class="form-control field-name"  onChange={this.handleChange}/>
                                    </label>
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="campus">
                                        Campus
                                        <input type="text" name="campus" value={this.state.campus} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="country">
                                        Country
                                        <input type="text" name="country" value={this.state.country} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="student_id">
                                        Student ID
                                        <input type="text"  name="student_id" value={this.state.student_id} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="class">
                                        Class/Year of Study
                                        <input type="text" name="class_read"  value={this.state.class_read} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>

​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="field_of_study">
                                        Field of Study
                                        <input type="text" name="field_of_study" value={this.state.field_of_study} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>

                                <div class="col-12 input-group m-0 p-2">
                                    <label for="field_of_study">
                                        Linkedin Profile
                                        <input type="text" name="linkedin_profile" value={this.state.linkedin_profile} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
​
                                <div class="col-12 input-group m-0 p-2">
                                    <input type="submit" value="Register" class="btn primary-button" style={{marginLeft:"45%"}}/>
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