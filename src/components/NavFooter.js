import React from 'react';
import { NavLink,withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
class NavFooter extends React.Component {
  render () {
    return(
      <div className="nav-footer">
        <NavLink activeStyle={{color:'#7C4DFF'}} exact to="/"><span className="glyphicon glyphicon-home"></span><br/>Home</NavLink>
        <NavLink activeStyle={{color:'#7C4DFF'}} to="/blog"><span className="glyphicon glyphicon-bookmark"></span><br/>Blog</NavLink>
        <NavLink activeStyle={{color:'#7C4DFF'}} to="/work"><span className="glyphicon glyphicon-education"></span><br/>Work</NavLink>
        <NavLink activeStyle={{color:'#7C4DFF'}} to="/about"><span className="glyphicon glyphicon-user"></span><br/>About</NavLink>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({

})
export default withRouter(connect(mapStateToProps)(NavFooter))
