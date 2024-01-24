const { getMorningAdkar, getEveningAdkar, getNightAdkar } = require('../src/adkar');

describe('Adkar Functions', () => {
    test('fetches Morning Adkar successfully', async () => {
        const data = await getMorningAdkar();
        expect(data).toBeDefined();
    });

    test('fetches Evening Adkar successfully', async () => {
        const data = await getEveningAdkar();
        expect(data).toBeDefined();
    });

    test('fetches Night Adkar successfully', async () => {
        const data = await getNightAdkar();
        expect(data).toBeDefined();
    });
});

