import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {getWorkMd,getTitle} from '../redux/actions/actions.js';
class WorkInfo extends React.Component {

  componentDidMount(){
    this.props.dispatch(getTitle('Article'))
    this.props.dispatch(getWorkMd(this.props.match.params.url))
  }
  render () {
    let styles={
      loading:{
        color:'#388E3C',
        fontSize:'28px',
        textAlign:'center',
        height:'100vh',
        lineHeight:'100vh'
      }
    }
    if(this.props.workMd.data){
      this.content = marked(this.props.workMd.data)
    }
    return(
      <div style={{position:'absolute',top:'0',width:'100%',bottom:'0',overflowY:'auto'}}>
        <div className='post-content'>
          <RaisedButton label="返回" onClick={()=>{this.props.history.goBack()}} secondary={true} style={{margin: 12}} />
          {this.props.workMd.title===this.props.match.params.url ?  <div dangerouslySetInnerHTML = {{__html:this.content}} /> : <p style={styles.loading}>loading...</p> }
        </div>
      </div>
    )
  }
}
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
})
const mapStateToProps=(store)=>({
  workMd:store.workMd
})
export default connect(mapStateToProps)(WorkInfo)
