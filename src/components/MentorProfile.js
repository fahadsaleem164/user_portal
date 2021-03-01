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
               first_name : '',
               last_name : '',
               city : '',
               mobile_no : '',
               address : '',
               country : '',
               org_name : '',
               designation : '',
               org_est : '',
               no_of_emp : '',
               org_intro : '',
               org_intro : '',

               

                
           }

        }


    handleChange = (event) => {       
        
        this.setState({[event.target.name] : event.target.value});

      }


      componentDidMount(){

        const axiosOptions = {
            url: process.env.React_App_API_URL + 'mentor/get_profile',
            method: "get",
            headers: {
                'Authorization': `Bearer ${this.state.token}`
              }

          }
        
          axios(axiosOptions)
          .then(response => {
              console.log(response)
            this.setState({
            
                data : response.data.message.data
  
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
                        <h1 style={{textAlign:'center'}}>Mentor Profile</h1>
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
                                    <input type="text" name="first_name" class="form-control field-name" placeholder="First Name" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="last_name" class="form-control field-name" placeholder="Last Name" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                    <input type="text" name="email" class="form-control field-name" placeholder="Email" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="city" class="form-control field-name" placeholder="City" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="number" name="mobile_no" class="form-control field-name" placeholder="Mobile Number" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="address" class="form-control field-name" placeholder="Address" onChange={this.handleChange}/>
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="country" class="form-control field-name" placeholder="Country" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="org_name" class="form-control field-name" placeholder="Orgnization Name" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="designation" class="form-control field-name" placeholder="Designation" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="date" id="birthday" name="org-est" />
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="number" name="no_of_emp" class="form-control field-name" placeholder="Number of Employee" onChange={this.handleChange}/>
                                </div>
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="org_intro" class="form-control field-name" placeholder="Orgnization Introduction" onChange={this.handleChange}/>
                                </div>
​
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="text" name="reg_reason" class="form-control field-name" placeholder="Registeration Reason" onChange={this.handleChange}/>
                                </div>
​
​
                                <div class="col-12 input-group m-0 p-2">
                                    <input type="submit" class="btn primary-button" value="update" style={{marginLeft:"45%"}}/>
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

export default MentorProfile
