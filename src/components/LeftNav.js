import React from 'react';
import {connect} from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom';
class LeftNav extends React.Component {
  render () {
    return(
      <div className="left-nav">
        <div className='nav-button'>Side navigation</div>
        <h3>wangHao@{this.props.title}</h3>
        <NavLink exact to="/" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}} ><span className="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;&nbsp;Home</NavLink>
        <NavLink to="/blog" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-book" aria-hidden="true"></span>&nbsp;&nbsp;Blog</NavLink>
        <NavLink to="/work" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>&nbsp;&nbsp;Work</NavLink>
        <NavLink to="/about" activeStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}><span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;Me</NavLink>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  title:store.title
})
export default withRouter(connect(mapStateToProps)(LeftNav));
