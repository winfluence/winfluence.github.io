
					L.mapbox.accessToken = 'pk.eyJ1IjoiamVmZnN0ZXJuIiwiYSI6IlAzRFFiN0EifQ.mNWvayrLEw9wULuq0sopyA';
var map = L.mapbox.map('map', 'shanabernstein.13fpji6n')
  .setView([40.296287, -29.882813], 2);

var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = {
    type: 'FeatureCollection',

    // This is an array of Map Point objects
    features: [
    
    {
        type: 'Feature',
        properties: {
            title: 'Sweden',
            description: 'Timber harvesting for pulp production threatens more than 2,000 animal and plant species',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [18.632812999999942, 65.658274]
        }
    },

 {
        type: 'Feature',
        properties: {
            title: 'Afganistan',
            description: 'The loss of natural vegetation results in soil erosion, causing sandstorms to submerge as many as 125 villages by 2016.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [67.709953,33.939110]
        }
 },
{
        type: 'Feature',
        properties: {
            title: 'Moscow',
            description: '50% of all water and 75% of all surface water is polluted.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [37.617300,55.755826]
        }
},
{
        type: 'Feature',
        properties: {
            title: 'Argentina',
            description: '16,288,000 ha (hectare) of forest cover has been lost between 1980 and 2000.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-63.616672,-38.416097]
        }
		},	

    {
        type: 'Feature',
        properties: {
            title: 'Mexico',
            description: '6,400 people die each year due to air pollution.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-102.552784,23.634501]
        }
    },
    {
        type: 'Feature',
        properties: {
            title: 'Atlantic Ocean',
            description: 'Nearly half of all ocean pollution comes from activities that take place on land, such as sewage, industrial and agricultural runoff, garbage dumping, and chemical spills.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-28.673147,-14.599413]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'India',
            description: 'Approximately 80% of urban waste is dumped into River Ganges.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [78.962880,20.593684]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Pacific Ocean',
            description: 'Over one million seabirds are killed by ocean pollution each year. Three hundred thousand dolphins and porpoises die each year as a result of becoming entangled in discarded fishing nets, among other items. One hundred thousand sea mammals are killed in the ocean by pollution each year.',

            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [124.5085,8.7832]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Venezuela',
            description: 'Venezuela has a 2.1 deforestation rate due to human activities.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-66.589730,6.423750]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Alaska',
            description: 'Thousands of cargo ships pass through Asian canals, braving the region’s hurricane-force winds, creating the risk of catastrophic spills.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-149.493673,64.200841]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Mongolia',
            description: 'The recent mining boom will lead to erosion, formation of sinkholes, loss of biodiversity, and contamination of soil, groundwater and surface water by chemicals from mining processes.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [103.846656,46.862496]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Poland',
            description: 'As of the mid-1990s, 75% of Polish forests have been damaged by airborne contaminants and acid rain.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [19.145136,51.919438]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Indian Ocean',
            description: '36% of damages to the Indian ocean comes from drains and rivers as waste and runoff from cities and industry between South America and Africa.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [81.826172,-33.137551]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Peru',
            description: 'Due to overexportation of natural resources, 46 mammal species, 64 bird species, and 653 plant species are endangered.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-75.015152,-9.189967]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Vancouver',
            description: 'Private vehicles account for 18% of smog-forming emissions and 31% of greenhouse gas emissions within the Metro Vancouver region.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-122.661486,45.638728]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'China',
            description: 'China is the largest producer of carbon dioxide, which is a major cause of global warming.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [104.195397,35.861660]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Australia',
            description: '58 species of mammals, 45 species of birds, and 1,871 species of plants are threatened.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [133.775136,-25.274398]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Egypt',
            description: 'Noise pollution levels in Cairo reach an average of 90 decibels (dB), and never drop below 70 dB.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [30.802498,26.820553]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'California',
            description: 'California is entering its fifth year of statewide drought.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-119.417932,36.778261]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Algeria',
            description: 'The Mediterranean Sea has also been contaminated by the oil industry, fertilizer runoff, and soil erosion.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [1.659626, 28.033886]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'New York',
            description: '10% of all children in New York City have a current diagnosis of asthma due to air pollution.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [ -74.005941,40.712784]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'England',
            description: 'The Great Smog disaster (1952) caused approximately 4,000 people to die from air pollution.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-1.174320,52.355518]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Texas',
            description: 'Water pollution had caused mercury levels to to dangerous levels, resulting in the contamination of many fish we consume.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-99.901813,31.968599]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Khabarovsk',
            description: '68% of Russian energy is produced through the usage of finite fossil fuels.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [135.066260,48.502731]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Toronto',
            description: 'Toronto contains more than 11.3 micrograms/cubic meter of air pollutants.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-79.383184,43.653226]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Geramany',
            description: 'Over 50% of German forests had been damaged by acid rain.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [10.451526,51.165691]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Iran',
            description: '80% of air pollution in Tehran is due to cars. The remaining 20% is due to factories and industry emissions.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [53.688046,32.427908]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Mali',
            description: 'Malian population consumes 6 million tons of wood per year for timber and fuel, causing 4,000 square kilometers of tree cover to be lost annually. This  ensures the destruction of all the savanna woodlands.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-3.996166,17.570692]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Brazil',
            description: ' The Amazon rain forest forest lost over 760,000 sq km by 2014 due to deforestation. ',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-51.925280,-14.235004]
        }
    },{
        type: 'Feature',
        properties: {
            title: 'Israel',
            description: '90% of the solid waste generated in the country is buried in primitive landfills which takes abnormally long periods of time to decompose.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [34.851612,31.046051]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Florida',
            description: 'Florida Keys coral reefs have declined 44% 1996-2004, due to boating.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-81.515754,27.664827]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Greenland',
            description: 'Due to the retracting of fossil fuels, ice caps are quickly melting, causing sea levels to rise dramatically, resulting in coastal flooding.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [-42.604303,71.706936]
        }
    },{
        type: 'Feature',
        properties: {
            title: 'Singapore',
            description: 'Seasonal smoke from neighboring islands brings immense amounts of haze to environment. Haze is a major contributor to lung cancer.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [103.819836,1.352083]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Philippines',
            description: 'Over the course of the 20th century the forest cover of the Philippines dropped from 70% to 20%.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [121.774017,12.879721]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Kenya',
            description: 'The damming of the Omo river by the Gilgel Gibe III Dam together with the plan to use 30% to 50% of the water for sugar plantations will cause up to 50% of the water capacity of Lake Turkana to be lost.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [37.906193,-0.023559]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Chad',
            description: 'Safe drinking water is available to 31% of urban dwellers and 26% of the rural population.',
            'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [18.732207,15.454166]
        }
    },
	{
        type: 'Feature',
        properties: {
            title: 'Italy',
            description: 'Italian cities produce more than 19.1 million tons of solid waste per year.',
			'marker-color': '#f86767',
            'marker-size': 'large',
            'marker-symbol': 'embassy',
        },
        geometry: {
            type: 'Point',
            coordinates: [12.567380,41.871940]
        }
    },
	
	
 ]   
};

myLayer.setGeoJSON(geojson); // Adds all of the points to the map

// Makes sure that map's initial zoom contains all of the points
//map.on('ready', function() {
 //   map.fitBounds(myLayer.getBounds());
//});

				