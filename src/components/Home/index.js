import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {
    inputText: '',
    isSaved: false,
  }

  getInputText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  onClickBtn = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  render() {
    const {inputText, isSaved} = this.state
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="sub-container">
            {isSaved ? (
              <p>{inputText}</p>
            ) : (
              <input
                type="text"
                value={inputText}
                onChange={this.getInputText}
              />
            )}
            <button type="button" onClick={this.onClickBtn}>
              {isSaved ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
