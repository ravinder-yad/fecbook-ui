import { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch, FaPhoneAlt, FaVideo, FaInfoCircle, FaSmile, FaImage, FaThumbsUp, FaPlusCircle, FaCamera, FaMicrophone } from 'react-icons/fa';
import { BsThreeDots, BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { IoSend } from 'react-icons/io5';
import { MdSettings, MdEdit, MdNotifications, MdSearch, MdPhotoSizeSelectActual } from 'react-icons/md';

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
        <div className="h-screen flex flex-col bg-white dark:bg-dark-bg transition-colors overflow-hidden">
            <Navbar />

            <div className="flex flex-1 overflow-hidden">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className={`${activeChat ? 'hidden md:flex' : 'flex'} w-full md:w-[360px] flex-col bg-white dark:bg-dark-card border-r border-[#CED0D4] dark:border-dark-border shadow-sm`}>
                    <div className="px-4 py-3 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Chats</h1>
                        <div className="flex gap-2">
                            <div className="w-9 h-9 bg-[#E4E6EB] dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-[#D8DADF] transition-colors">
                                <BsThreeDots className="text-xl text-[#050505] dark:text-dark-text" />
                            </div>
                            <div className="w-9 h-9 bg-[#E4E6EB] dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-[#D8DADF] transition-colors">
                                <MdEdit className="text-xl text-[#050505] dark:text-dark-text" />
                            </div>
                        </div>
                    </div>

                    <div className="px-4 pb-2">
                        <div className="bg-[#F0F2F5] dark:bg-dark-bg rounded-full px-4 py-2 flex items-center mb-2 border border-transparent focus-within:border-fb transition-all">
                            <FaSearch className="text-[#65676B] mr-2 text-[15px]" />
                            <input type="text" placeholder="Search Messenger" className="bg-transparent outline-none w-full text-[15px] text-[#050505] placeholder-[#65676B] dark:text-dark-text dark:placeholder-dark-text2" />
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-2 pb-4">
                        {chats.map(chat => (
                            <div
                                key={chat.id}
                                onClick={() => setActiveChat(chat.id)}
                                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${activeChat === chat.id ? 'bg-[#E7F3FF] dark:bg-[#252F3C]' : 'hover:bg-gray-100 dark:hover:bg-dark-hover'}`}
                            >
                                <div className="relative shrink-0">
                                    <img src={chat.img} className="w-14 h-14 rounded-full object-cover border border-gray-100 shadow-sm" alt={chat.name} />
                                    {chat.online && <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-[#31A24C] rounded-full border-[3px] border-white dark:border-dark-card"></div>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className={`font-semibold text-[15px] truncate ${chat.unread ? 'text-[#050505] dark:text-dark-text' : 'text-[#050505] dark:text-dark-text font-medium'}`}>{chat.name}</h3>
                                    <div className="flex items-center gap-1 text-[13px]">
                                        <p className={`truncate max-w-[140px] ${chat.unread ? 'font-bold text-[#050505] dark:text-dark-text' : 'text-[#65676B] dark:text-dark-text2'}`}>{chat.lastMsg}</p>
                                        <span className="text-[#65676B] dark:text-dark-text2">· {chat.time}</span>
                                    </div>
                                </div>
                                {chat.unread && <div className="w-3 h-3 bg-fb rounded-full shadow-sm"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= MIDDLE CHAT WINDOW ================= */}
                <div className={`${!activeChat ? 'hidden md:flex' : 'flex'} flex-1 flex-col bg-white dark:bg-dark-bg relative overflow-hidden transition-colors`}>
                    <div className="h-[60px] border-b border-[#CED0D4] dark:border-dark-border bg-white/80 dark:bg-dark-card/80 backdrop-blur-md flex justify-between items-center px-4 z-20">
                        <div className="flex items-center gap-3">
                            <button className="md:hidden text-2xl text-fb mr-1" onClick={() => setActiveChat(null)}>←</button>
                            <div className="relative cursor-pointer group">
                                <img src={currentChat?.img} className="w-10 h-10 rounded-full object-cover border border-gray-100 group-hover:opacity-80 transition-opacity" alt="User" />
                                {currentChat?.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#31A24C] rounded-full border-2 border-white dark:border-dark-card"></div>}
                            </div>
                            <div className="cursor-pointer">
                                <h2 className="font-bold text-[16px] text-[#050505] dark:text-dark-text leading-tight">{currentChat?.name}</h2>
                                <p className="text-[12px] text-[#65676B] dark:text-dark-text2 font-medium">{currentChat?.online ? 'Active now' : 'Active 1h ago'}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            {[FaPhoneAlt, FaVideo, FaInfoCircle].map((Icon, i) => (
                                <div key={i} className="w-9 h-9 flex items-center justify-center text-fb hover:bg-gray-100 dark:hover:bg-dark-hover rounded-full cursor-pointer transition-colors text-lg">
                                    <Icon />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-1 custom-scrollbar">
                        <div className="flex flex-col items-center mt-12 mb-10 text-center animate-fade-in">
                            <div className="relative mb-4">
                                <img src={currentChat?.img} className="w-24 h-24 rounded-full object-cover border-[4px] border-white dark:border-dark-hover shadow-lg" alt="" />
                                {currentChat?.online && <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#31A24C] rounded-full border-[4px] border-white dark:border-dark-bg"></div>}
                            </div>
                            <h2 className="text-2xl font-bold text-[#050505] dark:text-dark-text">{currentChat?.name}</h2>
                            <p className="text-[14px] text-[#65676B] dark:text-dark-text2 mt-1">Facebook · You're friends on Facebook</p>
                            <button className="mt-4 bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text px-4 py-1.5 rounded-lg font-bold text-[14px] hover:bg-[#D8DADF] transition-colors">View Profile</button>
                        </div>

                        {messages.map((msg, i) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-0.5 group`}>
                                {msg.sender === 'them' && (
                                    <img src={currentChat?.img} className={`w-7 h-7 rounded-full self-end mr-2 mb-0.5 shadow-sm ${messages[i+1]?.sender === 'them' ? 'invisible' : ''}`} alt="" />
                                )}
                                <div className={`max-w-[65%] px-4 py-2 shadow-sm ${msg.sender === 'me'
                                    ? 'bg-fb text-white rounded-[18px] rounded-br-[4px]'
                                    : 'bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text rounded-[18px] rounded-bl-[4px]'
                                    } text-[15px] leading-tight break-words relative transition-transform active:scale-[0.98]`}>
                                    {msg.text}
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 self-center text-[11px] text-[#65676B] dark:text-dark-text2 mx-2 transition-all duration-300">
                                    {msg.time}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 bg-white dark:bg-dark-card flex items-center gap-2 border-t border-[#CED0D4] dark:border-dark-border z-20">
                        <div className="flex gap-1">
                            {[FaPlusCircle, FaCamera, FaImage, FaMicrophone].map((Icon, i) => (
                                <div key={i} className="w-8 h-8 flex items-center justify-center text-fb hover:bg-gray-100 dark:hover:bg-dark-hover rounded-full cursor-pointer transition-colors text-lg">
                                    <Icon />
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSendMessage} className="flex-1 flex items-center bg-[#F0F2F5] dark:bg-dark-bg rounded-full px-4 py-2 shadow-inner border border-transparent focus-within:border-fb transition-all">
                            <input
                                type="text"
                                placeholder="Aa"
                                className="bg-transparent outline-none flex-1 text-[15px] text-[#050505] dark:text-dark-text placeholder-[#65676B] dark:placeholder-dark-text2"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                            />
                            <FaSmile className="text-fb text-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-hover rounded-full" />
                        </form>

                        {messageInput.trim() ? (
                            <div onClick={handleSendMessage} className="w-10 h-10 flex items-center justify-center text-fb hover:bg-gray-100 dark:hover:bg-dark-hover rounded-full cursor-pointer transition-transform scale-125">
                                <IoSend />
                            </div>
                        ) : (
                            <div className="w-10 h-10 flex items-center justify-center text-fb hover:bg-gray-100 dark:hover:bg-dark-hover rounded-full cursor-pointer transition-transform active:scale-90 text-[22px]">
                                <FaThumbsUp />
                            </div>
                        )}
                    </div>
                </div>

                {/* ================= RIGHT SIDEBAR ================= */}
                <div className="hidden xl:flex w-[320px] bg-white dark:bg-dark-card border-l border-[#CED0D4] dark:border-dark-border flex-col overflow-y-auto">
                    <div className="p-8 flex flex-col items-center text-center">
                        <img src={currentChat?.img} className="w-20 h-20 rounded-full mb-3 object-cover shadow-md border-2 border-white dark:border-dark-bg" alt="" />
                        <h2 className="text-xl font-bold text-[#050505] dark:text-dark-text leading-tight">{currentChat?.name}</h2>
                        <div className="flex items-center gap-1.5 text-[13px] text-[#65676B] dark:text-dark-text2 mt-1.5 font-medium">
                            <div className={`w-2.5 h-2.5 rounded-full ${currentChat?.online ? 'bg-[#31A24C]' : 'bg-gray-400'} border border-white dark:border-dark-card`}></div>
                            {currentChat?.online ? 'Active Now' : 'Offline'}
                        </div>

                        <div className="flex gap-8 mt-6">
                            {[
                                { icon: "👤", label: "Profile" },
                                { icon: "🔔", label: "Mute" },
                                { icon: "🔍", label: "Search" }
                            ].map((btn, i) => (
                                <div key={i} className="flex flex-col items-center gap-1.5 cursor-pointer group">
                                    <div className="w-9 h-9 bg-[#F0F2F5] dark:bg-dark-bg rounded-full flex items-center justify-center group-hover:bg-[#E4E6EB] dark:group-hover:bg-dark-hover transition-colors text-[17px]">
                                        {btn.icon}
                                    </div>
                                    <span className="text-[12px] font-semibold text-[#65676B] dark:text-dark-text2">{btn.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="px-2 pb-10">
                        {[
                            { label: "Chat info", items: ["View Media", "Pinned Messages"] },
                            { label: "Customize chat", items: ["Change Theme", "Edit Nicknames"] },
                            { label: "Privacy & support", items: ["Block", "Report"] }
                        ].map((section, i) => (
                            <div key={i} className="mb-1">
                                <div className="p-3.5 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-xl cursor-pointer flex justify-between items-center text-[#050505] dark:text-dark-text font-bold text-[15px] transition-colors">
                                    <span>{section.label}</span>
                                    <span className="text-gray-400 text-xl font-light">›</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
