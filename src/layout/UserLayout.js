import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class UserLayout extends Component {
        
    render() {

        console.log(this.props)
       

        return (
            <div>
                          <Header></Header>
                          {this.props.children}
                          {/* <Footer></Footer> */}
            </div>
        )

    }
}

export default UserLayout;