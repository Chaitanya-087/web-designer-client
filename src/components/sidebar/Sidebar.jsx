import React from 'react';
import { GoPlus } from "react-icons/go";
import { CiChat1 } from "react-icons/ci";
import './sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <span className='title'>Logo</span>
            {/* <IoIosMenu className='menu-icon' /> */}
            <div className='menu'>
                <div className='new-chat'>
                    <GoPlus className='add-icon' />
                    <p>New Chat</p>
                </div>
                <div className='recent'>
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

                </div>

            </div>


        </div>
    );
};

export default Sidebar;