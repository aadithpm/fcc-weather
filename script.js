$(document).ready(function() {

	$.getJSON('http://ipinfo.io', function(data) {
			
			var latAndLongStr;			
			console.log(data);

			$("#city").text(data.city);
			$("#region").text(data.region);
			$("#country").text(data.country);
			var latAndLong = data.loc.split(',');
			latAndLongStr = "Latitude: "+latAndLong[0]+" || "+"Longitude: "+latAndLong[1];
			console.log(latAndLongStr);
			new jBox('Tooltip',
			{
				attach:'.tooltip',
				title:''
			});
			var latAndLongDetails = $(".fa-question").jBox("Tooltip");
			latAndLongDetails.setTitle(latAndLongStr).setContent("");
		});
});
