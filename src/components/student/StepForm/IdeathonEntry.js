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
                                                   <div style={{overflow: "scroll" , height: "200px"}}>
                                                    By checking the rules I agree to the following RULES AND REGULATIONS
                                                    <br></br>
                                                            By registering at or submitting an entry, the applicants represent and warrant the following: <br></br>
                                                            (a)	Applicants will not submit content that is copyrighted, protected by trade secret or otherwise subject to third party intellectual property rights or other proprietary rights, including privacy and publicity rights, unless the individual is the owner of such rights or has permission from the rightful owner to post the content and participate in the Ideathon;<br></br>
                                                            (b)	Applicants will not submit content that is unlawful, obscene, defamatory, threatening, hateful, racially or ethnically offensive, or encourages conduct that would be considered a criminal offense, give rise to civil liability or is otherwise inappropriate;<br></br>
                                                            (c)	Applicants will not publish falsehoods or misrepresentations that could damage the reputation of organisers;<br></br>
                                                            (d)	Applicants will not post advertisements or solicitations of business;<br></br>
                                                            (e)	organisation will not be obligated to pay any compensation to, or permit any participation by, any third party in connection with the use, reproduction, modification, publication, display or other exploitation of any of the content that is submitted;<br></br>
                                                            (f)	The content submitted by applicants does not contain any viruses, Trojan horses, worms or other disabling devices or malicious code; and<br></br>
                                                            (g)	Participants will not attempt, create, or use any unauthorized access to organisers or other digital communication or data storage systems.<br></br>
                                                            (h)	Orgnisers reserves the right to initiate any legal action and/or alert authorities in the case of any property damage or theft or any other violation of law or violation of this Agreement.<br></br>
                                                            Intellectual Property<br></br>
                                                            Organisers asserts no ownership, through the Ideathon, in any intellectual property that may result from participation in the event. Notwithstanding the foregoing, Participant may be subject to general Intellectual Property rules in Pakistan. Nothing in this Agreement will be construed to supersede or interfere with other obligations to Participant/ Organisers.
                                                            By registering and presenting or submitting an entry (regardless of the form or medium of such content), Participant grants Organisers a worldwide, perpetual, irrevocable, non-exclusive, royalty-free license to discuss, publicize, demonstrate, and otherwise display content derived from or relating to such entry for promotional and marketing purposes Participant will not receive any compensation for this use of such entry.
                                                            If the participant is member of a team, that team is wholly responsible for determining ownership of any intellectual property rights developed during this period. Participant agrees that organisers will not be responsible for any disputes regarding intellectual property. Participant agrees that there is no obligation of confidentiality on the part of Ideathon staff or other Participants regarding submissions or ideas generated at the. Participant agrees and acknowledges that any idea, conversation or submission may be considered a public disclosure under local laws.
                                                            </div>
                                                                   <label>
                                                                   I agree to the following RULES AND REGULATIONS
                                                                    </label>
                                                                    <input type="checkbox" name="agree_terms"  />
                                                                
                                                            </div>
                    
    
                                                    <div class="col-12 col-md-12 col-lg-12 m-0 p-2 input-group">
                                                        <input type="submit" value="Back" onClick={()=>navigation.previous()} class="btn primary-button"/> &nbsp; 
                                                        <input type="submit" value="Save" style={{width:"83px", marginLeft:"74%"}}  class="btn primary-button" />
                                                        
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