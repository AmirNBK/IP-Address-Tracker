test('fetch user data from api', async () => {
    try {
        const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=9c095da267384cf0a9fccc8c7cb83ec5`);
        expect(res.status).toBe(200);
        const data = await res.json();
        expect(data).toHaveProperty('ip');
        expect(data).toHaveProperty('country_name');
        expect(data).toHaveProperty('latitude');
        expect(data).toHaveProperty('longitude');
    } catch (error) {
        fail(`Fetch failed with error: ${error.message}`);
    }
});
