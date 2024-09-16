import { GoPlus } from "react-icons/go";
import { CiChat1 } from "react-icons/ci";
import './sidebar.css';
import axios from "axios";
import { useEffect, useState } from "react";

function Sidebar() {

    const [chats, setChats] = useState([]);

    useEffect(() =>{
        const res = axios.get("http://localhost:8080/chats/users/124/all")
        setChats(res.data)
    },[])


    // async function createNewChat()
    // {
    //    const res =  await axios.post("http://localhost:8080/chats/users/124")
        
    // }

    return (
        <div className="sidebar">
            <span className='title'>Logo</span>
            {/* <IoIosMenu className='menu-icon' /> */}
            <div className='menu'>
                <div className='new-chat' >
                    <GoPlus className='add-icon' />
                    <p>New Chat</p>
                </div>
                <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    {chats.map((chat) => (
                    <div className='recent-entry' title="chat title" key={chat.id}>
                        <CiChat1 />
                        <p>chat session 25136</p>
                    </div>
                    )
                    )};
                </div>

            </div>


        </div>
    );
};

export default Sidebar;