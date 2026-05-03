// Simple script to periodically refresh or animate content if needed
// For digital signage, we might want to cycle colors or update a clock

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World Signage App Loaded');

    const colors = ['#ff4b2b', '#ff416c', '#ff0000'];
    let colorIndex = 0;
    const greeting = document.getElementById('greeting');
    const infoText = document.getElementById('info-text');

    // Subtle color shift every 5 seconds
    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        greeting.style.transition = 'color 2s ease-in-out';
        greeting.style.color = colors[colorIndex];
    }, 5000);

    // Update time every second
    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const dateString = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' });
        infoText.textContent = `${dateString} | ${timeString}`;
    };

    updateTime();
    setInterval(updateTime, 1000);
});
