// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  calculateLength = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="letters-count-bg-container">
            <h1 className="title">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="input">
                Enter the phrase
              </label>
              <input
                type="text"
                placeholder="Enter the phrase"
                className="letters-input"
                id="input"
                onChange={this.calculateLength}
              />
              <p className="letters-count">No.of letters: {count}</p>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="letters-calculator-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
