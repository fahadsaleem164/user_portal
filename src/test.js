import {connect } from 'react-redux'


function test(props) {
  
  
    
  
    return (
       <>
  
         <h1>Welcome</h1>
        
      </>
  
        )
  
  }
  
  const mapStateToProps = (state) => {
    return (
        {
          myname : state.name
        }
    )
  }
  
  export default connect(mapStateToProps)(test)