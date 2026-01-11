import { FaVideo, FaImages, FaSmile } from 'react-icons/fa';

export default function CreatePost() {
    return (
        <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.1)] p-4 mb-4 text-light-text dark:text-dark-text">
            <div className="flex gap-3 mb-4">
                <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                    alt="Current user"
                    className="w-10 h-10 rounded-full object-cover border border-light-border dark:border-dark-border"
                />
                <div className="flex-1 bg-light-bg dark:bg-dark-hover rounded-full px-4 py-2 hover:bg-light-hover dark:hover:bg-[#4E4F50] cursor-pointer transition-colors flex items-center">
                    <span className="text-light-text2 dark:text-dark-text2 font-medium text-[15px]">What's on your mind, Ravinder?</span>
                </div>
            </div>

            <div className="border-t border-light-border dark:border-dark-border pt-3 flex justify-between px-2">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-light-bg dark:hover:bg-dark-hover p-2 rounded-lg flex-1 justify-center transition-colors">
                    <FaVideo className="text-[#F02849] text-2xl" />
                    <span className="font-semibold text-light-text2 dark:text-dark-text2 text-[15px]">Live video</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-light-bg dark:hover:bg-dark-hover p-2 rounded-lg flex-1 justify-center transition-colors">
                    <FaImages className="text-[#45BD62] text-2xl" />
                    <span className="font-semibold text-light-text2 dark:text-dark-text2 text-[15px]">Photo/video</span>
                </div>
                <div className="flex items-center gap-2 cursor-pointer hover:bg-light-bg dark:hover:bg-dark-hover p-2 rounded-lg flex-1 justify-center transition-colors hidden sm:flex">
                    <FaSmile className="text-[#F7B928] text-2xl" />
                    <span className="font-semibold text-light-text2 dark:text-dark-text2 text-[15px]">Feeling/activity</span>
                </div>
            </div>
        </div>
    );
}
