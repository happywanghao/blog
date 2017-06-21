import React from 'react'
import {connect} from 'react-redux'
class NavHeader extends React.Component {
  handleBack(){
    window.history.back()
  }
  render () {
    return(
      <div className="nav-header">
        <p style={{fontSize:'18px'}} onClick={this.handleBack.bind(this)}><i className="glyphicon glyphicon-chevron-left" aria-hidden="true"></i>Back</p>
        <h3>wangHao@{this.props.title}</h3>
        <p className="glyphicon glyphicon-apple" aria-hidden="true"></p>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  title:store.title
})
export default connect(mapStateToProps)(NavHeader)
