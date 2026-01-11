"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function TimedButton() {
    const [progress, setProgress] = useState(0);
    const [unlocked, setUnlocked] = useState(false);
    const totalTime = 60; // seconds

    useEffect(() => {
        const startTime = Date.now();

        // Checkpoint logic
        // 0-10s: 0-30%
        // 10-20s: 30-50%
        // 20-30s: 50-70%
        // 30-90s: 70-100%

        const updateProgress = () => {
            const elapsed = (Date.now() - startTime) / 1000;

            let newProgress = 0;

            if (elapsed <= 10) {
                // 0 to 10s -> 0 to 30%
                newProgress = (elapsed / 10) * 30;
            } else if (elapsed <= 20) {
                // 10 to 20s -> 30 to 50%
                // (elapsed - 10) goes from 0 to 10
                newProgress = 30 + ((elapsed - 10) / 10) * 20;
            } else if (elapsed <= 30) {
                // 20 to 30s -> 50 to 70%
                newProgress = 50 + ((elapsed - 20) / 10) * 20;
            } else if (elapsed <= totalTime) {
                // 30 to 90s -> 70 to 100%
                // duration 60s
                newProgress = 70 + ((elapsed - 30) / 60) * 30;
            } else {
                newProgress = 100;
                setUnlocked(true);
            }

            setProgress(Math.min(newProgress, 100));

            if (elapsed < totalTime) {
                requestAnimationFrame(updateProgress);
            } else {
                setUnlocked(true);
            }
        };

        const frameId = requestAnimationFrame(updateProgress);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <div className="w-full max-w-lg mx-auto mt-2">
            {/* Main Button Container */}
            <div
                className={`group relative overflow-hidden rounded-xl transition-all duration-500 ease-out p-[1px]
            ${unlocked
                        ? "shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.6)] cursor-pointer scale-100 hover:scale-[1.01]"
                        : "shadow-sm"
                    }
        `}
            >
                {/* Border Gradient Layer for Unlocked State */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${unlocked ? "opacity-100" : ""} bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500`} />

                {/* Inner Content Container */}
                <div className={`relative h-full w-full rounded-xl overflow-hidden transition-all duration-500
                    ${unlocked
                        ? "bg-transparent" // Let gradient show through (or we can use the gradient directly)
                        : "bg-white/80 backdrop-blur-xl border border-white/60"
                    }
                `}>

                    {/* Button Background & Progress (Locked) */}
                    {!unlocked && (
                        <>
                            {/* Base Background for locked */}
                            <div className="absolute inset-0 bg-gray-50/50" />

                            {/* Progress Bar (Smooth Fill) */}
                            {/* Progress Bar (Smooth Fill) */}
                            <motion.div
                                className={`absolute inset-0 border-r border-indigo-200/50 transition-all duration-1000
                                    ${progress >= 70
                                        ? "bg-gradient-to-r from-blue-300/90 via-indigo-300/90 to-purple-300/90"
                                        : "bg-gradient-to-r from-blue-100/80 via-indigo-100/80 to-purple-100/50"
                                    }
                                `}
                                style={{ width: `${progress}%` }}
                                transition={{ ease: "linear", duration: 0.1 }}
                            >
                                {/* Subtle shimmer effect on the leading edge */}
                                <div className="absolute top-0 right-0 bottom-0 w-px bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                            </motion.div>
                        </>
                    )}

                    {/* Button Background (Unlocked) - Overlay */}
                    {unlocked && (
                        <>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                            {/* Subtle animated sparkles/grain */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                            {/* Shining effect moving across */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                initial={{ x: "-100%" }}
                                animate={{ x: "200%" }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatDelay: 0.5 }}
                            />

                            {/* Floating Orbs for "Particle" feel */}
                            <motion.div
                                className="absolute -top-2 left-10 w-1 h-1 bg-white rounded-full blur-[1px]"
                                animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                                className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-yellow-200 rounded-full blur-[1px]"
                                animate={{ y: [0, -15, 0], opacity: [0, 1, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                            />
                        </>
                    )}


                    {/* Content Layer */}
                    <div className="relative z-10 px-6 py-3 flex flex-col items-center justify-center text-center">
                        {unlocked ? (
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-lg font-bold text-white tracking-wide drop-shadow-sm flex items-center gap-2">
                                    Aplicar ahora
                                </span>
                                <svg className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center gap-2 text-gray-800 font-semibold text-base">
                                    <div className="p-1 bg-gray-200/50 rounded-full">
                                        <Lock className="w-3.5 h-3.5 text-gray-500" />
                                    </div>
                                    <span className="tracking-tight">
                                        {progress >= 70 ? "Casi desbloqueado..." : "Acceso Bloqueado"}
                                    </span>
                                </div>
                                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                    {progress >= 70 ? "Unos segundos más" : "Mira el video para desbloquear"}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Scarcity Text - Always Visible */}
            <div className="mt-4 px-4 text-center opacity-90">
                <p className="text-gray-500 text-xs font-medium leading-relaxed max-w-sm mx-auto">
                    Debido a la intensidad de desarrollo, solo podemos dar onboarding 5 negocios por mes.
                </p>
                <p className="text-gray-900 font-bold text-xs mt-1">
                    Solo quedan <span className="text-rose-500">2 lugares</span> para enero.
                </p>
            </div>
        </div>
    );
}
