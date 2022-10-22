import { useRef, useEffect, memo } from 'react';
import { main } from './canvas/';

export const Canvas = memo(() => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (context) {
            main(context);
        }
    }, []);

    return <canvas ref={canvasRef} />;
});
