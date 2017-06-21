import React from 'react'
import {connect} from 'react-redux'
import {getTitle} from '../redux/actions/actions.js';
class Home extends React.Component {
  componentDidMount(){
    this.props.dispatch(getTitle('Home'))
  }
  render () {
    let styles={
      h2:{
        fontSize:'42px',
        fontWeight:'700',
        marginBottom:'20px'
      }
    }
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h2 style={styles.h2}>HI, I'M <span style={{color:'#00bcd4'}}>wanghao</span></h2>
            <p style={{marginBottom:'20px'}}>WEB DEVELOPER</p>
            <button className="home-btn"><a href="https://github.com/happywanghao" style={{color:'#fff'}}>HIRE ME</a></button>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=store=>({

})
export default connect(mapStateToProps)(Home);
