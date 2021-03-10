import React, { Component } from 'react';
import Loader from "react-loader-spinner"
class ScreenLoader extends Component {

    render() {
        console.log(this.props)
     
        return (

            <div>
                <div className={this.props.load_class}>  
                            <Loader
                                    type="Bars"
                                    color="black"
                                    height={100}
                                    width={100}
                                    visible={this.props.visiblity}
                                
                                />
                </div>

            </div>

        );
    }
}

export default ScreenLoader;