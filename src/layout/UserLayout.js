import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class UserLayout extends Component {
    render() {

        return (
            <div>
                          <Header></Header>
                          {this.props.children}
                          <Footer></Footer>
            </div>
        )

    }
}

export default UserLayout;