// 5b3ce3597851110001cf6248c499a082e1ff4b6683f457510f62ef8e

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// const API_KEY = 'YOUR_OPENROUTESERVICE_API_KEY';

const RouteMap = () => {
  const mapContainerRef = useRef(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Send a request to OpenRouteService API to get the route
        const response = await axios.get(
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${`5b3ce3597851110001cf6248c499a082e1ff4b6683f457510f62ef8e`}&start=START_LAT,START_LNG&end=END_LAT,END_LNG`
        );

        // Extract the coordinates from the response
        const { features } = response.data.routes[0].geometry;
        const coordinates = features.map((feature) => feature.coordinates);

        // Set the route coordinates
        setRouteCoordinates(coordinates);
      } catch (error) {
        console.error('Error fetching route:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (mapContainerRef.current && routeCoordinates.length > 0) {
      // Initialize the map
      const map = new window.mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [18.5204, 73.8567],
        zoom: 10,
      });

      // Add the route layer to the map
      map.on('load', () => {
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: routeCoordinates,
            },
          },
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#888',
            'line-width': 6,
          },
        });
      });
    }
  }, [routeCoordinates]);

  return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' , position: 'relative'}} />;
};

export default RouteMap;
