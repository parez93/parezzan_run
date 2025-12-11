
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type StatProps = {
    value: string;
    unit?: string;
    label: string;
    color: string;
    progress: number;
    index: number;
}

const Stat = ({ value, unit, label, color, progress, index }: StatProps) => {
    return (
        <motion.div
            className="w-full md:w-1/2 lg:w-1/4 p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
        >
            <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                    <div className="flex flex-col">
                        <div className="mb-2">
                            <div className="flex items-baseline mb-1">
                                <span className={`text-4xl md:text-5xl font-bold ${color}`}>{value}</span>
                                {unit && <span className="text-sm text-gray-500 ml-1">{unit}</span>}
                            </div>
                            <p className="text-gray-600 font-medium">{label}</p>
                        </div>
                        <Progress value={progress} className="h-1.5 mt-2" />
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};

const StatsSection = () => {
    const stats = [
        { value: "13.935 ", unit: "KM", label: "camminati", color: "text-runner-dark-blue", progress: 55 },
        { value: "5.812", unit: "KM", label: "corsi", color: "text-runner-orange", progress: 90 },
        { value: "21", label: "gare disputate", color: "text-runner-purple", progress: 75 },
        { value: "9", label: "mezze maratone concluse", color: "text-green-600", progress: 40 }
    ];

    return (
        <section className="px-4">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-runner-dark-blue to-runner-purple bg-clip-text text-transparent">Il mio percorso in numeri</h2>
                    <p className="text-gray-500">da fine 2020, aggiornati al 11 dicembre 2025</p>
                </motion.div>

                <div className="flex flex-wrap -mx-3">
                    {stats.map((stat, index) => (
                        <Stat
                            key={stat.label}
                            value={stat.value}
                            unit={stat.unit}
                            label={stat.label}
                            color={stat.color}
                            progress={stat.progress}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
