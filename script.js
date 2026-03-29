async function getWeather() {
    const city = document.getElementById("city").value;

    const res = await fetch(`/weather?city=${city}`);
    const data = await res.json();

    if (data.error) {
        document.getElementById("result").innerHTML = "❌ City not found";
        return;
    }

    document.getElementById("result").innerHTML = `
        <h2>${city}</h2>
        <p>🌡️ Temp: ${data.current_condition[0].temp_C} °C</p>
        <p>☁️ Weather: ${data.current_condition[0].weatherDesc[0].value}</p>
        <p>💧 Humidity: ${data.current_condition[0].humidity}%</p>
    `;
}