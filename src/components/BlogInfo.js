import React from 'react';
import marked from 'marked';  //用来解析md文档
import hljs from 'highlight.js'; //用来高亮代码
import {connect} from 'react-redux'
import {getBlogMd} from '../redux/actions/actions.js';
class BlogInfo extends React.Component {
  componentDidMount(){
    this.props.dispatch(getBlogMd(this.props.match.params.url))
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

    if(this.props.blogMd.data){
      this.content = marked(this.props.blogMd.data)
    }
    return(
      <div className='post-content'>
        {this.props.blogMd.title===this.props.match.params.url ?  <div dangerouslySetInnerHTML={{__html:this.content}} /> : <p style={styles.loading}>loading...</p> }
      </div>
    )
  }
}
marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  }
});
const mapStateToProps=(store)=>({
  blogMd:store.blogMd
})
export default connect(mapStateToProps)(BlogInfo)
