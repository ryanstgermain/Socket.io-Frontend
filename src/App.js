import React, { Component } from 'react'
import Chat from './components/Chat.js'
import './style/App.css'
import socketIOClient from 'socket.io-client'

class App extends Component {
    constructor() {
        super()

    }

  render() {
    return (
      <div>
        <Chat />
      </div>
    )
  }
}

export default App
