import { FaVideo, FaSearch, FaEllipsisH } from 'react-icons/fa';

export default function RightSidebar() {
    const contacts = [
        { id: 1, name: "Rahul Sharma", img: "https://randomuser.me/api/portraits/men/1.jpg", online: true },
        { id: 2, name: "Priya Singh", img: "https://randomuser.me/api/portraits/women/2.jpg", online: false },
        { id: 3, name: "Amit Verma", img: "https://randomuser.me/api/portraits/men/3.jpg", online: true },
        { id: 4, name: "Neha Gupta", img: "https://randomuser.me/api/portraits/women/4.jpg", online: true },
        { id: 5, name: "Vikram Malhotra", img: "https://randomuser.me/api/portraits/men/5.jpg", online: false },
        { id: 6, name: "Anjali Das", img: "https://randomuser.me/api/portraits/women/6.jpg", online: true },
        { id: 7, name: "Rohan Mehta", img: "https://randomuser.me/api/portraits/men/7.jpg", online: false },
    ];

    const sponsored = [
        { id: 1, title: "Facebook Ads Expert", url: "business.facebook.com", img: "https://picsum.photos/120/120?random=10" },
        { id: 2, title: "Learn Figma in 10 Days", url: "design.com", img: "https://picsum.photos/120/120?random=11" },
    ];

    return (
        <div className="hidden xl:block w-[360px] p-4 mt-0 fixed right-0 top-[56px] h-[calc(100vh-56px)] overflow-y-auto z-40 bg-transparent">

            {/* Sponsored Section */}
            <div className="mb-4 pb-4 border-b border-gray-300 dark:border-dark-border">
                <h3 className="font-semibold text-[#65676B] dark:text-dark-text2 text-[17px] mb-4">Sponsored</h3>
                {sponsored.map((ad) => (
                    <div key={ad.id} className="flex items-center gap-4 mb-4 cursor-pointer hover:bg-[#E4E6EB] dark:hover:bg-dark-hover p-2 rounded-lg transition-colors group">
                        <img src={ad.img} alt="Ad" className="w-[125px] h-[125px] rounded-lg object-cover" />
                        <div className="flex flex-col justify-center">
                            <h4 className="font-medium text-[15px] text-light-text dark:text-dark-text leading-tight group-hover:underline">{ad.title}</h4>
                            <p className="text-[13px] text-[#65676B] dark:text-dark-text2 mt-1">{ad.url}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contacts Header */}
            <div className="flex justify-between items-center mb-2 px-2">
                <h3 className="font-semibold text-[#65676B] dark:text-dark-text2 text-[17px]">Contacts</h3>
                <div className="flex gap-1 text-[#65676B] dark:text-dark-text2">
                    <div className="w-8 h-8 rounded-full hover:bg-[#E4E6EB] dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer transition-colors">
                        <FaVideo className="text-[14px]" />
                    </div>
                    <div className="w-8 h-8 rounded-full hover:bg-[#E4E6EB] dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer transition-colors">
                        <FaSearch className="text-[14px]" />
                    </div>
                    <div className="w-8 h-8 rounded-full hover:bg-[#E4E6EB] dark:hover:bg-dark-hover flex items-center justify-center cursor-pointer transition-colors">
                        <FaEllipsisH className="text-[14px]" />
                    </div>
                </div>
            </div>

            {/* Contacts List */}
            <div className="flex flex-col">
                {contacts.map((contact) => (
                    <div key={contact.id} className="flex items-center gap-3 p-2 hover:bg-[#E4E6EB] dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors px-2">
                        <div className="relative">
                            <img src={contact.img} alt={contact.name} className="w-9 h-9 rounded-full object-cover border border-gray-200 dark:border-dark-border" />
                            {contact.online && (
                                <div className="absolute bottom-[2px] right-[2px] w-2.5 h-2.5 bg-[#31A24C] border-2 border-white dark:border-dark-bg rounded-full"></div>
                            )}
                        </div>
                        <span className="font-medium text-[15px] text-light-text dark:text-dark-text">{contact.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
