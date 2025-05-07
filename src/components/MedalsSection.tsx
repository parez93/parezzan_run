
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Medal } from 'lucide-react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/not_used/avatar.tsx";

const medals = [
    {
        id: 1,
        title: "Rovigo in Love - Half Marathon",
        date: "09 Febbraio 2025",
        achievement: "Completata",
        time: "2:05:18",
        category: "Mezza Maratona",
        type: "silver",
        url: "/src/assets/medals/rovigo-in-love.jpg"
    },
    {
        id: 2,
        title: "Marcia del giocattolo",
        date: "08 Dicembre 2024",
        achievement: "Personal Best",
        time: "49:58",
        category: "10K",
        type: "gold",
        url: "MG"
    },
    {
        id: 3,
        title: "Cremona HalfMarathon",
        date: "20 Ottobre 2024",
        achievement: "Personal Best",
        time: "1:59:26",
        category: "Mezza Maratona",
        type: "gold",
        url: "/src/assets/medals/cremona.jpg"
    },
    {
        id: 4,
        title: "Trento Half Marathon",
        date: "06 Ottobre 2024",
        achievement: "Completata",
        time: "2:06:22",
        category: "Mezza Maratona",
        type: "silver",
        url: "/src/assets/medals/trento.jpg"

    },
    {
        id: 5,
        title: "Bologna Marathon - 21K",
        date: "03 Marzo 2024",
        achievement: "Completata",
        time: "2:18:33",
        category: "Mezza Maratona",
        type: "bronze",
        url: "BO"
    },
    {
        id: 6,
        title: "Romeo&Giulietta Run Half Marathon",
        date: "11 Febbraio 2024",
        achievement: "1° mezza maratona",
        time: "2:32:34",
        category: "Mezza Maratona",
        type: "bronze",
        url: "VR"
    }
];

const MedalsSection = () => {
    return (
        <section id="medals-section" className="py-16 px-4 bg-gradient-to-br from-runner-light-pink/10 to-runner-dark-blue/5">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-runner-dark-blue mb-12">
                    Alcune delle <span className="text-runner-orange">Medaglie</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" itemScope itemType="https://schema.org/ItemList">
                    <meta itemProp="numberOfItems" content="3" />
                    {medals.map((medal, index) => (
                        <Card
                            key={medal.id}
                            className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 hover:translate-y-[-5px] bg-white/80 backdrop-blur-sm"
                            itemScope
                            itemType="https://schema.org/SportsEvent"
                            itemProp="itemListElement"
                        >
                            <meta itemProp="position" content={`${index + 1}`} />
                            <div className={`h-2 ${
                                medal.type === "gold" ? "bg-gradient-to-r from-yellow-300 to-yellow-500" :
                                    medal.type === "silver" ? "bg-gradient-to-r from-gray-300 to-gray-400" :
                                        "bg-gradient-to-r from-amber-600 to-amber-700"
                            }`} />
                            <CardHeader className="relative pb-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl font-bold" itemProp="name">{medal.title}</CardTitle>
                                        <p className="text-sm text-gray-500" itemProp="startDate">{medal.date}</p>
                                    </div>
{/*                                    {medal.type === "gold" ? (
                                        <Award className="w-10 h-10 text-yellow-500" aria-label="Medaglia d'oro" />
                                    ) : (

                                        <Medal className="w-10 h-10 text-gray-500" aria-label="Medaglia" />
                                    )}*/}
                                        <Avatar className="w-10 h-10 text-yellow-500" aria-label="Medaglia immagine">
                                            <AvatarImage src={medal.url} alt="Medaglia" />
                                            <AvatarFallback>{medal.url}</AvatarFallback>
                                        </Avatar>

                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Risultato</span>
                                        <Badge className={`${
                                            medal.type === "gold" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" :
                                                medal.type === "silver" ? "bg-gray-100 text-gray-800 hover:bg-gray-200" :
                                                    "bg-amber-100 text-amber-800 hover:bg-amber-200"
                                        }`} itemProp="description">
                                            {medal.achievement}
                                        </Badge>
                                    </div>
                                    <div className="flex justify-between items-center" itemProp="duration">
                                        <span className="text-sm text-gray-600">Tempo</span>
                                        <span className="font-medium">{medal.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Categoria</span>
                                        <span className="text-sm font-medium" itemProp="sport">{medal.category}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <blockquote className="text-gray-600 italic">
                        "Ogni medaglia racconta una storia di determinazione e impegno"
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default MedalsSection;
