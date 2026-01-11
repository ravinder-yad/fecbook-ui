import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaCalendarAlt, FaPlus, FaSearch, FaMapMarkerAlt, FaUserFriends, FaGlobe, FaClock } from 'react-icons/fa';
import { MdEventAvailable, MdEventNote, MdGroups, MdCake, MdVideoCall } from 'react-icons/md';

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
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-light-card dark:bg-dark-card sticky top-[56px] overflow-y-auto p-4 border-r border-light-border dark:border-dark-border">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Events</h1>
                        {/* Settings logic if needed */}
                    </div>

                    <div className="flex flex-col gap-1 mb-4">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeTab === item.id ? 'bg-light-hover dark:bg-dark-hover' : 'hover:bg-light-hover dark:hover:bg-dark-hover'}`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === item.id ? 'bg-fb text-white' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text'}`}>
                                    <item.icon className="text-[20px]" />
                                </div>
                                <span className={`font-semibold text-[15px] ${activeTab === item.id ? 'text-fb' : 'text-light-text dark:text-dark-text'}`}>{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full bg-[#E7F3FF] dark:bg-[#263951] text-fb dark:text-blue-400 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-blue-100 dark:hover:bg-[#3A4B63] transition-colors">
                        <FaPlus /> Create New Event
                    </button>

                    <div className="border-t border-light-border dark:border-dark-border my-4"></div>

                    <h3 className="font-semibold text-[17px] mb-2 text-light-text dark:text-dark-text">Upcoming Birthdays</h3>
                    <div className="bg-light-bg dark:bg-dark-hover p-4 rounded-lg flex gap-3 shadow-sm border border-light-border dark:border-dark-border">
                        <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white text-xl">
                            <MdCake />
                        </div>
                        <div>
                            <p className="font-semibold text-sm text-light-text dark:text-dark-text"><span className="font-bold">Rohan</span> and <span className="font-bold">3 others</span> have birthdays today.</p>
                            <button className="text-fb text-sm font-semibold mt-1 hover:underline">Wish them</button>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="flex-1 min-w-0">

                    {/* Mobile Navigation */}
                    <div className="lg:hidden p-4 bg-light-card dark:bg-dark-card shadow-sm sticky top-[56px] z-20">
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Events</h1>
                            <button className="bg-[#E7F3FF] dark:bg-[#263951] text-fb py-1.5 px-3 rounded-md font-semibold text-sm dark:text-blue-400"><FaPlus /> Create</button>
                        </div>
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                            {sidebarItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${activeTab === item.id ? 'bg-fb text-white' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Content Render */}
                    <div className="p-4 md:p-8 max-w-5xl mx-auto">

                        {activeTab === 'Discover' && (
                            <>
                                <h2 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Upcoming Events</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {upcomingEvents.map(event => (
                                        <div key={event.id} className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-sm border border-light-border dark:border-dark-border group cursor-pointer hover:shadow-md transition-shadow">
                                            <div className="relative">
                                                <img src={event.img} className="w-full h-40 object-cover" alt={event.title} />
                                                <div className="absolute top-2 left-2 bg-white dark:bg-dark-card px-2 py-1 rounded-md text-center shadow">
                                                    <p className="text-xs font-bold text-red-500 uppercase">{event.date.split(',')[0]}</p>
                                                    <p className="text-lg font-bold text-light-text dark:text-dark-text">{event.date.split(' ')[2]}</p>
                                                </div>
                                            </div>
                                            <div className="p-4">
                                                <p className="text-xs font-semibold text-red-500 mb-1 uppercase">{event.date} AT {event.time}</p>
                                                <h3 className="text-xl font-bold mb-1 leading-snug group-hover:underline text-light-text dark:text-dark-text">{event.title}</h3>
                                                <p className="text-sm text-light-text2 dark:text-dark-text2 mb-4">{event.location}</p>

                                                <div className="flex items-center justify-between text-xs text-light-text2 dark:text-dark-text2 mb-4">
                                                    <span>{event.interested} interested</span>
                                                    <span>{event.category}</span>
                                                </div>

                                                <div className="flex gap-2">
                                                    <button className="flex-1 bg-[#E7F3FF] dark:bg-[#263951] text-fb dark:text-blue-400 py-1.5 rounded-md font-semibold text-sm hover:bg-blue-100 dark:hover:bg-[#3A4B63] transition-colors">Interested</button>
                                                    <button className="flex-1 bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text py-1.5 rounded-md font-semibold text-sm hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">Share</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {activeTab === 'Calendar' && (
                            <div className="bg-light-card dark:bg-dark-card p-10 rounded-lg text-center shadow-sm">
                                <div className="w-20 h-20 bg-gray-100 dark:bg-dark-hover rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FaCalendarAlt className="text-4xl text-gray-400 dark:text-dark-text2" />
                                </div>
                                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">No events this week</h3>
                                <p className="text-light-text2 dark:text-dark-text2 mb-6">Check back later or discover new events happening around you.</p>
                                <button className="bg-fb text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">Find Events</button>
                            </div>
                        )}

                        {/* Simple Placholders for other tabs */}
                        {(activeTab !== 'Discover' && activeTab !== 'Calendar') && (
                            <div className="text-center py-20">
                                <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{activeTab} View</h3>
                                <p className="text-light-text2 dark:text-dark-text2 mt-2">This section is currently empty.</p>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
}
