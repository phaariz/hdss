import * as $ from 'jquery';
import 'jvectormap';
import 'jvectormap/jquery-jvectormap.css';
// import './jquery-jvectormap-world-mill.js';
import './maldives_map.js';
import { debounce } from 'lodash';

export default (function () {
  const vectorMapInit = () => {
    if ($('#world-map-marker').length > 0) {
      // This is a hack, as the .empty() did not do the work
      $('#vmap').remove();

      // we recreate (after removing it) the container div, to reset all the data of the map
      $('#world-map-marker').append(`
        <div
          id="vmap"
          style="
            height: 400px;
            position: relative;
            overflow: hidden;
            background-color: transparent;
          "
        >
        </div>
      `);

      $('#vmap').vectorMap({
        map: 'maldives',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderOpacity: 0.25,
        borderWidth: 0,
        color: '#e6e6e6',
        regionStyle : {
          initial : {
            fill : '#e4ecef',
          },
        },

        markerStyle: {
          initial: {
            r: 7,
            'fill': '#fff',
            'fill-opacity':1,
            'stroke': '#000',
            'stroke-width' : 2,
            'stroke-opacity': 0.4,
          },
        },

<<<<<<< HEAD
      //   markers : [{
      //     coords: [60, 110],
      //     name: 'Escalator 1',
      //     style: {fill: 'yellow'}
      //    }, 
      //   // {
      //   //   latLng : [-33.00, 151.00],
      //   //   name : 'Australia : 250',
      //   // }, {
      //   //   latLng : [36.77, -119.41],
      //   //   name : 'USA : 250',
      //   // }, {
      //   //   latLng : [55.37, -3.41],
      //   //   name : 'UK   : 250',
      //   // }, {
      //   //   latLng : [25.20, 55.27],
      //   //   name : 'UAE : 250',
      //   //}
      // ],
=======
        markers : [{
          latLng : [21.00, -78.00],
          name : 'INDIA : 350',
        }, 
        // {
        //   latLng : [-33.00, 151.00],
        //   name : 'Dyphtheria : 20 Patients',
        // }, {
        //   latLng : [36.77, -119.41],
        //   name : 'Common Cold : 3 Patients',
        // }, {
        //   latLng : [55.37, -3.41],
        //   name : 'UK   : 250',
        // }, {
        //   latLng : [25.20, 55.27],
        //   name : 'UAE : 250',
        //}
      ],
>>>>>>> b44d2c51736744d0de46c40fc98ce4ee9ed0f1cb
        series: {
          regions: [{
            values: {
              'AA': 298,
              'ADh': 200,
<<<<<<< HEAD
              'HDh': 760,
              'HA': 200,
              'Sh' : 100,
              'N' : 400,
              'R': 120,
              'B' : 500,
              'Lh' : 300,
              'K' : 400,
              'AA' : 650,
              'Adh' : 900,
              'V' : 300,
              'M' : 500,
              'F': 690,
              'Dh': 1030,
              'Th': 800,
              'L': 630,
              'GA' : 350,
              'GDh' : 570,
              'Gn' : 720,
              'S' : 350
=======
           //   'AU': 760,
            //  'IN': 200,
            //  'GB': 120,
>>>>>>> b44d2c51736744d0de46c40fc98ce4ee9ed0f1cb
            },
            scale: ['#03a9f3', '#02a7f1'],
            normalizeFunction: 'polynomial',
          }],
        },
        
        hoverOpacity: null,
        normalizeFunction: 'linear',
        zoomOnScroll: false,
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        enableZoom: false,
        hoverColor: '#fff',
      });
    }
  };

  vectorMapInit();
  $(window).resize(debounce(vectorMapInit, 150));
})();
