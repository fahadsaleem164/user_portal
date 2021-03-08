import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"


class Registration extends Component {

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

          url: process.env.React_App_API_URL + 'signup',
          method: "post",
          headers: { 
              "Content-Type": "application/x-www-form-urlencoded",
              "X-Requested-With": "XMLHttpRequest"
              
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
                        msg:'Please Check your Email for verification',
                        
                      })
                } 
        
          })
          .catch(err =>
            console.log(err)
          )
      }




    render() {

        return (

                <section >
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-3"></div>
                                    <div class="col-12 col-lg-6">
                                        <h1 style={{textAlign:'center'}}>Navy Person Registration</h1>
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
                                                    <input type="text" name="first_name" class="form-control field-name" placeholder="First Name" onChange={this.handleChange}/>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    <input type="text" name="last_name" class="form-control field-name" placeholder="Last Name" onChange={this.handleChange}/>
                                                </div>

                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <input type="text" name="email" class="form-control field-name" placeholder="Email" onChange={this.handleChange}/>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    <input type="password" name="password" class="form-control field-name" placeholder="Password" onChange={this.handleChange}/>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    <input type="password" name="confirm_password" class="form-control field-name" placeholder="Confirm Password" onChange={this.handleChange}/>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    <input type="text" name="city" class="form-control field-name" placeholder="City" onChange={this.handleChange}/>
                                                </div>

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    <input type="text" name="mobile_no" class="form-control field-name" placeholder="Mobile Number" onChange={this.handleChange}/>
                                                </div>
                                                
                                                <div class="col-12 input-group m-0 p-2">
                                                    <input type="submit" class="btn primary-button" value="Register" style={{marginLeft:"33%", width:'198px'}}/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="col-12 col-lg-3"></div>
                                </div>
                            </div>
             </section>
          
         
        );
    }
}

export default Registration