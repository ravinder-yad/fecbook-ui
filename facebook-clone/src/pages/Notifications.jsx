import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaUserFriends, FaCommentAlt, FaBirthdayCake, FaBell } from 'react-icons/fa';
import { MdGroups, MdMoreHoriz, MdSettings } from 'react-icons/md';

export default function Notifications() {
    const [filter, setFilter] = useState('All');

    const notifications = [
        { id: 1, type: 'friend_request', text: "Rahul Sharma sent you a friend request.", time: "2 hours ago", read: false, icon: FaUserFriends, iconColor: "bg-blue-500" },
        { id: 2, type: 'comment', text: "Priya Singh commented on your photo.", time: "5 hours ago", read: true, icon: FaCommentAlt, iconColor: "bg-green-500" },
        { id: 3, type: 'group', text: "New post in 'React Developers Community': 'Best state management lib?'", time: "1 day ago", read: false, icon: MdGroups, iconColor: "bg-blue-400" },
        { id: 4, type: 'birthday', text: "It's Amit Verma's birthday today. Wish him!", time: "1 day ago", read: true, icon: FaBirthdayCake, iconColor: "bg-yellow-500" },
        { id: 5, type: 'alert', text: "Security alert: New login from Windows PC.", time: "2 days ago", read: true, icon: FaBell, iconColor: "bg-red-500" },
    ];

    const filteredNotifications = filter === 'All' ? notifications : notifications.filter(n => !n.read);

    return (
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-dark-bg transition-colors pb-10">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden md:flex w-[360px] h-[calc(100vh-56px)] bg-white dark:bg-dark-card shadow-sm sticky top-[56px] overflow-y-auto px-4 py-4 border-r border-[#CED0D4] dark:border-dark-border flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Notifications</h1>
                        <div className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer transition-colors">
                            <MdSettings className="text-[#050505] dark:text-dark-text text-2xl" />
                        </div>
                    </div>

                    <div className="flex gap-2 mb-6">
                        {['All', 'Unread'].map(f => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-5 py-2 rounded-full font-bold text-[14px] transition-all transform active:scale-95 ${filter === f ? 'bg-[#E7F3FF] text-fb dark:bg-[#263951] dark:text-blue-300' : 'text-[#050505] dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-hover'}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-bold text-[#050505] dark:text-dark-text text-[17px]">New</h3>
                            <button className="text-fb text-[14px] font-semibold hover:underline">See all</button>
                        </div>

                        {filteredNotifications.map(notif => (
                            <div key={notif.id} className={`flex items-start gap-3 p-2 py-3 rounded-xl cursor-pointer relative group transition-all ${notif.read ? 'hover:bg-gray-100 dark:hover:bg-dark-hover' : 'bg-[#E7F3FF]/40 dark:bg-[#263951]/40 hover:bg-[#E7F3FF]/60 dark:hover:bg-[#263951]/60'}`}>
                                <div className="relative shrink-0">
                                    <img src={`https://randomuser.me/api/portraits/men/${notif.id + 15}.jpg`} className="w-14 h-14 rounded-full object-cover border border-white dark:border-dark-card shadow-sm" alt="Avatar" />
                                    <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center ${notif.iconColor} border-[3px] border-white dark:border-dark-card shadow-md`}>
                                        <notif.icon className={`text-white text-[12px]`} />
                                    </div>
                                </div>

                                <div className="flex-1 pr-4">
                                    <p className={`text-[15px] dark:text-dark-text leading-tight ${notif.read ? 'text-[#050505]' : 'text-[#050505] font-semibold'}`}>
                                        {notif.text}
                                    </p>
                                    <span className={`text-[12px] mt-1 block font-medium ${notif.read ? 'text-[#65676B] dark:text-dark-text2' : 'text-fb font-bold'}`}>{notif.time}</span>
                                </div>

                                {!notif.read && (
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 bg-fb rounded-full shadow-sm"></div>
                                )}

                                <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-white dark:bg-dark-card shadow-xl p-2 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center border border-[#CED0D4] dark:border-dark-border transition-all hover:scale-110">
                                    <MdMoreHoriz className="text-[#050505] dark:text-dark-text text-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="hidden md:flex flex-1 flex-col items-center justify-center min-w-0 bg-[#F0F2F5] dark:bg-dark-bg/30">
                    <div className="text-center bg-white dark:bg-dark-card p-10 rounded-2xl shadow-premium max-w-sm">
                        <div className="w-24 h-24 bg-[#F0F2F5] dark:bg-dark-bg rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaBell className="text-5xl text-gray-300 dark:text-dark-text2 animate-pulse" />
                        </div>
                        <h2 className="text-[20px] font-bold text-[#050505] dark:text-dark-text mb-2">Select a notification</h2>
                        <p className="text-[#65676B] dark:text-dark-text2 text-[15px]">You'll see details about your activities, friend requests and updates here.</p>
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden w-full px-4 py-4">
                     <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text mb-4">Notifications</h1>
                     <div className="flex flex-col gap-3">
                         {filteredNotifications.map(notif => (
                             <div key={notif.id} className="flex gap-3 bg-white dark:bg-dark-card p-3 rounded-xl shadow-sm border border-[#CED0D4] dark:border-dark-border">
                                 <div className="relative shrink-0">
                                    <img src={`https://randomuser.me/api/portraits/men/${notif.id + 15}.jpg`} className="w-12 h-12 rounded-full object-cover" alt="" />
                                    <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${notif.iconColor} border-2 border-white dark:border-dark-card`}>
                                        <notif.icon className="text-white text-[10px]" />
                                    </div>
                                 </div>
                                 <div className="flex-1">
                                     <p className="text-[14px] text-[#050505] dark:text-dark-text leading-tight">{notif.text}</p>
                                     <p className="text-[12px] text-fb font-bold mt-1">{notif.time}</p>
                                 </div>
                             </div>
                         ))}
                     </div>
                </div>
            </div>
        </div>
    );
}
