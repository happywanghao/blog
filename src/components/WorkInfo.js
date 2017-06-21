import React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import {connect} from 'react-redux'
import {getWorkMd} from '../redux/actions/actions.js';
class WorkInfo extends React.Component {

  componentDidMount(){
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
      <div className='post-content'>
        {this.props.workMd.title===this.props.match.params.url ?  <div dangerouslySetInnerHTML = {{__html:this.content}} /> : <p style={styles.loading}>loading...</p> }
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
