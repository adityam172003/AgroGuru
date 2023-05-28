import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import {L, Icon} from 'leaflet';
import { RoutingControl , Routing} from 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../static/red.png'
import { useParams } from 'react-router-dom';

const RouteMap = () => {
  
  const {ltd ,lgt } =useParams();

  



  const mapRef = useRef();
  const [START_LAT, setStartLat] = useState('');
  const [START_LNG, setStartLng] = useState('');
  const [END_LAT, setEndLat] = useState(ltd);
  const [END_LNG, setEndLng] = useState(lgt);


  const customIcon = new Icon({
    iconUrl: markerIcon,
    // shadowUrl: markerShadow,
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {

    navigator.geolocation.getCurrentPosition( async function(position) {
       
       
      setStartLng(position.coords.longitude);
      console.log(position.coords.longitude,)
      setStartLat(position.coords.latitude);
    
  })


    const map = mapRef.current;

    const routingControl = () => L.Routing.control({
      waypoints: [
        L.latLng(START_LAT, START_LNG),
        L.latLng(END_LAT, END_LNG)
      ],
      lineOptions: {
        styles: [{ color: '#3388ff', weight: 6 }]
      },
      routeWhileDragging: true,
      router: L.Routing.graphHopper('bedd85b6-9b76-439e-9c3d-b274af778b8d', { serviceUrl: 'https://graphhopper.com/api/1' }),
    }).addTo(map);

    // return () => {
    //   map.removeControl(routingControl);
    // };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <MapContainer center={[18.5204, 73.8567]} zoom={12} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[START_LAT, START_LNG]} icon={customIcon}>
          <Popup>Start Marker</Popup>
        </Marker>
        <Marker position={[END_LAT, END_LNG]} icon={customIcon}>
          <Popup>End Marker</Popup>
        </Marker>
        <MapUpdater ref={mapRef} />
      </MapContainer>
    </div>
  );
};

// Custom component to re-render the map when necessary
const MapUpdater = React.forwardRef((_, ref) => {
  const map = useMap();

  useEffect(() => {
    if (ref.current) {
      ref.current = map;
    }
  }, [map]);

  return null;
});

export default RouteMap;
