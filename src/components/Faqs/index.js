import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      faqsList: props.faqsList,
    }
  }

  changeSign = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachFaqItem => {
        if (id === eachFaqItem.id) {
          return {...eachFaqItem, plusShowing: !eachFaqItem.plusShowing}
        }
        return eachFaqItem
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">FAQs</h1>
          <ul className="un-ord-list-container">
            {faqsList.map(eachFaqItem => (
              <FaqItem
                key={eachFaqItem.id}
                faqDetails={eachFaqItem}
                changeSign={this.changeSign}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
