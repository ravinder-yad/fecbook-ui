import { useState } from 'react';
import { BsThreeDots, BsGlobe, BsHandThumbsUp, BsChat, BsShare, BsHandThumbsUpFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Post({ profilePic, username, timestamp, message, image }) {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            setLikes(likes + 1);
            setIsLiked(true);
        }
    };

    const addComment = () => {
        if (comment.trim() !== "") {
            setComments([...comments, { text: comment, time: 'Just now' }]);
            setComment("");
        }
    };

    return (
        <div className="fb-card w-full mb-4">
            {/* Header */}
            <div className="flex items-center justify-between p-3 pb-1 px-4">
                <div className="flex items-center gap-2">
                    <Link to="/profile">
                        <img src={profilePic || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} alt={username} className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity" />
                    </Link>
                    <div>
                        <Link to="/profile">
                            <h4 className="font-semibold text-[15px] hover:underline cursor-pointer text-[#050505] dark:text-dark-text leading-tight">{username || "User"}</h4>
                        </Link>
                        <div className="flex items-center gap-1 text-[#65676B] dark:text-dark-text2 text-[13px] leading-tight">
                            <span>{timestamp || "Just now"}</span>
                            <span>·</span>
                            <BsGlobe className="text-[12px]" />
                        </div>
                    </div>
                </div>
                <div className="w-9 h-9 flex items-center justify-center hover:bg-[#F2F2F2] dark:hover:bg-dark-hover rounded-full cursor-pointer transition-colors">
                    <BsThreeDots className="text-[20px] text-[#65676B] dark:text-dark-text2" />
                </div>
            </div>

            {/* Message */}
            {message && (
                <div className="px-4 py-2 text-[15px] text-[#050505] dark:text-dark-text leading-snug">
                    {message}
                </div>
            )}

            {/* Image Container */}
            {image && (
                <div className="mt-2 w-full bg-[#F0F2F5] dark:bg-dark-bg border-y border-gray-200 dark:border-dark-border">
                    <img src={image} alt="Post" className="w-full h-auto max-h-[600px] object-contain mx-auto" />
                </div>
            )}

            {/* Stats (Likes/Comments) */}
            <div className="px-4 py-2.5 flex items-center justify-between text-[#65676B] dark:text-dark-text2 text-[15px]">
                <div className="flex items-center gap-1.5">
                    {likes > 0 && (
                        <div className="flex items-center">
                            <div className="bg-fb w-[18px] h-[18px] rounded-full flex items-center justify-center border-2 border-white dark:border-dark-card z-10">
                                <BsHandThumbsUpFill className="text-white text-[9px]" />
                            </div>
                            <span className="ml-1 hover:underline cursor-pointer">{likes}</span>
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    {comments.length > 0 && (
                        <span className="hover:underline cursor-pointer" onClick={() => setShowComments(!showComments)}>
                            {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
                        </span>
                    )}
                </div>
            </div>

            <div className="px-4">
                <div className="border-t border-gray-200 dark:border-dark-border"></div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-around px-1 py-1 mx-3 my-0.5">
                <button 
                    onClick={handleLike} 
                    className={`flex items-center gap-2 flex-1 justify-center py-1.5 hover:bg-[#F2F2F2] dark:hover:bg-dark-hover rounded-md transition-colors ${isLiked ? 'text-fb' : 'text-[#65676B] dark:text-dark-text2'}`}
                >
                    {isLiked ? <BsHandThumbsUpFill className="text-[18px]" /> : <BsHandThumbsUp className="text-[18px]" />}
                    <span className="font-semibold text-[15px]">Like</span>
                </button>
                <button 
                    onClick={() => setShowComments(!showComments)}
                    className="flex items-center gap-2 flex-1 justify-center py-1.5 hover:bg-[#F2F2F2] dark:hover:bg-dark-hover rounded-md transition-colors text-[#65676B] dark:text-dark-text2"
                >
                    <BsChat className="text-[18px]" />
                    <span className="font-semibold text-[15px]">Comment</span>
                </button>
                <button className="flex items-center gap-2 flex-1 justify-center py-1.5 hover:bg-[#F2F2F2] dark:hover:bg-dark-hover rounded-md transition-colors text-[#65676B] dark:text-dark-text2">
                    <BsShare className="text-[18px]" />
                    <span className="font-semibold text-[15px]">Share</span>
                </button>
            </div>

            {/* Comment Section */}
            {showComments && (
                <div className="px-4 pb-4 border-t border-gray-200 dark:border-dark-border pt-4">
                    <div className="space-y-3 mb-4">
                        {comments.map((c, i) => (
                            <div key={i} className="flex gap-2">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full border border-gray-200" alt="Avatar" />
                                <div className="flex flex-col">
                                    <div className="bg-[#F0F2F5] dark:bg-dark-hover px-3 py-2 rounded-[18px]">
                                        <h5 className="font-semibold text-[13px] text-[#050505] dark:text-dark-text leading-tight">Ravinder Singh</h5>
                                        <p className="text-[15px] text-[#050505] dark:text-dark-text leading-snug">{c.text}</p>
                                    </div>
                                    <div className="flex gap-4 ml-3 mt-1 text-[12px] font-semibold text-[#65676B] dark:text-dark-text2">
                                        <button className="hover:underline">Like</button>
                                        <button className="hover:underline">Reply</button>
                                        <span className="font-normal">{c.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 items-center">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full" alt="Avatar" />
                        <div className="flex-1 bg-[#F0F2F5] dark:bg-dark-hover rounded-[20px] flex items-center px-3 py-2">
                            <input
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addComment()}
                                placeholder="Write a comment..."
                                className="bg-transparent outline-none w-full text-[15px] text-[#050505] dark:text-dark-text"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

