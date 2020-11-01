import React from 'react';
import '../css/Chat.css'
import { IconButton, Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Shivam</span>
                    Some message..
                    <span className="chat__timestamp">
                    {new Date().toUTCString()}
                        </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Shivam</span>
                    Some message..
                    <span className="chat__timestamp">
                    {new Date().toUTCString()}
                        </span>
                </p>
            </div>

            <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input type="text"
                placeholder="Type a message" />
                <button type="submit">Send a message
                </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
