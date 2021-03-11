import React from 'react';
import Header from '../../../layout/Header'
function UserNameTeamLead({formData , setForm , navigation}) {

    console.log(navigation)


    return (
        <><Header/>
                <section>
                                        <div class="container" >
                                            <div class="row">
                                                <div class="col-12 col-lg-3"></div>
                                                 <div class="col-12 col-lg-6">
                                                    <h1>Step 1</h1>
                                                    <form name="" method="POST" onSubmit={event => this.handleSubmit(event)}>

                                                        <div class="row form-group-margin">

        
                                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                <label for="name">
                                                                Username of Team Lead *
                                                                    </label>
                                                                    <input type="text" name="username" class="form-control field-name" />
                                                                
                                                            </div>
                            ​
                                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                <label for="last_name">
                                                                Username of Team Members (Up to 4 Members)
                                                                    </label>
                                                                    <input type="text" name="username_for_members"  class="form-control field-name" />
                                                                
                                                            </div>

            
                                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                <input type="submit" value="Next"  class="btn primary-button" onClick={()=>navigation.next()}  style={{marginLeft:"39%", width:"83px"}} />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                            ​
                                                <div class="col-12 col-lg-3"></div>
                                            </div>
                                        
                                        </div>
                                </section>
        </>
    );
}

export default UserNameTeamLead;