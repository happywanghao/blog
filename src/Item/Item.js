// import React, { PropTypes } from 'react'
// import hljs from 'highlight.js';
// import marked from 'marked';
//
// import { getBlogMd } from '../utils/helpers';
//
// class Item extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       data:'',
//       wait:true
//     }
//   }
//   componentDidMount(){
//     let mdName = this.props.params.url;
//     getBlogMd(mdName)
//       .then( (recData) => {
//         this.setState({
//           data:recData.getBlogMd,
//           wait:false
//         })
//       });
//   }
//   render () {
//     marked.setOptions({
//       highlight: function (code) {
//         return hljs.highlightAuto(code).value;
//       }
//     });
//     return(
//       <div className="post-content">
//         {this.state.wait ? '请稍等' : <div dangerouslySetInnerHTML={{__html: marked(this.state.data)}} />}
//       </div>
//     )
//   }
// }
//
// export default Item;
