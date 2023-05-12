
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapComponentProps {
  accessToken: string;
  markers: { lat: number; lng: number; address: string }[];
  
}

const DetailMap: React.FC<MapComponentProps> = ({ accessToken, markers }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiZW1wdHloZWFkIiwiYSI6ImNsaDdyZWgwcjAxZDIza2xvYWFpNWJqb3MifQ.a6Z-GofqDk1-4NYTGx6FbQ";

    if (mapContainer.current) {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [markers[0].lng, markers[0].lat],
          zoom: 12,
        });
    
        markers.forEach((marker) => {
          const el = document.createElement('div');
          el.className = 'marker';
          new mapboxgl.Marker(el)
            .setLngLat([marker.lng, marker.lat])
            .setPopup(new mapboxgl.Popup().setHTML(marker.address))
            .addTo(map);
        });
    
        return () => map.remove();
      }
    }, [accessToken, markers]);

  return <div ref={mapContainer} style={{ height: '400px' }} />;
};

export default DetailMap;
