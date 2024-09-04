import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from '../users/UserList';
import Chat from '../users/Chat';


const Header = () => {
    return (
        <>
            <div className="main-container">
                <div className="left-container">

                    <div className="header">
                        <div className="user-img">
                            <img className="dp" src="https://www.codewithfaraz.com/InstaPic.png" alt="" />
                        </div>
                        <div className="nav-icons">
                            <li><i className="fa-solid fa fa-users"></i></li>
                            <li><i className="fa fa-comments-o" aria-hidden="true"></i></li>
                            <li><i className="fa fa-ellipsis-v" aria-hidden="true"></i></li>
                        </div>
                    </div>

                    <div className="notif-box">
                        <i className="fa fa-bell-slash" aria-hidden="true"></i>
                        <div className="notif-text">
                            <p>Get Notified of New Messages</p>
                            <a href="#">Turn on Desktop Notifications ›</a>
                        </div>
                        <i className="fa fa-times" aria-hidden="true"></i>
                    </div>

                    <div className="search-container">
                        <div className="input">
                            <i className="fa-solid fa fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search or start new chat" />
                        </div>
                        <i className="fa-sharp fa fa-solid fa-bars-filter"></i>
                    </div>
                    <UserList />
                </div>
                <div className="right-container">
                    <Chat />
                </div>
            </div>
        </>
    )
}

export default Header