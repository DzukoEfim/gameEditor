export const main = (ctx: CanvasRenderingContext2D) => {
    let time: null | number = 0;

    const draw = (timestamp: number) => {
        if (!time) time = timestamp;
        const canvasWrapper = document.querySelector<HTMLDivElement>('#canvas-box');

        const canvasWrapperSize = canvasWrapper?.getBoundingClientRect() ?? {
            width: 0,
            height: 0,
        };

        ctx.clearRect(0, 0, canvasWrapperSize.width, canvasWrapperSize.height);
        ctx.fillRect(0, 0, canvasWrapperSize.width, canvasWrapperSize.height);

        const timePassed = timestamp - time;
        if (timePassed > 1000) {
            time = null;
        }
        requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
};
