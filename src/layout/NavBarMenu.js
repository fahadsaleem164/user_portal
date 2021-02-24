import React , {Component} from 'react';
import {BrowserRouter as Router , Route , Link } from 'react-router-dom'  
import {Navbar , Nav} from 'react-bootstrap'
class NavBarMenu extends Component{
    constructor(props){
            super()
    }

    render(){
        return(
            
                        <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Main Dashboard</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Nav 1</Nav.Link>
      <Nav.Link href="#features">Nav 1</Nav.Link>
      <Nav.Link href="#pricing">Nav 1</Nav.Link>
    </Nav>
    
  </Navbar>
 

  
  

               </>

        )
    }
}

export default NavBarMenu