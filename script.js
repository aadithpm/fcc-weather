
$(document).ready(function() {
	
	function getLoc()
	{
		$.getJSON('http://ipinfo.io', function(data) {
  						
  		console.log(data)
		
		});
	}

	var positionLat;
	var positionLong;
	getLoc();

});