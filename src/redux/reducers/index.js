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
function getBlogMdReducer(state={},action){
  switch(action.type){
    case 'BLOGMD':
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
function getWorkMdReducer(state={},action){
  switch(action.type){
    case 'WORKMD':
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
  blogMd:getBlogMdReducer,
  workCard:getWorkCardReducer,
  workMd:getWorkMdReducer,
  userData:getGitHubUserReducer
})
