import React, {Component} from 'react';
import Lottery from './Lottery'
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Lottery />
      <Lottery name="Lottery" numBalls={6} maxNum={10} />
    </div>
    )
  }
}

export default App;
