import { Box } from '@mui/system';
import {
    MouseEventHandler, useEffect, useRef, useState,
} from 'react';
import { Canvas } from './Canvas';

export const Playground = () => {
    const [size, setSize] = useState({ x: 300, y: 150 });
    const canvasBoxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (canvasBoxRef.current) {
            const position = canvasBoxRef.current.getBoundingClientRect();

            setSize({ x: position.x, y: position.y });
        }
    }, []);

    const handler: MouseEventHandler<HTMLDivElement> = (mouseDownEvent) => {
        const startSize = size;
        const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

        const onMouseMove = (mouseMoveEvent: MouseEvent) => {
            setSize(() => ({
                x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
                y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
            }));
        };

        const onMouseUp = () => {
            document.body.removeEventListener('mousemove', onMouseMove);
        };

        document.body.addEventListener('mousemove', onMouseMove);
        document.body.addEventListener('mouseup', onMouseUp, { once: true });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box
                style={{
                    width: size.x,
                    height: size.y,
                }}
                sx={{
                    position: 'relative',
                }}
                id="canvas-box"
                ref={canvasBoxRef}
            >
                <Box
                    sx={{ position: 'absolute', left: 0, top: 0 }}
                    component="button"
                >
                  resize
                </Box>
                <Box
                    sx={{ position: 'absolute', right: 0, top: 0 }}
                    component="button"
                >
                  resize
                </Box>
                <Box
                    sx={{ position: 'absolute', left: 0, bottom: 0 }}
                    component="button"
                >
                  resize
                </Box>
                <Box
                    sx={{ position: 'absolute', right: 0, bottom: 0 }}
                    component="button"
                    onMouseDown={handler}

                >
                  resize
                </Box>
                <Canvas width={size.x} height={size.y} />
            </Box>
        </Box>
    );
};
