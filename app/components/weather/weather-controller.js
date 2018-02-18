function WeatherController() {
	var weatherService = new WeatherService();
	var weatherElem = document.getElementById('weather')


	function drawWeather(weather) {
		var template = ``
		template += `
		<div class="col">
		    <h6>${weather.name}</h6>
			<h6>${(Math.round((weather.main.temp-273.15)*1.8))+32}&#176; F</h6>
			<p><img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" style="width:30px;height:30px;" alt="${weather.description}"></p>
			<p>High: ${(Math.round((weather.main.temp_max-273.15)*1.8))+32}&#176; F</p>
			<p>Low: ${(Math.round((weather.main.temp_min-273.15)*1.8))+32}&#176; F</p>
			<p><em>${weather.weather[0].description}</em></p>
		</div>

			`

		weatherElem.innerHTML = template

	}

	weatherService.getWeather(drawWeather)


}