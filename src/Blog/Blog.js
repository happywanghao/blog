import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import BlogCard from '../components/BlogCard';
import {getBlogCard,getTitle} from '../redux/actions/actions.js';

class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true,
      input:''
    }
  }
  componentDidMount(){
    this.props.dispatch(getBlogCard())
    this.props.dispatch(getTitle('Blog'))
    window.onresize=()=>{
    this.props.dispatch({type:'INNERWIDTH',content:window.innerWidth})
    }
  }
  handleSubmit(e){
    e.preventDefault()
    if(this.state.input){
      let reg=new RegExp(this.state.input,'gi')
        this.showBlogCard=this.props.blogCard.filter(item=>{
          if(item.title.search(reg)!==-1){
            return true
          }else if(item.desc.search(reg)!==-1){
            return true
          }else{
            return false
          }
      })
    }
}
  handleChange(e){
    let value=e.target.value.replace(/(\s|\?|\*|\(|\)|\[|\]|\{|\}|\+|\$|\^)/g,'')
    if(value){
    let reg=new RegExp(value,'gi')
      this.showBlogCard=this.props.blogCard.filter(item=>{
        if(item.title.search(reg)!==-1){
          return true
        }else if(item.desc.search(reg)!==-1){
          return true
        }else{
          return false
        }
      })
    }
    this.setState({input:value})
  }
  render () {
    let inputReg=new RegExp(this.state.input,'g')
    let newBlogCard = this.state.input ?  this.showBlogCard.map(item=>(
      {...item,
        title:item.title.replace(inputReg,`<span style='color:red'>${this.state.input}</span>`),
        desc:item.desc.replace(inputReg,`<span style='color:red'>${this.state.input}</span>`)
      }
    ))
    :
    this.props.blogCard
    let styles={
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
      <div style={{position:'absolute',top:'0',width:'100%',bottom:'0',overflowY:'auto'}}>
        <div style={{width:'100%',marginTop:'20px'}}>
          <div style={styles.search}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <TextField hintText="search Biog"
                style={styles.field}
                value={this.state.input}
                onChange={this.handleChange.bind(this)}
                inputStyle={{color:'#00BCD4'}}/>
                <RaisedButton type='submit' label="搜索" primary={true} style={{margin: 12}}/>
              </form>
            </div>
            { this.props.blogCard ? newBlogCard.map( (item,i) => <BlogCard {...item} index={i} key={i} /> ) : '请稍等' }
          </div>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  blogCard:store.blogCard
})
export default connect(mapStateToProps)(Blog);
