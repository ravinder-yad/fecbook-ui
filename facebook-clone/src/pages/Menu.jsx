import Navbar from '../components/Navbar';
import { FaUserCircle, FaFlag, FaUserFriends, FaUsers, FaStore, FaVideo, FaHistory, FaBookmark, FaCalendarAlt, FaStar, FaGamepad } from 'react-icons/fa';
import { MdEvent, MdPayment, MdFeedback, MdHelp, MdSettings, MdLogout, MdExpandMore } from 'react-icons/md';
import { BsFillMegaphoneFill } from 'react-icons/bs';

export default function Menu() {

    // Left Section: Menu Items (Social & Entertainment)
    const menuItems = [
        { icon: FaUserFriends, title: "Friends", desc: "See your friends and connections." },
        { icon: FaUsers, title: "Groups", desc: "Connect with people who share your interests." },
        { icon: FaStore, title: "Marketplace", desc: "Buy and sell in your community." },
        { icon: FaVideo, title: "Watch", desc: "Find videos and other content." },
        { icon: FaHistory, title: "Memories", desc: "Browse your old photos and posts." },
        { icon: FaBookmark, title: "Saved", desc: "Find posts and videos you saved." },
        { icon: FaFlag, title: "Pages", desc: "Discover and connect with businesses." },
        { icon: FaCalendarAlt, title: "Events", desc: "Organize or find events and other things." },
        { icon: FaGamepad, title: "Gaming", desc: "Play comments with friends." },
        { icon: FaStar, title: "Favorites", desc: "View posts from your favorite people." },
        { icon: MdPayment, title: "Orders and payments", desc: "A seamless way to pay." },
    ];

    // Left Section: Menu Items (Professional & Community)
    const profItems = [
        { icon: BsFillMegaphoneFill, title: "Ad Center", desc: "Manage all the ads you create." },
        { icon: FaFlag, title: "Ads Manager", desc: "Create, manage and track your ads." },
        { icon: FaUserCircle, title: "Professional Dashboard", desc: "Get tools to grow your business." },
        { icon: MdEvent, title: "Feeds", desc: "See the most relevant posts." },
    ];

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="pt-4 px-4 pb-10 flex flex-col items-center">
                {/* Main Content Container (Max Width Constrained) */}
                <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6">

                    {/* Left Column: Menu Cards */}
                    <div className="flex-1 bg-light-card dark:bg-dark-card rounded-lg shadow-sm p-4 h-fit">
                        <div className="mb-4 px-2">
                            <input
                                type="text"
                                placeholder="Search menu"
                                className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text px-4 py-2.5 rounded-full outline-none placeholder-light-text2 dark:placeholder-dark-text2"
                            />
                        </div>

                        <div className="mb-6">
                            <h2 className="font-bold text-[17px] mb-3 px-2 text-light-text dark:text-dark-text">Social</h2>
                            <div className="grid grid-cols-1 gap-1">
                                {menuItems.slice(0, 5).map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                        <item.icon className="text-2xl text-fb" />
                                        <div>
                                            <h3 className="font-semibold text-[15px] text-light-text dark:text-dark-text">{item.title}</h3>
                                            <p className="text-xs text-light-text2 dark:text-dark-text2">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-light-border dark:border-dark-border mb-4"></div>

                        <div className="mb-6">
                            <h2 className="font-bold text-[17px] mb-3 px-2 text-light-text dark:text-dark-text">Entertainment</h2>
                            <div className="grid grid-cols-1 gap-1">
                                {menuItems.slice(5, 9).map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                        <item.icon className="text-2xl text-fb" />
                                        <div>
                                            <h3 className="font-semibold text-[15px] text-light-text dark:text-dark-text">{item.title}</h3>
                                            <p className="text-xs text-light-text2 dark:text-dark-text2">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-light-border dark:border-dark-border mb-4"></div>

                        <div className="mb-2">
                            <h2 className="font-bold text-[17px] mb-3 px-2 text-light-text dark:text-dark-text">Professional</h2>
                            <div className="grid grid-cols-1 gap-1">
                                {profItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                        <item.icon className="text-2xl text-fb" />
                                        <div>
                                            <h3 className="font-semibold text-[15px] text-light-text dark:text-dark-text">{item.title}</h3>
                                            <p className="text-xs text-light-text2 dark:text-dark-text2">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 py-2 mt-2 font-semibold text-light-text dark:text-dark-text hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg transition-colors">
                            <MdExpandMore className="text-xl" /> See more
                        </button>
                    </div>

                    {/* Right Column: Create & Settings */}
                    <div className="w-full lg:w-[360px] flex flex-col gap-4">

                        {/* Create Card */}
                        <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm p-4 relative">
                            <h2 className="font-bold text-xl mb-4 text-light-text dark:text-dark-text">Create</h2>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><FaUserCircle className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Post</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><FaFlag className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Story</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><FaVideo className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Reel</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><MdEvent className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Life Event</span>
                                </div>
                                <div className="border-t border-light-border dark:border-dark-border my-2"></div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><FaFlag className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Page</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><BsFillMegaphoneFill className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Ad</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><FaUsers className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Group</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><FaCalendarAlt className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Event</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center"><FaStore className="text-light-text dark:text-dark-text" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Marketplace Listing</span>
                                </div>
                            </div>
                        </div>

                        {/* Settings & Support */}
                        <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm p-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center"><MdSettings className="text-black dark:text-white" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Settings & privacy</span>
                                    <MdExpandMore className="ml-auto text-2xl text-light-text dark:text-dark-text" />
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center"><MdHelp className="text-black dark:text-white" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Help & support</span>
                                    <MdExpandMore className="ml-auto text-2xl text-light-text dark:text-dark-text" />
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center"><MdFeedback className="text-black dark:text-white" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Give feedback</span>
                                </div>
                                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                                    <div className="w-9 h-9 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center"><MdLogout className="text-black dark:text-white" /></div>
                                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Log Out</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
