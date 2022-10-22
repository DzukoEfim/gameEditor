import {
    useRef, useEffect, memo, FC,
} from 'react';
import { main } from './canvas/';

type Props = {
    width: number,
    height: number
}

export const Canvas: FC<Props> = memo(({ width, height }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (context) {
            main(context);
        }
    }, []);

    return <canvas height={height} width={width} ref={canvasRef} />;
});
