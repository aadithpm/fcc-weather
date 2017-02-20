var coords={};

function getLoc() {

		$.getJSON('http://ipinfo.io', function(data) {
			
			var lat,long;			
			console.log(data);

			$("#city").text(data.city);
			$("#region").text(data.region);
			$("#country").text(data.country);
			var latAndLong = data.loc.split(',');
			$("#lat").text(latAndLong[0]);
			$("#long").text(latAndLong[1]);
		});

}

$(document).ready(function() {

	getLoc();

	$(".place").click(function()
	{
		$("#coords").animate(
			{visibility:"visible"},
			400);
	});

});
