import React, { Component } from 'react'
import {useForm, userForm , useStep} from 'react-hooks-helper'
// import  Names  from './StepForm/Names'IdeathonEntry
import UserNameTeamLead  from './StepForm/UserNameTeamLead'
import IdeathonEntry  from './StepForm/IdeathonEntry'
import AgreeTerms  from './StepForm/AgreeTerms'

const defaultData = {
    firstName : "",
    lastName : "",
    nickName : ""
}

const steps = [
        { id : "username" },
        { id : "ideathonentry" },
        { id : "agreeterms" },
]



const MultiFormRegistraion = () => {

    const [formData,setForm] =  useForm(defaultData)
    const {step , navigation} = useStep({
        steps,
        initialStep: 0

    })

    const props = {formData , setForm , navigation}


    switch(step.id){
        
        case "username":
            return <UserNameTeamLead {...props}/>;
        case "ideathonentry":
            return <IdeathonEntry {...props}/>;
        case "agreeterms":
            return <AgreeTerms {...props}/>;
       
    }



    return (
        <>
            Working
        
        </>
    )
    


}

export default MultiFormRegistraion