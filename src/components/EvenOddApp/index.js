import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNum: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      randomNum: prevState.randomNum + Math.floor(Math.random() * 100),
    }))
  }

  evenOdd = () => {
    const {randomNum} = this.state

    return randomNum % 2 === 0 ? 'Count is Even' : 'Count is Odd'
  }

  render() {
    const {randomNum} = this.state
    const evenOddText = this.evenOdd()

    return (
      <div className="bg-container">
        <div className="evenOddContainer">
          <h1 className="heading">Count {randomNum}</h1>
          <p className="result">{evenOddText}</p>
          <button className="button" type="button" onClick={this.onIncrease}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
