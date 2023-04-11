import React, { useState } from 'react'

function BgColor() {
    const [bgclr, setColor] = useState("");

    const handleClick = (color) => {
        localStorage.setItem('color', color);
        setColor(color);
    };

    return (
        <div style={{ backgroundColor: localStorage.getItem('color'), height: '100vh' }}>
            <button onClick={() => handleClick('red')}>Red</button>
            <button onClick={() => handleClick('yellow')}>Yellow</button>
            <button onClick={() => handleClick('Blue')}>Blue</button>
        </div>
    )
}

export default BgColor
