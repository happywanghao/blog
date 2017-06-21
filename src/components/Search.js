import React from 'react';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'
class Search extends React.Component {
  render () {
    let avatar_url=this.props.userData.avatar_url
    let login=this.props.userData.login
    let public_repos=this.props.userData.public_repos
    let followers=this.props.userData.followers
    let following=this.props.userData.following

    let styles={
      root:{
        textAlign:'center'
      },
      name:{
        color:'#00BCD4',
        fontWeight:'600',
        fontSize:'32px',
        lineHeight:'60px'
      },
      img:{
        borderRadius:'50%',
        width:'100%',
        maxWidth:'150px',
        boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
      }
    }
    return(
      <div style={styles.root}>
        <p style={styles.name}>{login}</p>
        <img alt="头像" src={avatar_url} style={styles.img} />
        <Paper className='gitinfo'>
          <div className='gitinfo-card'>
            <p>repos</p><span>{public_repos}</span>
          </div>
          <div className='gitinfo-card'>
            <p>followers</p><span>{followers}</span>
          </div>
          <div className='gitinfo-card'>
            <p>following</p><span>{following}</span>
          </div>
        </Paper>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  userData:store.userData
})
export default connect(mapStateToProps)(Search)
