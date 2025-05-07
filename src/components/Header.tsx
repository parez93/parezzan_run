
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <header className="relative bg-gradient-to-r from-runner-dark-blue to-runner-purple py-24 overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-runner-dark-blue/10 to-transparent"></div>
                <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-runner-purple/30 rounded-full blur-3xl"></div>
                <div className="absolute -left-24 top-12 w-48 h-48 bg-runner-orange/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
                    <div className="md:w-1/2 text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
                        >
                            Federico Parezzan<span className="text-runner-orange">.Run</span>
                        </motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="text-xl md:text-2xl text-white/90 max-w-lg"
                        >
                            Ero sempre l’ultimo.<br/>
                            Ho iniziato camminando, poi correndo.<br/>
                            Ora corro la mezza maratona con orgoglio!
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
                            <img
                                src="/src/assets/profile-image.png"
                                alt="Runner Profile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-runner-dark-blue/50 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 bg-runner-orange text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            MEZZO MARATONETA
                        </div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
};

export default Header;
