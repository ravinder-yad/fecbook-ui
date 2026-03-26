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
        <div className="min-h-screen bg-[#F0F2F5] dark:bg-dark-bg transition-colors pb-10">
            <Navbar />

            {/* Profile Header Container */}
            <div className="bg-white dark:bg-dark-card shadow-sm text-light-text dark:text-dark-text">
                <div className="max-w-[1095px] mx-auto w-full group">

                    {/* Cover Photo */}
                    <div className="relative h-[200px] md:h-[350px] lg:h-[406px] w-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-lg overflow-hidden cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover" alt="Cover" />
                        <button className="absolute bottom-4 right-4 bg-white hover:bg-gray-100 text-[#050505] px-3 py-2 rounded-md font-semibold text-sm flex items-center gap-2 transition-colors shadow-sm">
                            <FaCamera className="text-lg" /> Add cover photo
                        </button>
                    </div>

                    {/* Profile Info Section */}
                    <div className="px-4 md:px-8">
                        <div className="flex flex-col md:flex-row items-center md:items-end -mt-[32px] md:-mt-[30px] lg:-mt-[40px] gap-4 relative pb-4 border-b border-gray-300 dark:border-dark-border">

                            {/* Profile Picture */}
                            <div className="relative z-10">
                                <div className="w-[168px] h-[168px] rounded-full border-[4px] border-white dark:border-dark-card bg-[#F0F2F5] overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover" alt="Profile" />
                                </div>
                                <div className="absolute bottom-3 right-2 bg-[#E4E6EB] dark:bg-dark-hover w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-2 border-white dark:border-dark-card hover:bg-[#D8DADF] transition-colors z-20">
                                    <FaCamera className="text-[#050505] dark:text-dark-text text-lg" />
                                </div>
                            </div>

                            {/* Name & Friends */}
                            <div className="flex-1 text-center md:text-left mb-2 md:mb-4 pt-4 md:pt-0">
                                <h1 className="text-[32px] font-bold text-[#050505] dark:text-dark-text leading-tight">Ravinder Yadav</h1>
                                <span className="text-[#65676B] dark:text-dark-text2 font-semibold text-[15px] hover:underline cursor-pointer">1.2k friends</span>
                                <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
                                    <div className="flex -space-x-2">
                                        {friends.slice(0, 8).map(f => (
                                            <img key={f.id} src={f.img} className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-card hover:z-10 cursor-pointer object-cover" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 mb-4">
                                <button className="bg-fb text-white px-3 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors text-[15px]">
                                    <FaPlus /> Add to story
                                </button>
                                <button className="bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text px-3 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#D8DADF] transition-colors text-[15px]">
                                    <MdEdit className="text-xl" /> Edit profile
                                </button>
                                <button className="bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text px-3 py-2 rounded-md font-semibold flex items-center justify-center hover:bg-[#D8DADF] transition-colors">
                                    <FaChevronDown className="text-xs" />
                                </button>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <div className="flex items-center">
                            {['Posts', 'About', 'Friends', 'Photos', 'Videos', 'Check-ins', 'More'].map((tab, i) => (
                                <div key={i} className={`px-4 py-4 font-semibold text-[15px] cursor-pointer relative hover:bg-gray-100 dark:hover:bg-dark-hover rounded-md transition-colors ${i === 0 ? 'text-fb' : 'text-[#65676B] dark:text-dark-text2'}`}>
                                    {tab}
                                    {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-fb rounded-t-sm"></div>}
                                    {tab === 'More' && <FaChevronDown className="inline ml-1 text-[10px]" />}
                                </div>
                            ))}
                            <button className="ml-auto w-12 h-9 flex items-center justify-center bg-[#E4E6EB] dark:bg-dark-hover hover:bg-[#D8DADF] rounded-md transition-colors">
                                <BsThreeDots className="text-xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Area - 2 Columns */}
            <div className="max-w-[1095px] mx-auto pt-6 flex flex-col lg:flex-row px-4 gap-4 text-light-text dark:text-dark-text">

                {/* Left Sidebar (Intro, Photos, Friends) */}
                <div className="w-full lg:w-[415px] flex flex-col gap-4">

                    {/* Intro Card */}
                    <div className="fb-card p-4">
                        <h3 className="font-bold text-[20px] mb-3 text-[#050505] dark:text-dark-text">Intro</h3>
                        <div className="flex flex-col gap-3">
                            <p className="text-center text-[15px] text-[#050505] dark:text-dark-text leading-snug">
                                Frontend Developer | React | Tailwind | Pixel Perfect Designs 🚀
                            </p>
                            <button className="bg-[#E4E6EB] dark:bg-dark-hover w-full py-2 rounded-md font-semibold hover:bg-[#D8DADF] transition-colors text-[15px]">Edit bio</button>

                            <div className="space-y-3 mt-2">
                                <div className="flex items-center gap-2 text-[15px]">
                                    <span className="text-[#65676B] dark:text-dark-text2">Works as</span> <span className="font-semibold">Software Engineer</span>
                                </div>
                                <div className="flex items-center gap-2 text-[15px]">
                                    <span className="text-[#65676B] dark:text-dark-text2">Studied at</span> <span className="font-semibold">University of Delhi</span>
                                </div>
                                <div className="flex items-center gap-2 text-[15px]">
                                    <span className="text-[#65676B] dark:text-dark-text2">Lives in</span> <span className="font-semibold">New Delhi, India</span>
                                </div>
                            </div>

                            <button className="bg-[#E4E6EB] dark:bg-dark-hover w-full py-2 rounded-md font-semibold mt-2 hover:bg-[#D8DADF] transition-colors text-[15px]">Edit details</button>
                            <button className="bg-[#E4E6EB] dark:bg-dark-hover w-full py-2 rounded-md font-semibold hover:bg-[#D8DADF] transition-colors text-[15px]">Add hobbies</button>
                        </div>
                    </div>

                    {/* Photos Card */}
                    <div className="fb-card p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-[20px] hover:underline cursor-pointer">Photos</h3>
                            <button className="text-fb text-[17px] hover:bg-gray-100 dark:hover:bg-dark-hover px-2 py-1 rounded-md transition-colors">See all photos</button>
                        </div>
                        <div className="grid grid-cols-3 gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-dark-border">
                            {photos.slice(0, 9).map((src, i) => (
                                <div key={i} className="aspect-square cursor-pointer hover:opacity-90 overflow-hidden">
                                    <img src={src} className="w-full h-full object-cover transition-transform hover:scale-105" alt="User upload" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Friends Card */}
                    <div className="fb-card p-4">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-bold text-[20px] hover:underline cursor-pointer">Friends</h3>
                                <p className="text-[#65676B] dark:text-dark-text2 text-[15px]">1,245 friends</p>
                            </div>
                            <button className="text-fb text-[17px] hover:bg-gray-100 dark:hover:bg-dark-hover px-2 py-1 rounded-md transition-colors">See all friends</button>
                        </div>
                        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
                            {friends.slice(0, 9).map((f) => (
                                <Link to="/profile" key={f.id} className="cursor-pointer group">
                                    <img src={f.img} className="w-full aspect-square object-cover rounded-lg mb-1.5 group-hover:opacity-90 transition-opacity" alt={f.name} />
                                    <p className="text-[13px] font-semibold leading-tight text-[#050505] dark:text-dark-text hover:underline">{f.name}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Feed (Posts) */}
                <div className="flex-1 min-w-0">
                    <CreatePost />

                    {/* Posts List */}
                    <div className="flex flex-col gap-4">
                        <div className="fb-card p-4 flex justify-between items-center">
                            <h3 className="font-bold text-[20px] text-[#050505] dark:text-dark-text">Posts</h3>
                            <div className="flex gap-2">
                                <button className="bg-[#E4E6EB] dark:bg-dark-hover px-3 py-1.5 rounded-md font-semibold text-sm hover:bg-[#D8DADF] transition-colors">
                                    <span className="flex items-center gap-1"><MdEdit className="text-xl" /> Filters</span>
                                </button>
                                <button className="bg-[#E4E6EB] dark:bg-dark-hover px-3 py-1.5 rounded-md font-semibold text-sm hover:bg-[#D8DADF] transition-colors">
                                    <span className="flex items-center gap-1">Manage posts</span>
                                </button>
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
