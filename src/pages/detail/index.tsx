// import React, { useState } from 'react';
// import Modal from '../../components/Modal';
// import { LoadScript } from '@react-google-maps/api';
// import DetailModal from '@/components/DetailModal';

// export default function Detail(): JSX.Element {
  


//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleModalOpen = () => {
//     setIsModalOpen(true);
//   }

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   }

//   return (
//     <LoadScript
//       id="script-loader"
//       googleMapsApiKey="AIzaSyDUbTCj82I9-YfIb1OB8WO0lZzCYv5lugo"
//     >
//       <button onClick={handleModalOpen}>모달 열기</button>
//       {isModalOpen && (
//         <div style={{
//           position: 'fixed',
//           zIndex: 1,
//           left: 0,
//           top: 0,
//           width: '100%',
//           height: '100%',
//           overflow: 'auto',
//           display: 'flex',
//           justifyContent: 'flex-end',
//           animation: 'slide-in 0.5s forwards'
//         }}>
//           <div style={{
//             marginTop: '64px'
//           }}>
//             <Modal
//               isOpen={isModalOpen} 
//               onClose={handleModalClose}
//               address='서울특별시 광진구 면목로5길 54'
//               kinderName="응애 유치원"
//               kinderType="공립"
//               airDay="20220505"
//               airResult="적합"
//               washDay="20210606"
//               washResult="실시"
//               jodoDay="20230423"
//               miniAir="20230312"
//               water_1="O"
//               water_2="_"
//               water_3="_"
//             />
//           </div>
//         </div>
//       )}
//     </LoadScript>
//   );
// };

