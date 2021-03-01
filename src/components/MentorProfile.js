import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"


class MentorProfile extends Component {

        constructor(props){

            let Params = new URLSearchParams(props.location.search)
            localStorage.getItem("token");

            super(props)

            this.state = {

               token: localStorage.getItem("token"),
               event_token : localStorage.getItem("event_token"),
               first_name : '',
               last_name : '',
               city : '',
               mobile_no : '',
               address : '',
               country : '',
               org_name : '',
               designation : '',
               education : '',
               work_exp : '',
               areas_of_coach : '',
            
                
           }

        }


    handleChange = (event) => {       
        
        this.setState({[event.target.name] : event.target.value});

      }


      componentDidMount(){

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'mentor/get_profile?event_token='+this.state.event_token,
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
               org_name : response.data.data.org_name,
               designation :response.data.data.designation,
               education : response.data.data.education,
               work_exp :response.data.data.work_exp,
               areas_of_coach : response.data.data.areas_of_coach,
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
        fd.append('address', this.state.address);
        fd.append('mobile_no', this.state.mobile_no);
        fd.append('country', this.state.country);
        fd.append('org_name', this.state.org_name);
        fd.append('designation', this.state.designation);
        fd.append('education', this.state.education);
        fd.append('work_exp', this.state.work_exp);
        fd.append('areas_of_coach', this.state.areas_of_coach);
        fd.append('event_token', this.state.event_token);
     

        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }       
        console.log(formData)
        const axiosOptions = {

          url: process.env.React_App_API_URL + 'mentor/update_profile',
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

            <section class="section-2"  style={{background:"#EEF4ED"}}>
            <div class="container" >
                <div class="row">
                    <div class="col-12 col-lg-3"></div>
                    <div class="col-12 col-lg-6">
                        <h1 style={{textAlign:'center'}}>Mentor Profile</h1>
                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                        {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null}
                        {this.state.errorStatus == 'success'?
                            <div class="col-12 m-0 p-2 input-group">
                                <p style={{color:'green'}}>{this.state.msg}
                                {/* <Redirect to="/verify_code"  /> */}
                                </p>
                                </div>
                            :null}
                            <div class="row form-group-margin">
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="first_name">
                                        First Name
                                        <input type="text" name="first_name" value={this.state.first_name} class="form-control field-name" onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="last_name">
                                        Last Name
                                        <input type="text" name="last_name" class="form-control field-name" value={this.state.last_name} onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="city">
                                        City
                                        <input type="text" name="city" class="form-control field-name" value={this.state.city} onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="mobile_no">
                                        Mobile Number
                                        <input type="number" name="mobile_no" class="form-control field-name" value={this.state.mobile_no} onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="address">
                                        Address
                                        <input type="text" name="address" class="form-control field-name" value={this.state.address} onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="country">
                                        Country
                                        <input type="text" name="country" class="form-control field-name" value={this.state.country} onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="org_name">
                                        Orgnization Name
                                        <input type="text" name="org_name" class="form-control field-name" value={this.state.org_name} onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="designation">
                                        Designation
                                        <input type="text" name="designation" class="form-control field-name" value={this.state.designation} onChange={this.handleChange}/>
                                    </label>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="no_of_emp">
                                        Education
                                        <input type="text" name="education" class="form-control field-name" value={this.state.education} onChange={this.handleChange}/>
                                    </label>
                                </div>

                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label for="no_of_emp">
                                        Area of Coaching
                                        <input type="text" name="areas_of_coach" class="form-control field-name" value={this.state.areas_of_coach} onChange={this.handleChange}/>
                                    </label>
                                </div>
                               

                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                    <label for="org_intro">
                                    Work Experience
                                        {/* <input type="text" name="work_exp" class="form-control field-name" value={this.state.work_exp} onChange={this.handleChange}/> */}
                                    <textarea name="work_exp" value={this.state.work_exp} onChange={this.handleChange} class="form-control field-name"></textarea>
                                    </label>
                                </div>
                               
                                <div class="col-12 input-group m-0 p-2">
                                    <input type="submit" class="btn primary-button" value="update" style={{marginLeft:"45%"}}/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-12 col-lg-3"></div>
                </div>
                <div class="container" style={{height: "130px"}}>
                </div>
            </div>
</section>

          
         
        );
    }
}

export default MentorProfile
