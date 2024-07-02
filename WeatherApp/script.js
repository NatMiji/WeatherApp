document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

function getWeather(city) {
    // Use a placeholder for coordinates (latitude and longitude) for now
    // In a real app, you'd convert the city name to coordinates using another API
    const lat = 40.7128; // Placeholder for New York City's latitude
    const lon = -74.0060; // Placeholder for New York City's longitude

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weatherDisplay');
            if (!data.current_weather) {
                weatherDisplay.innerHTML = `<p>Weather data not available</p>`;
            } else {
                weatherDisplay.innerHTML = `
                    <h2>Weather for Coordinates (${lat}, ${lon})</h2>
                    <p>${data.current_weather.weathercode}</p>
                    <p>Temperature: ${data.current_weather.temperature}°C</p>
                    <p>Wind Speed: ${data.current_weather.windspeed} m/s</p>
                `;
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}
