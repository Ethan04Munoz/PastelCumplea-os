function updateCandles() {
    const count = parseInt(document.getElementById("candle-count").value, 10);
    const candlesContainer = document.getElementById("candles");

    // Clear existing candles
    candlesContainer.innerHTML = "";

    // Add new candles
    for (let i = 0; i < count; i++) {
        const candle = document.createElement("div");
        candle.className = "candle";
        candlesContainer.appendChild(candle);
    }
}

function blowCandles() {
    const style = document.createElement('style');
    document.head.appendChild(style);

    //1: Add the animation of stagger and strecht the flame
    style.sheet.insertRule(`
        .candle:before {
            width: 6px;
            height: 12px;
            top: -14px;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 50%;
            animation: flicker 0.3s infinite alternate;
        }
    `, 0);

    // Animation of stagger and strecht
    style.sheet.insertRule(`
        @keyframes flicker {
            0% { transform: translateX(-50%) scale(1, 1); }
            50% { transform: translateX(-48%) scale(1.2, 1.3); }
            100% { transform: translateX(-52%) scale(0.8, 0.5); }
        }
    `, 1);

    //2: Turn off the candle
    setTimeout(() => {
        style.sheet.insertRule(`
            .candle:before {
                width: 0;
                height: 0;
                background-color: transparent;
                animation: none;
            }
        `, 2);
    }, 1200); 
}


// Initialize with default candle count
updateCandles();
