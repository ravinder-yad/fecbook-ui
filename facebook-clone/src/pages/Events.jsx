import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaCalendarAlt, FaPlus, FaSearch, FaMapMarkerAlt, FaUserFriends, FaGlobe, FaClock } from 'react-icons/fa';
import { MdEventAvailable, MdEventNote, MdGroups, MdCake, MdVideoCall, MdSettings } from 'react-icons/md';

export default function Events() {
    const [activeTab, setActiveTab] = useState('Discover');

    const sidebarItems = [
        { id: 'Discover', icon: MdEventAvailable, label: 'Discover Events' },
        { id: 'Invites', icon: MdEventNote, label: 'Event Invites' },
        { id: 'Calendar', icon: FaCalendarAlt, label: 'Your Calendar' },
        { id: 'Your Events', icon: MdGroups, label: 'Your Events' },
        { id: 'Birthdays', icon: MdCake, label: 'Birthdays' },
        { id: 'Hosting', icon: MdVideoCall, label: 'Hosting' },
    ];

    const upcomingEvents = [
        {
            id: 1,
            title: "Tech Conference 2024",
            date: "Sat, Oct 14",
            time: "10:00 AM",
            location: "Pragati Maidan, New Delhi",
            img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Technology",
            interested: "1.2K"
        },
        {
            id: 2,
            title: "Music Festival Live",
            date: "Sun, Oct 15",
            time: "6:00 PM",
            location: "JLN Stadium, Delhi",
            img: "https://images.unsplash.com/photo-1459749411177-287ce35e6b7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Music",
            interested: "5.4K"
        },
        {
            id: 3,
            title: "Startup Networking Meetup",
            date: "Wed, Oct 18",
            time: "7:00 PM",
            location: "Cyber Hub, Gurgaon",
            img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Networking",
            interested: "450"
        },
    ];

    return (
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-dark-bg transition-colors pb-10">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:flex w-[360px] h-[calc(100vh-56px)] bg-white dark:bg-dark-card sticky top-[56px] overflow-y-auto px-4 py-4 border-r border-[#CED0D4] dark:border-dark-border flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Events</h1>
                        <div className="w-9 h-9 bg-gray-100 dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                            <MdSettings className="text-xl text-[#050505] dark:text-dark-text" />
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="bg-[#F0F2F5] dark:bg-dark-bg rounded-full px-4 py-2 flex items-center mb-2">
                            <FaSearch className="text-[#65676B] mr-2 text-[15px]" />
                            <input type="text" placeholder="Search events" className="bg-transparent outline-none w-full text-[15px] dark:text-dark-text" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 mb-4">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-all ${activeTab === item.id ? 'bg-[#E7F3FF] dark:bg-[#252F3C]' : 'hover:bg-gray-100 dark:hover:bg-dark-hover'}`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === item.id ? 'bg-fb text-white shadow-md' : 'bg-gray-100 dark:bg-dark-bg text-[#050505] dark:text-dark-text'}`}>
                                    <item.icon className="text-[20px]" />
                                </div>
                                <span className={`font-bold text-[15px] ${activeTab === item.id ? 'text-fb' : 'text-[#050505] dark:text-dark-text'}`}>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full bg-[#E7F3FF] dark:bg-[#263951] text-fb dark:text-blue-300 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-100 dark:hover:bg-[#3A4B63] transition-all transform active:scale-95">
                        <FaPlus /> Create New Event
                    </button>

                    <div className="border-t border-[#CED0D4] dark:border-dark-border my-6"></div>

                    <h3 className="font-bold text-[17px] mb-3 px-2 text-[#050505] dark:text-dark-text">Upcoming Birthdays</h3>
                    <div className="bg-white dark:bg-dark-bg p-4 rounded-xl flex gap-3 shadow-premium border border-[#CED0D4] dark:border-dark-border hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FF42A1] to-[#FF8235] rounded-full flex items-center justify-center text-white text-2xl shadow-md">
                            <MdCake />
                        </div>
                        <div className="flex-1">
                            <p className="text-[15px] text-[#050505] dark:text-dark-text leading-tight">
                                <span className="font-bold">Rohan Mehta</span> and <span className="font-bold">3 others</span> have birthdays today.
                            </p>
                            <button className="text-fb dark:text-blue-400 text-[14px] font-bold mt-2 hover:underline">Wish them</button>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="flex-1 min-w-0 bg-[#F0F2F5] dark:bg-dark-bg/40">
                    <div className="p-4 md:p-8 max-w-6xl mx-auto">
                        {activeTab === 'Discover' && (
                            <div className="animate-fade-in">
                                <div className="flex justify-between items-end mb-6">
                                    <h2 className="text-2xl font-extrabold text-[#050505] dark:text-dark-text">Events in New Delhi, India</h2>
                                    <button className="text-fb font-bold hover:underline">See all</button>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {upcomingEvents.map(event => (
                                        <div key={event.id} className="fb-card p-0 overflow-hidden group hover:translate-y-[-4px] transition-all duration-300">
                                            <div className="relative h-48">
                                                <img src={event.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={event.title} />
                                                <div className="absolute top-3 left-3 bg-white/95 dark:bg-dark-card/95 backdrop-blur-sm p-1.5 rounded-xl text-center shadow-premium min-w-[50px]">
                                                    <p className="text-[11px] font-extrabold text-[#FF42A1] uppercase tracking-tighter">{event.date.split(',')[0]}</p>
                                                    <p className="text-xl font-black text-[#050505] dark:text-dark-text">{event.date.split(' ')[2]}</p>
                                                </div>
                                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="w-9 h-9 bg-white dark:bg-dark-card rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-gray-100 transition-colors">
                                                        <FaSearch className="text-fb" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-[13px] font-bold text-fb dark:text-blue-400 mb-1 uppercase tracking-tight">{event.date} AT {event.time}</p>
                                                <h3 className="text-[17px] font-extrabold mb-1 leading-snug group-hover:text-fb transition-colors text-[#050505] dark:text-dark-text line-clamp-2">{event.title}</h3>
                                                <div className="flex items-center gap-1.5 text-[13px] text-[#65676B] dark:text-dark-text2 mb-4">
                                                    <FaMapMarkerAlt className="shrink-0" />
                                                    <span className="truncate">{event.location}</span>
                                                </div>

                                                <div className="flex items-center justify-between text-[13px] font-medium text-[#65676B] dark:text-dark-text2 border-t border-gray-100 dark:border-dark-border pt-4 mb-4">
                                                    <span className="flex items-center gap-1"><FaUserFriends className="text-lg" /> {event.interested} interested</span>
                                                    <span className="bg-gray-100 dark:bg-dark-hover px-2 py-0.5 rounded-md">{event.category}</span>
                                                </div>

                                                <div className="flex gap-2 mt-auto">
                                                    <button className="flex-1 bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text py-2 rounded-lg font-bold text-[14px] hover:bg-[#D8DADF] transition-colors flex items-center justify-center gap-2">
                                                        <span className="text-xl">★</span> Interested
                                                    </button>
                                                    <button className="w-12 bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text py-2 rounded-lg font-bold hover:bg-[#D8DADF] transition-colors flex items-center justify-center">
                                                        <FaGlobe />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
