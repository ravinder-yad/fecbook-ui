import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch, FaMapMarkerAlt, FaCar, FaHome, FaTshirt, FaMobileAlt, FaCouch, FaBriefcase, FaPlus, FaFilter, FaCamera, FaTimes } from 'react-icons/fa';
import { BsFillLightningFill, BsFillBellFill, BsInboxFill } from 'react-icons/bs';
import { MdStorefront, MdOutlineInventory } from 'react-icons/md';

export default function Marketplace() {
    const [activeTab, setActiveTab] = useState('Browse All');
    const [showCreateForm, setShowCreateForm] = useState(false);

    const categories = [
        { icon: BsFillLightningFill, label: 'Browse All' },
        { icon: BsFillBellFill, label: 'Notifications' },
        { icon: BsInboxFill, label: 'Inbox' },
        { icon: MdStorefront, label: 'Buying' },
        { icon: MdOutlineInventory, label: 'Selling' },
        { icon: FaCar, label: 'Vehicles' },
        { icon: FaHome, label: 'Property Rentals' },
        { icon: FaTshirt, label: 'Apparel' },
        { icon: FaMobileAlt, label: 'Electronics' },
        { icon: FaCouch, label: 'Home Goods' },
        { icon: FaBriefcase, label: 'Jobs' },
    ];

    // Dummy Data for specific categories
    const allProducts = [
        { id: 1, title: 'Iphone 13 pro max - Pacific Blue 128GB', price: '₹65,000', location: 'New Delhi', category: 'Electronics', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: 'Luxury 5 Seater Sofa Set (Teak Wood)', price: '₹12,500', location: 'Gurgaon', category: 'Home Goods', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 3, title: 'Royal Enfield Classic 350 - Mint Condition', price: '₹1,20,000', location: 'Noida', category: 'Vehicles', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 4, title: 'MacBook Air M1 - Silver', price: '₹55,000', location: 'Delhi', category: 'Electronics', img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 5, title: 'Spacious 2 BHK Flat for Rent with Balcony', price: '₹18,000 / month', location: 'Dwarka, Delhi', category: 'Property Rentals', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 6, title: 'Full Gaming PC Setup (RTX 3060)', price: '₹85,000', location: 'Faridabad', category: 'Electronics', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 7, title: 'Wooden Study Table & Ergonomic Chair', price: '₹3,500', location: 'Rohini', category: 'Home Goods', img: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 8, title: 'Canon EOS 1500D DSLR Camera', price: '₹30,000', location: 'New Delhi', category: 'Electronics', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 9, title: 'Honda City 2018 - Top Model', price: '₹7,50,000', location: 'Ghaziabad', category: 'Vehicles', img: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 10, title: 'Men\'s Denim Jacket - Size L', price: '₹999', location: 'Delhi', category: 'Apparel', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 11, title: 'Graphic Designer Job - Remote', price: '₹25,000 - ₹40,000', location: 'Remote', category: 'Jobs', img: 'https://images.unsplash.com/photo-1626785774573-4b799312c95d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    ];

    // Logic to filter products
    let displayProducts = allProducts;
    if (activeTab !== 'Browse All' && activeTab !== 'Notifications' && activeTab !== 'Inbox' && activeTab !== 'Buying' && activeTab !== 'Selling') {
        displayProducts = allProducts.filter(p => p.category === activeTab);
    }

    // Determine what content to show based on activeTab
    const renderContent = () => {
        // 1. Create Listing Form
        if (showCreateForm) {
            return (
                <div className="max-w-2xl mx-auto p-4">
                    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-md p-6 relative">
                        <button onClick={() => setShowCreateForm(false)} className="absolute top-4 right-4 text-light-text2 hover:text-light-text dark:text-dark-text2 dark:hover:text-dark-text">
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center text-light-text dark:text-dark-text">New Listing</h2>

                        <div className="flex flex-col gap-4">
                            <div className="border-2 border-dashed border-light-border dark:border-dark-border rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:bg-light-hover dark:hover:bg-dark-hover">
                                <FaCamera className="text-2xl text-light-text2 mb-2" />
                                <span className="text-sm font-semibold text-light-text2 dark:text-dark-text2">Add Photos</span>
                                <span className="text-xs text-light-text2">or drag and drop</span>
                            </div>

                            <input type="text" placeholder="Title" className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text p-3 rounded-md outline-none focus:ring-2 focus:ring-fb" />
                            <input type="text" placeholder="Price" className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text p-3 rounded-md outline-none focus:ring-2 focus:ring-fb" />

                            <select className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text p-3 rounded-md outline-none focus:ring-2 focus:ring-fb">
                                <option>Category</option>
                                <option>Vehicles</option>
                                <option>Electronics</option>
                                <option>Furniture</option>
                                <option>Clothing</option>
                            </select>

                            <input type="text" placeholder="Condition" className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text p-3 rounded-md outline-none focus:ring-2 focus:ring-fb" />
                            <textarea placeholder="Description" className="w-full bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text p-3 rounded-md outline-none focus:ring-2 focus:ring-fb h-32"></textarea>

                            <button className="w-full bg-fb text-white py-3 rounded-md font-bold text-lg hover:bg-blue-600 transition-colors">
                                Publish Listing
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        // 2. Notifications View
        if (activeTab === 'Notifications') {
            return (
                <div className="max-w-2xl mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">Notifications</h2>
                    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm divide-y dark:divide-dark-border">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-4 hover:bg-light-hover dark:hover:bg-dark-hover cursor-pointer flex gap-3">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-fb">
                                    <BsFillBellFill />
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-light-text dark:text-dark-text">Price drop on iPhone 13 Pro Max</p>
                                    <p className="text-xs text-light-text2 dark:text-dark-text2">The price dropped by ₹5,000. Check it out now!</p>
                                    <p className="text-xs text-blue-500 font-semibold mt-1">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        // 3. Selling View
        if (activeTab === 'Selling') {
            return (
                <div className="max-w-4xl mx-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Your Seller Dashboard</h2>
                        <button onClick={() => setShowCreateForm(true)} className="bg-[#E7F3FF] dark:bg-[#263951] text-fb px-4 py-2 rounded-md font-semibold dark:text-blue-400">
                            + Create Listing
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <p className="text-light-text2 dark:text-dark-text2 font-semibold">Active Listings</p>
                            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">12</h3>
                        </div>
                        <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                            <p className="text-light-text2 dark:text-dark-text2 font-semibold">Clicks on Listings</p>
                            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">458</h3>
                        </div>
                        <div className="bg-light-card dark:bg-dark-card p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                            <p className="text-light-text2 dark:text-dark-text2 font-semibold">Saved by Users</p>
                            <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">24</h3>
                        </div>
                    </div>

                    <h3 className="font-bold text-xl mb-4 text-light-text dark:text-dark-text">Your Listings</h3>
                    <div className="bg-light-card dark:bg-dark-card rounded-lg shadow-sm p-8 text-center text-light-text2 dark:text-dark-text2">
                        You have no active listings right now.
                    </div>
                </div>
            );
        }

        // 4. Buying/Inbox View
        if (activeTab === 'Buying' || activeTab === 'Inbox') {
            return (
                <div className="max-w-2xl mx-auto p-10 text-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-dark-hover rounded-full flex items-center justify-center mx-auto mb-4">
                        <BsInboxFill className="text-4xl text-gray-400 dark:text-dark-text2" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-light-text dark:text-dark-text">No messages yet</h2>
                    <p className="text-light-text2 dark:text-dark-text2">Messages from buyers and sellers will appear here.</p>
                </div>
            );
        }

        // 5. Default Product Grid (Browse All or Category)
        return (
            <>
                {/* Desktop Top Bar */}
                <div className="hidden lg:flex justify-between items-center p-4 px-8 pt-6">
                    <h2 className="text-xl font-bold text-light-text dark:text-dark-text">{activeTab === 'Browse All' ? "Today's Picks" : activeTab}</h2>
                    <div className="flex items-center gap-2 text-fb bg-[#E7F3FF] dark:bg-[#263951] px-3 py-1.5 rounded-md cursor-pointer hover:bg-blue-100 dark:hover:bg-[#3A4B63] font-semibold text-sm">
                        <FaMapMarkerAlt /> New Delhi · 65 km
                    </div>
                </div>

                {/* Products Grid */}
                <div className="p-4 px-4 lg:px-8 pb-10">
                    {displayProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {displayProducts.map(product => (
                                <div key={product.id} className="cursor-pointer group">
                                    {/* Image Container */}
                                    <div className="aspect-square w-full rounded-lg overflow-hidden mb-2 relative bg-gray-100 dark:bg-dark-hover">
                                        <img
                                            src={product.img}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            alt={product.title}
                                        />
                                    </div>

                                    {/* Details */}
                                    <div>
                                        <div className="font-bold text-[17px] text-light-text dark:text-dark-text">{product.price}</div>
                                        <div className="text-[15px] text-light-text dark:text-dark-text leading-snug line-clamp-2 mb-0.5 group-hover:underline">
                                            {product.title}
                                        </div>
                                        <div className="text-[13px] text-light-text2 dark:text-dark-text2">
                                            {product.location}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <h3 className="text-lg font-semibold text-light-text2 dark:text-dark-text2">No items found in this category.</h3>
                            <button onClick={() => setActiveTab('Browse All')} className="mt-4 text-fb font-semibold hover:underline">Browse all items</button>
                        </div>
                    )}
                </div>
            </>
        );
    };

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR (FILTERS & CATEGORIES) ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-light-card dark:bg-dark-card sticky top-[56px] overflow-y-auto p-4 border-r border-light-border dark:border-dark-border">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Marketplace</h1>
                        <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                            <span className="font-bold text-sm text-light-text dark:text-dark-text">⚙️</span>
                        </div>
                    </div>

                    {/* Search Input */}
                    <div className="bg-light-bg dark:bg-dark-hover rounded-full px-3 py-2 flex items-center mb-4 cursor-pointer hover:bg-light-hover dark:hover:bg-[#4E4F50]">
                        <FaSearch className="text-light-text2 dark:text-dark-text2 mr-2" />
                        <input type="text" placeholder="Search Marketplace" className="bg-transparent outline-none w-full text-light-text placeholder-light-text2 dark:text-dark-text dark:placeholder-dark-text2" />
                    </div>

                    {/* Create New Listing Button */}
                    <button
                        onClick={() => { setShowCreateForm(true); setActiveTab('Browse All'); }}
                        className="w-full bg-[#E7F3FF] dark:bg-[#263951] text-fb py-2 rounded-md font-semibold flex items-center justify-center gap-2 mb-4 hover:bg-blue-100 dark:hover:bg-[#3A4B63] dark:text-blue-400 transition-colors"
                    >
                        <FaPlus /> Create new listing
                    </button>

                    <div className="border-b border-light-border dark:border-dark-border my-4"></div>

                    <h3 className="font-semibold text-[17px] mb-2 text-light-text dark:text-dark-text">Categories</h3>
                    <div className="flex flex-col gap-1">
                        {categories.map((cat, idx) => (
                            <div
                                key={idx}
                                onClick={() => { setActiveTab(cat.label); setShowCreateForm(false); }}
                                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${activeTab === cat.label ? 'bg-light-hover dark:bg-dark-hover' : 'hover:bg-light-hover dark:hover:bg-dark-hover'}`}
                            >
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === cat.label ? 'bg-fb text-white' : 'bg-light-bg dark:bg-dark-hover'}`}>
                                    <cat.icon className={`text-md ${activeTab === cat.label ? 'text-white' : 'text-light-text dark:text-dark-text'}`} />
                                </div>
                                <span className={`font-medium text-[15px] text-light-text dark:text-dark-text ${activeTab === cat.label ? 'font-bold' : ''}`}>{cat.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="border-b border-light-border dark:border-dark-border my-4"></div>

                    <h3 className="font-semibold text-[17px] mb-2 text-light-text dark:text-dark-text">Filters</h3>
                    <div className="flex items-center gap-2 text-fb font-semibold cursor-pointer mb-2">
                        <span className="text-sm">New Delhi · Within 60 km</span>
                    </div>
                </div>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="flex-1 min-w-0">

                    {/* Mobile Top Bar */}
                    <div className="lg:hidden p-4 bg-light-card dark:bg-dark-card sticky top-[56px] z-40 shadow-sm flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-light-text dark:text-dark-text">Marketplace</h1>
                            <div className="flex gap-2">
                                <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center">
                                    <FaSearch className="text-light-text dark:text-dark-text" />
                                </div>
                                <div className="w-9 h-9 bg-light-bg dark:bg-dark-hover rounded-full flex items-center justify-center">
                                    <FaFilter className="text-light-text dark:text-dark-text" />
                                </div>
                            </div>
                        </div>
                        {/* Mobile Categories Scroll */}
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                            <button onClick={() => setShowCreateForm(true)} className="bg-light-bg dark:bg-dark-hover px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap flex items-center gap-1 text-light-text dark:text-dark-text"><FaPlus /> Sell</button>
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setActiveTab(cat.label); setShowCreateForm(false); }}
                                    className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${activeTab === cat.label ? 'bg-fb text-white' : 'bg-light-bg dark:bg-dark-hover text-light-text dark:text-dark-text'}`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Content Render */}
                    {renderContent()}

                </div>

            </div>
        </div>
    );
}
