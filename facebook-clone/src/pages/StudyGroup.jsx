import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FaGlobe, FaEye, FaFolderOpen, FaThumbsUp, FaCommentAlt } from 'react-icons/fa';

const StudyGroup = () => {
    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />
            <div className="flex pt-4">
                <Sidebar />

                <div className="flex-1 p-4 md:p-6 max-w-4xl mx-auto xl:ml-[360px]">
                    {/* Header / Cover */}
                    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm overflow-hidden mb-6">
                        <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                            <div className="absolute bottom-4 left-4 text-white">
                                <h1 className="text-3xl font-bold drop-shadow-md">📘 SSC CGL Exam Prep 2025</h1>
                                <p className="opacity-90 drop-shadow-md">Private Group · 12.5k Members</p>
                            </div>
                        </div>
                        <div className="p-4 flex gap-2 border-t border-light-border dark:border-dark-border">
                            <button className="bg-light-bg dark:bg-dark-hover hover:bg-light-hover dark:hover:bg-[#4E4F50] px-4 py-2 rounded-md font-semibold text-light-text dark:text-dark-text transition-colors">Joined</button>
                            <button className="bg-fb text-white hover:bg-blue-600 px-4 py-2 rounded-md font-semibold transition-colors">+ Invite</button>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                        {/* Main Feed */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Announcement */}
                            <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-red-600 font-bold uppercase text-xs mb-1">Important Announcement</h3>
                                        <p className="font-semibold text-light-text dark:text-dark-text">📢 Teacher: Mock Test starts at 10:00 AM Tomorrow!</p>
                                        <p className="text-sm text-light-text2 dark:text-dark-text2 mt-1">Syllabus: Quantitative Aptitude (Algebra). No calculator allowed.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Create Post */}
                            <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm flex gap-3">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-10 h-10 rounded-full border border-light-border dark:border-dark-border" alt="Profile" />
                                <div className="bg-light-bg dark:bg-dark-hover rounded-full flex-1 px-4 flex items-center text-light-text2 dark:text-dark-text2 cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">
                                    Ask a doubt or share notes...
                                </div>
                            </div>

                            {/* Group Post */}
                            <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm">
                                <div className="flex items-center gap-2 mb-3">
                                    <img src="https://randomuser.me/api/portraits/men/55.jpg" className="w-10 h-10 rounded-full border border-light-border dark:border-dark-border" alt="User" />
                                    <div>
                                        <h4 className="font-semibold text-[15px] text-light-text dark:text-dark-text">Rohan Das</h4>
                                        <span className="text-xs text-light-text2 dark:text-dark-text2">2 hours ago</span>
                                    </div>
                                </div>
                                <p className="text-sm mb-3 text-light-text dark:text-dark-text">Can anyone solve this algebra problem? I'm getting stuck at step 3. 🤔</p>
                                <div className="bg-light-bg dark:bg-dark-hover p-4 rounded-lg text-center text-light-text2 dark:text-dark-text2 italic border border-light-border dark:border-dark-border">
                                    [Image of Math Problem]
                                </div>
                                <div className="flex gap-4 mt-3 text-light-text2 dark:text-dark-text2 text-sm font-semibold border-t border-light-border dark:border-dark-border pt-2">
                                    <div className="cursor-pointer hover:text-fb flex items-center gap-1"><FaThumbsUp /> Like</div>
                                    <div className="cursor-pointer hover:text-fb flex items-center gap-1"><FaCommentAlt /> Comment</div>
                                </div>
                            </div>

                        </div>

                        {/* Right Panel */}
                        <div className="space-y-4">
                            <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm">
                                <h3 className="font-bold mb-3 text-light-text dark:text-dark-text">About</h3>
                                <p className="text-sm text-light-text2 dark:text-dark-text2">Dedicated group for SSC CGL aspirants. Daily quizzes, notes sharing, and doubt solving.</p>
                                <div className="mt-3 text-sm font-semibold text-light-text dark:text-dark-text">
                                    <div className="flex items-center gap-2 mb-1"><FaGlobe /> Public</div>
                                    <div className="flex items-center gap-2 mb-1"><FaEye /> Visible</div>
                                    <div className="flex items-center gap-2"><FaFolderOpen /> Education</div>
                                </div>
                            </div>

                            <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg border border-green-200 dark:border-green-800">
                                <h3 className="font-bold text-sm mb-1">🧠 Quick Quiz</h3>
                                <p className="text-xs mb-2">Topic: General Awareness</p>
                                <button className="bg-green-600 text-white text-xs px-3 py-1.5 rounded font-semibold w-full hover:bg-green-700 transition-colors">Start Quiz Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudyGroup;
