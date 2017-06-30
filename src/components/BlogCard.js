import React from 'react';
import {Link,withRouter} from 'react-router-dom';

class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        margin:'0 10px 0 10px',
      },
      index:{
        float:'left',
        backgroundColor:'#00bcd4',
        height:'90px',
        width:'10%',
        textAlign:'center',
        paddingTop:'27px'
      },
      num:{
        lineHeight:'35px',
        width:'35px',
        height:'35px',
        borderRadius:'50%',
        border: '2px solid #fff',
        display:'block',
        fontSize:'16px',
        margin:'0 auto',
        color:'#fff'
      }
    }
    let address = `/detailed/blog/${this.props.url}`
    return(
      <div style={styles.root}>
        <div style={{position:'relative'}} className="thumbnail clearfix">
          {/* <img alt='头像' src={this.props.img} /> */}
            <div style={styles.index}><span style={styles.num}>{this.props.index+1}</span></div>
            <div style={{float:'left',width:'90%',}}>
              <h3 dangerouslySetInnerHTML={{__html:this.props.title}}/>
              <Link to={address} className="btn btn-primary" role="button" style={{position:'absolute',bottom:'5px',right:'5px'}}>查看详情</Link>
            </div>
        </div>

      </div>
    )
  }
}

export default withRouter(BlogCard);
