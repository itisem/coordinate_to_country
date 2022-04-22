#coordinate_to_country

This is a fork of [country-iso](https://github.com/simonepri/country-iso) with some bugfixes and additional features:

 * Enclaves and exclaves are now handled properly: the dataset used by `country-iso` doesn't handle polygons with holes in them, resulting in weird outputs such as the entirety of Lesotho being shown as a part of South Africa.
 * ISO 3166 alpha-2 codes are now also optionally supported.
 
Both of these are accomplished thanks to a new dataset I generated, [@osm_borders/maritime_10m](https://www.npmjs.com/package/@osm_borders/maritime_10m). Just like its predecessor, it originates from high-quality OpenStreetMap data, but with fixes for the aforementioned issues. For more details, see the [osm_borders](https://github.com/itisem/osm_borders) Github page.


# Installation and usage

This library can be installed using `npm install coordinate_to_country`

Querying a lat, lng pair is simple, with all queries returning an array of the countries which claim sovereignty over a given territory:

```javascript
	const lookup = require("coordinate_to_country");
	lookup(53.218620, 6.567365); // => ["NLD"]
```

You can also request the alpha-2 version of the ISO-3166 by passing the optional `isoA2 = true` parameter:

```javascript
	lookup(53.218620, 6.567365, true); // => ["NL"]
```

Disputed territories and coordinates not inside any country also work:
```javascript
	lookup(0, 0); // => []
	lookup(45.739518, 18.953996); // => ["SRB", "HRV"]
```

# Licence

This project is licensed under the MIT License.

This library was created by Emily Nagy ([itisem](https://github.com/itisem/)) based on `country-iso` by Simone Primarosa ([simonepri](https://github.com/simonepri/)).