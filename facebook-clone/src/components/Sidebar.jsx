import { Link } from 'react-router-dom';
import { FaUserFriends, FaStore, FaBookmark, FaClock, FaUsers, FaExclamationTriangle } from 'react-icons/fa';
import { MdGroups, MdOndemandVideo, MdEvent } from 'react-icons/md';

export default function Sidebar() {
    const menuItems = [
        { id: 1, icon: FaUserFriends, label: 'Friends', color: 'text-cyan-500', link: '/friends' },
        { id: 2, icon: MdGroups, label: 'Groups', color: 'text-blue-500', link: '/groups' },
        { id: 3, icon: FaStore, label: 'Marketplace', color: 'text-blue-500', link: '/marketplace' },
        { id: 4, icon: MdOndemandVideo, label: 'Watch', color: 'text-blue-500', link: '/watch' },
        { id: 5, icon: FaClock, label: 'Memories', color: 'text-blue-300', link: '/memories' },
        { id: 6, icon: FaBookmark, label: 'Saved', color: 'text-purple-500', link: '/saved' },
        { id: 7, icon: MdEvent, label: 'Events', color: 'text-red-500', link: '/events' },
        { id: 8, icon: FaUsers, label: 'Study Groups', color: 'text-green-500', link: '/groups' },
    ];

    const shortcuts = [
        { id: 1, img: "https://picsum.photos/40?random=1", label: "Web Developers Group" },
        { id: 2, img: "https://picsum.photos/40?random=2", label: "React JS Community" },
        { id: 3, img: "https://picsum.photos/40?random=4", label: "SSC CGL Exam Prep" },
    ];

    return (
        <div className="w-[360px] hidden xl:flex flex-col h-[calc(100vh-56px)] fixed left-0 top-[56px] overflow-y-auto pb-4 scrollbar-hide pl-4 pr-2 hover:scrollbar-default z-40 bg-transparent">

            {/* User Profile Link */}
            <Link to="/profile" className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-xl cursor-pointer transition-colors mt-4">
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover border border-light-border dark:border-dark-border"
                />
                <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Ravinder Singh</span>
            </Link>

            {/* Warning Item */}
            <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-xl cursor-pointer transition-colors">
                <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                    <FaExclamationTriangle className="text-red-500 text-xl" />
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Account Warning</span>
                    <span className="text-[12px] text-light-error dark:text-dark-error font-medium">1 Strike applied</span>
                </div>
                <div className="w-2 h-2 bg-light-error dark:bg-dark-error rounded-full ml-auto"></div>
            </div>

            {/* Menu Items */}
            {menuItems.map((item) => (
                <Link to={item.link} key={item.id} className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-xl cursor-pointer transition-colors group">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center">
                        <item.icon className={`text-[24px] ${item.color}`} />
                    </div>
                    <span className="font-medium text-[15px] text-light-text dark:text-dark-text group-hover:font-semibold transition-all">
                        {item.label}
                    </span>
                    {item.label === 'Marketplace' && (
                        <span className="w-2 h-2 bg-fb rounded-full ml-auto"></span>
                    )}
                </Link>
            ))}

            <div className="my-2 border-b border-light-border dark:border-dark-border mx-2"></div>

            {/* Shortcuts Header */}
            <div className="flex justify-between items-center px-2 mt-2 group">
                <h3 className="font-semibold text-[17px] text-light-text2 dark:text-dark-text2 group-hover:text-fb transition-colors">Your Shortcuts</h3>
                <span className="text-fb text-xs hidden group-hover:block cursor-pointer bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">Edit</span>
            </div>

            {/* Shortcuts List */}
            {shortcuts.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-xl cursor-pointer transition-colors">
                    <img src={item.img} alt={item.label} className="w-9 h-9 rounded-lg object-cover border border-light-border dark:border-dark-border" />
                    <span className="font-medium text-[15px] text-light-text dark:text-dark-text">{item.label}</span>
                </div>
            ))}

            <div className="mt-auto p-4 textxs text-gray-500">
                <p className="text-[13px] leading-5 text-light-text2 dark:text-dark-text2">Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2025</p>
            </div>
        </div>
    );
}
