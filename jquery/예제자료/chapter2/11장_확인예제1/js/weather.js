(function(){
	$(function(){
	    
	});
	
	var imageArr = new Array(
						    "tornado.png",
						    "tropical_storm.png",
						    "hurricane.png",
						    "severe_thunderstorms.png",
						    "thunderstorms.png",
						    "mixed_rain_and_snow.png",
						    "mixed_rain_and_sleet.png",
						    "mixed_snow_and_sleet.png",
						    "freezing_drizzle.png",
						    "drizzle.png",
							
						    "freezing_rain.png",
						    "showers.png",
						    "showers.png",
							"snow_flurries.png",
							"light_snow_showers.png",
							"blowing_snow.png",
							"snow.png",
							"hail.png",
							"sleet.png",
							"dust.png",
							
							"foggy.png",
							"haze.png",
							"smoky.png",
							"blustery.png",
							"windy.png",
							"cold.png",
							"cloudy.png",
							"mostly_cloudy.png",
							"mostly_cloudy.png",
							"partly_cloudy.png",
							
							"partly_cloudy.png",
							"clear.png",
							"sunny.png",
							"fair.png",
							"fair.png",
							"mixed_rain_and_hail.png",
							"hot.png",
							"isolated_thunderstorms.png",
							"scattered_thunderstorms.png",
							"scattered_thunderstorms.png",
							
							"scattered_showers.png",
							"heavy_snow.png",
							"scattered_snow_showers.png",
							"heavy_snow.png",
							"partly_cloudy.png",
							"thundershowers.png",
							"snow_showers.png",
							"isolated_thundershowers.png"												
							);
							
	var bgArr = new Array(
							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "snow.png",
							   "rain.png",
							   "snow.png",
							   "snow.png",
							   "rain.png",
							   
							   
							   "rain.png",
							   "rain.png",
							   "rain.png",
							   "snow.png",
							   "snow.png",
							   "snow.png",
							   "snow.png",
							   "rain.png",
							   "snow.png",
							   "cloudy.png",
							   
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   "cloudy.png",
							   
							   "cloudy.png",
							   "sunny.png",
							   "sunny.png",
							   "sunny.png",
							   "sunny.png",
							   "rain.png",
							   "sunny.png",
							   "rain.png",
							   "rain.png",
							   "rain.png",
							 											   
							   "rain.png",
							   "snow.png",
							   "snow.png",
							   "snow.png",
							   "cloudy.png",
							   "rain.png",
							   "snow.png",
							   "rain.png"
							   );
	
	function loadData(){
		var query = 'select item from weather.forecast where location="KSXX0037" and u="c"';
		var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";
		
		$.getJSON(url, function(data){
			
		});
	}
})(jQuery);