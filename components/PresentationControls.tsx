'use client';

interface PresentationControlsProps {
  totalDuration: number;
  currentScene: number;
  totalScenes: number;
  scenes: string[];
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onRestart: () => void;
  onSceneSelect: (index: number) => void;
  onTimelineSeek: (time: number) => void;
  onSpeedChange: (speed: number) => void;
  currentTime: number;
  playbackSpeed: number;
}

export default function PresentationControls({
  totalDuration,
  currentScene,
  totalScenes,
  scenes,
  isPlaying,
  onPlayPause,
  onNext,
  onPrevious,
  onRestart,
  onSceneSelect,
  onTimelineSeek,
  onSpeedChange,
  currentTime,
  playbackSpeed
}: PresentationControlsProps) {
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * totalDuration;
    onTimelineSeek(newTime);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-sm text-white p-6">
      {/* Main Controls */}
      <div className="flex items-center justify-between mb-4">
        
        {/* Left: Scene Info */}
        <div className="flex-1">
          <div className="text-lg font-semibold">
            Scene {currentScene + 1}/{totalScenes}: {scenes[currentScene]}
          </div>
          <div className="text-sm text-gray-300">
            {formatTime(currentTime)} / {formatTime(totalDuration)}
          </div>
        </div>

        {/* Center: Playback Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onRestart}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            title="Restart"
          >
            ⏮️
          </button>
          
          <button
            onClick={onPrevious}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            title="Previous Scene"
          >
            ⏪
          </button>
          
          <button
            onClick={onPlayPause}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors text-xl"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          
          <button
            onClick={onNext}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            title="Next Scene"
          >
            ⏩
          </button>
        </div>

        {/* Right: Speed Control */}
        <div className="flex-1 flex justify-end items-center space-x-2">
          <span className="text-sm">Speed:</span>
          <select
            value={playbackSpeed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="bg-gray-700 text-white rounded px-2 py-1 text-sm"
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>
        </div>
      </div>

      {/* Timeline */}
      <div 
        className="w-full h-2 bg-gray-700 rounded-full cursor-pointer mb-4"
        onClick={handleTimelineClick}
      >
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${(currentTime / totalDuration) * 100}%` }}
        />
      </div>

      {/* Scene Selector */}
      <div className="flex space-x-2 overflow-x-auto">
        {scenes.map((scene, index) => (
          <button
            key={index}
            onClick={() => onSceneSelect(index)}
            className={`px-3 py-2 rounded text-sm whitespace-nowrap transition-colors ${
              index === currentScene
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {index + 1}. {scene}
          </button>
        ))}
      </div>
    </div>
  );
}