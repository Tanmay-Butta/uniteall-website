import React, { useEffect, useRef } from 'react';

const CursorSpotlight = () => {
    const spotlightRef = useRef(null);

    useEffect(() => {
        const updateSpotlight = (e) => {
            if (spotlightRef.current) {
                spotlightRef.current.style.background = `radial-gradient(200px circle at ${e.clientX}px ${e.clientY}px, rgba(14, 165, 233, 0.10), transparent 80%)`;
            }
        };

        window.addEventListener('mousemove', updateSpotlight);

        return () => {
            window.removeEventListener('mousemove', updateSpotlight);
        };
    }, []);

    return (
        <div
            ref={spotlightRef}
            className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
            style={{
                background: 'radial-gradient(200px circle at 50% 50%, rgba(14, 165, 233, 0.10), transparent 80%)',
            }}
        />
    );
};

export default CursorSpotlight;
