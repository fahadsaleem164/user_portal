import React, { Component } from 'react';
import axios from "axios"
import * as qs from "query-string"




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
        fd.append('sixDigitNumber',this.state.sixDigitNumber)

        

        for (var key of fd.entries()) {
       
            formData[key[0]] = key[1]

        }       
      
        const axiosOptions = {

          url: process.env.React_App_API_URL + 'users/getNumber',
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
            <section class="section-2"  style={{background:"#eef4ed"}}>
                        <div class="container">
                            <div class="row">
                                <div class="col-12"></div>


                        <form name="user form" method="POST" onSubmit={event => this.handleSubmit(event)}>
                       
                        {this.state.errorStatus == 'error'?
                            <div class="col-12 m-0 p-2 input-group">
                                   <p style={{color:'red'}}>{this.state.msg}</p>
                                </div>
                            :null}

                        {this.state.errorStatus == 'success'?
                            <div class="col-12 m-0 p-2 input-group">
                                   <p style={{color:'green'}}>{this.state.msg}</p>
                                </div>
                            :null}


                            <div class="row form-group-margin">
                                
                                <div class="col-12 m-0 p-2 input-group">
                                    <input type="text" name="sixDigitNumber" class="form-control field-name" placeholder="Place Your Code Here" onChange={this.handleChange}/>
                                </div>
                                
                                <div class="col-12 input-group m-0 p-2">
                                    <input type="submit" class="btn primary-button" style={{marginLeft:"45%"}}/>
                                </div>

                            </div>
                        </form>


                    </div>
                        </div>
                    </section>


        );
    }
}

export default UserVerify;