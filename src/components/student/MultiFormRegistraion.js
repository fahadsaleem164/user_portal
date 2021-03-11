import React, { Component } from 'react'
import {useForm, userForm , useStep} from 'react-hooks-helper'
import  Names  from './StepForm/Names'
import Address  from './StepForm/Address'

const defaultData = {
    firstName : "",
    lastName : "",
    nickName : ""
}

const steps = [
        { id : "names" },
        { id : "address" },
        { id : "contact" },
        { id : "review" },
        { id : "submit" },
]



const MultiFormRegistraion = () => {

    const [formData,setForm] =  useForm(defaultData)
    const {step , navigation} = useStep({
        steps,
        initialStep: 0 

    })

    const props = {formData , setForm , navigation}


    switch(step.id){
        case "names":
            return <Names {...props}/>;
        case "address":
            return <Address {...props} />;
    }



    return (
        <>
            
        
        </>
    )
    


}

export default MultiFormRegistraion