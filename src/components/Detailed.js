import React from 'react';
import marked from 'marked';  //用来解析md文档
import hljs from 'highlight.js'; //用来高亮代码
import {connect} from 'react-redux'
import $ from 'jquery'
import RaisedButton from 'material-ui/RaisedButton';
import {getBlogMd,getTitle,getWorkMd} from '../redux/actions/actions.js';
class Detailed extends React.Component {
  state={backTop:'none'}
  componentDidMount(){
      this.props.dispatch(getTitle('Article'))
      let cat=this.props.match.params.cat
      if(cat==='blog'){
        this.props.dispatch(getBlogMd(this.props.match.params.url))
      }else if(cat==='work'){
        this.props.dispatch(getWorkMd(this.props.match.params.url))
      }
  }
  backTop(){
    $("#detailed").animate({"scrollTop":"0"},300)
  }
  onScroll(){
    if(document.querySelector('#detailed').scrollTop>650){
      document.querySelector('.backTop').style.display='block'
    }else{
      document.querySelector('.backTop').style.display='none'
    }
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

    if(this.props.mdData.data){
      this.content = marked(this.props.mdData.data)
    }
    return(
      <div id='detailed' onScroll={this.onScroll.bind(this)} style={{position:'absolute',top:'0',width:'100%',bottom:'0',overflowY:'auto',paddingLeft:'1vw'}}>
        {this.props.innerWidth>760 ? <div style={{display:this.state.backTop}}  onClick={this.backTop.bind(this)} className='backTop'></div> : null}
        <div className='post-content'>
          {this.props.innerWidth>760 ? <RaisedButton label="返回" onClick={()=>{this.props.history.goBack()}} secondary={true} style={{margin: 12}} /> : null}
          {this.props.mdData.title===this.props.match.params.url ?  <div dangerouslySetInnerHTML={{__html:this.content}} /> : <p style={styles.loading}>loading...</p> }
        </div>
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
  mdData:store.mdData,
  innerWidth:store.innerWidth
})
export default connect(mapStateToProps)(Detailed)
