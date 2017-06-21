import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {connect} from 'react-redux'
import Search from '../components/Search.js';
import Echarts from '../components/Echarts';
import {searchGitUser,getTitle} from '../redux/actions/actions.js'

class About extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      wait:0
    }
  }
  handleChange(e){
    this.setState({input:e.target.value})
  }
  showUserData(){
    this.setState({wait:2})
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.state.input){
      this.setState({
        wait:1
      })
      let account = this.state.input;
      this.props.dispatch(searchGitUser(account,this.showUserData.bind(this)))
    }
  }
  componentDidMount(){
    this.props.dispatch(getTitle('Me'))
    this.props.dispatch(searchGitUser('happywanghao',this.showUserData.bind(this)))

    window.onresize=()=>{
    this.props.dispatch({type:'INNERWIDTH',content:window.innerWidth})
    }
  }
  render () {
    let gitContent = this.state.wait===0 ? '' :
      this.state.wait===1 ? <div style={{textAlign:'center'}}><CircularProgress size={40} /></div> :
      <Search/>
    let styles={
      root:{
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 4px',
        width:'100%',
        maxWidth:'750px',
        height:'auto',
        margin:'72px auto 10px',
        padding:'20px'
      },
      title:{
        color:'#00BCD4'
      },
      search:{
        padding:'10px',
        textAlign:'center',
        maxWidth:'90%',
        margin:'0 auto'
      },
      field:{
        width:'50%',
        marginRight:'20px'
      }
    }
    return(
        <div className='clearfix' style={styles.root}>
          <h2 style={styles.title}>Search Github Info</h2>
          <div style={styles.search}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField hintText="search github"
                style={styles.field}
                value={this.state.input}
                onChange={this.handleChange.bind(this)}
                inputStyle={{color:'#00BCD4'}}/>
                <RaisedButton type='submit' label="搜索" primary={true} style={{margin: 12}}/>
            </form>
          </div>
          {gitContent}
          <Echarts />
        </div>
    )
  }
}
const mapStateToProps=(store)=>({
  userData:store.userData
})
export default connect(mapStateToProps)(About)
