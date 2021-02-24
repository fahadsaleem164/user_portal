import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"


class Login extends Component {


    handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});

      }


      handleSubmit(event) {

        event.preventDefault()

        const formData = {}
        var fd = new FormData()

        fd.append( 'email', this.state.email)
        fd.append( 'password', this.state.password)

        

        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }       

        console.log(formData)



        const axiosOptions = {

          url: process.env.React_App_API_URL + 'users/login',
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
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
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 col-lg-3"></div>
                                    <div class="col-12 col-lg-6">
                                        
                                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                                            <div class="row form-group-margin">
                                                
                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                      <input type="text" email=""  class="form-control field-name" placeholder="Email" onChange={this.handleChange} />
                                                </div>

                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                      <input type="text" password="password"  class="form-control field-name" placeholder="Password" onChange={this.handleChange} />
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
