import React from 'react';



function IdeathonEntry({formData , setForm , navigation}) {

                        return (
                            <section>
                                <div class="container" >
                                    <div class="row">
                                        <div class="col-12 col-lg-3"></div>
                                         <div class="col-12 col-lg-6">
                                            <h1>Step 2</h1>
                                            <form name="" method="POST" onSubmit={event => this.handleSubmit(event)}>

                                                <div class="row form-group-margin">

                                                    

                                                    <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                        <label for="name">
                                                            Name
                                                            </label>
                                                            <input type="text" name="name" class="form-control field-name" />
                                                        
                                                    </div>

                                                    <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Description
                                                      </label>
                                                       <textarea name="description"  class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Problem Statement
                                                      </label>
                                                       <textarea name="problem_statement"  class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Innovation
                                                      </label>
                                                       <textarea name="innovation"  class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Idea Impact
                                                      </label>
                                                       <textarea name="idea_impact"  class="form-control field-name"></textarea>
                                                   </div>


                                                   <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Idea Classification
                                                      </label>
                                                      <select  name="idea_classified_as" >
                                                        
                                                        <option>Select Idea Classification</option>
                                                         <option>Coastal</option>
                                                         <option>CPEC</option>
                                                      </select>
                                                   </div>


                                                   <div class="col-12 col-md-6 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Scale of Business
                                                      </label>
                                                      <select  name="scale_of_business" >
                                                        <option>Select Scale of Business</option>
                                                         <option>Small</option>
                                                         <option>Medium</option>
                                                         <option>Large</option>
                                                      </select>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Describe your Idea
                                                      </label>
                                                       <textarea name="describe_idea"  class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                    <label for="description">
                                                      Reasoning
                                                      </label>
                                                       <textarea name="exp_reason"  class="form-control field-name"></textarea>
                                                   </div>

                                                   <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                                <label for="logo">
                                                                    Logo
                                                                    </label>
                                                                    <input type="file" name="logo"  class="form-control field-name" />
                                                                
                                                            </div>
                    
    
                                                    <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                        <input type="submit" value="Previous" onClick={()=>navigation.previous()} style={{marginLeft:"35%"}}  class="btn primary-button"/> &nbsp; 
                                                        <input type="submit" value="Next" onClick={()=>navigation.next()} style={{width:"83px"}}  class="btn primary-button" />
                                                        
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                    ​
                                        <div class="col-12 col-lg-3"></div>
                                    </div>
                                
                                </div>
                        </section>

    );
}

export default IdeathonEntry;