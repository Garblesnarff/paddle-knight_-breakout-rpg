import { useEffect, useRef } from 'react';

export const useGameLoop = (callback: () => void, isRunning: boolean) => {
    const animationFrameId = useRef<number>(0);
    const callbackRef = useRef(callback);

    // Always keep the ref updated with the latest callback on every render.
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        const loop = () => {
            // The isRunning check inside the loop is an extra safeguard.
            if (!isRunning) {
                cancelAnimationFrame(animationFrameId.current);
                return;
            }
            // By calling the ref's current value, we always execute the latest
            // version of the callback, with the latest state in its closure.
            callbackRef.current();
            animationFrameId.current = requestAnimationFrame(loop);
        };

        if (isRunning) {
            // Resetting is not strictly needed with the ref pattern, but it's
            // good practice to ensure we don't have a huge time delta on resume.
            animationFrameId.current = requestAnimationFrame(loop);
        } else {
            cancelAnimationFrame(animationFrameId.current);
        }

        return () => {
            cancelAnimationFrame(animationFrameId.current);
        };
        // This effect hook now only depends on `isRunning`. The loop itself
        // is stable, and it dynamically pulls the latest callback from the ref.
    }, [isRunning]);
};
