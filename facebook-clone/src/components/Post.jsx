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
            setComments([...comments, comment]);
            setComment("");
        }
    };

    return (
        <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm mt-4 w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-2">
                <div className="flex items-center gap-2">
                    <Link to="/profile">
                        <img src={profilePic || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"} alt={username} className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-90" />
                    </Link>
                    <div>
                        <Link to="/profile">
                            <h4 className="font-semibold text-[15px] hover:underline cursor-pointer text-light-text dark:text-dark-text">{username || "User"}</h4>
                        </Link>
                        <div className="flex items-center gap-1 text-light-text2 dark:text-dark-text2 text-[13px]">
                            <span>{timestamp || "Just now"}</span>
                            <span>•</span>
                            <BsGlobe />
                        </div>
                    </div>
                </div>
                <div className="hover:bg-light-bg dark:hover:bg-dark-hover p-2 rounded-full cursor-pointer">
                    <BsThreeDots className="text-xl text-light-text2 dark:text-dark-text2" />
                </div>
            </div>

            {/* Message */}
            {message && (
                <div className="px-4 pb-2 text-[15px] text-light-text dark:text-dark-text">
                    {message}
                </div>
            )}

            {/* Image/Video Container */}
            {image && (
                <div className="w-full cursor-pointer relative bg-light-bg flex justify-center items-center overflow-hidden max-h-[600px]">
                    {/* Simple check for video URL (not robust but works for demo) */}
                    {image.includes("mp4") ? (
                        <video src={image} controls className="w-full h-auto" />
                    ) : (
                        <img src={image} alt="Post Content" className="w-full h-auto object-contain" />
                    )}
                </div>
            )}

            {/* Stats (Likes/Comments) */}
            <div className="px-4 py-2 flex items-center justify-between text-light-text2 dark:text-dark-text2 text-[15px]">
                <div className="flex items-center gap-1 cursor-pointer hover:underline">
                    {(likes > 0 || comments.length > 0) && (
                        <>
                            {likes > 0 && <div className="bg-fb w-[18px] h-[18px] rounded-full flex items-center justify-center">
                                <BsHandThumbsUpFill className="text-white text-[10px]" />
                            </div>}
                            <span>{likes > 0 ? likes : ''}</span>
                        </>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    <span className="hover:underline cursor-pointer" onClick={() => setShowComments(!showComments)}>{comments.length > 0 ? `${comments.length} Comments` : ''}</span>
                    <span className="hover:underline cursor-pointer"></span>
                </div>
            </div>

            <hr className="bg-light-border dark:border-dark-border mx-4 h-[1px] border-none" />

            {/* Action Buttons */}
            <div className="flex items-center justify-around px-2 py-1 m-1">
                <div onClick={handleLike} className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-light-bg dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                    {isLiked ? <BsHandThumbsUpFill className="text-xl text-fb" /> : <BsHandThumbsUp className="text-xl text-light-text2 dark:text-dark-text2" />}
                    <span className={`font-semibold text-[15px] ${isLiked ? 'text-fb' : 'text-light-text2 dark:text-dark-text2'}`}>Like</span>
                </div>
                <div onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-light-bg dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                    <BsChat className="text-xl text-light-text2 dark:text-dark-text2" />
                    <span className="font-semibold text-light-text2 dark:text-dark-text2 text-[15px]">Comment</span>
                </div>
                <div className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-light-bg dark:hover:bg-dark-hover rounded-lg cursor-pointer transition-colors">
                    <BsShare className="text-xl text-light-text2 dark:text-dark-text2" />
                    <span className="font-semibold text-light-text2 dark:text-dark-text2 text-[15px]">Share</span>
                </div>
            </div>

            {/* Comment Section (Collapsible) */}
            {showComments && (
                <div className="px-4 pb-4">
                    <hr className="mb-4 border-light-border dark:border-dark-border" />
                    {/* Comment List */}
                    <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                        {comments.map((c, i) => (
                            <div key={i} className="flex gap-2 text-sm">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full" />
                                <div className="bg-light-bg dark:bg-dark-hover px-3 py-2 rounded-2xl relative">
                                    <span className="font-semibold block text-[13px] text-light-text dark:text-dark-text">You</span>
                                    <span className="text-light-text dark:text-dark-text break-all">{c}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="flex gap-2 items-center">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" className="w-8 h-8 rounded-full" />
                        <div className="flex-1 bg-light-bg dark:bg-dark-hover rounded-full flex items-center px-4 py-2">
                            <input
                                value={comment}
                                onChange={e => setComment(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && addComment()}
                                placeholder="Write a comment..."
                                className="bg-transparent outline-none w-full text-[15px] text-light-text dark:text-dark-text placeholder-light-text2 dark:placeholder-dark-text2"
                            />
                        </div>
                        <button onClick={addComment} className="text-fb font-semibold text-sm disabled:opacity-50 hover:bg-light-hover dark:hover:bg-dark-hover p-2 rounded" disabled={!comment.trim()}>
                            Post
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
