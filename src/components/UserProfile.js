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
                redirect: false,
                role_token : Params.get('role_token') ,
                event_token : Params.get('event')
           }

        }


    handleChange = (event) => {       
        
        this.setState({[event.target.name] : event.target.value});

      }

    handleSubmit(event) {

        event.preventDefault()
        const formData = {}
        var fd = new FormData();
    
        fd.append('first_name', this.state.first_name);
        fd.append('last_name', this.state.last_name);
        fd.append('email', this.state.email);
        fd.append('password', this.state.password);
        fd.append('confirm_password', this.state.confirm_password);
        fd.append('city', this.state.city);
        fd.append('mobile_no', this.state.mobile_no);
        fd.append('role_token' ,  this.state.role_token)
        fd.append('event_token', this.state.event_token);
        
        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }       

        const axiosOptions = {

          url: process.env.React_App_API_URL + 'register',
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
                    alert("Please Check your Email")
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
                                <p style={{color:'green'}}>{this.state.msg}
                                
​
                                <Redirect to="/verify_code"  />
                                </p>
                                </div>
                            :null}
​
​
                            <div class="row form-group-margin">
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="first_name">
                                        First Name
                                        <input type="text" name="first_name" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="last_name">
                                        Last Name
                                        <input type="text" name="last_name" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="city">
                                        City
                                        <input type="text" name="city" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="mobile_no">
                                        Mobile Number
                                        <input type="number" name="mobile_no" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="which_university">
                                        University
                                        <input type="text" name="which_university" class="form-control field-name"  onChange={this.handleChange}/>
                                    </label>
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="campus">
                                        Campus
                                        <input type="text" name="campus" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="country">
                                        Country
                                        <input type="text" name="country" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="student_id">
                                        Student ID
                                        <input type="text" name="student_id" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="class">
                                        Class
                                        <input type="text" name="class" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="year_of_study">
                                        Year of Study
                                        <input type="number" name="year_of_study" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                    <label for="field_of_study">
                                        Field of Study
                                        <input type="text" name="field_of_study" class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
​
​
                                <div class="col-12 input-group m-0 p-2">
                                    <input type="submit" class="btn primary-button" style={{marginLeft:"45%"}}/>
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