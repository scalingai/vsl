"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
    src?: string; // Optional for now, will default to a placeholder
    poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handlePause = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video group">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={src || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"} // Placeholder
                poster={poster}
                controls={isPlaying} // Show controls only when playing
                onPause={() => setIsPlaying(false)}
                onPlay={() => setIsPlaying(true)}
            />

            {/* Custom Play Button Overlay */}
            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer group-hover:bg-black/30 transition-all"
                    onClick={handlePlay}
                >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-transform transform group-hover:scale-110">
                        <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" fill="currentColor" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
