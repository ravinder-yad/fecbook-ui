import { FaVideo, FaImages, FaSmile } from 'react-icons/fa';

export default function CreatePost() {
    return (
        <div className="fb-card p-4 mb-4 w-full max-w-[590px] mx-auto">
            <div className="flex gap-3 mb-3 px-1">
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Current user"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 bg-[#F0F2F5] dark:bg-dark-hover rounded-full px-4 py-2 hover:bg-[#E4E6EB] dark:hover:bg-[#4E4F50] cursor-pointer transition-colors flex items-center">
                    <span className="text-[#65676B] dark:text-dark-text2 text-[17px]">What's on your mind, Ravinder?</span>
                </div>
            </div>

            <div className="border-t border-gray-200 dark:border-dark-border pt-2 flex justify-between">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-[#F2F2F2] dark:hover:bg-dark-hover p-2 rounded-lg flex-1 justify-center transition-colors">
                    <FaVideo className="text-[#F02849] text-[22px]" />
                    <span className="font-semibold text-[#65676B] dark:text-dark-text2 text-[15px]">Live video</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-[#F2F2F2] dark:hover:bg-dark-hover p-2 rounded-lg flex-1 justify-center transition-colors">
                    <FaImages className="text-[#45BD62] text-[22px]" />
                    <span className="font-semibold text-[#65676B] dark:text-dark-text2 text-[15px]">Photo/video</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-[#F2F2F2] dark:hover:bg-dark-hover p-2 rounded-lg flex-1 justify-center transition-colors hidden sm:flex">
                    <FaSmile className="text-[#F7B928] text-[22px]" />
                    <span className="font-semibold text-[#65676B] dark:text-dark-text2 text-[15px]">Feeling/activity</span>
                </div>
            </div>
        </div>
    );
}
