import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch, FaPlay, FaVideo, FaGamepad, FaCog } from 'react-icons/fa';
import { MdOndemandVideo, MdLiveTv, MdMovie, MdSaveAlt } from 'react-icons/md';
import { BiLike, BiComment, BiShare } from 'react-icons/bi';

export default function Watch() {
    const [activeTab, setActiveTab] = useState('Home');

    const sidebarItems = [
        { id: 'Home', icon: MdOndemandVideo, label: 'Home' },
        { id: 'Live', icon: MdLiveTv, label: 'Live' },
        { id: 'Reels', icon: MdMovie, label: 'Reels' },
        { id: 'Shows', icon: FaVideo, label: 'Shows' },
        { id: 'Saved', icon: MdSaveAlt, label: 'Saved Videos' },
        { id: 'Gaming', icon: FaGamepad, label: 'Gaming' },
    ];

    const videos = [
        {
            id: 1,
            pageName: "Tech Insider",
            pageImg: "https://randomuser.me/api/portraits/lego/1.jpg",
            time: "2h",
            title: "Future of AI Robots 🤖 | Amazing Technology 2024",
            videoThumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: "12K",
            comments: "540",
            shares: "1.2K",
            views: "1.5M"
        },
        {
            id: 2,
            pageName: "Nature World",
            pageImg: "https://randomuser.me/api/portraits/women/44.jpg",
            time: "5h",
            title: "The Most Beautiful Places on Earth 🌍✨",
            videoThumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: "45K",
            comments: "2K",
            shares: "15K",
            views: "8.2M"
        },
        {
            id: 3,
            pageName: "Gaming Hub",
            pageImg: "https://randomuser.me/api/portraits/men/32.jpg",
            time: "Yesterday",
            title: "GTA VI Leaked Gameplay Analysis? 🎮🔥",
            videoThumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            likes: "8.5K",
            comments: "900",
            shares: "200",
            views: "500K"
        },
    ];

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-light-card dark:bg-dark-card sticky top-[56px] overflow-y-auto p-2 pb-4 border-r border-light-border dark:border-dark-border">
                    <div className="px-2 pt-4 pb-2">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Watch</h1>
                            <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                                <FaCog className="text-light-text dark:text-dark-text" />
                            </div>
                        </div>

                        {/* Search Input */}
                        <div className="bg-light-bg dark:bg-dark-hover rounded-full px-3 py-2 flex items-center mb-4 cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                            <FaSearch className="text-light-text2 dark:text-dark-text2 mr-2" />
                            <input type="text" placeholder="Search videos" className="bg-transparent outline-none w-full text-light-text dark:text-dark-text placeholder-light-text2 dark:placeholder-dark-text2" />
                        </div>

                        {/* Sidebar Items */}
                        <div className="flex flex-col gap-1">
                            {sidebarItems.map(item => (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`flex items-center gap-3 px-2 py-2 rounded-lg cursor-pointer transition-colors ${activeTab === item.id ? 'bg-light-hover dark:bg-dark-hover' : 'hover:bg-light-hover dark:hover:bg-dark-hover'}`}
                                >
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === item.id ? 'bg-fb text-white' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text'}`}>
                                        <item.icon className="text-[20px]" />
                                    </div>
                                    <span className={`font-semibold text-[15px] ${activeTab === item.id ? 'text-fb font-bold' : 'text-light-text dark:text-dark-text'}`}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT CONTENT AREA ================= */}
                <div className="flex-1 flex justify-center min-w-0">
                    <div className="w-full max-w-[800px] py-6 px-0 md:px-4 flex flex-col gap-4">

                        {/* Mobile Tabs */}
                        <div className="lg:hidden flex overflow-x-auto gap-2 px-4 pb-2 scrollbar-hide sticky top-[60px] z-30 bg-light-bg dark:bg-dark-bg py-2">
                            {sidebarItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    className={`px-4 py-1.5 rounded-full font-semibold whitespace-nowrap text-sm ${activeTab === item.id ? 'bg-fb text-white' : 'bg-light-card dark:bg-dark-hover text-light-text dark:text-dark-text'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* New for you Header */}
                        {activeTab === 'Home' && <h3 className="font-bold text-xl px-4 md:px-0 text-light-text dark:text-dark-text">New for you</h3>}

                        {/* Video Feed */}
                        {videos.map(video => (
                            <div key={video.id} className="bg-light-card dark:bg-dark-card rounded-none md:rounded-lg shadow-sm overflow-hidden">
                                {/* Header */}
                                <div className="p-3 flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <img src={video.pageImg} className="w-10 h-10 rounded-full border border-light-border dark:border-dark-border cursor-pointer" alt={video.pageName} />
                                        <div>
                                            <h4 className="font-bold text-[15px] hover:underline cursor-pointer text-light-text dark:text-dark-text">
                                                {video.pageName} <span className="text-fb text-xs ml-1">Follow</span>
                                            </h4>
                                            <p className="text-xs text-light-text2 dark:text-dark-text2">{video.time} · <FaVideo className="inline" /></p>
                                        </div>
                                    </div>
                                    <div className="text-light-text2 dark:text-dark-text2 cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover p-2 rounded-full">
                                        <span className="font-bold tracking-widest text-lg">...</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="px-3 pb-2 text-[15px] text-light-text dark:text-dark-text">{video.title}</div>

                                {/* Video / Thumbnail */}
                                <div className="relative w-full cursor-pointer group bg-black">
                                    <img src={video.videoThumbnail} className="w-full h-auto object-cover max-h-[500px]" alt="Thumbnail" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                        <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center border-2 border-white">
                                            <FaPlay className="text-white ml-1 text-2xl" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-semibold">10:24</div>
                                </div>

                                {/* Actions */}
                                <div className="px-2 py-1">
                                    <div className="flex justify-between items-center text-sm text-light-text2 dark:text-dark-text2 px-2 py-2 border-b border-light-border dark:border-dark-border">
                                        <div className="flex items-center gap-1">
                                            <div className="bg-fb rounded-full p-[2px]"><BiLike className="text-white text-[10px]" /></div>
                                            <span>{video.likes}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span>{video.comments} Comments</span>
                                            <span>{video.shares} Shares</span>
                                            <span>{video.views} Views</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-around items-center py-1 mt-1">
                                        <button className="flex items-center gap-2 py-2 px-4 md:px-10 rounded-md hover:bg-light-hover dark:hover:bg-dark-hover text-light-text2 dark:text-dark-text2 font-semibold">
                                            <BiLike className="text-xl" /> <span className="text-[15px]">Like</span>
                                        </button>
                                        <button className="flex items-center gap-2 py-2 px-4 md:px-10 rounded-md hover:bg-light-hover dark:hover:bg-dark-hover text-light-text2 dark:text-dark-text2 font-semibold">
                                            <BiComment className="text-xl" /> <span className="text-[15px]">Comment</span>
                                        </button>
                                        <button className="flex items-center gap-2 py-2 px-4 md:px-10 rounded-md hover:bg-light-hover dark:hover:bg-dark-hover text-light-text2 dark:text-dark-text2 font-semibold">
                                            <BiShare className="text-xl" /> <span className="text-[15px]">Share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* End of Feed Message */}
                        <div className="text-center py-4 text-light-text2 dark:text-dark-text2">
                            <p className="font-semibold">You're all caught up!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
