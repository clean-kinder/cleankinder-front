import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { CircleCheckIcon } from "./Icons"

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

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.NEXT_PUBLIC_GOOGEL_MAP_KEY}`)
      .then(response => response.json())
      .then(data => {
        const { lat, lng } = data.results[0].geometry.location;
        setLocation({ lat, lng });
      })
      .catch(error => console.error(error));
  }, [address]);

  return isOpen ? (
    <div ref={ref} className='p-3 bg-yellow-100 border-2 border-yellow-500 rounded-3xl'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={16}
        center={location}
      >
        <MarkerF position={location}/>
      </GoogleMap>
      <div className="h-64 p-1 p-3 m-0 bg-yellow-100 w-96">
        <ol>
          <li className='flex m-2'><CircleCheckIcon class='' /><strong>유치원명:&nbsp;</strong> {kinderName}</li>
          <li className='flex m-2'><CircleCheckIcon class='' /><strong>설립유형:&nbsp;</strong> {kinderType}</li>
          <li className='flex m-2'><CircleCheckIcon class='' /><strong>실내공기:&nbsp;</strong> {airDay} / {airResult}</li>
          <li className='flex m-2'><CircleCheckIcon class='' /><strong>정기소독:&nbsp;</strong> {washDay} / {washResult}</li>
          <li className='flex m-2'><CircleCheckIcon class='' /><strong>조도관리 검사일자:&nbsp;</strong> {jodoDay}</li>
          <li className='flex m-2'><CircleCheckIcon class='' /><strong>미세먼지 검사일자:&nbsp;</strong> {miniAir}</li>
          <li className='flex m-2'><CircleCheckIcon class='' /><strong>음용수 종류(생수/정수/상수도):</strong> ( {water_1} / {water_2} / {water_3} )</li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
  ) : null;
}

export default Modal;