import React from 'react';

function AgreeTerms({formData , setForm , navigation}) {

    console.log(navigation)


    return (
        <>
                                <section>
                                        <div class="container" >
                                            <div class="row">
                                                <div class="col-12 col-lg-3"></div>
                                                 <div class="col-12 col-lg-6">
                                                 <h1>Step 3</h1>
                                                    <form name="" method="POST" onSubmit={event => this.handleSubmit(event)}>

                                                        <div class="row form-group-margin">

        
                                                            <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                <label for="name">
                                                               I agree to all the terms and conditions
                                                                    </label>
                                                                    <input type="checkbox" name="agree_terms"  />
                                                                
                                                            </div>
                            ​
                                                          

            
                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                        <input type="submit" value="Previous" onClick={()=>navigation.previous()} style={{marginLeft:"35%"}}  class="btn primary-button"/> &nbsp; 
                                                        <input type="submit" value="Save" onClick={()=>navigation.next()} style={{width:"83px"}}  class="btn primary-button" />
                                                        
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

export default AgreeTerms;