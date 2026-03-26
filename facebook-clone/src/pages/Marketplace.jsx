import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaSearch, FaMapMarkerAlt, FaCar, FaHome, FaTshirt, FaMobileAlt, FaCouch, FaBriefcase, FaPlus, FaFilter, FaCamera, FaTimes, FaChevronRight } from 'react-icons/fa';
import { BsFillLightningFill, BsFillBellFill, BsInboxFill } from 'react-icons/bs';
import { MdStorefront, MdOutlineInventory, MdSettings, MdShoppingBag } from 'react-icons/md';

export default function Marketplace() {
    const [activeTab, setActiveTab] = useState('Browse All');
    const [showCreateForm, setShowCreateForm] = useState(false);

    const categories = [
        { icon: BsFillLightningFill, label: 'Browse All' },
        { icon: BsFillBellFill, label: 'Notifications' },
        { icon: BsInboxFill, label: 'Inbox' },
        { icon: MdShoppingBag, label: 'Buying' },
        { icon: MdStorefront, label: 'Selling' },
        { icon: FaCar, label: 'Vehicles' },
        { icon: FaHome, label: 'Property Rentals' },
        { icon: FaTshirt, label: 'Apparel' },
        { icon: FaMobileAlt, label: 'Electronics' },
        { icon: FaCouch, label: 'Home Goods' },
        { icon: FaBriefcase, label: 'Jobs' },
    ];

    const allProducts = [
        { id: 1, title: 'Iphone 13 pro max - Pacific Blue 128GB', price: '₹65,000', location: 'New Delhi', category: 'Electronics', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: 'Luxury 5 Seater Sofa Set (Teak Wood)', price: '₹12,500', location: 'Gurgaon', category: 'Home Goods', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 3, title: 'Royal Enfield Classic 350 - Mint Condition', price: '₹1,20,000', location: 'Noida', category: 'Vehicles', img: 'https://images.unsplash.com/photo-1558981806-ec527fa84c3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 4, title: 'MacBook Air M1 - Silver', price: '₹55,000', location: 'Delhi', category: 'Electronics', img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 5, title: 'Spacious 2 BHK Flat for Rent with Balcony', price: '₹18,000 / month', location: 'Dwarka, Delhi', category: 'Property Rentals', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 6, title: 'Full Gaming PC Setup (RTX 3060)', price: '₹85,000', location: 'Faridabad', category: 'Electronics', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 7, title: 'Wooden Study Table & Ergonomic Chair', price: '₹3,500', location: 'Rohini', category: 'Home Goods', img: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 8, title: 'Canon EOS 1500D DSLR Camera', price: '₹30,000', location: 'New Delhi', category: 'Electronics', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
        { id: 10, title: 'Men\'s Denim Jacket - Size L', price: '₹999', location: 'Delhi', category: 'Apparel', img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
    ];

    let displayProducts = allProducts;
    if (activeTab !== 'Browse All' && activeTab !== 'Notifications' && activeTab !== 'Inbox' && activeTab !== 'Buying' && activeTab !== 'Selling') {
        displayProducts = allProducts.filter(p => p.category === activeTab);
    }

    const renderContent = () => {
        if (showCreateForm) {
            return (
                <div className="max-w-2xl mx-auto p-4 md:p-10">
                    <div className="bg-white dark:bg-dark-card rounded-lg shadow-card p-6 relative border border-[#CED0D4] dark:border-dark-border">
                        <button onClick={() => setShowCreateForm(false)} className="absolute top-4 right-4 text-[#65676B] hover:bg-gray-100 dark:hover:bg-dark-hover p-2 rounded-full transition-colors">
                            <FaTimes size={20} />
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-[#050505] dark:text-dark-text">Choose listing type</h2>

                        <div className="flex flex-col gap-3">
                            {[
                                { icon: MdShoppingBag, title: 'Item for Sale', desc: 'Create a single listing for one or more items.' },
                                { icon: FaCar, title: 'Vehicle for Sale', desc: 'Sell a car, truck or other type of vehicle.' },
                                { icon: FaHome, title: 'Home for Sale or Rent', desc: 'List a house or apartment for sale or rent.' }
                            ].map((type, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 border border-[#CED0D4] dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-hover cursor-pointer transition-colors group">
                                    <div className="w-12 h-12 bg-[#E4E6EB] dark:bg-dark-bg rounded-full flex items-center justify-center text-2xl text-[#050505] dark:text-dark-text">
                                        <type.icon />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[17px] text-[#050505] dark:text-dark-text">{type.title}</h3>
                                        <p className="text-[14px] text-[#65676B] dark:text-dark-text2">{type.desc}</p>
                                    </div>
                                    <FaChevronRight className="text-[#65676B] group-hover:text-[#050505] transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === 'Notifications') {
            return (
                <div className="max-w-2xl mx-auto p-4 md:p-10">
                    <h2 className="text-2xl font-bold mb-4 text-[#050505] dark:text-dark-text">Notifications</h2>
                    <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm divide-y dark:divide-dark-border border border-[#CED0D4] dark:border-dark-border overflow-hidden">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-4 hover:bg-gray-50 dark:hover:bg-dark-hover cursor-pointer flex gap-4 items-start">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-fb text-xl shrink-0">
                                    <BsFillBellFill />
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-[15px] text-[#050505] dark:text-dark-text leading-tight">Price drop on iPhone 13 Pro Max</p>
                                    <p className="text-[14px] text-[#65676B] dark:text-dark-text2 mt-1">The price dropped by ₹5,000 in your local area. Check it out now!</p>
                                    <p className="text-[12px] text-fb font-bold mt-1">2 hours ago</p>
                                </div>
                                <div className="w-2.5 h-2.5 bg-fb rounded-full self-center"></div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeTab === 'Selling') {
            return (
                <div className="p-4 md:p-10 max-w-[1200px] mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Your Seller Dashboard</h2>
                        <button onClick={() => setShowCreateForm(true)} className="bg-fb text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors shadow-sm">
                            + Create Listing
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {[
                            { label: 'Active Listings', val: '12', color: 'blue' },
                            { label: 'Clicks on Listings', val: '458', color: 'green' },
                            { label: 'Saved by Users', val: '24', color: 'yellow' }
                        ].map((stat, i) => (
                            <div key={i} className="fb-card p-5 border-l-4 border-fb">
                                <p className="text-[#65676B] dark:text-dark-text2 font-semibold text-[14px] uppercase tracking-wide">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-[#050505] dark:text-dark-text mt-1">{stat.val}</h3>
                            </div>
                        ))}
                    </div>

                    <h3 className="font-bold text-xl mb-4 text-[#050505] dark:text-dark-text">Your Listings</h3>
                    <div className="fb-card p-12 text-center text-[#65676B] dark:text-dark-text2 flex flex-col items-center">
                        <div className="w-20 h-20 bg-gray-100 dark:bg-dark-hover rounded-full flex items-center justify-center mb-4">
                            <MdStorefront className="text-4xl" />
                        </div>
                        <p className="text-[17px] font-semibold">You have no active listings right now.</p>
                        <button onClick={() => setShowCreateForm(true)} className="text-fb font-semibold mt-2 hover:underline">Create your first listing</button>
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-[#F0F2F5] dark:bg-dark-bg min-h-[calc(100vh-56px)] transition-colors">
                {/* Desktop Top Bar */}
                <div className="hidden lg:flex justify-between items-center p-6 px-8 max-w-[1200px] mx-auto">
                    <h2 className="text-xl font-bold text-[#050505] dark:text-dark-text">{activeTab === 'Browse All' ? "Today's Picks" : activeTab}</h2>
                    <div className="flex items-center gap-2 text-fb bg-white dark:bg-dark-card px-4 py-2 rounded-full cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-hover font-semibold text-[14px] shadow-sm border border-[#CED0D4] dark:border-dark-border">
                        <FaMapMarkerAlt className="text-[13px]" /> New Delhi · 65 km
                    </div>
                </div>

                {/* Products Grid */}
                <div className="p-4 px-4 lg:px-8 pb-10 max-w-[1200px] mx-auto">
                    {displayProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {displayProducts.map(product => (
                                <div key={product.id} className="cursor-pointer group flex flex-col">
                                    <div className="aspect-square w-full rounded-xl overflow-hidden mb-2 shadow-sm bg-white border border-[#CED0D4] dark:border-dark-border overflow-hidden">
                                        <img
                                            src={product.img}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            alt={product.title}
                                        />
                                    </div>
                                    <div className="px-1">
                                        <div className="font-bold text-[17px] text-[#050505] dark:text-dark-text leading-tight mt-0.5">{product.price}</div>
                                        <div className="text-[15px] text-[#050505] dark:text-dark-text leading-tight line-clamp-2 mt-1 font-medium">
                                            {product.title}
                                        </div>
                                        <div className="text-[13px] text-[#65676B] dark:text-dark-text2 mt-1">
                                            {product.location}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 flex flex-col items-center">
                            <h3 className="text-[18px] font-bold text-[#65676B] dark:text-dark-text2">No items found in this category.</h3>
                            <button onClick={() => setActiveTab('Browse All')} className="mt-4 bg-fb text-white px-6 py-2 rounded-md font-bold hover:bg-blue-600 transition-colors shadow-sm">Browse all items</button>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors">
            <Navbar />

            <div className="flex">
                {/* ================= LEFT SIDEBAR ================= */}
                <div className="hidden lg:block w-[360px] h-[calc(100vh-56px)] bg-white dark:bg-dark-card sticky top-[56px] overflow-y-auto p-2 pb-10 border-r border-[#CED0D4] dark:border-dark-border">
                    <div className="px-3 pt-4 pb-2 flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Marketplace</h1>
                        <div className="w-9 h-9 bg-[#E4E6EB] dark:bg-dark-hover rounded-full flex items-center justify-center cursor-pointer hover:bg-[#D8DADF] transition-colors">
                            <MdSettings className="text-2xl text-[#050505] dark:text-dark-text" />
                        </div>
                    </div>

                    <div className="px-3 mt-4">
                        <div className="bg-[#F0F2F5] dark:bg-dark-bg rounded-full px-3 py-2.5 flex items-center mb-4 border border-transparent focus-within:border-fb transition-all">
                            <FaSearch className="text-[#65676B] mr-2 text-[15px]" />
                            <input type="text" placeholder="Search Marketplace" className="bg-transparent outline-none w-full text-[15px] text-[#050505] placeholder-[#65676B] dark:text-dark-text dark:placeholder-dark-text2" />
                        </div>
                    </div>

                    <div className="px-1 mt-2">
                        {categories.map((cat, idx) => (
                            <div key={idx}>
                                {idx === 5 && <div className="border-b border-[#CED0D4] dark:border-dark-border my-4 mx-3"></div>}
                                {idx === 5 && <h3 className="px-3 font-bold text-[17px] mb-2 text-[#050505] dark:text-dark-text">Categories</h3>}
                                <div
                                    onClick={() => { setActiveTab(cat.label); setShowCreateForm(false); }}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${activeTab === cat.label ? 'bg-[#F0F2F5] dark:bg-dark-hover' : 'hover:bg-gray-100 dark:hover:bg-dark-hover'}`}
                                >
                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${activeTab === cat.label ? 'bg-fb text-white' : 'bg-[#E4E6EB] dark:bg-dark-hover'}`}>
                                        <cat.icon className={`text-[20px] ${activeTab === cat.label ? 'text-white' : 'text-[#050505] dark:text-dark-text'}`} />
                                    </div>
                                    <span className={`font-semibold text-[15px] flex-1 text-[#050505] dark:text-dark-text`}>{cat.label}</span>
                                    {cat.label === 'Browse All' && <FaChevronRight className="text-gray-400 text-[12px]" />}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 px-3">
                        <button
                            onClick={() => { setShowCreateForm(true); }}
                            className="w-full bg-[#E7F3FF] dark:bg-[#263951] text-fb py-2.5 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-[#D8EAFE] dark:hover:bg-[#3A4B63] transition-colors"
                        >
                            <FaPlus className="text-[14px]" /> Create new listing
                        </button>
                    </div>
                </div>

                {/* ================= RIGHT MAIN CONTENT ================= */}
                <div className="flex-1 min-w-0">
                    <div className="lg:hidden p-4 bg-white dark:bg-dark-card sticky top-[56px] z-40 shadow-sm flex flex-col gap-3 border-b border-[#CED0D4] dark:border-dark-border">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-[#050505] dark:text-dark-text">Marketplace</h1>
                            <div className="flex gap-2">
                                <div className="w-9 h-9 bg-[#E4E6EB] dark:bg-dark-hover rounded-full flex items-center justify-center">
                                    <FaSearch className="text-[#050505] dark:text-dark-text" />
                                </div>
                                <div className="w-9 h-9 bg-[#E4E6EB] dark:bg-dark-hover rounded-full flex items-center justify-center">
                                    <FaFilter className="text-[#050505] dark:text-dark-text" />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                            <button onClick={() => setShowCreateForm(true)} className="bg-[#E4E6EB] dark:bg-dark-hover px-5 py-2 rounded-full text-[14px] font-bold whitespace-nowrap flex items-center gap-2 text-[#050505] dark:text-dark-text"><FaPlus /> Sell</button>
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => { setActiveTab(cat.label); setShowCreateForm(false); }}
                                    className={`px-5 py-2 rounded-full text-[14px] font-bold whitespace-nowrap transition-colors ${activeTab === cat.label ? 'bg-fb text-white' : 'bg-[#E4E6EB] dark:bg-dark-hover text-[#050505] dark:text-dark-text'}`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="h-full overflow-y-auto">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}
