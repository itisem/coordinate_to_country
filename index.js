const borders = require('@osm_borders/maritime_10m');
const lookup = require('geojson-geometries-lookup');

/**
 * @param  {Number}  lat   Latitude
 * @param  {Number}  lng   Longitude
 * @param  {Boolean} isoA2 Return the 2 letter code instead of the 3 letter code
 * @return {Array}        An array of the country codes that this coordinate is located in.
 */
function coordinateToCountry(lat, lng, isoA2 = false){
	isoA2 = isoA2 ? true : false;
	const search = new lookup(borders);
	const countries = search.getContainers({type: 'Point', coordinates: [lng, lat]});
	if(countries.features.length > 0){
		if(isoA2){
    		return countries.features.map(f => f.properties.isoA2);
    	}
    	else{
    		return countries.features.map(f => f.properties.isoA3);
    	}
  	}
  	return [];
}
module.exports = coordinateToCountry;