import React from 'react';
import { Link } from 'react-router-dom';
class BlogCard extends React.Component {
  render () {
    let styles={
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',
        borderRadius:'10px',
        margin:'0 auto',
        marginBottom:'20px',
      },
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
      },
      content:{
        padding:'16px',
        color:'#727272',
      },
      title:{
        fontSize:'18px',
        marginBottom:'20px'
      },
      desc:{
        fontSize:'16px',
        marginBottom:'20px'
      }
    }
     let address=`bloginfo/${this.props.url}`
    return(
      <div style={styles.root}>
        <div style={styles.index}><span style={styles.num}>{this.props.index+1}</span></div>
        <div style={styles.content}>
          <p style={styles.title} dangerouslySetInnerHTML={{__html:this.props.title }}/>
          <p style={styles.desc} dangerouslySetInnerHTML={{__html:this.props.desc }}/>
          <Link to={address} className="blog-btn">阅读更多</Link>
        </div>
      </div>
    )
  }
}

BlogCard.defaultProps={
  index:1,
  title:'这里是标题',
  desc:'这里是介绍'
}
export default BlogCard;
