import React, { Component } from 'react';
import Loader from "react-loader-spinner"
class ScreenLoader extends Component {

    render(props) {
        console.log(props)
     
        return (

            <div>
                <div className={this.state.load_class}>  
                            <Loader
                                    type="Bars"
                                    color="black"
                                    height={100}
                                    width={100}
                                    visible={this.state.visibility}
                                
                                />
                </div>

            </div>

        );
    }
}

export default ScreenLoader;