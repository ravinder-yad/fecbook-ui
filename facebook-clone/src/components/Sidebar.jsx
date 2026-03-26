import { Link } from 'react-router-dom';
import { FaUserFriends, FaStore, FaBookmark, FaClock, FaUsers } from 'react-icons/fa';
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
        <div className="w-[360px] hidden xl:flex flex-col h-[calc(100vh-56px)] fixed left-0 top-[56px] overflow-y-auto pb-4 pl-2 pr-2 hover:sidebar-scroll z-40 bg-transparent">

            {/* User Profile Link */}
            <Link to="/profile" className="flex items-center gap-3 p-2 hover:bg-[#E4E6EB] dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors mt-2">
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    className="w-9 h-9 rounded-full object-cover border border-light-border dark:border-dark-border"
                />
                <span className="font-medium text-[15px] text-light-text dark:text-dark-text">Ravinder Singh</span>
            </Link>

            {/* Menu Items */}
            {menuItems.map((item) => (
                <Link to={item.link} key={item.id} className="flex items-center gap-3 p-2 hover:bg-[#E4E6EB] dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors group">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center">
                        <item.icon className={`text-[24px] ${item.color}`} />
                    </div>
                    <span className="font-medium text-[15px] text-light-text dark:text-dark-text">
                        {item.label}
                    </span>
                    {item.label === 'Marketplace' && (
                        <div className="w-2 h-2 bg-fb rounded-full ml-auto mr-2"></div>
                    )}
                </Link>
            ))}

            <div className="my-2 border-b border-gray-300 dark:border-dark-border mx-2"></div>

            {/* Shortcuts Header */}
            <div className="flex justify-between items-center px-4 py-2">
                <h3 className="font-semibold text-[17px] text-[#65676B] dark:text-dark-text2 font-sans">Your shortcuts</h3>
                <span className="text-fb text-sm hover:bg-gray-100 dark:hover:bg-dark-hover px-2 py-1 rounded-md cursor-pointer opacity-0 transition-opacity">Edit</span>
            </div>

            {/* Shortcuts List */}
            {shortcuts.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-2 hover:bg-[#E4E6EB] dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors px-4">
                    <img src={item.img} alt={item.label} className="w-9 h-9 rounded-lg object-cover border border-light-border dark:border-dark-border" />
                    <span className="font-medium text-[15px] text-light-text dark:text-dark-text">{item.label}</span>
                </div>
            ))}

            <div className="mt-auto px-4 py-4">
                <p className="text-[13px] leading-5 text-[#65676B] dark:text-dark-text2">
                    Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © 2025
                </p>
            </div>
        </div>
    );
}
