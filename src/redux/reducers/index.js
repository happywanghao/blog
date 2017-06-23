import {combineReducers} from 'redux'

function innerWidthReducer(state=0,action){
  switch(action.type){
    case 'INNERWIDTH':
      return action.content
    default:
      return state
  }
}
function titleReducer(state='',action){
  switch(action.type){
    case 'SETTITLE':
      return action.content
    default:
      return state
  }
}
function getBlogCardReducer(state=false,action){
  switch(action.type){
    case 'BLOGCARD':
      return action.content
    default:
      return state
  }
}
function getWorkCardReducer(state=false,action){
  switch(action.type){
    case 'WORKCARD':
      return action.content
    default:
      return state
  }
}
function getMdDataReducer(state={},action){
  switch(action.type){
    case 'WORKMD':
      return action.content
    case 'BLOGMD':
      return action.content
    default:
      return state
  }
}
function getGitHubUserReducer(state={},action){
  switch(action.type){
    case "GITHUBUSERDATA":
      return action.content
    default:
      return state
  }
}
export default combineReducers({
  innerWidth:innerWidthReducer,
  title:titleReducer,
  blogCard:getBlogCardReducer,
  workCard:getWorkCardReducer,
  mdData:getMdDataReducer,
  userData:getGitHubUserReducer
})
