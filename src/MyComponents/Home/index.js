import {Component} from 'react'
import Prime from '../Prime'

import './index.css'

class Home extends Component {
  state = {
    startRun: false,
  }

  toggleBtn = () => {
    this.setState(prevState => ({startRun: !prevState.startRun}))
  }

  render() {
    const {startRun} = this.state
    return (
      <div className="main-container">
        <button className="btn-styles" type="button" onClick={this.toggleBtn}>
          {startRun ? 'Stop Primes' : 'Start Primes'}
        </button>
        {startRun && <Prime />}
      </div>
    )
  }
}

export default Home
