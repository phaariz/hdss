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
        borderWidth: 1,
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

        // markers : [{
        //   latLng : [21.00, 78.00],
        //   name : 'Dengue : 35 Patients',
        // }, {
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
        // }],
        // series: {
        //   regions: [{
        //     values: {
        //       'US': 298,
        //       'SA': 200,
        //       'AU': 760,
        //       'IN': 200,
        //       'GB': 120,
        //     },
        //     scale: ['#03a9f3', '#02a7f1'],
        //     normalizeFunction: 'polynomial',
        //   }],
        // },
        hoverOpacity: null,
        normalizeFunction: 'linear',
        zoomOnScroll: false,
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        selectedRegion: null,
        enableZoom: true,
        showTooltip: true,
        hoverColor: '#c9dfaf',
      });
    }
  };

  vectorMapInit();
  $(window).resize(debounce(vectorMapInit, 150));
})();
