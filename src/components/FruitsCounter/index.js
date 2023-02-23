// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  onClickMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onClickBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className=" FruitsCounter-app-container">
        <div className=" FruitsCounter-container ">
          <h1 className="head">
            Bob ate {mango} mangoes and {banana} bananas
          </h1>
          <div className="pictures">
            <div className="arrange">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="FruitsCounter-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="arrange">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="FruitsCounter-image"
              />
              <button
                type="button"
                className="button"
                onClick={this.onClickBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
