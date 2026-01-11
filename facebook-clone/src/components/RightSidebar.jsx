import { useRef } from 'react';
import { FaVideo, FaSearch, FaEllipsisH, FaPlus } from 'react-icons/fa';

export default function RightSidebar() {
    const contacts = [
        { id: 1, name: "Rahul Sharma", img: "https://randomuser.me/api/portraits/men/1.jpg", online: true },
        { id: 2, name: "Priya Singh", img: "https://randomuser.me/api/portraits/women/2.jpg", online: false },
        { id: 3, name: "Amit Verma", img: "https://randomuser.me/api/portraits/men/3.jpg", online: true },
        { id: 4, name: "Neha Gupta", img: "https://randomuser.me/api/portraits/women/4.jpg", online: true },
        { id: 5, name: "Vikram Malhotra", img: "https://randomuser.me/api/portraits/men/5.jpg", online: false },
        { id: 6, name: "Anjali Das", img: "https://randomuser.me/api/portraits/women/6.jpg", online: true },
        { id: 7, name: "Rohan Mehta", img: "https://randomuser.me/api/portraits/men/7.jpg", online: false },
        { id: 8, name: "Suresh Raina", img: "https://randomuser.me/api/portraits/men/8.jpg", online: true },
        { id: 9, name: "Pooja Hegde", img: "https://randomuser.me/api/portraits/women/9.jpg", online: false },
    ];

    const sponsored = [
        { id: 1, title: "Amazing Product", url: "example.com", img: "https://picsum.photos/120/120?random=10" },
        { id: 2, title: "Learn React Fast", url: "udemy.com", img: "https://picsum.photos/120/120?random=11" },
    ];

    return (
        <div className="hidden xl:block w-[360px] p-2 mt-0 fixed right-0 top-[56px] h-[calc(100vh-56px)] overflow-y-auto scrollbar-hide pr-4 z-40 bg-transparent">

            {/* Sponsored Section */}
            <div className="mb-4 border-b border-light-border dark:border-dark-border pb-4">
                <h3 className="font-semibold text-light-text2 dark:text-dark-text2 text-[17px] mb-4">Sponsored</h3>
                {sponsored.map((ad) => (
                    <div key={ad.id} className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover p-2 rounded-lg transition-colors group">
                        <img src={ad.img} alt="Ad" className="w-[120px] h-[120px] rounded-lg object-cover" />
                        <div className="flex flex-col justify-center">
                            <h4 className="font-semibold text-[15px] text-light-text dark:text-dark-text leading-snug mb-1 group-hover:underline">{ad.title}</h4>
                            <p className="text-[13px] text-light-text2 dark:text-dark-text2">{ad.url}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contacts Header */}
            <div className="flex justify-between items-center mb-2 px-2">
                <h3 className="font-semibold text-light-text2 dark:text-dark-text2 text-[17px]">Contacts</h3>
                <div className="flex gap-2 text-light-text2 dark:text-dark-text2">
                    <div className="w-8 h-8 rounded-full hover:bg-light-hover dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer">
                        <FaVideo />
                    </div>
                    <div className="w-8 h-8 rounded-full hover:bg-light-hover dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer">
                        <FaSearch />
                    </div>
                    <div className="w-8 h-8 rounded-full hover:bg-light-hover dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer">
                        <FaEllipsisH />
                    </div>
                </div>
            </div>

            {/* Contacts List */}
            <div className="flex flex-col">
                {contacts.map((contact) => (
                    <div key={contact.id} className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors relative group">
                        <div className="relative">
                            <img src={contact.img} alt={contact.name} className="w-9 h-9 rounded-full object-cover border border-light-border dark:border-dark-border" />
                            {contact.online && (
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-light-success dark:bg-dark-success border-2 border-white dark:border-dark-bg rounded-full"></span>
                            )}
                        </div>
                        <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">{contact.name}</span>
                    </div>
                ))}
            </div>

            {/* Group Conversations */}
            <div className="mt-4 border-t border-light-border dark:border-dark-border pt-3 px-2">
                <h3 className="font-semibold text-light-text2 dark:text-dark-text2 text-[17px] mb-2">Group Conversations</h3>
                <div className="flex items-center gap-3 p-2 hover:bg-light-hover dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                    <div className="w-9 h-9 rounded-full bg-light-hover dark:bg-dark-hover flex items-center justify-center">
                        <FaPlus className="text-light-text dark:text-dark-text" />
                    </div>
                    <span className="font-semibold text-[15px] text-light-text dark:text-dark-text">Create New Group</span>
                </div>
            </div>

        </div>
    );
}
