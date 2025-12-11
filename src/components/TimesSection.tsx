import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface RunTime {
    distance: string;
    time: string;
    event: string;
    date: string;
}

const runTimes: RunTime[] = [
    {
        distance: "5K",
        time: "25:06",
        event: "Marcia del giocattolo",
        date: "8 Dicembre 2024",
    },
    {
        distance: "10K",
        time: "48:08",
        event: "Trento HalfMarathon",
        date: "5 Ottobre 2025",
    },
    {
        distance: "Mezza Maratona",
        time: "1:44:26",
        event: "Trento HalfMarathon",
        date: "5 Ottobre 2025",
    },
    {
        distance: "Maratona",
        time: "3:57:4",
        event: "Verona Run Marathon",
        date: "16 Novembre 2025",
    }
];

const TimesSection = () => {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.8}}
            className="w-full py-16 px-4 bg-gradient-to-br from-runner-light-pink/10 to-runner-dark-blue/5 text-white"
        >
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-runner-dark-blue to-runner-purple bg-clip-text text-transparent">I miei tempi
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7, delay: 0.4}}
                        className="w-full overflow-hidden rounded-xl shadow-2xl"
                    >
                        <div className="overflow-x-auto bg-gradient-to-b from-indigo-900 to-indigo-800 text-white hover:border-indigo-700/30">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gradient-to-r from-runner-orange to-runner-purple hover:from-runner-purple hover:to-runner-orange  border-none">
                                        <TableHead className="text-white font-semibold py-5 px-6">DISTANZA</TableHead>
                                        <TableHead className="text-white font-semibold py-5 px-6">TEMPO</TableHead>
                                        <TableHead className="text-white font-semibold py-5 px-6">EVENTO</TableHead>
                                        <TableHead className="text-white font-semibold py-5 px-6">DATA</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {runTimes.map((run, index) => (
                                        <TableRow
                                            key={index}
                                            className={cn(
                                                "border-b border-indigo-700/30",
                                                index % 2 === 0 ? "bg-gray-700/50" : "bg-gray-800/50"
                                            )}
                                        >
                                            <motion.td
                                                initial={{opacity: 0, x: -20}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 0.3 + index * 0.15}}
                                                className="font-medium text-white py-4 px-6"
                                            >
                                                {run.distance}
                                            </motion.td>
                                            <motion.td
                                                initial={{opacity: 0, x: -20}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 0.4 + index * 0.15}}
                                                className="font-mono text-white py-4 px-6"
                                            >
                                                {run.time}
                                            </motion.td>
                                            <motion.td
                                                initial={{opacity: 0, x: -20}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 0.5 + index * 0.15}}
                                                className="text-white py-4 px-6"
                                            >
                                                {run.event}
                                            </motion.td>
                                            <motion.td
                                                initial={{opacity: 0, x: -20}}
                                                animate={{opacity: 1, x: 0}}
                                                transition={{delay: 0.6 + index * 0.15}}
                                                className="text-white py-4 px-6"
                                            >
                                                {run.date}
                                            </motion.td>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </motion.div>
                </div>
        </motion.section>
);
};

export default TimesSection;
