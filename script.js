$(document).ready(function() {

	var lat,long;

	$.getJSON('http://ipinfo.io', function(data) {
			
				var latAndLongStr;			
				console.log(data);

				$("#city").text(data.city);
				$("#region").text(data.region);
				$("#country").text(data.country);
				var latAndLong = data.loc.split(',');
				latAndLongStr = "Latitude: "+latAndLong[0]+" || "+"Longitude: "+latAndLong[1];
				console.log(latAndLongStr);

				lat = latAndLong[0];
				long = latAndLong[1];

				new jBox('Tooltip',
				{
					attach:'.tooltip',
					title:''
				});
				var latAndLongDetails = $(".fa-question").jBox("Tooltip");
				latAndLongDetails.setTitle(latAndLongStr).setContent("");

			console.log(lat+"||"+long);
			$.ajax({
				url: 'https://simple-weather.p.mashape.com/weatherdata?lat='+lat+"&"+"lng="+long,
				headers:
				{
					Accept: "application/json",
					"X-Mashape-Key": "hYyBeSWpOumsh22GYWeUikp3Dryvp1P0isRjsnzi01kS3swRXr"
				},
				success:function(response)
				{
					var weather=JSON.parse(response);
					//var forecast=weather.query.results.channel.item.forecast[0];
					console.log(response);
					//console.log(forecast);
					$("#date-and-day").text(weather.query.results.channel.item.forecast[0].day+", "+weather.query.results.channel.item.forecast[0].date);
					$("#degree-low").text(weather.query.results.channel.item.forecast[0].low);
					$("#degree-high").text(weather.query.results.channel.item.forecast[0].high);
					$("#weather-type").text(weather.query.results.channel.item.forecast[0].text);
				}
				
			});
		});

});
