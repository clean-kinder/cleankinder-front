import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  // kinder: {
  //   ADDR: string;
  //   lng: number;
  //   lat: number;
  // };
  children: React.ReactNode;
};

const DetailModal = ({ isOpen, onClose, children }: ModalProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="p-1 border-2 rounded-2xl modal modal_border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              onClick={onClose}
              className="float-right w-6 h-6 cursor-pointer modal-close-button"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            {/* <div className="map-container" ref={mapContainerRef}></div> */}
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
