
import React from 'react';
import { Button } from '@/components/ui/button';
import {Instagram, Triangle, Twitter, Zap} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-runner-dark-blue text-white py-12 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Federico Parezzan<span className="text-runner-orange">.Run</span></h3>
                        <p className="text-gray-300 text-sm max-w-xs">Dedicato alla mia passione per la corsa e al mio viaggio di trasformazione personale</p>
                    </div>

                    <div className="flex space-x-4">
                        <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10 hover:text-runner-orange">
                            <Instagram className="w-5 h-5" />
                            <span className="sr-only">Instagram</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10 hover:text-runner-orange"
                                onClick={() => window.open('https://connect.garmin.com/modern/profile/df4dc00c-1c2c-411a-b022-25416533a49b', '_blank')}>
                            <Triangle className="w-5 h-5" />
                            <span className="sr-only">Garmin</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-white/10 hover:text-runner-orange"
                                onClick={() => window.open('https://www.strava.com/athletes/70185070"', '_blank')}
                        >
                            <Zap className="w-5 h-5" />
                            <span className="sr-only">Strava</span>
                        </Button>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">© 2020-2025 · Sito web personale di Federico Parezzan</p>
    {/*                <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contatti</a>
                        <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a>
                    </div>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
