import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { FaGlobe, FaEye, FaFolderOpen, FaThumbsUp, FaCommentAlt, FaSearch, FaUserPlus, FaChevronDown } from 'react-icons/fa';
import { MdGroups, MdMoreHoriz, MdNotifications, MdShare } from 'react-icons/md';

const StudyGroup = () => {
    return (
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-dark-bg transition-colors pb-10">
            <Navbar />
            
            <div className="max-w-[1250px] mx-auto w-full group">
                {/* Header / Cover */}
                <div className="bg-white dark:bg-dark-card shadow-sm rounded-b-lg overflow-hidden">
                    <div className="h-[200px] md:h-[300px] lg:h-[360px] bg-gradient-to-r from-blue-700 to-indigo-800 relative cursor-pointer">
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors"></div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h1 className="text-[28px] md:text-[32px] font-bold drop-shadow-lg leading-tight">📘 SSC CGL Exam Prep 2025</h1>
                            <div className="flex items-center gap-1.5 opacity-95 text-[15px] font-semibold mt-1">
                                <FaGlobe className="text-[14px]" />
                                <span>Public group</span>
                                <span>·</span>
                                <span>12.5k members</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex -space-x-2 cursor-pointer">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/thumb/men/${i+10}.jpg`} className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-card object-cover" alt="Member" />
                            ))}
                            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[11px] font-bold">+12k</div>
                        </div>
                        <div className="flex gap-2">
                            <button className="bg-fb text-white hover:bg-blue-600 px-4 py-2 rounded-md font-semibold transition-colors flex items-center gap-2 text-[15px]">
                                <FaUserPlus /> Invite
                            </button>
                            <button className="bg-[#E4E6EB] dark:bg-dark-hover hover:bg-[#D8DADF] px-4 py-2 rounded-md font-semibold text-[#050505] dark:text-dark-text transition-colors flex items-center gap-2 text-[15px]">
                                <MdShare className="text-xl" /> Share
                            </button>
                            <button className="bg-[#E4E6EB] dark:bg-dark-hover hover:bg-[#D8DADF] px-3 py-2 rounded-md font-semibold text-[#050505] dark:text-dark-text transition-colors">
                                <FaChevronDown className="text-xs" />
                            </button>
                        </div>
                    </div>

                    <div className="px-6 border-t border-gray-200 dark:border-dark-border">
                        <div className="flex items-center overflow-x-auto scrollbar-hide">
                            {['About', 'Discussion', 'Featured', 'Members', 'Events', 'Media', 'Files'].map((tab, i) => (
                                <div key={i} className={`px-4 py-4 font-semibold text-[15px] cursor-pointer relative whitespace-nowrap hover:bg-gray-100 dark:hover:bg-dark-hover rounded-md transition-colors ${tab === 'Discussion' ? 'text-fb' : 'text-[#65676B] dark:text-dark-text2'}`}>
                                    {tab}
                                    {tab === 'Discussion' && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-fb rounded-t-sm"></div>}
                                </div>
                            ))}
                            <button className="ml-auto w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-dark-hover rounded-md transition-colors">
                                <FaSearch className="text-[#65676B]" />
                            </button>
                            <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-dark-hover rounded-md transition-colors">
                                <MdMoreHoriz className="text-2xl text-[#65676B]" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row gap-4 mt-4 px-1 md:px-0">
                    {/* Main Feed */}
                    <div className="flex-1 max-w-[740px]">
                        <div className="fb-card p-4 mb-4 flex gap-3">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full" alt="Profile" />
                            <div className="bg-[#F0F2F5] dark:bg-dark-hover rounded-full flex-1 px-4 flex items-center text-[#65676B] dark:text-dark-text2 cursor-pointer hover:bg-[#E4E6EB] dark:hover:bg-[#4E4F50] transition-colors text-[17px]">
                                Write something...
                            </div>
                        </div>

                        <div className="fb-card p-4 mb-4 border-l-4 border-fb">
                            <h3 className="text-fb font-bold uppercase text-[13px] mb-1">Featured Announcement</h3>
                            <p className="font-semibold text-[#050505] dark:text-dark-text text-[15px]">📢 Teacher: Mock Test starts at 10:00 AM Tomorrow!</p>
                            <p className="text-[14px] text-[#65676B] dark:text-dark-text2 mt-1">Syllabus: Quantitative Aptitude (Algebra). All the best everyone!</p>
                        </div>

                        <Post 
                            profilePic="https://randomuser.me/api/portraits/men/55.jpg"
                            username="Rohan Das"
                            timestamp="2 hours ago"
                            message="Can anyone solve this algebra problem? I'm getting stuck at step 3. 🤔"
                        />
                    </div>

                    {/* Right Panel */}
                    <div className="w-full lg:w-[360px] flex flex-col gap-4">
                        <div className="fb-card p-4">
                            <h3 className="font-bold text-[17px] mb-3 text-[#050505] dark:text-dark-text">About this group</h3>
                            <p className="text-[15px] text-[#050505] dark:text-dark-text leading-snug">
                                Dedicated group for SSC CGL aspirants. Daily quizzes, notes sharing, and doubt solving.
                            </p>
                            
                            <div className="space-y-4 mt-4">
                                <div className="flex gap-3">
                                    <FaGlobe className="text-xl text-[#050505] dark:text-dark-text mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-[15px]">Public</p>
                                        <p className="text-[13px] text-[#65676B] dark:text-dark-text2">Anyone can see who's in the group and what they post.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <FaEye className="text-xl text-[#050505] dark:text-dark-text mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-[15px]">Visible</p>
                                        <p className="text-[13px] text-[#65676B] dark:text-dark-text2">Anyone can find this group.</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <FaFolderOpen className="text-xl text-[#050505] dark:text-dark-text mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-[15px]">General</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fb-card p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-green-100 dark:border-green-800">
                            <h3 className="font-bold text-[15px] mb-2 text-green-800 dark:text-green-300">🧠 Practice Quiz</h3>
                            <p className="text-[14px] mb-3 text-green-700 dark:text-green-400">Topic: General Awareness - Modern History</p>
                            <button className="bg-green-600 text-white text-[14px] px-3 py-2 rounded-md font-semibold w-full hover:bg-green-700 transition-colors shadow-sm">Start Practice</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyGroup;
