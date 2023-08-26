import {Component} from 'react'
import './index.css'

class Prime extends Component {
  state = {
    start: 2,
  }

  componentDidMount() {
    this.timerId = setInterval(this.next, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  checkPrime = num => {
    console.log(num)
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        isPrime = false
      }
    }
    return isPrime
  }

  next = () => {
    const {start} = this.state
    let presentNum = start
    let primeFound = false

    while (primeFound === false) {
      presentNum += 1
      if (this.checkPrime(presentNum)) {
        primeFound = true
        this.setState({start: presentNum})
      }
    }
  }

  render() {
    const {start} = this.state
    return (
      <div className="prime-container">
        <h1>{start}</h1>
      </div>
    )
  }
}

export default Prime
