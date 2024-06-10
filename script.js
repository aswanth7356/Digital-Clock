document.addEventListener('DOMContentLoaded', function() {
    const clock = document.getElementById('clock');
    const toggleButton = document.getElementById('toggleButton');
    const toggleIcon = document.getElementById('toggleIcon');
    let isNightMode = false;

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    function toggleDayNightMode() {
        isNightMode = !isNightMode;
        document.body.classList.toggle('night', isNightMode);
        document.body.classList.toggle('day', !isNightMode);

        if (isNightMode) {
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        } else {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        }
    }

    toggleButton.addEventListener('click', toggleDayNightMode);

    setInterval(updateClock, 1000);
    updateClock(); 
    document.body.classList.add('day'); 
});
