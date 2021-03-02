import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"

class Login extends Component {


    constructor(props){

        let Params = new URLSearchParams(props.location.search)
        super(props)

        this.state = {

            logged_in : false,
            event_token : Params.get('event'),
            user_type : '',
            error_status : ''
           
            
       }
    }



    handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});

      }


      handleSubmit(event) {

        event.preventDefault()

        const formData = {}
        var fd = new FormData()

        fd.append( 'email', this.state.email)
        fd.append( 'password', this.state.password)
        fd.append('event_token' , this.state.event_token)

        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }       
        const axiosOptions = {

          url: process.env.React_App_API_URL + 'login',
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData)
        }

        axios(axiosOptions)

          .then(response => {

                if(response.data.status == 0){
                 
                    this.setState({
                        error_status : 'error',
                        msg:response.data.message,
                    })

                } else {
                    localStorage.setItem("token" ,response.data.data.token)
                    localStorage.setItem("role" ,response.data.data.roles)
                    localStorage.setItem("event_token" ,this.state.event_token)
                    this.setState({
                        error_status : 'success',
                        logged_in : true , 
                        user_type :response.data.data.roles 
                    })
                } 
        
          }).catch(err =>
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

                                        {/* Error message diplay */}
                  
                                    {this.state.error_status == 'error'?
                                                    <>
                                                        <div> 
                                                            <p style={{color:'red'}}>{this.state.msg}</p>
                                                        </div>  
                                                    </>
                                        : null}
                  
                                        {/* Success message display */}

                                        {this.state.error_status == 'success'?
                                                    <>
                                                        {this.state.logged_in == true?
                                                        <div>
                                                                {this.state.user_type == 'mentor'?
                                                                    <Redirect to="/mentor_profile" />    
                                                                : null}

                                                                {this.state.user_type == 'student'?
                                                                    <Redirect to="/user_profile" />    
                                                                : null}
                                                            
                                                        </div>
                                                        : null}
                                                    </>
                                        : null}
                                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                                            <div class="row form-group-margin">
                                                
                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                     <label>Email</label>
                                                      <input type="email" name="email"  class="form-control field-name" onChange={this.handleChange} />
                                                </div>

                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                      <label>Password</label>
                                                      <input type="password" name="password"  class="form-control field-name" onChange={this.handleChange} />
                                                </div>

                                                <div class="col-12 input-group m-0 p-2">
                                                    <input type="submit" class="btn primary-button" value="Login" style={{marginLeft:"35%" ,  width:'198px'}}/>
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

export default Login;
