import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import Post from '../components/Post';
import { FaCamera, FaPlus, FaChevronDown } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';

export default function Profile() {
    const friends = [
        { id: 1, name: "Rahul Sharma", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, name: "Priya Singh", img: "https://randomuser.me/api/portraits/women/2.jpg" },
        { id: 3, name: "Amit Verma", img: "https://randomuser.me/api/portraits/men/3.jpg" },
        { id: 4, name: "Neha Gupta", img: "https://randomuser.me/api/portraits/women/4.jpg" },
        { id: 5, name: "Vikram Malhotra", img: "https://randomuser.me/api/portraits/men/5.jpg" },
        { id: 6, name: "Anjali Das", img: "https://randomuser.me/api/portraits/women/6.jpg" },
        { id: 7, name: "Rohan Mehta", img: "https://randomuser.me/api/portraits/men/7.jpg" },
        { id: 8, name: "Suresh Raina", img: "https://randomuser.me/api/portraits/men/8.jpg" },
        { id: 9, name: "Pooja Hegde", img: "https://randomuser.me/api/portraits/women/9.jpg" },
    ];

    const photos = [
        "https://picsum.photos/300/300?random=1",
        "https://picsum.photos/300/300?random=2",
        "https://picsum.photos/300/300?random=3",
        "https://picsum.photos/300/300?random=4",
        "https://picsum.photos/300/300?random=5",
        "https://picsum.photos/300/300?random=6",
        "https://picsum.photos/300/300?random=7",
        "https://picsum.photos/300/300?random=8",
        "https://picsum.photos/300/300?random=9",
    ];

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            {/* Profile Header Container */}
            <div className="bg-light-card dark:bg-dark-card shadow-sm pb-4 text-light-text dark:text-dark-text">
                <div className="max-w-[1095px] mx-auto w-full">

                    {/* Cover Photo */}
                    <div className="relative h-[200px] md:h-[350px] lg:h-[400px] w-full bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-lg overflow-hidden group cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover" alt="Cover" />
                        <button className="absolute bottom-4 right-4 bg-light-card dark:bg-dark-hover text-light-text dark:text-dark-text px-3 py-2 rounded-md font-semibold text-sm flex items-center gap-2 hover:bg-light-hover dark:hover:bg-opacity-80 hidden group-hover:flex transition-colors">
                            <FaCamera /> Edit cover photo
                        </button>
                    </div>

                    {/* Profile Info Section */}
                    <div className="px-4 md:px-8 pb-4 border-b border-light-border dark:border-dark-border">
                        <div className="flex flex-col md:flex-row items-center md:items-end -mt-[80px] md:-mt-[30px] gap-4 relative">

                            {/* Profile Picture */}
                            <div className="relative">
                                <div className="w-[168px] h-[168px] rounded-full border-[4px] border-light-card dark:border-dark-card bg-light-card dark:bg-dark-card overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="Profile" />
                                </div>
                                <div className="absolute bottom-2 right-2 bg-light-bg dark:bg-dark-hover w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-2 border-white dark:border-dark-card hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">
                                    <FaCamera className="text-light-text dark:text-dark-text text-lg" />
                                </div>
                            </div>

                            {/* Name & Friends */}
                            <div className="flex-1 text-center md:text-left mb-2 md:mb-4">
                                <h1 className="text-[32px] font-bold text-light-text dark:text-dark-text leading-tight">Ravinder Yadav</h1>
                                <span className="text-light-text2 dark:text-dark-text2 font-semibold text-[15px] hover:underline cursor-pointer">1.2k friends</span>
                                <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                                    {/* Friend avatars overlapping */}
                                    <div className="flex -space-x-2">
                                        {friends.slice(0, 5).map(f => (
                                            <img key={f.id} src={f.img} className="w-8 h-8 rounded-full border-2 border-light-card dark:border-dark-card hover:z-10 cursor-pointer" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col md:flex-row gap-3 mb-4 w-full md:w-auto px-4 md:px-0">
                                <button className="bg-fb text-white px-4 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
                                    <FaPlus /> Add to Story
                                </button>
                                <button className="bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text px-4 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">
                                    <MdEdit /> Edit profile
                                </button>
                                <button className="bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text px-4 py-2 rounded-md font-semibold flex items-center justify-center w-12 hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">
                                    <FaChevronDown />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="px-4 md:px-8 mt-1">
                        <div className="flex items-center gap-1">
                            {['Posts', 'About', 'Friends', 'Photos', 'Videos', 'Reels'].map((tab, i) => (
                                <div key={i} className={`px-4 py-4 font-semibold text-[15px] cursor-pointer rounded-md hover:bg-light-bg dark:hover:bg-dark-hover ${i === 0 ? 'text-fb border-b-[3px] border-fb rounded-b-none' : 'text-light-text2 dark:text-dark-text2'}`}>
                                    {tab}
                                </div>
                            ))}
                            <div className="ml-auto flex items-center gap-2 bg-light-bg dark:bg-dark-hover px-3 py-2 rounded-md cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">
                                <BsThreeDots className="text-light-text dark:text-dark-text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area - 2 Columns */}
            <div className="max-w-[1095px] mx-auto pt-6 flex flex-col lg:flex-row px-4 gap-4 text-light-text dark:text-dark-text">

                {/* Left Sidebar (Intro, Photos, Friends) */}
                <div className="w-full lg:w-[40%] flex flex-col gap-4 sticky top-[70px] h-fit">

                    {/* Intro Card */}
                    <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-[20px] mb-4 text-light-text dark:text-dark-text">Intro</h3>
                        <div className="flex flex-col gap-3 text-[15px]">
                            <div className="text-center text-sm mb-4 text-light-text dark:text-dark-text">
                                Frontend Developer | React | Tailwind
                            </div>
                            <button className="bg-light-bg dark:bg-dark-hover w-full py-2 rounded-md font-semibold hover:bg-light-hover dark:hover:bg-[#4E4F50] text-light-text dark:text-dark-text transition-colors">Edit Bio</button>

                            <div className="flex items-center gap-2 text-light-text2 dark:text-dark-text2 mt-2">
                                <span className="font-semibold text-light-text dark:text-dark-text">Studied at</span> University of Delhi
                            </div>
                            <div className="flex items-center gap-2 text-light-text2 dark:text-dark-text2">
                                <span className="font-semibold text-light-text dark:text-dark-text">Lives in</span> New Delhi, India
                            </div>
                            <div className="flex items-center gap-2 text-light-text2 dark:text-dark-text2">
                                <span className="font-semibold text-light-text dark:text-dark-text">Joined</span> January 2018
                            </div>

                            <button className="bg-light-bg dark:bg-dark-hover w-full py-2 rounded-md font-semibold mt-2 hover:bg-light-hover dark:hover:bg-[#4E4F50] text-light-text dark:text-dark-text transition-colors">Edit details</button>
                            <button className="bg-light-bg dark:bg-dark-hover w-full py-2 rounded-md font-semibold hover:bg-light-hover dark:hover:bg-[#4E4F50] text-light-text dark:text-dark-text transition-colors">Add hobbies</button>
                        </div>
                    </div>

                    {/* Photos Card */}
                    <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-[20px] hover:underline cursor-pointer text-light-text dark:text-dark-text">Photos</h3>
                            <span className="text-fb text-[17px] cursor-pointer hover:underline">See all photos</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden">
                            {photos.map((src, i) => (
                                <div key={i} className="aspect-square cursor-pointer hover:opacity-90">
                                    <img src={src} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Friends Card */}
                    <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-[20px] hover:underline cursor-pointer text-light-text dark:text-dark-text">Friends</h3>
                                <p className="text-light-text2 dark:text-dark-text2 text-sm">1,245 friends</p>
                            </div>
                            <span className="text-fb text-[17px] cursor-pointer hover:underline">See all friends</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {friends.slice(0, 9).map((f) => (
                                <div key={f.id} className="cursor-pointer">
                                    <img src={f.img} className="w-full h-full aspect-square object-cover rounded-md mb-1" />
                                    <p className="text-[13px] font-semibold leading-tight text-light-text dark:text-dark-text">{f.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Feed (Posts) */}
                <div className="flex-1 min-w-0">
                    <CreatePost />

                    {/* Posts List */}
                    <div className="flex flex-col gap-4">
                        <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm flex justify-between items-center text-light-text dark:text-dark-text">
                            <h3 className="font-bold text-[20px]">Posts</h3>
                            <div className="flex gap-2">
                                <button className="bg-light-bg dark:bg-dark-hover px-3 py-1.5 rounded-md font-semibold text-sm hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">Filters</button>
                                <button className="bg-light-bg dark:bg-dark-hover px-3 py-1.5 rounded-md font-semibold text-sm hover:bg-light-hover dark:hover:bg-[#4E4F50] transition-colors">Manage posts</button>
                            </div>
                        </div>

                        <Post
                            profilePic="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            username="Ravinder Yadav"
                            timestamp="Just now"
                            message="Updating my profile picture! #NewLook #Vibe"
                        />

                        <Post
                            profilePic="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            username="Ravinder Yadav"
                            timestamp="2d"
                            message="Had a great time visiting the mountains. 🏔️"
                            image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        />

                        <Post
                            profilePic="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                            username="Ravinder Yadav"
                            timestamp="5d"
                            message="Started learning advanced React Patterns today. Loving it! 💻🔥"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
