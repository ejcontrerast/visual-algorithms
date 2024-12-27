import React, { useRef, useEffect } from 'react';

interface VisualizationCanvasProps {
    data: number[];
}

const VisualizationCanvas: React.FC<VisualizationCanvasProps> = ({ data }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

        const barWidth = 20;
        const spacing = 5;
        const startX = 10;
        const maxHeight = canvas.height - 20;
        data.forEach((value, index) => {
            const barHeight = (value / Math.max(...data)) * maxHeight;
            ctx.fillStyle = 'blue';
            ctx.fillRect(startX + index * (barWidth + spacing), canvas.height - barHeight - 10, barWidth, barHeight);
        });
    }, [data]); // Re-render when data changes

    return <canvas ref={canvasRef} width={500} height={300} className="border border-gray-300"></canvas>;
};

export default VisualizationCanvas;