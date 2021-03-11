import React, { Component } from 'react';
import {connect } from 'react-redux'
import { Redirect  , BrowserRouter as Router , Route , Link } from "react-router-dom"
import axios from "axios"
import * as qs from "query-string"
import StepWizard from 'react-step-wizard';
import FlashMessage from 'react-flash-message'
import Header from '../../layout/Header'


class AddNewTeam extends Component {

    constructor(props){

        super(props)

        //Get local storage value here  start here
       
      if(localStorage.getItem("state_full_lorem_ipsum") == null){
        
            this.state = {

                state_full_lorem_ipsum : false
            
            } 
      } else if(localStorage.getItem("state_full_lorem_ipsum") == 'true') {
           
            this.state = {
                state_full_lorem_ipsum : true,
                token: localStorage.getItem("token"),
                event_token : localStorage.getItem("event_token"),
                preview_image : '',
                error_status : ''
            

            }
      }
}

      //Get local storage value here end here 

    //   onchange value input filed get data from fields
      handleChange = (event) => {       
        
        this.setState({[event.target.name] : event.target.value});

      }


    //   This function handles image upload

      onImageChange = event => {

        

        if (event.target.files && event.target.files[0]) {

          let img = event.target.files[0];

          this.setState({
            logo: event.target.files[0],
            preview_image: URL.createObjectURL(event.target.files[0])
          });

        }

      };


// This function call on submit button
      handleSubmit(event) {

        event.preventDefault()
        let formdata = new FormData();

        formdata.append('name', this.state.name)
        formdata.append('tag_line', this.state.tag_line)
        formdata.append('logo', this.state.logo)
        formdata.append('description', this.state.description)
        formdata.append('event_token', this.state.event_token)

        console.log(this.state.logo)

        axios({
            url : process.env.React_App_API_URL + 'student/create_team',
            method : "POST" , 
            headers : {
                'Authorization': `Bearer ${this.state.token}`
            },
            data : formdata
        }).then((res)=>{
                            if(res.data.status == 0){

                                this.setState({
                                    error_status : 'error',
                                    msg:res.data.message,
                                })
            
                            } else {
                            
                                this.setState({
                                    error_status : 'success', 
                                    msg:res.data.message,
                                    
                                })
                            } 
           }) 
    }


    render() {

        return (
            <>
            <Header/>
                    {/* First of all check user login if not login then redirect to home page */}
                    {this.state.state_full_lorem_ipsum == false?
                        <>
                            <Redirect to='/' />
                        </>
                    :null}

                    {/* If user login then show this message   */}

                     {this.state.state_full_lorem_ipsum == true?
                        <>

                        <StepWizard>
                  
 
                                <section>
                                        <div class="container" >
                                            <div class="row">
                                                <div class="col-12 col-lg-3"></div>
                                                 <div class="col-12 col-lg-6">
                                                    <h1 style={{textAlign:'center'}}>Add New Team</h1>
                                                    <form name="" method="POST" onSubmit={event => this.handleSubmit(event)}>

                                                        <div class="row form-group-margin">

                                                            {/* Display validation error */}
                                                                {this.state.error_status == 'error'?
                                                                    <div class="col-12 m-0 p-2 input-group">
                                                                        <FlashMessage duration={5000}>
                                                                          <strong style={{color:'red'}}>{this.state.msg}</strong>
                                                                        </FlashMessage>
                                                                         </div>
                                                                :null}

                                        ​                    {/* Display Sucess message */}
                                                                {this.state.error_status == 'success'?
                                                                    <div class="col-12 m-0 p-2 input-group">
                                                                        <FlashMessage duration={5000}>
                                                                          <strong style={{color:'red'}}>{this.state.msg}</strong>
                                                                        </FlashMessage>
                                                                     </div>
                                                                :null}

                                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                                <label for="name">
                                                                    Name
                                                                    </label>
                                                                    <input type="text" name="name" class="form-control field-name" onChange={this.handleChange}/>
                                                                
                                                            </div>
                            ​
                                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                                <label for="last_name">
                                                                    Tagline
                                                                    </label>
                                                                    <input type="text" name="tag_line"  class="form-control field-name" onChange={this.handleChange}/>
                                                                
                                                            </div>

                                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                <label for="logo">
                                                                    Logo
                                                                    </label>
                                                                    <input type="file" name="logo"  class="form-control field-name" onChange={this.onImageChange}/>
                                                                    
                                                            </div>

                                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                
                                                                   <img src={this.state.preview_image} alt='' />
                                                            </div>


                                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                             <label for="description">
                                                               Description
                                                               </label>
                                                             <textarea name="description" onChange={this.handleChange} class="form-control field-name"></textarea>
                                                            </div>
            
                                                            <div class="col-12 input-group m-0 p-2">
                                                                <input type="submit" value="Add"  class="btn primary-button" style={{marginLeft:"33%", width:'198px'}}/>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                            ​
                                                <div class="col-12 col-lg-3"></div>
                                            </div>
                                        
                                        </div>
                                </section>
                                
                                
                                </StepWizard>
                        </>
                    :null}

            </>
        );
    }
}


const  mapStateToProps = (state) => {
    
    return (
        {
            login_status : state.login_status
        }
    )
  }

export default  connect(mapStateToProps)(AddNewTeam);