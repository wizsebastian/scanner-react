import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class ScannerComponent extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <h1>Tu TOKEN LINK es: </h1>
        <a href={this.state.result}>{this.state.result}</a>
      </div>
    )
  }
}

export default ScannerComponent;