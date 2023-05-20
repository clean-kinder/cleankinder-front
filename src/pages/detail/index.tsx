import Modal from"../../components/Modal";
import React, { useState } from 'react';

export default function Detail():JSX.Element {


  return <div>
    <Modal 
      address='서울특별시 광진구 면목로5길 54'
      kinderName="응애 유치원"
      kinderType="공립"
      airDay="20220505"
      airResult="적합"
      washDay="20210606"
      washResult="실시"
      jodoDay="20230423"
      miniAir="20230312"
      water_1="O"
      water_2="_"
      water_3="_"
    />
  </div>;
}