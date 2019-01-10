import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import '../style/App.css'

const Chat = () => {
    return (
        <div>
            <h1>Socket.io Test App</h1>
            <div className='main-container'>
                <div className='content'>
                    <div className='message-list'>
                        <div className='message'>
                            <h6>Messages here</h6>
                        </div>
                    </div>
                    <div className='input-button'>
                        <input autocomplete='off' /><Button className='button-style'>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
