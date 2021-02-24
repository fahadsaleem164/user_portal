import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"


class UserRegister extends Component {

        constructor(props){
            super(props)
            this.state = {
             
                msg: '' ,
                errorStatus : '',
                redirect: false
                
           }
        }


        redirectUrl(){

            setTimeout(() => this.setState({ redirect: true }), 1000)
        }

    handleChange = (event) => {        
    
        this.setState({[event.target.name] : event.target.value});
      }

    handleSubmit(event) {

        event.preventDefault()
        const formData = {}
        var fd = new FormData();
       
        fd.append('form-name','user form')
        fd.append( 'name', this.state.name);
        fd.append( 'fname', this.state.fname);
        fd.append( 'email', this.state.email);
        fd.append( 'password', this.state.password);
        fd.append( 'city', this.state.city);
        fd.append( 'mobileNumber', this.state.mobileNumber);
        fd.append( 'stdUniId', this.state.stdUniId);
        fd.append( 'landLineNumber', this.state.landLineNumber);
        fd.append( 'departmentId', this.state.departmentId);
        fd.append( 'eventId',this.state.eventId);

        

        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]
        }       
      
        const axiosOptions = {

          url: process.env.React_App_API_URL + 'users/register',
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
                    <div class="col-12">
                        <h1 style={{textAlign:'center'}}>User Registration</h1>
                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                        {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                   <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null}

                        {this.state.errorStatus == 'success'?
                            <div class="col-12 m-0 p-2 input-group">
                                   <p style={{color:'green'}}>{this.state.msg}
                                   <Redirect to="/verify_code"  />
                                   </p>
                                </div>
                            :null}


                            <div class="row form-group-margin">
                                
                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="text" name="name" class="form-control field-name" placeholder="Name" onChange={this.handleChange}/>
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="text" name="fname" class="form-control field-name" placeholder="Father Name" onChange={this.handleChange}/>
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="text" name="email" class="form-control field-name" placeholder="email" onChange={this.handleChange}/>
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="password" name="password" class="form-control field-name" placeholder="Password" onChange={this.handleChange}/>
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="text" name="city" class="form-control field-name" placeholder="City" onChange={this.handleChange}/>
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="number" name="mobileNumber" class="form-control field-name" placeholder="Mobile Number" onChange={this.handleChange}/>
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="number" class="form-control field-name" name="landLineNumber" placeholder="Landline Number" onChange={this.handleChange} />
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="text" name="stdUniId" class="form-control field-name" placeholder="Student Id" onChange={this.handleChange}/>
                                </div>

                               
                                <div class="col-12 m-0 p-2 input-group">
                                   <input type="text" name="departmentId"  class="form-control field-name" placeholder="Department" onChange={this.handleChange} />
                                </div>

                                <div class="col-12 m-0 p-2 input-group">
                                   <input type="text" name="eventId"  class="form-control field-name" placeholder="Event" onChange={this.handleChange} />
                                </div>
                                
                                <div class="col-12 input-group m-0 p-2">
                                    <input type="submit" class="btn primary-button" style={{marginLeft:"45%"}}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
         
        );
    }
}

export default UserRegister