import React from 'react';
import {Link,withRouter} from 'react-router-dom';

class WorkCard extends React.Component {
  render () {
    let address = `/detailed/work/${this.props.url}`
    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          {/* <img alt='头像' src={this.props.img} /> */}
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

export default withRouter(WorkCard);
