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

    return (
        <>
            <div className="flex gap-2 mb-6 w-full max-w-[590px] mx-auto overflow-x-auto pb-4 scrollbar-hide py-2">
                {/* Create Story Card */}
                <div className="relative h-[200px] w-[112.5px] rounded-lg bg-white shadow-card cursor-pointer overflow-hidden group shrink-0 transition-all hover:bg-gray-50 border border-gray-200">
                    <div className="h-[150px] w-full overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            alt="User"
                        />
                    </div>
                    <div className="absolute top-[132px] left-1/2 -translate-x-1/2 w-8 h-8 bg-fb rounded-full border-[3px] border-white flex items-center justify-center">
                        <FaPlus className="text-white text-xs" />
                    </div>
                    <div className="h-[50px] flex items-center justify-center pt-2">
                        <p className="font-semibold text-[13px] text-[#050505]">Create story</p>
                    </div>
                </div>

                {/* Other Stories */}
                {stories.map((story) => (
                    <div
                        key={story.id}
                        onClick={() => setSelectedStory(story)}
                        className="relative h-[200px] w-[112.5px] rounded-lg cursor-pointer overflow-hidden group shrink-0 shadow-card border border-gray-200"
                    >
                        <img
                            src={story.image}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                            alt="Story"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>

                        {/* Profile Pic Ring */}
                        <div className="absolute top-3 left-3 w-10 h-10 rounded-full border-[3.5px] border-fb p-[2px] bg-white">
                            <img
                                src={story.profile}
                                className="w-full h-full rounded-full object-cover"
                                alt="Profile"
                            />
                        </div>

                        {/* Username */}
                        <div className="absolute bottom-2 left-2 right-2">
                            <p className="text-white font-semibold text-[13px] truncate drop-shadow-md">
                                {story.name}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Story Viewer Modal */}
            {selectedStory && (
                <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center">
                    <button
                        onClick={() => setSelectedStory(null)}
                        className="absolute top-4 right-4 text-white text-2xl bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                    >
                        <FaTimes />
                    </button>

                    <div className="relative w-full max-w-[400px] h-full md:h-[90vh] bg-black md:rounded-lg overflow-hidden flex flex-col items-center justify-center">
                        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent flex items-center gap-3 z-10 w-full">
                            <img src={selectedStory.profile} className="w-10 h-10 rounded-full border-2 border-fb" alt="Profile" />
                            <span className="text-white font-semibold text-sm">{selectedStory.name}</span>
                            <span className="text-gray-300 text-xs">12h</span>
                        </div>
                        <img src={selectedStory.image} className="max-w-full max-h-full object-contain" alt="Story Content" />
                    </div>
                </div>
            )}
        </>
    );
}
