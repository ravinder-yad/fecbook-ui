import Navbar from '../components/Navbar';
import { FaHistory, FaArrowRight, FaShare, FaComments, FaRegGrin } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

export default function Memories() {

    // Dummy Memory Post
    const memoryPost = {
        date: "2 years ago",
        originalDate: "July 25, 2022",
        img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        caption: "Trip to Manali with best buddies! ❤️🏔️ #Travel #Memories #Fun",
        likes: 156,
        comments: 42
    };

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-light-card dark:bg-dark-card sticky top-[56px] p-4 border-r border-light-border dark:border-dark-border">
                    <h1 className="text-2xl font-bold mb-6 text-light-text dark:text-dark-text">Memories</h1>

                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3 px-3 py-3 rounded-lg bg-light-hover dark:bg-dark-hover cursor-pointer border-l-4 border-fb">
                            <div className="w-9 h-9 bg-fb rounded-full flex items-center justify-center">
                                <FaHistory className="text-white text-lg" />
                            </div>
                            <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Home</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover cursor-pointer text-light-text dark:text-dark-text">
                            <span className="font-semibold text-[15px]">Notifications</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover cursor-pointer text-light-text dark:text-dark-text">
                            <span className="font-semibold text-[15px]">Hide People</span>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-light-hover dark:hover:bg-dark-hover cursor-pointer text-light-text dark:text-dark-text">
                            <span className="font-semibold text-[15px]">Hide Dates</span>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="flex-1 flex justify-center py-6 px-4 min-w-0">
                    <div className="w-full max-w-[650px] flex flex-col gap-6">

                        {/* On This Day Header */}
                        <div className="text-center lg:text-left mb-2">
                            <h2 className="text-xl font-bold text-light-text dark:text-dark-text">On this day</h2>
                            <p className="text-light-text2 dark:text-dark-text2">Look back at this moment from your memories.</p>
                        </div>

                        {/* Memory Card */}
                        <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm overflow-hidden border border-light-border dark:border-dark-border">

                            {/* Memory Header (Banner) */}
                            <div className="bg-light-hover dark:bg-[#252F3C] p-4 flex items-center gap-4 text-light-text dark:text-dark-text border-b border-light-border dark:border-dark-border">
                                <div className="w-10 h-10 bg-fb text-white rounded-full flex items-center justify-center text-xl shrink-0">
                                    <FaHistory />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-[17px]">{memoryPost.date}</h3>
                                    <p className="text-xs text-light-text2 dark:text-dark-text2 opacity-80">We hope you enjoy looking back and sharing your memories on Facebook, from the most recent to those long ago.</p>
                                </div>
                            </div>

                            {/* Post Header */}
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full object-cover border border-light-border dark:border-dark-border" alt="Profile" />
                                    <div>
                                        <h4 className="font-bold text-[15px] hover:underline cursor-pointer text-light-text dark:text-dark-text">Ravinder Yadav</h4>
                                        <p className="text-xs text-light-text2 dark:text-dark-text2">{memoryPost.originalDate} · <span>🌍</span></p>
                                    </div>
                                </div>
                                <BsThreeDots className="text-2xl text-light-text2 dark:text-dark-text2 cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover rounded-full p-1" />
                            </div>

                            {/* Post Caption */}
                            <div className="px-4 pb-2 text-[15px] text-light-text dark:text-dark-text">
                                {memoryPost.caption}
                            </div>

                            {/* Post Image */}
                            <div className="w-full bg-black">
                                <img src={memoryPost.img} className="w-full h-auto object-cover max-h-[600px]" alt="Memory" />
                            </div>

                            {/* Post Stats */}
                            <div className="px-4 py-2 flex justify-between items-center text-light-text2 dark:text-dark-text2 text-sm border-b border-light-border dark:border-dark-border">
                                <div className="flex items-center gap-1">
                                    <span className="bg-fb rounded-full p-1"><FaRegGrin className="text-white text-xs" /></span>
                                    <span>{memoryPost.likes}</span>
                                </div>
                                <div className="flex gap-3">
                                    <span>{memoryPost.comments} comments</span>
                                    <span>10 shares</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between px-4 py-1">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-md text-light-text2 dark:text-dark-text2 font-semibold transition-colors">
                                    <FaShare className="text-xl" /> Share
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-md text-light-text2 dark:text-dark-text2 font-semibold transition-colors">
                                    <FaComments className="text-xl" /> Send in Message
                                </button>
                            </div>
                        </div>

                        {/* See All Memories Button */}
                        <button className="w-full bg-light-card dark:bg-dark-card py-3 rounded-lg shadow-sm font-semibold text-light-text dark:text-dark-text flex items-center justify-center gap-2 hover:bg-light-hover dark:hover:bg-dark-hover transition-colors border border-light-border dark:border-dark-border">
                            See All Memories <FaArrowRight />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
