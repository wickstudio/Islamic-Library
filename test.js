const { getMorningAdkar, getEveningAdkar, getNightAdkar } = require('./src/adkar');
const { getPrayerTimes } = require('./src/prayerTimes');

async function test() {
  try {
    const morningAdkar = await getMorningAdkar();
    console.log('Morning Adkar:', morningAdkar);

    const eveningAdkar = await getEveningAdkar();
    console.log('Evening Adkar:', eveningAdkar);

    const nightAdkar = await getNightAdkar();
    console.log('Night Adkar:', nightAdkar);

    
    const prayerTimes = await getPrayerTimes(51.5074, -0.1278);
    console.log('Prayer Times:', prayerTimes);
  } catch (error) {
    console.error(error);
  }
}

test();
