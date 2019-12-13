import React from 'react';

import TransferImage from './components/image-transfer';
import './style.css';

export default class App extends React.Component {
  componentWillMount() {
    console.log('===> LifeCycle: App will mount.');
  }

  render() {
    return (
      <div style={{ margin: '50px'}}>
        <TransferImage size="medium" />
      </div>
    );
  }
}
