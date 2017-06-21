
import axios from 'axios';

const getWorkCard=()=>(
  dispatch=>{
    let address = `https://raw.githubusercontent.com/happywanghao/my-home-data/master/WorkCard.json?${Math.random()}`
    axios.get(address)
    .then(res => {
      dispatch({type:"WORKCARD",content:res.data})
    })
    .catch(function (error) {
      console.log(888888888888);
      alert(error);
    })
  }
)

const getBlogCard=()=>(
  dispatch=>{
    let address = `https://raw.githubusercontent.com/happywanghao/my-home-data/master/BlogCard.json?${Math.random()}`
    axios.get(address)
    .then(res => {
      dispatch({type:"BLOGCARD",content:res.data})
    })
    .catch(err=>{alert(err)});
  }
)
const getTitle=(title)=>(
  dispatch=>{
    dispatch({type:'SETTITLE',content:title})
  }
)

const getBlogMd=(add)=>(
  dispatch=>{
    axios.get(`https://raw.githubusercontent.com/happywanghao/my-home-data/master/Blog/${add}.md`)
    .then(res=>{
      dispatch({type:'BLOGMD',content:{data:res.data,title:add}})
    })
    .catch(function (error) {
      alert(error);
    });
  }
)
const getWorkMd=(add)=>(
  dispatch=>{
    axios.get(`https://raw.githubusercontent.com/happywanghao/my-home-data/master/Work/${add}.md`)
    .then(res=>{
      dispatch({type:'WORKMD',content:{data:res.data,title:add}})
    })
    .catch(function (error) {
      alert(error);
    });
  }
)

const searchGitUser=(userName,fun)=>(
  dispatch=>{
    axios.get(`https://api.github.com/users/${userName}`)
    .then((res) => {
      fun()
      dispatch({type:"GITHUBUSERDATA",content:res.data})
    })
    .catch(function (error) {
      alert(error);
    });
  }
)
export {getTitle,getWorkCard,getBlogCard,getBlogMd,getWorkMd,searchGitUser};
