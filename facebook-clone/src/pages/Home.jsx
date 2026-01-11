import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import RightSidebar from '../components/RightSidebar';
import Post from '../components/Post';
import Stories from '../components/Stories';
import CreatePost from '../components/CreatePost';

export default function Home() {
    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors pb-10">
            <Navbar />

            <div className="flex justify-between w-full max-w-[1920px] mx-auto">

                {/* Left Sidebar */}
                {/* Left Sidebar - Fixed */}
                <Sidebar />

                {/* Main Feed */}
                <div className="flex-1 flex flex-col items-center justify-start py-8 px-4 lg:px-8 xl:px-16 min-w-0 xl:ml-[360px] xl:mr-[360px]">

                    <Stories />

                    <CreatePost />

                    {/* Posts */}
                    <div className="w-full max-w-[590px] flex flex-col gap-4">
                        <Post
                            profilePic="https://randomuser.me/api/portraits/men/32.jpg"
                            username="Elon Musk"
                            timestamp="2h"
                            message="Just thinking about Mars! 🚀 What do you guys think? Should we go now or wait?"
                        />
                        <Post
                            profilePic="https://randomuser.me/api/portraits/women/44.jpg"
                            username="Jessica Alba"
                            timestamp="4h"
                            message="Beautiful sunset today at the beach! 🌅"
                            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        />
                        <Post
                            profilePic="https://randomuser.me/api/portraits/men/86.jpg"
                            username="Mark Zuckerberg"
                            timestamp="8h"
                            message="Metaverse is the future. Connecting people in new ways."
                        />
                        <Post
                            profilePic="https://randomuser.me/api/portraits/women/65.jpg"
                            username="Sarah Connor"
                            timestamp="1d"
                            message="No fate but what we make."
                            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        />
                    </div>
                </div>

                {/* Right Sidebar */}
                {/* Right Sidebar - Fixed */}
                <RightSidebar />

            </div>
        </div>
    );
}
