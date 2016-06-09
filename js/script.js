

$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  // var targetElem = document.querySelector("#d1");
  //targetElem.innerHTML ="dudu";
});


(function (global) {
function initialize() {
var location = new google.maps.LatLng(44.841527,20.373976)
  var mapProp = {
    
    center: location, 
    zoom:17,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
 //console.log( map.propValue('padding'));
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

var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
    };

var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}



google.maps.event.addDomListener(window, 'load', initialize);
})(window);
