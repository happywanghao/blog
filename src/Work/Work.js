import React from 'react';
import WorkCard from '../components/WorkCard';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux'
import {getWorkCard,getTitle} from '../redux/actions/actions.js';
class Work extends React.Component {
  state={input:''}
  componentDidMount(){
    this.props.dispatch(getWorkCard())
    this.props.dispatch(getTitle('Work'))
    window.onresize=()=>{
    this.props.dispatch({type:'INNERWIDTH',content:window.innerWidth})
    }
  }
  handleSubmit(){

}
  handleChange(e){
    let value=e.target.value.replace(/(\s|\?|\*|\(|\)|\[|\]|\{|\}|\+|\$|\^)/g,'')
    if(value){
    let reg=new RegExp(value,'g')
      this.showWorkCard=this.props.workCard.filter(item=>(item.title.search(reg)!==-1))
    }
    this.setState({input:value})
  }
  render () {
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
    let inputReg=new RegExp(this.state.input,'g')
    let newWorkCard = this.state.input ?  this.showWorkCard.map(item=>(
      {...item,title:item.title.replace(inputReg,`<span style='color:red'>${this.state.input}</span>`)}
    ))
    :
    this.props.workCard
    return(
      <div className='row'>
        <div style={styles.search}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField hintText="search Work"
              style={styles.field}
              value={this.state.input}
              onChange={this.handleChange.bind(this)}
              inputStyle={{color:'#00BCD4'}}/>
              <RaisedButton type='submit' label="搜索" primary={true} style={{margin: 12}}/>
          </form>
        </div>
        {this.props.workCard ? newWorkCard.map( (item,index) => <WorkCard {...item} index={index} key={index} />) : '请稍等...'}
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
  workCard:store.workCard
})
export default connect(mapStateToProps)(Work)
