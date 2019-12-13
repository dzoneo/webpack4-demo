import React from 'react';
import * as _ from 'lodash';

import dragon from '../assets/dragon.jpg';

export default class ImageTransfer extends React.PureComponent {
  componentDidMount() {
    const now = _.now();
    console.log(now);
  }

  render() {
    const {size = 'medium'} = this.props;

    return (
      <div className={`image-transfer it-${size}`}>
        <img src={dragon} />
      </div>
    );
  }
}
