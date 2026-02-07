import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const menuCategories = ['All', 'Breakfast', 'Main Course', 'Starters & Sides', 'Seafood'];

const menuItems = [
    // Breakfast
    { id: 1, name: 'Parotta Set', category: 'Breakfast', price: '₹30', description: 'Soft, flaky layered flatbread served with gravy.', image: '/menu/breakfast/parotta-set.jfif' },
    { id: 2, name: 'Idly Set', category: 'Breakfast', price: '₹35', description: 'Steamed rice cakes served with chutney and sambar.', image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=500&auto=format&fit=crop' },
    { id: 3, name: 'Set Dosa', category: 'Breakfast', price: '₹35', description: 'Spongy and soft dosas served in sets.', image: '/menu/breakfast/set-dosa.jfif' },
    { id: 4, name: 'Plain Dosa', category: 'Breakfast', price: '₹30', description: 'Crispy thin rice pancake.', image: '/menu/breakfast/plain-dosa.jfif' },
    { id: 5, name: 'Single Egg Dosa', category: 'Breakfast', price: '₹40', description: 'Crispy dosa topped with a single egg.', image: '/menu/breakfast/egg-dosa.jfif' },
    { id: 6, name: 'Double Egg Dosa', category: 'Breakfast', price: '₹50', description: 'Crispy dosa topped with two eggs.', image: '/menu/breakfast/double-egg-dosa.jfif' },
    { id: 7, name: 'Uppit', category: 'Breakfast', price: '₹30', description: 'Savory semolina porridge with vegetables.', image: '/menu/breakfast/uppit.jfif' },
    { id: 8, name: 'Puttu', category: 'Breakfast', price: '₹40', description: 'Steamed cylinders of ground rice and coconut.', image: '/menu/breakfast/puttu.jfif' },
    { id: 9, name: 'Set Appam', category: 'Breakfast', price: '₹35', description: 'Fluffy fermented rice pancakes.', image: '/menu/breakfast/set-appam.jfif' },
    { id: 10, name: 'Kadala Curry', category: 'Breakfast', price: '₹30', description: 'Spicy black chickpea curry, perfect with Puttu.', image: '/menu/breakfast/kadala-curry.jfif' },

    // Main Course
    { id: 12, name: 'Full Meals', category: 'Main Course', price: '₹80', description: 'Complete Kerala Sadhya with rice and multiple curries.', image: '/menu/main-course/full-meals.jfif' },
    { id: 13, name: 'Mini Meals', category: 'Main Course', price: '₹50', description: 'Compact portion of Kerala rice and curries.', image: '/menu/main-course/mini-meals.jfif' },
    { id: 14, name: 'Chicken Biriyani', category: 'Main Course', price: '₹120 / 80', description: 'Fragrant Basmati rice with succulent chicken and spices.', image: '/menu/main-course/chicken-biryani.jfif' },
    { id: 15, name: 'Ghee Rice', category: 'Main Course', price: '₹60 / 40', description: 'Aromatic rice cooked in clarified butter.', image: '/menu/main-course/ghee-rice.jfif' },
    { id: 16, name: 'Kushka', category: 'Main Course', price: '₹60 / 40', description: 'Spicy Biriyani rice served without meat.', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500&auto=format&fit=crop' },
    { id: 17, name: 'Chicken Fried Rice', category: 'Main Course', price: '₹90', description: 'Wok-tossed rice with chicken and veggies.', image: '/menu/main-course/fried-rice.jpg' },
    { id: 18, name: 'Egg Fried Rice', category: 'Main Course', price: '₹60', description: 'Quick-tossed rice with scrambled eggs.', image: '/menu/main-course/egg-fried-rice.jfif' },
    { id: 19, name: 'Veg Fried Rice', category: 'Main Course', price: '₹60', description: 'Rice tossed with fresh garden vegetables.', image: '/menu/main-course/veg-fried-rice.jfif' },
    { id: 20, name: 'Paneer Fried Rice', category: 'Main Course', price: '₹90', description: 'Wok-fried rice with chunks of soft paneer.', image: '/menu/main-course/paneer-fried-rice.jfif' },
    { id: 21, name: 'Mushroom Fried Rice', category: 'Main Course', price: '₹90', description: 'Savory rice tossed with mushrooms and soy.', image: '/menu/main-course/mushroom-fried-rice.jfif' },
    { id: 22, name: 'Chicken Noodles', category: 'Main Course', price: '₹90', description: 'Stir-fried noodles with chicken and scallions.', image: '/menu/main-course/chicken-noodles.jfif' },
    { id: 23, name: 'Egg Noodles', category: 'Main Course', price: '₹60', description: 'Tossed noodles with scrambled eggs.', image: '/menu/main-course/egg-noodles.jfif' },
    { id: 24, name: 'Veg Noodles', category: 'Main Course', price: '₹60', description: 'Stir-fried noodles with crisp vegetables.', image: '/menu/main-course/veg-noodles.jfif' },
    { id: 25, name: 'Paneer Noodles', category: 'Main Course', price: '₹90', description: 'Soft noodles with marinated paneer.', image: '/menu/main-course/paneer-noodles.jfif' },
    { id: 26, name: 'Mushroom Noodles', category: 'Main Course', price: '₹90', description: 'Flavorful stir-fried mushroom noodles.', image: '/menu/main-course/mushroom-noodles.jfif' },

    // Starters & Sides
    { id: 27, name: 'Kabab (100gm)', category: 'Starters & Sides', price: '₹60', description: 'Succulent spicy fried chicken pieces.', image: '/menu/starters-and-sides/kabab.jpeg' },
    { id: 28, name: 'Chicken 65 Dry', category: 'Starters & Sides', price: '₹130', description: 'Spicy, deep-fried chicken marinated in red chilies.', image: '/menu/starters-and-sides/chicken-65-dry.jpg' },
    { id: 29, name: 'Chilli Chicken Dry', category: 'Starters & Sides', price: '₹130', description: 'Spicy and tangy dry chicken with bell peppers.', image: '/menu/starters-and-sides/chilli-chicken-dry.jpg' },
    { id: 30, name: 'Paper Chicken Dry', category: 'Starters & Sides', price: '₹130', description: 'Chicken tossed with lots of crushed black pepper.', image: '/menu/starters-and-sides/paper-chicken-dry.jpg' },
    { id: 31, name: 'Lemon Chicken Dry', category: 'Starters & Sides', price: '₹140', description: 'Zesty chicken dry with fresh lemon notes.', image: '/menu/starters-and-sides/lemon-chicken-dry.jpg' },
    { id: 32, name: 'Chicken Manchurian Dry', category: 'Starters & Sides', price: '₹130', description: 'Indo-Chinese style sautéed chicken.', image: '/menu/starters-and-sides/chicken-manchurian-dry.jpg' },
    { id: 33, name: 'Garlic Chicken Dry', category: 'Starters & Sides', price: '₹130', description: 'Chicken infused with heavy garlic flavor.', image: '/menu/starters-and-sides/garlic-chicken-dry.jpg' },
    { id: 34, name: 'Pepper Chicken', category: 'Starters & Sides', price: '₹130 / 70', description: 'Traditional Kerala style pepper chicken roast.', image: '/menu/starters-and-sides/pepper-chicken.jpg' },
    { id: 35, name: 'Chicken Kondattam', category: 'Starters & Sides', price: '₹130 / 70', description: 'Fired chicken cooked in a spicy curd-based masala.', image: '/menu/starters-and-sides/chicken-kondattam.jpg' },
    { id: 36, name: 'Chicken Chukka', category: 'Starters & Sides', price: '₹70', description: 'Spicy dry roasted chicken with curry leaves.', image: '/menu/starters-and-sides/chicken-chukka.jpg' },
    { id: 37, name: 'Liver', category: 'Starters & Sides', price: '₹50', description: 'Spicy dry roasted liver masala.', image: '/menu/starters-and-sides/liver.jpg' },
    { id: 38, name: 'Boiled Egg', category: 'Starters & Sides', price: '₹15', description: 'Perfectly boiled egg.', image: '/menu/starters-and-sides/boiled-egg.jpg' },
    { id: 39, name: 'Single Omelette', category: 'Starters & Sides', price: '₹20', description: 'Fluffy single egg omelette.', image: '/menu/starters-and-sides/single-omelette.jpg' },
    { id: 40, name: 'Double Omelette', category: 'Starters & Sides', price: '₹30', description: 'Filling double egg omelette.', image: '/menu/starters-and-sides/double-omelette.jpg' },
    { id: 41, name: 'Egg Curry', category: 'Starters & Sides', price: '₹40 / 20', description: 'Spicy egg gravy perfect with Parotta.', image: '/menu/starters-and-sides/egg-curry.jpg' },
    { id: 42, name: 'Full Chicken Masala', category: 'Starters & Sides', price: '₹130 / 70', description: 'Classic Kerala style chicken curry with thick gravy.', image: '/menu/starters-and-sides/full-chicken-masala.jpg' },

    // Seafood
    { id: 43, name: 'Fish Curry', category: 'Seafood', price: 'Seasonal', description: 'Fresh catch cooked in authentic Malabar style.', image: '/menu/seafood/fish-curry.jpeg' },
];

const ITEMS_PER_PAGE = 6;

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const { t } = useLanguage();

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const getTranslatedCategory = (cat: string) => {
        switch (cat) {
            case 'All': return t.menu.categories.all;
            case 'Breakfast': return t.menu.categories.breakfast;
            case 'Main Course': return t.menu.categories.mainCourse;
            case 'Seafood': return t.menu.categories.seafood;
            case 'Starters & Sides': return t.menu.categories.starters;
            default: return cat;
        }
    };

    return (
        <section id="menu" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-kerala-gold font-serif text-lg tracking-widest uppercase mb-2 block">{t.menu.subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-kerala-green mb-6">{t.menu.title}</h2>
                    <div className="w-24 h-1 bg-kerala-gold mx-auto rounded-full" />
                </motion.div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {menuCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-5 sm:px-8 py-2 rounded-full font-medium transition-all duration-300 border ${activeCategory === category
                                ? 'bg-kerala-green text-white border-kerala-green shadow-lg'
                                : 'bg-cream-white text-coconut-brown border-transparent hover:border-kerala-gold'
                                }`}
                        >
                            {getTranslatedCategory(category)}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[800px]">
                    <AnimatePresence mode="popLayout">
                        {paginatedItems.map((item: any) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group glass-card rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-kerala-gold text-white px-4 py-1 rounded-full font-bold shadow-lg">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <span className="text-kerala-gold text-xs font-bold uppercase tracking-wider mb-2 block">
                                        {getTranslatedCategory(item.category)}
                                    </span>
                                    <h3 className="text-xl font-bold text-kerala-green mb-2 group-hover:text-palm-green transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-coconut-brown/70 font-light text-sm line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-4 mt-16">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`p-3 rounded-full border border-kerala-gold/30 transition-all ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-kerala-gold hover:text-white'
                                }`}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="flex items-center gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-12 h-12 rounded-full font-bold transition-all ${currentPage === i + 1
                                        ? 'bg-kerala-green text-white shadow-lg'
                                        : 'bg-cream-white text-coconut-brown hover:border-kerala-gold border border-transparent'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`p-3 rounded-full border border-kerala-gold/30 transition-all ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-kerala-gold hover:text-white'
                                }`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Menu;
