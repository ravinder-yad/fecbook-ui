import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch, FaPhoneAlt, FaVideo, FaInfoCircle, FaSmile, FaImage, FaThumbsUp, FaPlusCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';

export default function Messenger() {
    const [activeChat, setActiveChat] = useState(1);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, sender: 'them', text: "Hey! How are you doing?", time: "10:00 AM" },
        { id: 2, sender: 'me', text: "I'm good, thanks! What about you?", time: "10:05 AM" },
        { id: 3, sender: 'them', text: "Doing great. Are we still on for the project meeting?", time: "10:15 AM" },
        { id: 4, sender: 'me', text: "Yes, absolutely. 2 PM right?", time: "10:16 AM" },
        { id: 5, sender: 'them', text: "Perfect. See you tomorrow!", time: "10:30 AM" },
    ]);
    const messagesEndRef = useRef(null);

    const chats = [
        { id: 1, name: "Rahul Sharma", img: "https://randomuser.me/api/portraits/men/1.jpg", lastMsg: "See you tomorrow!", time: "10:30 AM", unread: true, online: true },
        { id: 2, name: "Priya Singh", img: "https://randomuser.me/api/portraits/women/2.jpg", lastMsg: "Sent a photo.", time: "Yesterday", unread: false, online: false },
        { id: 3, name: "Amit Verma", img: "https://randomuser.me/api/portraits/men/3.jpg", lastMsg: "Okay, sounds good.", time: "Mon", unread: false, online: true },
        { id: 4, name: "Neha Gupta", img: "https://randomuser.me/api/portraits/women/4.jpg", lastMsg: "Did you check the file?", time: "Sun", unread: false, online: false },
        { id: 5, name: "Vikram Malhotra", img: "https://randomuser.me/api/portraits/men/5.jpg", lastMsg: "Haha that was funny 😂", time: "Sun", unread: false, online: true },
        { id: 6, name: "Anjali Das", img: "https://randomuser.me/api/portraits/women/6.jpg", lastMsg: "Call me when free.", time: "Sat", unread: true, online: false },
        { id: 7, name: "Rohan Mehta", img: "https://randomuser.me/api/portraits/men/7.jpg", lastMsg: "Let's meet up.", time: "Fri", unread: false, online: true },
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e && e.preventDefault();
        if (!messageInput.trim()) return;

        const newMsg = {
            id: messages.length + 1,
            sender: 'me',
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMsg]);
        setMessageInput('');
    };

    const currentChat = chats.find(c => c.id === activeChat);

    return (
        <div className="h-screen flex flex-col bg-light-bg dark:bg-dark-bg transition-colors overflow-hidden">
            <Navbar />

            <div className="flex flex-1 overflow-hidden">
                {/* ================= LEFT SIDEBAR (Chat List) ================= */}
                <div className={`${activeChat ? 'hidden md:flex' : 'flex'} w-full md:w-[360px] flex-col bg-light-card dark:bg-dark-card border-r border-light-border dark:border-dark-border`}>

                    {/* Header */}
                    <div className="p-4 flex justify-between items-center sticky top-0 bg-light-card dark:bg-dark-card z-10">
                        <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Chats</h1>
                        <div className="flex gap-2">
                            <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                                <BsThreeDots className="text-light-text dark:text-dark-text" />
                            </div>
                            <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                                <FaPlusCircle className="text-light-text dark:text-dark-text" />
                            </div>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="px-4 mb-2">
                        <div className="bg-light-bg dark:bg-dark-hover rounded-full px-4 py-2 flex items-center">
                            <FaSearch className="text-light-text2 dark:text-dark-text2 mr-2" />
                            <input type="text" placeholder="Search Messenger" className="bg-transparent outline-none w-full text-light-text dark:text-dark-text placeholder-light-text2 dark:placeholder-dark-text2" />
                        </div>
                    </div>

                    {/* Chat List */}
                    <div className="flex-1 overflow-y-auto px-2">
                        {chats.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => setActiveChat(chat.id)}
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${activeChat === chat.id ? 'bg-light-hover dark:bg-[#252F3C]' : 'hover:bg-light-hover dark:hover:bg-dark-hover'}`}
                            >
                                <div className="relative">
                                    <img src={chat.img} className="w-14 h-14 rounded-full object-cover border border-light-border dark:border-dark-border" alt={chat.name} />
                                    {chat.online && <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-light-card dark:border-dark-card"></div>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-light-text dark:text-dark-text truncate">{chat.name}</h3>
                                    <div className="flex items-center gap-1 text-[14px]">
                                        <p className={`truncate ${chat.unread ? 'font-bold text-light-text dark:text-dark-text' : 'text-light-text2 dark:text-dark-text2'}`}>{chat.lastMsg}</p>
                                        <span className="text-light-text2 dark:text-dark-text2">· {chat.time}</span>
                                    </div>
                                </div>
                                {chat.unread && <div className="w-3 h-3 bg-fb rounded-full"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= MIDDLE (Chat Window) ================= */}
                <div className={`${!activeChat ? 'hidden md:flex' : 'flex'} flex-1 flex-col bg-light-card dark:bg-dark-bg relative`}>

                    {/* Chat Header */}
                    <div className="p-3 border-b border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card flex justify-between items-center shadow-sm z-10">
                        <div className="flex items-center gap-3">
                            <button className="md:hidden text-2xl text-fb mr-1" onClick={() => setActiveChat(null)}>←</button>
                            <div className="relative cursor-pointer">
                                <img src={currentChat?.img} className="w-10 h-10 rounded-full object-cover" alt="User" />
                                {currentChat?.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-dark-card"></div>}
                            </div>
                            <div className="cursor-pointer">
                                <h2 className="font-semibold text-[17px] text-light-text dark:text-dark-text">{currentChat?.name}</h2>
                                <p className="text-xs text-light-text2 dark:text-dark-text2">{currentChat?.online ? 'Active now' : 'Active 1h ago'}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 text-fb text-xl pr-2">
                            <FaPhoneAlt className="cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover p-1 rounded-full w-8 h-8" />
                            <FaVideo className="cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover p-1 rounded-full w-8 h-8" />
                            <FaInfoCircle className="cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover p-1 rounded-full w-8 h-8" />
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                        {/* Profile Info in Chat */}
                        <div className="flex flex-col items-center mt-6 mb-8 text-center">
                            <img src={currentChat?.img} className="w-24 h-24 rounded-full mb-3 object-cover border-[4px] border-light-hover dark:border-dark-hover" alt="" />
                            <h2 className="text-xl font-bold text-light-text dark:text-dark-text">{currentChat?.name}</h2>
                            <p className="text-sm text-light-text2 dark:text-dark-text2">You're friends on Facebook</p>
                            <p className="text-sm text-light-text2 dark:text-dark-text2">Lives in New Delhi, India</p>
                        </div>

                        {messages.map(msg => (
                            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-1 group`}>
                                {msg.sender === 'them' && <img src={currentChat?.img} className="w-7 h-7 rounded-full self-end mr-2 mb-1" />}
                                <div className={`max-w-[70%] px-4 py-2 rounded-2xl text-[15px] ${msg.sender === 'me'
                                    ? 'bg-fb dark:bg-dark-link text-white'
                                    : 'bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text'
                                    }`}>
                                    {msg.text}
                                </div>
                                <div className={`opacity-0 group-hover:opacity-100 self-center text-xs text-light-text2 dark:text-dark-text2 mx-2 transition-opacity`}>
                                    {msg.time}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <div className="p-3 bg-light-card dark:bg-dark-card flex items-center gap-3 border-t border-light-border dark:border-dark-border">
                        <div className="flex gap-3 text-fb text-xl">
                            <FaPlusCircle className="cursor-pointer hover:text-blue-600" />
                            <FaImage className="cursor-pointer hover:text-blue-600" />
                            <div className="cursor-pointer hover:text-blue-600 font-bold p-0.5 border border-fb rounded text-xs grid place-items-center w-6 h-5">GIF</div>
                        </div>

                        <form onSubmit={handleSendMessage} className="flex-1 flex items-center bg-light-bg dark:bg-dark-hover rounded-full px-4 py-2">
                            <input
                                type="text"
                                placeholder="Aa"
                                className="bg-transparent outline-none flex-1 text-light-text dark:text-dark-text placeholder-light-text2 dark:placeholder-dark-text2"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                            />
                            <FaSmile className="text-fb text-xl cursor-pointer hover:text-blue-600" />
                        </form>

                        {messageInput.trim() ? (
                            <IoSend onClick={handleSendMessage} className="text-fb text-2xl cursor-pointer hover:text-blue-600" />
                        ) : (
                            <FaThumbsUp className="text-fb text-2xl cursor-pointer hover:text-blue-600" />
                        )}
                    </div>

                </div>

                {/* ================= RIGHT SIDEBAR (Chat Details - Desktop) ================= */}
                <div className="hidden xl:block w-[300px] bg-light-card dark:bg-dark-card border-l border-light-border dark:border-dark-border overflow-y-auto">
                    <div className="p-6 flex flex-col items-center text-center">
                        <img src={currentChat?.img} className="w-24 h-24 rounded-full mb-3 object-cover" alt="" />
                        <h2 className="text-xl font-bold text-light-text dark:text-dark-text">{currentChat?.name}</h2>
                        <div className="flex items-center gap-1 text-xs text-light-text2 dark:text-dark-text2 mt-1">
                            <div className={`w-2 h-2 rounded-full ${currentChat?.online ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                            {currentChat?.online ? 'Active Now' : 'Offline'}
                        </div>

                        <div className="flex gap-6 mt-6 w-full justify-center">
                            <div className="flex flex-col items-center gap-1 cursor-pointer">
                                <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                                    <span className="text-lg text-light-text dark:text-dark-text">👤</span>
                                </div>
                                <span className="text-xs text-light-text2 dark:text-dark-text2">Profile</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 cursor-pointer">
                                <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                                    <span className="text-lg text-light-text dark:text-dark-text">🔔</span>
                                </div>
                                <span className="text-xs text-light-text2 dark:text-dark-text2">Mute</span>
                            </div>
                            <div className="flex flex-col items-center gap-1 cursor-pointer">
                                <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                                    <span className="text-lg text-light-text dark:text-dark-text">🔍</span>
                                </div>
                                <span className="text-xs text-light-text2 dark:text-dark-text2">Search</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-2">
                        <div className="p-3 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer flex justify-between items-center text-light-text dark:text-dark-text font-semibold text-[15px]">
                            <span>Chat info</span>
                            <span>›</span>
                        </div>
                        <div className="p-3 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer flex justify-between items-center text-light-text dark:text-dark-text font-semibold text-[15px]">
                            <span>Customize chat</span>
                            <span>›</span>
                        </div>
                        <div className="p-3 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer flex justify-between items-center text-light-text dark:text-dark-text font-semibold text-[15px]">
                            <span>Media, files and links</span>
                            <span>›</span>
                        </div>
                        <div className="p-3 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer flex justify-between items-center text-light-text dark:text-dark-text font-semibold text-[15px]">
                            <span>Privacy & support</span>
                            <span>›</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
