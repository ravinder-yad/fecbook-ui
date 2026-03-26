import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaUserFriends, FaGift, FaUserPlus, FaList, FaChevronRight, FaSearch } from 'react-icons/fa';
import { MdPersonAddAlt1, MdGroups, MdSettings } from 'react-icons/md';

export default function Friends() {
    const [activeTab, setActiveTab] = useState('home');

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
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-white dark:bg-dark-card shadow-sm sticky top-[56px] overflow-y-auto p-2 pb-4 border-r border-[#CED0D4] dark:border-dark-border">
                    <div className="px-3 pt-5 pb-2 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Friends</h1>
                        <div className="w-9 h-9 bg-[#E4E6EB] dark:bg-dark-hover rounded-full flex items-center justify-center hover:bg-[#D8DADF] cursor-pointer">
                            <MdSettings className="text-2xl text-[#050505] dark:text-dark-text" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 mt-3 px-1">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${activeTab === item.id ? 'bg-[#F0F2F5] dark:bg-dark-hover' : 'hover:bg-[#F2F3F5] dark:hover:bg-dark-hover'}`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === item.id ? 'bg-fb text-white' : 'bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text'}`}>
                                    <item.icon className="text-[20px]" />
                                </div>
                                <span className={`font-semibold text-[17px] flex-1 ${activeTab === item.id ? 'text-[#050505] dark:text-dark-text' : 'text-[#050505] dark:text-dark-text'}`}>{item.label}</span>
                                {item.id === 'home' && <FaChevronRight className="text-[#65676B] text-[15px]" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT CONTENT AREA ================= */}
                <div className="flex-1 p-4 lg:p-8 min-w-0">
                    {/* View: Friend Requests */}
                    {(activeTab === 'home' || activeTab === 'requests') && (
                        <div className="mb-10 max-w-[1200px] mx-auto">
                            <div className="flex justify-between items-center mb-5 px-2">
                                <h2 className="text-xl font-bold text-[#050505] dark:text-dark-text">Friend Requests</h2>
                                <button className="text-fb font-semibold text-[15px] p-2 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-md transition-colors">See all</button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                                {friendRequests.map(req => (
                                    <div key={req.id} className="bg-white dark:bg-dark-card rounded-lg shadow-card overflow-hidden border border-[#CED0D4] dark:border-dark-border group">
                                        <div className="aspect-square overflow-hidden cursor-pointer">
                                            <img src={req.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={req.name} />
                                        </div>
                                        <div className="p-3">
                                            <h3 className="font-semibold text-[17px] mb-1.5 text-[#050505] dark:text-dark-text cursor-pointer hover:underline">{req.name}</h3>
                                            <div className="text-[#65676B] dark:text-dark-text2 text-[14px] mb-4 flex items-center gap-2">
                                                <div className="flex -space-x-1">
                                                    <div className="w-5 h-5 bg-gray-200 rounded-full border-2 border-white dark:border-dark-card overflow-hidden">
                                                        <img src="https://randomuser.me/api/portraits/thumb/men/1.jpg" alt="mutual" />
                                                    </div>
                                                </div>
                                                {req.mutual} mutual friends
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <button className="w-full bg-fb text-white py-1.5 rounded-md font-semibold text-[15px] hover:bg-blue-600 transition-colors">
                                                    Confirm
                                                </button>
                                                <button className="w-full bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text py-1.5 rounded-md font-semibold text-[15px] hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] transition-colors">
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="border-b border-[#CED0D4] dark:border-dark-border my-8 max-w-[1200px] mx-auto"></div>

                    {/* View: Suggestions */}
                    {(activeTab === 'home' || activeTab === 'suggestions') && (
                        <div className="max-w-[1200px] mx-auto">
                            <div className="flex justify-between items-center mb-5 px-2">
                                <h2 className="text-xl font-bold text-[#050505] dark:text-dark-text">People You May Know</h2>
                                <button className="text-fb font-semibold text-[15px] p-2 hover:bg-gray-100 dark:hover:bg-dark-hover rounded-md transition-colors">See all</button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
                                {suggestions.map(sug => (
                                    <div key={sug.id} className="bg-white dark:bg-dark-card rounded-lg shadow-card overflow-hidden border border-[#CED0D4] dark:border-dark-border group">
                                        <div className="aspect-square overflow-hidden cursor-pointer">
                                            <img src={sug.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={sug.name} />
                                        </div>
                                        <div className="p-3">
                                            <h3 className="font-semibold text-[17px] mb-1.5 text-[#050505] dark:text-dark-text cursor-pointer hover:underline">{sug.name}</h3>
                                            <div className="text-[#65676B] dark:text-dark-text2 text-[14px] mb-4 h-5">
                                                {sug.mutual > 0 ? `${sug.mutual} mutual friends` : 'Suggested for you'}
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <button className="w-full bg-[#E7F3FF] dark:bg-[#263951] text-fb dark:text-blue-400 py-1.5 rounded-md font-semibold text-[15px] px-1 hover:bg-[#D8EAFE] dark:hover:bg-[#3A4B63] transition-colors flex items-center justify-center gap-2">
                                                    <FaUserPlus className="text-lg" /> Add Friend
                                                </button>
                                                <button className="w-full bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text py-1.5 rounded-md font-semibold text-[15px] hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] transition-colors">
                                                    Remove
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
    );
}
