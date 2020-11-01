import React from 'react';
import '../css/Sidebar.css';
import { IconButton, Avatar } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* sidebar header */}
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer"> 
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
            <SidebarChat />
            </div>

            {/* sidebar 
            
            chat history */}
        </div>
    )
}

export default Sidebar
