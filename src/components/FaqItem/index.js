import './index.css'

const imgSrcs = {
  plusSign: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
  plusAlt: 'plus',
  minusSign: 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
  minusAlt: 'minus',
}

const FaqItem = props => {
  const {faqDetails, changeSign} = props
  const {id, questionText, answerText, plusShowing} = faqDetails

  const handleSignClick = () => {
    changeSign(id)
  }

  const imageUrl = plusShowing ? imgSrcs.plusSign : imgSrcs.minusSign
  const altText = plusShowing ? imgSrcs.plusAlt : imgSrcs.minusAlt
  const answerTextElement = plusShowing ? null : answerText

  return (
    <li className="list-item-container">
      <div className="question-container">
        <h1>{questionText}</h1>
        <button type="button" className="btn-styles" onClick={handleSignClick}>
          <img src={imageUrl} alt={altText} />
        </button>
      </div>
      <p> {answerTextElement}</p>
    </li>
  )
}

export default FaqItem
