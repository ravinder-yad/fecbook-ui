import { useState } from 'react';
import Navbar from '../components/Navbar';
import { BsThreeDots } from 'react-icons/bs';
import { FaUserFriends, FaCommentAlt, FaBirthdayCake, FaBell } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';

export default function Notifications() {
    const [filter, setFilter] = useState('All');

    const notifications = [
        { id: 1, type: 'friend_request', text: "Rahul Sharma sent you a friend request.", time: "2 hours ago", read: false, icon: FaUserFriends, iconColor: "text-blue-500" },
        { id: 2, type: 'comment', text: "Priya Singh commented on your photo.", time: "5 hours ago", read: true, icon: FaCommentAlt, iconColor: "text-green-500" },
        { id: 3, type: 'group', text: "New post in 'React Developers Community': 'Best state management lib?'", time: "1 day ago", read: false, icon: MdGroups, iconColor: "text-blue-400" },
        { id: 4, type: 'birthday', text: "It's Amit Verma's birthday today. Wish him!", time: "1 day ago", read: true, icon: FaBirthdayCake, iconColor: "text-yellow-500" },
        { id: 5, type: 'alert', text: "Security alert: New login from Windows PC.", time: "2 days ago", read: true, icon: FaBell, iconColor: "text-red-500" },
        { id: 6, type: 'friend_request', text: "Neha Gupta accepted your friend request.", time: "3 days ago", read: true, icon: FaUserFriends, iconColor: "text-blue-500" },
        { id: 7, type: 'comment', text: "Vikram Malhotra replied to your comment.", time: "3 days ago", read: true, icon: FaCommentAlt, iconColor: "text-green-500" },
        { id: 8, type: 'group', text: "Admin approved your post in 'Web Design Crafters'.", time: "4 days ago", read: true, icon: MdGroups, iconColor: "text-blue-400" },
    ];

    const filteredNotifications = filter === 'All' ? notifications : notifications.filter(n => !n.read);

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR (Notifications List) ================= */}
                <div className="w-full md:w-[360px] h-[calc(100vh-56px)] bg-light-card dark:bg-dark-card shadow-sm sticky top-[56px] overflow-y-auto px-4 py-4 md:border-r border-light-border dark:border-dark-border">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Notifications</h1>
                        <div className="w-8 h-8 rounded-full hover:bg-light-hover dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer transition-colors">
                            <BsThreeDots className="text-light-text dark:text-dark-text text-xl" />
                        </div>
                    </div>

                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setFilter('All')}
                            className={`px-4 py-1.5 rounded-full font-semibold text-[15px] transition-colors ${filter === 'All' ? 'bg-[#E7F3FF] dark:bg-[#263951] text-fb dark:text-blue-400' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-[#4E4F50]'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('Unread')}
                            className={`px-4 py-1.5 rounded-full font-semibold text-[15px] transition-colors ${filter === 'Unread' ? 'bg-[#E7F3FF] dark:bg-[#263951] text-fb dark:text-blue-400' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-[#4E4F50]'}`}
                        >
                            Unread
                        </button>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center mb-2 mt-2">
                            <h3 className="font-semibold text-light-text dark:text-dark-text text-[17px]">Earlier</h3>
                            <button className="text-fb text-sm hover:underline">See all</button>
                        </div>

                        {filteredNotifications.map(notif => (
                            <div key={notif.id} className={`flex items-start gap-3 p-2 rounded-lg cursor-pointer relative group transition-colors ${notif.read ? 'hover:bg-light-hover dark:hover:bg-dark-hover' : 'bg-[#E7F3FF] dark:bg-[#263951]/30 hover:bg-[#dfe9f5] dark:hover:bg-[#2d4059]/50'}`}>
                                <div className="relative shrink-0">
                                    <img src={`https://randomuser.me/api/portraits/men/${notif.id + 10}.jpg`} className="w-14 h-14 rounded-full object-cover border border-light-border dark:border-dark-border" alt="Avatar" />
                                    <div className={`absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center bg-light-card dark:bg-dark-card shadow-sm`}>
                                        <notif.icon className={`${notif.iconColor} text-sm`} />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <p className="text-[15px] text-light-text dark:text-dark-text leading-snug">
                                        <span className="font-bold">{notif.text.split(' ')[0]} {notif.text.split(' ')[1]}</span> {notif.text.split(' ').slice(2).join(' ')}
                                    </p>
                                    <span className={`text-xs font-semibold ${notif.read ? 'text-light-text2 dark:text-dark-text2' : 'text-fb dark:text-blue-400'}`}>{notif.time}</span>
                                </div>

                                {!notif.read && (
                                    <div className="w-3 h-3 bg-fb rounded-full mt-6 shrink-0"></div>
                                )}

                                {/* Hover Menu */}
                                <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-light-card dark:bg-dark-card shadow-md p-2 rounded-full hidden group-hover:flex items-center justify-center border border-light-border dark:border-dark-border">
                                    <BsThreeDots className="text-light-text dark:text-dark-text" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT EMPTY STATE (Desktop Only) ================= */}
                <div className="hidden md:flex flex-1 items-center justify-center min-w-0 bg-light-bg dark:bg-dark-bg/50">
                    <div className="text-center">
                        <img
                            src="https://static.xx.fbcdn.net/rsrc.php/yN/r/MnQWcWb6qPJ.svg" // Generic Illustration
                            className="w-28 h-28 mx-auto mb-4 opacity-50 dark:invert"
                            alt="Select Notification"
                        />
                        <h2 className="text-xl font-bold text-light-text2 dark:text-dark-text2">Select a notification to view details</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
