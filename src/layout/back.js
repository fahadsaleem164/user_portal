import React , {Component} from 'react';


class Back extends Component{

    constructor(props){
    
        super()
    
    }

    render(){
    
        return(
                <>
                        <h1>Header 2</h1>
                        {this.props.children}
                        <h1>Footer 2</h1>
               </>

        )
    }
}

export default Back