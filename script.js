$(document).ready(function() {

	var lat,long;

	$.getJSON('https://ipinfo.io', function(data) {
			
				var latAndLongStr;			
				//console.log(data);

				$("#city").text(data.city);
				$("#region").text(data.region);
				$("#country").text(data.country);
				var latAndLong = data.loc.split(',');
				latAndLongStr = "Latitude: "+latAndLong[0]+" || "+"Longitude: "+latAndLong[1];
				//console.log(latAndLongStr);

				lat = latAndLong[0];
				long = latAndLong[1];

				new jBox('Tooltip',
				{
					attach:'.tooltip',
					title:''
				});
				var latAndLongDetails = $("#coordDetails").jBox("Tooltip");
				latAndLongDetails.setTitle(latAndLongStr).setContent("");

			//console.log(lat+"||"+long);
			$.ajax({
				url: 'https://simple-weather.p.mashape.com/weatherdata?lat='+lat+"&"+"lng="+long,
				headers:
				{
					Accept: "application/json",
					"X-Mashape-Key": "hYyBeSWpOumsh22GYWeUikp3Dryvp1P0isRjsnzi01kS3swRXr"
				},
				success:function(response)
				{
					var forecast=JSON.parse(response).query.results.channel.item.forecast[0];
					//console.log(forecast);
					$("#date-and-day").text(forecast.day+", "+forecast.date);
					$("#degree-low").text(forecast.low);
					$("#degree-high").text(forecast.high);
					$("#weather-type").text(forecast.text);
					$(".day").animate({opacity:1},500);
					$(".temperature").animate({opacity:1},700);
					$(".forecast").animate({opacity:1},900);
				}
				
			});
		});
	$("footer button").click(function()
                   {
                    window.open
                    ("http://github.com/aadithpm","_blank_");
                    
                    });

	new jBox('Modal', {
		attach:"#about",
		title:"About the page",
		content:"This is a project made as part of the FreeCodeCamp development projects. The IPInfo API (http://ipinfo.io) was used to get location/coordinate details. fyhao's Weather API on Mashape (https://market.mashape.com/fyhao/weather-13) was used for the weather forecast data. Lastly, the pretty tooltip and this beautiful modal box was made with Stephan Wagner's jBox (https://stephanwagner.me/jBox/)",
		width:500
	});


});
