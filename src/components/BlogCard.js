import React from 'react';
import {Link,withRouter} from 'react-router-dom';

class BlogCard extends React.Component {
  render () {
    let styles={
      index:{
        backgroundColor:'#00bcd4',
        height:'50px',
        textAlign:'center',
        borderRadius: '10px 10px 0 0',
        paddingTop:'10px'
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
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          {/* <img alt='头像' src={this.props.img} /> */}
          <div style={styles.index}><span style={styles.num}>{this.props.index+1}</span></div>
          <div className="caption">
            <h3 dangerouslySetInnerHTML={{__html:this.props.title}}/>
            <p>
              <Link to={address} className="btn btn-primary" role="button" style={{marginRight:'10px'}}>查看详情</Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BlogCard);
