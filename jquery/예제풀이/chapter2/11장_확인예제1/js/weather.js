/*
안동 KSXX0001 안양 KSXX0002
창원 KSXX0003 제주 KSXX0004
진해 KSXX0005 천안 KSXX0006
청주 KSXX0007 해남 KSXX0008
인천 KSXX0009 이리 KSXX0010
강릉 KSXX0011 김천 KSXX0012
군산 KSXX0013 광주 KSXX0014
마산 KSXX0015 밀양 KSXX0016
목포 KSXX0017 오산 KSXX0018
포항 KSXX0019 벌교 KSXX0020
부산 KSXX0021 서울 KSXX0022
속초 KSXX0023 성남 KSXX0024
수원 KSXX0025 대구 KSXX0026
대전 KSXX0027 위성 KSXX0028
울산 KSXX0029 왜관 KSXX0030
여수 KSXX0031 속초 KSXX0032
철원 KSXX0033 대관령 KSXX0034
춘천 KSXX0035 동해 KSXX0036
서울 KSXX0037 원주 KSXX0038
울릉도 KSXX0039 영월 KSXX0041
서산 KSXX0042 울진 KSXX0043
추풍령 KSXX0044 포항 KSXX0045
군산 KSXX0046 전주 KSXX0047
마산 KSXX0048 광주 KSXX0049
부산 KSXX0050 충무 KSXX0051
완도 KSXX0052 제주 KSXX0053
서귀포 KSXX0054 진주 KSXX0055
*/

(function(){
	$(function(){
		loadData();
		insertData();
	});
	
	var weatherData;
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
		
		$.ajaxSetup({
			async:false
		});
		
		$.getJSON(url, function(data){
		    console.log(data);
			weatherData = data;
		});
	}
	
	function insertData(){
		var afterDayEl = $('#header > .afterDay');
		var todayEl = $('#header > .today');
		var todayTemp = todayEl.find('> .temp > .c');
		var todayDate = todayEl.find('> .date');
		var todayWeatherIcon = afterDayEl.find('> .weather_icon > img');
		var iconRoot = 'img/weather_icon/';
		var bgRoot = 'img/weather_bg/';
		var secondHighTemp = afterDayEl.find('> .dateweek > .number > .high');
        var secondLowTemp = afterDayEl.find('> .dateweek > .number > .low');
        var secondDate = afterDayEl.find('> .dateweek > .datecontent');
        var thirdHighTemp = afterDayEl.find('> .dateweek > .number02 > .high');
        var thirdLowTemp = afterDayEl.find('> .dateweek > .number02 > .low');
        var thirdDate = afterDayEl.find('> .dateweek > .datecontent02');
        
		var condition = weatherData.query.results.channel.item.condition;
		var forecast = weatherData.query.results.channel.item.forecast;
		
		todayTemp.text(condition.temp);
		todayDate.text(forecast[0].day + ' ,' + forecast[0].date);
		var todayCode = parseInt(forecast[0].code);
		var iconURL = iconRoot + imageArr[todayCode];
		todayWeatherIcon.attr('src', iconURL);
		
		var bgURL = bgRoot + bgArr[todayCode];
        $('#wrap').css('background-image','url(' + bgURL + ')');
        
		secondHighTemp.text(forecast[1].high);
		secondLowTemp.text(forecast[1].low);
		secondDate.text(forecast[1].date);
		
		thirdHighTemp.text(forecast[2].high);
		thirdLowTemp.text(forecast[2].low);
		thirdDate.text(forecast[2].date);
	}
	
})(jQuery);