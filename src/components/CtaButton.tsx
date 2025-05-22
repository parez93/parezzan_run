
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CtaButtonProps = {
    text?: string;
    highlightText?: string;
}

const CtaButton = ({ text = "Seguimi su", highlightText = "STRAVA" }: CtaButtonProps) => {
    return (
        <div className="py-16 px-4 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-runner-light-pink/5 to-transparent -z-10"></div>
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-runner-dark-blue to-runner-purple bg-clip-text text-transparent">Unisciti alla mia avventura di
                    corsa</h2>

                <p className="text-gray-600 mb-8">Segui i miei progressi, scopri i miei percorsi preferiti e condividi
                    la passione per la corsa</p>
                <Button
                    className="bg-gradient-to-r from-runner-orange to-runner-purple hover:from-runner-purple hover:to-runner-orange text-white rounded-full px-8 py-6 h-auto text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                    onClick={() => window.open('https://www.strava.com/athletes/70185070"', '_blank')}
                >
                    {text} {highlightText && <span className="font-bold ml-1">{highlightText}</span>}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                </Button>
            </div>
        </div>
    );
};

export default CtaButton;
