import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';//防止报警告
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import LeftNav from './components/LeftNav';
import Home from './Home/Home';
import Blog from './Blog/Blog';
import Work from './Work/Work';
import About from './About/About';
import BlogInfo from './components/BlogInfo';
import WorkInfo from './components/WorkInfo';
class App extends React.Component {
  constructor(){
    super()
    injectTapEventPlugin();  //防止报警告
  }
  componentDidMount(){
    this.props.dispatch({type:'INNERWIDTH',content:window.innerWidth})
    window.onresize=()=>{
    this.props.dispatch({type:'INNERWIDTH',content:window.innerWidth})
    }
  }
  render(){
    return(
      <MuiThemeProvider>
        <div className="content-wrap">
          {this.props.innerWidth>=760 ? <LeftNav/> : <NavHeader/> }
            <div className="content-main">
              <Route exact path='/' component={Home} />
              <Route path="/blog" component={Blog} />
              <Route path="/work" component={Work} />
              <Route path="/about" component={About} />
              <Route path='/bloginfo/:url' component={BlogInfo} />
              <Route path='/workinfo/:url' component={WorkInfo} />
            </div>
          {this.props.innerWidth>=760 ? null : <NavFooter /> }
        </div>
      </MuiThemeProvider>
    )
  }
}
const mapStateToProps=(store)=>({
  innerWidth:store.innerWidth,
  title:store.title
})
export default connect(mapStateToProps)(App)
