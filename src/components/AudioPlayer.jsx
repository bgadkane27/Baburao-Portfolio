import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        audioRef.current.volume = 0.3;
    }, []);

    return (
        <div className="fixed top-6 right-14 z-50">
            <div className="relative group">
                <button
                    onClick={toggleAudio}
                    className="bg-black-100 text-white px-4 py-2 rounded-full shadow-lg border"
                >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <span className="absolute top-10 right-1/2 translate-x-1/2 whitespace-nowrap text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    {isPlaying ? 'Pause Music' : 'Play Music'}
                </span>
            </div>
            <audio ref={audioRef} src="/audio/music.mp3" loop />
        </div>
    );
};

export default AudioPlayer;

