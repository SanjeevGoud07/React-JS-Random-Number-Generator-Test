// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="Box">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.onGenerate} type="button">
            Generate
          </button>
          <p className="heading heading2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
