'use client';

import { useEffect, useRef } from 'react';

interface PresentationCanvasProps {
  currentScene: number;
  isPlaying: boolean;
  currentTime: number;
}

export default function PresentationCanvas({ currentScene, isPlaying, currentTime }: PresentationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scenes = [
    { title: '市場機会可視化', color: '#1a365d', subtitle: 'Market Opportunity Analysis' },
    { title: 'BREXA衝撃分析', color: '#2d3748', subtitle: 'BREXA Impact Assessment' },
    { title: 'AI革命実証', color: '#1a202c', subtitle: 'AI Revolution Demonstration' },
    { title: '東南アジア戦略', color: '#2a4e7c', subtitle: 'Southeast Asia Strategy' },
    { title: '収益変革予測', color: '#2c5530', subtitle: 'Revenue Transformation' },
    { title: 'パートナーシップビジョン', color: '#553c9a', subtitle: 'Partnership Vision' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Clear canvas
    ctx.fillStyle = scenes[currentScene].color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw main title
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(scenes[currentScene].title, canvas.width / 2, canvas.height / 2 - 50);

    // Draw subtitle
    ctx.font = '32px Arial';
    ctx.fillStyle = '#e2e8f0';
    ctx.fillText(scenes[currentScene].subtitle, canvas.width / 2, canvas.height / 2 + 20);

    // Draw AIKODA branding
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#60a5fa';
    ctx.textAlign = 'right';
    ctx.fillText('AIKODA Intelligence Platform', canvas.width - 50, 50);

    // Draw progress indicator
    const progress = (currentScene + 1) / scenes.length;
    const barWidth = 400;
    const barHeight = 8;
    const barX = (canvas.width - barWidth) / 2;
    const barY = canvas.height - 100;

    // Progress bar background
    ctx.fillStyle = '#4a5568';
    ctx.fillRect(barX, barY, barWidth, barHeight);

    // Progress bar fill
    ctx.fillStyle = '#60a5fa';
    ctx.fillRect(barX, barY, barWidth * progress, barHeight);

    // Scene indicators
    const dotSize = 12;
    const dotSpacing = barWidth / (scenes.length - 1);
    for (let i = 0; i < scenes.length; i++) {
      const dotX = barX + (i * dotSpacing);
      const dotY = barY + barHeight / 2;
      
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotSize / 2, 0, 2 * Math.PI);
      ctx.fillStyle = i === currentScene ? '#fbbf24' : '#718096';
      ctx.fill();
    }

    // Animation effects when playing
    if (isPlaying) {
      const time = currentTime % 4; // 4-second cycle
      const opacity = 0.3 + 0.2 * Math.sin(time * Math.PI);
      
      ctx.fillStyle = `rgba(96, 165, 250, ${opacity})`;
      ctx.fillRect(0, 0, canvas.width, 5); // Top accent
      ctx.fillRect(0, canvas.height - 5, canvas.width, 5); // Bottom accent
    }

  }, [currentScene, isPlaying, currentTime]);

  const handleResize = () => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: scenes[currentScene].color }}
    />
  );
}