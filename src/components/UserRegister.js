import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"
import FlashMessage from 'react-flash-message'
import ReactTooltip from 'react-tooltip';
import Loader from "react-loader-spinner";


class UserRegister extends Component {

        constructor(props){

            let Params = new URLSearchParams(props.location.search)
            

            super(props)

            this.state = {
                msg: '' ,
                error_status : '',
                redirect: false,
                role_token : Params.get('role_token') ,
                event_token : Params.get('event'),
                error_messages : [],
                keys_messages : [],
                error_border_color : 'error_border_color_red',
                first_name : '',
                last_name : '',
                email : '',
                password : '',
                confirm_password : '',
                city : '',
                mobile_no : '',
                on_error_field : 'field_border_bydefault',
                email_validation : 'valid',  //apply css class
                first_name_validation : 'valid',
                last_name_validation : 'valid',
                password_validation : 'valid',
                confirm_password_validation : 'valid',
                city_validation : 'valid',
                mobile_no_validation : 'valid',
                load_class : 'loaderscreen_loaded',  //already load screen diplay none 
                visibility : false, //when screem already loaded no loading image show
                data_tip_disable_first_name : false	,
                data_tip_disable_last_name : false ,
                data_tip_disable_email : false ,
                data_tip_disable_password : false ,
                data_tip_disable_confirm_password : false ,
                data_tip_disable_city : false ,
                data_tip_disable_mobile_no : false ,  


           }

        

        }


    handleChange = (event) => {   

        console.log(event.target.name)
        

        if(event.target.name == "first_name"  && event.target.value == ""){

            this.setState({

                first_name_validation : 'in_valid'
            
            })

        } else if(event.target.name == "first_name"  && event.target.value != "") {
                console.log("first name")

            this.setState({
                first_name_validation : 'valid_input',
                data_tip_disable_first_name : true

            })

        }


        if(event.target.name == "last_name"  && event.target.value == ""){
                     
            this.setState({

                last_name_validation : 'in_valid'
            
            })
            
        } else if(event.target.name == "last_name"  && event.target.value != ""){

       
            this.setState({
                last_name_validation : 'valid_input',
                data_tip_disable_last_name : true

            })
        }

        if(event.target.name == "email"  && event.target.value == ""){
                     
            this.setState({

                email_validation : 'in_valid'
            
            })
            
        } else if(event.target.name == "email"  && event.target.value != "") {
       
            this.setState({
                email_validation : 'valid_input',
                data_tip_disable_email: true

            })
        }

        if(event.target.name == "password"  && event.target.value == "password"){
                     
            this.setState({

                password_validation : 'in_valid'
            
            })
            
        } else if((event.target.name == "password"  && event.target.value != "password")){
       
            this.setState({
                password_validation : 'valid_input',
                data_tip_disable_password: true

            })
        }

     
        if(event.target.name == "confirm_password"  && event.target.value == ""){
                     
            this.setState({

                confirm_password_validation : 'in_valid'
            
            })
            
        } else if((event.target.name == "confirm_password"  && event.target.value != "")) {
       
            this.setState({
                confirm_password_validation : 'valid_input',
                data_tip_disable_confirm_password: true

            })
        }
        
        if(event.target.name == "city"  && event.target.value == ""){
                     
            this.setState({

                city_validation : 'in_valid'
            
            })
            
        } else if(event.target.name == "city"  && event.target.value != "") {
       
            this.setState({

                city_validation : 'valid_input',
                data_tip_disable_city: true

            })
        }

        if(event.target.name == "mobile_no"  && event.target.value == ""){
                     
            this.setState({

                mobile_no_validation : 'in_valid'
            
            })
            
        } else if(event.target.name == "mobile_no"  && event.target.value != "") {
       
            this.setState({

                mobile_no_validation : 'valid_input',
                data_tip_disable_mobile_no: true

            })
        }
        
        

        this.setState({[event.target.name] : event.target.value});

      }

    handleSubmit(event) {

            this.setState({
                load_class : 'loaderscreen',
                visibility : true,
            })
       

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
              "Accept" : "application/json"
              
         },
          data: qs.stringify(formData)
        }
      
        axios(axiosOptions)

          .then(response => {

            console.log(response)

                    this.setState({
                        load_class : 'loaderscreen_loaded',
                        visibility : false,
                    })

                if(response.data.status == 0){
            
                    
                    if(response.data.errors.email != undefined){
                      
                        this.setState({
                            email_validation : 'in_valid',
                            data_tip_disable_email : false
                        })
                    } else {
                       
                        this.setState({
                            email_validation : 'valid'
                        })
                    }

                    if(response.data.errors.password != undefined){
                       
                        this.setState({
                            password_validation : 'in_valid',
                            data_tip_disable_password : false
                        })
                    } else {
                       
                        this.setState({
                            password_validation : 'valid'
                        })
                    }

                    if(response.data.errors.confirm_password != undefined){
                        
                        this.setState({
                            confirm_password_validation : 'in_valid',
                            data_tip_disable_confirm_password : false
                        })
                    } else {
                       
                        this.setState({
                            confirm_password_validation : 'valid'
                        })
                    }

                    if(response.data.errors.first_name != undefined){
                       
                        this.setState({
                            first_name_validation : 'in_valid',
                            data_tip_disable_first_name : false
                        })
                    } else {
                       
                        this.setState({
                            first_name_validation : 'valid'
                        })
                    }

                    if(response.data.errors.last_name != undefined){
                        
                        this.setState({
                            last_name_validation : 'in_valid',
                            data_tip_disable_last_name : false
                        })
                    } else {
                       
                        this.setState({

                            last_name_validation : 'valid'

                        })
                    }

                    if(response.data.errors.city != undefined){
                        

                        this.setState({

                            city_validation : 'in_valid',
                            data_tip_disable_city : false

                        })
                    } else {
                       
                        this.setState({
                            city_validation : 'valid'
                        })
                    }

                    if(response.data.errors.mobile_no != undefined){
                       

                        this.setState({

                            mobile_no_validation : 'in_valid',
                            data_tip_disable_mobile_no : false

                        })
                    } else {
                       
                        this.setState({
                            mobile_no_validation : 'valid'
                        })
                    }

                    
                    this.setState({

                        error_status : 'error',
                        msg:response.data.message,
                        error_messages : response.data.errors,
                      

                      })

                } 
                else if(response.data.status == 1) {
                   
                    this.setState({

                        error_status : 'success', 
                        msg:'Please Check your Email for verification',
                        first_name : '',
                        last_name : '',
                        email : '',
                        password : '',
                        confirm_password : '',
                        city : '',
                        mobile_no : ''

                       
                        

                        
                      })
                } 
        
          })
          .catch(err =>

            console.log(err)

          )
    }

    render() {


        return (
                <section>  

            <div className={this.state.load_class}>
           
           <Loader
                   type="Bars"
                   color="black"
                   height={100}
                   width={100}
                   visible={this.state.visibility}
              
               />

           </div>
                        <div class="container">
                                <div class="row">
                
                            <div class="col-12 col-lg-3"></div>
                                   
                                    <div class="col-12 col-lg-6">
                                        
                                        <h1 style={{textAlign:'center'}}>User Registration</h1>
                                        
                                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                                        
                                      
                                            {/* Display success message */}


                                            {this.state.error_status == 'success'?

                                                <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">


                                                          <div style={{paddingLeft:"8%"}}> 
                                                          <FlashMessage duration={5000} persistOnHover={true}>
                                                                        <h4 id="flash_message_heading">{this.state.msg}</h4>

                                                          </FlashMessage>
                                                            </div>
                                                        
                                                </div>

                                            :null}

                                            
                                            

                                            <div class="row form-group-margin">
                                            
                                            {/* Name input field handling  start here */}

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    
                                                   <label>First Name</label>

                                                        {this.state.error_messages.first_name != undefined ?
                                                          <> 
                                                         
                                                          { ReactTooltip.show(this.first_name_ref) }
                                                           
                                                            </>

                                                        :null }
                                                        
                                                        <ReactTooltip id='name'  getContent={() => { return this.state.error_messages.first_name }}/>

                                                    <input type="text" data-tip-disable={this.state.data_tip_disable_first_name} data-background-color="red" name="first_name" data-effect="solid"  data-event-off="click" data-for='name'  ref={ref => this.first_name_ref = ref} data-tip="" className={this.state.first_name_validation} value={this.state.first_name}  onChange={this.handleChange}/>
                                               
                                                </div>

                                            {/* Name input field handling  end here */}

                                            {/* Last name input field handling  start here */}

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                   
                                                    <label>Last Name</label>
                                                   
                                                    {this.state.error_messages.last_name != undefined ?
                                                          <> 
                                                         
                                                          { ReactTooltip.show(this.last_name_ref) }
                                                           
                                                            </>

                                                        :null }


                                                        <ReactTooltip id='last_name_r'  getContent={() => { return this.state.error_messages.last_name }}/>
                                                    
                                                    <input type="text" name="last_name" data-tip-disable={this.state.data_tip_disable_last_name} value={this.state.last_name}  data-for='last_name_r' className={this.state.last_name_validation} ref={ref => this.last_name_ref = ref} data-tip="" data-background-color="red"  data-effect="solid"  data-event-off="click"  onChange={this.handleChange}/>
                                            </div>
                                                        
                                            {/* Last name input field handling  end here */}


                                            {/* Email input field handling  start here */}

                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">

                                                   <label>Email</label>


                                                        {this.state.error_messages.email != undefined ?
                                                            <> 
                                                         
                                                                     { ReactTooltip.show(this.email_ref) }
                                                           
                                                            </>

                                                        :null }


                                                        <ReactTooltip id='email'  getContent={() => { return this.state.error_messages.email }}/>

                                                    <input type="text" name="email" data-tip-disable={this.state.data_tip_disable_email} value={this.state.email}   className={this.state.email_validation} data-for='email' ref={ref => this.email_ref = ref} data-tip="" data-background-color="red"  data-effect="solid"  data-event-off="click" onChange={this.handleChange}/>
                                                
                                            </div>

                                            {/* Email input field handling end here */}



                                            {/* Password input field handling start here */}

                                            <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    
                                                    <label>Password</label>

                                                    {this.state.error_messages.password != undefined ?
                                                            <> 
                                                         
                                                                     { ReactTooltip.show(this.password_ref) }
                                                           
                                                            </>

                                                        :null }


                                                        <ReactTooltip id='password'  getContent={() => { return this.state.error_messages.password }}/>
                                                
                                                    <input type="password" name="password" data-tip-disable={this.state.data_tip_disable_password} value={this.state.password} data-for='password' ref={ref => this.password_ref = ref} data-tip="" data-background-color="red"  data-effect="solid"  data-event-off="click" className={this.state.password_validation} onChange={this.handleChange}/>
                                                
                                            </div>

                                            {/* password input field handling end here */}

                                            {/* Confirm Password input field handling start here */}

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                   
                                                    <label>Confirm Password</label>  
                                                   
                                                    {this.state.error_messages.confirm_password != undefined ?
                                                    
                                                        <label style={{color:'red'}}>
                                                            * {this.state.error_messages.confirm_password}
                                                            
                                                        </label>
                                            
                                                :null } 
                                                   
                                                    <input type="password" name="confirm_password" data-tip-disable={this.state.data_tip_disable_confirm_password} value={this.state.confirm_password} className={this.state.confirm_password_validation} onChange={this.handleChange}/>
                                               
                                                </div>

                                            {/* Confirm Password input field handling end here */}

                                            {/* City input field handling start here */}

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    
                                                    <label>City</label>
                                                    
                                                    {this.state.error_messages.city != undefined ?
                                                        <> 
                                                     
                                                                 { ReactTooltip.show(this.city_ref) }
                                                       
                                                        </>

                                                    :null }


                                                    <ReactTooltip id='city'  getContent={() => { return this.state.error_messages.city }}/>
                                                   
                                                    <input type="text" name="city" data-tip-disable={this.state.data_tip_disable_city} data-for='city' value={this.state.city} className={this.state.city_validation} ref={ref => this.city_ref = ref} data-tip="" data-background-color="red"  data-effect="solid"  data-event-off="click"   onChange={this.handleChange}/>
                                                
                                                </div>

                                            {/* City input field handling end here */}

                                            {/* Mobile input field handling start here */}

                                                <div class="col-12 col-md-6 col-lg-6 m-0 p-2 input-group">
                                                    
                                                    <label>Mobile Number</label>
                                                    
                                                    {this.state.error_messages.mobile_no != undefined ?
                                                        <> 
                                                     
                                                                 { ReactTooltip.show(this.mobile_no_ref) }
                                                       
                                                        </>

                                                    :null }


                                                    <ReactTooltip id='mobile_no'  getContent={() => { return this.state.error_messages.mobile_no }}/>
                                                    

                                                    <input type="text" name="mobile_no" data-for='mobile_no' data-tip-disable={this.state.data_tip_disable_mobile_no} value={this.state.mobile_no} data-for='mobile_no'  ref={ref => this.mobile_no_ref = ref} data-tip="" data-background-color="red"  data-effect="solid"  data-event-off="click" className={this.state.mobile_no_validation} onChange={this.handleChange}/>
                                                
                                                </div>

                                            {/* Mobile input field handling end here */}
                                                
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

export default UserRegister