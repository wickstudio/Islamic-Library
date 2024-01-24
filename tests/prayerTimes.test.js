const { fetchPrayerTimes } = require('../src/prayerTimes/prayerTimesService');

describe('Prayer Times Functionality', () => {
    // test for fetching prayer times
    test('should fetch prayer times for a specific location', async () => {
        const latitude = 51.5074; // London
        const longitude = -0.1278; // London
        const method = 2; // method number

        try {
            const data = await fetchPrayerTimes(latitude, longitude, method);
            expect(data).toBeDefined();
            expect(data.data.timings).toBeDefined();
            expect(data.data.date).toBeDefined();
        } catch (error) {
            // Handle errors that might occur during the API call
            console.error('Error fetching prayer times:', error);
        }
    });
});

