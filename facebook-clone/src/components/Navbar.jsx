import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsFacebook, BsMessenger, BsList, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { AiFillHome, AiOutlineSearch, AiOutlineHome } from 'react-icons/ai';
import { MdOndemandVideo, MdOutlineOndemandVideo, MdGroups, MdOutlineGroups, MdStorefront, MdOutlineStorefront } from 'react-icons/md';
import { FaUserFriends, FaChevronDown, FaBell } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import { IoNotificationsSharp } from 'react-icons/io5';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const location = useLocation();
    const { darkMode, toggleTheme } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            alert(`Searching for: "${searchQuery}" (This is a mock search)`);
        }
    };

    const navItems = [
        { id: 'home', icon: AiFillHome, outline: AiOutlineHome, link: '/', label: 'Home' },
        { id: 'friends', icon: FaUserFriends, outline: FaUserFriends, link: '/friends', label: 'Friends' },
        { id: 'watch', icon: MdOndemandVideo, outline: MdOutlineOndemandVideo, link: '/watch', label: 'Video' },
        { id: 'marketplace', icon: MdStorefront, outline: MdOutlineStorefront, link: '/marketplace', label: 'Marketplace' },
        { id: 'groups', icon: MdGroups, outline: MdOutlineGroups, link: '/groups', label: 'Groups' },
    ];

    const mobileNavItems = [
        { id: 'home', icon: AiFillHome, outline: AiOutlineHome, link: '/', label: 'Home' },
        { id: 'friends', icon: FaUserFriends, outline: FaUserFriends, link: '/friends', label: 'Friends' },
        { id: 'watch', icon: MdOndemandVideo, outline: MdOutlineOndemandVideo, link: '/watch', label: 'Video' },
        { id: 'marketplace', icon: MdStorefront, outline: MdOutlineStorefront, link: '/marketplace', label: 'Marketplace' },
        { id: 'menu', icon: BsList, outline: BsList, link: '/menu', label: 'Menu' },
    ];

    return (
        <>
            {/* ================= DESKTOP NAVBAR ================= */}
            <div className="bg-white dark:bg-dark-card sticky top-0 z-50 h-[56px] flex items-center justify-between px-4 hidden md:flex shadow-sm border-b border-light-border dark:border-dark-border">

                {/* Left: Logo & Search */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex-shrink-0">
                        <BsFacebook className="text-fb text-[40px] bg-white rounded-full" />
                    </Link>
                    <div className="flex items-center bg-[#F0F2F5] dark:bg-dark-hover rounded-full px-3 py-2 h-10 w-[240px] xl:w-[280px] group transition-all duration-300 focus-within:ring-0">
                        <AiOutlineSearch className="text-[#65676B] dark:text-dark-text2 text-xl group-focus-within:hidden transition-all" />
                        <input
                            type="text"
                            placeholder="Search Facebook"
                            className="bg-transparent border-none outline-none ml-2 w-full text-[15px] placeholder-[#65676B] dark:placeholder-dark-text2 text-light-text dark:text-dark-text group-focus-within:ml-0"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearch}
                        />
                    </div>
                </div>

                {/* Middle: Navigation Tabs */}
                <div className="flex flex-1 justify-center max-w-[680px] h-full mx-4">
                    <div className="flex w-full justify-between h-full items-center">
                        {navItems.map((item) => {
                            const Icon = location.pathname === item.link ? item.icon : item.outline;
                            const isActive = location.pathname === item.link;
                            return (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    className={`
                            h-[52px] w-full max-w-[110px] flex items-center justify-center cursor-pointer rounded-lg my-1 mx-1 group relative
                            ${!isActive && 'hover:bg-[#F2F2F2] dark:hover:bg-dark-hover'} transition-colors duration-200
                        `}
                                    title={item.label}
                                >
                                    <Icon className={`text-[28px] ${isActive ? 'text-fb' : 'text-[#65676B] dark:text-dark-text2'} transition-colors duration-200`} />
                                    {isActive && (
                                        <div className="absolute bottom-[-2px] h-[3px] bg-fb w-full rounded-t-sm"></div>
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 pl-2 justify-end min-w-[200px]">

                    {/* Menu Button */}
                    <div className="w-10 h-10 bg-[#E4E6EB] dark:bg-dark-hover hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] rounded-full flex items-center justify-center cursor-pointer transition-all">
                        <CgMenuGridO className="text-black dark:text-dark-text text-[22px]" />
                    </div>

                    {/* Messenger */}
                    <div className="w-10 h-10 bg-[#E4E6EB] dark:bg-dark-hover hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] rounded-full flex items-center justify-center cursor-pointer transition-all relative">
                        <BsMessenger className="text-black dark:text-dark-text text-[20px]" />
                        <div className="absolute -top-1 -right-1 bg-[#E41E3F] text-white text-[12px] font-bold px-1.5 h-[18px] flex items-center justify-center rounded-full border-2 border-white dark:border-dark-card">
                            2
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className="w-10 h-10 bg-[#E4E6EB] dark:bg-dark-hover hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] rounded-full flex items-center justify-center cursor-pointer transition-all relative">
                        <IoNotificationsSharp className="text-black dark:text-dark-text text-[20px]" />
                        <div className="absolute -top-1 -right-1 bg-[#E41E3F] text-white text-[12px] font-bold px-1.5 h-[18px] flex items-center justify-center rounded-full border-2 border-white dark:border-dark-card">
                            5
                        </div>
                    </div>

                    {/* Profile & Theme Toggle */}
                    <div className="flex items-center gap-2">
                        <div 
                            onClick={toggleTheme}
                            className="w-10 h-10 bg-[#E4E6EB] dark:bg-dark-hover hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] rounded-full flex items-center justify-center cursor-pointer transition-all"
                        >
                            {darkMode ? <BsSunFill className="text-white text-[18px]" /> : <BsMoonFill className="text-black text-[18px]" />}
                        </div>
                        <Link to="/profile" className="ml-1">
                            <img
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                                alt="Profile"
                                className="w-10 h-10 rounded-full object-cover border border-[#CED0D4] dark:border-dark-border"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ================= MOBILE TOP NAVBAR ================= */}
            <div className="md:hidden sticky top-0 bg-light-card dark:bg-dark-card shadow-sm z-50 h-[56px] flex items-center justify-between px-4 border-b border-light-border dark:border-dark-border">
                <Link to="/" className="text-fb text-[28px] font-bold tracking-tight">facebook</Link>
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-light-hover dark:bg-dark-hover hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] rounded-full flex items-center justify-center transition-colors">
                        <AiOutlineSearch className="text-light-text dark:text-dark-text text-[20px]" />
                    </div>
                    <div className="w-9 h-9 bg-light-hover dark:bg-dark-hover hover:bg-[#D8DADF] dark:hover:bg-[#4E4F50] rounded-full flex items-center justify-center relative transition-colors">
                        <BsMessenger className="text-light-text dark:text-dark-text text-[20px]" />
                    </div>
                </div>
            </div>

            {/* ================= MOBILE BOTTOM NAVBAR ================= */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border h-[56px] flex items-center justify-around z-50 pb-safe">
                {mobileNavItems.map((item) => {
                    const Icon = location.pathname === item.link ? item.icon : item.outline;
                    const isActive = location.pathname === item.link;
                    return (
                        <Link
                            key={item.id}
                            to={item.link}
                            className="flex-1 flex flex-col items-center justify-center h-full relative cursor-pointer active:scale-95 transition-transform"
                        >
                            <Icon className={`text-[26px] ${isActive ? 'text-fb' : 'text-light-text2 dark:text-dark-text2'}`} />
                            {isActive && (
                                <div className="absolute top-0 h-[3px] bg-fb w-full"></div>
                            )}
                            {item.id === 'friends' && <div className="absolute top-2 right-[25%] bg-light-error dark:bg-dark-error w-2 h-2 rounded-full border border-white dark:border-dark-card"></div>}
                        </Link>
                    )
                })}
            </div>
        </>
    );
}
