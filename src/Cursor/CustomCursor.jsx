import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <div>
            <div className="cursor main-circle" style={{ left: position.x, top: position.y }}></div>
            <div className="cursor trailing-circle" style={{ left: position.x, top: position.y }}></div>
        </div>
    );
};

export default CustomCursor;
