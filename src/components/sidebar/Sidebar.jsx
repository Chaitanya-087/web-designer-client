import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import './sidebar.css';


function Sidebar() {

    const [extended, setExtended] = useState(false);
    const toggleExtended = () => {
        setExtended(prev => !prev);
    }
    return (
        <div className="sidebar">
            <IoIosMenu className='menu-icon' onClick={toggleExtended} />
            <div className='menu'>
                <div className='new-chat'>
                    <GoPlus className='add-icon' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    <div className='recent-entry' title="chat title">
                        <CiChat1 />
                        <p>chat session 25136</p>
                    </div>
                    <div className='recent-entry'>
                        <CiChat1 />
                        <p>chat session</p>
                    </div>
                    <div className='recent-entry'>
                        <CiChat1 />
                        <p>chat session</p>
                    </div>
                    <div className='recent-entry'>
                        <CiChat1 />
                        <p>chat session</p>
                    </div>

                </div> : null}

            </div>


        </div>
    );
};

export default Sidebar;