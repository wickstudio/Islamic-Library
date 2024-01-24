const fetch = require('node-fetch');

async function fetchPrayerTimes(latitude, longitude, method = 2) {
    const url = `http://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=${method}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem fetching the prayer times:', error);
        throw error; // Re-throw the error for the caller to handle
    }
}

module.exports = {
    fetchPrayerTimes
};
