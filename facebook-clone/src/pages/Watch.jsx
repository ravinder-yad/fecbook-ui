import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch, FaPlay, FaVideo, FaGamepad, FaCog, FaChevronRight } from 'react-icons/fa';
import { MdOndemandVideo, MdLiveTv, MdMovie, MdSaveAlt, MdSettings, MdExplore } from 'react-icons/md';
import { BiLike, BiComment, BiShare } from 'react-icons/bi';

export default function Watch() {
    const [activeTab, setActiveTab] = useState('Home');

    const sidebarItems = [
        { id: 'Home', icon: MdOndemandVideo, label: 'Home' },
        { id: 'Live', icon: MdLiveTv, label: 'Live' },
        { id: 'Reels', icon: MdMovie, label: 'Reels' },
        { id: 'Shows', icon: FaVideo, label: 'Shows' },
        { id: 'Explore', icon: MdExplore, label: 'Explore' },
        { id: 'Saved', icon: MdSaveAlt, label: 'Saved Videos' },
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
        }
    ];

    return (
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-dark-bg transition-colors pb-10">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-white dark:bg-dark-card shadow-sm sticky top-[56px] overflow-y-auto p-2 pb-10 border-r border-[#CED0D4] dark:border-dark-border">
                    <div className="px-3 pt-4 pb-2 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Watch</h1>
                        <div className="w-9 h-9 bg-[#E4E6EB] dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-[#D8DADF] transition-colors">
                            <MdSettings className="text-2xl text-[#050505] dark:text-dark-text" />
                        </div>
                    </div>

                    <div className="px-3 mt-4">
                        <div className="bg-[#F0F2F5] dark:bg-dark-bg rounded-full px-3 py-2.5 flex items-center mb-4 border border-transparent focus-within:border-fb">
                            <FaSearch className="text-[#65676B] mr-2 text-[15px]" />
                            <input type="text" placeholder="Search videos" className="bg-transparent outline-none w-full text-[15px] text-[#050505] placeholder-[#65676B] dark:text-dark-text dark:placeholder-dark-text2" />
                        </div>
                    </div>

                    <div className="px-1 mt-2">
                        {sidebarItems.map(item => (
                            <div
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${activeTab === item.id ? 'bg-[#F0F2F5] dark:bg-dark-hover' : 'hover:bg-gray-100 dark:hover:bg-dark-hover'}`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === item.id ? 'bg-fb text-white' : 'bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text'}`}>
                                    <item.icon className="text-[20px]" />
                                </div>
                                <span className={`font-semibold text-[17px] flex-1 text-[#050505] dark:text-dark-text`}>{item.label}</span>
                                {item.id === 'Home' && <FaChevronRight className="text-gray-400 text-[12px]" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= RIGHT CONTENT AREA ================= */}
                <div className="flex-1 flex justify-center min-w-0">
                    <div className="w-full max-w-[740px] py-4 md:py-8 px-0 md:px-4 flex flex-col gap-4">
                        <div className="lg:hidden flex overflow-x-auto gap-2 px-4 pb-2 scrollbar-hide sticky top-[56px] z-30 bg-[#F0F2F5] dark:bg-dark-bg py-3 border-b border-[#CED0D4] dark:border-dark-border">
                            {sidebarItems.map(item => (
                                <button key={item.id} onClick={() => setActiveTab(item.id)} className={`px-5 py-2 rounded-full font-bold whitespace-nowrap text-[14px] transition-colors ${activeTab === item.id ? 'bg-[#E7F3FF] text-fb dark:bg-[#263951] dark:text-blue-300' : 'bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text'}`}>{item.label}</button>
                            ))}
                        </div>

                        {videos.map(video => (
                            <div key={video.id} className="fb-card !rounded-none md:!rounded-lg overflow-hidden border-[#CED0D4] dark:border-dark-border">
                                <div className="p-3 flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <img src={video.pageImg} className="w-10 h-10 rounded-full border border-gray-200 dark:border-dark-border cursor-pointer" alt={video.pageName} />
                                        <div>
                                            <h4 className="font-bold text-[15px] hover:underline cursor-pointer text-[#050505] dark:text-dark-text flex items-center gap-2">
                                                {video.pageName} <span className="text-fb font-semibold text-[14px] cursor-pointer hover:underline">· Follow</span>
                                            </h4>
                                            <p className="text-[13px] text-[#65676B] dark:text-dark-text2">{video.time} · <FaVideo className="inline text-[11px] mb-0.5" /></p>
                                        </div>
                                    </div>
                                    <button className="text-[#65676B] hover:bg-gray-100 dark:hover:bg-dark-hover p-2 rounded-full transition-colors"><FaCog /></button>
                                </div>

                                <div className="px-3 pb-3 text-[15px] text-[#050505] dark:text-dark-text leading-tight">{video.title}</div>

                                <div className="relative w-full cursor-pointer group bg-black overflow-hidden flex items-center justify-center aspect-video">
                                    <img src={video.videoThumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Thumbnail" />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                                            <FaPlay className="text-white ml-1 text-2xl drop-shadow-lg" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                                        <div className="bg-fb text-white text-[11px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">HD</div>
                                    </div>
                                    <div className="absolute bottom-4 right-4 bg-black/80 text-white text-[12px] px-2 py-0.5 rounded-sm font-semibold">10:24</div>
                                </div>

                                <div className="px-4 py-2">
                                    <div className="flex justify-between items-center text-[14px] text-[#65676B] dark:text-dark-text2 py-2 border-b border-[#CED0D4] dark:border-dark-border">
                                        <div className="flex items-center gap-1.5 cursor-pointer hover:underline">
                                            <div className="flex -space-x-1">
                                                <div className="w-5 h-5 bg-fb rounded-full flex items-center justify-center border border-white dark:border-dark-card"><BiLike className="text-white text-[11px]" /></div>
                                            </div>
                                            <span>{video.likes}</span>
                                        </div>
                                        <div className="flex gap-3 font-medium">
                                            <span className="hover:underline cursor-pointer">{video.comments} Comments</span>
                                            <span className="hover:underline cursor-pointer">{video.views} Views</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-1.5 mt-1">
                                        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-hover text-[#65676B] dark:text-dark-text2 font-bold text-[15px] transition-colors">
                                            <BiLike className="text-2xl" /> Like
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-hover text-[#65676B] dark:text-dark-text2 font-bold text-[15px] transition-colors">
                                            <BiComment className="text-2xl" /> Comment
                                        </button>
                                        <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-hover text-[#65676B] dark:text-dark-text2 font-bold text-[15px] transition-colors">
                                            <BiShare className="text-2xl" /> Share
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
