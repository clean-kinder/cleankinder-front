import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

interface MapProps {
  address: string;
  kinderName: string;
  kinderType: string;
  airDay: string;
  airResult: string;
  washDay: string;
  washResult: string;
  jodoDay: string;
  miniAir: string;
  water_1: string;
  water_2: string;
  water_3: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<MapProps> = ({ address, kinderName, kinderType, airDay, airResult, washDay, washResult, jodoDay, miniAir, water_1, water_2, water_3, isOpen, onClose }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const mapStyles = {        
    height: "250px",
    width: "384px"
  };

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyDUbTCj82I9-YfIb1OB8WO0lZzCYv5lugo`)
      .then(response => response.json())
      .then(data => {
        const { lat, lng } = data.results[0].geometry.location;
        setLocation({ lat, lng });
      })
      .catch(error => console.error(error));
  }, [address]);

  return (
    <div className='border-2 border-yellow-500 rounded-3xl p-2 pt-0 pb-2 bg-yellow-100'>
      <button onClick={onClose} className='ml-2 font-semibold'>X</button>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={location}
      >
        <MarkerF position={location}/>
      </GoogleMap>
      <div className="p-1 m-0 w-96 h-64 p-3 bg-yellow-100">
        <ol className='font-semibold'>
          <li className='m-2'>유치원명 : {kinderName}</li>
          <li className='m-2'>설립유형 : {kinderType}</li>
          <li className='m-2'>실내공기 : {airDay} / {airResult}</li>
          <li className='m-2'>정기소독 : {washDay} / {washResult}</li>
          <li className='m-2'>조도관리 검사일자 : {jodoDay}</li>
          <li className='m-2'>미세먼지 검사일자 : {miniAir}</li>
          <li className='m-2'>음용수 종류 (생수/정수/상수도) : ( {water_1} / {water_2} / {water_3} )</li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  );
}

export default Modal;