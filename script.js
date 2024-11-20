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

// Initialize with default candle count
updateCandles();
