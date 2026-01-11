import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

export default function Stories() {
    const [selectedStory, setSelectedStory] = useState(null);

    const stories = [
        { id: 1, name: "Priya Sharma", profile: "https://randomuser.me/api/portraits/women/11.jpg", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { id: 2, name: "Rahul Verma", profile: "https://randomuser.me/api/portraits/men/32.jpg", image: "https://images.unsplash.com/photo-1526772662003-753f2e9c916b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { id: 3, name: "Sonia Kapoor", profile: "https://randomuser.me/api/portraits/women/44.jpg", image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { id: 4, name: "Amit Singh", profile: "https://randomuser.me/api/portraits/men/65.jpg", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
        { id: 5, name: "Neha Das", profile: "https://randomuser.me/api/portraits/women/68.jpg", image: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    ];

    const handleCreateStory = () => {
        alert("Create Story feature coming soon! (This is a mock)");
    };

    return (
        <>
            <div className="flex justify-center md:justify-start gap-2 mb-6 w-full max-w-[590px] mx-auto overflow-x-auto scrollbar-hide py-4 md:py-0">
                {/* Create Story Card */}
                <div onClick={handleCreateStory} className="relative h-[200px] w-[112px] md:h-[250px] md:w-[140px] rounded-xl bg-light-card dark:bg-dark-card shadow-md cursor-pointer overflow-hidden group shrink-0 transition-transform hover:opacity-95">
                    <div className="h-[65%] w-full overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            alt="User"
                        />
                    </div>
                    <div className="bg-fb w-9 h-9 rounded-full absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[4px] border-white dark:border-dark-card flex items-center justify-center">
                        <FaPlus className="text-white text-sm" />
                    </div>
                    <div className="h-[35%] flex items-end justify-center pb-3">
                        <p className="font-semibold text-[13px] md:text-sm text-center text-light-text dark:text-dark-text">Create story</p>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 hidden group-hover:block transition-opacity"></div>
                </div>

                {/* Other Stories */}
                {stories.map((story) => (
                    <div
                        key={story.id}
                        onClick={() => setSelectedStory(story)}
                        className="relative h-[200px] w-[112px] md:h-[250px] md:w-[140px] rounded-xl cursor-pointer overflow-hidden group shrink-0 shadow-md"
                    >
                        {/* Background Image */}
                        <img
                            src={story.image}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            alt="Story"
                        />
                        {/* Dark Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 group-hover:bg-black/20 transition-all"></div>

                        {/* Profile Pic Ring */}
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-[4px] border-[#1877F2] p-[2px]">
                            <img
                                src={story.profile}
                                className="w-full h-full rounded-full object-cover border border-black/10"
                                alt="Profile"
                            />
                        </div>

                        {/* Username */}
                        <div className="absolute bottom-2 left-2 right-2">
                            <p className="text-white font-semibold text-[12px] md:text-[13px] truncate drop-shadow-md">
                                {story.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Story Viewer Modal */}
            {selectedStory && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedStory(null)}
                        className="absolute top-4 right-4 text-white text-3xl hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                        <FaTimes />
                    </button>

                    <div className="relative w-full max-w-md h-[80vh] bg-black rounded-lg overflow-hidden flex flex-col">
                        {/* Story Header */}
                        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent flex items-center gap-3">
                            <img src={selectedStory.profile} className="w-10 h-10 rounded-full border-2 border-fb" alt="Profile" />
                            <span className="text-white font-semibold">{selectedStory.name}</span>
                            <span className="text-gray-300 text-sm ml-auto">12h</span>
                        </div>

                        {/* Progress Bar Mock */}
                        <div className="absolute top-2 left-2 right-2 flex gap-1">
                            <div className="h-1 bg-white/50 flex-1 rounded-full overflow-hidden">
                                <div className="h-full bg-white w-[60%]"></div>
                            </div>
                        </div>

                        {/* Main Image */}
                        <img src={selectedStory.image} className="w-full h-full object-contain" alt="Story Content" />
                    </div>
                </div>
            )}
        </>
    );
}
