import { GoPlus } from "react-icons/go";
import { CiChat1 } from "react-icons/ci";
import './sidebar.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://localhost:8080/chats/users/124/all")
            const data = await res.data
            setChats(data)
            console.log(data)
        }
        fetchData()
        return () => {
            console.log("cleanup")
        }
    }, [])

    return (
        <div className="sidebar">
            <span className='title'>Logo</span>
            <div className='menu'>
                <div className='new-chat' >
                    <GoPlus className='add-icon' />
                    <p>New Chat</p>
                </div>
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    {chats.map((chat) => {
                        const chatTitle = chat.messages.length > 0 ? chat.messages[0]["user_message"].text : `new chat ${chat.id.slice(5)}`
                        return (
                        <Link to={"c/" + chat.id} key={chat.id}>
                            <div className='recent-entry' title={chatTitle}>
                                <CiChat1 />
                                <p>{chatTitle}</p>
                            </div>
                        </Link>)
                    }
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;