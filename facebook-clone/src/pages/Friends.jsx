import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaUserFriends, FaGift, FaUserPlus, FaList, FaChevronRight } from 'react-icons/fa';
import { MdPersonAddAlt1, MdGroups } from 'react-icons/md';

export default function Friends() {
    const [activeTab, setActiveTab] = useState('home');

    // Dummy Data
    const friendRequests = [
        { id: 1, name: "Anjali Mehta", mutual: 12, img: "https://randomuser.me/api/portraits/women/10.jpg", time: "2d" },
        { id: 2, name: "Rohan Das", mutual: 5, img: "https://randomuser.me/api/portraits/men/12.jpg", time: "1w" },
        { id: 3, name: "Sita Verma", mutual: 8, img: "https://randomuser.me/api/portraits/women/14.jpg", time: "4d" },
        { id: 4, name: "Vikram Singh", mutual: 22, img: "https://randomuser.me/api/portraits/men/15.jpg", time: "5h" },
    ];

    const suggestions = [
        { id: 1, name: "Karan Johar", mutual: 3, img: "https://randomuser.me/api/portraits/men/20.jpg" },
        { id: 2, name: "Sara Ali Khan", mutual: 1, img: "https://randomuser.me/api/portraits/women/22.jpg" },
        { id: 3, name: "Arjun Rampal", mutual: 0, img: "https://randomuser.me/api/portraits/men/25.jpg" },
        { id: 4, name: "Deepika P", mutual: 15, img: "https://randomuser.me/api/portraits/women/30.jpg" },
        { id: 5, name: "Ranveer S", mutual: 10, img: "https://randomuser.me/api/portraits/men/35.jpg" },
        { id: 6, name: "Alia B", mutual: 4, img: "https://randomuser.me/api/portraits/women/35.jpg" },
    ];

    const sidebarItems = [
        { id: 'home', icon: FaUserFriends, label: 'Home' },
        { id: 'requests', icon: MdPersonAddAlt1, label: 'Friend Requests' },
        { id: 'suggestions', icon: FaUserPlus, label: 'Suggestions' },
        { id: 'all_friends', icon: MdGroups, label: 'All Friends' },
        { id: 'birthdays', icon: FaGift, label: 'Birthdays' },
        { id: 'lists', icon: FaList, label: 'Custom Lists' },
    ];

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">

                {/* ================= LEFT SIDEBAR (FRIENDS MENU) ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-light-card dark:bg-dark-card shadow-sm sticky top-[56px] overflow-y-auto p-2 pb-4 border-r dark:border-dark-border border-light-border">
                    <div className="px-2 pt-4 pb-2">
                        <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Friends</h1>
                    </div>

                    <div className="flex flex-col gap-1 mt-2">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-colors ${activeTab === item.id ? 'bg-light-hover dark:bg-dark-hover' : 'hover:bg-light-hover dark:hover:bg-dark-hover'}`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === item.id ? 'bg-fb text-white' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text'}`}>
                                    <item.icon className="text-[20px]" />
                                </div>
                                <span className={`font-semibold text-[17px] ${activeTab === item.id ? 'text-fb' : 'text-light-text dark:text-dark-text'}`}>{item.label}</span>
                                {item.id === 'home' && <div className="ml-auto"><FaChevronRight className="text-light-text2 dark:text-dark-text2" /></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT CONTENT AREA ================= */}
                <div className="flex-1 p-4 lg:p-8 min-w-0">

                    {/* Mobile Tabs */}
                    <div className="lg:hidden flex overflow-x-auto gap-2 mb-4 pb-2 scrollbar-hide">
                        {sidebarItems.map(item => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap text-sm ${activeTab === item.id ? 'bg-fb text-white' : 'bg-light-hover dark:bg-dark-hover text-light-text dark:text-dark-text'}`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* View: Home / Requests */}
                    {(activeTab === 'home' || activeTab === 'requests') && (
                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-light-text dark:text-dark-text">Friend Requests</h2>
                                <span className="text-fb cursor-pointer hover:underline">See All</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                                {friendRequests.map(req => (
                                    <div key={req.id} className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm overflow-hidden border border-light-border dark:border-dark-border">
                                        <img src={req.img} className="w-full h-[200px] object-cover" alt={req.name} />
                                        <div className="p-3">
                                            <h3 className="font-semibold text-[17px] mb-1 text-light-text dark:text-dark-text">{req.name}</h3>
                                            <div className="text-light-text2 dark:text-dark-text2 text-[14px] mb-3 flex items-center gap-2">
                                                <div className="flex -space-x-1">
                                                    <div className="w-4 h-4 bg-gray-300 rounded-full border border-white dark:border-dark-card"></div>
                                                    <div className="w-4 h-4 bg-gray-400 rounded-full border border-white dark:border-dark-card"></div>
                                                </div>
                                                {req.mutual} mutual friends
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <button className="w-full bg-fb text-white py-1.5 rounded-md font-semibold text-[15px] hover:bg-blue-600 transition-colors">
                                                    Confirm
                                                </button>
                                                <button className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text py-1.5 rounded-md font-semibold text-[15px] hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="border-b border-light-border dark:border-dark-border my-6"></div>

                    {/* View: Home / Suggestions */}
                    {(activeTab === 'home' || activeTab === 'suggestions') && (
                        <div>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-light-text dark:text-dark-text">People You May Know</h2>
                                <span className="text-fb cursor-pointer hover:underline">See All</span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                                {suggestions.map(sug => (
                                    <div key={sug.id} className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm overflow-hidden border border-light-border dark:border-dark-border">
                                        <img src={sug.img} className="w-full h-[200px] object-cover" alt={sug.name} />
                                        <div className="p-3">
                                            <h3 className="font-semibold text-[17px] mb-1 text-light-text dark:text-dark-text">{sug.name}</h3>
                                            <div className="text-light-text2 dark:text-dark-text2 text-[14px] mb-3 h-5">
                                                {sug.mutual > 0 ? `${sug.mutual} mutual friends` : 'Suggested for you'}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <button className="w-full bg-[#E7F3FF] dark:bg-[#263951] text-fb dark:text-blue-400 py-1.5 rounded-md font-semibold text-[15px] hover:bg-blue-100 dark:hover:bg-[#3A4B63] transition-colors">
                                                    Add Friend
                                                </button>
                                                <button className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text py-1.5 rounded-md font-semibold text-[15px] hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* View: Birthdays */}
                    {activeTab === 'birthdays' && (
                        <div className="max-w-2xl mx-auto bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-sm text-center">
                            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaGift className="text-red-500 text-3xl" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-light-text dark:text-dark-text">No Birthdays Today</h2>
                            <p className="text-light-text2 dark:text-dark-text2">Check back tomorrow for more birthdays!</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
