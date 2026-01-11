import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaBook, FaBoxOpen, FaImages, FaCog, FaPlus, FaVideo, FaLink, FaCalendarAlt, FaShoppingBag } from 'react-icons/fa';

export default function Saved() {
    const [activeTab, setActiveTab] = useState('All');

    const sidebarItems = [
        { id: 'All', icon: FaBook, label: 'All Items' },
        { id: 'Posts', icon: FaBoxOpen, label: 'Posts' },
        { id: 'Videos', icon: FaVideo, label: 'Videos' },
        { id: 'Links', icon: FaLink, label: 'Links' },
        { id: 'Products', icon: FaShoppingBag, label: 'Products' },
        { id: 'Events', icon: FaCalendarAlt, label: 'Events' },
    ];

    const savedItems = [
        {
            id: 1,
            type: 'video',
            category: 'Videos',
            title: "Advanced React Patterns - Full Course 2024",
            source: "Saved from React Developers",
            img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            savedTime: "2 days ago"
        },
        {
            id: 2,
            type: 'post',
            category: 'Posts',
            title: "Top 10 Tourist Places to Visit in India this Winter ❄️",
            source: "Saved from Travel India",
            img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            savedTime: "1 week ago"
        },
        {
            id: 3,
            type: 'product',
            category: 'Products',
            title: "Sony WH-1000XM5 Wireless Headphones",
            source: "Saved from Marketplace",
            img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            savedTime: "3 weeks ago"
        },
        {
            id: 4,
            type: 'link',
            category: 'Links',
            title: "How to Scale Node.js Applications",
            source: "Saved from TechCrunch",
            img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            savedTime: "Yesterday"
        }
    ];

    const filteredItems = activeTab === 'All' ? savedItems : savedItems.filter(item => item.category === activeTab);

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-light-card dark:bg-dark-card sticky top-[56px] overflow-y-auto p-4 border-r border-light-border dark:border-dark-border">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Saved</h1>
                        <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                            <FaCog className="text-light-text dark:text-dark-text" />
                        </div>
                    </div>

                    <h3 className="font-bold text-[17px] mb-2 px-2 text-light-text dark:text-dark-text">My Collections</h3>
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover mb-4">
                        <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center">
                            <FaPlus className="text-light-text dark:text-dark-text" />
                        </div>
                        <span className="font-semibold text-light-text dark:text-dark-text">Create New Collection</span>
                    </div>

                    <div className="border-t border-light-border dark:border-dark-border my-4"></div>

                    <div className="flex flex-col gap-1">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 px-3 py-3.5 rounded-lg cursor-pointer transition-colors ${activeTab === item.id ? 'bg-light-hover dark:bg-dark-hover' : 'hover:bg-light-hover dark:hover:bg-dark-hover'}`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === item.id ? 'bg-fb text-white' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text'}`}>
                                    <item.icon className="text-[18px]" />
                                </div>
                                <span className={`font-semibold text-[15px] ${activeTab === item.id ? 'text-fb' : 'text-light-text dark:text-dark-text'}`}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="flex-1 min-w-0">

                    {/* Mobile Tabs */}
                    <div className="lg:hidden p-4 bg-light-card dark:bg-dark-card shadow-sm sticky top-[56px] z-20">
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Saved</h1>
                            <FaCog className="text-xl text-light-text dark:text-dark-text" />
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

                    <div className="p-4 md:p-8 max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold mb-6 text-light-text dark:text-dark-text">{activeTab}</h2>

                        {filteredItems.length > 0 ? (
                            <div className="flex flex-col gap-4">
                                {filteredItems.map(item => (
                                    <div key={item.id} className="bg-light-card dark:bg-dark-card p-3 rounded-lg shadow-sm border border-light-border dark:border-dark-border flex gap-4 cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover transition-colors">
                                        <img src={item.img} className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover bg-gray-200" alt={item.title} />
                                        <div className="flex-1 py-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-bold text-lg leading-tight mb-1 line-clamp-2 text-light-text dark:text-dark-text">{item.title}</h3>
                                                <p className="text-sm text-light-text2 dark:text-dark-text2">{item.source}</p>
                                            </div>

                                            <div className="flex justify-between items-center text-xs text-light-text2 dark:text-dark-text2 mt-2">
                                                <div className="flex items-center gap-2">
                                                    <span>{item.category}</span>
                                                    <span>•</span>
                                                    <span>Saved {item.savedTime}</span>
                                                </div>
                                                <button className="bg-light-bg dark:bg-dark-hover px-3 py-1.5 rounded-md font-semibold text-light-text dark:text-dark-text hover:bg-gray-300 dark:hover:bg-[#4E4F50] transition-colors">Add to Collection</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-20 bg-light-card dark:bg-dark-card rounded-lg shadow-sm">
                                <h3 className="text-lg font-bold text-light-text dark:text-dark-text">No items found</h3>
                                <p className="text-light-text2 dark:text-dark-text2 mt-2">Items you save will appear here.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
