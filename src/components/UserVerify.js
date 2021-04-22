import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import Header from '../layout/Header'
import {
    Redirect,
    BrowserRouter as Router,
    Route,
    Link,
  } from "react-router-dom";


class UserVerify extends Component {

    constructor(props){
            

        super(props)
        
        this.state = {
         
            msg: '' ,
            errorStatus : '', 
            
       }
    }



    handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});
    
    }


    handleSubmit(event) {

        event.preventDefault()
        const formData = {}
        var fd = new FormData();
       
        fd.append('form-name','user form')
        fd.append('verification_code',this.state.sixDigitNumber)

        

        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]

        }       
      
        const axiosOptions = {

          url: process.env.React_App_API_URL + 'verify-email',
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
            <>
            <Header/>
            <section>
                
                        <div class="container">
                            <div class="row">
                            <div class="col-12 col-lg-4"></div>
                            <div class="col-12 col-lg-8">
                               


                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                       
                        {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                   <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null}

                        {this.state.errorStatus == 'success'?
                            <div class="col-12 m-0 p-2 input-group">
                                <>
                                    <Redirect to={'/login?event=eyJpdiI6IlR3WUpTNmRSeEtjUGhsN1lFUWJWMFE9PSIsInZhbHVlIjoiTm1qZXJPaXFmS1Urakl5SjF3SFNpUT09IiwibWFjIjoiYzExZDY1MjljMmQyMmQzZTE4Y2M4Mzk3YTlmYTU4MGIyYmYxYmZiMTQ0ODFhNGQ2NmE0ZDE2OTU2YWFhYjc5NCJ9'} />
                                </>
                                   {/* <p style={{color:'green'}}>{this.state.msg}</p> */}
                                </div>
                            :null}


                            <div class="row form-group-margin">
                                
                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <label>Place Your Code Here</label>
                                    <input type="text" name="sixDigitNumber" class="form-control field-name" onChange={this.handleChange}/>
                                </div>
                                
                                {/* <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                    <input type="submit" value="Verify" class="btn primary-button" style={{marginLeft:"45%"}}/>
                                </div> */}

                                <div class="col-12 input-group m-0 p-2">
                                                    <input type="submit" value="Verify" class="btn primary-button" style={{marginLeft:"18%"}}/>
                                                </div>

                            </div>
                        </form>
                </div>
                <div class="col-12 col-lg-2"></div>

                    </div>
                        </div>
                    </section>

</>
        );
    }
}

export default UserVerify;