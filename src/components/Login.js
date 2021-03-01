import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"

class Login extends Component {


    constructor(props){

        let Params = new URLSearchParams(props.location.search)
        // console.log(Params.get('event_token'))

        super(props)

        this.state = {

            loggedIn : false,
            event_token : Params.get('event_token')
           
            
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
        fd.append('token' , this.state.event_token)

        

        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }       
        const axiosOptions = {

          url: process.env.React_App_API_URL + 'login',
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: qs.stringify(formData)
        }

        console.log(formData)
      
        axios(axiosOptions)

          .then(response => {
     
                if(response.data.status == 0){
                   
                    this.setState({
                        errorStatus : 'error',
                        msg:response.data.message,
                      })

                } 
                
                else {

                    console.log(response)

                    localStorage.setItem("token" ,response.data.data.token)
                    localStorage.setItem("role" ,response.data.data.roles)
                   

                    this.setState({
                       
                        loggedIn : true
                        
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
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-3"></div>
                                    <div class="col-12 col-lg-6">
                                    {this.state.loggedIn == true?
                                         <Redirect to="/" />
                                    : null}
                                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                                            <div class="row form-group-margin">
                                                
                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                      <input type="email" name="email"  class="form-control field-name" placeholder="Email" onChange={this.handleChange} />
                                                </div>

                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                      <input type="text" name="password"  class="form-control field-name" placeholder="Password" onChange={this.handleChange} />
                                                </div>

                                                <div class="col-12 input-group m-0 p-2">
                                                    <input type="submit" class="btn primary-button" value="Login" style={{marginLeft:"45%"}}/>
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
