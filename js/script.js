

function initialize() {
var location = new google.maps.LatLng(44.841527,20.373976)
  var mapProp = {
    
    center: location, 
    zoom:17,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  addMarker(map, location,"MN Primat")
}

function addMarker (map, location, title){
	var markerOptn = {
		position: location,
		map: map,
		title: title,
	};

	var marker = new google.maps.Marker(markerOptn);

}
google.maps.event.addDomListener(window, 'load', initialize);





