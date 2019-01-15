import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../style/App.css'

class Chat extends Component {

  render() {
    return (
        <div>
            <h1>Socket.io Chat Room</h1>
            <div className='main-container'>
                <div className='content'>
                    <div className='message-list'>
                        <div className='message-block'>
                            <div className='message-name hvr-backward'>
                                <h6>Name:</h6>
                            </div>
                            <div className='message hvr-forward'>
                                <h6>Messages here</h6>
                            </div>
                        </div>
                    </div>
                    <div className='input-button'>
                        <input className='name' placeholder='Name' />
                        <input placeholder='Message' autoComplete='off' />
                        <Button className='button-style'>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
  } 
}

export default Chat
