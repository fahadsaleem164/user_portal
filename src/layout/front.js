import React , {Component} from 'react';


class Front extends Component{
    constructor(props){
            super()
    }

    render(){
        return(
                <>
                        <h1>Header 1</h1>
                        {this.props.children}
                        <h1>Footer 1</h1>
               </>

        )
    }
}

export default Front