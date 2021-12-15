import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Chat.css'
import { useEffect, useState } from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() *5000))
    }, []);

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className='chat_headerRight'>
                    <IconButton>< SearchIcon /></IconButton>
                    <IconButton>< AttachFileIcon /></IconButton>
                    <IconButton>< MoreVertIcon /></IconButton>
                </div>
            </div>
            <div className='chat_body'>
                <p className={`chat_message ${true && "chat_reciever"}`}>
                <span className='chat_name'>Furkan Kılıç</span>
                    Hey Guys
                    <span className='chat_timestap'>3:52</span>
                </p>

            </div>
            <div className='chat_footer'>
                <InsertEmoticonIcon />
                <form>
                    <input placeholder='Type a message' type="text" />
                    <button>Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
