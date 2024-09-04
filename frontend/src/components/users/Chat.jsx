import React, { useEffect, useRef, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';


const Chat = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    const socketRef = useRef(null);
    
    let userId =  localStorage.getItem('userId');
    useEffect(() => {
        // Establish the socket connection
        socketRef.current = io("http://localhost:8001");
        if (!userId) {
            navigate('/');
        } else {
            socketRef.current.emit("joinRoom", userId);
        }
        fetch("http://localhost:8001/getChatHistory").then(response => response.json())  // Parse the JSON from the response
        .then(data => {
            setMessages(data.messages);  
        }).catch((e) => {
            console.log(e);
            
        })

        // Listen for incoming messages from the server
        socketRef.current.on("receiveMessage", (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

    
    }, []);

    const onInputHandler =  (event) => {      
        setMessage(event.target.value)
    }

    const sendMessage = () => {
        if (message.trim()) {
            
            // Emit the message to the server
            const mesObj    =   { user_id:userId, sender_id:userId, receiver_id:2, message };
            socketRef.current.emit("sendMessage", mesObj,(error) => {
                if(error){
                    console.log("Message Send Failed",error);
                }else{
                    setMessage("");
                }
            });

        }
    };

    return (
        <>
            <div className="header">
                <div className="img-text">
                    <div className="user-img">
                        <img className="dp"
                            src="https://images.pexels.com/photos/2474307/pexels-photo-2474307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="" />
                    </div>
                    <h6 style={{marginLeft:"15px",marginTop:"10px"}}>Leo<br /><span>Online</span></h6>
                </div>
                <div className="nav-icons">
                    <li><i className="fa-solid fa-magnifying-glass"></i></li>
                    <li><i className="fa-solid fa-ellipsis-vertical"></i></li>
                </div>
            </div>

            <div className="chat-container">

            {messages.map((msg, index) => {
                return ( 
                    <div key={index} className="message-box my-message">
                        <p>{msg.message}<br /><span>{msg.createdAt}</span></p>
                    </div>
                );
            })}
                {/* <div className="message-box friend-message">
                    <p>Ahh, I can't believe you do too!<br /><span>07:45</span></p>
                </div> */}
                
            </div>

            <div className="chatbox-input">
                <i className="fa-regular fa-face-grin"></i>
                <i className="fa-sharp fa-solid fa-paperclip"></i>
                <input type="text" placeholder="Type a message" onChange={onInputHandler} />
                <SendIcon onClick={sendMessage} style={{ cursor: 'pointer' }} />

            </div>
        </>
    )
}

export default Chat